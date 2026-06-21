import type { CorrespondenceSet } from '../types/content';

export const correspondenceSets: CorrespondenceSet[] = [
  {
    id: 'corr-001',
    sectionType: 'correspondence',
    title: 'Returning a Borrowed Camping Trailer',
    difficulty: 'advanced',
    tags: ['favours between friends', 'repairs'],
    messages: [
      {
        label: 'Message 1',
        from: 'Derek',
        to: 'Kevin',
        subject: 'Update on the trailer',
        body: `Dear Kevin,

I hope you and Sandra are settling in nicely after your move to Edmonton. I wanted to give you an update on your camping trailer, which I know you've been asking about. Thank you again for letting me borrow it for the whole summer. It made such a difference for our family trips.

I had originally planned to drive the trailer back to you by the end of August, but things didn't quite work out. During our last trip to Algonquin Provincial Park in early August, I noticed a small leak in the roof near the back window. It rained heavily one night and by morning, the mattress in the rear sleeping area was completely soaked. I felt terrible about it. I should have checked the seals before we headed out, but it simply didn't occur to me.

When we got back to Ottawa, I took the trailer to Rideau RV Services on Hawthorne Road to get the leak repaired. The technician told me the sealant around the window frame had dried out and cracked, which is what caused the water to get in. He replaced all the sealant and also noticed that one of the tire rims had a slow leak, so I had him fix that too. The repair bill came to $385, and of course that's completely on me. I also replaced the damaged mattress at a camping store in Kanata for about $120. I wanted everything to be in better shape than when I first borrowed it.

The repairs took longer than expected because the shop had to order a specific type of sealant, so the trailer was there for nearly two weeks. I finally picked it up this past Saturday, September 14th. Everything looks great now, and I gave the whole interior a thorough cleaning.

Now, for getting the trailer back to you. My brother Paul is driving to Edmonton on October 5th for a work conference, and he offered to tow it for me. Alternatively, I could bring it myself the following weekend around Thanksgiving, and Margaret and I could visit you and Sandra at the same time. I'd honestly prefer that second option because I'd love to see your new place, but I understand if you need the trailer back sooner since you mentioned a fall camping trip to Jasper.

Let me know what works best, and again, I'm really sorry about the leak. I'm just grateful you trusted me with it all summer.

Take care,
Derek`,
      },
      {
        label: 'Message 2 (Reply)',
        from: 'Kevin',
        to: 'Derek',
        subject: 'Re: Update on the trailer',
        body: `Dear Derek,

Thanks so much for the {{corr-001-q7}} update on the trailer. I'm glad you got everything taken care of, and please don't worry too much about the leak — that sealant was probably {{corr-001-q8}} before you even borrowed it.

It was really generous of you to cover all the repair costs yourself, including the {{corr-001-q9}}.

As for getting the trailer back, I think the Thanksgiving weekend plan sounds {{corr-001-q10}}. Sandra and I would love to have you and Margaret stay with us. Our Jasper trip isn't until late October anyway, so there's no rush at all. We've got plenty of room in the new house, so plan to {{corr-001-q11}}.

We can't wait to catch up!

Best,
Kevin`,
      },
    ],
    questions: [
      {
        id: 'corr-001-q1',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Derek is writing to Kevin mainly to .....',
        options: [
          'update him on the trailer and arrange its return',
          'ask Kevin for money to cover repair costs',
          'invite Kevin and Sandra for Thanksgiving',
          'apologize for not returning the trailer on time',
        ],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'The letter covers what happened to the trailer, the repairs, and proposes options for returning it — an update plus arranging the return, not just an apology or invitation.',
        commonMistake: 'The letter does include an apology, but that\u2019s one part of a longer update, not the main reason Derek is writing.',
      },
      {
        id: 'corr-001-q2',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'The water damage to the trailer occurred at .....',
        options: ["Derek's home in Ottawa", 'Rideau RV Services on Hawthorne Road', 'Algonquin Provincial Park', 'a campground near Edmonton'],
        correctIndex: 2,
        skill: 'detail-scanning',
        explanation: 'Derek writes the leak was noticed "during our last trip to Algonquin Provincial Park in early August."',
        commonMistake: 'Rideau RV Services is where the trailer was repaired afterward, not where the damage happened.',
      },
      {
        id: 'corr-001-q3',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'The technician found that the roof leak was caused by .....',
        options: ['a crack in the rear window glass', 'deteriorated sealant around the window frame', "a hole in the trailer's roof panel", 'water pooling from a damaged tire rim'],
        correctIndex: 1,
        skill: 'detail-scanning',
        explanation: 'The technician found "the sealant around the window frame had dried out and cracked, which is what caused the water to get in."',
        commonMistake: 'The tire rim issue was a separate problem found during the same visit, unrelated to the roof leak.',
      },
      {
        id: 'corr-001-q4',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Derek picked up the trailer on .....',
        options: ['the last weekend of August', 'October 5th', 'the weekend before Thanksgiving', 'September 14th'],
        correctIndex: 3,
        skill: 'detail-scanning',
        explanation: 'Derek writes "I finally picked it up this past Saturday, September 14th."',
        commonMistake: 'October 5th is when Paul is driving to Edmonton, not when Derek picked up the trailer from the shop.',
      },
      {
        id: 'corr-001-q5',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Kevin probably needs the trailer back soon because he .....',
        options: ['is selling it before winter', 'has asked Derek to return it immediately', 'is planning a fall camping trip', 'needs it before the warranty expires'],
        correctIndex: 2,
        skill: 'inference',
        explanation: 'Derek mentions understanding "if you need the trailer back sooner since you mentioned a fall camping trip to Jasper" — implying Kevin\u2019s own trip is the reason for any urgency.',
      },
      {
        id: 'corr-001-q6',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Derek would prefer to .....',
        options: ['bring the trailer himself around Thanksgiving', 'have Paul tow it on October 5th', 'wait until Kevin visits Ottawa', 'ship it by a delivery service'],
        correctIndex: 0,
        skill: 'viewpoint-opinion',
        explanation: 'Derek writes "I\u2019d honestly prefer that second option" (bringing it himself at Thanksgiving) "because I\u2019d love to see your new place."',
      },
      {
        id: 'corr-001-q7',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'Thanks so much for the ___ update on the trailer.',
        options: ['detailed', 'brief', 'delayed', 'confusing'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'Derek\u2019s letter was long and covered many specifics, so "detailed" fits — the opposite of "brief," and nothing suggests it was "delayed" or "confusing."',
      },
      {
        id: 'corr-001-q8',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'That sealant was probably ___ before you even borrowed it.',
        options: ['deteriorating', 'newly installed', 'recently replaced', 'perfectly fine'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: 'Kevin is reassuring Derek the leak likely wasn\u2019t his fault, implying the sealant was "deteriorating" already — the opposite of "newly installed" or "perfectly fine."',
      },
      {
        id: 'corr-001-q9',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'It was really generous of you to cover all the repair costs yourself, including the ___.',
        options: ['mattress replacement', 'towing fee', 'insurance premium', 'cleaning service'],
        correctIndex: 0,
        skill: 'paraphrase-recognition',
        explanation: 'Message 1 mentions Derek "also replaced the damaged mattress," one of the costs he covered — no towing fee, insurance, or cleaning service was mentioned.',
      },
      {
        id: 'corr-001-q10',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'I think the Thanksgiving weekend plan sounds ___.',
        options: ['ideal', 'inconvenient', 'unnecessary', 'complicated'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'Kevin follows up by saying he and Sandra "would love" to host them, which fits "ideal," not a negative word like "inconvenient" or "complicated."',
      },
      {
        id: 'corr-001-q11',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: "We've got plenty of room in the new house, so plan to ___.",
        options: ["stay as long as you'd like", 'leave early', 'bring your own bedding', 'arrive separately'],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'Mentioning "plenty of room" right before this blank implies an invitation to stay comfortably, matching "stay as long as you\u2019d like."',
      },
    ],
  },

  {
    id: 'corr-002',
    sectionType: 'correspondence',
    title: 'Explaining a Parking Ticket Mix-Up',
    difficulty: 'advanced',
    tags: ['favours between friends', 'disputes'],
    messages: [
      {
        label: 'Message 1',
        from: 'Jordan',
        to: 'Casey',
        subject: 'Something happened with your car',
        body: `Dear Casey,

I hope the conference in Calgary went well! I wanted to fill you in on something that happened while I had your car last week, since I know you'll be back this weekend and might notice it on the windshield.

On Wednesday, I parked outside the dentist's office on Glenmore Trail for what I thought would be a quick 20-minute appointment. It ended up running almost two hours because they squeezed in an extra filling, and when I got back to the car, there was a parking ticket tucked under the wiper.

At first I assumed I'd just run over the meter time, but when I read the ticket more closely, it turned out the entire block had been converted to a residential permit zone back in July, something I had no idea about since I don't usually park on that street. The fine was $95, which honestly stung a bit.

I called the city's parking services office on Thursday morning to ask about disputing it, since the signage marking the new permit zone was partly obscured by an overgrown tree branch. The agent, a woman named Denise, said I could submit photo evidence and a written appeal within 14 days, and that disputes like this are often successful when signage is genuinely unclear. I went back that afternoon, photographed the obscured sign from a few angles, and mailed the appeal package on Friday.

In the meantime, I went ahead and paid the $95 myself, since the ticket noted a $25 late fee kicks in after 30 days, and I didn't want it sitting unresolved while we wait to hear back. If the appeal is successful, the city would refund the full amount directly to whoever paid it, which would be me in this case.

I also noticed your front passenger tire looked a little low, so I had it topped up with air while I was already at the gas station near my place — no charge for that, of course.

Let me know if you'd rather I just send you the $95 directly instead of waiting on the appeal, since I know that might feel simpler. Either way works for me, I just didn't want you to be surprised by any of this.

Talk soon,
Jordan`,
      },
      {
        label: 'Message 2 (Reply)',
        from: 'Casey',
        to: 'Jordan',
        subject: 'Re: Something happened with your car',
        body: `Dear Jordan,

Thanks so much for letting me know — I really appreciate you being so {{corr-002-q7}} about the whole thing, especially since none of it was really your fault.

Please don't worry about sending me anything right now. I'd rather just wait and see {{corr-002-q8}} the appeal goes through, since it sounds like Denise thought you had a decent case. If it doesn't work out, we can sort out the $95 then.

Honestly, I had no idea that block had {{corr-002-q9}} into a permit zone either, so I'm not surprised the signage confused you. That tree branch has been an eyesore for months; I'm glad it finally caused someone to complain about it!

Also, thank you for {{corr-002-q10}} the tire — I'd been meaning to check that before my trip and completely forgot.

I'll be back Saturday afternoon, so let's catch up {{corr-002-q11}} then.

Thanks again,
Casey`,
      },
    ],
    questions: [
      {
        id: 'corr-002-q1',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Jordan is writing to Casey mainly to .....',
        options: [
          "explain a parking ticket received while borrowing her car",
          'ask Casey to pay for a recent car repair',
          "apologize for damaging Casey's car",
          'invite Casey to a dentist appointment',
        ],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'The letter walks through what happened with the parking ticket, the dispute process, and how Jordan handled payment — an explanation of the situation, not a request for money or an apology for damage.',
      },
      {
        id: 'corr-002-q2',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'The parking ticket was issued because .....',
        options: ['Jordan exceeded the parking meter time', 'the block had become a residential permit zone', 'Jordan parked in a no-parking zone', "the car's registration had expired"],
        correctIndex: 1,
        skill: 'detail-scanning',
        explanation: 'Jordan writes "the entire block had been converted to a residential permit zone back in July."',
        commonMistake: 'Jordan initially assumed it was a meter issue, but the letter clarifies that wasn\u2019t the real cause.',
      },
      {
        id: 'corr-002-q3',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Jordan disputes the ticket because .....',
        options: ['the fine amount was calculated incorrectly', 'the signage for the new permit zone was partly obscured', 'the ticket was issued to the wrong license plate', 'parking services made a clerical error'],
        correctIndex: 1,
        skill: 'detail-scanning',
        explanation: 'Jordan calls "to ask about disputing it, since the signage marking the new permit zone was partly obscured by an overgrown tree branch."',
      },
      {
        id: 'corr-002-q4',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Jordan paid the $95 fine .....',
        options: ['before calling parking services', 'after the appeal was rejected', 'while waiting to hear back on the appeal', 'using a payment plan over 30 days'],
        correctIndex: 2,
        skill: 'detail-scanning',
        explanation: 'Jordan writes "in the meantime, I went ahead and paid the $95 myself... while we wait to hear back."',
      },
      {
        id: 'corr-002-q5',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'If the appeal succeeds, the refund will go to .....',
        options: ["the city's general fund", 'whoever paid the fine, which was Jordan', "Casey, since it's her car", 'Denise at parking services'],
        correctIndex: 1,
        skill: 'inference',
        explanation: 'Jordan explains "the city would refund the full amount directly to whoever paid it, which would be me in this case."',
      },
      {
        id: 'corr-002-q6',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Jordan asks Casey to decide whether .....',
        options: [
          'Jordan should just send her the $95 directly instead of waiting on the appeal',
          'Casey should call parking services herself',
          'they should split the cost of the fine',
          'Casey should pick up the appeal paperwork',
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Jordan writes "let me know if you\u2019d rather I just send you the $95 directly instead of waiting on the appeal."',
      },
      {
        id: 'corr-002-q7',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'I really appreciate you being so ___ about the whole thing.',
        options: ['upfront', 'secretive', 'dismissive', 'careless'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'Casey is thanking Jordan for proactively explaining everything in detail, which fits "upfront" (honest and direct) — the opposite of "secretive" or "dismissive."',
      },
      {
        id: 'corr-002-q8',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: "I'd rather just wait and see ___ the appeal goes through.",
        options: ['whether', 'how', 'which', 'who'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Whether" correctly introduces an indirect yes/no question about an uncertain outcome (will it go through or not).',
      },
      {
        id: 'corr-002-q9',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'I had no idea that block had ___ into a permit zone either.',
        options: ['turned', 'fallen', 'moved', 'broken'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: '"Turned into" is the natural collocation for a gradual change in status (a block becoming a permit zone).',
      },
      {
        id: 'corr-002-q10',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'Thank you for ___ the tire.',
        options: ['topping up', 'replacing', 'checking', 'removing'],
        correctIndex: 0,
        skill: 'paraphrase-recognition',
        explanation: 'Message 1 says Jordan "had it topped up with air," so "topping up" matches exactly what was actually done.',
      },
      {
        id: 'corr-002-q11',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: "Let's catch up ___ then.",
        options: ['properly', 'briefly', 'online', 'separately'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'The warm, relieved tone of the reply suggests wanting a proper, relaxed catch-up in person, fitting "properly" better than "briefly" or "online."',
      },
    ],
  },

  {
    id: 'corr-003',
    sectionType: 'correspondence',
    title: 'Explaining a Library Book Damage Dispute',
    difficulty: 'advanced',
    tags: ['library programs', 'disputes'],
    messages: [
      {
        label: 'Message 1',
        from: 'Renata',
        to: 'Diego',
        subject: 'A library fee on your account',
        body: `Dear Diego,

I wanted to update you about the book I borrowed using your library card last month, since I just got an email from the Riverside Public Library that I think you should see too.

You'll remember I needed to check out "The Cartographer's Daughter" for my book club, and since my own card was still suspended over that overdue fine from the spring, you let me use yours. I returned it to the drop box outside the Elm Street branch on the evening of August 22nd, two days before it was due.

Yesterday, I got an email saying the book had been assessed by library staff and found to have water damage along the spine and several pages, and that a replacement fee of $34 had been added to the account — which would be your account, since it was checked out on your card.

Here's the thing: I'm almost certain that damage wasn't from me. When I returned it, I remember flipping through it one last time to make sure I hadn't left a bookmark inside, and the pages looked completely fine. The drop box is outdoor and uncovered, though, and there was a pretty heavy rainstorm that same night, so my guess is the book sat in the box and got rained on before staff collected it the next morning.

I called the branch this morning and spoke to a library assistant named Felix, who said I could file a damage dispute with photos or a written explanation, but that without dated proof of the book's condition at drop-off, these disputes don't always succeed. He mentioned the deadline to file is 21 days from the date the fee was added.

I'm happy to write up the dispute myself since it's my situation, but it would technically need to come from you as the account holder, or at least include your authorization. I could also just pay you back the $34 directly and we skip the whole dispute process if that's easier for you.

Let me know what you'd prefer — I really am sorry this turned into such a hassle over a library book.

Take care,
Renata`,
      },
      {
        label: 'Message 2 (Reply)',
        from: 'Diego',
        to: 'Renata',
        subject: 'Re: A library fee on your account',
        body: `Dear Renata,

Thanks for the {{corr-003-q7}} explanation — and please don't feel too bad about it, these things happen.

Honestly, your theory about the rain makes a lot of sense to me, so I think it's {{corr-003-q8}} trying the dispute, even without perfect proof. Worst case, we're out $34 anyway, so we don't really lose anything by {{corr-003-q9}} first.

I'll send you a quick written authorization tonight so you can {{corr-003-q10}} the paperwork with Felix whenever you get a chance.

If the dispute doesn't go through for whatever reason, don't worry about paying me back right away — we can {{corr-003-q11}} it out whenever, no rush at all.

Talk soon,
Diego`,
      },
    ],
    questions: [
      {
        id: 'corr-003-q1',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Renata is writing to Diego mainly to .....',
        options: [
          'update him about a library fee linked to his account and ask how to proceed',
          'ask him to renew her suspended library card',
          "recommend a new book for his book club",
          'apologize for losing a library book',
        ],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'The letter explains the new fee on Diego\u2019s account and lays out options for resolving it, asking what he\u2019d prefer.',
      },
      {
        id: 'corr-003-q2',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: "Renata used Diego's library card because .....",
        options: ['her own card was suspended due to an unpaid fine', 'the library required two cards per checkout', "Diego's card had a longer borrowing period", 'her card had expired'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Renata writes her "own card was still suspended over that overdue fine from the spring."',
      },
      {
        id: 'corr-003-q3',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Renata believes the water damage to the book most likely happened .....',
        options: ['while she was reading it at home', 'at the book club meeting', 'in the outdoor drop box during a rainstorm', 'during shipping from another branch'],
        correctIndex: 2,
        skill: 'inference',
        explanation: 'She reasons "the drop box is outdoor and uncovered... there was a pretty heavy rainstorm that same night, so my guess is the book sat in the box and got rained on."',
      },
      {
        id: 'corr-003-q4',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'According to Felix, disputes are more likely to succeed when .....',
        options: ['the account holder has no prior late fees', "there is dated proof of the book's condition at drop-off", 'the dispute is filed within 48 hours', 'the book is returned to its original branch'],
        correctIndex: 1,
        skill: 'detail-scanning',
        explanation: 'Felix said "without dated proof of the book\u2019s condition at drop-off, these disputes don\u2019t always succeed" — implying such proof helps.',
      },
      {
        id: 'corr-003-q5',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'The deadline to file a dispute is .....',
        options: ['14 days from the due date', '21 days from the date the fee was added', '30 days from the return date', 'there is no deadline'],
        correctIndex: 1,
        skill: 'detail-scanning',
        explanation: 'Felix mentioned "the deadline to file is 21 days from the date the fee was added."',
      },
      {
        id: 'corr-003-q6',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: "Renata offers Diego two options: filing a dispute (with his authorization) or .....",
        options: ['Diego filing the dispute alone', 'Renata paying him back the $34 directly', 'splitting the fee with the library', 'returning the book for a refund'],
        correctIndex: 1,
        skill: 'paraphrase-recognition',
        explanation: 'Renata offers "I could also just pay you back the $34 directly and we skip the whole dispute process if that\u2019s easier for you."',
      },
      {
        id: 'corr-003-q7',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'Thanks for the ___ explanation.',
        options: ['thorough', 'vague', 'delayed', 'confusing'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: "Renata's letter walked through the situation in detail, matching \"thorough\" rather than a negative word like \"vague\" or \"confusing.\"",
      },
      {
        id: 'corr-003-q8',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: "I think it's ___ trying the dispute, even without perfect proof.",
        options: ['worth', 'risky', 'pointless', 'illegal'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Worth trying" is the natural collocation here — Diego is saying it\u2019s a reasonable thing to attempt, not "pointless" or "risky."',
      },
      {
        id: 'corr-003-q9',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'We don\u2019t really lose anything by ___ first.',
        options: ['trying', 'waiting', 'paying', 'refusing'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: 'Diego just said it\u2019s worth attempting the dispute, so "trying" logically follows as the low-risk first step.',
      },
      {
        id: 'corr-003-q10',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'So you can ___ the paperwork with Felix.',
        options: ['sort out', 'throw away', 'photograph', 'mail back'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: '"Sort out the paperwork" fits the context of completing the dispute process with Felix at the library.',
      },
      {
        id: 'corr-003-q11',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'We can ___ it out whenever, no rush at all.',
        options: ['figure', 'rule', 'leave', 'block'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: '"Figure it out" is the natural phrasal verb meaning to resolve something casually, matching the relaxed "no rush at all" tone.',
      },
    ],
  },

  {
    id: 'corr-004',
    sectionType: 'correspondence',
    title: 'Explaining a Missed Flight Connection',
    difficulty: 'advanced',
    tags: ['travel', 'family'],
    messages: [
      {
        label: 'Message 1',
        from: 'Aunt Lillian',
        to: 'Noah',
        subject: 'Sorry I missed the pickup!',
        body: `Dear Noah,

I'm so sorry about the mix-up at the airport yesterday — I know you and your mom drove all the way to Pearson to get me, and I wasn't even on that flight. Let me explain what happened.

My original flight from Halifax was supposed to connect through Montreal, landing in Toronto by 4:15 p.m. But the first leg was delayed by almost two hours because of a mechanical issue with the plane, and by the time we finally took off, there was no way I'd make my connection in Montreal, which was only scheduled to be 50 minutes anyway.

When we landed in Montreal, the connection had already left without me. I went straight to the Air Canada service counter, and an agent named Priya rebooked me onto the next available flight to Toronto, which didn't depart until 8:40 p.m. She also gave me a $15 meal voucher for the wait, which I used on an overpriced sandwich at one of the airport cafés.

I tried calling your mom's cell as soon as I knew about the delay, but it went straight to voicemail, so I left a message and also sent a text. I'm not sure if either ever came through — the airport Wi-Fi was spotty in that terminal.

I ended up landing in Toronto around 9:50 p.m. and just took a taxi to your place rather than ask anyone to come back out that late. The fare was $58, which I'll happily cover myself since it was my own travel hiccup, not anyone else's problem.

I'm hoping we can still do the dinner we planned for tomorrow night instead, if that still works for everyone. I feel terrible about the wasted trip to the airport and want to make it up to you both somehow.

Love,
Aunt Lillian`,
      },
      {
        label: 'Message 2 (Reply)',
        from: 'Noah',
        to: 'Aunt Lillian',
        subject: 'Re: Sorry I missed the pickup!',
        body: `Dear Aunt Lillian,

Please don't worry about it — these things happen, and it definitely wasn't {{corr-004-q7}} fault. We did wonder what happened when you never showed up at arrivals!

We never got the voicemail or the text, so it's a good thing you {{corr-004-q8}} a taxi instead of waiting around for us to figure it out.

Honestly, you really don't need to {{corr-004-q9}} the taxi fare — Mom already said she'd rather just put that money toward a nice bottle of wine for dinner tomorrow instead.

Speaking of which, dinner tomorrow still works perfectly, so there's {{corr-004-q10}} to feel bad about. We'll see you around 6?

Safe travels for the rest of your trip, and try to {{corr-004-q11}} on flying through Montreal next time!

Love,
Noah`,
      },
    ],
    questions: [
      {
        id: 'corr-004-q1',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Lillian is writing to Noah mainly to .....',
        options: ['explain why she missed her airport pickup', 'ask for a ride to the airport', 'complain about Air Canada', 'cancel the planned dinner'],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'The letter walks through exactly what caused her to miss the pickup, from the flight delay through to taking a taxi.',
      },
      {
        id: 'corr-004-q2',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: "The original delay was caused by .....",
        options: ['a mechanical issue with the first flight', 'bad weather in Montreal', 'a missed connection due to oversleeping', 'an overbooked flight'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Lillian writes "the first leg was delayed by almost two hours because of a mechanical issue with the plane."',
      },
      {
        id: 'corr-004-q3',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What did the airline agent give Lillian for the wait?',
        options: ['A $15 meal voucher', 'A free hotel room', 'A seat upgrade', 'A refund for the ticket'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Lillian mentions Priya "gave me a $15 meal voucher for the wait."',
      },
      {
        id: 'corr-004-q4',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Why did the calls and texts likely not reach Noah\u2019s mom?',
        options: ['The airport Wi-Fi was spotty', 'Her phone was turned off', 'Lillian had the wrong number', 'International calling was blocked'],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'Lillian notes "the airport Wi-Fi was spotty in that terminal," suggesting the messages may not have sent properly.',
      },
      {
        id: 'corr-004-q5',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'How did Lillian get from the Toronto airport to the house?',
        options: ['She took a taxi', 'A friend picked her up', 'She took public transit', 'She stayed at an airport hotel'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'She writes she "just took a taxi to your place rather than ask anyone to come back out that late."',
      },
      {
        id: 'corr-004-q6',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What does Lillian hope will still happen?',
        options: ['The planned dinner the next night', 'A second airport pickup', 'A refund from the airline', 'A rescheduled flight home'],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'She closes by hoping "we can still do the dinner we planned for tomorrow night."',
      },
      {
        id: 'corr-004-q7',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: "It definitely wasn't ___ fault.",
        options: ['your', 'my', 'their', 'our'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: 'Noah is reassuring Lillian directly, so the possessive pronoun referring to her is "your."',
      },
      {
        id: 'corr-004-q8',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: "It's a good thing you ___ a taxi instead of waiting around.",
        options: ['took', 'take', 'were taking', 'will take'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: 'This refers to a completed past action, so the simple past "took" is correct.',
      },
      {
        id: 'corr-004-q9',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'You really don\u2019t need to ___ the taxi fare.',
        options: ['cover', 'drive', 'park', 'book'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'Message 1 used the word "cover" for paying a cost ("I\u2019ll happily cover myself"), and Noah is referring back to that same idea.',
      },
      {
        id: 'corr-004-q10',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: "There's ___ to feel bad about.",
        options: ['nothing', 'something', 'everything', 'anything'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: 'Noah is reassuring her there\u2019s no reason to feel guilty, so "nothing" fits the positive, dismissive reassurance.',
      },
      {
        id: 'corr-004-q11',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'Try to ___ on flying through Montreal next time!',
        options: ['pass', 'count', 'rely', 'insist'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: '"Pass on" means to avoid or decline something, fitting the joking suggestion to avoid that connection next time.',
      },
    ],
  },

  {
    id: 'corr-005',
    sectionType: 'correspondence',
    title: 'Updating a Friend After Adopting a Rescue Cat',
    difficulty: 'intermediate',
    tags: ['pets', 'friends'],
    messages: [
      {
        label: 'Message 1',
        from: 'Simone',
        to: 'Hana',
        subject: 'Meet our new cat!',
        body: `Hi Hana,

Remember how I mentioned we were thinking about adopting? Well, it happened! We brought home a cat from the Burlington Humane Society this past Sunday, and I wanted to tell you all about her before you come over next week.

Her name is Pepper, and she's a three-year-old tabby who was surrendered when her previous owner moved into a building that didn't allow pets. The shelter staff said she's generally easygoing, but she does have a bit of a nervous streak around loud noises, so we've been keeping things calm at home for the first little while.

The adoption process took longer than I expected. We filled out an application on a Tuesday, had a home visit from a volunteer on the Thursday to make sure our apartment was cat-friendly, and didn't get final approval until the following Monday. The adoption fee was $135, which included her spay surgery, vaccinations, and a microchip.

The first two days were rough, honestly. Pepper hid under our bed almost constantly and barely touched her food. By day three, though, she started coming out in the evenings, and now she actually seeks out attention, especially from my partner, Theo, who she seems to have decided is her favourite.

One thing I wanted to mention before your visit: Pepper still startles easily, so we're asking guests to avoid sudden movements or loud talking for the first few visits. I know that's a bit different from how relaxed our old apartment used to be, but I think it'll help her settle in faster.

We're so excited for you to meet her! Let me know if you have any questions before Saturday.

Talk soon,
Simone`,
      },
      {
        label: 'Message 2 (Reply)',
        from: 'Hana',
        to: 'Simone',
        subject: 'Re: Meet our new cat!',
        body: `Hi Simone,

I'm so happy for you both — Pepper sounds {{corr-005-q7}}! I can't wait to meet her on Saturday.

Don't worry at all about the noise thing — I'll make sure to {{corr-005-q8}} when I come over, and I'll let her come to me instead of trying to pet her right away.

It's funny that she's already picked Theo as her favourite after such a short time. Our old cat did the exact same thing with my brother, so I guess some cats just {{corr-005-q9}} certain people quickly.

I'm really glad the home visit went well too — I remember being so nervous before ours, even though there was honestly {{corr-005-q10}} to worry about.

See you Saturday — should I {{corr-005-q11}} anything for her, like a treat or a toy?

Talk soon,
Hana`,
      },
    ],
    questions: [
      {
        id: 'corr-005-q1',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Simone is writing to Hana mainly to .....',
        options: ['introduce their newly adopted cat before a visit', 'ask Hana to help find a lost cat', 'invite Hana to volunteer at a shelter', 'explain why they can\u2019t host Hana this week'],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'The letter introduces Pepper and shares context ahead of Hana\u2019s planned visit.',
      },
      {
        id: 'corr-005-q2',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Why was Pepper surrendered to the shelter?',
        options: ['Her previous owner moved somewhere that didn\u2019t allow pets', 'She had a medical condition', 'Her owner passed away', 'She didn\u2019t get along with another pet'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Simone writes Pepper "was surrendered when her previous owner moved into a building that didn\u2019t allow pets."',
      },
      {
        id: 'corr-005-q3',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What did the adoption fee include?',
        options: ['Spay surgery, vaccinations, and a microchip', 'A litter box and food for one month', 'A free veterinary check-up only', 'Pet insurance for the first year'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The fee "included her spay surgery, vaccinations, and a microchip."',
      },
      {
        id: 'corr-005-q4',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: "How did Pepper's behaviour change between day one and day three?",
        options: ['She went from hiding constantly to coming out and seeking attention', 'She became more anxious over time', 'She stopped eating entirely', 'She tried to escape the apartment'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Simone describes Pepper hiding constantly at first, then "by day three... she started coming out in the evenings" and now seeks attention.',
      },
      {
        id: 'corr-005-q5',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Why does Simone ask guests to avoid sudden movements or loud talking?',
        options: ['Pepper still startles easily and they want her to settle in', 'Loud noises are not allowed in the building', 'It triggers a known medical issue', 'It is shelter policy for new adoptions'],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'Simone explains "Pepper still startles easily" and that keeping things calm "will help her settle in faster."',
      },
      {
        id: 'corr-005-q6',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'How long did the adoption process take from application to approval?',
        options: ['About a week', 'A single afternoon', 'Over a month', 'Three days'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The application was filled out on a Tuesday and "didn\u2019t get final approval until the following Monday" — about a week.',
      },
      {
        id: 'corr-005-q7',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'Pepper sounds ___!',
        options: ['wonderful', 'troublesome', 'forgettable', 'ordinary'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'Hana\u2019s excited, supportive tone ("I\u2019m so happy for you both") fits a positive word like "wonderful," not a negative one.',
      },
      {
        id: 'corr-005-q8',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: "I'll make sure to ___ when I come over.",
        options: ['stay calm and quiet', 'bring loud toys', 'arrive unannounced', 'rearrange the furniture'],
        correctIndex: 0,
        skill: 'paraphrase-recognition',
        explanation: 'This directly responds to Simone\u2019s request to avoid sudden movements or loud talking, matching "stay calm and quiet."',
      },
      {
        id: 'corr-005-q9',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'I guess some cats just ___ certain people quickly.',
        options: ['take to', 'run from', 'forget about', 'ignore'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: '"Take to" means to develop a liking for someone quickly, matching the idea of Pepper bonding fast with Theo.',
      },
      {
        id: 'corr-005-q10',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'There was honestly ___ to worry about.',
        options: ['nothing', 'something', 'everything', 'plenty'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: 'Hana is saying her own nervousness was unnecessary in hindsight, so "nothing" fits the reassuring tone.',
      },
      {
        id: 'corr-005-q11',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'Should I ___ anything for her, like a treat or a toy?',
        options: ['bring', 'borrow', 'return', 'avoid'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: 'Hana is offering to bring something for Pepper to the visit, so "bring" is the natural verb here.',
      },
    ],
  },

  {
    id: 'corr-006',
    sectionType: 'correspondence',
    title: 'Thanking a Neighbour for Snow Plowing',
    difficulty: 'foundation',
    tags: ['neighbours', 'winter'],
    messages: [
      {
        label: 'Message 1',
        from: 'Walter',
        to: 'Beatrice',
        subject: 'Thank you for clearing the driveway',
        body: `Dear Beatrice,

I wanted to write and properly thank you for plowing our driveway again this week. I noticed it was already cleared by 7 a.m. on Wednesday, right after that big snowfall, and I know that must have meant getting up extra early to get to it before you headed to work yourself.

This is now the third time this winter you've done this for us, and with my knee still recovering from surgery, it's made a real difference. Shovelling that driveway myself would have been close to impossible right now, and we would have been stuck waiting for the city plow, which I know can take days on our side street.

I'd like to offer to cover the cost of gas for your snowblower, or maybe put together a gift card for that hardware store you mentioned needing new tools from. Please let me know which would actually be useful to you, since I don't want to guess wrong and get you something you won't use.

Also, if it's ever inconvenient for you to keep doing this, please just tell me honestly. I don't want you to feel obligated every time it snows, especially once my knee has fully healed and I can manage it myself again.

Thanks again for being such a thoughtful neighbour.

Warmly,
Walter`,
      },
      {
        label: 'Message 2 (Reply)',
        from: 'Beatrice',
        to: 'Walter',
        subject: 'Re: Thank you for clearing the driveway',
        body: `Dear Walter,

You really don't need to thank me — I'm always up early anyway, so it only takes me a few {{corr-006-q7}} minutes to do your driveway while I'm already out there with the snowblower.

A gift card for the hardware store would actually be {{corr-006-q8}} useful, if you really want to do something. I have been meaning to replace a couple of old tools.

Please don't worry about me feeling obligated — I'd genuinely tell you if it ever became {{corr-006-q9}} for me, but honestly it really isn't.

I hope your knee continues to heal well. In the meantime, just focus on {{corr-006-q10}}, and let me take care of the driveway.

Take care,
Beatrice`,
      },
    ],
    questions: [
      {
        id: 'corr-006-q1',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Walter is writing to Beatrice mainly to .....',
        options: ['thank her for plowing his driveway and offer something in return', 'ask her to start plowing his driveway', 'apologize for not shovelling his own driveway', 'complain about the city plow service'],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'The letter expresses thanks for an ongoing favour and offers to compensate her for it.',
      },
      {
        id: 'corr-006-q2',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Why is shovelling difficult for Walter right now?',
        options: ['He is recovering from knee surgery', 'He works long hours', 'He doesn\u2019t own a shovel', 'He is out of town often'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Walter mentions "with my knee still recovering from surgery, it\u2019s made a real difference."',
      },
      {
        id: 'corr-006-q3',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'How many times has Beatrice plowed the driveway this winter?',
        options: ['Three times', 'Once', 'Five times', 'Every week'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Walter writes "this is now the third time this winter you\u2019ve done this for us."',
      },
      {
        id: 'corr-006-q4',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What two gift options does Walter suggest?',
        options: ['Covering gas costs or a hardware store gift card', 'A restaurant gift card or cash', 'A bottle of wine or chocolates', 'A new snowblower or shovel'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Walter offers "to cover the cost of gas for your snowblower, or maybe put together a gift card for that hardware store."',
      },
      {
        id: 'corr-006-q5',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What can be inferred about waiting for the city plow on their street?',
        options: ['It tends to be slow', 'It always arrives within an hour', 'It is not available on side streets at all', 'It costs extra money'],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'Walter notes the city plow "can take days on our side street," implying it\u2019s unreliable for them.',
      },
      {
        id: 'corr-006-q6',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: "What is Walter's tone in this letter?",
        options: ['Grateful and considerate', 'Demanding', 'Indifferent', 'Apologetic for bothering her'],
        correctIndex: 0,
        skill: 'tone-purpose',
        explanation: 'The letter expresses genuine thanks and care about not imposing, fitting "grateful and considerate."',
      },
      {
        id: 'corr-006-q7',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'It only takes me a few ___ minutes to do your driveway.',
        options: ['extra', 'fewer', 'less', 'short'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Extra" correctly describes additional time spent beyond her normal routine.',
      },
      {
        id: 'corr-006-q8',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'A gift card for the hardware store would actually be ___ useful.',
        options: ['genuinely', 'rarely', 'barely', 'unnecessarily'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'She follows up explaining she needs new tools, confirming a sincerely positive word like "genuinely," not "rarely" or "barely."',
      },
      {
        id: 'corr-006-q9',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: "I'd genuinely tell you if it ever became ___ for me.",
        options: ['inconvenient', 'enjoyable', 'rewarding', 'simple'],
        correctIndex: 0,
        skill: 'paraphrase-recognition',
        explanation: 'This responds directly to Walter\u2019s line about it being "inconvenient" for her, which Beatrice echoes and dismisses.',
      },
      {
        id: 'corr-006-q10',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'Just focus on ___, and let me take care of the driveway.',
        options: ['getting better', 'finding tools', 'buying a snowblower', 'calling the city'],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'Given the letter is about Walter\u2019s knee recovery, Beatrice is telling him to focus on healing, matching "getting better."',
      },
      {
        id: 'corr-006-q11',
        kind: 'mcq',
        refersTo: 'Message 2',
        prompt: 'According to Beatrice, why is plowing both driveways not a big burden for her?',
        options: ['She is already up early and out there with the snowblower anyway', 'She has a second snowblower just for this purpose', 'Her own driveway is very small', "Walter's driveway is shorter than hers"],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'Beatrice explains she\u2019s "always up early anyway" and already out there with the snowblower, so the extra driveway adds little effort.',
      },
    ],
  },

  {
    id: 'corr-007',
    sectionType: 'correspondence',
    title: 'Recommending a Reliable Mechanic to a Sibling',
    difficulty: 'intermediate',
    tags: ['family', 'recommendations'],
    messages: [
      {
        label: 'Message 1',
        from: 'Yusuf',
        to: 'Amina',
        subject: 'That mechanic I mentioned',
        body: `Hi Amina,

You asked me last weekend for the name of the mechanic I've been using, so here's the full rundown since I figured you'd want more than just a name and number.

His name is Carlos, and his shop is called Crestview Auto, over on Bramwell Avenue near the old train station. I started going to him about two years ago after my usual place quoted me $1,200 for a transmission issue that turned out to be a $90 sensor problem. Carlos diagnosed it correctly in twenty minutes and didn't even charge for the diagnostic.

Since then, he's done my regular oil changes, replaced my brake pads last spring for $220 including parts and labour, and fixed a coolant leak back in November for around $340. Every time, he's walked me through exactly what was wrong before doing any work, which I really appreciate since my last mechanic used to just hand me a bill afterward with no explanation.

One thing to know: Crestview only takes appointments, no walk-ins, and they're closed Sundays and Mondays. Booking can take a few days during busy periods, like right before winter when everyone's getting their tires switched. If you've got something urgent, he won't always be able to squeeze you in same-day.

He's also upfront if something isn't worth fixing. When my old sedan's air conditioning compressor died, he told me straight out that replacing it would cost more than the car was worth, rather than just doing the repair and charging me for it.

Given that your car's making that clicking noise you mentioned, I'd definitely call him before going anywhere else. Want me to text you his number?

Talk soon,
Yusuf`,
      },
      {
        label: 'Message 2 (Reply)',
        from: 'Amina',
        to: 'Yusuf',
        subject: 'Re: That mechanic I mentioned',
        body: `Hi Yusuf,

Thanks so much, this is exactly the kind of {{corr-007-q7}} I was hoping for — way more useful than just a phone number!

The story about the $90 sensor really {{corr-007-q8}} me. It's nice to know there's still a mechanic out there who won't just upsell you on stuff you don't need.

I do have one concern, though — since they're closed Sundays and Mondays and only take appointments, I'm a little worried about {{corr-007-q9}} in if this clicking noise turns into something urgent before I can get booked.

Still, given everything else you've said, I think it's {{corr-007-q10}} a try. Yes, please send me his number, and I'll call first thing tomorrow.

Thanks again for the {{corr-007-q11}} recommendation!

Amina`,
      },
    ],
    questions: [
      {
        id: 'corr-007-q1',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Yusuf is writing to Amina mainly to .....',
        options: ['recommend a mechanic and explain why he trusts him', 'ask Amina to fix his car', 'complain about his previous mechanic', 'invite Amina to a car dealership'],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'The letter is a detailed recommendation backed by specific examples of trustworthy service.',
      },
      {
        id: 'corr-007-q2',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What made Yusuf first start trusting Carlos?',
        options: ['Carlos correctly diagnosed a cheap fix instead of an expensive one another shop suggested', 'Carlos gave him a large discount', 'A friend personally vouched for him', 'Carlos offered free oil changes for life'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Yusuf describes Carlos correctly diagnosing a "$90 sensor problem" after another shop quoted "$1,200 for a transmission issue."',
      },
      {
        id: 'corr-007-q3',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: "Why does Yusuf prefer Carlos's approach compared to his old mechanic?",
        options: ['Carlos explains problems before doing any work', 'Carlos charges less for every repair', 'Carlos offers free pickup and drop-off', 'Carlos works faster than other shops'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Yusuf appreciates that Carlos "walked me through exactly what was wrong before doing any work," unlike his old mechanic.',
      },
      {
        id: 'corr-007-q4',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What limitation does Yusuf mention about booking with Crestview?',
        options: ['Appointments only, with possible delays during busy periods', 'Cash payments only', 'No service on brakes or transmissions', 'A long-term contract is required'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Yusuf notes "Crestview only takes appointments, no walk-ins" and "booking can take a few days during busy periods."',
      },
      {
        id: 'corr-007-q5',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: "What does the air conditioning compressor story suggest about Carlos?",
        options: ['He is honest even when it means less work for him', 'He avoids working on older cars', 'He specializes in air conditioning repairs', 'He refuses to give cost estimates'],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'Carlos told Yusuf the repair "would cost more than the car was worth" rather than doing it anyway and charging him — clear evidence of honesty over profit.',
      },
      {
        id: 'corr-007-q6',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Why does Yusuf suggest Amina call Carlos specifically now?',
        options: ['Because of the clicking noise she mentioned in her car', 'Because Carlos is offering a seasonal discount', 'Because her warranty is expiring soon', 'Because Carlos is planning to retire soon'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Yusuf writes "given that your car\u2019s making that clicking noise you mentioned, I\u2019d definitely call him."',
      },
      {
        id: 'corr-007-q7',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'This is exactly the kind of ___ I was hoping for.',
        options: ['detail', 'silence', 'delay', 'excuse'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'Amina is praising the thoroughness of the email, matching "detail" rather than a negative word.',
      },
      {
        id: 'corr-007-q8',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'The story about the $90 sensor really ___ me.',
        options: ['impressed', 'worried', 'bored', 'confused'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'She follows with a positive comment about trustworthy mechanics, so "impressed" fits, not a negative reaction.',
      },
      {
        id: 'corr-007-q9',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: "I'm a little worried about ___ in if this turns into something urgent.",
        options: ['getting', 'driving', 'calling', 'waiting'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Getting in" is the natural phrase for securing an appointment, matching her concern about booking delays.',
      },
      {
        id: 'corr-007-q10',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: "I think it's ___ a try.",
        options: ['worth', 'avoiding', 'risking', 'missing'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Worth a try" is the standard collocation for deciding something is reasonable to attempt.',
      },
      {
        id: 'corr-007-q11',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'Thanks again for the ___ recommendation!',
        options: ['thoughtful', 'careless', 'brief', 'reluctant'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'Given how detailed and helpful the email was, "thoughtful" fits Amina\u2019s appreciation, not a negative word.',
      },
    ],
  },

  {
    id: 'corr-008',
    sectionType: 'correspondence',
    title: 'Updating a Friend About Renovating a Basement Suite',
    difficulty: 'advanced',
    tags: ['home renovation', 'friends'],
    messages: [
      {
        label: 'Message 1',
        from: 'Tobias',
        to: 'Wren',
        subject: 'Basement suite progress (and a request)',
        body: `Hi Wren,

I know it's been a while since I gave you an update on the basement suite project, so here's where things stand, plus something I wanted to ask you about.

The permit finally came through in early September, about six weeks later than the city originally estimated, which pushed everything back. Once we had it, the contractor, a company called Hearthstone Builders, started framing the new bedroom wall and bathroom right away. That part went smoothly and only took about ten days.

Where things got complicated was the plumbing. The inspector flagged that our old cast iron drain pipe needed to be replaced before they could connect the new bathroom, which wasn't part of the original quote. That added an unexpected $2,800 to the project and another two weeks of delay while we sourced the right parts.

We're now finally at the stage of installing flooring and cabinets, which Hearthstone says should wrap up by the third week of October. After that, it's just paint and fixtures, so I'm cautiously optimistic about having it ready to rent out by November 1st.

Here's my actual request: you mentioned a while back that you're handy with drywall finishing, and I could really use a second opinion on a section near the bathroom that doesn't look quite right to me. Would you have any time next weekend to come take a look? No pressure if you're busy, I just trust your eye more than mine on this stuff.

Let me know what works, and thanks again for being patient with how long this update took!

Tobias`,
      },
      {
        label: 'Message 2 (Reply)',
        from: 'Wren',
        to: 'Tobias',
        subject: 'Re: Basement suite progress (and a request)',
        body: `Hi Tobias,

No need to apologize for the {{corr-008-q7}} update — renovations always take way longer than anyone expects anyway!

That plumbing surprise sounds {{corr-008-q8}} — these old pipe issues always seem to come up at the worst time. At least it's handled now instead of {{corr-008-q9}} until later.

I'd be happy to come look at the drywall next weekend. Saturday afternoon would {{corr-008-q10}} for me, if that lines up with when the rest of the work is paused.

November 1st sounds like a great target — fingers crossed nothing else {{corr-008-q11}} up between now and then!

Talk soon,
Wren`,
      },
    ],
    questions: [
      {
        id: 'corr-008-q1',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Tobias is writing to Wren mainly to .....',
        options: ['update him on the renovation and ask for his help', 'ask him to recommend a contractor', 'apologize for cancelling a previous visit', 'invite him to view the finished suite'],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'The letter gives a full project update and ends with a specific request for Wren\u2019s help.',
      },
      {
        id: 'corr-008-q2',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Why was the project delayed at the very start?',
        options: ['The city permit took longer than estimated', 'The contractor was unavailable', 'Materials were on backorder', 'The plans needed to be redrawn'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Tobias writes the permit "finally came through... about six weeks later than the city originally estimated."',
      },
      {
        id: 'corr-008-q3',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What unexpected issue came up with the plumbing?',
        options: ['An old drain pipe needed replacing before the bathroom could be connected', 'The wrong-sized pipes were delivered', 'A leak was discovered in the foundation', 'The city required a second inspection'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The inspector "flagged that our old cast iron drain pipe needed to be replaced before they could connect the new bathroom."',
      },
      {
        id: 'corr-008-q4',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'How much extra did the plumbing issue cost?',
        options: ['$2,800', '$1,200', '$3,500', '$900'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Tobias states this "added an unexpected $2,800 to the project."',
      },
      {
        id: 'corr-008-q5',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What is Tobias actually asking Wren to do?',
        options: ['Come look at a section of drywall finishing', 'Help with the plumbing repairs', 'Recommend a new contractor', 'Help paint the new bedroom'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Tobias asks if Wren could "come take a look" at "a section near the bathroom that doesn\u2019t look quite right."',
      },
      {
        id: 'corr-008-q6',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What does Tobias mean by being "cautiously optimistic" about the November 1st target?',
        options: ['He hopes to meet the date but isn\u2019t fully certain given past delays', 'He is certain the project will finish early', 'He has already decided to delay the rental listing', 'He thinks the date is unrealistic and will be missed'],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'Given the project has already faced two unexpected delays, "cautiously optimistic" suggests hope without full certainty.',
      },
      {
        id: 'corr-008-q7',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'No need to apologize for the ___ update.',
        options: ['delayed', 'rude', 'short', 'angry'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'Tobias apologized for how long it took him to send the update, so "delayed" matches what Wren is forgiving him for.',
      },
      {
        id: 'corr-008-q8',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'That plumbing surprise sounds ___.',
        options: ['frustrating', 'delightful', 'minor', 'expected'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'An unplanned $2,800 cost and two-week delay is naturally described as "frustrating," not "delightful" or "minor."',
      },
      {
        id: 'corr-008-q9',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: "At least it's handled now instead of ___ until later.",
        options: ['waiting', 'paying', 'building', 'painting'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: 'Wren is contrasting fixing the problem now versus leaving it unresolved, so "waiting" fits the contrast.',
      },
      {
        id: 'corr-008-q10',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'Saturday afternoon would ___ for me.',
        options: ['work', 'cost', 'help', 'last'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Would work for me" is the natural phrase for confirming availability.',
      },
      {
        id: 'corr-008-q11',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'Fingers crossed nothing else ___ up between now and then!',
        options: ['comes', 'goes', 'falls', 'turns'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: '"Comes up" is the natural phrasal verb for an unexpected problem arising, matching the renovation\u2019s pattern of surprises.',
      },
    ],
  },

  {
    id: 'corr-009',
    sectionType: 'correspondence',
    title: 'Apologizing for Missing a Housewarming Party',
    difficulty: 'intermediate',
    tags: ['friends', 'apologies'],
    messages: [
      {
        label: 'Message 1',
        from: 'Ines',
        to: 'Marcus',
        subject: "Sorry I missed Saturday",
        body: `Hi Marcus,

I feel terrible about missing your housewarming party on Saturday, especially after you and Priya put so much effort into planning it. I wanted to explain what happened rather than just letting it go unmentioned.

I left my apartment with plenty of time to spare, around 6:15 for a 7 o'clock start, but about ten minutes into the drive, my car started making a strange grinding noise whenever I braked. I pulled into a gas station parking lot to check it out and realized the brake pads were almost completely worn down, something I'd been meaning to get looked at for weeks but kept putting off.

I didn't feel safe continuing to drive on the highway like that, so I called a tow truck, which took almost an hour and a half to arrive because it was a busy Saturday evening. By the time the car was towed to a 24-hour shop and I'd arranged a ride home, it was already past 9:30, and I figured showing up that late, exhausted and stressed, wouldn't have added much to the evening anyway.

I should have called or texted you in the moment instead of just disappearing, and I'm sorry for that too — I was dealing with the tow truck company and genuinely lost track of time.

I'd really love to come see the new place properly, even if it's just the two of us grabbing coffee there sometime this week, if that works for you and Priya.

Again, I'm really sorry, and I hope the party was wonderful despite my absence.

Ines`,
      },
      {
        label: 'Message 2 (Reply)',
        from: 'Marcus',
        to: 'Ines',
        subject: 'Re: Sorry I missed Saturday',
        body: `Hi Ines,

Please don't worry about it at all — car trouble is {{corr-009-q7}} anyone's control, and honestly, a grinding brake sound sounds genuinely scary to deal with alone on the highway.

I do appreciate you {{corr-009-q8}} the whole story instead of just going quiet, even if it took a day or two to hear it.

The party went well, though we definitely {{corr-009-q9}} you there. Priya kept asking if you'd shown up yet!

Coffee this week sounds {{corr-009-q10}} — how about Thursday afternoon? I'll be around the new place most of the day anyway.

Glad you're safe, and please get those brakes properly ___, that sounds like it could have been a lot worse.

Talk soon,
Marcus`,
      },
    ],
    questions: [
      {
        id: 'corr-009-q1',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Ines is writing to Marcus mainly to .....',
        options: ['explain why she missed his housewarming party', 'cancel an upcoming visit', 'ask for a ride to a future event', 'recommend a mechanic'],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'The letter walks through exactly why she missed the party and apologizes for not communicating sooner.',
      },
      {
        id: 'corr-009-q2',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What problem did Ines notice with her car?',
        options: ['A grinding noise when braking, caused by worn brake pads', 'The engine wouldn\u2019t start', 'A flat tire', 'The car overheated'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Ines describes "a strange grinding noise whenever I braked" caused by brake pads "almost completely worn down."',
      },
      {
        id: 'corr-009-q3',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Why did the tow truck take a long time to arrive?',
        options: ['It was a busy Saturday evening', 'The shop was far away', 'Ines gave the wrong location', 'Bad weather slowed traffic'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Ines explains the tow truck "took almost an hour and a half to arrive because it was a busy Saturday evening."',
      },
      {
        id: 'corr-009-q4',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Why did Ines decide not to go to the party once the car issue was resolved?',
        options: ['It was already very late and she felt showing up wouldn\u2019t add much', 'The party had already ended', 'She no longer had a way to get there', 'She wasn\u2019t feeling well by that point'],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'She explains it was "past 9:30" and she "figured showing up that late, exhausted and stressed, wouldn\u2019t have added much."',
      },
      {
        id: 'corr-009-q5',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What does Ines apologize for, beyond missing the party itself?',
        options: ['Not calling or texting Marcus during the situation', 'Forgetting to bring a housewarming gift', 'Arriving late to a previous event too', 'Not helping plan the party'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'She writes "I should have called or texted you in the moment instead of just disappearing, and I\u2019m sorry for that too."',
      },
      {
        id: 'corr-009-q6',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What does Ines propose as a way to make up for missing the party?',
        options: ['Getting coffee at the new place sometime that week', 'Hosting a second party herself', 'Sending a gift in the mail', 'Paying for Marcus\u2019s next dinner out'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'She suggests "grabbing coffee there sometime this week" as a way to see the new place properly.',
      },
      {
        id: 'corr-009-q7',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'Car trouble is ___ anyone\u2019s control.',
        options: ['beyond', 'within', 'against', 'inside'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Beyond anyone\u2019s control" is the standard fixed phrase for something unavoidable.',
      },
      {
        id: 'corr-009-q8',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'I do appreciate you ___ the whole story instead of just going quiet.',
        options: ['sharing', 'hiding', 'forgetting', 'denying'],
        correctIndex: 0,
        skill: 'paraphrase-recognition',
        explanation: 'Marcus is thanking her for explaining what happened, which matches "sharing" the story.',
      },
      {
        id: 'corr-009-q9',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'The party went well, though we definitely ___ you there.',
        options: ['missed', 'forgot', 'replaced', 'avoided'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'Saying Priya kept asking about her shows they noticed her absence, fitting "missed."',
      },
      {
        id: 'corr-009-q10',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'Coffee this week sounds ___.',
        options: ['great', 'unnecessary', 'impossible', 'odd'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'Marcus immediately suggests a day afterward, confirming a positive response like "great."',
      },
      {
        id: 'corr-009-q11',
        kind: 'mcq',
        refersTo: 'Message 2',
        prompt: "What does Marcus's overall response suggest about how he feels toward Ines?",
        options: ['Understanding and not upset with her', 'Disappointed but trying to hide it', 'Annoyed that she didn\u2019t call sooner', 'Indifferent about whether she came'],
        correctIndex: 0,
        skill: 'tone-purpose',
        explanation: 'Marcus reassures her repeatedly ("please don\u2019t worry about it at all") and proposes plans, showing genuine understanding rather than annoyance.',
      },
    ],
  },

  {
    id: 'corr-010',
    sectionType: 'correspondence',
    title: 'Updating a Cousin After an Immigration Interview',
    difficulty: 'advanced',
    tags: ['immigration', 'family'],
    messages: [
      {
        label: 'Message 1',
        from: 'Daniela',
        to: 'Cousin Rafael',
        subject: 'The interview went well!',
        body: `Dear Rafael,

I know you've been waiting to hear how my permanent residency interview went on Tuesday, so I didn't want to leave you wondering any longer.

The appointment was at the downtown IRCC office, and I was told to arrive 30 minutes early, which I did, only to end up waiting almost two hours past my scheduled time anyway. Apparently the officer ahead of mine was running behind on a complicated file, which pushed everyone else back.

When I finally went in, the officer, whose name tag said R. Singh, was much more relaxed than I expected. We went through my work history first, then my language test results, and then a series of questions about my time living and working in Mississauga over the past three years. At one point he asked detailed questions about a six-month gap in my employment history from 2023, which I'd actually prepared for since my lawyer warned me that gaps often get extra scrutiny.

I explained that gap was due to caring for my mother after her surgery, and brought supporting documents just in case, though in the end he didn't even ask to see them, just nodded and moved on.

Near the end, he mentioned that everything in my file looked complete and that I should expect a decision within 4 to 6 weeks, though he was careful to say that wasn't a guarantee and processing times can vary.

I walked out feeling cautiously hopeful, though obviously still nervous until I actually see something in writing. I'll let you know the moment I hear anything.

Thank you again for all your support through this whole process; I genuinely couldn't have gotten through the paperwork stage without your help translating some of my mother's documents.

With love,
Daniela`,
      },
      {
        label: 'Message 2 (Reply)',
        from: 'Rafael',
        to: 'Daniela',
        subject: 'Re: The interview went well!',
        body: `Dear Daniela,

I'm so relieved to hear it went as {{corr-010-q7}} as it did! That two-hour wait sounds exhausting, but at least the actual interview itself seems to have gone smoothly.

I think it was smart that you {{corr-010-q8}}, since gaps in employment history can apparently raise a lot of questions if you're caught off guard.

It's a good sign that he didn't even need to look at the documents about your mother — sounds like your explanation alone was {{corr-010-q9}}.

The 4 to 6 week estimate is nerve-wracking, I know, but try not to read too much into the fact that he {{corr-010-q10}} it wasn't guaranteed — that's probably just standard wording they're required to use.

Please don't thank me for the translation help, that was the {{corr-010-q11}} thing to do, and I'm just glad it was useful.

Sending you so much love and patience for these next few weeks.

Rafael`,
      },
    ],
    questions: [
      {
        id: 'corr-010-q1',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Daniela is writing to Rafael mainly to .....',
        options: ['update him on how her residency interview went', 'ask him to attend a future appointment with her', 'request more documents from him', 'explain a delay in her application submission'],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'The letter is a detailed account of how the interview itself went, written specifically because Rafael had been waiting to hear.',
      },
      {
        id: 'corr-010-q2',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Why did Daniela end up waiting almost two hours past her scheduled time?',
        options: ['The officer ahead of hers was running behind on a complicated file', 'She arrived late herself', 'The office had a technical system outage', 'Her appointment was double-booked'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'She explains "the officer ahead of mine was running behind on a complicated file, which pushed everyone else back."',
      },
      {
        id: 'corr-010-q3',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What topic did the officer ask detailed questions about?',
        options: ['A six-month employment gap in 2023', 'Her travel history before immigrating', 'Her housing arrangements', 'Her financial savings'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The officer "asked detailed questions about a six-month gap in my employment history from 2023."',
      },
      {
        id: 'corr-010-q4',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Why was Daniela prepared for that particular question?',
        options: ["Her lawyer had warned her that employment gaps often get extra scrutiny", 'She had been asked the same question before', 'It was listed on the official interview checklist', 'Rafael had warned her about it'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: "She mentions she'd prepared for it \"since my lawyer warned me that gaps often get extra scrutiny.\"",
      },
      {
        id: 'corr-010-q5',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What does Daniela mean by feeling "cautiously hopeful"?',
        options: ['She is optimistic but still nervous until she sees a written decision', 'She is fully confident the application will be approved', 'She believes the application will likely be rejected', 'She has decided not to think about the outcome at all'],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'She says she felt "cautiously hopeful, though obviously still nervous until I actually see something in writing" — optimistic but not fully certain.',
      },
      {
        id: 'corr-010-q6',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What specific help is Daniela thanking Rafael for?',
        options: ['Translating some of her mother\u2019s documents', 'Driving her to the interview', 'Paying her lawyer\u2019s fees', 'Reviewing her work history'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'She thanks him for "your help translating some of my mother\u2019s documents."',
      },
      {
        id: 'corr-010-q7',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: "I'm so relieved to hear it went as ___ as it did!",
        options: ['smoothly', 'badly', 'slowly', 'strangely'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'Rafael is expressing relief at good news, so "smoothly" fits, matching his overall positive reaction.',
      },
      {
        id: 'corr-010-q8',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'I think it was smart that you ___, since gaps in employment history can raise questions.',
        options: ['prepared an explanation in advance', 'avoided the topic entirely', 'asked for a different officer', 'cancelled the interview'],
        correctIndex: 0,
        skill: 'paraphrase-recognition',
        explanation: 'Message 1 explains Daniela "had actually prepared for" the employment-gap question after her lawyer\u2019s warning, which Rafael is referring back to.',
      },
      {
        id: 'corr-010-q9',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'Your explanation alone was ___.',
        options: ['convincing', 'confusing', 'irrelevant', 'incomplete'],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'Since the officer didn\u2019t need to see the supporting documents, the spoken explanation must have been convincing on its own.',
      },
      {
        id: 'corr-010-q10',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'Try not to read too much into the fact that he ___ it wasn\u2019t guaranteed.',
        options: ['mentioned', 'denied', 'forgot', 'promised'],
        correctIndex: 0,
        skill: 'paraphrase-recognition',
        explanation: 'Message 1 states the officer "was careful to say that wasn\u2019t a guarantee," which Rafael refers back to as something he "mentioned."',
      },
      {
        id: 'corr-010-q11',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'That was the ___ thing to do.',
        options: ['least I could do', 'hardest decision', 'wrong choice', 'last resort'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: '"The least I could do" is the standard modest phrase used when downplaying a favour for family, matching Rafael brushing off her thanks.',
      },
    ],
  },

{
    id: 'corr-011',
    sectionType: 'correspondence',
    title: 'Asking a Sibling to Co-Host a Backyard Skating Rink Party',
    difficulty: 'intermediate',
    tags: ['family', 'winter', 'events'],
    messages: [
      {
        label: 'Message 1',
        from: 'Mira',
        to: 'Brother Theo',
        subject: 'Skating rink party idea',
        body: `Hi Theo,

Remember how Dad built that backyard rink again this winter? I had an idea and wanted to run it by you before mentioning it to him.

What if we hosted a small skating party for the kids in the family, maybe this Saturday afternoon, since the ice has finally been solid for over a week now? I was thinking we could invite our cousins Lily and Marcus, plus your two and my daughter, so six kids total, plus whichever adults want to skate too.

I'd handle the hot chocolate and snacks if you could bring extra pairs of skates, since I know your kids have outgrown a few sizes that might fit some of the younger cousins. I checked, and the rink is big enough for everyone, but we'd probably want at least one adult watching closely near the edges where the ice gets thinner.

I was also thinking we could set up a small speaker for music and maybe even some kind of simple obstacle course using cones, nothing too elaborate, just enough to keep the younger kids entertained between free skating.

The only thing I'm not sure about is timing. Saturday afternoon works for me, roughly 1 to 4 p.m., but I know your younger one has a birthday party invitation that day too. Let me know if a different time or day would work better, or if Saturday afternoon could still work somehow.

Let me know what you think!

Mira`,
      },
      {
        label: 'Message 2 (Reply)',
        from: 'Theo',
        to: 'Mira',
        subject: 'Re: Skating rink party idea',
        body: `Hi Mira,

I love this idea, and {{corr-011-q7}}, Saturday afternoon should actually work fine — the birthday party is in the morning, so we'd be free by early afternoon anyway.

I'll definitely bring the extra skates, {{corr-011-q8}} I'm not totally sure which sizes will fit which kids, so maybe we just bring a few different pairs and sort it out there.

The obstacle course idea sounds fun, though I think we should keep it {{corr-011-q9}} simple given how cold it'll be by mid-afternoon — nobody wants to be standing around for too long setting things up.

One thing I want to mention: my younger one is still a bit wobbly on skates, so I'll want to stay {{corr-011-q10}} to her the whole time, just to be safe.

Should I bring my own speaker too, {{corr-011-q11}} yours dies from the cold like it did last winter?

Talk soon,
Theo`,
      },
    ],
    questions: [
      {
        id: 'corr-011-q1',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Mira is writing to Theo mainly to .....',
        options: ['propose hosting a backyard skating party and ask for his help', 'ask him to fix the backyard rink', 'invite him to a birthday party', 'complain about the cold weather'],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'The letter proposes a skating party idea and asks for specific help with skates and timing.',
      },
      {
        id: 'corr-011-q2',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Why does Mira ask Theo to bring extra skates?',
        options: ['His kids have outgrown some pairs that might fit younger cousins', 'Her own skates broke', 'The rental shop is closed', 'She wants spares in case of damage'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Mira mentions Theo\u2019s "kids have outgrown a few sizes that might fit some of the younger cousins."',
      },
      {
        id: 'corr-011-q3',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'How many children does Mira plan to invite in total?',
        options: ['Six', 'Four', 'Eight', 'Three'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Mira counts "our cousins Lily and Marcus, plus your two and my daughter, so six kids total."',
      },
      {
        id: 'corr-011-q4',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What safety concern does Mira mention about the rink?',
        options: ['The ice gets thinner near the edges', 'The rink is too small for six kids', 'The ice hasn\u2019t fully frozen yet', 'There is no fence around the rink'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Mira notes "the ice gets thinner where the edges," suggesting close supervision is needed there.',
      },
      {
        id: 'corr-011-q5',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What scheduling concern does Mira raise?',
        options: [
          "Theo's younger child has a birthday party invitation Saturday too",
          'The rink will be closed for maintenance Saturday',
          'Mira is unavailable Saturday afternoon',
          'The weather forecast looks bad for Saturday',
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Mira mentions knowing "your younger one has a birthday party invitation that day too."',
      },
      {
        id: 'corr-011-q6',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: "What does Mira offer to handle herself?",
        options: ['Hot chocolate and snacks', 'Extra skates', 'Music and speakers', 'Picking up the cousins'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Mira writes "I\u2019d handle the hot chocolate and snacks if you could bring extra pairs of skates."',
      },
      {
        id: 'corr-011-q7',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'I love this idea, and ___, Saturday afternoon should actually work fine.',
        options: ['luckily', 'sadly', 'oddly', 'rarely'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'Theo follows with good news about timing working out, fitting the positive word "luckily."',
      },
      {
        id: 'corr-011-q8',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: "I'll definitely bring the extra skates, ___ I'm not totally sure which sizes will fit which kids.",
        options: ['though', 'because', 'so', 'unless'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Though" introduces a contrast — agreeing to bring skates while noting a related uncertainty.',
      },
      {
        id: 'corr-011-q9',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'I think we should keep it ___ simple given how cold it\u2019ll be.',
        options: ['pretty', 'never', 'hardly', 'barely'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Pretty simple" is the natural collocation meaning fairly or reasonably simple.',
      },
      {
        id: 'corr-011-q10',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: "I'll want to stay ___ to her the whole time.",
        options: ['close', 'distant', 'late', 'early'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: '"Stay close to" fits the context of supervising a child who is "still a bit wobbly on skates."',
      },
      {
        id: 'corr-011-q11',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'Should I bring my own speaker too, ___ yours dies from the cold?',
        options: ['in case', 'so that', 'even though', 'as long as'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"In case" correctly introduces a precaution against a possible problem (the speaker dying again).',
      },
    ],
  },

  {
    id: 'corr-012',
    sectionType: 'correspondence',
    title: 'Advising a Friend on Winter Tire Shopping',
    difficulty: 'intermediate',
    tags: ['advice', 'vehicles', 'winter'],
    messages: [
      {
        label: 'Message 1',
        from: 'Femi',
        to: 'Grace',
        subject: 'Winter tire advice',
        body: `Hi Grace,

You mentioned you're finally getting winter tires this year after that scary slide on the highway last January, so I figured I'd share what I learned when I went through the same thing two winters ago.

First, don't just go with whatever brand the shop pushes hardest. I made that mistake initially and ended up with a set that was fine in light snow but noisy and not great on ice. After some research, I switched to a different brand the following year and noticed a real difference in how the car handled on icy intersections specifically.

Second, timing matters more than people think. Tire shops get extremely busy from late October through November, and I waited too long my first year, ending up on a two-week waitlist right as the first real snowfall hit. This year, aim to get them installed by early October if you can, even if it still feels too warm out.

Budget-wise, expect somewhere between $600 and $900 for a decent set of four tires plus installation, depending on your car's size. Some shops also offer a seasonal storage service for your summer tires while they're not in use, usually for an extra $50 to $80 for the season, which saved me a lot of hassle not having tires taking up space in my apartment storage locker.

One more thing: make sure whoever installs them actually torques the lug nuts to the correct specification and not just by feel. A friend of mine had a wheel come loose because a shop rushed the install, which is honestly a little terrifying to think about.

Let me know if you want the name of the shop I use — they've been reliable both times.

Femi`,
      },
      {
        label: 'Message 2 (Reply)',
        from: 'Grace',
        to: 'Femi',
        subject: 'Re: Winter tire advice',
        body: `Hi Femi,

Thank you so much, this is exactly the kind of {{corr-012-q7}} advice I needed before walking into a shop completely clueless.

The timing tip is especially {{corr-012-q8}} — I definitely would have waited until November out of pure procrastination otherwise.

I hadn't even thought about asking {{corr-012-q9}} the lug nuts were torqued properly. That detail about your friend's wheel is honestly a little alarming, so I'll definitely ask about that specifically.

Yes, please send me the name of your shop — I'd much rather go somewhere {{corr-012-q10}} than risk ending up with a place that rushes installs.

Out of curiosity, did the brand switch really make ___ that much difference on ice, or was it more subtle than that?

Thanks again!
Grace`,
      },
    ],
    questions: [
      {
        id: 'corr-012-q1',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Femi is writing to Grace mainly to .....',
        options: ['share advice about buying winter tires based on his own experience', 'ask Grace for a ride to a tire shop', 'complain about a bad tire installation', 'recommend Grace sell her current car'],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'The letter shares lessons learned "when I went through the same thing two winters ago," offering practical advice.',
      },
      {
        id: 'corr-012-q2',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What mistake did Femi make with his first set of winter tires?',
        options: [
          'He went with whatever brand the shop pushed hardest',
          'He bought used tires instead of new ones',
          'He installed them himself incorrectly',
          'He bought tires that were the wrong size',
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Femi admits "I made that mistake initially," referring to going with the shop\u2019s pushed brand.',
      },
      {
        id: 'corr-012-q3',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Why does Femi recommend installing tires by early October?',
        options: [
          'Shops get extremely busy from late October through November',
          'Tires are cheaper before October',
          'The roads are closed for maintenance in November',
          'Insurance requires tires installed by that date',
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Femi explains shops "get extremely busy from late October through November," so earlier installation avoids the rush.',
      },
      {
        id: 'corr-012-q4',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What optional service does Femi mention some shops offer?',
        options: ['Seasonal tire storage', 'Free oil changes', 'Extended warranties', 'Free roadside assistance'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Femi mentions "a seasonal storage service for your summer tires while they\u2019re not in use."',
      },
      {
        id: 'corr-012-q5',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: "What happened to Femi's friend due to a rushed installation?",
        options: ['A wheel came loose', 'The tires went flat within a week', 'The car failed an inspection', 'The shop overcharged them'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Femi mentions "a friend of mine had a wheel come loose because a shop rushed the install."',
      },
      {
        id: 'corr-012-q6',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What budget range does Femi give for a set of four tires plus installation?',
        options: ['$600 to $900', '$300 to $500', '$1,000 to $1,500', '$200 to $400'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Femi states "expect somewhere between $600 and $900 for a decent set of four tires plus installation."',
      },
      {
        id: 'corr-012-q7',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'This is exactly the kind of ___ advice I needed.',
        options: ['practical', 'pointless', 'vague', 'outdated'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'Grace praises the specific, useful tips Femi gave, fitting "practical" rather than a negative word.',
      },
      {
        id: 'corr-012-q8',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'The timing tip is especially ___.',
        options: ['useful', 'irrelevant', 'confusing', 'obvious'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'She follows by saying she would have procrastinated otherwise, confirming the tip was "useful."',
      },
      {
        id: 'corr-012-q9',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'I hadn\u2019t even thought about asking ___ the lug nuts were torqued properly.',
        options: ['whether', 'what', 'who', 'why'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Whether" correctly introduces an indirect yes/no question about a condition being met or not.',
      },
      {
        id: 'corr-012-q10',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: "I'd much rather go somewhere ___ than risk a rushed installation.",
        options: ['reliable', 'unfamiliar', 'distant', 'expensive'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'Grace contrasts this with "rushes installs," so the positive opposite "reliable" fits her preference.',
      },
      {
        id: 'corr-012-q11',
        kind: 'mcq',
        refersTo: 'Message 2',
        prompt: 'What does Grace ask Femi at the end of her reply?',
        options: [
          'Whether switching tire brands really made a noticeable difference on ice',
          'Whether she should buy summer tires too',
          'How much the shop charges for storage',
          'Whether Femi would come with her to the shop',
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Grace asks "did the brand switch really make that much difference on ice, or was it more subtle than that?"',
      },
    ],
  },

  {
    id: 'corr-013',
    sectionType: 'correspondence',
    title: 'Updating a Friend About a Canoe Trip',
    difficulty: 'intermediate',
    tags: ['outdoors', 'friends'],
    messages: [
      {
        label: 'Message 1',
        from: 'Owen',
        to: 'Bashir',
        subject: 'How the canoe trip went',
        body: `Hey Bashir,

Sorry it's taken me a few days to write back about the canoe trip — I wanted to give you the full story instead of a rushed one-liner.

We put in at Cedar Lake on Friday morning like planned and made it to the first campsite by early afternoon, no issues at all. Saturday is where things got interesting. About two hours into paddling across the second lake, the wind picked up much more than the forecast predicted, and we ended up having to wait it out on a small island for almost three hours before it was safe to keep going.

That delay pushed our whole schedule back, so instead of reaching the planned campsite on the far side of the lake, we had to stop at a much smaller, less ideal site about halfway there. It worked out fine in the end, just a tighter fit for the tents and not as nice a swimming spot.

Sunday's paddle back was smooth, thankfully, and we made it to the takeout point by early afternoon as planned. Overall, despite the wind delay, everyone had a great time, and the lake scenery on day two, once the wind died down, was honestly some of the best I've seen on any trip we've done.

One logistics note for next time: our water filter started acting up on day two, getting noticeably slower, so we should probably either replace it or bring a backup before our next trip.

When are you free to plan the next one? I'm thinking sometime in August might work well.

Owen`,
      },
      {
        label: 'Message 2 (Reply)',
        from: 'Bashir',
        to: 'Owen',
        subject: 'Re: How the canoe trip went',
        body: `Hey Owen,

Thanks for the detailed update — sounds like the wind delay was {{corr-013-q7}} stressful, but I'm glad it worked out okay in the end.

That smaller campsite sounds like it wasn't ideal, but at least you {{corr-013-q8}} make it work rather than having to turn back entirely.

I'm definitely on board with replacing the water filter {{corr-013-q9}} we head out again — no point risking it acting up worse next time.

August could work for me, though I'd need to check {{corr-013-q10}} my work schedule first before confirming a specific weekend.

Glad day two's scenery made up for the rough start — I'm already looking forward to {{corr-013-q11}}!

Talk soon,
Bashir`,
      },
    ],
    questions: [
      {
        id: 'corr-013-q1',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Owen is writing to Bashir mainly to .....',
        options: ['give a detailed update on how the canoe trip went', 'cancel an upcoming canoe trip', 'ask Bashir to buy new camping gear', 'apologize for missing the trip entirely'],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'Owen explains "I wanted to give you the full story" about the trip, covering each day in detail.',
      },
      {
        id: 'corr-013-q2',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Why did the group have to wait on a small island on Saturday?',
        options: ['Wind picked up more than the forecast predicted', 'A storm with lightning forced them to shelter', 'One of the canoes was damaged', 'They got lost and had to wait for directions'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Owen explains "the wind picked up much more than the forecast predicted," forcing the wait.',
      },
      {
        id: 'corr-013-q3',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'How did the wind delay affect their plans?',
        options: [
          'They had to stop at a smaller, less ideal campsite',
          'They had to cancel the rest of the trip',
          'They had to call for a rescue boat',
          'They lost one of their canoes'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Owen writes they "had to stop at a much smaller, less ideal site about halfway there."',
      },
      {
        id: 'corr-013-q4',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: "What does Owen say about Sunday's paddle back?",
        options: ['It was smooth and they arrived as planned', 'It was delayed by more wind', 'They had to portage around a section', 'They got back a day late'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Owen states "Sunday\u2019s paddle back was smooth, thankfully, and we made it to the takeout point by early afternoon as planned."',
      },
      {
        id: 'corr-013-q5',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What equipment issue does Owen mention for next time?',
        options: ['The water filter started acting up and getting slower', 'A tent pole broke', 'A paddle was lost', 'The cooler stopped keeping food cold'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Owen notes "our water filter started acting up on day two, getting noticeably slower."',
      },
      {
        id: 'corr-013-q6',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: "What was Owen's overall impression of the trip despite the delay?",
        options: ['Everyone had a great time and the scenery was excellent', 'The trip was mostly disappointing', 'The trip should not be repeated', 'The group was too exhausted to enjoy it'],
        correctIndex: 0,
        skill: 'tone-purpose',
        explanation: 'Owen states "despite the wind delay, everyone had a great time," and praises the day-two scenery specifically.',
      },
      {
        id: 'corr-013-q7',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'Sounds like the wind delay was ___ stressful.',
        options: ['pretty', 'never', 'barely', 'hardly'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Pretty stressful" is a natural way to acknowledge a genuinely difficult moment, matching the situation described.',
      },
      {
        id: 'corr-013-q8',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'At least you ___ make it work rather than turning back entirely.',
        options: ['managed to', 'failed to', 'refused to', 'forgot to'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Managed to" fits the positive outcome described — they succeeded despite the setback.',
      },
      {
        id: 'corr-013-q9',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: "I'm on board with replacing the water filter ___ we head out again.",
        options: ['before', 'after', 'unless', 'although'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Before" correctly places the replacement ahead of the next trip, matching the precaution being suggested.',
      },
      {
        id: 'corr-013-q10',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: "I'd need to check ___ my work schedule first.",
        options: ['with', 'on', 'at', 'by'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Check with" is the natural collocation for consulting something before confirming plans.',
      },
      {
        id: 'corr-013-q11',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: "I'm already looking forward to ___!",
        options: ['the next one', 'cancelling it', 'staying home', 'forgetting about it'],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'Given Bashir\u2019s enthusiasm throughout the message and discussion of planning August\u2019s trip, "the next one" fits his anticipation.',
      },
    ],
  },

  {
    id: 'corr-014',
    sectionType: 'correspondence',
    title: 'Updating a Friend About Volunteering at a Food Bank',
    difficulty: 'foundation',
    tags: ['volunteering', 'community'],
    messages: [
      {
        label: 'Message 1',
        from: 'Aaliyah',
        to: 'Joon',
        subject: 'My first week volunteering',
        body: `Hi Joon,

You asked how my first week volunteering at the Riverside Food Bank went, so here's the rundown!

I go in every Tuesday and Thursday from 10 a.m. to 1 p.m. So far, I've mostly been sorting donated food into categories and checking expiry dates, which is more time-consuming than I expected but also strangely satisfying once you get into a rhythm.

The staff there are really welcoming. A coordinator named Patrice spent almost an hour on my first day just walking me through everything, from where supplies are kept to how the intake process works for people coming in for groceries.

One thing that surprised me is how organized the whole operation is. They track inventory using a simple spreadsheet system, and there's a clear rotation schedule so volunteers know exactly what needs doing each shift without much confusion.

The only downside so far is that the back storage room gets really cold, since it's basically a converted garage space, so I've started bringing an extra layer to wear while sorting things back there.

I'm thinking of asking if I can add a third shift, maybe Saturday mornings, since I'm really enjoying it more than I expected. Would you ever want to come try a shift with me sometime? I think you'd actually like it.

Let me know!
Aaliyah`,
      },
      {
        label: 'Message 2 (Reply)',
        from: 'Joon',
        to: 'Aaliyah',
        subject: 'Re: My first week volunteering',
        body: `Hi Aaliyah,

This sounds {{corr-014-q7}}! I'm really glad you're enjoying it so much already.

The cold storage room thing made me laugh a bit, only because it sounds {{corr-014-q8}} exactly like something nobody warns you about until you're already there shivering.

I'd actually love to come try a shift with you sometime, {{corr-014-q9}} my schedule allows it — Saturdays tend to be pretty open for me most weeks anyway.

It's great that Patrice took the time to walk you through everything properly. Some places just {{corr-014-q10}} you into the deep end without any real training, so that sounds like a good sign about how they run things.

Let me know once you find out ___ you can add that Saturday shift, and I'll figure out which week works for me to join you.

Talk soon,
Joon`,
      },
    ],
    questions: [
      {
        id: 'corr-014-q1',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Aaliyah is writing to Joon mainly to .....',
        options: ['share how her first week volunteering went', 'ask Joon to donate food', 'complain about her volunteer shifts', 'announce she is quitting volunteering'],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'Aaliyah responds to being asked "how my first week volunteering... went" with a detailed update.',
      },
      {
        id: 'corr-014-q2',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What tasks has Aaliyah mostly been doing so far?',
        options: ['Sorting donated food and checking expiry dates', 'Driving delivery trucks', 'Managing the front desk', 'Organizing fundraising events'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Aaliyah writes she has "mostly been sorting donated food into categories and checking expiry dates."',
      },
      {
        id: 'corr-014-q3',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What surprised Aaliyah about the food bank operation?',
        options: ['How organized it is, with inventory tracking and a clear schedule', 'How few volunteers work there', 'How little food they actually receive', 'How strict the rules are'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Aaliyah states "what surprised me is how organized the whole operation is," describing the inventory system and schedule.',
      },
      {
        id: 'corr-014-q4',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What downside does Aaliyah mention about her shifts?',
        options: ['The back storage room gets really cold', 'The shifts are too short', 'The location is hard to get to', 'There is too little to do'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Aaliyah mentions "the back storage room gets really cold, since it\u2019s basically a converted garage space."',
      },
      {
        id: 'corr-014-q5',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What is Aaliyah considering doing next?',
        options: ['Adding a third shift on Saturday mornings', 'Reducing her shifts to once a week', 'Switching to a different food bank', 'Becoming a paid staff member'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Aaliyah writes "I\u2019m thinking of asking if I can add a third shift, maybe Saturday mornings."',
      },
      {
        id: 'corr-014-q6',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: "What does Aaliyah's overall tone suggest about her experience so far?",
        options: ['Positive and enthusiastic', 'Reluctant and unsure', 'Frustrated and tired', 'Indifferent'],
        correctIndex: 0,
        skill: 'tone-purpose',
        explanation: 'She describes the work as "strangely satisfying" and is considering adding more shifts, indicating real enthusiasm.',
      },
      {
        id: 'corr-014-q7',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'This sounds ___!',
        options: ['wonderful', 'awful', 'pointless', 'boring'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'Joon follows with genuine happiness for Aaliyah, fitting the positive word "wonderful."',
      },
      {
        id: 'corr-014-q8',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'It sounds ___ exactly like something nobody warns you about.',
        options: ['just', 'never', 'hardly', 'barely'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Just exactly" emphasizes the point being made, a natural casual intensifier in this context.',
      },
      {
        id: 'corr-014-q9',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: "I'd love to come try a shift with you sometime, ___ my schedule allows it.",
        options: ['if', 'unless', 'since', 'though'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"If" correctly introduces the condition needed for Joon to be able to join.',
      },
      {
        id: 'corr-014-q10',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'Some places just ___ you into the deep end without any real training.',
        options: ['throw', 'walk', 'guide', 'invite'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: '"Throw into the deep end" is a fixed expression meaning to give someone a task with no preparation.',
      },
      {
        id: 'corr-014-q11',
        kind: 'mcq',
        refersTo: 'Message 2',
        prompt: "What does Joon ask Aaliyah to let him know about?",
        options: [
          'Whether she successfully adds the Saturday shift',
          'Whether the food bank needs more donations',
          'Whether Patrice is still working there',
          'Whether the storage room gets warmer'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Joon asks her to "let me know once you find out... you can add that Saturday shift."',
      },
    ],
  },

  {
    id: 'corr-015',
    sectionType: 'correspondence',
    title: 'Updating a Sibling About a Lakeside Cabin Purchase',
    difficulty: 'advanced',
    tags: ['family', 'real estate'],
    messages: [
      {
        label: 'Message 1',
        from: 'Nadia',
        to: 'Brother Samir',
        subject: 'We bought the cabin!',
        body: `Hi Samir,

I know I've been talking about this cabin idea for over a year, so I'm excited to finally tell you: we closed on it last Tuesday! It's the three-bedroom place on Birchwood Lake we looked at back in June, the one with the dock and the slightly outdated kitchen.

The negotiation took longer than expected. Our first offer was $340,000, which the sellers countered at $365,000, and we eventually settled at $352,000 after they agreed to throw in the existing dock equipment and a small storage shed we hadn't initially included in the offer.

The inspection turned up a few things we'll need to deal with: the septic system needs servicing within the next year, and there's some minor water damage in the basement that a contractor estimated would cost around $4,000 to properly fix. Nothing dealbreaking, but it does mean our renovation budget for the kitchen will need to wait until next summer instead.

We're planning to make the drive up for the first time as owners this coming weekend, just to get a feel for the place without rushing into any work yet. I was actually hoping you and the kids might want to join us for a day, maybe Saturday, since the lake should still be warm enough for swimming this time of year.

There's plenty of room if you wanted to stay over rather than just visiting for the day, though I know that's a longer drive for you with the kids' school schedule to think about.

Let me know if Saturday could work, even just for a few hours!

Nadia`,
      },
      {
        label: 'Message 2 (Reply)',
        from: 'Samir',
        to: 'Nadia',
        subject: 'Re: We bought the cabin!',
        body: `Hi Nadia,

Congratulations, this is {{corr-015-q7}} wonderful news! I've been waiting for this update for what feels like forever.

That negotiation sounds like it went reasonably well in the end, especially {{corr-015-q8}} you got the dock equipment and shed thrown in too.

The water damage is a bit concerning, but {{corr-015-q9}} sounds like it's manageable rather than a serious structural issue, which is a relief.

Saturday should work for us, {{corr-015-q10}} I'd need to check with the kids' school about any weekend activities first, just to be sure nothing conflicts.

We might actually take you up on staying over, since driving back the same day with tired kids {{corr-015-q11}} always be a bit of a nightmare in my experience.

Can't wait to see the place in person!
Samir`,
      },
    ],
    questions: [
      {
        id: 'corr-015-q1',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Nadia is writing to Samir mainly to .....',
        options: ['share that they completed the purchase of a lakeside cabin', 'ask Samir for money to help with the purchase', 'cancel a planned visit to the cabin', 'complain about the cabin\u2019s condition'],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'Nadia opens with "we closed on it last Tuesday," sharing the completed purchase.',
      },
      {
        id: 'corr-015-q2',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What was the final agreed price for the cabin?',
        options: ['$352,000', '$340,000', '$365,000', '$348,000'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Nadia states "we eventually settled at $352,000."',
      },
      {
        id: 'corr-015-q3',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What extra items did the sellers agree to include?',
        options: ['The existing dock equipment and a small storage shed', 'New kitchen appliances', 'A boat and trailer', 'Outdoor patio furniture'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Nadia mentions the sellers "agreed to throw in the existing dock equipment and a small storage shed."',
      },
      {
        id: 'corr-015-q4',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What did the inspection reveal about the basement?',
        options: [
          'Minor water damage estimated at around $4,000 to fix',
          'A major structural crack requiring immediate repair',
          'Mold that requires professional remediation',
          'No issues were found at all'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Nadia mentions "minor water damage in the basement that a contractor estimated would cost around $4,000."',
      },
      {
        id: 'corr-015-q5',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Why is the kitchen renovation being delayed?',
        options: [
          'The repair budget needs to cover the septic and water damage issues first',
          'The contractor is unavailable until next summer',
          'They are still deciding on a kitchen design',
          'The previous owners refused to allow renovations'
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'Nadia explains the needed repairs mean "our renovation budget for the kitchen will need to wait until next summer instead."',
      },
      {
        id: 'corr-015-q6',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What does Nadia invite Samir to do?',
        options: ['Join them at the cabin this coming Saturday', 'Help negotiate a lower price', 'Co-sign the mortgage', 'Help fix the water damage himself'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Nadia asks "I was actually hoping you and the kids might want to join us for a day, maybe Saturday."',
      },
      {
        id: 'corr-015-q7',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'Congratulations, this is ___ wonderful news!',
        options: ['genuinely', 'barely', 'rarely', 'hardly'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Genuinely wonderful" is the natural intensifier matching Samir\u2019s enthusiastic, sincere reaction.',
      },
      {
        id: 'corr-015-q8',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'Especially ___ you got the dock equipment and shed thrown in too.',
        options: ['since', 'unless', 'although', 'whereas'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Since" introduces the reason the negotiation seems to have gone well, similar to "because."',
      },
      {
        id: 'corr-015-q9',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'But ___ sounds like it\u2019s manageable rather than a serious structural issue.',
        options: ['it', 'this', 'that', 'there'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"It" correctly refers back to the water damage mentioned in Message 1 as the subject of this sentence.',
      },
      {
        id: 'corr-015-q10',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'Saturday should work for us, ___ I\u2019d need to check with the kids\u2019 school first.',
        options: ['though', 'so', 'because', 'or'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Though" introduces a minor caveat to an otherwise confirmed plan.',
      },
      {
        id: 'corr-015-q11',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'Driving back the same day with tired kids ___ always be a bit of a nightmare.',
        options: ['can', 'will never', 'should never', 'must not'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Can always be" expresses a general tendency based on past experience, matching "in my experience."',
      },
    ],
  },

  {
    id: 'corr-016',
    sectionType: 'correspondence',
    title: 'Thanking a Coach After Season-End',
    difficulty: 'foundation',
    tags: ['sports', 'gratitude'],
    messages: [
      {
        label: 'Message 1',
        from: 'Parent Diane',
        to: 'Coach Reyes',
        subject: 'Thank you for an amazing season',
        body: `Dear Coach Reyes,

Now that the season has officially wrapped up, I wanted to take a moment to properly thank you for everything you did with the team this year.

My son Eli started the season barely able to keep up during drills, and watching him by the final game confidently leading defensive plays was honestly something I didn't expect to see happen so quickly. He talks about practice constantly at home now, which is a big change from his attitude toward sports just a year ago.

I know coaching a team of ten-year-olds twice a week, on top of your full-time job, takes a real commitment, and it clearly showed in how prepared and patient you were at every single practice, even on days when half the team seemed to have zero focus.

The end-of-season banquet you organized was a lovely touch too. Eli still talks about the awards ceremony and how you made sure every single kid got recognized for something specific, not just the strongest players.

If you're coaching again next season, please count Eli in immediately. We'd also be happy to help out with whatever volunteer tasks you might need, whether that's organizing snacks, helping with equipment, or anything else that would make your job a bit easier.

Thank you again for such a meaningful season.

Warmly,
Diane`,
      },
      {
        label: 'Message 2 (Reply)',
        from: 'Coach Reyes',
        to: 'Diane',
        subject: 'Re: Thank you for an amazing season',
        body: `Dear Diane,

Thank you so much for this message — it genuinely made my {{corr-016-q7}} to read it.

Eli's improvement this season was honestly one of the highlights {{corr-016-q8}} me too. It's always rewarding to watch a kid grow that much confidence over just a few months.

I really do try to make sure every kid feels {{corr-016-q9}} at the banquet, since not every kid is going to be the strongest player, but every kid deserves to feel proud of something they did this season.

Yes, I'll definitely be coaching again next season, and I'd love to have Eli back. I'll also gladly {{corr-016-q10}} you up on the offer to help with snacks or equipment — it really does make a difference having a few reliable parent volunteers.

Thanks again for taking the time to write this — it means more than you probably realize.

Coach Reyes`,
      },
    ],
    questions: [
      {
        id: 'corr-016-q1',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Diane is writing to Coach Reyes mainly to .....',
        options: ['thank him for a great season and offer help for next year', 'ask him to give Eli more playing time', 'complain about how practices were run', 'request a refund for team fees'],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'Diane wants "to properly thank you for everything you did" and offers to help next season.',
      },
      {
        id: 'corr-016-q2',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: "How did Eli's skills change over the season?",
        options: [
          'He went from struggling with drills to confidently leading defensive plays',
          'He stayed at roughly the same skill level throughout',
          'He lost interest in the sport by the end',
          'He switched positions multiple times'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Diane describes Eli going from "barely able to keep up during drills" to "confidently leading defensive plays."',
      },
      {
        id: 'corr-016-q3',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: "What does Diane say about Eli's attitude toward sports compared to a year ago?",
        options: [
          'He now talks about practice constantly, a big change from before',
          'He has become less interested in sports overall',
          'He wants to quit the team next season',
          'He prefers a different sport now'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Diane notes he "talks about practice constantly at home now, which is a big change from his attitude toward sports just a year ago."',
      },
      {
        id: 'corr-016-q4',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What did the coach do at the end-of-season banquet that Diane appreciated?',
        options: [
          'He made sure every kid was recognized for something specific',
          'He gave a long speech about winning',
          'He only recognized the top scorers',
          'He cancelled the banquet to save money'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Diane mentions he "made sure every single kid got recognized for something specific, not just the strongest players."',
      },
      {
        id: 'corr-016-q5',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What does Diane offer to help with next season?',
        options: ['Volunteer tasks like organizing snacks or helping with equipment', 'Paying for new uniforms', 'Driving the whole team to games', 'Assistant coaching duties'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Diane offers help "whether that\u2019s organizing snacks, helping with equipment, or anything else."',
      },
      {
        id: 'corr-016-q6',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: "What does Diane acknowledge about the coach's commitment?",
        options: [
          'Coaching twice a week on top of a full-time job takes real commitment',
          'He should be coaching more often',
          'He was paid generously for his time',
          'He had an assistant coach helping him'
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'Diane recognizes "coaching a team of ten-year-olds twice a week, on top of your full-time job, takes a real commitment."',
      },
      {
        id: 'corr-016-q7',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'It genuinely made my ___ to read it.',
        options: ['day', 'mistake', 'list', 'point'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: '"Made my day" is a fixed expression meaning something brought genuine happiness.',
      },
      {
        id: 'corr-016-q8',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: "Eli's improvement was one of the highlights ___ me too.",
        options: ['for', 'of', 'with', 'by'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Highlight for someone" is the correct preposition pairing when describing a memorable moment from someone\u2019s perspective.',
      },
      {
        id: 'corr-016-q9',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'I really try to make sure every kid feels ___ at the banquet.',
        options: ['celebrated', 'ranked', 'compared', 'judged'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'Given the context of recognizing every kid\u2019s effort, "celebrated" fits, not a negative word like "judged" or "ranked."',
      },
      {
        id: 'corr-016-q10',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: "I'll also gladly take you ___ on the offer to help.",
        options: ['up', 'down', 'over', 'off'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: '"Take someone up on an offer" is a fixed phrasal expression meaning to accept what was offered.',
      },
      {
        id: 'corr-016-q11',
        kind: 'mcq',
        refersTo: 'Message 2',
        prompt: "What does Coach Reyes confirm about next season?",
        options: ['He will be coaching again and would love to have Eli back', 'He is retiring from coaching', 'He is moving to a different team', 'He hasn\u2019t decided yet'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'He states "I\u2019ll definitely be coaching again next season, and I\u2019d love to have Eli back."',
      },
    ],
  },

  {
    id: 'corr-017',
    sectionType: 'correspondence',
    title: 'Sharing a Maple Syrup Festival Experience',
    difficulty: 'foundation',
    tags: ['events', 'family'],
    messages: [
      {
        label: 'Message 1',
        from: 'Chantal',
        to: 'Friend Robyn',
        subject: 'Maple syrup festival recap',
        body: `Hi Robyn,

You asked how the maple syrup festival went last weekend, so here's the full story since it was honestly such a fun day!

We got to the sugar bush around 10 a.m., which turned out to be a good call since the parking lot was already filling up fast by the time we arrived. The tour of the sap-boiling process was the highlight for the kids; they got to watch the whole thing go from clear sap to that thick golden syrup right in front of them, and our youngest kept asking why it wasn't already sweet when it came straight from the tree.

After the tour, we did the pancake breakfast, which honestly might have been worth the trip on its own. Fresh syrup straight from that morning's batch, and the line moved much faster than I expected given how busy it looked.

There were also a few smaller activities scattered around, a horse-drawn wagon ride through the sugar bush, a small petting zoo area, and a stand selling maple-flavoured everything, including maple cotton candy, which the kids obviously loved and I obviously regretted letting them have right before the wagon ride.

The only downside was that we didn't realize the gift shop closes earlier than the rest of the festival, so we missed getting any syrup to bring home, which felt like a bit of a letdown after such a great morning.

You and the kids should definitely come with us next year — I think your two would especially love the wagon ride.

Talk soon,
Chantal`,
      },
      {
        label: 'Message 2 (Reply)',
        from: 'Robyn',
        to: 'Chantal',
        subject: 'Re: Maple syrup festival recap',
        body: `Hi Chantal,

This sounds {{corr-017-q7}} amazing, I'm a little jealous we missed it this year!

The sap-boiling demonstration sounds {{corr-017-q8}} the kind of thing my kids would find fascinating too, especially the part about watching it change right in front of them.

Maple cotton candy right before a wagon ride does sound like a slightly {{corr-017-q9}} decision in hindsight, but also exactly the kind of thing I probably would have done too.

That's too bad about missing the gift shop hours — is there ___ way to order syrup directly from them online, in case you still want some?

We'd absolutely love to join you next year — please remember to {{corr-017-q10}} me well in advance so I can clear the date!

Talk soon,
Robyn`,
      },
    ],
    questions: [
      {
        id: 'corr-017-q1',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Chantal is writing to Robyn mainly to .....',
        options: ['share details about their maple syrup festival visit', 'invite Robyn to a different event', 'ask Robyn for syrup recommendations', 'apologize for missing a planned visit'],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'Chantal responds to being asked "how the maple syrup festival went," giving a full recap.',
      },
      {
        id: 'corr-017-q2',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: "What was the highlight of the day for the kids, according to Chantal?",
        options: ['The sap-boiling demonstration', 'The pancake breakfast', 'The petting zoo', 'The gift shop'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Chantal states "the tour of the sap-boiling process was the highlight for the kids."',
      },
      {
        id: 'corr-017-q3',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Why was arriving around 10 a.m. a good decision?',
        options: ['The parking lot was already filling up fast by then', 'The festival opened late that day', 'Tickets sold out by 11 a.m.', 'The weather got worse later'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Chantal notes "the parking lot was already filling up fast by the time we arrived," implying arriving any later would have been worse.',
      },
      {
        id: 'corr-017-q4',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What does Chantal regret about the maple cotton candy?',
        options: ['Letting the kids have it right before the wagon ride', 'Buying too much of it', 'Forgetting to try it herself', 'Paying too much for it'],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'Chantal writes she "obviously regretted letting them have right before the wagon ride," implying a messy or uncomfortable outcome.',
      },
      {
        id: 'corr-017-q5',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What was the one downside of the day?',
        options: [
          'They missed buying syrup because the gift shop closed earlier than the festival',
          'The pancake breakfast ran out of food',
          'The weather turned bad in the afternoon',
          'The wagon ride was cancelled'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Chantal explains "the gift shop closes earlier than the rest of the festival, so we missed getting any syrup to bring home."',
      },
      {
        id: 'corr-017-q6',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What does Chantal suggest for next year?',
        options: ['That Robyn and her kids join them at the festival', 'That they skip the pancake breakfast next time', 'That they go to a different festival instead', 'That they arrive even earlier'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Chantal writes "you and the kids should definitely come with us next year."',
      },
      {
        id: 'corr-017-q7',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'This sounds ___ amazing.',
        options: ['absolutely', 'barely', 'hardly', 'rarely'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Absolutely amazing" is a natural intensified expression matching Robyn\u2019s enthusiastic reaction.',
      },
      {
        id: 'corr-017-q8',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'The sap-boiling demonstration sounds ___ the kind of thing my kids would find fascinating.',
        options: ['exactly', 'never', 'barely', 'unlikely'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Exactly the kind of thing" is a natural way to express strong agreement that something would appeal to someone.',
      },
      {
        id: 'corr-017-q9',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'That does sound like a slightly ___ decision in hindsight.',
        options: ['questionable', 'brilliant', 'simple', 'typical'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'Given the cotton candy led to a messy outcome before the wagon ride, "questionable" fits the gently teasing tone.',
      },
      {
        id: 'corr-017-q10',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'Please remember to ___ me well in advance.',
        options: ['tell', 'forget', 'avoid', 'cancel'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Tell" fits the context of Robyn wanting advance notice so she can plan ahead for the date.',
      },
      {
        id: 'corr-017-q11',
        kind: 'mcq',
        refersTo: 'Message 2',
        prompt: 'What does Robyn ask Chantal about?',
        options: [
          'Whether the festival offers a way to order syrup online',
          'Whether the festival has another date this year',
          'Whether the petting zoo is open year-round',
          'Whether the wagon ride requires a reservation'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Robyn asks "is there a way to order syrup directly from them online, in case you still want some?"',
      },
    ],
  },

  {
    id: 'corr-018',
    sectionType: 'correspondence',
    title: 'Recommending a Coworker for Retirement Hobby Classes',
    difficulty: 'intermediate',
    tags: ['workplace', 'recommendations'],
    messages: [
      {
        label: 'Message 1',
        from: 'Patricia',
        to: 'Coworker Howard',
        subject: 'Hobby class idea for your retirement',
        body: `Hi Howard,

Now that your retirement is officially just two months away, I wanted to follow up on something you mentioned at lunch last week, about wanting to find a new hobby once work isn't taking up your time anymore.

My neighbour Geoff retired about a year ago and started taking woodworking classes at the community workshop on Elm Street, and from what he's told me, it's been a great fit for him. The studio offers both beginner and intermediate courses, running in eight-week blocks, with classes meeting twice a week for two hours each session.

Geoff mentioned the beginner course costs around $280 for the full eight weeks, which includes use of all their equipment and most basic materials, though you'd need to budget a bit extra if you want to take home larger finished pieces, since the wood itself for bigger projects isn't included.

One thing he specifically mentioned enjoying is that the instructor keeps classes fairly small, usually under ten people, so everyone actually gets hands-on guidance rather than just demonstrations from the front of the room.

I don't know if woodworking is specifically what you're looking for, but given how much you talked about wanting to build something with your hands once you had the time, it seemed worth mentioning. They also offer pottery and stained glass courses if woodworking isn't quite the right fit.

Let me know if you'd like Geoff's contact info, since he offered to answer any questions you might have before signing up.

Patricia`,
      },
      {
        label: 'Message 2 (Reply)',
        from: 'Howard',
        to: 'Patricia',
        subject: 'Re: Hobby class idea for your retirement',
        body: `Hi Patricia,

Thank you for thinking of me, this is actually {{corr-018-q7}} exactly the kind of thing I had in mind when I mentioned wanting a new hobby.

The small class size is {{corr-018-q8}} appealing to me — I always learn better with hands-on guidance rather than just watching from a distance.

I'm a little concerned about the extra cost {{corr-018-q9}} larger projects, but I suppose that's a reasonable trade-off given everything else included in the price.

Yes, please pass along Geoff's contact information, {{corr-018-q10}} I'd love to ask him a few more specific questions before committing to anything.

I appreciate you keeping this in mind — it really does mean a lot that {{corr-018-q11}} remembered such a small comment from lunch.

Thanks again,
Howard`,
      },
    ],
    questions: [
      {
        id: 'corr-018-q1',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Patricia is writing to Howard mainly to .....',
        options: ['recommend a woodworking class for his retirement', 'invite him to a retirement party', 'ask him to teach a class', 'recommend he delay his retirement'],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'Patricia follows up on his mention of wanting a new hobby with a specific class recommendation.',
      },
      {
        id: 'corr-018-q2',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'How did Patricia learn about the woodworking classes?',
        options: ['Her neighbour Geoff took the classes and told her about them', 'She took the classes herself', 'She read about them online', 'A coworker mentioned them at a meeting'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Patricia explains "my neighbour Geoff retired about a year ago and started taking woodworking classes," and shares what he told her.',
      },
      {
        id: 'corr-018-q3',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'How long does the beginner course run?',
        options: ['Eight weeks, twice a week', 'Four weeks, once a week', 'Twelve weeks, three times a week', 'One weekend intensive'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Patricia states courses run "in eight-week blocks, with classes meeting twice a week."',
      },
      {
        id: 'corr-018-q4',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What does the $280 course fee include?',
        options: ['Use of equipment and most basic materials', 'All materials including large project wood', 'Unlimited classes for a full year', 'A finished take-home project guaranteed'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Patricia notes the fee "includes use of all their equipment and most basic materials," with larger project wood costing extra.',
      },
      {
        id: 'corr-018-q5',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What did Geoff specifically enjoy about the class?',
        options: ['The small class size with hands-on guidance', 'The low cost of materials', 'The flexible scheduling', 'The variety of project types'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Patricia mentions Geoff "specifically mentioned enjoying" the small class size with hands-on guidance.',
      },
      {
        id: 'corr-018-q6',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What other course options does Patricia mention besides woodworking?',
        options: ['Pottery and stained glass', 'Painting and sculpture', 'Cooking and baking', 'Photography and design'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Patricia mentions "they also offer pottery and stained glass courses if woodworking isn\u2019t quite the right fit."',
      },
      {
        id: 'corr-018-q7',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'This is actually ___ exactly the kind of thing I had in mind.',
        options: ['just', 'never', 'barely', 'hardly'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Just exactly" is a natural emphatic phrase confirming a strong match with what Howard wanted.',
      },
      {
        id: 'corr-018-q8',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'The small class size is ___ appealing to me.',
        options: ['genuinely', 'barely', 'rarely', 'hardly'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Genuinely appealing" fits Howard\u2019s sincere, positive reaction to this detail.',
      },
      {
        id: 'corr-018-q9',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: "I'm a little concerned about the extra cost ___ larger projects.",
        options: ['for', 'of', 'about', 'with'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Cost for" is the natural preposition pairing when describing the cost associated with a specific item or project.',
      },
      {
        id: 'corr-018-q10',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: "Please pass along Geoff's contact information, ___ I'd love to ask him a few questions.",
        options: ['since', 'unless', 'although', 'whereas'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Since" introduces the reason for the request, similar to "because."',
      },
      {
        id: 'corr-018-q11',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'It really does mean a lot that ___ remembered such a small comment from lunch.',
        options: ['you', 'they', 'someone', 'people'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: 'Howard is speaking directly to Patricia, so "you" correctly refers to her.',
      },
    ],
  },

  {
    id: 'corr-019',
    sectionType: 'correspondence',
    title: 'Recommending a Cottage Rental to In-Laws',
    difficulty: 'advanced',
    tags: ['family', 'travel', 'recommendations'],
    messages: [
      {
        label: 'Message 1',
        from: 'Yara',
        to: 'In-laws Frank and Beth',
        subject: 'Cottage recommendation for your trip',
        body: `Dear Frank and Beth,

David mentioned you're finally planning that cottage trip you've been talking about, so I wanted to pass along a recommendation since we had such a great experience at a place last summer.

It's called Pinecrest Cottages, located on Sturgeon Lake, about a 25-minute drive from the nearest town with grocery stores and restaurants. We stayed in their two-bedroom unit, which would probably suit you both well, especially since it has a covered porch overlooking the water that Beth would likely appreciate given how much she mentioned enjoying that kind of view at Thanksgiving.

The rate when we went was $185 per night with a three-night minimum, though I noticed online that early autumn pricing drops to around $155 per night, which might work out well if you're flexible on dates. They also offer a discount for stays of a full week or longer.

One thing worth knowing: the cottage doesn't have air conditioning, relying instead on lake breezes and ceiling fans, which was fine for us in June but might be worth considering if you're thinking of going in the peak of summer heat. The water access is excellent though, with a private dock and reasonably gentle entry into the lake, which seemed important given what David mentioned about Frank's knee still bothering him on uneven terrain.

The owners, an older couple themselves, were also incredibly responsive whenever we had questions, which made the whole stay feel low-stress.

Let me know if you'd like the booking website, and feel free to mention our name, since I believe they offer a small discount for referrals.

Warmly,
Yara`,
      },
      {
        label: 'Message 2 (Reply)',
        from: 'Beth',
        to: 'Yara',
        subject: 'Re: Cottage recommendation for your trip',
        body: `Dear Yara,

Thank you so much, this sounds {{corr-019-q7}} perfect for what we were hoping for, especially the porch with the water view.

The lack of air conditioning is a fair point to {{corr-019-q8}} into, though if early autumn pricing is lower anyway, that might actually solve both concerns at once — cooler weather and a better rate.

Frank will be relieved to hear about the gentle water entry too; he's been a bit {{corr-019-q9}} about anything requiring much climbing or balance lately because of his knee.

Yes, please do send the booking website, and of course we'll mention your name {{corr-019-q10}} the referral discount, every little bit helps with a trip like this.

Thank you again for thinking of us — it really does help to have a recommendation from someone we {{corr-019-q11}} rather than just guessing from online reviews.

With love,
Beth`,
      },
    ],
    questions: [
      {
        id: 'corr-019-q1',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Yara is writing to Frank and Beth mainly to .....',
        options: ['recommend a cottage rental based on her own experience', 'cancel a planned cottage trip', 'ask for help booking her own trip', 'invite them to join her family\u2019s trip'],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'Yara wants "to pass along a recommendation since we had such a great experience" with a specific cottage.',
      },
      {
        id: 'corr-019-q2',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Why does Yara think the porch would appeal to Beth specifically?',
        options: [
          'Beth mentioned enjoying water views at Thanksgiving',
          'Beth requested a porch specifically',
          'Beth has stayed at this cottage before',
          'Beth mentioned disliking indoor spaces'
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'Yara notes the porch is something "Beth would likely appreciate given how much she mentioned enjoying that kind of view at Thanksgiving."',
      },
      {
        id: 'corr-019-q3',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What is the regular nightly rate Yara paid, and how does it compare to early autumn pricing?',
        options: [
          '$185 per night regularly, dropping to about $155 in early autumn',
          '$155 per night regularly, rising to $185 in early autumn',
          '$200 per night with no seasonal change',
          'The rate was not mentioned'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Yara states the rate "was $185 per night," with "early autumn pricing drops to around $155 per night."',
      },
      {
        id: 'corr-019-q4',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What limitation does the cottage have?',
        options: ['No air conditioning', 'No water access', 'No private dock', 'No nearby grocery stores at all'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Yara mentions "the cottage doesn\u2019t have air conditioning, relying instead on lake breezes and ceiling fans."',
      },
      {
        id: 'corr-019-q5',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: "Why does Yara mention the cottage's gentle water entry specifically?",
        options: [
          "Because Frank's knee has been bothering him on uneven terrain",
          'Because the lake has dangerous currents elsewhere',
          'Because Beth cannot swim',
          'Because the dock requires a steep climb'
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'Yara connects this feature to "what David mentioned about Frank\u2019s knee still bothering him on uneven terrain."',
      },
      {
        id: 'corr-019-q6',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What does Yara offer to provide if they\u2019re interested?',
        options: ['The booking website, with a possible referral discount', 'A personal tour of the cottage', 'Photos from her own stay', 'A list of nearby restaurants'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Yara offers "the booking website" and mentions "they offer a small discount for referrals."',
      },
      {
        id: 'corr-019-q7',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'This sounds ___ perfect for what we were hoping for.',
        options: ['absolutely', 'barely', 'hardly', 'never'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Absolutely perfect" is a natural intensified expression matching Beth\u2019s enthusiastic reaction.',
      },
      {
        id: 'corr-019-q8',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'The lack of air conditioning is a fair point to ___ into.',
        options: ['take', 'put', 'give', 'set'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: '"Take into account/consideration" is a fixed expression; "take into" here fits as a shortened natural usage.',
      },
      {
        id: 'corr-019-q9',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: "He's been a bit ___ about anything requiring much climbing or balance lately.",
        options: ['cautious', 'thrilled', 'careless', 'eager'],
        correctIndex: 0,
        skill: 'vocabulary-in-context',
        explanation: 'Given the knee concern, "cautious" fits Frank\u2019s likely attitude, not an enthusiastic word like "eager" or "thrilled."',
      },
      {
        id: 'corr-019-q10',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'We\u2019ll mention your name ___ the referral discount.',
        options: ['for', 'to', 'about', 'with'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Mention a name for a discount" is the natural preposition pairing when explaining the purpose of the action.',
      },
      {
        id: 'corr-019-q11',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'It really does help to have a recommendation from someone we ___.',
        options: ['trust', 'avoid', 'doubt', 'ignore'],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'Given the warm, grateful tone of the letter and reliance on family advice over "guessing from online reviews," "trust" fits best.',
      },
    ],
  },

  {
    id: 'corr-020',
    sectionType: 'correspondence',
    title: 'Thanking a Colleague for Pet-Sitting',
    difficulty: 'foundation',
    tags: ['workplace', 'pets', 'gratitude'],
    messages: [
      {
        label: 'Message 1',
        from: 'Soo-Jin',
        to: 'Colleague Marcus',
        subject: 'Thank you for watching Biscuit',
        body: `Hi Marcus,

I just got back from the conference in Vancouver, and I wanted to thank you properly for watching Biscuit while I was away. I know five days is a lot to ask of anyone, especially with a dog who's still a bit anxious around new people.

When I picked him up last night, he seemed completely relaxed and happy, which honestly surprised me a little given how nervous he usually gets when I leave him anywhere unfamiliar. You must have done something right to get him that comfortable so quickly.

I also noticed you trimmed his nails, which I hadn't even asked you to do. I've been putting that off for weeks because he hates it so much, so I really appreciate you taking that on, even though I know it probably wasn't easy with how squirmy he gets.

Please let me know what I owe you for the week, including any extra for the nail trimming, since that's well beyond just basic pet-sitting. I'd also love to bring you something as a thank-you, maybe dinner sometime, if you're up for it.

Thanks again for going so far above and beyond. I genuinely don't know what I would have done without you.

Soo-Jin`,
      },
      {
        label: 'Message 2 (Reply)',
        from: 'Marcus',
        to: 'Soo-Jin',
        subject: 'Re: Thank you for watching Biscuit',
        body: `Hi Soo-Jin,

Honestly, it was {{corr-020-q7}} no trouble at all — Biscuit warmed up to me faster than I expected too, probably helped by the fact that I just let him set the pace instead of pushing him to interact right away.

Please don't worry about paying me anything extra {{corr-020-q8}} the nail trimming — I noticed they needed it and figured I'd just take care of it while he was here.

As for the regular pet-sitting fee, {{corr-020-q10}} what we originally agreed on is more than fine, no need to add anything on top of that.

I'd happily take you up on dinner sometime though, {{corr-020-q9}} that's purely because I enjoy your company, not because I expect anything in return for watching Biscuit.

Glad he settled in so well — he's genuinely a great dog, even with the nail-trimming squirming!

Marcus`,
      },
    ],
    questions: [
      {
        id: 'corr-020-q1',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Soo-Jin is writing to Marcus mainly to .....',
        options: ['thank him for pet-sitting and offer to pay him', 'ask him to watch her dog again next month', 'apologize for leaving the dog too long', 'invite him to a conference'],
        correctIndex: 0,
        skill: 'main-idea',
        explanation: 'Soo-Jin wants "to thank you properly for watching Biscuit" and asks what she owes him.',
      },
      {
        id: 'corr-020-q2',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What surprised Soo-Jin when she picked up Biscuit?',
        options: [
          'He seemed completely relaxed and happy, unlike his usual nervousness',
          'He had lost weight while she was away',
          'He didn\u2019t recognize her at first',
          'He refused to leave with her'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Soo-Jin notes "he seemed completely relaxed and happy, which honestly surprised me a little given how nervous he usually gets."',
      },
      {
        id: 'corr-020-q3',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What extra task did Marcus do that Soo-Jin hadn\u2019t asked for?',
        options: ['Trimmed Biscuit\u2019s nails', 'Bathed Biscuit', 'Bought new dog food', 'Took Biscuit to the vet'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Soo-Jin writes "I also noticed you trimmed his nails, which I hadn\u2019t even asked you to do."',
      },
      {
        id: 'corr-020-q4',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'Why has Soo-Jin been putting off trimming the nails herself?',
        options: ['Biscuit hates it so much', 'She forgot about it', 'She doesn\u2019t own the right tools', 'It\u2019s too expensive at the groomer'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Soo-Jin explains "I\u2019ve been putting that off for weeks because he hates it so much."',
      },
      {
        id: 'corr-020-q5',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: 'What does Soo-Jin offer in addition to payment?',
        options: ['To take Marcus to dinner as a thank-you', 'To pet-sit for Marcus in return', 'To give him a gift card', 'To recommend him for a promotion'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Soo-Jin writes "I\u2019d also love to bring you something as a thank-you, maybe dinner sometime."',
      },
      {
        id: 'corr-020-q6',
        kind: 'mcq',
        refersTo: 'Message 1',
        prompt: "What is Soo-Jin's overall tone in this message?",
        options: ['Grateful and appreciative', 'Apologetic and embarrassed', 'Casual and indifferent', 'Demanding'],
        correctIndex: 0,
        skill: 'tone-purpose',
        explanation: 'She repeatedly expresses thanks and admits "I genuinely don\u2019t know what I would have done without you," showing clear gratitude.',
      },
      {
        id: 'corr-020-q7',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'Honestly, it was ___ no trouble at all.',
        options: ['genuinely', 'barely', 'rarely', 'hardly'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Genuinely no trouble" emphasizes Marcus\u2019s sincerity in downplaying the favour.',
      },
      {
        id: 'corr-020-q8',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: "Please don't worry about paying me anything extra ___ the nail trimming.",
        options: ['for', 'about', 'with', 'on'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Pay extra for something" is the natural preposition pairing when describing payment tied to a specific task.',
      },
      {
        id: 'corr-020-q9',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: "I'd happily take you up on dinner sometime, ___ that's purely because I enjoy your company.",
        options: ['though', 'because', 'so', 'unless'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Though" introduces a clarifying contrast — accepting dinner while clarifying his motive isn\u2019t obligation.',
      },
      {
        id: 'corr-020-q10',
        kind: 'blank',
        refersTo: 'Message 2',
        prompt: 'As for the regular pet-sitting fee, ___ what we originally agreed on is more than fine.',
        options: ['just', 'never', 'hardly', 'rarely'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Just" emphasizes that the original agreed amount is sufficient, with nothing extra needed.',
      },
      {
        id: 'corr-020-q11',
        kind: 'mcq',
        refersTo: 'Message 2',
        prompt: "What does Marcus say about why Biscuit warmed up to him so quickly?",
        options: [
          'He let Biscuit set his own pace instead of pushing interaction',
          'He used special dog treats',
          'He played loud music to calm him down',
          'He kept Biscuit in a crate most of the time'
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Marcus explains it was "probably helped by the fact that I just let him set the pace instead of pushing him to interact right away."',
      },
    ],
  },
];
