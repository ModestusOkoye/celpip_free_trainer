import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen, within, cleanup, fireEvent } from '@testing-library/react';
import App from '../App';

beforeEach(() => {
  localStorage.clear();
  vi.spyOn(window, 'confirm').mockReturnValue(true);
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

function clickSidebarNav(label: string) {
  const nav = screen.getByRole('navigation');
  fireEvent.click(within(nav).getByText(label));
}

/** Answers every standalone QuestionCard currently on screen one at a time, clicking Next/Submit after each, until the results screen appears (detected by the "Continue" button). */
function completeStandaloneSection() {
  let guard = 0;
  while (!screen.queryByText('Continue') && guard < 30) {
    const options = screen.queryAllByTestId('qcard-option');
    if (options.length === 0) break;
    fireEvent.click(options[0]);
    fireEvent.click(screen.getByTestId('runner-next'));
    guard++;
  }
}

/** Fills every inline dropdown blank currently on screen (native <select> elements, exposed as role="combobox"), then submits. Used for sections with zero standalone questions, like Diagram. */
function completeInlineOnlySection() {
  const selects = screen.getAllByRole('combobox') as HTMLSelectElement[];
  selects.forEach((select) => {
    fireEvent.change(select, { target: { value: '0' } });
  });
  fireEvent.click(screen.getByTestId('runner-next'));
}

describe('App smoke test', () => {
  it('renders the home page with no crash', () => {
    render(<App />);
    expect(screen.getByText('CELPIP Reading Trainer')).toBeInTheDocument();
    expect(screen.getByText('Sets completed')).toBeInTheDocument();
  });

  it('completes a full Study Mode correspondence run end-to-end and saves progress', () => {
    render(<App />);

    clickSidebarNav('Practice by Section');
    expect(screen.getByRole('heading', { name: 'Practice by Section' })).toBeInTheDocument();

    // Correspondence is the default active tab; pick the first seeded set.
    fireEvent.click(screen.getByText('Returning a Borrowed Camping Trailer'));
    fireEvent.click(screen.getByText('Study Mode'));

    // We should now be inside the runner, seeing Message 1's content.
    expect(screen.getByText(/settling in nicely/)).toBeInTheDocument();

    // Answer all 6 standalone questions (correspondence has 6 mcq + 5 inline blanks).
    completeStandaloneSection();

    // Results screen should now show a correct/total summary like "3/11".
    expect(screen.getByText(/\/11$/)).toBeInTheDocument();

    // Continue back out of the runner.
    fireEvent.click(screen.getByText('Continue'));
    expect(screen.getByRole('heading', { name: 'Practice by Section' })).toBeInTheDocument();

    // Progress should now be persisted to localStorage with one attempt.
    const saved = JSON.parse(localStorage.getItem('celpip-trainer-progress-v1') ?? '{}');
    expect(saved.attempts).toHaveLength(1);
    expect(saved.attempts[0].setId).toBe('corr-001');
    expect(saved.attempts[0].totalCount).toBe(11);

    // Dashboard should render the new data without crashing.
    clickSidebarNav('Dashboard');
    expect(screen.getByText('Sets completed')).toBeInTheDocument();
  });

  it('completes a vocabulary quiz end-to-end and saves a vocab quiz result', () => {
    render(<App />);
    clickSidebarNav('Vocabulary');
    fireEvent.click(screen.getByText('Start a Quiz'));
    fireEvent.click(screen.getByText('Start'));

    // 10 questions per quiz by default.
    for (let i = 0; i < 10; i++) {
      const options = screen.getAllByTestId('vocab-option');
      fireEvent.click(options[0]);
      fireEvent.click(screen.getByTestId('vocab-next'));
    }

    expect(screen.getByText('Quiz Results')).toBeInTheDocument();
    const saved = JSON.parse(localStorage.getItem('celpip-trainer-progress-v1') ?? '{}');
    expect(saved.vocabQuizzes).toHaveLength(1);
    expect(saved.vocabQuizzes[0].totalCount).toBe(10);
  });

  it('runs an Exam Mode diagram set (all-inline blanks, no standalone questions) end-to-end', () => {
    render(<App />);
    clickSidebarNav('Practice by Section');
    fireEvent.click(screen.getByText('Diagram'));
    fireEvent.click(screen.getByText('Comparing Three Rental Buildings'));
    fireEvent.click(screen.getByText('Exam Mode'));

    expect(screen.getByText('Apartment Building Comparison')).toBeInTheDocument();

    // Diagram sets now have zero standalone questions — all 8 are inline
    // dropdown blanks embedded in the application message.
    completeInlineOnlySection();

    expect(screen.getByText(/\/8$/)).toBeInTheDocument();

    const saved = JSON.parse(localStorage.getItem('celpip-trainer-progress-v1') ?? '{}');
    expect(saved.attempts[0].setId).toBe('diag-002');
    expect(saved.attempts[0].totalCount).toBe(8);
  });

  it('preserves the selected Practice Hub section after exiting a run (navigation bug fix)', () => {
    render(<App />);
    clickSidebarNav('Practice by Section');

    // Switch off the default Correspondence tab onto Viewpoints.
    fireEvent.click(screen.getByText('Viewpoints'));
    expect(screen.getByText('Unsung Heroes of Action Films: The Importance of Stunt Performers')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Unsung Heroes of Action Films: The Importance of Stunt Performers'));
    fireEvent.click(screen.getByText('Study Mode'));

    // Exit immediately without finishing.
    fireEvent.click(screen.getByText('Exit'));

    // Should land back on Practice Hub with Viewpoints still the active tab —
    // not reset to Correspondence.
    expect(screen.getByRole('heading', { name: 'Practice by Section' })).toBeInTheDocument();
    expect(screen.getByText('Unsung Heroes of Action Films: The Importance of Stunt Performers')).toBeInTheDocument();
    expect(screen.queryByText('Heating Repair Follow-Up')).not.toBeInTheDocument();
  });

  it('runs the full simulation through all 5 sections and saves an aggregated SimulationRecord', () => {
    render(<App />);
    clickSidebarNav('Full Simulation');
    fireEvent.click(screen.getByText('Start Simulation'));

    // practiceTask=1 standalone, correspondence=6 standalone, diagram=0
    // standalone (8 inline), information=9 standalone, viewpoints=7 standalone
    completeStandaloneSection(); // practiceTask
    fireEvent.click(screen.getByText('Continue'));

    completeStandaloneSection(); // correspondence
    fireEvent.click(screen.getByText('Continue'));

    completeInlineOnlySection(); // diagram
    fireEvent.click(screen.getByText('Continue'));

    completeStandaloneSection(); // information
    fireEvent.click(screen.getByText('Continue'));

    completeStandaloneSection(); // viewpoints
    fireEvent.click(screen.getByText('Continue'));

    expect(screen.getByText('Simulation Complete')).toBeInTheDocument();

    const saved = JSON.parse(localStorage.getItem('celpip-trainer-progress-v1') ?? '{}');
    expect(saved.simulations).toHaveLength(1);
    expect(saved.simulations[0].sectionAttempts).toHaveLength(5);
    // Scored total excludes the practiceTask warm-up: 11 + 8 + 9 + 10 = 38
    expect(saved.simulations[0].totalQuestions).toBe(38);
  });
});
