import type { ViewpointSet } from '../types/content';

export const viewpointSets: ViewpointSet[] = [
  {
    id: 'view-001',
    sectionType: 'viewpoints',
    title: 'Unsung Heroes of Action Films: The Importance of Stunt Performers',
    difficulty: 'advanced',
    tags: ['entertainment', 'labour', 'opinion'],
    article: {
      title: 'Unsung Heroes of Action Films: The Importance of Stunt Performers',
      body: `When veteran stunt coordinator Marcus Chen orchestrated a seventeen-story free fall for last summer's blockbuster "Inferno Protocol," audiences attributed the breathtaking sequence to the film's lead actor, oblivious to the anonymous professional who had actually plummeted toward the pavement. This pervasive invisibility, endemic to an industry that paradoxically depends upon physical virtuosity while systematically obscuring its practitioners, has ignited renewed discourse regarding the recognition stunt performers deserve.

According to a 2023 survey conducted by the Stunt Performers Association, approximately 78 percent of moviegoers erroneously believe that leading actors execute their own dangerous sequences, a misconception that stunt performer Daniela Vega finds both professionally diminishing and personally disheartening. "We dedicate decades to perfecting combat choreography, precision driving, and aerial maneuvers, yet our contributions remain deliberately invisible," Vega observes. "The industry profits enormously from spectacle we create while actively concealing our involvement."

Film historian Dr. Raymond Okonkwo contextualizes this erasure within broader entertainment economics, noting that studios invest substantially in cultivating star personas that would be undermined by acknowledging body doubles. "The illusion of celebrity athleticism constitutes a marketable commodity," Okonkwo explains. "Revealing that beloved actors rarely perform perilous sequences threatens audience suspension of disbelief and, consequently, box office returns."

Nevertheless, prominent directors have increasingly advocated for institutional acknowledgment. Acclaimed filmmaker Sophia Brennan, whose recent action trilogy garnered critical praise, contends that the Academy of Motion Picture Arts and Sciences ought to establish a dedicated category honoring stunt coordination. "These artists routinely sustain career-ending injuries while executing sequences that generate billions in revenue," Brennan asserts. "Their exclusion from formal recognition ceremonies perpetuates an unconscionable disparity between contribution and compensation."

Industry resistance, however, remains formidable. Studio executive Jonathan Hargrove maintains that existing categories adequately accommodate stunt work within broader technical designations. Vega remains skeptical of such justifications, suggesting they merely rationalize institutional inertia. "When someone fractures vertebrae bringing a director's vision to fruition, administrative convenience seems an inadequate explanation for their subsequent anonymity."`,
    },
    comments: [
      {
        author: 'A reader',
        body: `This article addresses a genuinely {{view-001-q8}} matter within Hollywood. While Dr. Okonkwo's economic analysis provides illuminating context, I find Sophia Brennan's position far more compelling — that notion that professionals can sustain career-ending injuries yet remain {{view-001-q9}} by institutions profiting immensely from their work strikes me as indefensible. Hargrove's argument that existing categories are adequate seems like exactly the kind of administrative convenience Vega {{view-001-q10}}.`,
      },
    ],
    questions: [
      {
        id: 'view-001-q1',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'The article primarily addresses ___',
        options: [
          'the recognition gap facing stunt performers despite their essential contribution to filmmaking',
          'how stunt performers are trained for dangerous sequences',
          'a recent on-set injury suffered by Marcus Chen',
          'the history of the Academy of Motion Picture Arts and Sciences',
        ],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'The article centers on stunt performers\u2019 "pervasive invisibility" and the "renewed discourse regarding the recognition stunt performers deserve."',
      },
      {
        id: 'view-001-q2',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'Dr. Okonkwo implies that studios resist crediting stunt performers because ___',
        options: [
          'acknowledging body doubles would undermine the star personas studios have invested in building',
          'stunt performers prefer to remain anonymous',
          'there is no formal way to credit stunt work in film',
          'audiences are not interested in who performs stunts',
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'Okonkwo states "the illusion of celebrity athleticism constitutes a marketable commodity" and that revealing body doubles "threatens audience suspension of disbelief," implying studios resist crediting stunt work to protect star personas and box office returns.',
      },
      {
        id: 'view-001-q3',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "What best characterizes Daniela Vega's attitude toward the film industry?",
        options: [
          'She feels the industry profits from stunt work while deliberately concealing the people who do it',
          'She believes the industry treats stunt performers fairly',
          'She is indifferent to whether stunt performers receive credit',
          'She believes only directors deserve more recognition',
        ],
        correctIndex: 0,
        skill: 'viewpoint-opinion',
        explanation: 'Vega says "the industry profits enormously from spectacle we create while actively concealing our involvement."',
      },
      {
        id: 'view-001-q4',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'Sophia Brennan and Jonathan Hargrove would most likely disagree about whether ___',
        options: [
          'stunt coordination deserves its own dedicated recognition category',
          'stunt performers should be paid at all',
          'action films should continue to be made',
          'studios should hire more stunt coordinators',
        ],
        correctIndex: 0,
        skill: 'viewpoint-opinion',
        explanation: 'Brennan argues the Academy "ought to establish a dedicated category honoring stunt coordination," while Hargrove maintains "existing categories adequately accommodate stunt work" — a direct disagreement.',
      },
      {
        id: 'view-001-q5',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'The article suggests that the invisibility of stunt performers is ___',
        options: [
          'a deliberate industry practice tied to economic incentives, not an accident',
          'a recent development with no clear cause',
          'something stunt performers themselves have always preferred',
          'unrelated to how studios market their films',
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'The article links the invisibility directly to "broader entertainment economics" and studios protecting marketable star personas — a deliberate, economically-motivated pattern, not an accident.',
      },
      {
        id: 'view-001-q6',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "According to the survey cited in the article, most moviegoers believe that ___",
        options: [
          'leading actors perform their own dangerous stunt sequences',
          'stunt performers are paid more than actors',
          'most action sequences are computer-generated',
          'stunt coordinators direct the films they work on',
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article states "approximately 78 percent of moviegoers erroneously believe that leading actors execute their own dangerous sequences."',
      },
      {
        id: 'view-001-q7',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "Jonathan Hargrove's position in the article is best described as ___",
        options: [
          'defending the current system as already sufficient for stunt performers',
          'actively campaigning for a new stunt recognition category',
          'agreeing with Vega that recognition is overdue',
          'proposing a compromise between studios and performers',
        ],
        correctIndex: 0,
        skill: 'tone-purpose',
        explanation: 'Hargrove "maintains that existing categories adequately accommodate stunt work," defending the status quo rather than proposing change.',
      },
      {
        id: 'view-001-q8',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'This article addresses a genuinely ___ matter within Hollywood.',
        options: ['pressing', 'forgettable', 'fictional', 'irrelevant'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'Given the rest of the comment treats this as a serious, compelling issue, "pressing" (urgent and significant) fits the tone, unlike "forgettable" or "irrelevant."',
      },
      {
        id: 'view-001-q9',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'Professionals can sustain career-ending injuries yet remain ___ by institutions profiting from their work.',
        options: ['unrecognized', 'celebrated', 'compensated', 'employed'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: 'The comment is criticizing a lack of recognition, so "unrecognized" fits the critical tone — the opposite of "celebrated" or fairly "compensated."',
      },
      {
        id: 'view-001-q10',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: "Hargrove's argument seems like exactly the kind of administrative convenience Vega ___.",
        options: ['warns against', 'fully supports', 'has never mentioned', 'personally benefits from'],
        correctIndex: 0,
        skill: 'paraphrase-recognition',
        explanation: 'In the article, Vega says "administrative convenience seems an inadequate explanation," meaning she is skeptical of and warns against this justification — the comment\u2019s author is agreeing with that exact criticism.',
      },
    ],
  },

  {
    id: 'view-002',
    sectionType: 'viewpoints',
    title: 'Working From Home: Freedom or Isolation?',
    difficulty: 'intermediate',
    tags: ['workplace', 'opinion'],
    article: {
      title: 'Two Years Remote: What I Actually Learned',
      author: 'Marcus Tate, guest columnist',
      body: `When my company went fully remote two years ago, I assumed I'd struggle without the structure of an office. Instead, I found something closer to the opposite: more focus, fewer interruptions, and far more control over my day.

That said, I won't pretend it's been entirely positive. The biggest cost has been a quieter kind of connection — the conversations that used to happen walking to a meeting room or grabbing coffee. Video calls are efficient, but they rarely replace the small moments where you actually get to know a colleague.

My team has tried to address this by scheduling occasional in-person meetups every few months, and honestly, those have helped more than I expected. A single day together seems to carry us through months of otherwise screen-based collaboration.

I don't think remote work is universally better or worse than office work; it depends heavily on the type of role, the person, and how intentional a team is about staying connected. What I'm confident about is that the all-or-nothing debate, fully remote versus fully in-office, misses the point. The real question is what specific habits make either arrangement actually work.`,
    },
    comments: [
      {
        author: 'A reader',
        body: `I think Marcus is being a bit {{view-002-q8}} about how universal his experience is. My own team tried something similar, and I'd say it depends a lot on the role — for people doing highly collaborative creative work, video calls really are {{view-002-q9}} as in-person conversation, no matter how many quarterly meetups you add. Still, his point about the all-or-nothing framing being unhelpful is one I find {{view-002-q10}}.`,
      },
    ],
    questions: [
      {
        id: 'view-002-q1',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "Marcus Tate's overall view on remote work, based on his two years of experience, is best summarized as ___",
        options: [
          'it has clear benefits but also a real cost to relationship-building',
          'it has been entirely negative',
          'it is identical to working in an office',
          'it only works well for senior employees',
        ],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'He describes gaining focus and control, but admits "the biggest cost has been a quieter kind of connection."',
      },
      {
        id: 'view-002-q2',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "What has Marcus's team done to address the loss of in-person connection?",
        options: [
          'Scheduled occasional in-person meetups',
          'Returned to the office full-time',
          'Banned video calls entirely',
          'Hired a dedicated team-building consultant',
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'He mentions the team has tried "scheduling occasional in-person meetups every few months."',
      },
      {
        id: 'view-002-q3',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "Marcus's main point in the final paragraph is that ___",
        options: [
          'the fully-remote-versus-fully-office debate misses the real question of what habits make either arrangement work',
          'remote work is always better than office work',
          'office work is always better than remote work',
          'companies should let employees choose freely with no guidance at all',
        ],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'He states the "all-or-nothing debate...misses the point" and that the real question is about specific habits.',
      },
      {
        id: 'view-002-q4',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "What can be inferred about Marcus's expectations before going remote?",
        options: [
          'He expected to struggle without office structure',
          'He expected to thrive immediately',
          'He had no expectations either way',
          'He expected his company to fail within the year',
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'He opens by saying he "assumed I\u2019d struggle without the structure of an office," which was not what happened.',
      },
      {
        id: 'view-002-q5',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "Marcus's tone when describing the loss of office small talk is best described as ___",
        options: ['reflective and honest about a real downside', 'angry and resentful', 'dismissive of the concern', 'sarcastic'],
        correctIndex: 0,
        skill: 'tone-purpose',
        explanation: 'He openly acknowledges "I won\u2019t pretend it\u2019s been entirely positive," a reflective, honest tone rather than dismissive or angry.',
      },
      {
        id: 'view-002-q6',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "According to Marcus, what effect have the in-person meetups had?",
        options: [
          'They have helped more than he expected, carrying the team through months of remote collaboration',
          'They made almost no noticeable difference',
          'They caused more friction within the team',
          'They were cancelled after the first attempt',
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'He writes these meetups "have helped more than I expected" and "a single day together seems to carry us through months."',
      },
      {
        id: 'view-002-q7',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "Marcus's position on whether remote work is universally better than office work is that ___",
        options: [
          'it depends on the role, the person, and how intentional the team is',
          'remote work is always better, without exception',
          'office work is always better, without exception',
          'the question cannot be answered by anyone',
        ],
        correctIndex: 0,
        skill: 'viewpoint-opinion',
        explanation: 'He states plainly: "it depends heavily on the type of role, the person, and how intentional a team is about staying connected."',
      },
      {
        id: 'view-002-q8',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'I think Marcus is being a bit ___ about how universal his experience is.',
        options: ['optimistic', 'pessimistic', 'rude', 'angry'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'The comment is gently pushing back on Marcus generalizing a positive experience too broadly, so "optimistic" (overly positive) fits better than a negative word like "pessimistic" or "angry."',
      },
      {
        id: 'view-002-q9',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'For people doing highly collaborative creative work, video calls really are ___ as in-person conversation.',
        options: ['not as effective', 'just as effective', 'far more effective', 'completely unrelated to'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: 'The comment is arguing video calls fall short for certain roles, so "not as effective" matches the critical point being made, unlike "just as effective" which would support Marcus\u2019s view instead of qualifying it.',
      },
      {
        id: 'view-002-q10',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: "Marcus's point about the all-or-nothing framing being unhelpful is one I find ___.",
        options: ['fair', 'baseless', 'offensive', 'confusing'],
        correctIndex: 0,
        skill: 'paraphrase-recognition',
        explanation: 'The comment disagrees with part of the article but ends by agreeing with this specific point, so a positive word like "fair" fits, not a dismissive one like "baseless."',
      },
    ],
  },

  {
    id: 'view-003',
    sectionType: 'viewpoints',
    title: 'Should Elementary Schools Eliminate Homework?',
    difficulty: 'intermediate',
    tags: ['education', 'opinion'],
    article: {
      title: "It's Time to Rethink Homework for Young Children",
      author: 'Priya Chandrasekaran, parent and former teacher',
      body: `After teaching grade three for six years and now raising two children of my own, I've come to a conclusion that surprises some of my former colleagues: most homework given to elementary students does more harm than good.

The research on this is more consistent than people assume. Multiple studies have found little to no academic benefit from homework before middle school, while the downsides — family stress, reduced playtime, and bedtime battles — are well documented and easy to observe in any household with young kids.

I'm not arguing for zero structure at home. Reading together for twenty minutes before bed, a habit many families already have, teaches far more than a worksheet of repetitive math problems ever will. The issue isn't learning at home; it's homework as a default assignment handed out simply because that's what schools have always done.

Some teachers worry that without homework, parents will assume nothing is happening academically. That's a fair concern, but it points to a communication problem, not a reason to keep assigning busywork. A short weekly update on what a child is learning would serve families better than a stack of worksheets that mostly tests whether parents remembered to enforce it.`,
    },
    comments: [
      {
        author: 'A reader',
        body: `I appreciate this perspective, but I think it's a little {{view-003-q8}} to assume every school could realistically replace homework with regular personalized updates — most teachers are already stretched thin. That said, the research Priya cites about minimal academic benefit before middle school does seem fairly {{view-003-q9}}, so it's hard to dismiss outright. I'd still want to see how a no-homework policy plays out before fully {{view-003-q10}} it.`,
      },
    ],
    questions: [
      {
        id: 'view-003-q1',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "Priya Chandrasekaran's main argument is that ___",
        options: [
          'most homework given to elementary students does more harm than good',
          'homework should be increased for elementary students',
          'reading together is harmful to children',
          'teachers should be replaced by parents',
        ],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'She states directly that "most homework given to elementary students does more harm than good."',
      },
      {
        id: 'view-003-q2',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "According to the article, what do multiple studies show about homework before middle school?",
        options: [
          'It has little to no academic benefit',
          'It significantly improves test scores',
          'It is required for accreditation',
          'It only helps children in large families',
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article states studies "found little to no academic benefit from homework before middle school."',
      },
      {
        id: 'view-003-q3',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What alternative does the author suggest instead of homework as a default assignment?',
        options: [
          'A short weekly update on what a child is learning',
          'No communication with parents at all',
          'Daily phone calls to every parent',
          'Longer school days',
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The author proposes "a short weekly update on what a child is learning" as a better alternative.',
      },
      {
        id: 'view-003-q4',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "The author's attitude toward teachers who worry about losing visibility into student learning is that ___",
        options: [
          'it is a fair concern, but it points to a communication problem rather than a reason to keep homework',
          'their concern should be dismissed entirely',
          'homework should be kept specifically because of this concern',
          'this concern does not apply to elementary teachers',
        ],
        correctIndex: 0,
        skill: 'tone-purpose',
        explanation: 'She writes "that\u2019s a fair concern, but it points to a communication problem, not a reason to keep assigning busywork."',
      },
      {
        id: 'view-003-q5',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "What can be inferred about the author's view of reading together before bed?",
        options: [
          'She sees it as more valuable than typical worksheet homework',
          'She sees it as a waste of time',
          'She thinks it should be formally graded',
          'She believes it should replace school entirely',
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'She states this habit "teaches far more than a worksheet of repetitive math problems ever will."',
      },
      {
        id: 'view-003-q6',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "The author's professional background relevant to this topic is that she ___",
        options: ['taught grade three for six years and is now raising two children', 'works as a school principal', 'is a pediatric researcher', 'has no direct experience with elementary education'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article opens with "after teaching grade three for six years and now raising two children of my own."',
      },
      {
        id: 'view-003-q7',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "The downsides of homework the author lists include ___",
        options: ['family stress, reduced playtime, and bedtime battles', 'lower standardized test scores only', 'increased school funding costs', 'higher teacher turnover'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article lists the downsides as "family stress, reduced playtime, and bedtime battles."',
      },
      {
        id: 'view-003-q8',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: "I think it's a little ___ to assume every school could realistically replace homework with personalized updates.",
        options: ['optimistic', 'cautious', 'accurate', 'pessimistic'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'The comment is pushing back on the proposed alternative as unrealistic given how busy teachers are, so "optimistic" (too hopeful) fits, not "accurate" or "cautious."',
      },
      {
        id: 'view-003-q9',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'The research Priya cites about minimal academic benefit does seem fairly ___.',
        options: ['convincing', 'irrelevant', 'outdated', 'biased'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: 'The comment says this point is "hard to dismiss outright," meaning the research is "convincing," not "irrelevant" or "outdated."',
      },
      {
        id: 'view-003-q10',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: "I'd still want to see how a no-homework policy plays out before fully ___ it.",
        options: ['endorsing', 'rejecting', 'reading', 'writing'],
        correctIndex: 0,
        skill: 'paraphrase-recognition',
        explanation: 'The comment is cautiously supportive but wants more evidence first, so "endorsing" (fully supporting) fits the wait-and-see tone, not "rejecting."',
      },
    ],
  },

{
    id: 'view-004',
    sectionType: 'viewpoints',
    title: 'Should Cities Ban Gas-Powered Leaf Blowers?',
    difficulty: 'intermediate',
    tags: ['environment', 'municipal policy', 'opinion'],
    article: {
      title: 'The Case for Quieter, Cleaner Lawn Care',
      author: 'Holly Tran, environment columnist',
      body: `Drive through almost any suburban neighbourhood on a Saturday morning and you'll likely hear it: the high-pitched whine of a gas-powered leaf blower, often several at once. A growing number of cities are deciding enough is enough, and I think they're right to do so.

The environmental case is fairly straightforward. A typical gas leaf blower, with its small, inefficient two-stroke engine, can produce more smog-forming pollution in an hour of operation than a modern pickup truck driving hundreds of kilometres. Multiply that across an entire landscaping crew working all day, and the cumulative impact on local air quality becomes hard to ignore.

Noise is the other major concern, and it's not a minor one. These machines routinely exceed 85 decibels at close range, a level associated with hearing damage after prolonged exposure, a real occupational hazard for landscaping workers who use them for hours at a stretch, often without adequate hearing protection.

Some homeowners and landscaping companies argue that electric alternatives simply aren't powerful enough for commercial-scale work, particularly for clearing large properties or wet, heavy leaves. There's some truth to this for now, though battery technology has improved considerably in recent years, and several professional-grade electric models on the market today come close to matching gas-powered performance.

Cities that have implemented bans, including a handful in California and a few in Quebec, typically phase them in gradually, giving landscaping businesses time to transition equipment rather than banning gas blowers overnight. That seems like a reasonable approach: address a genuine public health and environmental issue while giving the affected industry room to adapt.`,
    },
    comments: [
      {
        author: 'A reader',
        body: `I run a small landscaping business, and I think this article is a bit {{view-004-q8}} about how expensive switching to electric equipment actually is for a crew like mine. A single commercial-grade electric blower with enough batteries to last a full day can cost three or four times what I'd pay for a gas model. That said, I can't really {{view-004-q9}} the noise complaints — my own ears ring after a long day, so I get why neighbours are frustrated too. I just wish these bans came with some kind of {{view-004-q10}} to help small operators afford the switch.`,
      },
    ],
    questions: [
      {
        id: 'view-004-q1',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "Holly Tran's main argument is that .....",
        options: [
          'cities are right to ban gas-powered leaf blowers due to pollution and noise concerns',
          'leaf blowers should be banned entirely worldwide immediately',
          'electric leaf blowers are already more powerful than gas models',
          'landscaping companies should be exempt from all noise regulations',
        ],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'She opens by saying cities banning these blowers "are right to do so," then supports it with pollution and noise arguments.',
      },
      {
        id: 'view-004-q2',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'According to the article, how does a gas leaf blower compare to a pickup truck in terms of pollution?',
        options: [
          'An hour of blower use can produce more smog-forming pollution than driving a truck hundreds of kilometres',
          'A leaf blower produces far less pollution overall',
          'They produce roughly equal pollution per hour',
          'The article does not compare the two',
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article states a blower "can produce more smog-forming pollution in an hour of operation than a modern pickup truck driving hundreds of kilometres."',
      },
      {
        id: 'view-004-q3',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What occupational concern does the article raise about leaf blower noise?',
        options: [
          'Landscaping workers risk hearing damage from prolonged exposure',
          'Workers are required to wear protective suits',
          'Noise complaints have led to workplace lawsuits',
          'Workers receive hazard pay for using blowers',
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article notes the noise level is "associated with hearing damage after prolonged exposure, a real occupational hazard for landscaping workers."',
      },
      {
        id: 'view-004-q4',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "What is the author's response to the argument that electric blowers aren't powerful enough?",
        options: [
          'She acknowledges some truth to it but notes electric technology has improved significantly',
          'She dismisses the concern entirely as false',
          'She agrees electric blowers will never be viable',
          'She avoids addressing this argument'
        ],
        correctIndex: 0,
        skill: 'tone-purpose',
        explanation: 'She writes "there\u2019s some truth to this for now, though battery technology has improved considerably" — acknowledging the concern while qualifying it.',
      },
      {
        id: 'view-004-q5',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'How do cities that have implemented bans typically approach the transition?',
        options: [
          'Gradually, giving businesses time to switch equipment',
          'Immediately, with no transition period',
          'Only for residential use, never commercial',
          'Through voluntary pledges with no enforcement',
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article states these cities "typically phase them in gradually, giving landscaping businesses time to transition equipment."',
      },
      {
        id: 'view-004-q6',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What can be inferred about the author\u2019s overall tone toward landscaping businesses?',
        options: [
          'Sympathetic to their challenges while still supporting the bans',
          'Dismissive of their concerns entirely',
          'Hostile and blaming',
          'Completely indifferent to their situation',
        ],
        correctIndex: 0,
        skill: 'tone-purpose',
        explanation: 'She calls the phased approach "reasonable" and acknowledges giving "the affected industry room to adapt," showing some sympathy alongside her support for bans.',
      },
      {
        id: 'view-004-q7',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'According to the article, where have some leaf blower bans already been implemented?',
        options: ['A handful of cities in California and a few in Quebec', 'Across all of Canada', 'Only in major European cities', 'Nowhere yet, only proposed'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article mentions bans "including a handful in California and a few in Quebec."',
      },
      {
        id: 'view-004-q8',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'I think this article is a bit ___ about how expensive switching to electric equipment actually is.',
        options: ['unrealistic', 'accurate', 'generous', 'cautious'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'The commenter goes on to describe a real cost concern the article doesn\u2019t address, fitting "unrealistic" as a critique of the article\u2019s framing.',
      },
      {
        id: 'view-004-q9',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: "I can't really ___ the noise complaints.",
        options: ['argue with', 'understand', 'remember', 'predict'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Argue with" fits the context of conceding a point — the commenter admits the noise complaints are valid despite their other criticism.',
      },
      {
        id: 'view-004-q10',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'I wish these bans came with some kind of ___ to help small operators afford the switch.',
        options: ['financial support', 'public shaming', 'extra paperwork', 'noise exemption'],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'Given the commenter\u2019s concern is about cost, "financial support" (such as a subsidy or rebate) directly addresses that concern.',
      },
    ],
  },

  {
    id: 'view-005',
    sectionType: 'viewpoints',
    title: 'Should Public Libraries Eliminate Late Fees?',
    difficulty: 'intermediate',
    tags: ['libraries', 'public policy', 'opinion'],
    article: {
      title: 'Why Ending Library Fines Made Sense for Our City',
      author: 'Desmond Okafor, city services reporter',
      body: `Two years ago, our city's public library system eliminated late fees on all overdue items, joining a growing number of major library systems across North America that have done the same. Critics worried this would lead to chaos: books never returned, budgets blown, and a system that no longer functioned. The actual results tell a very different story.

According to the library system's own data, the overall return rate for borrowed materials has barely changed, dropping by less than one percent compared to the years when fines were still in place. What did change dramatically was the number of people returning to use the library after avoiding it for years, specifically citing unpaid fines as the reason they'd stayed away.

The financial case against fines turns out to be stronger than many assumed. Late fees had never generated more than about two percent of the library system's total operating budget, while the staff time spent processing, tracking, and arguing with patrons over small fines arguably cost the system more in administrative overhead than the fines brought in.

There's also a fairness dimension worth considering. Research consistently shows that library fines disproportionately affect lower-income families, who are statistically more likely to accumulate fines they struggle to pay off, sometimes losing library access entirely as a result, even though these are often the very communities that benefit most from free access to books, computers, and other resources.

None of this means there are no consequences at all for unreturned items. Patrons who keep an item well past its due date still eventually have to pay for its replacement cost if it isn't returned, and lending privileges can be temporarily suspended for items kept dramatically overdue. The change wasn't about eliminating accountability entirely, just removing a barrier that was disproportionately keeping out the people libraries are supposed to serve.`,
    },
    comments: [
      {
        author: 'A reader',
        body: `As a former librarian, I find this pretty {{view-005-q8}} to read, since I always suspected the fines weren't actually worth the hassle of collecting them. That said, I wonder if smaller library systems with much tighter budgets would see the same results — what works for a big city system might not {{view-005-q9}} to a small rural library with way less staff and funding. Still, the fairness argument alone seems {{view-005-q10}} enough to justify trying this elsewhere.`,
      },
    ],
    questions: [
      {
        id: 'view-005-q1',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "Desmond Okafor's main argument is that .....",
        options: [
          'eliminating library late fees has worked well based on actual results',
          'libraries should increase fines to fund more programs',
          'late fees are necessary to maintain accountability',
          'all public services should be entirely free with no exceptions',
        ],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'The article presents data showing positive outcomes from eliminating fines, supporting the policy based on real results.',
      },
      {
        id: 'view-005-q2',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'According to the data cited, what happened to the overall return rate after fines were eliminated?',
        options: [
          'It dropped by less than one percent',
          'It dropped by more than half',
          'It increased significantly',
          'It stayed exactly the same with zero change'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article states the return rate "dropped by less than one percent compared to the years when fines were still in place."',
      },
      {
        id: 'view-005-q3',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What financial detail does the article mention about how much fines contributed to the budget?',
        options: [
          'Fines never generated more than about two percent of the operating budget',
          'Fines made up nearly half the library\u2019s budget',
          'Fines were the single largest funding source',
          'The article does not mention this'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article states "late fees had never generated more than about two percent of the library system\u2019s total operating budget."',
      },
      {
        id: 'view-005-q4',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What fairness concern does the article raise about fines?',
        options: [
          'They disproportionately affect lower-income families',
          'They are applied unevenly across age groups',
          'They unfairly target university students',
          'They only apply to certain types of books'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article states "library fines disproportionately affect lower-income families."',
      },
      {
        id: 'view-005-q5',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'Does the article suggest there are still any consequences for unreturned items?',
        options: [
          'Yes, patrons still pay replacement costs and can have privileges suspended',
          'No, there are no consequences of any kind now',
          'Yes, but only a verbal warning is given',
          'The article does not address this'
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'The article notes patrons "still eventually have to pay for its replacement cost" and "lending privileges can be temporarily suspended."',
      },
      {
        id: 'view-005-q6',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What does the article suggest about why people had stayed away from the library before the change?',
        options: [
          'Some specifically cited unpaid fines as the reason',
          'Library hours had been too limited',
          'The library had been closed for renovations',
          'Online resources had replaced their need for it',
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'The article mentions returning patrons "specifically citing unpaid fines as the reason they\u2019d stayed away."',
      },
      {
        id: 'view-005-q7',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "The author's tone toward this policy change can best be described as .....",
        options: ['supportive, backed by evidence', 'skeptical and doubtful', 'angry at critics', 'neutral with no clear position'],
        correctIndex: 0,
        skill: 'tone-purpose',
        explanation: 'He presents consistent supporting evidence throughout, framing the policy as a clear success, indicating a supportive tone.',
      },
      {
        id: 'view-005-q8',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'I find this pretty ___ to read.',
        options: ['validating', 'upsetting', 'boring', 'confusing'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'The commenter says they "always suspected" this outcome, so reading confirmation of it fits "validating."',
      },
      {
        id: 'view-005-q9',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: "What works for a big city system might not ___ to a small rural library.",
        options: ['translate', 'belong', 'return', 'apologize'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Translate to" is the natural collocation for something applying successfully in a different context.',
      },
      {
        id: 'view-005-q10',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'The fairness argument alone seems ___ enough to justify trying this elsewhere.',
        options: ['compelling', 'irrelevant', 'weak', 'unrelated'],
        correctIndex: 0,
        skill: 'paraphrase-recognition',
        explanation: 'The commenter ends on a supportive note despite their earlier caveat, so "compelling" fits their overall conclusion.',
      },
    ],
  },

  {
    id: 'view-006',
    sectionType: 'viewpoints',
    title: 'Should Universities Eliminate Standardized Entrance Exams?',
    difficulty: 'advanced',
    tags: ['education', 'opinion'],
    article: {
      title: 'The Flawed Logic of Test-Optional Admissions',
      author: 'Professor Adaeze Nwosu, education policy researcher',
      body: `Over the past several years, a growing number of universities have dropped standardized test requirements from their admissions process, citing concerns about equity and predictive validity. While the underlying concerns are legitimate, I believe the wholesale abandonment of standardized testing has created problems at least as serious as the ones it was meant to solve.

Proponents argue that standardized tests favour wealthier applicants who can afford expensive preparation courses and private tutoring, and the evidence here is genuinely strong: test scores correlate closely with household income across virtually every demographic study conducted on the subject. This is a real and serious problem that deserves a real solution.

However, removing the test entirely doesn't eliminate the underlying inequities; it merely shifts them elsewhere. Without standardized scores, admissions committees increasingly rely on extracurricular activities, recommendation letters, and personal essays, all of which are arguably even more susceptible to wealth-based advantages than test scores ever were. A polished essay coached by a private admissions consultant, a glowing letter from a well-connected family friend, or an impressive list of expensive extracurricular programs are not equalizers; they simply replace one form of advantage with another, often harder to detect.

There's also a practical problem of comparability. A standardized test, whatever its flaws, provides one consistent measure across applicants from wildly different school systems with vastly different grading standards, course offerings, and academic rigour. Without it, admissions committees are left trying to compare a 95 percent average from one school against an 88 percent average from another with no reliable way of knowing which represents stronger actual performance.

None of this means standardized tests should be the only factor, or even the primary one, in admissions decisions. But treating them as inherently more unfair than the alternatives that have replaced them ignores how those alternatives function in practice for the students who can best afford to optimize them.`,
    },
    comments: [
      {
        author: 'A reader',
        body: `I appreciate this perspective, but I think the professor is being a little {{view-006-q8}} about how unequal access to test prep actually is — some students can afford months of one-on-one tutoring while others can't afford a single practice book. I do think the comparability point is {{view-006-q9}}, though; my own school massively inflated grades compared to a neighbouring district, and that always felt unfair too. Maybe the real answer is requiring standardized tests but also fully funding free prep resources, rather than {{view-006-q10}} between the two extremes.`,
      },
    ],
    questions: [
      {
        id: 'view-006-q1',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "Professor Nwosu's main argument is that .....",
        options: [
          'eliminating standardized tests shifts inequity elsewhere rather than solving it',
          'standardized tests are completely fair and should be the only admissions factor',
          'all universities should immediately reinstate mandatory testing',
          'extracurricular activities should be eliminated from admissions entirely',
        ],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'She argues removing tests "doesn\u2019t eliminate the underlying inequities; it merely shifts them elsewhere."',
      },
      {
        id: 'view-006-q2',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "What does the author acknowledge as a legitimate concern about standardized tests?",
        options: [
          'Test scores correlate closely with household income',
          'Tests take too long to administer',
          'Tests are too easy for most applicants',
          'Tests are no longer used by any university'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'She states "test scores correlate closely with household income across virtually every demographic study," calling this "a real and serious problem."',
      },
      {
        id: 'view-006-q3',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What does the author argue about essays and recommendation letters compared to test scores?',
        options: [
          'They are arguably even more susceptible to wealth-based advantages',
          'They are completely immune to wealth-based advantages',
          'They are required by law to be reviewed blindly',
          'They have replaced tests entirely with no downsides'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'She states these factors are "arguably even more susceptible to wealth-based advantages than test scores ever were."',
      },
      {
        id: 'view-006-q4',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What comparability problem does the author raise about grades from different schools?',
        options: [
          'There is no reliable way to compare grades from schools with different grading standards',
          'All schools use identical grading scales already',
          'Grades are no longer used in any admissions process',
          'Universities are legally required to ignore grades entirely'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'She describes comparing different schools\u2019 averages "with no reliable way of knowing which represents stronger actual performance."',
      },
      {
        id: 'view-006-q5',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "Does the author believe standardized tests should be the only factor in admissions?",
        options: [
          'No, she explicitly says they shouldn\u2019t be the only or primary factor',
          'Yes, she argues they should be the sole factor',
          'She does not address this question at all',
          'She believes only essays should matter'
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'She states tests "should [not] be the only factor, or even the primary one, in admissions decisions."',
      },
      {
        id: 'view-006-q6',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "What is the author's overall tone toward universities that have dropped testing requirements?",
        options: ['Critical but measured, acknowledging valid original concerns', 'Completely dismissive and mocking', 'Fully supportive of their decision', 'Indifferent to the policy change'],
        correctIndex: 0,
        skill: 'tone-purpose',
        explanation: 'She calls the original concerns "legitimate" while still arguing the resulting policy "created problems at least as serious" — critical but balanced.',
      },
      {
        id: 'view-006-q7',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What does the author suggest is one genuine advantage of standardized tests?',
        options: [
          'They provide one consistent measure across applicants from different school systems',
          'They are completely free for all applicants to take',
          'They eliminate the need for any other admissions criteria',
          'They are favoured by every university worldwide'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'She states tests provide "one consistent measure across applicants from wildly different school systems."',
      },
      {
        id: 'view-006-q8',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'I think the professor is being a little ___ about how unequal access to test prep actually is.',
        options: ['dismissive', 'accurate', 'generous', 'cautious'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'The commenter is pushing back, suggesting the professor underplays a real inequity, fitting "dismissive."',
      },
      {
        id: 'view-006-q9',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'I do think the comparability point is ___, though.',
        options: ['fair', 'pointless', 'dishonest', 'outdated'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: 'The commenter follows with a personal example supporting this point, confirming agreement, matching "fair."',
      },
      {
        id: 'view-006-q10',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'Rather than ___ between the two extremes.',
        options: ['choosing', 'apologizing', 'studying', 'waiting'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: 'The commenter is proposing a middle-ground solution instead of picking one extreme option over the other, fitting "choosing."',
      },
    ],
  },

  {
    id: 'view-007',
    sectionType: 'viewpoints',
    title: 'Should Grocery Stores Eliminate Self-Checkout?',
    difficulty: 'intermediate',
    tags: ['retail', 'opinion'],
    article: {
      title: 'Why Some Stores Are Walking Back Self-Checkout',
      author: 'Naomi Pelletier, retail trends writer',
      body: `Self-checkout machines were once marketed as the future of grocery shopping: faster lines, more convenience, lower labour costs. Lately, though, a noticeable number of retailers, including several major chains, have begun scaling back self-checkout lanes or removing them entirely from certain locations. The reasons behind this reversal are more complicated than they first appear.

The most commonly cited reason is theft. Industry studies estimate that self-checkout loss rates, whether from deliberate theft or accidental scanning errors, run significantly higher than at staffed checkout lanes, sometimes several times higher depending on the store and product category. For retailers already operating on thin grocery margins, this added shrinkage can meaningfully affect profitability.

Customer experience is another factor working against self-checkout's original promise. Rather than speeding things up, many shoppers report frustration with weight-sensor errors, age-verification holdups for items like alcohol, and a general sense that they're now doing unpaid labour that employees used to handle. A frequent complaint is having to wait for staff assistance anyway, defeating much of the original convenience argument.

Labour advocates have raised a different concern entirely: that self-checkout expansion was never really about customer convenience at all, but rather a vehicle for reducing staffing levels and cutting payroll costs, with convenience serving mainly as the public justification. Whether or not that was the original intent, the staffing reductions that often accompanied self-checkout rollouts are now, in some cases, being partially reversed as stores rehire cashiers.

None of this means self-checkout will disappear entirely; many shoppers genuinely prefer it for small, quick purchases, and it likely remains a sensible option for certain transaction types. But its expansion as the default, primary checkout method for all purchases appears to be facing a meaningful correction.`,
    },
    comments: [
      {
        author: 'A reader',
        body: `As someone who worked retail for years, I think this article is {{view-007-q8}} accurate about the labour concern — management always framed self-checkout as customer-focused, but everyone on staff knew it was really about cutting hours. That said, I'm a little {{view-007-q9}} of the theft statistics mentioned, since I've seen wildly different numbers reported depending on who's doing the study. Either way, I won't be {{view-007-q10}} if more stores start scaling it back.`,
      },
    ],
    questions: [
      {
        id: 'view-007-q1',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "Naomi Pelletier's main argument is that .....",
        options: [
          'several complicated factors are causing some retailers to scale back self-checkout',
          'self-checkout has been a complete success and will expand further',
          'all grocery stores will eliminate cashiers within a year',
          'theft is the only reason retailers are reconsidering self-checkout',
        ],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'She states "the reasons behind this reversal are more complicated than they first appear," then discusses multiple distinct factors, not just one.',
      },
      {
        id: 'view-007-q2',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'According to the article, how do self-checkout loss rates compare to staffed lanes?',
        options: [
          'They run significantly higher, sometimes several times higher',
          'They are roughly identical',
          'They are consistently lower',
          'The article does not compare them'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article states loss rates "run significantly higher than at staffed checkout lanes, sometimes several times higher."',
      },
      {
        id: 'view-007-q3',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What customer complaint does the article mention about self-checkout?',
        options: [
          'Weight-sensor errors and age-verification holdups for items like alcohol',
          'Machines are too expensive to use',
          'Self-checkout lanes are always closed',
          'Customers must pay an extra service fee'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article mentions "weight-sensor errors, age-verification holdups for items like alcohol" among customer frustrations.',
      },
      {
        id: 'view-007-q4',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What do labour advocates argue was the real motivation behind self-checkout expansion?',
        options: [
          'Reducing staffing levels and cutting payroll costs',
          'Improving customer satisfaction above all else',
          'Reducing theft and shrinkage',
          'Complying with new government regulations'
        ],
        correctIndex: 0,
        skill: 'viewpoint-opinion',
        explanation: 'The article states their argument is that self-checkout was "a vehicle for reducing staffing levels and cutting payroll costs."',
      },
      {
        id: 'view-007-q5',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'Does the article suggest self-checkout will disappear completely?',
        options: [
          'No, it suggests self-checkout remains sensible for certain transaction types',
          'Yes, it predicts complete elimination within a year',
          'Yes, all major chains have already removed it entirely',
          'The article does not address this'
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'The article states "many shoppers genuinely prefer it for small, quick purchases, and it likely remains a sensible option for certain transaction types."',
      },
      {
        id: 'view-007-q6',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What does the article suggest some stores are now doing in response to these issues?',
        options: [
          'Partially reversing staffing reductions by rehiring cashiers',
          'Charging customers extra to use self-checkout',
          'Banning all self-checkout nationwide by law',
          'Requiring photo ID for every purchase'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article states staffing reductions "are now, in some cases, being partially reversed as stores rehire cashiers."',
      },
      {
        id: 'view-007-q7',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "The author's tone in this article is best described as .....",
        options: ['analytical and balanced', 'angry at retailers', 'dismissive of customer complaints', 'strongly in favour of self-checkout'],
        correctIndex: 0,
        skill: 'tone-purpose',
        explanation: 'The article presents multiple perspectives (retailer cost concerns, customer frustration, labour advocate views) without strongly favouring one side, indicating a balanced, analytical tone.',
      },
      {
        id: 'view-007-q8',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'I think this article is ___ accurate about the labour concern.',
        options: ['spot-on', 'completely wrong', 'somewhat unrelated', 'badly outdated'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'The commenter confirms the labour framing matched their own experience, fitting a strongly positive agreement like "spot-on."',
      },
      {
        id: 'view-007-q9',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: "I'm a little ___ of the theft statistics mentioned.",
        options: ['skeptical', 'convinced', 'thrilled', 'unaware'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'The commenter explains they\u2019ve "seen wildly different numbers reported," which supports doubt, fitting "skeptical."',
      },
      {
        id: 'view-007-q10',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: "I won't be ___ if more stores start scaling it back.",
        options: ['surprised', 'devastated', 'confused', 'rewarded'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Surprised" fits the casual, expectant tone of someone who already anticipates this outcome based on their own experience.',
      },
    ],
  },

  {
    id: 'view-008',
    sectionType: 'viewpoints',
    title: 'Should Municipal Employees Work a Four-Day Week?',
    difficulty: 'advanced',
    tags: ['workplace', 'municipal policy', 'opinion'],
    article: {
      title: "Our City's Four-Day Week Pilot, One Year Later",
      author: 'Councillor Iris Bcongiorno',
      body: `Last year, our city council approved a one-year pilot program moving roughly 200 municipal employees, primarily in administrative departments, from a traditional five-day, 37.5-hour week to a four-day, 32-hour week at full pay. With the pilot now complete and an independent evaluation in hand, I want to share what we actually learned, both the encouraging results and the genuine limitations.

On employee wellbeing, the results were unambiguous. Self-reported burnout dropped substantially, sick day usage fell by nearly a third compared to the previous year, and exit interviews from departing staff cited the policy as a significant factor in why people chose to stay rather than seek employment elsewhere, a meaningful finding given how difficult municipal recruitment has become in recent years.

Productivity metrics, which were the council's primary concern going in, held steady or modestly improved across most participating departments, based on standard service-delivery benchmarks like permit processing times and resident service request resolution. This wasn't universal, however; one department handling time-sensitive bylaw enforcement reported some service delays directly attributable to reduced coverage hours, a problem we're still working to address before any permanent rollout.

The financial picture is more mixed than wellbeing advocates sometimes suggest. While there were no direct payroll savings, since employees kept full salaries for reduced hours, the city did see modest savings in building operating costs from one fewer office day per week. These savings, however, were far smaller than the costs of maintaining service coverage through adjusted scheduling and some limited additional hiring in customer-facing roles.

Council will vote next month on whether to extend the program permanently, expand it to additional departments, or end it. Based on what we've seen, I personally support a careful, department-by-department expansion rather than either extreme, prioritizing wellbeing gains while addressing the genuine operational challenges the pilot exposed.`,
    },
    comments: [
      {
        author: 'A reader',
        body: `As a city employee who took part in this pilot, I think the councillor is being pretty {{view-008-q8}} here, and that matches my own experience too — burnout really did drop noticeably for our team. I do wonder about the bylaw enforcement issue though; it seems like that department needs a {{view-008-q9}} solution rather than just being lumped in with everyone else under one policy. Either way, I really hope council doesn't just {{view-008-q10}} the whole program over one department's struggles.`,
      },
    ],
    questions: [
      {
        id: 'view-008-q1',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "Councillor Bongiorno's main purpose in this article is to .....",
        options: [
          'share the results of a four-day week pilot, including both successes and limitations',
          'announce the permanent cancellation of the pilot program',
          'argue that all city departments should immediately switch to four-day weeks',
          'criticize employees for using too many sick days',
        ],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'She states she wants "to share what we actually learned, both the encouraging results and the genuine limitations."',
      },
      {
        id: 'view-008-q2',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What happened to sick day usage during the pilot?',
        options: ['It fell by nearly a third', 'It increased significantly', 'It stayed exactly the same', 'It was not tracked during the pilot'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article states "sick day usage fell by nearly a third compared to the previous year."',
      },
      {
        id: 'view-008-q3',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'Which department experienced a specific operational problem during the pilot?',
        options: [
          'The bylaw enforcement department, due to reduced coverage hours',
          'The human resources department, due to staffing shortages',
          'The finance department, due to budget overruns',
          'No department experienced any problems'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article states "one department handling time-sensitive bylaw enforcement reported some service delays directly attributable to reduced coverage hours."',
      },
      {
        id: 'view-008-q4',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What does the article say about direct payroll savings from the program?',
        options: [
          'There were none, since employees kept full salaries for reduced hours',
          'Payroll costs were cut by a third',
          'Payroll savings fully covered all other program costs',
          'The article does not mention payroll at all'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article states "there were no direct payroll savings, since employees kept full salaries for reduced hours."',
      },
      {
        id: 'view-008-q5',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What is the relationship between building operating savings and other added costs, according to the article?',
        options: [
          'The building savings were far smaller than the costs of maintaining coverage and hiring',
          'The building savings completely outweighed all other costs',
          'There were no building savings at all',
          'The article does not compare these costs'
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'The article states the modest building savings "were far smaller than the costs of maintaining service coverage... and some limited additional hiring."',
      },
      {
        id: 'view-008-q6',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "What position does the councillor personally support going forward?",
        options: [
          'A careful, department-by-department expansion',
          'Immediately expanding the program citywide with no changes',
          'Ending the program completely',
          'Reducing the workweek even further to three days'
        ],
        correctIndex: 0,
        skill: 'viewpoint-opinion',
        explanation: 'She states she "personally support[s] a careful, department-by-department expansion rather than either extreme."',
      },
      {
        id: 'view-008-q7',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What does the article suggest about the role of this policy in staff retention?',
        options: [
          'Exit interviews cited it as a significant factor in why staff chose to stay',
          'It had no measurable effect on staff retention',
          'It caused more employees to leave than before',
          'Retention was not studied as part of this pilot'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article states exit interviews "cited the policy as a significant factor in why people chose to stay rather than seek employment elsewhere."',
      },
      {
        id: 'view-008-q8',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'I think the councillor is being pretty ___ here.',
        options: ['honest', 'misleading', 'dramatic', 'vague'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'The commenter confirms the article matches their own experience, supporting a positive word like "honest."',
      },
      {
        id: 'view-008-q9',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'That department needs a ___ solution rather than just being lumped in with everyone else.',
        options: ['tailored', 'generic', 'cancelled', 'random'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'The contrast with "lumped in with everyone else" implies the opposite — a specific, customized approach, fitting "tailored."',
      },
      {
        id: 'view-008-q10',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: "I hope council doesn't just ___ the whole program over one department's struggles.",
        options: ['scrap', 'fund', 'celebrate', 'announce'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Scrap" fits the worry being expressed — cancelling the entire program because of one department\u2019s isolated issue.',
      },
    ],
  },

  {
    id: 'view-009',
    sectionType: 'viewpoints',
    title: 'Should Social Media Platforms Verify User Age?',
    difficulty: 'advanced',
    tags: ['technology', 'policy', 'opinion'],
    article: {
      title: 'Age Verification Online: A Necessary Step, Imperfectly Executed',
      author: 'Priyanka Bhatt, technology policy analyst',
      body: `Several jurisdictions have recently introduced or proposed laws requiring social media platforms to verify users' ages before granting access, typically aimed at restricting younger teens from certain platforms or features entirely. The underlying motivation, protecting young people from documented harms associated with heavy social media use, is hard to argue with. The proposed solutions, however, raise serious practical and privacy concerns that deserve more scrutiny than they're often getting.

The most commonly proposed verification methods involve uploading government identification or undergoing facial age-estimation scans. Both approaches require platforms to collect and store sensitive personal data at an unprecedented scale, creating an attractive target for data breaches and raising legitimate questions about how long this information is retained and who else might gain access to it.

There's also a meaningful effectiveness problem. Tech-savvy teenagers, a demographic not exactly known for being deterred by minor obstacles, have already demonstrated considerable skill at circumventing existing age restrictions through false birthdates, borrowed identification, or VPN tools that disguise their location to access platforms from jurisdictions with looser requirements. A determined 14-year-old will likely find a workaround within days of any new system launching.

Privacy advocates raise a further concern: that age-verification infrastructure built today for protecting minors could later be repurposed or expanded for broader surveillance purposes, a slippery-slope argument that sounds alarmist until you consider how often technology originally introduced for narrow purposes has later been expanded well beyond its original scope.

None of this means we should abandon efforts to address genuine harms facing young social media users. But policymakers should be honest that current verification proposals trade one set of problems, namely difficult-to-measure harms from social media use, for another set of problems, namely privacy risks and circumvention, rather than presenting this as a costless solution.`,
    },
    comments: [
      {
        author: 'A reader',
        body: `I appreciate this article laying out the privacy concerns so clearly, but I think it's a bit {{view-009-q8}} about how determined teenagers actually are to get around restrictions — in my experience as a parent, even small barriers do reduce casual, low-effort access, even if a truly determined kid eventually finds a workaround. I do think the data breach concern is {{view-009-q9}}, since we've seen plenty of major companies fail to protect way less sensitive information than ID scans. Maybe the answer is verification methods that don't require {{view-009-q10}} as much personal data in the first place.`,
      },
    ],
    questions: [
      {
        id: 'view-009-q1',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "Priyanka Bhatt's main argument is that .....",
        options: [
          'age verification\u2019s goal is reasonable, but current proposed methods raise serious practical and privacy concerns',
          'age verification should never be attempted under any circumstances',
          'all social media should be banned for anyone under 18',
          'current age verification methods are completely effective and risk-free',
        ],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'She states the motivation "is hard to argue with," but "the proposed solutions... raise serious practical and privacy concerns."',
      },
      {
        id: 'view-009-q2',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What are the two most commonly proposed verification methods mentioned in the article?',
        options: [
          'Uploading government ID or undergoing facial age-estimation scans',
          'Parental consent forms and school records',
          'Credit card verification and phone number checks',
          'Email confirmation and a written pledge'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article mentions "uploading government identification or undergoing facial age-estimation scans."',
      },
      {
        id: 'view-009-q3',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What effectiveness concern does the article raise about age verification?',
        options: [
          'Tech-savvy teens have already shown skill at circumventing similar restrictions',
          'The technology does not currently exist to verify age at all',
          'Verification systems are too slow to be practical',
          'No teenagers have ever tried to bypass age restrictions'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article notes teens "have already demonstrated considerable skill at circumventing existing age restrictions."',
      },
      {
        id: 'view-009-q4',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What broader concern do privacy advocates raise, according to the article?',
        options: [
          'Verification infrastructure built for minors could later be repurposed for broader surveillance',
          'Verification systems will definitely be hacked within the first year',
          'Age verification will eliminate social media entirely',
          'Privacy advocates have no specific concerns about this issue'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article describes the concern "that age-verification infrastructure built today for protecting minors could later be repurposed or expanded for broader surveillance purposes."',
      },
      {
        id: 'view-009-q5',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'Does the author believe efforts to protect young social media users should be abandoned?',
        options: [
          'No, she states this directly in the final paragraph',
          'Yes, she argues all such efforts are pointless',
          'She does not address this question',
          'Yes, but only for users under age 13'
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'She writes "none of this means we should abandon efforts to address genuine harms facing young social media users."',
      },
      {
        id: 'view-009-q6',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What does the author suggest policymakers should be honest about?',
        options: [
          'That current proposals trade one set of problems for another, not a costless solution',
          'That age verification is technically impossible to implement',
          'That all social media platforms oppose any form of regulation',
          'That teenagers do not use social media at significant rates'
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'She states policymakers should admit proposals "trade one set of problems... for another set of problems... rather than presenting this as a costless solution."',
      },
      {
        id: 'view-009-q7',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "The author's overall tone toward age verification proposals is best described as .....",
        options: ['cautiously critical, while supporting the underlying goal', 'fully supportive with no reservations', 'completely dismissive of the entire concept', 'angry at lawmakers'],
        correctIndex: 0,
        skill: 'tone-purpose',
        explanation: 'She supports the goal ("hard to argue with") while raising consistent concerns about execution — cautiously critical rather than fully opposed or fully supportive.',
      },
      {
        id: 'view-009-q8',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'I think it\u2019s a bit ___ about how determined teenagers actually are to get around restrictions.',
        options: ['pessimistic', 'accurate', 'generous', 'simplistic'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'The commenter pushes back by noting barriers still reduce casual access, suggesting the article is too "pessimistic" about verification\u2019s usefulness.',
      },
      {
        id: 'view-009-q9',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'I do think the data breach concern is ___.',
        options: ['legitimate', 'overblown', 'irrelevant', 'imaginary'],
        correctIndex: 0,
        skill: 'paraphrase-recognition',
        explanation: 'The commenter follows with supporting evidence (companies failing to protect less sensitive data), confirming agreement with "legitimate."',
      },
      {
        id: 'view-009-q10',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: "Maybe the answer is verification methods that don't require ___ as much personal data.",
        options: ['collecting', 'deleting', 'encrypting', 'sharing'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Collecting" fits the context of reducing how much sensitive data is gathered in the first place, addressing the privacy concern directly.',
      },
    ],
  },

  {
    id: 'view-010',
    sectionType: 'viewpoints',
    title: 'Should Employers Require a Full Return to the Office?',
    difficulty: 'intermediate',
    tags: ['workplace', 'opinion'],
    article: {
      title: 'The Return-to-Office Mandate Isn\u2019t Working as Intended',
      author: 'Soraya Kazemi, workplace trends columnist',
      body: `Over the past two years, a wave of large employers has issued mandates requiring employees to return to the office full-time, often citing collaboration, culture, and productivity concerns. The data emerging from these mandates, however, increasingly suggests the policy isn't delivering the results companies hoped for, and in some cases is actively backfiring.

The most consistent finding across multiple studies is increased voluntary turnover following return-to-office mandates, with companies disproportionately losing their most experienced and highly rated employees, the people with the most options elsewhere and the least patience for policies they consider unnecessary. Replacing experienced staff is expensive, and the resulting institutional knowledge loss is difficult to quantify but real.

Productivity data tells a more mixed story than mandate supporters often claim. Several large-scale studies have found no significant productivity difference between remote, hybrid, and fully in-office arrangements when measured by objective output metrics, complicating the argument that in-person work is inherently more productive across the board, even though it likely remains true for certain specific roles and tasks.

Some executives have been candid that mandates serve purposes beyond stated productivity concerns, including managing commercial real estate investments the company has already made and providing a less confrontational way to reduce headcount, since some employees will resign rather than comply, avoiding the need for formal layoffs.

None of this means remote work is without genuine downsides; mentorship, spontaneous collaboration, and onboarding new employees do appear to suffer in fully remote environments, based on research focused specifically on those areas. The strongest evidence suggests a thoughtfully designed hybrid approach captures most of remote work's benefits while mitigating its specific downsides, rather than the blunt instrument of a full return-to-office mandate.`,
    },
    comments: [
      {
        author: 'A reader',
        body: `As someone who left my last job specifically because of a return-to-office mandate, this article feels {{view-010-q8}} accurate to me. I will say, though, the mentorship point seems {{view-010-q9}} — I really did struggle to learn from senior colleagues when everything was remote at my current job before we shifted to hybrid. I just wish more companies were as {{view-010-q10}} as the executives mentioned here about their real reasons instead of hiding behind vague productivity claims.`,
      },
    ],
    questions: [
      {
        id: 'view-010-q1',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "Soraya Kazemi's main argument is that .....",
        options: [
          'return-to-office mandates are not delivering the results companies expected and are sometimes backfiring',
          'all companies should immediately switch to fully remote work',
          'return-to-office mandates have been an unqualified success everywhere',
          'productivity is always higher when working from home',
        ],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'She states the data "increasingly suggests the policy isn\u2019t delivering the results companies hoped for, and in some cases is actively backfiring."',
      },
      {
        id: 'view-010-q2',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What consistent finding does the article mention about turnover after return-to-office mandates?',
        options: [
          'Increased voluntary turnover, disproportionately among the most experienced employees',
          'No measurable change in turnover at all',
          'Turnover decreased significantly after mandates',
          'Only junior employees tend to leave'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article states companies are "disproportionately losing their most experienced and highly rated employees."',
      },
      {
        id: 'view-010-q3',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What does the article say about productivity differences between remote, hybrid, and in-office work?',
        options: [
          'Several large studies found no significant productivity difference between arrangements',
          'In-office work is always significantly more productive',
          'Remote work is always significantly more productive',
          'No studies have ever examined this question'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article states studies "found no significant productivity difference between remote, hybrid, and fully in-office arrangements."',
      },
      {
        id: 'view-010-q4',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "What unstated motivation does the article suggest some executives have for mandates?",
        options: [
          'Managing real estate investments and reducing headcount without formal layoffs',
          'Complying with new government workplace laws',
          'Responding to direct employee requests for more in-office time',
          'Reducing the cost of office utilities'
        ],
        correctIndex: 0,
        skill: 'viewpoint-opinion',
        explanation: 'The article mentions mandates serving "purposes beyond stated productivity concerns, including managing commercial real estate investments... and providing a less confrontational way to reduce headcount."',
      },
      {
        id: 'view-010-q5',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'Does the article suggest remote work has no downsides at all?',
        options: [
          'No, it states mentorship, collaboration, and onboarding can suffer remotely',
          'Yes, it claims remote work has zero downsides',
          'The article does not address this',
          'Yes, but only for employees under 25'
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'The article states "mentorship, spontaneous collaboration, and onboarding new employees do appear to suffer in fully remote environments."',
      },
      {
        id: 'view-010-q6',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What solution does the article ultimately suggest works best, based on the evidence?',
        options: [
          'A thoughtfully designed hybrid approach',
          'A complete return to full-time office work',
          'Fully remote work with no exceptions',
          'The article does not suggest any particular solution'
        ],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'The article concludes "a thoughtfully designed hybrid approach captures most of remote work\u2019s benefits while mitigating its specific downsides."',
      },
      {
        id: 'view-010-q7',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "The author's tone toward return-to-office mandates is best described as .....",
        options: ['critical, backed by data and acknowledged nuance', 'fully supportive of strict mandates', 'angry and accusatory toward all executives', 'indifferent to the topic'],
        correctIndex: 0,
        skill: 'tone-purpose',
        explanation: 'She consistently cites data while still acknowledging genuine downsides to remote work, indicating a critical but nuanced, evidence-based tone.',
      },
      {
        id: 'view-010-q8',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'This article feels ___ accurate to me.',
        options: ['validating and', 'oddly un', 'mildly in', 'surprisingly in'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'Given the commenter personally experienced what the article describes, a strongly affirming phrase like "validating and" fits best.',
      },
      {
        id: 'view-010-q9',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'The mentorship point seems ___.',
        options: ['fair', 'baseless', 'irrelevant', 'invented'],
        correctIndex: 0,
        skill: 'paraphrase-recognition',
        explanation: 'The commenter supports this point with a personal example, confirming agreement, matching "fair."',
      },
      {
        id: 'view-010-q10',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'I just wish more companies were as ___ as the executives mentioned here.',
        options: ['transparent', 'secretive', 'confused', 'careless'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'The commenter contrasts this with companies "hiding behind vague productivity claims," so the positive opposite, "transparent," fits.',
      },
    ],
  },

{
    id: 'view-011',
    sectionType: 'viewpoints',
    title: 'Should Cities Ban Single-Use Plastic Shopping Bags?',
    difficulty: 'intermediate',
    tags: ['environment', 'municipal policy', 'opinion'],
    article: {
      title: 'The Plastic Bag Ban Debate Deserves a Closer Look',
      author: 'Selin Aydin, environment columnist',
      body: `Plastic bag bans have swept through municipalities across the country over the past several years, framed almost universally as a straightforward environmental win. The reality, once you dig into the research, turns out to be considerably more complicated than the simple narrative suggests.

The strongest argument for bans is visual and visceral: plastic bags are a highly visible form of litter, snagging on fences and trees, and they pose a genuine risk to marine wildlife when they end up in waterways. Reducing this specific, conspicuous form of pollution is a legitimate and worthwhile goal that bans clearly accomplish.

However, life-cycle analyses comparing plastic bags to common alternatives complicate the picture considerably. Cotton tote bags, often handed out as a "green" alternative, require significantly more energy, water, and resources to manufacture than a single plastic bag, meaning a cotton bag must be reused dozens or even hundreds of times before its overall environmental impact becomes lower than the plastic bags it replaced, a threshold many people likely never reach given how many promotional tote bags end up barely used.

There's also a displacement effect worth considering. Many consumers who previously reused plastic shopping bags for garbage, pet waste, or other household purposes now purchase dedicated plastic garbage bags instead, which are typically thicker and use more plastic per bag than the thin shopping bags being banned, partially offsetting the intended reduction in plastic use.

None of this means bans are without merit; visible litter reduction and shifting consumer habits toward genuine reuse both have real value. But policymakers and the public would benefit from engaging with the actual trade-offs rather than treating bans as an unambiguous, costless environmental victory.`,
    },
    comments: [
      {
        author: 'A reader',
        body: `I think this article raises some genuinely {{view-011-q8}} points about cotton totes, since I definitely have a drawer full of barely-used ones at home that probably did more environmental harm to produce than good. That said, I'm a little {{view-011-q9}} of the garbage bag displacement argument — in my own household, we just switched to compostable bags instead of buying thicker plastic ones. Still, the overall point that this issue is more {{view-011-q10}} than the simple "plastic bad, ban good" framing suggests feels right to me.`,
      },
    ],
    questions: [
      {
        id: 'view-011-q1',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "Selin Aydin's main argument is that .....",
        options: [
          'the plastic bag ban issue is more complicated than the simple environmental narrative suggests',
          'plastic bag bans should be immediately reversed everywhere',
          'cotton tote bags are always worse for the environment than plastic',
          'plastic bags pose no real risk to wildlife at all',
        ],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'She states the reality "turns out to be considerably more complicated than the simple narrative suggests," then explores multiple nuanced factors.',
      },
      {
        id: 'view-011-q2',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What does the article say about cotton tote bags compared to plastic bags?',
        options: [
          'They require significantly more resources to manufacture and must be reused many times to offset that impact',
          'They have no environmental impact at all',
          'They are always better regardless of how many times they are used',
          'They are banned in most cities alongside plastic bags'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article states cotton totes "require significantly more energy, water, and resources to manufacture" and "must be reused dozens or even hundreds of times" to offset that impact.',
      },
      {
        id: 'view-011-q3',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What is the "displacement effect" the article describes?',
        options: [
          'Consumers buying thicker dedicated garbage bags after losing access to reusable shopping bags',
          'Plastic bags being displaced by paper bags only',
          'Cities displacing plastic bag manufacturers entirely',
          'Wildlife being displaced from polluted areas'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article describes consumers who "now purchase dedicated plastic garbage bags instead, which are typically thicker."',
      },
      {
        id: 'view-011-q4',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'Does the author believe plastic bag bans have any merit?',
        options: [
          'Yes, she states visible litter reduction and shifting habits "have real value"',
          'No, she believes bans are entirely pointless',
          'She does not address this question',
          'Yes, but only for bags used near waterways'
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'She writes "none of this means bans are without merit; visible litter reduction and shifting consumer habits toward genuine reuse both have real value."',
      },
      {
        id: 'view-011-q5',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What does the author suggest policymakers and the public should do?',
        options: [
          'Engage with the actual trade-offs rather than treating bans as a costless victory',
          'Immediately ban all forms of packaging',
          'Stop discussing the topic entirely',
          'Only consider the visual litter argument'
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'She concludes "policymakers and the public would benefit from engaging with the actual trade-offs rather than treating bans as an unambiguous, costless environmental victory."',
      },
      {
        id: 'view-011-q6',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What specific risk does the article mention regarding plastic bags and wildlife?',
        options: [
          'They pose a risk to marine wildlife when they end up in waterways',
          'They attract specific predator species',
          'They are toxic to all wildlife on contact',
          'They primarily affect birds, not marine life'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article states bags "pose a genuine risk to marine wildlife when they end up in waterways."',
      },
      {
        id: 'view-011-q7',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "The author's overall tone in this article is best described as .....",
        options: ['analytical and balanced', 'angry at environmentalists', 'dismissive of environmental concerns', 'strongly in favour of plastic bags'],
        correctIndex: 0,
        skill: 'tone-purpose',
        explanation: 'She acknowledges valid points on multiple sides and avoids taking an extreme position, presenting a balanced, analytical view throughout.',
      },
      {
        id: 'view-011-q8',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'I think this article raises some genuinely ___ points about cotton totes.',
        options: ['fair', 'absurd', 'irrelevant', 'outdated'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'The commenter agrees with this point based on personal experience, fitting a positive word like "fair."',
      },
      {
        id: 'view-011-q9',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: "I'm a little ___ of the garbage bag displacement argument.",
        options: ['skeptical', 'convinced', 'thrilled', 'unaware'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'The commenter explains they personally switched to compostable bags rather than thicker plastic ones, showing doubt about the argument, fitting "skeptical."',
      },
      {
        id: 'view-011-q10',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'This issue is more ___ than the simple framing suggests.',
        options: ['nuanced', 'simple', 'pointless', 'obvious'],
        correctIndex: 0,
        skill: 'paraphrase-recognition',
        explanation: 'This echoes the article\u2019s central claim that the issue is "considerably more complicated" than a simple narrative, matching "nuanced."',
      },
    ],
  },

  {
    id: 'view-012',
    sectionType: 'viewpoints',
    title: 'Should Tipping Be Replaced With Built-In Service Charges?',
    difficulty: 'intermediate',
    tags: ['economy', 'workplace', 'opinion'],
    article: {
      title: "It's Time to Rethink How We Pay for Service",
      author: 'Marcus Delaney, food industry writer',
      body: `Tipping culture has expanded well beyond restaurants in recent years, with prompts now appearing at coffee counters, self-checkout kiosks, and even automated machines, leading to growing public frustration sometimes labelled "tipping fatigue." A growing number of voices, myself included, believe it's time to seriously consider replacing discretionary tipping with built-in service charges instead.

The core problem with tipping as a compensation model is its inherent unpredictability. Workers' income can vary dramatically based on factors entirely outside their control, including which shifts they're scheduled for, the generosity of a given customer base, and even unconscious biases that research has consistently shown affect tipping amounts based on factors like server appearance or race, none of which should determine someone's wage.

Built-in service charges, by contrast, would provide workers with predictable, stable income while still compensating for service, similar to models already used in many countries outside North America where tipping is minimal or nonexistent, yet service quality remains comparable by most traveller accounts.

Critics of replacing tipping with service charges raise a reasonable concern: that businesses might simply pocket the difference rather than passing it on to workers, especially if charges are simply added to menu prices without clear transparency. This is a legitimate risk that would require regulatory safeguards, such as mandated transparency about how service charges are distributed, to actually achieve the intended benefit for workers rather than just becoming an additional profit margin for owners.

Some service workers themselves are skeptical of the change, particularly those in upscale establishments where strong tippers can sometimes earn more under the current system than a flat service charge might guarantee. Any transition would need to account for this reality rather than assuming all workers would benefit equally from the shift.`,
    },
    comments: [
      {
        author: 'A reader',
        body: `As someone who worked as a server for years, I think this article is {{view-012-q8}} accurate about the unpredictability issue — some weeks I'd make great money and others barely scrape by for reasons that had nothing to do with how well I did my job. That said, the concern about upscale restaurant servers earning less under a flat system feels {{view-012-q9}} to me too, since some of my friends in fine dining genuinely out-earn what any reasonable service charge would guarantee them. I guess the real challenge is {{view-012-q10}} a system that works fairly across very different types of establishments.`,
      },
    ],
    questions: [
      {
        id: 'view-012-q1',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "Marcus Delaney's main argument is that .....",
        options: [
          'it is time to seriously consider replacing tipping with built-in service charges',
          'tipping should be increased across all industries',
          'service charges should never be implemented anywhere',
          'restaurants should eliminate paid service entirely'
        ],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'He states "it\u2019s time to seriously consider replacing discretionary tipping with built-in service charges instead."',
      },
      {
        id: 'view-012-q2',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What does the article say research has shown about tipping amounts?',
        options: [
          'Unconscious biases related to factors like appearance or race affect tipping amounts',
          'Tipping amounts are entirely random with no patterns',
          'All customers tip the exact same percentage regardless of service',
          'Tipping amounts have no connection to service quality at all'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article states research "has consistently shown affect tipping amounts based on factors like server appearance or race."',
      },
      {
        id: 'view-012-q3',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What model does the article point to as a comparison for built-in service charges?',
        options: [
          'Countries outside North America where tipping is minimal but service quality remains comparable',
          'A model used only in self-checkout systems',
          'A model that has never been tried anywhere',
          'A model exclusive to luxury hotels'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article mentions "models already used in many countries outside North America where tipping is minimal or nonexistent."',
      },
      {
        id: 'view-012-q4',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What concern do critics raise about built-in service charges?',
        options: [
          'Businesses might pocket the difference rather than passing it on to workers',
          'Customers would refuse to pay them entirely',
          'They would be illegal in most jurisdictions',
          'They would eliminate restaurant jobs altogether'
        ],
        correctIndex: 0,
        skill: 'viewpoint-opinion',
        explanation: 'The article states critics worry "businesses might simply pocket the difference rather than passing it on to workers."',
      },
      {
        id: 'view-012-q5',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'Why are some service workers skeptical of replacing tipping with service charges?',
        options: [
          'Strong tippers can sometimes earn workers more than a flat charge would guarantee',
          'They believe service charges are illegal',
          'They prefer not to be paid hourly at all',
          'They believe customers would stop visiting restaurants entirely'
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'The article notes workers in upscale establishments "can sometimes earn more under the current system than a flat service charge might guarantee."',
      },
      {
        id: 'view-012-q6',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What safeguard does the author suggest would be needed if service charges replaced tipping?',
        options: [
          'Mandated transparency about how service charges are distributed',
          'A complete ban on all service charges',
          'Government-set fixed wages for all servers nationwide',
          'Elimination of menu price changes'
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'He states this would require "mandated transparency about how service charges are distributed."',
      },
      {
        id: 'view-012-q7',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "The author's tone toward the critics' concerns about businesses pocketing the difference is .....",
        options: ['acknowledging it as a legitimate, reasonable risk', 'dismissive of it as baseless', 'angry at businesses', 'indifferent to the concern'],
        correctIndex: 0,
        skill: 'tone-purpose',
        explanation: 'He calls it "a reasonable concern" and "a legitimate risk," taking the criticism seriously rather than dismissing it.',
      },
      {
        id: 'view-012-q8',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'I think this article is ___ accurate about the unpredictability issue.',
        options: ['genuinely', 'rarely', 'never', 'barely'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'The commenter confirms this matched their own work experience, fitting "genuinely" as sincere agreement.',
      },
      {
        id: 'view-012-q9',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: "The concern about upscale restaurant servers feels ___ to me too.",
        options: ['valid', 'baseless', 'confusing', 'irrelevant'],
        correctIndex: 0,
        skill: 'paraphrase-recognition',
        explanation: 'The commenter supports this with an example about friends in fine dining out-earning a flat charge, confirming agreement with "valid."',
      },
      {
        id: 'view-012-q10',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'The real challenge is ___ a system that works fairly across very different establishments.',
        options: ['designing', 'avoiding', 'banning', 'ignoring'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Designing" fits the constructive tone of identifying a challenge that needs to be solved, not avoided or ignored.',
      },
    ],
  },

  {
    id: 'view-013',
    sectionType: 'viewpoints',
    title: 'Should High Schools Start Later in the Morning?',
    difficulty: 'intermediate',
    tags: ['education', 'health', 'opinion'],
    article: {
      title: 'The Case for Later High School Start Times',
      author: 'Dr. Felicity Owusu, sleep researcher',
      body: `Every September, millions of teenagers across the country drag themselves out of bed for high schools that often start before 8 a.m., despite decades of sleep research suggesting this timing works directly against adolescent biology. It's time school boards took this evidence seriously.

During puberty, a well-documented shift in circadian rhythm delays the release of melatonin, the hormone that signals the body it's time to sleep, by roughly one to two hours compared to childhood or adulthood. This means a teenager who feels genuinely unable to fall asleep before 11 p.m. isn't necessarily exhibiting poor discipline; their biology is working against an early bedtime, regardless of how strictly parents enforce one.

When schools that have shifted start times later, research has consistently shown meaningful improvements: reduced rates of reported depression and anxiety symptoms, fewer car accidents among teen drivers during morning commutes, and modest improvements in standardized test scores, suggesting the benefits extend well beyond simply feeling less tired.

Opponents raise practical concerns that deserve genuine consideration rather than dismissal. Later start times can complicate after-school sports scheduling, create conflicts with working parents' commute schedules, and in many districts, require expensive changes to bus transportation logistics that serve multiple schools on staggered schedules.

These logistical challenges are real, but they are solvable problems, not reasons to abandon a change with this much supporting evidence. Districts that have successfully implemented later start times have done so through careful, multi-year planning processes involving transportation logistics, athletic conference scheduling, and community engagement, demonstrating that the obstacles, while genuine, are not insurmountable.`,
    },
    comments: [
      {
        author: 'A reader',
        body: `As a parent of two teenagers, I find this research {{view-013-q8}}, since I've watched both my kids struggle every single morning despite genuinely trying to go to bed earlier. That said, I think the article is a little {{view-013-q9}} about how disruptive the bus scheduling changes can actually be for smaller districts with limited budgets — our school board looked into this and the transportation costs alone were significant. Still, I'd love to see more schools at least {{view-013-q10}} starting the conversation seriously instead of dismissing it outright.`,
      },
    ],
    questions: [
      {
        id: 'view-013-q1',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "Dr. Owusu's main argument is that .....",
        options: [
          'school boards should take the evidence supporting later start times seriously',
          'teenagers should be allowed to skip school entirely if tired',
          'sleep research has no real connection to school performance',
          'all schools should start exactly at 8 a.m. nationwide'
        ],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'She states "it\u2019s time school boards took this evidence seriously" regarding later start times.',
      },
      {
        id: 'view-013-q2',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What biological change does the article describe occurring during puberty?',
        options: [
          'A delay in melatonin release by roughly one to two hours',
          'A complete elimination of the need for sleep',
          'An earlier release of melatonin than in childhood',
          'No measurable change in sleep hormones'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article describes "a well-documented shift in circadian rhythm delays the release of melatonin... by roughly one to two hours."',
      },
      {
        id: 'view-013-q3',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What improvements does the article cite from schools that shifted to later start times?',
        options: [
          'Reduced depression and anxiety symptoms, fewer car accidents, and improved test scores',
          'Improved test scores only, with no other measurable changes',
          'Reduced school attendance overall',
          'No measurable benefits of any kind'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article lists "reduced rates of reported depression and anxiety symptoms, fewer car accidents among teen drivers... and modest improvements in standardized test scores."',
      },
      {
        id: 'view-013-q4',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What practical concerns do opponents of later start times raise?',
        options: [
          'Complications with after-school sports, working parents\u2019 schedules, and bus logistics',
          'Concerns that students would simply sleep more without any benefit',
          'Concerns about increased school funding requirements only',
          'Concerns that the research is entirely fabricated'
        ],
        correctIndex: 0,
        skill: 'viewpoint-opinion',
        explanation: 'The article mentions concerns about "after-school sports scheduling," "working parents\u2019 commute schedules," and "bus transportation logistics."',
      },
      {
        id: 'view-013-q5',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'How does the author respond to the logistical concerns raised by opponents?',
        options: [
          'She acknowledges they are real but solvable, not reasons to abandon the change',
          'She dismisses them entirely as unimportant',
          'She agrees they outweigh the benefits of later start times',
          'She does not address these concerns at all'
        ],
        correctIndex: 0,
        skill: 'tone-purpose',
        explanation: 'She writes "these logistical challenges are real, but they are solvable problems, not reasons to abandon a change with this much supporting evidence."',
      },
      {
        id: 'view-013-q6',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What does the article suggest about a teenager who struggles to fall asleep before 11 p.m.?',
        options: [
          'Their biology may be working against an early bedtime, not necessarily poor discipline',
          'They are definitely exhibiting poor self-discipline',
          'This pattern only affects a small minority of teens',
          'This has no connection to circadian rhythm at all'
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'The article states this "isn\u2019t necessarily exhibiting poor discipline; their biology is working against an early bedtime."',
      },
      {
        id: 'view-013-q7',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What does the article say successful districts have done to implement later start times?',
        options: [
          'Careful, multi-year planning involving transportation, athletics, and community engagement',
          'Implemented changes overnight with no planning',
          'Ignored community input entirely',
          'Cancelled all extracurricular activities'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article describes "careful, multi-year planning processes involving transportation logistics, athletic conference scheduling, and community engagement."',
      },
      {
        id: 'view-013-q8',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'I find this research ___.',
        options: ['validating', 'baseless', 'confusing', 'irrelevant'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'The parent describes personally witnessing this pattern in their kids, confirming the research matches their experience, fitting "validating."',
      },
      {
        id: 'view-013-q9',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'I think the article is a little ___ about how disruptive the bus scheduling changes can actually be.',
        options: ['optimistic', 'pessimistic', 'accurate', 'detailed'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'The commenter pushes back with their own district\u2019s experience of significant costs, suggesting the article underestimates the issue, fitting "optimistic."',
      },
      {
        id: 'view-013-q10',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: "I'd love to see more schools at least ___ starting the conversation seriously.",
        options: ['consider', 'avoid', 'refuse', 'postpone'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Consider" fits the constructive, hopeful tone of wanting schools to engage with the idea rather than dismiss it.',
      },
    ],
  },

  {
    id: 'view-014',
    sectionType: 'viewpoints',
    title: 'Should Rent Control Be Expanded to More Housing Types?',
    difficulty: 'advanced',
    tags: ['housing', 'economy', 'opinion'],
    article: {
      title: 'Rent Control Expansion: Relief Now, Costs Later?',
      author: 'Professor Aaron Lindqvist, urban economics researcher',
      body: `As housing affordability concerns intensify across major cities, calls to expand existing rent control protections to cover more housing types, including newer purpose-built rental buildings currently exempt in many jurisdictions, have gained significant political momentum. The economic evidence on this question, however, is considerably more contested than advocates on either side typically acknowledge.

Proponents of expansion argue, with good reason, that tenants in newer buildings face the same affordability pressures as those in older, already-controlled units, and that exempting new construction creates an arbitrary distinction that primarily benefits landlords rather than addressing the underlying problem of rising rents.

The strongest economic concern raised by researchers is rent control's well-documented effect on new housing supply. When rent control applies broadly, including to new construction, developers in numerous studied markets have responded by reducing the pace of new rental housing development, since the long-term profitability of rental projects becomes harder to predict, instead favouring condominium development not subject to the same restrictions.

This creates a genuine policy tension: rent control provides immediate, tangible relief to existing tenants in covered units, while potentially constraining the very supply growth that economists broadly agree is necessary to address affordability at a structural level over the longer term. Both effects are real and well-supported by research; they simply operate on different timescales and benefit different groups of people.

Some jurisdictions have attempted middle-ground approaches, such as exempting new construction from rent control for a set number of years, typically ranging from ten to twenty, before the units become subject to standard rent control rules, an approach intended to preserve some supply incentive while still eventually extending tenant protections. Early evidence on these compromise approaches remains limited but suggests they may moderate, without fully eliminating, the supply-side concerns that broader, unconditional rent control expansion raises.`,
    },
    comments: [
      {
        author: 'A reader',
        body: `I appreciate that this article doesn't pretend there's an easy answer here, since I think a lot of housing debates get reduced to oversimplified slogans. That said, I find the supply argument {{view-014-q8}} convincing in cities where I've actually seen developers shift toward condos specifically to avoid rent control, so it's hard to dismiss as just theoretical. The compromise approach with a delayed phase-in sounds {{view-014-q9}}, though I wonder if twenty years is too long for tenants who need relief much sooner. Either way, I appreciate articles that {{view-014-q10}} the genuine tension instead of pretending one side is obviously right.`,
      },
    ],
    questions: [
      {
        id: 'view-014-q1',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "Professor Lindqvist's main argument is that .....",
        options: [
          'rent control expansion involves a genuine policy tension between immediate relief and long-term supply effects',
          'rent control should be eliminated entirely with no exceptions',
          'rent control has no negative effects whatsoever',
          'all new housing should be exempt from rent control permanently'
        ],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'He describes "a genuine policy tension" between immediate tenant relief and longer-term supply effects, both "real and well-supported by research."',
      },
      {
        id: 'view-014-q2',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What argument do proponents of expanding rent control make?',
        options: [
          'Exempting new construction creates an arbitrary distinction that mainly benefits landlords',
          'Rent control should only apply to commercial buildings',
          'New buildings should be exempt from all housing regulations',
          'Tenants in older buildings do not deserve any protections'
        ],
        correctIndex: 0,
        skill: 'viewpoint-opinion',
        explanation: 'The article states proponents argue exempting new construction "creates an arbitrary distinction that primarily benefits landlords rather than addressing the underlying problem."',
      },
      {
        id: 'view-014-q3',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What is the strongest economic concern researchers raise about broad rent control?',
        options: [
          'Its well-documented effect on reducing new housing supply',
          'Its effect on increasing property taxes citywide',
          'Its tendency to increase tenant turnover rates',
          'Its impact on commercial real estate prices'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article identifies "rent control\u2019s well-documented effect on new housing supply" as "the strongest economic concern raised by researchers."',
      },
      {
        id: 'view-014-q4',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What have developers done in markets where rent control applies broadly, according to the article?',
        options: [
          'Reduced the pace of new rental housing development, favouring condos instead',
          'Increased rental housing development significantly',
          'Stopped building any housing at all',
          'Converted all existing rentals into condos immediately'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article states developers "have responded by reducing the pace of new rental housing development... instead favouring condominium development."',
      },
      {
        id: 'view-014-q5',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What middle-ground approach does the article describe some jurisdictions attempting?',
        options: [
          'Exempting new construction from rent control for a set number of years before standard rules apply',
          'Applying rent control retroactively to buildings built decades ago only',
          'Eliminating rent control entirely after a trial period',
          'Allowing landlords to opt out of rent control permanently for a fee'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article describes "exempting new construction from rent control for a set number of years, typically ranging from ten to twenty."',
      },
      {
        id: 'view-014-q6',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What does early evidence suggest about these compromise approaches?',
        options: [
          'They may moderate, without fully eliminating, supply-side concerns',
          'They completely eliminate all supply-side concerns',
          'They have no measurable effect of any kind',
          'They consistently fail in every jurisdiction that tries them'
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'The article states early evidence "suggests they may moderate, without fully eliminating, the supply-side concerns."',
      },
      {
        id: 'view-014-q7',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "The author's tone toward both sides of the rent control debate is best described as .....",
        options: ['even-handed, acknowledging valid points on both sides', 'strongly biased toward landlords', 'strongly biased toward tenants', 'dismissive of the entire debate'],
        correctIndex: 0,
        skill: 'tone-purpose',
        explanation: 'He describes proponents\u2019 arguments as having "good reason" while also taking supply concerns seriously, treating "both effects" as "real and well-supported by research."',
      },
      {
        id: 'view-014-q8',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'I find the supply argument ___ convincing.',
        options: ['genuinely', 'never', 'barely', 'rarely'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'The commenter supports this with personal observation of developers shifting to condos, confirming sincere agreement with "genuinely."',
      },
      {
        id: 'view-014-q9',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'The compromise approach with a delayed phase-in sounds ___.',
        options: ['reasonable', 'absurd', 'illegal', 'pointless'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'The commenter follows with a measured concern about timing rather than outright rejection, fitting a positive but qualified word like "reasonable."',
      },
      {
        id: 'view-014-q10',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'I appreciate articles that ___ the genuine tension instead of pretending one side is obviously right.',
        options: ['acknowledge', 'ignore', 'hide', 'deny'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Acknowledge" fits the commenter\u2019s appreciation for the article\u2019s balanced treatment of the issue.',
      },
    ],
  },

  {
    id: 'view-015',
    sectionType: 'viewpoints',
    title: 'Should Public Transit Be Fare-Free?',
    difficulty: 'advanced',
    tags: ['transit', 'municipal policy', 'opinion'],
    article: {
      title: 'Free Transit Sounds Great — But Can Cities Actually Afford It?',
      author: 'Renata Kowalczyk, urban policy writer',
      body: `A handful of cities worldwide have eliminated transit fares entirely in recent years, and the idea has gained enthusiastic supporters in municipal politics elsewhere, often framed as both a climate measure and an equity measure rolled into one. The appeal is obvious, but the practical case deserves more scrutiny than the slogans typically receiving.

Ridership increases reliably follow fare elimination, sometimes substantially, which is genuinely good news for both congestion reduction and emissions if those new riders are switching from car trips rather than simply replacing walking or cycling trips they would have taken anyway, a distinction that varies considerably between studied cities.

The financial reality is that fares typically cover only a portion of a transit system's operating costs in most cities, with the remainder already funded through other tax revenue, meaning eliminating fares requires replacing that lost revenue from somewhere, whether through increased general taxation, reduced service elsewhere, or other funding sources entirely.

Some advocates argue the administrative cost of fare collection itself, including fare gates, enforcement staff, and payment processing infrastructure, is substantial enough that eliminating fares might cost less than commonly assumed once those offsetting savings are factored in, though independent analyses of this specific claim have produced mixed results depending on a system's existing fare infrastructure.

A frequently overlooked consideration is that increased ridership from free fares can strain system capacity on already-crowded routes, potentially requiring additional vehicles, drivers, and infrastructure investment to maintain service quality, costs that must be weighed against the policy's benefits rather than treated as a separate, unrelated issue.`,
    },
    comments: [
      {
        author: 'A reader',
        body: `I take transit every day, and I think the capacity concern this article raises is {{view-015-q8}} — our system is already packed during rush hour, so I genuinely worry free fares would make my commute worse before it gets better. That said, the equity argument still feels {{view-015-q9}} to me, since I know plenty of people who simply can't afford the current fares and end up walking long distances instead. I guess what I'd really want to see is a {{view-015-q10}} approach, maybe free fares paired with real investment in capacity first.`,
      },
    ],
    questions: [
      {
        id: 'view-015-q1',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "Renata Kowalczyk's main argument is that .....",
        options: [
          'free transit has real appeal but the practical financial case deserves more scrutiny',
          'free transit should be implemented everywhere immediately with no analysis',
          'transit fares should never be eliminated under any circumstances',
          'transit systems should be entirely privatized'
        ],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'She states "the practical case deserves more scrutiny than the slogans typically receiving," while acknowledging "the appeal is obvious."',
      },
      {
        id: 'view-015-q2',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What does the article say happens to ridership when fares are eliminated?',
        options: [
          'Ridership increases reliably, sometimes substantially',
          'Ridership typically decreases due to overcrowding concerns',
          'Ridership stays exactly the same in nearly all cases',
          'Ridership data is too inconsistent to draw conclusions'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article states "ridership increases reliably follow fare elimination, sometimes substantially."',
      },
      {
        id: 'view-015-q3',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What financial reality does the article highlight about fares?',
        options: [
          'Fares typically cover only a portion of operating costs, with the rest already from taxes',
          'Fares cover the entire cost of most transit systems',
          'Most transit systems require no outside funding at all',
          'Fare revenue has no connection to operating costs'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article states "fares typically cover only a portion of a transit system\u2019s operating costs in most cities, with the remainder already funded through other tax revenue."',
      },
      {
        id: 'view-015-q4',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What claim about administrative costs does the article mention, along with its caveat?',
        options: [
          'Eliminating fare collection costs might offset some losses, but independent analyses show mixed results',
          'Fare collection costs nothing to maintain in any city',
          'All independent analyses agree eliminating fares saves significant money',
          'Administrative costs are not discussed anywhere in the article'
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'The article notes this claim exists but that "independent analyses of this specific claim have produced mixed results."',
      },
      {
        id: 'view-015-q5',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What capacity concern does the article raise about free transit?',
        options: [
          'Increased ridership could strain already-crowded routes, requiring more investment',
          'Free transit would eliminate the need for any new vehicles',
          'Capacity issues only affect rural transit systems',
          'Capacity concerns are unrelated to fare policy entirely'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article states "increased ridership from free fares can strain system capacity on already-crowded routes, potentially requiring additional vehicles, drivers, and infrastructure."',
      },
      {
        id: 'view-015-q6',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'According to the article, why does the climate benefit of free transit vary between cities?',
        options: [
          'It depends on whether new riders are switching from cars or simply replacing walking/cycling trips',
          'It depends entirely on the size of the city',
          'It depends on whether the city has an airport',
          'Climate benefits are identical in every city regardless of conditions'
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'The article notes the benefit depends on "whether those new riders are switching from car trips rather than simply replacing walking or cycling trips."',
      },
      {
        id: 'view-015-q7',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "The author's tone toward free transit advocates is best described as .....",
        options: ['respectful but analytically cautious', 'dismissive and mocking', 'fully supportive with no reservations', 'hostile toward the entire idea'],
        correctIndex: 0,
        skill: 'tone-purpose',
        explanation: 'She acknowledges "the appeal is obvious" while consistently pushing for more rigorous scrutiny of the practical claims, a respectful but cautious stance.',
      },
      {
        id: 'view-015-q8',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'I think the capacity concern this article raises is ___.',
        options: ['legitimate', 'fabricated', 'irrelevant', 'amusing'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'The commenter confirms this concern based on personal commuting experience, fitting "legitimate" as sincere agreement.',
      },
      {
        id: 'view-015-q9',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'The equity argument still feels ___ to me.',
        options: ['compelling', 'baseless', 'outdated', 'confusing'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'The commenter supports this with an example of people unable to afford fares, confirming agreement with "compelling."',
      },
      {
        id: 'view-015-q10',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: "What I'd really want to see is a ___ approach.",
        options: ['balanced', 'reckless', 'pointless', 'identical'],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'The commenter proposes combining free fares with capacity investment, suggesting a "balanced" approach rather than either extreme alone.',
      },
    ],
  },

  {
    id: 'view-016',
    sectionType: 'viewpoints',
    title: 'Should Restaurants Be Required to Compost Food Waste?',
    difficulty: 'intermediate',
    tags: ['environment', 'food industry', 'opinion'],
    article: {
      title: 'Mandatory Composting for Restaurants Makes Sense, With Caveats',
      author: 'Theo Bramante, food industry columnist',
      body: `Several cities have begun requiring restaurants to separate food waste for composting rather than sending it to landfill alongside regular garbage, a policy that has generated both genuine enthusiasm and legitimate frustration from restaurant owners navigating the change.

The environmental case is reasonably strong. Food waste decomposing in landfills produces methane, a greenhouse gas far more potent than carbon dioxide over short timeframes, while composted food waste breaks down through a different process that produces dramatically less methane and ultimately yields usable soil amendment material instead of contributing purely to landfill volume.

For restaurant owners, the practical burden of compliance varies considerably depending on existing infrastructure and kitchen layout. Establishments need additional bins, staff need training on what can and cannot be composted, which is more complicated than many people assume given contamination rules around items like compostable-labelled packaging that many composting facilities still cannot actually process, and pickup costs for separate organics collection often exceed what restaurants previously paid for regular garbage pickup alone.

Smaller, independent restaurants operating on already thin profit margins have voiced the loudest concerns, arguing that compliance costs disproportionately burden businesses least able to absorb them, compared to larger chains with more operational flexibility and purchasing power to negotiate better rates with waste haulers.

Some jurisdictions have responded by offering compliance grants or phased timelines for smaller establishments, attempting to balance the genuine environmental benefits against the real financial strain the requirement places on businesses already operating with little margin for error.`,
    },
    comments: [
      {
        author: 'A reader',
        body: `I own a small café, and I think this article gets the contamination issue exactly right — we genuinely struggled at first figuring out which "compostable" packaging our hauler would actually accept, since the labels are {{view-016-q8}} misleading compared to what's truly processable. The cost concern for small businesses also rings true; our organics pickup costs noticeably {{view-016-q9}} than our old garbage-only bill did. That said, I do think the environmental argument is hard to {{view-016-q10}}, so I'm glad some grants exist, even if I wish ours covered more of the actual cost.`,
      },
    ],
    questions: [
      {
        id: 'view-016-q1',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "Theo Bramante's main argument is that .....",
        options: [
          'mandatory composting makes environmental sense but creates real compliance burdens worth acknowledging',
          'mandatory composting should be immediately abandoned everywhere',
          'restaurants face no real burden from composting requirements',
          'only large chains should ever be required to compost'
        ],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'He acknowledges "the environmental case is reasonably strong" while also detailing "the practical burden of compliance" restaurants face.',
      },
      {
        id: 'view-016-q2',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'Why does food waste in landfills pose a particular environmental concern?',
        options: [
          'It produces methane, a greenhouse gas more potent than carbon dioxide',
          'It takes up significantly more physical space than other garbage',
          'It attracts more pests than other types of waste',
          'It cannot be processed by any waste management system'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article states decomposing food waste "produces methane, a greenhouse gas far more potent than carbon dioxide over short timeframes."',
      },
      {
        id: 'view-016-q3',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What complicates training staff on composting rules, according to the article?',
        options: [
          'Contamination rules around items like compostable-labelled packaging that facilities often cannot process',
          'Staff are generally uninterested in learning new procedures',
          'Composting rules are identical everywhere, making training unnecessary',
          'No training is actually required for compliance'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article mentions "contamination rules around items like compostable-labelled packaging that many composting facilities still cannot actually process."',
      },
      {
        id: 'view-016-q4',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'Who has voiced the loudest concerns about compliance costs?',
        options: [
          'Smaller, independent restaurants with thin profit margins',
          'Large restaurant chains with significant purchasing power',
          'Waste management companies themselves',
          'Customers concerned about menu price increases'
        ],
        correctIndex: 0,
        skill: 'viewpoint-opinion',
        explanation: 'The article states "smaller, independent restaurants operating on already thin profit margins have voiced the loudest concerns."',
      },
      {
        id: 'view-016-q5',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'How have some jurisdictions responded to concerns from smaller businesses?',
        options: [
          'By offering compliance grants or phased timelines for smaller establishments',
          'By exempting all restaurants from the requirement entirely',
          'By requiring only large chains to comply, with no exceptions',
          'By eliminating the composting requirement altogether'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article states jurisdictions "responded by offering compliance grants or phased timelines for smaller establishments."',
      },
      {
        id: 'view-016-q6',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What advantage do larger chains have over smaller restaurants regarding compliance, according to the article?',
        options: [
          'More operational flexibility and purchasing power to negotiate better rates',
          'Complete exemption from all composting requirements',
          'Access to free composting services not available to small businesses',
          'No need to train staff on composting procedures'
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'The article contrasts smaller restaurants with "larger chains with more operational flexibility and purchasing power to negotiate better rates."',
      },
      {
        id: 'view-016-q7',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "The author's tone toward restaurant owners' concerns is best described as .....",
        options: ['sympathetic and taking them seriously', 'dismissive of their complaints', 'hostile toward small business owners', 'indifferent to their situation'],
        correctIndex: 0,
        skill: 'tone-purpose',
        explanation: 'He describes the frustration as "legitimate" and details the specific burdens in depth, showing genuine sympathy for the practical challenges.',
      },
      {
        id: 'view-016-q8',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'The labels are ___ misleading compared to what\u2019s truly processable.',
        options: ['genuinely', 'never', 'rarely', 'barely'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'The commenter confirms real confusion about labelling, fitting "genuinely" as a sincere intensifier.',
      },
      {
        id: 'view-016-q9',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'Our organics pickup costs noticeably ___ than our old garbage-only bill did.',
        options: ['more', 'less', 'cheaper', 'fewer'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"More" correctly forms the comparative for an increased cost, matching the cost concern raised in the article.',
      },
      {
        id: 'view-016-q10',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'I do think the environmental argument is hard to ___.',
        options: ['dismiss', 'support', 'understand', 'measure'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Hard to dismiss" fits the commenter\u2019s acknowledgment that the environmental case is genuinely strong, despite the cost concerns.',
      },
    ],
  },

  {
    id: 'view-017',
    sectionType: 'viewpoints',
    title: 'Should Universities Expand Trade and Vocational Programs?',
    difficulty: 'intermediate',
    tags: ['education', 'employment', 'opinion'],
    article: {
      title: 'It\u2019s Time Higher Education Took Trades Seriously',
      author: 'Bianca Hollowell, workforce development researcher',
      body: `For decades, the dominant narrative in education policy has positioned a four-year university degree as the default path to a stable career, while trade and vocational training has often been treated as a secondary option for students who, in an unfortunate but common phrase, "couldn't get into university." This framing deserves serious reconsideration.

Skilled trades, including electricians, plumbers, and industrial technicians, are facing significant labour shortages in many regions, driven partly by an aging existing workforce approaching retirement and partly by decades of declining enrollment in trade programs as university attendance was promoted as the preferred path for nearly all students.

The financial case for trades deserves more attention than it typically receives. Many trade apprenticeships pay students while they train rather than requiring tuition payments, and skilled tradespeople in high-demand fields can often earn salaries comparable to or exceeding many university graduates, particularly when factoring in the substantial student debt many degree holders carry for years after graduation.

Some universities have begun expanding co-located vocational programs or formal partnerships with trade schools, recognizing that not every student is well-served by, or genuinely interested in, the traditional four-year academic path, and that offering genuine alternatives within or alongside the university system could better serve a wider range of student goals and aptitudes.

None of this is an argument against university education, which remains essential for many career paths and offers genuine value beyond direct career preparation. It is, however, an argument against treating it as the only respectable or sensible option, a framing that has arguably contributed to both labour shortages in skilled trades and unnecessary debt burdens for students whose goals might have been better served by a different path entirely.`,
    },
    comments: [
      {
        author: 'A reader',
        body: `As someone who went the trade route myself after high school, I think this article is {{view-017-q8}} overdue — I spent years feeling like I'd made some kind of inferior choice, even though I make a great living and never had any student debt. That said, I think the article slightly {{view-017-q9}} how much the cultural shift away from this stigma still needs to happen; even now, relatives still ask when I'm going to "actually go to school." I'm glad to see more programs {{view-017-q10}} this path seriously, even if attitudes still have a ways to go.`,
      },
    ],
    questions: [
      {
        id: 'view-017-q1',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "Bianca Hollowell's main argument is that .....",
        options: [
          'the framing of trades as a secondary option to university deserves serious reconsideration',
          'university education should be eliminated entirely',
          'trade schools should replace all universities',
          'no student should ever attend university'
        ],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'She states "this framing deserves serious reconsideration," referring to trades being treated as a secondary option.',
      },
      {
        id: 'view-017-q2',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What two factors does the article say are driving labour shortages in skilled trades?',
        options: [
          'An aging existing workforce and declining enrollment in trade programs',
          'New automation technology and reduced demand for tradespeople',
          'Government restrictions on trade certification',
          'A complete lack of interest in manual labour among all generations'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article cites shortages "driven partly by an aging existing workforce... and partly by decades of declining enrollment in trade programs."',
      },
      {
        id: 'view-017-q3',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What financial advantage does the article mention about trade apprenticeships?',
        options: [
          'Many pay students while they train, rather than requiring tuition payments',
          'They guarantee higher salaries than every university degree',
          'They are entirely funded by the federal government',
          'They require no training period of any kind'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article states "many trade apprenticeships pay students while they train rather than requiring tuition payments."',
      },
      {
        id: 'view-017-q4',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What have some universities begun doing, according to the article?',
        options: [
          'Expanding co-located vocational programs or partnerships with trade schools',
          'Eliminating all trade-related programs entirely',
          'Requiring all students to complete a trade apprenticeship first',
          'Banning vocational training discussions on campus'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article notes universities "have begun expanding co-located vocational programs or formal partnerships with trade schools."',
      },
      {
        id: 'view-017-q5',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'Does the author argue against university education entirely?',
        options: [
          'No, she states it "remains essential for many career paths and offers genuine value"',
          'Yes, she believes universities should be closed',
          'She does not address university education at all',
          'Yes, but only for students under 25'
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'She explicitly states "none of this is an argument against university education, which remains essential for many career paths."',
      },
      {
        id: 'view-017-q6',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What does the author argue the "university as default" framing has contributed to?',
        options: [
          'Labour shortages in skilled trades and unnecessary student debt burdens',
          'Increased enrollment in trade programs',
          'A complete lack of demand for university graduates',
          'No measurable effects of any kind'
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'She argues this framing "has arguably contributed to both labour shortages in skilled trades and unnecessary debt burdens for students."',
      },
      {
        id: 'view-017-q7',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "The author's tone toward the traditional framing of trades as a secondary option is .....",
        options: ['critical, viewing it as outdated and harmful', 'fully supportive of the traditional framing', 'indifferent to the framing entirely', 'uncertain and unable to take a position'],
        correctIndex: 0,
        skill: 'tone-purpose',
        explanation: 'She describes the framing using the phrase "unfortunate but common" and argues it "deserves serious reconsideration," a clearly critical stance.',
      },
      {
        id: 'view-017-q8',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'I think this article is ___ overdue.',
        options: ['long', 'never', 'barely', 'rarely'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: '"Long overdue" is a fixed expression meaning something should have happened much sooner, fitting the commenter\u2019s personal frustration.',
      },
      {
        id: 'view-017-q9',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'I think the article slightly ___ how much the cultural shift still needs to happen.',
        options: ['underestimates', 'overstates', 'invents', 'ignores entirely'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'The commenter follows by describing ongoing personal stigma, suggesting the article doesn\u2019t fully capture how much work remains, fitting "underestimates."',
      },
      {
        id: 'view-017-q10',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: "I'm glad to see more programs ___ this path seriously.",
        options: ['taking', 'avoiding', 'rejecting', 'hiding'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Taking... seriously" is the natural collocation matching the commenter\u2019s positive view of institutional change.',
      },
    ],
  },

  {
    id: 'view-018',
    sectionType: 'viewpoints',
    title: 'Should Cities Prioritize Bike Lanes Over Car Lanes Downtown?',
    difficulty: 'advanced',
    tags: ['transit', 'urban planning', 'opinion'],
    article: {
      title: 'The Downtown Bike Lane Debate Misses the Bigger Picture',
      author: 'Wesley Marchetti, transportation columnist',
      body: `Few municipal policy debates generate as much sustained controversy as proposals to convert downtown car lanes into protected bike infrastructure, with business owners and drivers frequently predicting economic catastrophe, while cycling advocates predict transformative benefits. The actual evidence from cities that have made this trade-off tells a more measured story than either side's rhetoric suggests.

Traffic studies from numerous cities that have implemented protected downtown bike lanes show that overall vehicle travel times in the surrounding area typically increase modestly in the months immediately following installation, before partially recovering as drivers adjust routes and habits, though rarely returning fully to pre-installation baseline travel times.

The economic impact on local businesses, a frequent flashpoint in these debates, shows considerable variation depending on business type and existing customer base. Studies focused on retail corridors have generally found neutral to modestly positive effects on business revenue following bike lane installation, while business owner perception surveys conducted in the same areas often report more negative expectations than the actual sales data ultimately supports, suggesting a persistent gap between anticipated and actual economic impact.

Safety data is less ambiguous: cities with protected bike infrastructure consistently report significant reductions in cyclist injury rates compared to unprotected painted lanes or no dedicated infrastructure at all, a finding that holds across the large majority of studied cities regardless of other local variables.

The genuine policy question isn't simply whether bike lanes are good or bad in the abstract, but rather how cities should weigh modest, temporary traffic impacts and business owners' understandable anxiety against measurable safety improvements and the longer-term goal of providing genuine transportation alternatives to driving, a trade-off reasonable people can evaluate differently depending on which factors they weigh most heavily.`,
    },
    comments: [
      {
        author: 'A reader',
        body: `I own a small shop on a street that got a new bike lane last year, and I have to say, my own experience matches what this article describes — I was {{view-018-q8}} worried about losing parking-dependent customers, but my actual sales barely changed. The safety data point doesn't surprise me either, since I've personally seen far fewer close calls between cyclists and cars since the lane went in. I do think the article is right that this debate gets {{view-018-q9}} framed as all-or-nothing, when really it's about weighing real trade-offs that {{view-018-q10}} from street to street.`,
      },
    ],
    questions: [
      {
        id: 'view-018-q1',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "Wesley Marchetti's main argument is that .....",
        options: [
          'the actual evidence on bike lanes is more measured than either side\u2019s rhetoric suggests',
          'bike lanes always significantly harm local businesses',
          'bike lanes have no measurable effects of any kind',
          'cities should never install protected bike infrastructure'
        ],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'He states "the actual evidence... tells a more measured story than either side\u2019s rhetoric suggests."',
      },
      {
        id: 'view-018-q2',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What does the article say happens to vehicle travel times after bike lane installation?',
        options: [
          'They typically increase modestly at first, then partially recover as drivers adjust',
          'They immediately return to baseline with no change at all',
          'They permanently double in the surrounding area',
          'They decrease immediately after installation'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article states travel times "typically increase modestly in the months immediately following installation, before partially recovering."',
      },
      {
        id: 'view-018-q3',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "What gap does the article identify between business owner perceptions and actual sales data?",
        options: [
          'Owner surveys often report more negative expectations than the actual sales data supports',
          'Owners consistently underestimate how much bike lanes help their sales',
          'There is no measurable gap between perception and reality',
          'Sales data is always worse than owner expectations'
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'The article notes perception surveys "often report more negative expectations than the actual sales data ultimately supports."',
      },
      {
        id: 'view-018-q4',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What does the article say about safety data related to protected bike infrastructure?',
        options: [
          'Cities with protected infrastructure consistently report significant reductions in cyclist injury rates',
          'Safety data shows no measurable difference between infrastructure types',
          'Protected lanes are associated with increased injury rates',
          'Safety data is too inconsistent to draw any conclusions'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article states cities "consistently report significant reductions in cyclist injury rates compared to unprotected painted lanes or no dedicated infrastructure."',
      },
      {
        id: 'view-018-q5',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'How does the article frame the "genuine policy question" at stake?',
        options: [
          'How to weigh modest traffic impacts and business concerns against safety improvements and longer-term goals',
          'Whether bike lanes are good or bad in the abstract',
          'Whether cars should be banned from cities entirely',
          'Whether cyclists should be required to register their bikes'
        ],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'He states the real question is "how cities should weigh modest, temporary traffic impacts and business owners\u2019 understandable anxiety against measurable safety improvements."',
      },
      {
        id: 'view-018-q6',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "What does the article say about studies focused on retail corridors?",
        options: [
          'They generally found neutral to modestly positive effects on business revenue',
          'They found consistently severe negative effects on all businesses',
          'No such studies have ever been conducted',
          'They found bike lanes always double retail revenue'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article states these studies "have generally found neutral to modestly positive effects on business revenue."',
      },
      {
        id: 'view-018-q7',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "The author's tone toward both supporters and opponents of bike lanes is best described as .....",
        options: ['even-handed, treating both sides\u2019 concerns as understandable', 'fully aligned with cycling advocates', 'fully aligned with business owners and drivers', 'mocking of both sides equally'],
        correctIndex: 0,
        skill: 'tone-purpose',
        explanation: 'He describes business owners\u2019 concerns as "understandable" while also validating safety benefits, treating the issue as "a trade-off reasonable people can evaluate differently."',
      },
      {
        id: 'view-018-q8',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'I was ___ worried about losing parking-dependent customers.',
        options: ['initially', 'never', 'rarely', 'occasionally'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Initially" fits the contrast being drawn — early worry followed by the reality that sales "barely changed."',
      },
      {
        id: 'view-018-q9',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'I do think the article is right that this debate gets ___ framed as all-or-nothing.',
        options: ['often', 'never', 'rarely', 'barely'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Often" fits the commenter\u2019s agreement that this is a recurring, common framing problem in the debate.',
      },
      {
        id: 'view-018-q10',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'Real trade-offs that ___ from street to street.',
        options: ['vary', 'remain', 'disappear', 'repeat'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: '"Vary" fits the idea that the trade-offs differ depending on the specific location, matching the article\u2019s nuanced framing.',
      },
    ],
  },

  {
    id: 'view-019',
    sectionType: 'viewpoints',
    title: 'Should Employers Offer Unlimited Paid Time Off?',
    difficulty: 'intermediate',
    tags: ['workplace', 'opinion'],
    article: {
      title: 'Unlimited Vacation Policies: Generous Perk or Clever Trap?',
      author: 'Camille Dufresne, workplace culture writer',
      body: `Unlimited paid time off has become an increasingly common perk offered by employers, particularly in tech and other white-collar industries, marketed as a sign of trust in employees and a more flexible alternative to traditional accrued vacation systems. The reality for many workers under these policies, however, often falls short of the generous image the term suggests.

The central irony researchers have repeatedly documented is that employees under unlimited PTO policies frequently take less time off, not more, compared to colleagues with traditional, clearly defined vacation allowances. Without an explicit number of days to use, ambiguous social pressure and unclear expectations about what counts as "reasonable" time off lead many employees toward self-imposed restraint rather than generous usage.

There's also a financial consideration that benefits employers specifically: traditional vacation policies typically require companies to pay out unused vacation days when an employee leaves, a real financial liability that disappears entirely under unlimited policies, since there are no defined "unused days" to track or pay out, a detail rarely mentioned in announcements celebrating the policy as an employee benefit.

Not every unlimited PTO policy functions poorly; some companies pair the policy with clear cultural norms, minimum time-off requirements, and visible leadership modelling of actually taking vacation, approaches that research suggests can meaningfully offset the ambiguity problem that undermines the policy elsewhere.

For employees evaluating a job offer that includes unlimited PTO, the honest advice is to look past the headline policy and ask pointed questions about actual usage patterns among current employees, manager attitudes toward time off, and whether the company tracks or discourages extended absences in practice, since the real value of the policy varies enormously based on these underlying cultural factors rather than the policy's name alone.`,
    },
    comments: [
      {
        author: 'A reader',
        body: `My company switched to unlimited PTO last year, and I think this article is {{view-019-q8}} accurate about the ambiguity problem — I actually took fewer days off that year than I used to under our old system, mostly because I genuinely wasn't sure what counted as reasonable. The point about companies avoiding payout liability is {{view-019-q9}} something I hadn't considered before, and it does make me a little more cynical about why this perk became so popular. I think the article's advice to ask pointed questions during interviews is {{view-019-q10}}, and I wish I'd done that myself before accepting my current job.`,
      },
    ],
    questions: [
      {
        id: 'view-019-q1',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "Camille Dufresne's main argument is that .....",
        options: [
          'unlimited PTO policies often fall short of their generous marketing, due to ambiguity and employer incentives',
          'unlimited PTO is always a scam with no legitimate benefits',
          'traditional vacation policies should be eliminated entirely',
          'employees should never accept jobs offering unlimited PTO'
        ],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'She states the reality "often falls short of the generous image the term suggests," detailing both ambiguity issues and employer financial incentives.',
      },
      {
        id: 'view-019-q2',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What central irony have researchers documented about unlimited PTO policies?',
        options: [
          'Employees often take less time off than under traditional, defined vacation systems',
          'Employees always take significantly more time off than allowed',
          'Employers consistently lose money under these policies',
          'These policies have no measurable effect on time-off usage'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article states "employees under unlimited PTO policies frequently take less time off, not more, compared to colleagues with traditional... allowances."',
      },
      {
        id: 'view-019-q3',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What financial benefit does unlimited PTO provide to employers specifically?',
        options: [
          'Eliminating the liability of paying out unused vacation days when employees leave',
          'A direct tax credit for offering the policy',
          'Reduced health insurance premiums',
          'Government subsidies for flexible workplace policies'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article explains "traditional vacation policies typically require companies to pay out unused vacation days... a real financial liability that disappears entirely under unlimited policies."',
      },
      {
        id: 'view-019-q4',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What approach does the article say can offset the ambiguity problem in unlimited PTO policies?',
        options: [
          'Clear cultural norms, minimum time-off requirements, and visible leadership modelling',
          'Removing all time-off policies entirely',
          'Requiring employees to justify every day off in writing',
          'Eliminating the unlimited policy after one year'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article mentions companies pairing the policy "with clear cultural norms, minimum time-off requirements, and visible leadership modelling."',
      },
      {
        id: 'view-019-q5',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What advice does the article give to employees evaluating a job offer with unlimited PTO?',
        options: [
          'Ask pointed questions about actual usage patterns and manager attitudes toward time off',
          'Always reject job offers that include this policy',
          'Assume the policy works the same way at every company',
          'Negotiate for a traditional policy instead in every case'
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'The article advises employees "ask pointed questions about actual usage patterns among current employees, manager attitudes toward time off."',
      },
      {
        id: 'view-019-q6',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'Does the article claim that every unlimited PTO policy functions poorly?',
        options: [
          'No, it states "not every unlimited PTO policy functions poorly"',
          'Yes, it claims all such policies are equally flawed',
          'The article does not address this question',
          'Yes, but only for companies founded after 2010'
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'The article explicitly states "not every unlimited PTO policy functions poorly," noting some companies implement it well.',
      },
      {
        id: 'view-019-q7',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "The author's tone toward unlimited PTO policies is best described as .....",
        options: ['skeptical but balanced, noting both problems and exceptions', 'fully supportive with no concerns', 'completely dismissive of the concept', 'angry at all employers who offer it'],
        correctIndex: 0,
        skill: 'tone-purpose',
        explanation: 'She raises significant concerns while also acknowledging "not every unlimited PTO policy functions poorly," a skeptical but balanced stance.',
      },
      {
        id: 'view-019-q8',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'I think this article is ___ accurate about the ambiguity problem.',
        options: ['genuinely', 'never', 'barely', 'rarely'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'The commenter confirms this matched their own experience, fitting "genuinely" as sincere agreement.',
      },
      {
        id: 'view-019-q9',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'The point about avoiding payout liability is ___ something I hadn\u2019t considered before.',
        options: ['honestly', 'never', 'rarely', 'hardly'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Honestly" fits the casual, sincere admission that this point was new information to the commenter.',
      },
      {
        id: 'view-019-q10',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: "The article's advice to ask pointed questions during interviews is ___.",
        options: ['solid', 'useless', 'illegal', 'confusing'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'The commenter follows by wishing they had taken this advice themselves, confirming they view it positively, fitting "solid."',
      },
    ],
  },

  {
    id: 'view-020',
    sectionType: 'viewpoints',
    title: 'Should Elementary Report Cards Drop Letter Grades?',
    difficulty: 'intermediate',
    tags: ['education', 'opinion'],
    article: {
      title: 'Why Letter Grades Fail Young Learners',
      author: 'Concetta Ruiz, elementary education consultant',
      body: `A growing number of elementary schools have moved away from traditional letter grades in favour of narrative report cards or standards-based assessments that describe specific skills a child has or hasn't yet mastered, rather than reducing performance to a single letter. Having worked in elementary education for over fifteen years, I've become convinced this shift, while imperfect, represents genuine progress.

Letter grades compress enormous amounts of information, a child's effort, specific skill gaps, areas of strength, and overall progress, into a single symbol that tells parents and students remarkably little about what to actually do next. A "C" in reading reveals nothing about whether a child struggles with phonics, comprehension, vocabulary, or reading stamina specifically, information that's actually useful for targeted support.

Critics of moving away from letter grades raise a legitimate concern: that narrative reports, if not carefully written, can become vague, jargon-filled documents that are actually less useful to parents than a simple, familiar letter grade, especially for parents juggling multiple children and limited time to parse lengthy written assessments.

This criticism points to an implementation problem rather than a flaw in the underlying concept. Schools that have successfully transitioned away from letter grades typically invest significant time training teachers to write clear, specific, actionable narrative feedback, and provide structured templates that prevent the vague, generic language critics rightly worry about.

There's also a developmental argument worth considering: young children are still forming their sense of academic identity and capability, and research on motivation suggests that early, repeated exposure to single-letter judgments can contribute to fixed mindsets about ability at an age when growth-oriented framing would likely serve children's long-term relationship with learning far better.`,
    },
    comments: [
      {
        author: 'A reader',
        body: `As a teacher who switched to narrative report cards a few years ago, I think this article is {{view-020-q8}} about the implementation challenge — writing genuinely useful, specific feedback for thirty students each term is incredibly time-consuming, and I don't think that labour cost gets discussed enough. That said, the developmental point about fixed mindsets really {{view-020-q9}} with me, since I've seen firsthand how a single bad letter grade can shape how a young student talks about themselves for the rest of the year. I just wish there were more {{view-020-q10}} support and time built into our schedules to do this well.`,
      },
    ],
    questions: [
      {
        id: 'view-020-q1',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "Concetta Ruiz's main argument is that .....",
        options: [
          'moving away from letter grades to narrative reports represents genuine progress, despite being imperfect',
          'letter grades should be used even more frequently in elementary schools',
          'all forms of student assessment should be eliminated entirely',
          'narrative reports have no real benefits over letter grades'
        ],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'She states she has "become convinced this shift, while imperfect, represents genuine progress."',
      },
      {
        id: 'view-020-q2',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What problem does the article identify with letter grades like a "C" in reading?',
        options: [
          'It reveals nothing about which specific skill, like phonics or comprehension, a child struggles with',
          'It is always inaccurate regardless of student performance',
          'It only applies to students above a certain age',
          'It cannot be calculated using standard methods'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article states a "C" in reading "reveals nothing about whether a child struggles with phonics, comprehension, vocabulary, or reading stamina specifically."',
      },
      {
        id: 'view-020-q3',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What legitimate concern do critics of narrative reports raise?',
        options: [
          'Narrative reports, if poorly written, can become vague and less useful than a simple letter grade',
          'Narrative reports are always illegal to use in public schools',
          'Narrative reports take no time at all for teachers to write',
          'Narrative reports have never been tried anywhere'
        ],
        correctIndex: 0,
        skill: 'viewpoint-opinion',
        explanation: 'The article notes critics worry narrative reports "can become vague, jargon-filled documents that are actually less useful to parents than a simple, familiar letter grade."',
      },
      {
        id: 'view-020-q4',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'How does the author respond to this criticism about vague narrative reports?',
        options: [
          'She frames it as an implementation problem rather than a flaw in the underlying concept',
          'She agrees the concept itself is fundamentally flawed',
          'She dismisses the criticism as completely baseless',
          'She does not address this criticism at all'
        ],
        correctIndex: 0,
        skill: 'tone-purpose',
        explanation: 'She states "this criticism points to an implementation problem rather than a flaw in the underlying concept."',
      },
      {
        id: 'view-020-q5',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What have schools that successfully transitioned away from letter grades typically done?',
        options: [
          'Invested significant time training teachers and providing structured templates',
          'Eliminated teacher training entirely to save costs',
          'Hired outside companies to write all report cards',
          'Reduced the frequency of report cards to once per year'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The article states successful schools "invest significant time training teachers... and provide structured templates."',
      },
      {
        id: 'view-020-q6',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: 'What does the developmental argument in the article suggest about early letter grade exposure?',
        options: [
          'It can contribute to fixed mindsets about ability at a young age',
          'It has no effect on how children view their own abilities',
          'It always improves a child\u2019s motivation to learn',
          'It is only relevant for children over age twelve'
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'The article suggests "early, repeated exposure to single-letter judgments can contribute to fixed mindsets about ability."',
      },
      {
        id: 'view-020-q7',
        kind: 'mcq',
        refersTo: 'Article',
        prompt: "The author's professional background relevant to this topic is that she .....",
        options: ['has worked in elementary education for over fifteen years', 'is a parent of school-aged children only', 'works as a school district lawyer', 'has no direct experience in education'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'She states "having worked in elementary education for over fifteen years" as her relevant background.',
      },
      {
        id: 'view-020-q8',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'I think this article is ___ about the implementation challenge.',
        options: ['right', 'wrong', 'silent', 'confused'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'The commenter confirms this concern based on personal teaching experience, fitting agreement with "right."',
      },
      {
        id: 'view-020-q9',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'The developmental point about fixed mindsets really ___ with me.',
        options: ['resonates', 'conflicts', 'disappears', 'argues'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: '"Resonates with" is the natural collocation for something that strongly connects with someone\u2019s personal experience.',
      },
      {
        id: 'view-020-q10',
        kind: 'blank',
        refersTo: 'Reader comment',
        prompt: 'I just wish there were more ___ support and time built into our schedules.',
        options: ['structured', 'random', 'occasional', 'pointless'],
        correctIndex: 0,
        skill: 'paraphrase-recognition',
        explanation: 'This echoes the article\u2019s point about "structured templates" helping teachers write better feedback, matching "structured."',
      },
    ],
  },
];
