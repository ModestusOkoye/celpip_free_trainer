import type { VocabWord } from '../types/content';

export const vocabWords: VocabWord[] = [
  // Workplace communication
  { id: 'vocab-001', term: 'touch base', category: 'workplace-communication', partOfSpeech: 'idiom', meaning: 'To make brief contact with someone, often to check in.', example: 'Let\u2019s touch base on Friday to see how the project is going.' },
  { id: 'vocab-002', term: 'circle back', category: 'workplace-communication', partOfSpeech: 'phrasal-verb', meaning: 'To return to a topic or task later.', example: 'We don\u2019t have time to discuss the budget now — let\u2019s circle back after lunch.' },
  { id: 'vocab-003', term: 'loop someone in', category: 'workplace-communication', partOfSpeech: 'idiom', meaning: 'To include someone in a conversation or update.', example: 'Can you loop in the marketing team on this email thread?' },
  { id: 'vocab-004', term: 'flag', category: 'workplace-communication', partOfSpeech: 'verb', meaning: 'To bring something to someone\u2019s attention, usually a concern.', example: 'I wanted to flag a potential issue with the delivery schedule.' },
  { id: 'vocab-005', term: 'bandwidth', category: 'workplace-communication', partOfSpeech: 'noun', meaning: 'The time or capacity a person has available to take on work.', example: 'I don\u2019t have the bandwidth to take on a new project this week.' },

  // Housing & rentals
  { id: 'vocab-006', term: 'lease', category: 'housing-rentals', partOfSpeech: 'noun', meaning: 'A legal contract between a tenant and landlord for renting a place.', example: 'Our lease runs for twelve months starting in September.' },
  { id: 'vocab-007', term: 'security deposit', category: 'housing-rentals', partOfSpeech: 'expression', meaning: 'Money paid upfront and held by a landlord in case of damage or unpaid rent.', example: 'The landlord asked for a security deposit equal to one month\u2019s rent.' },
  { id: 'vocab-008', term: 'utilities', category: 'housing-rentals', partOfSpeech: 'noun', meaning: 'Basic services like water, heat, and electricity provided to a home.', example: 'The rent includes utilities, so you won\u2019t get a separate electricity bill.' },
  { id: 'vocab-009', term: 'move-in inspection', category: 'housing-rentals', partOfSpeech: 'expression', meaning: 'A walkthrough of a rental unit, usually with a checklist, done when a tenant moves in.', example: 'During the move-in inspection, we noted a small scratch on the kitchen counter.' },
  { id: 'vocab-010', term: 'landlord', category: 'housing-rentals', partOfSpeech: 'noun', meaning: 'A person or company that owns a property and rents it to tenants.', example: 'Contact the landlord directly if the heating stops working.' },

  // Healthcare & appointments
  { id: 'vocab-011', term: 'walk-in clinic', category: 'healthcare-appointments', partOfSpeech: 'expression', meaning: 'A medical clinic that sees patients without a scheduled appointment.', example: 'Since the family doctor was fully booked, she went to a walk-in clinic instead.' },
  { id: 'vocab-012', term: 'referral', category: 'healthcare-appointments', partOfSpeech: 'noun', meaning: 'A written recommendation from one doctor for a patient to see a specialist.', example: 'You\u2019ll need a referral from your family doctor before seeing the dermatologist.' },
  { id: 'vocab-013', term: 'reschedule', category: 'healthcare-appointments', partOfSpeech: 'verb', meaning: 'To change an appointment to a different date or time.', example: 'I had to reschedule my appointment because of a work conflict.' },
  { id: 'vocab-014', term: 'follow-up appointment', category: 'healthcare-appointments', partOfSpeech: 'expression', meaning: 'A second appointment booked to check on progress after treatment.', example: 'The doctor booked a follow-up appointment for three weeks later.' },
  { id: 'vocab-015', term: 'no-show', category: 'healthcare-appointments', partOfSpeech: 'noun', meaning: 'A person who misses a scheduled appointment without cancelling.', example: 'The clinic charges a fee for a no-show without 24 hours\u2019 notice.' },

  // Banking & billing
  { id: 'vocab-016', term: 'overdraft', category: 'banking-billing', partOfSpeech: 'noun', meaning: 'When you spend more money than is in your account, going below zero.', example: 'She was charged a fee after her account went into overdraft.' },
  { id: 'vocab-017', term: 'pre-authorized debit', category: 'banking-billing', partOfSpeech: 'expression', meaning: 'An automatic payment taken directly from your bank account on a set date.', example: 'My rent is paid by pre-authorized debit on the first of each month.' },
  { id: 'vocab-018', term: 'outstanding balance', category: 'banking-billing', partOfSpeech: 'expression', meaning: 'The amount of money still owed on an account or bill.', example: 'There is an outstanding balance of $45 on your account from last month.' },
  { id: 'vocab-019', term: 'grace period', category: 'banking-billing', partOfSpeech: 'expression', meaning: 'A short extra amount of time allowed to pay a bill without a penalty.', example: 'You have a 10-day grace period before a late fee is added.' },
  { id: 'vocab-020', term: 'statement', category: 'banking-billing', partOfSpeech: 'noun', meaning: 'A summary document listing all transactions on an account over a period.', example: 'Check your monthly statement to make sure all charges are correct.' },

  // Public transportation
  { id: 'vocab-021', term: 'transfer', category: 'public-transportation', partOfSpeech: 'noun', meaning: 'A ticket or pass that lets you change buses or trains without paying again.', example: 'Ask the driver for a transfer so you can switch to the connecting bus.' },
  { id: 'vocab-022', term: 'fare', category: 'public-transportation', partOfSpeech: 'noun', meaning: 'The price charged for a ride on public transit.', example: 'The bus fare increased by 25 cents this year.' },
  { id: 'vocab-023', term: 'peak hours', category: 'public-transportation', partOfSpeech: 'expression', meaning: 'The busiest times of day, when transit is more crowded and frequent.', example: 'Trains run every 5 minutes during peak hours.' },
  { id: 'vocab-024', term: 'platform', category: 'public-transportation', partOfSpeech: 'noun', meaning: 'The area where passengers wait to board a train or subway.', example: 'The next train to downtown departs from platform 2.' },
  { id: 'vocab-025', term: 'detour', category: 'public-transportation', partOfSpeech: 'noun', meaning: 'A temporary change in route, often due to construction or closures.', example: 'There\u2019s a detour on Route 12 this weekend because of road work.' },

  // School & training
  { id: 'vocab-026', term: 'syllabus', category: 'school-training', partOfSpeech: 'noun', meaning: 'A document outlining what will be taught and how a course is graded.', example: 'The syllabus lists all assignment due dates for the semester.' },
  { id: 'vocab-027', term: 'transcript', category: 'school-training', partOfSpeech: 'noun', meaning: 'An official record of a student\u2019s courses and grades.', example: 'You\u2019ll need to request an official transcript for the application.' },
  { id: 'vocab-028', term: 'prerequisite', category: 'school-training', partOfSpeech: 'noun', meaning: 'A course or requirement that must be completed before taking another one.', example: 'Introductory Statistics is a prerequisite for this data analysis course.' },
  { id: 'vocab-029', term: 'orientation', category: 'school-training', partOfSpeech: 'noun', meaning: 'An introductory session for new students or employees.', example: 'New students attend orientation the week before classes begin.' },
  { id: 'vocab-030', term: 'extracurricular', category: 'school-training', partOfSpeech: 'adjective', meaning: 'Outside of regular academic classes, often a club or sport.', example: 'She joined the debate club as an extracurricular activity.' },

  // Government / community services
  { id: 'vocab-031', term: 'eligibility', category: 'government-community', partOfSpeech: 'noun', meaning: 'Whether someone qualifies for a program or benefit based on set rules.', example: 'Eligibility for the subsidy depends on household income.' },
  { id: 'vocab-032', term: 'applicant', category: 'government-community', partOfSpeech: 'noun', meaning: 'A person who formally applies for something, such as a program or job.', example: 'All applicants must submit proof of address.' },
  { id: 'vocab-033', term: 'subsidy', category: 'government-community', partOfSpeech: 'noun', meaning: 'Financial assistance given by a government to reduce a cost.', example: 'The childcare subsidy covers part of the monthly daycare fee.' },
  { id: 'vocab-034', term: 'caseworker', category: 'government-community', partOfSpeech: 'noun', meaning: 'A government or agency employee assigned to help an individual with their file.', example: 'Your caseworker will contact you once your application is reviewed.' },
  { id: 'vocab-035', term: 'in-person', category: 'government-community', partOfSpeech: 'adjective', meaning: 'Done face-to-face rather than online or by phone.', example: 'The form can be submitted online or in-person at the city office.' },

  // Scheduling & availability
  { id: 'vocab-036', term: 'availability', category: 'scheduling-availability', partOfSpeech: 'noun', meaning: 'The times someone is free or able to do something.', example: 'Please send me your availability for next week\u2019s meeting.' },
  { id: 'vocab-037', term: 'tentative', category: 'scheduling-availability', partOfSpeech: 'adjective', meaning: 'Not fully confirmed; possibly subject to change.', example: 'We have a tentative date for the event, but it isn\u2019t finalized yet.' },
  { id: 'vocab-038', term: 'scheduling conflict', category: 'scheduling-availability', partOfSpeech: 'expression', meaning: 'A situation where two events are planned for the same time.', example: 'I have a scheduling conflict, so I can\u2019t attend both meetings.' },
  { id: 'vocab-039', term: 'RSVP', category: 'scheduling-availability', partOfSpeech: 'verb', meaning: 'To confirm whether you will attend an event.', example: 'Please RSVP by Friday so we know how many seats to set up.' },
  { id: 'vocab-040', term: 'block off', category: 'scheduling-availability', partOfSpeech: 'phrasal-verb', meaning: 'To reserve a period of time so nothing else can be scheduled then.', example: 'I\u2019ve blocked off Thursday afternoon to finish the report.' },

  // Complaints & requests
  { id: 'vocab-041', term: 'file a complaint', category: 'complaints-requests', partOfSpeech: 'expression', meaning: 'To formally report a problem to an organization or authority.', example: 'She filed a complaint with the building management about the noise.' },
  { id: 'vocab-042', term: 'escalate', category: 'complaints-requests', partOfSpeech: 'verb', meaning: 'To raise an issue to a higher level of authority for a faster or stronger response.', example: 'If the issue isn\u2019t resolved this week, I\u2019ll escalate it to the manager.' },
  { id: 'vocab-043', term: 'follow through', category: 'complaints-requests', partOfSpeech: 'phrasal-verb', meaning: 'To complete an action that was promised or started.', example: 'They said they would call back, but they never followed through.' },
  { id: 'vocab-044', term: 'address the issue', category: 'complaints-requests', partOfSpeech: 'expression', meaning: 'To deal with or fix a problem.', example: 'The company promised to address the issue within five business days.' },
  { id: 'vocab-045', term: 'compensation', category: 'complaints-requests', partOfSpeech: 'noun', meaning: 'Money or another benefit given to make up for a loss or inconvenience.', example: 'The airline offered compensation for the delayed flight.' },

  // Policies & rules
  { id: 'vocab-046', term: 'mandatory', category: 'policies-rules', partOfSpeech: 'adjective', meaning: 'Required; not optional.', example: 'Attendance at the safety training session is mandatory for all new staff.' },
  { id: 'vocab-047', term: 'exempt', category: 'policies-rules', partOfSpeech: 'adjective', meaning: 'Not required to follow a particular rule that applies to others.', example: 'Employees who already completed the course are exempt from retaking it.' },
  { id: 'vocab-048', term: 'comply with', category: 'policies-rules', partOfSpeech: 'phrasal-verb', meaning: 'To follow or obey a rule or law.', example: 'All tenants must comply with the building\u2019s quiet hours policy.' },
  { id: 'vocab-049', term: 'violation', category: 'policies-rules', partOfSpeech: 'noun', meaning: 'An action that breaks a rule or law.', example: 'Parking in a fire lane is considered a violation and may result in a fine.' },
  { id: 'vocab-050', term: 'effective immediately', category: 'policies-rules', partOfSpeech: 'expression', meaning: 'Starting right away, with no delay.', example: 'The new dress code policy is effective immediately.' },
];
