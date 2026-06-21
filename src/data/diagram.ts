import type { DiagramSet } from '../types/content';

export const diagramSets: DiagramSet[] = [
  {
    id: 'diag-001',
    sectionType: 'diagram',
    title: 'Downtown Bike Rental Options',
    difficulty: 'advanced',
    tags: ['public transit', 'comparison'],
    context:
      'Three bike rental businesses operate near the downtown waterfront. A flyer comparing their options is shown below, followed by an email applying details from it.',
    diagramTitle: 'Downtown Bike Rental Options — Pick Up, Ride, Return',
    diagramData: {
      kind: 'list',
      items: [
        {
          label: 'Pedal City Rentals',
          details:
            '45 Harbour Rd (next to the ferry terminal). Standard Bike: $12/hr or $45/day. Electric Bike: $22/hr or $75/day. Tandem Bike: $18/hr. All rentals include helmet, lock, and a city bike map. Kids\u2019 bikes and child seats available — ask staff for details. Contact: 604-881-2290.',
        },
        {
          label: 'Wheelhouse Bikes',
          details:
            '110 Pacific Blvd, Unit 3. Half-day rental (up to 4 hrs): $30. Full-day rental: $50. Weekend package (Sat & Sun): $85, includes a free water bottle with every weekend package. Bikes are fitted on-site by a certified technician. Must be 16+ to rent — photo ID required. Website: www.wheelhousebikes.ca (no phone line listed).',
        },
        {
          label: 'Greenlane Bike Share',
          details:
            'Self-serve station network throughout downtown — see app for nearest dock. Single ride (30 min): $3.50. Day pass (unlimited 45-min rides): $14. Monthly membership: $39. No age minimum, but riders under 13 must be accompanied by an adult. Stations are unstaffed, so no helmets or maps are provided on-site.',
        },
      ],
    },
    applicationMessage: {
      label: 'Email',
      from: 'Tom',
      to: 'Derek',
      subject: 'Re: Bike rentals this weekend',
      body: `Hey Derek,

Great to hear you're heading downtown with Lisa and Jake this Saturday and Sunday! I had a blast cycling around last weekend, so I'm glad you want to give it a go. I sent you that rental guide — there's a lot to consider.

One thing to watch out for: Jake is only 14, so he won't be able to rent from Wheelhouse since {{diag-001-q1}}. You'd have to go with Pedal City for him — they have options for younger riders.

Speaking of Pedal City, I noticed they're right beside {{diag-001-q2}}, which is convenient if you're coming by boat.

Now, if you and Lisa want bikes for both days, the weekend bundle at Wheelhouse actually saves you money compared to paying for two separate full days, since two full days normally costs {{diag-001-q3}} but the weekend package is only $85.

Lisa mentioned she just wants to take it easy along the waterfront without worrying about a fixed return time, so {{diag-001-q4}} would probably suit her better than a daily rental.

By the way, I wanted to call Wheelhouse to confirm their hours, but {{diag-001-q5}}, so you'll have to check their website instead.

If Jake wants an electric bike for an hour just to try it, that would cost {{diag-001-q6}} at Pedal City.

One more thing — if you end up using Greenlane for a quick ride, remember {{diag-001-q7}}, since you mentioned Jake might want to ride there alone for a bit.

Anyway, have a great weekend — let me know how it goes! And don't forget, none of the Greenlane stations are staffed, so {{diag-001-q8}}.

Talk soon,
Tom`,
    },
    questions: [
      {
        id: 'diag-001-q1',
        kind: 'blank',
        prompt: "Jake won't be able to rent from Wheelhouse since ___",
        options: [
          'renters must be at least 16 with photo ID',
          'Wheelhouse is fully booked this weekend',
          'Wheelhouse only rents electric bikes',
          'Jake doesn\u2019t have a credit card',
        ],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'The flyer states Wheelhouse riders "must be 16+ to rent — photo ID required," and Jake is 14.',
      },
      {
        id: 'diag-001-q2',
        kind: 'blank',
        prompt: 'Pedal City is right beside ___',
        options: ['the ferry terminal', 'Wheelhouse Bikes', 'a Greenlane docking station', 'the downtown library'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The flyer lists Pedal City\u2019s address as "45 Harbour Rd (next to the ferry terminal)."',
      },
      {
        id: 'diag-001-q3',
        kind: 'blank',
        prompt: 'Two full days normally costs ___ at Wheelhouse before the weekend bundle discount',
        options: ['$100', '$85', '$60', '$150'],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'A full-day rental is $50, so two full days = $100, compared to the $85 weekend bundle — a real saving.',
      },
      {
        id: 'diag-001-q4',
        kind: 'blank',
        prompt: 'For Lisa, ___ would probably suit her better than a daily rental',
        options: [
          'a Greenlane single ride or day pass',
          'the Wheelhouse weekend package',
          'a Pedal City tandem bike',
          'an electric bike from Pedal City',
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'Greenlane is self-serve with short, flexible rides (30/45-minute increments) and no fixed return window, matching someone who wants to "take it easy... without worrying about a fixed return time."',
      },
      {
        id: 'diag-001-q5',
        kind: 'blank',
        prompt: 'Tom wanted to call Wheelhouse to confirm their hours, but ___',
        options: [
          'no phone number is listed for Wheelhouse',
          'Wheelhouse is permanently closed',
          'the line was busy all day',
          'Wheelhouse doesn\u2019t open on weekends',
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'The flyer lists only a website for Wheelhouse ("no phone line listed"), unlike Pedal City, which has a phone number.',
      },
      {
        id: 'diag-001-q6',
        kind: 'blank',
        prompt: 'An electric bike for one hour at Pedal City would cost ___',
        options: ['$22', '$12', '$75', '$18'],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'The flyer lists the Pedal City electric bike rate as "$22/hr."',
      },
      {
        id: 'diag-001-q7',
        kind: 'blank',
        prompt: 'If Jake rides Greenlane alone, remember that ___',
        options: [
          'riders under 13 must be accompanied by an adult, though Jake at 14 would be fine alone',
          'Greenlane does not allow anyone under 18 to ride at all',
          'Greenlane bikes cannot be ridden outside a 30-minute window',
          'Greenlane requires a credit card deposit for every ride',
        ],
        correctIndex: 0,
        skill: 'matching-information',
        explanation: 'The flyer states "riders under 13 must be accompanied by an adult" — Jake, at 14, is old enough to ride alone under Greenlane\u2019s rule.',
      },
      {
        id: 'diag-001-q8',
        kind: 'blank',
        prompt: 'Since none of the Greenlane stations are staffed, ___',
        options: [
          'no helmets or maps are provided there',
          'riders must bring exact cash',
          'bikes cannot be returned after dark',
          'a reservation is required in advance',
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The flyer notes Greenlane stations are "unstaffed, so no helmets or maps are provided on-site" — unlike Pedal City and Wheelhouse.',
      },
    ],
  },

  {
    id: 'diag-002',
    sectionType: 'diagram',
    title: 'Comparing Three Rental Buildings',
    difficulty: 'advanced',
    tags: ['apartment rentals', 'comparison'],
    context:
      'A renter is comparing three apartment buildings in the same neighbourhood. The comparison chart is shown below, followed by a message applying details from it.',
    diagramTitle: 'Apartment Building Comparison',
    diagramData: {
      kind: 'comparison',
      categories: ['Maple Court', 'Birchwood Residences', 'Cedar Park Towers'],
      rows: [
        { feature: 'Monthly rent (1-bedroom)', values: ['$1,450', '$1,600', '$1,375'] },
        { feature: 'Parking included', values: ['No (extra $75/month)', 'Yes', 'No (extra $50/month)'] },
        { feature: 'Pets allowed', values: ['Cats only', 'Cats and dogs', 'Not allowed'] },
        { feature: 'In-unit laundry', values: ['No (shared laundry room)', 'Yes', 'No (shared laundry room)'] },
        { feature: 'Distance to transit stop', values: ['5-minute walk', '12-minute walk', '3-minute walk'] },
        { feature: 'Lease term required', values: ['12 months', '12 months', '6 or 12 months'] },
      ],
    },
    applicationMessage: {
      label: 'Text Message',
      from: 'Priya',
      to: 'Sam',
      subject: 'Re: Apartment hunting update',
      body: `Hey Sam,

Thanks for sending over that comparison chart — really helpful! Here's where I've landed after looking it over.

Since we have a dog, Cedar Park is out completely, because {{diag-002-q1}}. That really only leaves Maple Court and Birchwood as real options for us.

Between those two, Birchwood looks better for the dog situation, since {{diag-002-q2}}, even though the rent there is {{diag-002-q3}} more per month than Maple Court.

The laundry question matters to me too — Birchwood actually includes {{diag-002-q4}}, so we wouldn't be dragging a basket down the hall every week like we would at the other two buildings.

One thing I do like about Maple Court is the location — it's only {{diag-002-q5}} from the building to the nearest transit stop, which beats Birchwood's walk by quite a bit.

If we want flexibility instead of committing for a full year, none of these three really helps us, since {{diag-002-q6}}.

I also noticed Cedar Park is the closest to transit of the three, since it's only {{diag-002-q7}}, even though it's not an option for us because of the dog.

And just so I don't forget — if we do go with Birchwood, parking is already {{diag-002-q8}}, so we won't need to budget extra for that on top of rent.

Let me know what you think — I'm leaning toward Birchwood despite the higher rent, mainly because of the dog and the laundry.

Talk soon,
Priya`,
    },
    questions: [
      {
        id: 'diag-002-q1',
        kind: 'blank',
        prompt: 'Cedar Park is out completely for a dog owner because ___',
        options: ['pets are not allowed there at all', 'parking costs extra', 'the lease is too short', 'it has no laundry'],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'The chart lists Cedar Park Towers\u2019 pet policy as "Not allowed," ruling it out for any pet owner.',
      },
      {
        id: 'diag-002-q2',
        kind: 'blank',
        prompt: 'Birchwood looks better for the dog situation, since ___',
        options: [
          'it allows both cats and dogs, while Maple Court allows cats only',
          'it has a shorter lease requirement',
          'it is closer to transit',
          'it costs less than Maple Court',
        ],
        correctIndex: 0,
        skill: 'matching-information',
        explanation: 'The chart shows Birchwood allows "Cats and dogs," while Maple Court allows "Cats only" — Birchwood is the only option that fits a dog owner besides being ruled out at Cedar Park.',
      },
      {
        id: 'diag-002-q3',
        kind: 'blank',
        prompt: 'The rent at Birchwood is ___ more per month than Maple Court',
        options: ['$150', '$75', '$225', '$50'],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'Birchwood is $1,600 and Maple Court is $1,450 — a difference of $150.',
      },
      {
        id: 'diag-002-q4',
        kind: 'blank',
        prompt: 'Birchwood includes ___',
        options: ['in-unit laundry', 'a shared laundry room only', 'free parking only on weekends', 'a pet deposit waiver'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists Birchwood as the only building with "in-unit laundry," not a shared laundry room.',
      },
      {
        id: 'diag-002-q5',
        kind: 'blank',
        prompt: 'Maple Court is only ___ from the building to the nearest transit stop',
        options: ['a 5-minute walk', 'a 12-minute walk', 'a 3-minute walk', 'a 10-minute walk'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists Maple Court\u2019s distance to transit as a "5-minute walk," shorter than Birchwood\u2019s 12-minute walk.',
      },
      {
        id: 'diag-002-q6',
        kind: 'blank',
        prompt: 'None of these three buildings offers full flexibility, since ___',
        options: [
          'two require a full 12-month lease and the third only offers 6 or 12 months, never shorter',
          'all three require a 24-month lease',
          'none of them allow month-to-month renewal after the first year',
          'all three charge a lease-breaking fee',
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'Maple Court and Birchwood both require 12 months, and Cedar Park\u2019s shortest option is still 6 months — none offer anything shorter or more flexible than that.',
      },
      {
        id: 'diag-002-q7',
        kind: 'blank',
        prompt: 'Cedar Park is the closest to transit of the three, since it\u2019s only ___',
        options: ['a 3-minute walk', 'a 5-minute walk', 'a 12-minute walk', 'a 7-minute walk'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists Cedar Park Towers\u2019 distance to transit as a "3-minute walk," the shortest of the three buildings.',
      },
      {
        id: 'diag-002-q8',
        kind: 'blank',
        prompt: 'If they go with Birchwood, parking is already ___',
        options: ['included in the rent', 'an extra $75 per month', 'an extra $50 per month', 'unavailable to tenants'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists Birchwood\u2019s parking as "Yes" (included), unlike Maple Court ($75/month extra) and Cedar Park ($50/month extra).',
      },
    ],
  },

  {
    id: 'diag-003',
    sectionType: 'diagram',
    title: 'Weekend Bus Route Detour Notice',
    difficulty: 'advanced',
    tags: ['public transit', 'notices'],
    context:
      'Due to road construction, the city transit authority has posted temporary detour information for three weekend bus routes, shown below, followed by a message applying it.',
    diagramTitle: 'Weekend Detour Schedule — Routes 12, 47, and 63',
    diagramData: {
      kind: 'schedule',
      items: [
        {
          time: 'Sat & Sun, all day',
          activity: 'Route 12 detour via Elm Street',
          location: 'Skips Main St stops between 4th Ave and 9th Ave',
          notes: 'Use temporary stop at corner of Elm St and 6th Ave instead',
        },
        {
          time: 'Sat only, 6 a.m.\u20138 p.m.',
          activity: 'Route 47 reduced frequency',
          location: 'Runs every 40 minutes instead of every 20 minutes',
          notes: 'Caused by a driver shortage, not construction',
        },
        {
          time: 'Sun only, 9 a.m.\u20133 p.m.',
          activity: 'Route 63 suspended',
          location: 'No service on this route during these hours',
          notes: 'Replacement shuttle bus runs along the same path every 30 minutes',
        },
        {
          time: 'Sat & Sun, all day',
          activity: 'Route 12 extra evening trip added',
          location: 'New departure from downtown terminal at 11:45 p.m.',
          notes: 'Added due to detour delays affecting the last regular trip',
        },
      ],
    },
    applicationMessage: {
      label: 'Text Message',
      from: 'Aisha',
      to: 'Ben',
      subject: 'Re: Weekend bus plans',
      body: `Hey Ben,

Saw the transit notice about this weekend — here's what it means for our plans.

You usually catch Route 12 at the Main St stop near 7th Ave, but this weekend you'll need to {{diag-003-q1}} instead, since that stop is being skipped.

For Saturday morning, Route 47 is running less often than usual — every {{diag-003-q2}} instead of the normal 20 — and that's actually because of {{diag-003-q3}}, not the construction.

If your sister wants to take Route 63 to brunch around 11 a.m. on Sunday, she'll need to know that {{diag-003-q4}}, since the regular route won't be running then.

I'm planning to catch a late movie downtown on Saturday, so if I miss the last regular Route 12 trip, I can still get home on the new {{diag-003-q5}} departure they just added.

One more thing — do you know why they added that extra late trip in the first place? It's because {{diag-003-q6}}.

Also, just to be clear about timing — the Route 12 detour itself runs {{diag-003-q7}}, not just on one day, so we don't need to double check it again tomorrow.

And the Route 47 slowdown only affects {{diag-003-q8}}, so if we're not riding it Saturday, it shouldn't change our Sunday plans at all.

See you this weekend!
Aisha`,
    },
    questions: [
      {
        id: 'diag-003-q1',
        kind: 'blank',
        prompt: 'Since the Main St stop is being skipped, Ben will need to use ___',
        options: [
          'the temporary stop at Elm St and 6th Ave',
          'the Route 47 stop instead',
          'the downtown terminal only',
          'a stop on Main St between 4th and 9th Ave',
        ],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'The notice says Route 12 "skips Main St stops between 4th Ave and 9th Ave" and to "use temporary stop at corner of Elm St and 6th Ave instead."',
      },
      {
        id: 'diag-003-q2',
        kind: 'blank',
        prompt: 'On Saturday, Route 47 runs every ___ instead of the normal 20 minutes',
        options: ['40 minutes', '30 minutes', '60 minutes', '15 minutes'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The notice states Route 47 "runs every 40 minutes instead of every 20 minutes" on Saturday.',
      },
      {
        id: 'diag-003-q3',
        kind: 'blank',
        prompt: 'The reduced Route 47 frequency is because of ___',
        options: ['a driver shortage', 'road construction', 'low weekend ridership', 'a city holiday'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The notice specifies this is "caused by a driver shortage, not construction" — a deliberate contrast with the Route 12 detour.',
      },
      {
        id: 'diag-003-q4',
        kind: 'blank',
        prompt: "Ben's sister will need to know that ___",
        options: [
          'Route 63 is suspended then, but a replacement shuttle runs every 30 minutes along the same path',
          'Route 63 runs as normal that morning',
          'Route 63 only runs on weekday mornings',
          'there is no way to reach downtown by transit that morning',
        ],
        correctIndex: 0,
        skill: 'matching-information',
        explanation: 'Route 63 is suspended 9 a.m.\u20133 p.m. Sunday, which covers 11 a.m., but "a replacement shuttle bus runs along the same path every 30 minutes."',
      },
      {
        id: 'diag-003-q5',
        kind: 'blank',
        prompt: 'If Aisha misses the last regular trip, she can catch the new ___ departure',
        options: ['11:45 p.m.', '10:45 p.m.', 'midnight', '11:00 p.m.'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The notice lists the new extra departure as leaving the downtown terminal at "11:45 p.m."',
      },
      {
        id: 'diag-003-q6',
        kind: 'blank',
        prompt: 'The extra late trip was added because ___',
        options: [
          'detour delays were affecting the last regular trip',
          'Route 47 needed extra capacity',
          'Route 63 service was being replaced permanently',
          'weekend ridership has doubled recently',
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'The notice states the trip was "added due to detour delays affecting the last regular trip."',
      },
      {
        id: 'diag-003-q7',
        kind: 'blank',
        prompt: 'The Route 12 detour itself runs ___',
        options: ['both Saturday and Sunday, all day', 'Saturday only', 'Sunday only', 'only during evening hours'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The notice lists the Route 12 Main St detour as in effect "Sat & Sun, all day," unlike Route 47 (Saturday only) and Route 63 (Sunday only).',
      },
      {
        id: 'diag-003-q8',
        kind: 'blank',
        prompt: 'The Route 47 slowdown only affects ___',
        options: ['Saturday', 'Sunday', 'both days equally', 'weekday mornings'],
        correctIndex: 0,
        skill: 'matching-information',
        explanation: 'The notice specifies the reduced Route 47 frequency is "Sat only, 6 a.m.\u20138 p.m." — Sunday service is unaffected.',
      },
    ],
  },

  {
    id: 'diag-004',
    sectionType: 'diagram',
    title: 'Weekly Grocery Flyer Comparison',
    difficulty: 'advanced',
    tags: ['shopping', 'comparison'],
    context:
      'Three grocery stores in the same neighbourhood have released their weekly flyers. A shopper is comparing prices before deciding where to do their shopping, shown below, followed by a message applying the details.',
    diagramTitle: 'This Week\u2019s Flyer Deals',
    diagramData: {
      kind: 'comparison',
      categories: ['Fresh Mart', 'Valley Grocers', 'Corner Foods'],
      rows: [
        { feature: 'Chicken breast (per kg)', values: ['$8.99', '$7.49', '$9.99, but $6.99 with the store loyalty card'] },
        { feature: 'Milk (4L)', values: ['$4.49', '$4.99', '$4.29'] },
        { feature: 'Store hours', values: ['8 a.m.\u201310 p.m. daily', '7 a.m.\u20139 p.m. daily', '24 hours, every day'] },
        { feature: 'Loyalty card required for sale prices', values: ['No', 'No', 'Yes, free to sign up in-store'] },
        { feature: 'Online order pickup', values: ['Available, $5 fee', 'Not available', 'Available, free with $50 minimum order'] },
        { feature: 'Flyer valid dates', values: ['Thu\u2013Sun this week', 'Wed\u2013Tue this week', 'Fri\u2013Thu this week'] },
      ],
    },
    applicationMessage: {
      label: 'Text Message',
      from: 'Greta',
      to: 'Owen',
      subject: 'Re: Grocery run this week',
      body: `Hey Owen,

I went through all three flyers before we head out today. Here's the plan.

For chicken, Corner Foods is actually the cheapest, but only {{diag-004-q1}}, so we should sign up while we're there since it's free.

For milk, the best deal is at {{diag-004-q2}}, at $4.29 for 4L.

If we want to shop late tonight after my shift, only {{diag-004-q3}} works, since the other two close by 10 p.m. at the latest.

I was going to order some of this online for pickup, but Valley Grocers won't work for that since {{diag-004-q4}}.

If we do order online from Corner Foods, we'd want to spend at least {{diag-004-q5}} to avoid the pickup fee entirely.

One thing to watch — Valley Grocers' flyer deal actually started yesterday and runs out {{diag-004-q6}}, so today's still fine but tomorrow might not be.

Fresh Mart's flyer, on the other hand, doesn't even start until {{diag-004-q7}}, so if we go today we'd be shopping at regular prices there, not flyer prices.

Let's just do Corner Foods today, sign up for the loyalty card, and skip the other two — seems like the best overall deal once we factor in {{diag-004-q8}}.

See you after work,
Greta`,
    },
    questions: [
      {
        id: 'diag-004-q1',
        kind: 'blank',
        prompt: 'Corner Foods is the cheapest for chicken, but only ___',
        options: [
          'with the store loyalty card',
          'on weekends',
          'for orders over $50',
          'between 8 a.m. and 10 p.m.',
        ],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'The chart lists Corner Foods chicken at "$9.99, but $6.99 with the store loyalty card" — the lower price requires the card.',
      },
      {
        id: 'diag-004-q2',
        kind: 'blank',
        prompt: 'The best deal on milk is at ___',
        options: ['Corner Foods', 'Fresh Mart', 'Valley Grocers', 'none of the three'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Corner Foods lists milk at "$4.29," the lowest of the three prices shown.',
      },
      {
        id: 'diag-004-q3',
        kind: 'blank',
        prompt: 'Only ___ stays open late enough for shopping after a late shift',
        options: ['Corner Foods', 'Fresh Mart', 'Valley Grocers', 'all three equally'],
        correctIndex: 0,
        skill: 'matching-information',
        explanation: 'Corner Foods is open "24 hours, every day," unlike Fresh Mart (closes at 10 p.m.) or Valley Grocers (closes at 9 p.m.).',
      },
      {
        id: 'diag-004-q4',
        kind: 'blank',
        prompt: "Valley Grocers won't work for online pickup since ___",
        options: [
          'online order pickup is not available there at all',
          'it requires a $50 minimum order',
          'it charges a $5 pickup fee',
          'pickup is only available on weekends',
        ],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'The chart lists Valley Grocers\u2019 online order pickup as "Not available."',
      },
      {
        id: 'diag-004-q5',
        kind: 'blank',
        prompt: 'To avoid the pickup fee at Corner Foods, they would need to spend at least ___',
        options: ['$50', '$30', '$75', '$25'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart states Corner Foods pickup is "free with $50 minimum order."',
      },
      {
        id: 'diag-004-q6',
        kind: 'blank',
        prompt: "Valley Grocers' flyer deal runs out ___",
        options: ['tomorrow (Tuesday)', 'today', 'this Thursday', 'in two weeks'],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'The flyer is valid "Wed\u2013Tue this week," meaning Tuesday is the last day — if today is Monday, tomorrow (Tuesday) is the cutoff.',
      },
      {
        id: 'diag-004-q7',
        kind: 'blank',
        prompt: "Fresh Mart's flyer doesn't start until ___",
        options: ['Thursday', 'today', 'Wednesday', 'this weekend only'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Fresh Mart\u2019s flyer is valid "Thu\u2013Sun this week," meaning it begins Thursday.',
      },
      {
        id: 'diag-004-q8',
        kind: 'blank',
        prompt: 'Corner Foods seems like the best overall deal once factoring in ___',
        options: ['hours, loyalty pricing, and pickup options together', 'milk price alone', 'flyer start date alone', 'distance from home'],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'Greta\u2019s reasoning throughout the message combines chicken price with the loyalty card, milk price, hours, and pickup options — multiple factors together, not just one.',
      },
    ],
  },

  {
    id: 'diag-005',
    sectionType: 'diagram',
    title: 'Comparing Three Daycare Centres',
    difficulty: 'advanced',
    tags: ['childcare', 'comparison'],
    context:
      'A parent is comparing three licensed daycare centres before enrolling their child. The comparison chart is shown below, followed by a message applying the details.',
    diagramTitle: 'Daycare Centre Comparison',
    diagramData: {
      kind: 'comparison',
      categories: ['Sunnyside Daycare', 'Little Sprouts', 'Maple Grove Childcare'],
      rows: [
        { feature: 'Monthly fee (full-time)', values: ['$1,100', '$950', '$1,250'] },
        { feature: 'Age range accepted', values: ['18 months\u20135 years', '6 months\u20134 years', '12 months\u20136 years'] },
        { feature: 'Hours', values: ['7:30 a.m.\u20135:30 p.m.', '8:00 a.m.\u20136:00 p.m.', '7:00 a.m.\u20136:00 p.m.'] },
        { feature: 'Current waitlist', values: ['3\u20134 months', 'No waitlist', '6+ months'] },
        { feature: 'Meals included', values: ['Lunch only, snacks extra', 'All meals and snacks included', 'Lunch and one snack included'] },
        { feature: 'Subsidy program accepted', values: ['Yes', 'No', 'Yes'] },
      ],
    },
    applicationMessage: {
      label: 'Email',
      from: 'Renee',
      to: 'Carlos',
      subject: 'Re: Daycare comparison',
      body: `Hi Carlos,

I finally got all three daycare quotes back, so here's where things stand.

Since our daughter is only 10 months old, Little Sprouts is actually the only one of the three that can take her right now, because {{diag-005-q1}}.

The good news is Little Sprouts also has {{diag-005-q2}}, so we wouldn't be stuck waiting months like we would at Maple Grove.

On cost, Little Sprouts is also the cheapest option at {{diag-005-q3}} per month for full-time care.

One downside worth mentioning: since we both rely on the childcare subsidy, Little Sprouts won't work long-term for our budget, since {{diag-005-q4}}.

Between the other two, Sunnyside has a shorter wait than Maple Grove, since Sunnyside's waitlist is {{diag-005-q5}} compared to Maple Grove's 6+ months.

For meals, Sunnyside only covers lunch, so we'd still need to pack {{diag-005-q6}} every day if we went there.

If you need drop-off before 7:30, none of these three would technically work for us except {{diag-005-q7}}, since it's the only one open starting at 7:00 a.m.

Given all this, I think our real plan should be Little Sprouts now while she's still under a year, then {{diag-005-q8}} once she's old enough and a subsidized spot opens up.

Let me know your thoughts!

Renee`,
    },
    questions: [
      {
        id: 'diag-005-q1',
        kind: 'blank',
        prompt: 'Little Sprouts is the only one that can take a 10-month-old because ___',
        options: [
          'it accepts children from 6 months old, unlike the other two',
          'it has no waitlist',
          'it is the cheapest option',
          'it includes all meals',
        ],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'Little Sprouts accepts "6 months\u20134 years," while Sunnyside starts at 18 months and Maple Grove at 12 months — only Little Sprouts fits a 10-month-old.',
      },
      {
        id: 'diag-005-q2',
        kind: 'blank',
        prompt: 'Little Sprouts also has ___',
        options: ['no waitlist', 'the shortest waitlist of the three', 'a 6-month waitlist', 'a lottery-based waitlist'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists Little Sprouts\u2019 current waitlist as "No waitlist."',
      },
      {
        id: 'diag-005-q3',
        kind: 'blank',
        prompt: 'Little Sprouts costs ___ per month for full-time care',
        options: ['$950', '$1,100', '$1,250', '$1,000'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists Little Sprouts\u2019 monthly fee as "$950," the lowest of the three.',
      },
      {
        id: 'diag-005-q4',
        kind: 'blank',
        prompt: "Little Sprouts won't work long-term for their budget since ___",
        options: [
          'it does not accept the subsidy program',
          'it is too expensive',
          'it has a long waitlist',
          'it has limited hours',
        ],
        correctIndex: 0,
        skill: 'matching-information',
        explanation: 'The chart shows Little Sprouts does not accept the subsidy program ("No"), unlike Sunnyside and Maple Grove, which both accept it.',
      },
      {
        id: 'diag-005-q5',
        kind: 'blank',
        prompt: "Sunnyside's waitlist is ___",
        options: ['3\u20134 months', '6+ months', 'no wait at all', '1 month'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists Sunnyside\u2019s current waitlist as "3\u20134 months," shorter than Maple Grove\u2019s "6+ months."',
      },
      {
        id: 'diag-005-q6',
        kind: 'blank',
        prompt: 'At Sunnyside, they would still need to pack ___ every day',
        options: ['snacks', 'lunch', 'breakfast and lunch', 'nothing at all'],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'Sunnyside includes "Lunch only, snacks extra" — meaning snacks must be brought separately.',
      },
      {
        id: 'diag-005-q7',
        kind: 'blank',
        prompt: 'For drop-off before 7:30, only ___ would work',
        options: ['Maple Grove Childcare', 'Sunnyside Daycare', 'Little Sprouts', 'none of the three'],
        correctIndex: 0,
        skill: 'matching-information',
        explanation: 'Maple Grove opens at "7:00 a.m.," earlier than Sunnyside (7:30 a.m.) and Little Sprouts (8:00 a.m.).',
      },
      {
        id: 'diag-005-q8',
        kind: 'blank',
        prompt: 'The plan should be Little Sprouts now, then ___ later',
        options: [
          'move to a subsidized option once she\u2019s old enough and a spot opens up',
          'stay at Little Sprouts permanently regardless of cost',
          'switch to a private nanny instead',
          'cancel daycare altogether',
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'Given the budget concern about losing the subsidy at Little Sprouts, the logical next step is moving to a subsidy-accepting centre later, once age and availability allow.',
      },
    ],
  },

  {
    id: 'diag-006',
    sectionType: 'diagram',
    title: 'Continuing Education Course Schedule',
    difficulty: 'intermediate',
    tags: ['education', 'scheduling'],
    context:
      'A community college has released its continuing education schedule for the fall term. A prospective student is reviewing the options below, followed by a message applying the details.',
    diagramTitle: 'Fall Continuing Education Schedule',
    diagramData: {
      kind: 'table',
      headers: ['Course', 'Day', 'Time', 'Format', 'Fee', 'Prerequisite'],
      rows: [
        ['Intro to Bookkeeping', 'Tuesday', '6:30\u20138:30 p.m.', 'In-person', '$320', 'None'],
        ['Conversational Spanish I', 'Monday & Wednesday', '7:00\u20138:00 p.m.', 'In-person', '$280', 'None'],
        ['Project Management Basics', 'Saturday', '9:00 a.m.\u201312:00 p.m.', 'Online, live sessions', '$410', 'None'],
        ['Advanced Excel', 'Thursday', '6:00\u20138:00 p.m.', 'In-person', '$295', 'Basic computer skills course or equivalent experience'],
        ['Digital Photography', 'Wednesday', '6:30\u20138:30 p.m.', 'In-person', '$350', 'None, but students must bring their own camera'],
        ['Public Speaking Essentials', 'Tuesday & Thursday', '7:30\u20138:30 p.m.', 'Online, live sessions', '$260', 'None'],
      ],
    },
    applicationMessage: {
      label: 'Text Message',
      from: 'Felix',
      to: 'Dara',
      subject: 'Re: Fall courses',
      body: `Hey Dara,

I went through the course list. Here's what I'm thinking.

Since I work evenings on weekdays, the only course that actually fits my schedule is {{diag-006-q1}}, since it's the one on Saturday morning.

I was also considering Advanced Excel, but it turns out I'd need {{diag-006-q2}} first, which I don't have, so that one's off the table for now.

If I want to take two courses without a scheduling conflict, I could pair Conversational Spanish I with {{diag-006-q3}}, since Spanish only meets Monday and Wednesday evenings and that other course meets Tuesday and Thursday.

For Digital Photography, I'd need to remember to {{diag-006-q4}}, since the course doesn't provide one.

Out of everything listed, the cheapest course is {{diag-006-q5}} at $260.

If I want something fully in-person rather than online, Project Management Basics and Public Speaking Essentials are both out, since {{diag-006-q6}}.

I'm leaning toward Project Management Basics overall, even though it costs {{diag-006-q7}} more than Public Speaking Essentials, just because the topic is more useful for my job right now.

Let me know if you want to sign up for anything together — Conversational Spanish I might be fun to take as a pair, since {{diag-006-q8}}.

Talk soon,
Felix`,
    },
    questions: [
      {
        id: 'diag-006-q1',
        kind: 'blank',
        prompt: 'The only course that fits a weekday-evening worker is ___',
        options: ['Project Management Basics', 'Intro to Bookkeeping', 'Advanced Excel', 'Digital Photography'],
        correctIndex: 0,
        skill: 'matching-information',
        explanation: 'Project Management Basics is the only course held "Saturday," avoiding all weekday evening conflicts.',
      },
      {
        id: 'diag-006-q2',
        kind: 'blank',
        prompt: "For Advanced Excel, Felix would need ___ first",
        options: [
          'a basic computer skills course or equivalent experience',
          'a letter of recommendation',
          'a placement test',
          'approval from the instructor',
        ],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The schedule lists Advanced Excel\u2019s prerequisite as "Basic computer skills course or equivalent experience."',
      },
      {
        id: 'diag-006-q3',
        kind: 'blank',
        prompt: 'Conversational Spanish I could be paired without conflict with ___',
        options: [
          'Public Speaking Essentials',
          'Intro to Bookkeeping',
          'Digital Photography',
          'Advanced Excel',
        ],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'Spanish meets "Monday & Wednesday," while Public Speaking Essentials meets "Tuesday & Thursday" — no overlapping days.',
      },
      {
        id: 'diag-006-q4',
        kind: 'blank',
        prompt: 'For Digital Photography, Felix would need to remember to ___',
        options: ['bring his own camera', 'pay an equipment deposit', 'buy a textbook', 'register two weeks early'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The schedule notes "students must bring their own camera" for Digital Photography.',
      },
      {
        id: 'diag-006-q5',
        kind: 'blank',
        prompt: 'The cheapest course on the list is ___',
        options: ['Public Speaking Essentials', 'Conversational Spanish I', 'Advanced Excel', 'Intro to Bookkeeping'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Public Speaking Essentials is listed at "$260," the lowest fee of all six courses.',
      },
      {
        id: 'diag-006-q6',
        kind: 'blank',
        prompt: 'Project Management Basics and Public Speaking Essentials are both out for fully in-person learning, since ___',
        options: [
          'both are listed as "Online, live sessions"',
          'both require a prerequisite',
          'both are full for the term',
          'both are held on weekends only',
        ],
        correctIndex: 0,
        skill: 'matching-information',
        explanation: 'Both courses are listed under "Format" as "Online, live sessions," not in-person.',
      },
      {
        id: 'diag-006-q7',
        kind: 'blank',
        prompt: 'Project Management Basics costs ___ more than Public Speaking Essentials',
        options: ['$150', '$100', '$200', '$50'],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'Project Management Basics is $410 and Public Speaking Essentials is $260 — a difference of $150.',
      },
      {
        id: 'diag-006-q8',
        kind: 'blank',
        prompt: 'Conversational Spanish I might be fun to take as a pair, since ___',
        options: [
          'it meets twice a week in the evening, a manageable shared commitment',
          'it has no fee at all',
          'it is the only course offered online',
          'it requires a partner to register',
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'A twice-weekly evening course is a reasonable shared commitment for two friends to take together, unlike a Saturday-morning or prerequisite-heavy course.',
      },
    ],
  },

  {
    id: 'diag-007',
    sectionType: 'diagram',
    title: 'Comparing Three Moving Company Quotes',
    difficulty: 'advanced',
    tags: ['moving', 'comparison'],
    context:
      'A family is comparing quotes from three moving companies before their upcoming move across the city. The comparison is shown below, followed by a message applying the details.',
    diagramTitle: 'Moving Company Quote Comparison',
    diagramData: {
      kind: 'comparison',
      categories: ['Swift Movers', 'CityWide Relocation', 'Budget Haulers'],
      rows: [
        { feature: 'Base quote (2-bedroom)', values: ['$680', '$750', '$540'] },
        { feature: 'Includes packing materials', values: ['No, extra $90', 'Yes, included', 'No, extra $60'] },
        { feature: 'Insurance coverage', values: ['Basic coverage included', 'Full coverage included', 'Not offered'] },
        { feature: 'Earliest available date', values: ['This Saturday', 'Two weeks out', 'Tomorrow'] },
        { feature: 'Crew size', values: ['3 movers', '4 movers', '2 movers'] },
        { feature: 'Cancellation policy', values: ['Free up to 48 hrs before', 'Free up to 7 days before', 'Non-refundable deposit required'] },
      ],
    },
    applicationMessage: {
      label: 'Email',
      from: 'Mateo',
      to: 'Sandrine',
      subject: 'Re: Moving company quotes',
      body: `Hi Sandrine,

I compared all three moving quotes like you asked. Here's the breakdown.

Budget Haulers has the lowest base price, but once we add packing materials, it actually comes to {{diag-007-q1}} total instead of the $540 shown.

If something gets damaged during the move, CityWide is the safest choice, since {{diag-007-q2}}, unlike Budget Haulers, which doesn't offer any insurance at all.

Given that our lease ends this Saturday, Budget Haulers is actually the only company that could realistically help us move sooner, since {{diag-007-q3}}.

For a 2-bedroom move, CityWide is sending the biggest crew, with {{diag-007-q4}}, which might mean a faster moving day.

If our plans change and we need to cancel, Swift Movers is more flexible than Budget Haulers, since Swift allows cancelling {{diag-007-q5}}, while Budget Haulers requires {{diag-007-q6}}.

Honestly, even though CityWide is the most expensive base price at $750, once you factor in {{diag-007-q7}}, it might actually be worth the extra cost for peace of mind.

I think our real choice comes down to CityWide for safety and inclusions, or Budget Haulers if {{diag-007-q8}} matters more to us right now than anything else.

Let me know what you think!

Mateo`,
    },
    questions: [
      {
        id: 'diag-007-q1',
        kind: 'blank',
        prompt: 'With packing materials added, Budget Haulers actually comes to ___ total',
        options: ['$600', '$540', '$630', '$570'],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'Budget Haulers\u2019 base is $540 plus an extra $60 for packing materials, totalling $600.',
      },
      {
        id: 'diag-007-q2',
        kind: 'blank',
        prompt: 'CityWide is the safest choice for damage protection, since ___',
        options: [
          'full coverage is included',
          'it has the lowest base price',
          'it offers the earliest available date',
          'it has the smallest crew',
        ],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'The chart lists CityWide\u2019s insurance coverage as "Full coverage included," unlike the other two options.',
      },
      {
        id: 'diag-007-q3',
        kind: 'blank',
        prompt: 'Budget Haulers is the only company that could help them move sooner, since ___',
        options: [
          'its earliest available date is tomorrow',
          'it has the largest crew',
          'it includes packing materials',
          'it offers full insurance',
        ],
        correctIndex: 0,
        skill: 'matching-information',
        explanation: 'Budget Haulers\u2019 earliest available date is "Tomorrow," sooner than Swift Movers (Saturday) or CityWide (two weeks out).',
      },
      {
        id: 'diag-007-q4',
        kind: 'blank',
        prompt: 'CityWide is sending the biggest crew, with ___',
        options: ['4 movers', '3 movers', '2 movers', '5 movers'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists CityWide\u2019s crew size as "4 movers," the largest of the three.',
      },
      {
        id: 'diag-007-q5',
        kind: 'blank',
        prompt: 'Swift Movers allows cancelling ___',
        options: ['free up to 48 hours before', 'free up to 7 days before', 'only with a fee', 'anytime with no notice'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists Swift Movers\u2019 cancellation policy as "Free up to 48 hrs before."',
      },
      {
        id: 'diag-007-q6',
        kind: 'blank',
        prompt: 'Budget Haulers requires ___',
        options: ['a non-refundable deposit', 'no deposit at all', 'a 7-day notice', 'a signed lease copy'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists Budget Haulers\u2019 cancellation policy as "Non-refundable deposit required."',
      },
      {
        id: 'diag-007-q7',
        kind: 'blank',
        prompt: 'Once you factor in ___, CityWide might be worth the extra cost',
        options: [
          'included packing materials and full insurance coverage',
          'its earlier availability',
          'its smaller crew size',
          'its flexible cancellation only',
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'CityWide includes packing materials and full insurance at no extra cost, which can offset its higher base price compared to add-on fees at the other two companies.',
      },
      {
        id: 'diag-007-q8',
        kind: 'blank',
        prompt: 'Budget Haulers becomes the better choice if ___ matters most',
        options: ['moving as soon as possible', 'having insurance coverage', 'a larger moving crew', 'flexible cancellation'],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'Budget Haulers\u2019 standout advantage throughout the message is its earliest availability ("Tomorrow"), making speed the deciding factor in its favour.',
      },
    ],
  },

  {
    id: 'diag-008',
    sectionType: 'diagram',
    title: 'Recreation Centre Membership Tiers',
    difficulty: 'intermediate',
    tags: ['recreation', 'comparison'],
    context:
      'The Oakridge Recreation Centre offers three membership tiers. A resident is deciding which one suits their family, shown below, followed by a message applying the details.',
    diagramTitle: 'Oakridge Recreation Centre — Membership Tiers',
    diagramData: {
      kind: 'comparison',
      categories: ['Basic', 'Plus', 'Family'],
      rows: [
        { feature: 'Monthly price', values: ['$35', '$55', '$89'] },
        { feature: 'Gym and weight room access', values: ['Yes', 'Yes', 'Yes'] },
        { feature: 'Pool access', values: ['No', 'Yes', 'Yes'] },
        { feature: 'Group fitness classes', values: ['Not included', '5 classes/month', 'Unlimited'] },
        { feature: 'Number of people covered', values: ['1 person', '1 person', 'Up to 5 people, same household'] },
        { feature: 'Guest passes', values: ['None', '1 per month', '4 per month'] },
      ],
    },
    applicationMessage: {
      label: 'Text Message',
      from: 'Priya',
      to: 'Devon',
      subject: 'Re: Recreation centre membership',
      body: `Hey Devon,

I looked at the three membership options. Here's my thinking.

Since we have three kids and want everyone covered under one membership, Family is really the only sensible option, since {{diag-008-q1}}.

It also comes with the most guest passes, at {{diag-008-q2}} per month, which would be great for when your sister visits.

I noticed Basic doesn't include {{diag-008-q3}} at all, which matters to us since the kids love swimming lessons.

If we wanted to save money and only one of us used the gym without needing the pool, ___ would be the cheapest option at $35 per month. {{diag-008-q4}}

Plus members get a set number of fitness classes instead of unlimited, specifically {{diag-008-q5}} per month, which probably wouldn't be enough for how often you go.

Even though Family costs the most at $89, when you consider {{diag-008-q6}}, it actually works out to less per person than buying individual Plus memberships for all five of us.

One thing I want to confirm: does pool access apply to {{diag-008-q7}} tiers, or just Family?

I think Family is the clear choice here, mainly because of how many people it {{diag-008-q8}} under one price.

Let me know if you agree!

Priya`,
    },
    questions: [
      {
        id: 'diag-008-q1',
        kind: 'blank',
        prompt: 'Family is the only sensible option, since ___',
        options: [
          'it covers up to 5 people in the same household',
          'it is the cheapest tier',
          'it includes the most guest passes',
          'it is the only tier with gym access',
        ],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'The chart lists Family as covering "Up to 5 people, same household" — the only tier covering more than one person.',
      },
      {
        id: 'diag-008-q2',
        kind: 'blank',
        prompt: 'Family comes with the most guest passes, at ___ per month',
        options: ['4', '1', '5', '2'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists Family\u2019s guest passes as "4 per month," more than Plus (1) or Basic (none).',
      },
      {
        id: 'diag-008-q3',
        kind: 'blank',
        prompt: 'Basic doesn\u2019t include ___ at all',
        options: ['pool access', 'gym access', 'a monthly fee', 'guest passes for visitors'],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'The chart lists Basic\u2019s pool access as "No," unlike Plus and Family, which both include it.',
      },
      {
        id: 'diag-008-q4',
        kind: 'blank',
        prompt: '___ would be the cheapest option at $35 per month for one gym-only user',
        options: ['Basic', 'Plus', 'Family', 'none of them'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Basic is listed at "$35," the lowest monthly price, and includes gym access without pool or class inclusions.',
      },
      {
        id: 'diag-008-q5',
        kind: 'blank',
        prompt: 'Plus members get a set number of classes, specifically ___ per month',
        options: ['5', '4', 'unlimited', '2'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists Plus group fitness classes as "5 classes/month."',
      },
      {
        id: 'diag-008-q6',
        kind: 'blank',
        prompt: 'When you consider ___, Family works out to less per person than five individual Plus memberships',
        options: [
          'it covers 5 people for one combined price',
          'it includes more guest passes than Plus',
          'it is the newest membership tier',
          'it includes a free locker rental',
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'Five separate Plus memberships at $55 each would total $275/month, far more than one $89 Family membership covering the same five people.',
      },
      {
        id: 'diag-008-q7',
        kind: 'blank',
        prompt: 'Pool access applies to ___ tiers',
        options: ['both Plus and Family', 'only Family', 'only Basic', 'all three'],
        correctIndex: 0,
        skill: 'matching-information',
        explanation: 'The chart shows pool access as "Yes" for both Plus and Family, "No" only for Basic.',
      },
      {
        id: 'diag-008-q8',
        kind: 'blank',
        prompt: 'Family is the clear choice mainly because of how many people it ___ under one price',
        options: ['covers', 'excludes', 'restricts', 'charges'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Covers" fits the context of a membership including multiple people under a single plan.',
      },
    ],
  },

  {
    id: 'diag-009',
    sectionType: 'diagram',
    title: 'Flu Shot Clinic Schedule',
    difficulty: 'intermediate',
    tags: ['healthcare', 'scheduling'],
    context:
      'A community health unit has released its fall flu shot clinic schedule across four locations. A resident is checking the schedule below, followed by a message applying the details.',
    diagramTitle: 'Fall Flu Shot Clinic Schedule',
    diagramData: {
      kind: 'schedule',
      items: [
        {
          time: 'Mon & Wed, 9 a.m.\u20134 p.m.',
          activity: 'Riverside Community Centre clinic',
          location: '210 Riverside Dr.',
          notes: 'Walk-ins welcome, no appointment needed',
        },
        {
          time: 'Tue & Thu, 10 a.m.\u20136 p.m.',
          activity: 'Downtown Health Unit clinic',
          location: '88 Centre St.',
          notes: 'Appointment required, book online or by phone',
        },
        {
          time: 'Sat only, 9 a.m.\u201212 p.m.',
          activity: 'Mobile clinic at Fairview Mall',
          location: 'Fairview Mall, north entrance',
          notes: 'Walk-ins welcome; seniors 65+ get priority access for the first hour',
        },
        {
          time: 'Fri, 1 p.m.\u20134 p.m.',
          activity: 'Maple Street School clinic',
          location: 'Maple Street Public School gym',
          notes: 'Open to school families and staff only, not the general public',
        },
      ],
    },
    applicationMessage: {
      label: 'Text Message',
      from: 'Hassan',
      to: 'Wren',
      subject: 'Re: Flu shots this week',
      body: `Hey Wren,

I checked the flu clinic schedule for our family. Here's what I found.

Since neither of us can book ahead this week, our best bet is somewhere that takes walk-ins, which rules out the {{diag-009-q1}} clinic, since it requires booking online or by phone first.

If we go Saturday morning, we could try the {{diag-009-q2}}, though if your mom wants to come too, she'd get priority access in the first hour since she's over 65.

I can't make Saturday work with my shift, so on a weekday, our walk-in options come down to {{diag-009-q3}}, which runs Monday and Wednesday from 9 to 4.

We can't use the Friday school clinic, even though it's convenient timing, because {{diag-009-q4}}.

If we want the latest possible appointment time on a weekday, the {{diag-009-q5}} clinic runs until 6 p.m., later than the Riverside option.

For the mall clinic on Saturday, it only runs until {{diag-009-q6}}, so we'd need to get there before noon.

Given everything, I think Wednesday at Riverside makes the most sense for us, since it's {{diag-009-q7}} and fits both our schedules.

Let's also double check whether the kids need anything beyond the {{diag-009-q8}}, since I know younger kids sometimes need a different dose.

Talk soon,
Hassan`,
    },
    questions: [
      {
        id: 'diag-009-q1',
        kind: 'blank',
        prompt: 'The ___ clinic is ruled out since it requires booking ahead',
        options: ['Downtown Health Unit', 'Riverside Community Centre', 'Fairview Mall', 'Maple Street School'],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'The Downtown Health Unit clinic notes "Appointment required, book online or by phone."',
      },
      {
        id: 'diag-009-q2',
        kind: 'blank',
        prompt: 'On Saturday morning, they could try the ___',
        options: ['mobile clinic at Fairview Mall', 'Downtown Health Unit clinic', 'Riverside Community Centre clinic', 'Maple Street School clinic'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The mobile clinic at Fairview Mall runs "Sat only, 9 a.m.\u201312 p.m."',
      },
      {
        id: 'diag-009-q3',
        kind: 'blank',
        prompt: 'On weekdays, their walk-in option is ___',
        options: ['Riverside Community Centre, Monday and Wednesday', 'Downtown Health Unit, any weekday', 'Maple Street School, any weekday', 'Fairview Mall, any weekday'],
        correctIndex: 0,
        skill: 'matching-information',
        explanation: 'Riverside is the only weekday clinic with no appointment required ("Walk-ins welcome, no appointment needed"), running Monday and Wednesday.',
      },
      {
        id: 'diag-009-q4',
        kind: 'blank',
        prompt: "They can't use the Friday school clinic because ___",
        options: [
          'it is open only to school families and staff, not the general public',
          'it requires an appointment booked weeks in advance',
          'it only offers shots to seniors',
          'it is fully booked already',
        ],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'The notice specifies the Maple Street School clinic is "Open to school families and staff only, not the general public."',
      },
      {
        id: 'diag-009-q5',
        kind: 'blank',
        prompt: 'For the latest weekday appointment time, the ___ clinic runs until 6 p.m.',
        options: ['Downtown Health Unit', 'Riverside Community Centre', 'Maple Street School', 'Fairview Mall'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The Downtown Health Unit clinic runs "10 a.m.\u20136 p.m.," later than Riverside\u2019s 4 p.m. closing.',
      },
      {
        id: 'diag-009-q6',
        kind: 'blank',
        prompt: 'The mall clinic on Saturday only runs until ___',
        options: ['12 p.m.', '4 p.m.', '6 p.m.', '9 p.m.'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The Fairview Mall mobile clinic schedule lists hours as "9 a.m.\u201312 p.m." on Saturday.',
      },
      {
        id: 'diag-009-q7',
        kind: 'blank',
        prompt: 'Wednesday at Riverside makes the most sense since it\u2019s ___',
        options: ['walk-in only and fits both schedules', 'the only clinic open to seniors', 'the cheapest clinic option', 'the closest to their workplace'],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'Throughout the message, the deciding factors are walk-in availability and matching both their schedules, which Riverside\u2019s Wednesday slot satisfies.',
      },
      {
        id: 'diag-009-q8',
        kind: 'blank',
        prompt: 'They should check whether the kids need anything beyond the ___',
        options: ['standard flu shot', 'appointment confirmation', 'priority access pass', 'school registration form'],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'Hassan is asking about dosing for "younger kids," implying a question about whether children need something different from the standard flu shot given to adults.',
      },
    ],
  },

  {
    id: 'diag-010',
    sectionType: 'diagram',
    title: 'Comparing Three Mobile Phone Plans',
    difficulty: 'advanced',
    tags: ['mobile phones', 'comparison'],
    context:
      'Three mobile carriers are running fall promotions. A customer is comparing plans before switching providers, shown below, followed by a message applying the details.',
    diagramTitle: 'Mobile Plan Comparison',
    diagramData: {
      kind: 'comparison',
      categories: ['NorthLink Mobile', 'ConnectPlus', 'ValueWireless'],
      rows: [
        { feature: 'Monthly price', values: ['$55', '$65', '$40'] },
        { feature: 'Data allowance', values: ['25 GB', 'Unlimited', '10 GB'] },
        { feature: 'Overage charge', values: ['$10 per extra GB', 'None, unlimited', '$15 per extra GB'] },
        { feature: 'Contract length', values: ['No contract', '2-year contract', 'No contract'] },
        { feature: 'Includes a new phone discount', values: ['No', 'Yes, up to $200 off', 'No'] },
        { feature: 'Network coverage in rural areas', values: ['Good', 'Excellent', 'Limited'] },
      ],
    },
    applicationMessage: {
      label: 'Text Message',
      from: 'Olamide',
      to: 'Bea',
      subject: 'Re: New phone plan',
      body: `Hey Bea,

I compared the three carriers like you suggested. Here's the summary.

Since I use a lot of data for work, ConnectPlus is appealing because it's the only one offering {{diag-010-q1}}, so I'd never worry about overage charges.

The catch is ConnectPlus also locks you into {{diag-010-q2}}, which feels risky if we move again next year.

If I just want the cheapest monthly bill and don't mind less data, ValueWireless is the obvious pick at only {{diag-010-q3}} per month.

But ValueWireless's rural coverage is listed as {{diag-010-q4}}, which worries me a bit since your parents' place out near the lake barely gets signal as it is.

NorthLink seems like a reasonable middle ground, with {{diag-010-q5}} of data and no contract, so I'm not stuck if I want to switch again later.

If I go over my data limit on NorthLink, it would cost {{diag-010-q6}} for each extra gigabyte, compared to ValueWireless's steeper overage fee.

One more thing — only ConnectPlus offers {{diag-010-q7}}, which would help offset that higher monthly price if I actually need a new phone soon.

I think I'm leaning toward NorthLink overall, mainly because of the balance between {{diag-010-q8}}.

What do you think?

Olamide`,
    },
    questions: [
      {
        id: 'diag-010-q1',
        kind: 'blank',
        prompt: 'ConnectPlus is appealing because it offers ___',
        options: ['unlimited data', 'the lowest monthly price', 'no contract required', 'rural coverage discounts'],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'The chart lists ConnectPlus\u2019 data allowance as "Unlimited," the only plan without a fixed data cap.',
      },
      {
        id: 'diag-010-q2',
        kind: 'blank',
        prompt: 'ConnectPlus also locks customers into ___',
        options: ['a 2-year contract', 'a 1-year contract', 'no contract at all', 'a monthly auto-renewal only'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists ConnectPlus\u2019 contract length as "2-year contract," unlike the other two providers.',
      },
      {
        id: 'diag-010-q3',
        kind: 'blank',
        prompt: 'ValueWireless costs only ___ per month',
        options: ['$40', '$55', '$65', '$45'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists ValueWireless\u2019 monthly price as "$40," the lowest of the three.',
      },
      {
        id: 'diag-010-q4',
        kind: 'blank',
        prompt: "ValueWireless's rural coverage is listed as ___",
        options: ['Limited', 'Excellent', 'Good', 'Not available'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists ValueWireless\u2019 rural coverage as "Limited," the weakest of the three.',
      },
      {
        id: 'diag-010-q5',
        kind: 'blank',
        prompt: 'NorthLink offers ___ of data with no contract',
        options: ['25 GB', '10 GB', 'unlimited', '15 GB'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists NorthLink\u2019s data allowance as "25 GB."',
      },
      {
        id: 'diag-010-q6',
        kind: 'blank',
        prompt: 'Going over the limit on NorthLink would cost ___ per extra gigabyte',
        options: ['$10', '$15', '$5', '$20'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists NorthLink\u2019s overage charge as "$10 per extra GB," cheaper than ValueWireless\u2019s $15.',
      },
      {
        id: 'diag-010-q7',
        kind: 'blank',
        prompt: 'Only ConnectPlus offers ___',
        options: ['a new phone discount up to $200 off', 'unlimited rural coverage', 'a money-back guarantee', 'free roaming'],
        correctIndex: 0,
        skill: 'matching-information',
        explanation: 'The chart shows ConnectPlus as the only plan including "Yes, up to $200 off" for a new phone discount.',
      },
      {
        id: 'diag-010-q8',
        kind: 'blank',
        prompt: 'Olamide is leaning toward NorthLink mainly because of the balance between ___',
        options: ['reasonable data, no contract, and price', 'unlimited data and rural coverage', 'lowest price and free phone discount', 'contract flexibility and overage charges only'],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'Throughout the message, NorthLink is framed as a "reasonable middle ground" balancing data amount, contract freedom, and price, rather than maximizing any single factor.',
      },
    ],
  },

{
    id: 'diag-011',
    sectionType: 'diagram',
    title: 'Comparing Three Dog Walking Services',
    difficulty: 'intermediate',
    tags: ['pets', 'comparison'],
    context:
      'A dog owner returning to the office is comparing three local dog walking services before booking regular visits, shown below, followed by a message applying the details.',
    diagramTitle: 'Dog Walking Service Comparison',
    diagramData: {
      kind: 'comparison',
      categories: ['PawPals', 'Tail Trotters', 'Neighbourhood Walks'],
      rows: [
        { feature: 'Price per 30-min walk', values: ['$22', '$18', '$25'] },
        { feature: 'GPS tracking of walk', values: ['Yes', 'No', 'Yes'] },
        { feature: 'Same walker every time', values: ['Not guaranteed', 'Guaranteed', 'Guaranteed'] },
        { feature: 'Weekend availability', values: ['Yes', 'No', 'Yes'] },
        { feature: 'Minimum commitment', values: ['No minimum', '3 walks/week minimum', 'No minimum'] },
        { feature: 'Insurance and bonding', values: ['Yes', 'Yes', 'No'] },
      ],
    },
    applicationMessage: {
      label: 'Text Message',
      from: 'Priscilla',
      to: 'Noor',
      subject: 'Re: Dog walker decision',
      body: `Hey Noor,

I compared the three dog walking services you sent. Here's where I landed.

Since I want to see exactly where Bo goes on his walks, PawPals and Neighbourhood Walks are the only two offering {{diag-011-q1}}, so Tail Trotters is out for me on that point alone.

I really want the same walker each time for consistency, but PawPals doesn't guarantee that, since {{diag-011-q2}}.

Between the remaining two, Neighbourhood Walks costs {{diag-011-q3}} more per walk than PawPals, which adds up over a month.

One thing that worries me about Neighbourhood Walks is {{diag-011-q4}}, since I'd want to know the company is covered if anything ever went wrong during a walk.

Tail Trotters has the lowest price at $18, but it requires {{diag-011-q5}}, which feels like a bigger commitment than I want right now since my schedule changes a lot.

If Bo needs a walk on a Saturday, my only options are {{diag-011-q6}}, since Tail Trotters isn't available then.

Given all this, I think PawPals makes the most sense overall, mainly because of the GPS tracking and the fact that there's {{diag-011-q7}} required.

I'll book a trial walk with them this week and see how Bo does with whoever {{diag-011-q8}} shows up, since it's not always the same person there.

Talk soon,
Priscilla`,
    },
    questions: [
      {
        id: 'diag-011-q1',
        kind: 'blank',
        prompt: 'PawPals and Neighbourhood Walks are the only two offering ___',
        options: ['GPS tracking of the walk', 'weekend availability', 'insurance and bonding', 'a guaranteed same walker'],
        correctIndex: 0,
        skill: 'matching-information',
        explanation: 'The chart shows GPS tracking as "Yes" for PawPals and Neighbourhood Walks, "No" for Tail Trotters.',
      },
      {
        id: 'diag-011-q2',
        kind: 'blank',
        prompt: "PawPals doesn't guarantee the same walker, since ___",
        options: ['it\u2019s listed as "Not guaranteed" in their comparison', 'they only have one walker on staff', 'walkers rotate weekly by policy', 'it depends on a minimum commitment'],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'The chart lists PawPals\u2019 same-walker guarantee as "Not guaranteed," unlike the other two services.',
      },
      {
        id: 'diag-011-q3',
        kind: 'blank',
        prompt: 'Neighbourhood Walks costs ___ more per walk than PawPals',
        options: ['$3', '$7', '$5', '$2'],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'Neighbourhood Walks is $25 and PawPals is $22 — a $3 difference.',
      },
      {
        id: 'diag-011-q4',
        kind: 'blank',
        prompt: 'Priscilla is worried about Neighbourhood Walks because ___',
        options: [
          'it does not offer insurance and bonding',
          'it does not guarantee the same walker',
          'it is not available on weekends',
          'it has a minimum commitment'
        ],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'The chart lists Neighbourhood Walks\u2019 insurance and bonding as "No," unlike the other two services.',
      },
      {
        id: 'diag-011-q5',
        kind: 'blank',
        prompt: 'Tail Trotters requires ___',
        options: ['a 3 walks/week minimum commitment', 'no minimum commitment', 'weekend-only bookings', 'a yearly contract'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists Tail Trotters\u2019 minimum commitment as "3 walks/week minimum."',
      },
      {
        id: 'diag-011-q6',
        kind: 'blank',
        prompt: 'For a Saturday walk, the only options are ___',
        options: ['PawPals and Neighbourhood Walks', 'Tail Trotters only', 'PawPals only', 'none of the three'],
        correctIndex: 0,
        skill: 'matching-information',
        explanation: 'The chart shows weekend availability as "Yes" for PawPals and Neighbourhood Walks, "No" for Tail Trotters.',
      },
      {
        id: 'diag-011-q7',
        kind: 'blank',
        prompt: "PawPals makes sense overall because there's ___ required",
        options: ['no minimum commitment', 'a long-term contract', 'an upfront deposit', 'a same-walker guarantee'],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'PawPals\u2019 minimum commitment is listed as "No minimum," matching Priscilla\u2019s preference for flexibility.',
      },
      {
        id: 'diag-011-q8',
        kind: 'blank',
        prompt: "Bo will be walked by whoever ___ shows up, since it's not always the same person",
        options: ['happens to', 'never', 'rarely', 'secretly'],
        correctIndex: 0,
        skill: 'grammar-completion',
        explanation: '"Happens to" fits the casual, unpredictable nature of which walker is assigned, matching the "Not guaranteed" detail from the chart.',
      },
    ],
  },

  {
    id: 'diag-012',
    sectionType: 'diagram',
    title: 'Comparing Three Wedding Venues',
    difficulty: 'advanced',
    tags: ['events', 'comparison'],
    context:
      'A couple is comparing three wedding venues before booking their reception, shown below, followed by a message applying the details.',
    diagramTitle: 'Wedding Venue Comparison',
    diagramData: {
      kind: 'comparison',
      categories: ['Maplewood Hall', 'The Lakeside Pavilion', 'Birchgate Manor'],
      rows: [
        { feature: 'Guest capacity', values: ['120', '80', '200'] },
        { feature: 'Rental fee (Saturday)', values: ['$3,200', '$2,400', '$4,500'] },
        { feature: 'Catering', values: ['Must use in-house caterer', 'Outside catering allowed', 'Must use in-house caterer'] },
        { feature: 'Outdoor ceremony space', values: ['Yes, included', 'Yes, included', 'Yes, extra $600'] },
        { feature: 'Alcohol service', values: ['Licensed bar included', 'Bring your own, with permit', 'Licensed bar included'] },
        { feature: 'Booking lead time required', values: ['6 months', '3 months', '12 months'] },
      ],
    },
    applicationMessage: {
      label: 'Email',
      from: 'Imani',
      to: 'Devon',
      subject: 'Re: Venue comparison',
      body: `Hi Devon,

I went through the three venue options. Here's my thinking.

Since we're expecting around 150 guests, Birchgate Manor is really the only option that fits, because {{diag-012-q1}}.

The downside is Birchgate also requires the longest lead time, at {{diag-012-q2}}, so we'd need to book very soon if we go with it.

For catering, Birchgate and Maplewood both require {{diag-012-q3}}, so if we want to bring in our own caterer, only the Lakeside Pavilion would allow that.

Outdoor ceremony space is included at no extra cost at both Maplewood and Lakeside, while Birchgate charges {{diag-012-q4}} for it.

If we want alcohol service without dealing with permits ourselves, {{diag-012-q5}} both include a licensed bar already.

Comparing just the rental fee, Lakeside is the cheapest at {{diag-012-q6}}, but its guest capacity of {{diag-012-q7}} wouldn't work for our guest list.

Given everything, I think Birchgate is really our only realistic option here, mainly because of {{diag-012-q8}} — even though it means moving fast on the booking.

Let me know if you agree!

Imani`,
    },
    questions: [
      {
        id: 'diag-012-q1',
        kind: 'blank',
        prompt: 'Birchgate Manor is the only option that fits 150 guests, because ___',
        options: [
          'it has a guest capacity of 200',
          'it is the cheapest option',
          'it includes outdoor ceremony space',
          'it requires the shortest lead time'
        ],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'The chart lists Birchgate Manor\u2019s guest capacity as "200," the only venue large enough for 150 guests (Maplewood is 120, Lakeside is 80).',
      },
      {
        id: 'diag-012-q2',
        kind: 'blank',
        prompt: 'Birchgate requires the longest lead time, at ___',
        options: ['12 months', '6 months', '3 months', '9 months'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists Birchgate Manor\u2019s booking lead time as "12 months."',
      },
      {
        id: 'diag-012-q3',
        kind: 'blank',
        prompt: 'Birchgate and Maplewood both require ___',
        options: ['using their in-house caterer', 'outside catering only', 'a $600 catering fee', 'a licensed bartender'],
        correctIndex: 0,
        skill: 'matching-information',
        explanation: 'The chart lists both Birchgate Manor and Maplewood Hall as "Must use in-house caterer," unlike Lakeside Pavilion.',
      },
      {
        id: 'diag-012-q4',
        kind: 'blank',
        prompt: 'Birchgate charges ___ for outdoor ceremony space',
        options: ['an extra $600', 'an extra $300', 'nothing extra', 'an extra $1,000'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists Birchgate Manor\u2019s outdoor ceremony space as "Yes, extra $600."',
      },
      {
        id: 'diag-012-q5',
        kind: 'blank',
        prompt: 'For alcohol without dealing with permits, ___ both include a licensed bar already',
        options: ['Maplewood and Birchgate', 'Lakeside and Birchgate', 'Maplewood and Lakeside', 'all three venues'],
        correctIndex: 0,
        skill: 'matching-information',
        explanation: 'The chart lists "Licensed bar included" for both Maplewood Hall and Birchgate Manor, while Lakeside Pavilion requires bringing your own with a permit.',
      },
      {
        id: 'diag-012-q6',
        kind: 'blank',
        prompt: 'Lakeside is the cheapest option, at ___',
        options: ['$2,400', '$3,200', '$4,500', '$2,800'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists Lakeside Pavilion\u2019s rental fee as "$2,400," the lowest of the three.',
      },
      {
        id: 'diag-012-q7',
        kind: 'blank',
        prompt: "Lakeside's guest capacity of ___ wouldn't work for their guest list",
        options: ['80', '120', '150', '200'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists Lakeside Pavilion\u2019s guest capacity as "80," far below the needed 150.',
      },
      {
        id: 'diag-012-q8',
        kind: 'blank',
        prompt: 'Birchgate is really their only realistic option, mainly because of ___',
        options: ['its capacity being large enough for their guest list', 'its low rental fee', 'its short booking lead time', 'its outdoor ceremony space being included'],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'Throughout the message, the deciding factor is capacity — Birchgate is the only venue that can fit their 150 guests, despite its other tradeoffs.',
      },
    ],
  },

  {
    id: 'diag-013',
    sectionType: 'diagram',
    title: 'Comparing Three Fitness Studio Memberships',
    difficulty: 'intermediate',
    tags: ['fitness', 'comparison'],
    context:
      'A resident is comparing three fitness studios near their home before signing up, shown below, followed by a message applying the details.',
    diagramTitle: 'Fitness Studio Comparison',
    diagramData: {
      kind: 'comparison',
      categories: ['CoreFit Studio', 'PulseHouse Gym', 'Zenith Fitness'],
      rows: [
        { feature: 'Monthly price', values: ['$65', '$45', '$80'] },
        { feature: 'Classes included', values: ['Yoga, Pilates, spin', 'Weight room access only, no classes', 'All classes plus 2 personal training sessions/month'] },
        { feature: 'Contract length', values: ['Month-to-month', '12-month contract', 'Month-to-month'] },
        { feature: 'Childcare during classes', values: ['Not available', 'Not available', 'Available, included'] },
        { feature: 'Cancellation notice', values: ['14 days', 'Locked in for 12 months', '30 days'] },
        { feature: 'Free trial', values: ['1 free class', 'No free trial', '1 free week'] },
      ],
    },
    applicationMessage: {
      label: 'Text Message',
      from: 'Benedict',
      to: 'Wendy',
      subject: 'Re: Gym decision',
      body: `Hey Wendy,

I looked over the three gym options. Here's my thinking.

Since I want to bring our daughter sometimes, Zenith Fitness is really the only option that works, since {{diag-013-q1}}.

I do want to flag that Zenith costs {{diag-013-q2}} more per month than CoreFit, so it's a bigger investment.

PulseHouse is the cheapest at $45, but it locks you into {{diag-013-q3}}, which feels risky if we end up not loving it.

One nice thing about Zenith is it includes {{diag-013-q4}} in addition to classes, which would normally cost extra elsewhere.

If we want to try before committing, CoreFit offers {{diag-013-q5}}, while Zenith offers an even longer trial of {{diag-013-q6}}.

I noticed PulseHouse doesn't actually include any classes at all, just {{diag-013-q7}}, which isn't really what we're looking for anyway.

Given the childcare option and the trial week, I think Zenith makes the most sense for us, even though {{diag-013-q8}} compared to the other two.

Let me know what you think!

Benedict`,
    },
    questions: [
      {
        id: 'diag-013-q1',
        kind: 'blank',
        prompt: 'Zenith Fitness is the only option that works since ___',
        options: [
          'it offers childcare during classes',
          'it is the cheapest option',
          'it requires a 12-month contract',
          'it offers a free trial class'
        ],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'The chart lists childcare as "Available, included" only for Zenith Fitness, "Not available" for the other two.',
      },
      {
        id: 'diag-013-q2',
        kind: 'blank',
        prompt: 'Zenith costs ___ more per month than CoreFit',
        options: ['$15', '$35', '$10', '$20'],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'Zenith is $80 and CoreFit is $65 — a $15 difference.',
      },
      {
        id: 'diag-013-q3',
        kind: 'blank',
        prompt: 'PulseHouse locks you into ___',
        options: ['a 12-month contract', 'a month-to-month plan', 'a 6-month contract', 'no contract at all'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists PulseHouse Gym\u2019s contract length as "12-month contract."',
      },
      {
        id: 'diag-013-q4',
        kind: 'blank',
        prompt: 'Zenith includes ___ in addition to classes',
        options: ['2 personal training sessions per month', 'unlimited personal training', 'a free gym bag', 'a nutritionist consultation'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists Zenith Fitness as including "All classes plus 2 personal training sessions/month."',
      },
      {
        id: 'diag-013-q5',
        kind: 'blank',
        prompt: 'CoreFit offers ___ to try before committing',
        options: ['1 free class', '1 free week', 'no free trial', '3 free classes'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists CoreFit Studio\u2019s free trial as "1 free class."',
      },
      {
        id: 'diag-013-q6',
        kind: 'blank',
        prompt: 'Zenith offers an even longer trial of ___',
        options: ['1 free week', '1 free class', '2 free weeks', 'no free trial'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists Zenith Fitness\u2019 free trial as "1 free week," longer than CoreFit\u2019s single class.',
      },
      {
        id: 'diag-013-q7',
        kind: 'blank',
        prompt: 'PulseHouse only includes ___',
        options: ['weight room access', 'unlimited classes', 'personal training', 'childcare'],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'The chart lists PulseHouse Gym\u2019s classes as "Weight room access only, no classes."',
      },
      {
        id: 'diag-013-q8',
        kind: 'blank',
        prompt: 'Zenith makes the most sense even though ___ compared to the other two',
        options: ['it is the most expensive', 'it has the shortest trial', 'it requires the longest contract', 'it has no cancellation policy'],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'Zenith is $80/month, higher than CoreFit ($65) and PulseHouse ($45), making it the most expensive of the three despite its other advantages.',
      },
    ],
  },

  {
    id: 'diag-014',
    sectionType: 'diagram',
    title: 'Comparing Three Home Internet Providers',
    difficulty: 'advanced',
    tags: ['utilities', 'comparison'],
    context:
      'A new homeowner is comparing three internet providers before choosing service, shown below, followed by a message applying the details.',
    diagramTitle: 'Home Internet Provider Comparison',
    diagramData: {
      kind: 'comparison',
      categories: ['SwiftNet', 'CableLink', 'FiberHome'],
      rows: [
        { feature: 'Monthly price', values: ['$70', '$55', '$85'] },
        { feature: 'Download speed', values: ['300 Mbps', '150 Mbps', '1 Gbps'] },
        { feature: 'Installation fee', values: ['Free', '$99', 'Free'] },
        { feature: 'Contract required', values: ['No contract', '2-year contract', 'No contract'] },
        { feature: 'Equipment rental', values: ['$10/month', 'Included', '$15/month'] },
        { feature: 'Available in new builds', values: ['Yes', 'Yes', 'Not yet available'] },
      ],
    },
    applicationMessage: {
      label: 'Text Message',
      from: 'Tomasz',
      to: 'Ingrid',
      subject: 'Re: Internet provider decision',
      body: `Hey Ingrid,

I called all three internet providers about our new place. Here's the situation.

Unfortunately, FiberHome isn't an option for us at all right now, since {{diag-014-q1}}, and we're in a newer build.

Between the other two, SwiftNet offers a much faster download speed of {{diag-014-q2}}, compared to CableLink's 150 Mbps.

CableLink does include {{diag-014-q3}} in the price, while SwiftNet charges $10/month extra for that.

The big catch with CableLink is it requires {{diag-014-q4}}, which feels risky if we want to switch again later.

CableLink does also charge an installation fee of {{diag-014-q5}}, while SwiftNet's installation is free.

Looking at total monthly cost including equipment, SwiftNet comes to {{diag-014-q6}} once you add the rental fee, compared to CableLink's flat $55.

Given the no-contract flexibility and faster speed, I think SwiftNet is worth the extra cost, mainly because {{diag-014-q7}}.

Once FiberHome becomes available in our area, we should probably switch though, since {{diag-014-q8}} would beat anything the other two offer.

Let me know what you think!

Tomasz`,
    },
    questions: [
      {
        id: 'diag-014-q1',
        kind: 'blank',
        prompt: "FiberHome isn't an option since ___",
        options: [
          'it is not yet available in new builds',
          'it has no contract option',
          'it charges an installation fee',
          'its speed is too slow'
        ],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'The chart lists FiberHome\u2019s availability in new builds as "Not yet available."',
      },
      {
        id: 'diag-014-q2',
        kind: 'blank',
        prompt: 'SwiftNet offers a download speed of ___',
        options: ['300 Mbps', '150 Mbps', '1 Gbps', '500 Mbps'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists SwiftNet\u2019s download speed as "300 Mbps."',
      },
      {
        id: 'diag-014-q3',
        kind: 'blank',
        prompt: 'CableLink includes ___ in the price',
        options: ['equipment rental', 'free installation', 'a faster speed tier', 'no contract'],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'The chart lists CableLink\u2019s equipment rental as "Included," unlike SwiftNet\u2019s $10/month charge.',
      },
      {
        id: 'diag-014-q4',
        kind: 'blank',
        prompt: 'The big catch with CableLink is it requires ___',
        options: ['a 2-year contract', 'a higher monthly price', 'an extra installation fee', 'a slower speed than advertised'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists CableLink\u2019s contract requirement as "2-year contract."',
      },
      {
        id: 'diag-014-q5',
        kind: 'blank',
        prompt: 'CableLink charges an installation fee of ___',
        options: ['$99', '$70', 'free', '$50'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists CableLink\u2019s installation fee as "$99."',
      },
      {
        id: 'diag-014-q6',
        kind: 'blank',
        prompt: 'SwiftNet comes to ___ once you add the equipment rental fee',
        options: ['$80', '$70', '$90', '$75'],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'SwiftNet\u2019s $70 monthly price plus $10/month equipment rental totals $80.',
      },
      {
        id: 'diag-014-q7',
        kind: 'blank',
        prompt: 'SwiftNet is worth the extra cost, mainly because ___',
        options: [
          'it offers faster speed with no contract commitment',
          'it is the absolute cheapest option',
          'it includes free equipment rental',
          'it has the longest contract term'
        ],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'Tomasz\u2019s reasoning highlights both the "much faster download speed" and "no-contract flexibility" as SwiftNet\u2019s key advantages.',
      },
      {
        id: 'diag-014-q8',
        kind: 'blank',
        prompt: 'FiberHome would beat the others because of ___',
        options: ['its 1 Gbps download speed', 'its lower monthly price', 'its included equipment', 'its shorter contract'],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'The chart lists FiberHome\u2019s download speed as "1 Gbps," far exceeding SwiftNet\u2019s 300 Mbps and CableLink\u2019s 150 Mbps.',
      },
    ],
  },

  {
    id: 'diag-015',
    sectionType: 'diagram',
    title: 'City Recycling and Waste Collection Schedule',
    difficulty: 'intermediate',
    tags: ['city services', 'scheduling'],
    context:
      'The city has released its updated waste collection schedule for a residential neighbourhood. A resident is checking what goes out when, shown below, followed by a message applying the details.',
    diagramTitle: 'Waste Collection Schedule',
    diagramData: {
      kind: 'schedule',
      items: [
        {
          time: 'Every Monday',
          activity: 'Regular garbage collection',
          location: 'Curbside, bins out by 7 a.m.',
          notes: 'Maximum 2 bags or 1 bin per household per week',
        },
        {
          time: 'Every other Monday (odd weeks)',
          activity: 'Recycling collection (blue bin)',
          location: 'Curbside, same time as garbage',
          notes: 'Check the city app for which weeks are odd or even',
        },
        {
          time: 'Every other Monday (even weeks)',
          activity: 'Organics/green bin collection',
          location: 'Curbside, same time as garbage',
          notes: 'Food scraps and yard waste only, no plastic bags',
        },
        {
          time: 'First Saturday of each month',
          activity: 'Bulk item pickup',
          location: 'Curbside, must register online by Thursday',
          notes: 'Limit 3 large items per household, no construction debris accepted',
        },
      ],
    },
    applicationMessage: {
      label: 'Text Message',
      from: 'Saanvi',
      to: 'Kwame',
      subject: 'Re: Garbage day confusion',
      body: `Hey Kwame,

I finally figured out our garbage schedule for the new place, so here's the breakdown.

Regular garbage goes out every Monday, but we're limited to {{diag-015-q1}} per week, so we'll need to be careful not to overflow.

Recycling and organics actually alternate, meaning recycling only goes out {{diag-015-q2}}, not every single week like I assumed.

To figure out which week is which, the notice says we should {{diag-015-q3}}, since it's not obvious just from the calendar.

For organics, I noticed we can't use {{diag-015-q4}} to bag the food scraps, which means we'll need to get some compostable bags instead.

If we want to get rid of that old couch, we'd need bulk pickup, which only happens {{diag-015-q5}}.

For bulk pickup, we also need to {{diag-015-q6}} by Thursday beforehand, so we can't just leave it out last minute.

There's also a limit of {{diag-015-q7}} large items per household for bulk pickup, so we can't get rid of everything at once if we have more than that.

One more thing — bulk pickup explicitly doesn't accept {{diag-015-q8}}, so if we ever do any renovations, we'd need to arrange separate disposal for that.

Hope that clears things up!
Saanvi`,
    },
    questions: [
      {
        id: 'diag-015-q1',
        kind: 'blank',
        prompt: "We're limited to ___ per week for regular garbage",
        options: ['2 bags or 1 bin', '1 bag only', 'unlimited bags', '3 bags or 2 bins'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The schedule notes "maximum 2 bags or 1 bin per household per week" for regular garbage.',
      },
      {
        id: 'diag-015-q2',
        kind: 'blank',
        prompt: 'Recycling only goes out ___',
        options: ['every other Monday, on odd weeks', 'every Monday', 'once a month', 'only on Saturdays'],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'Recycling collection is listed as "every other Monday (odd weeks)," not weekly.',
      },
      {
        id: 'diag-015-q3',
        kind: 'blank',
        prompt: 'To figure out which week is which, they should ___',
        options: ['check the city app', 'call city hall', 'ask a neighbour', 'check the recycling bin colour'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The notice states to "check the city app for which weeks are odd or even."',
      },
      {
        id: 'diag-015-q4',
        kind: 'blank',
        prompt: "For organics, we can't use ___ to bag the food scraps",
        options: ['plastic bags', 'paper bags', 'compostable bags', 'any container'],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'The schedule notes organics should include "food scraps and yard waste only, no plastic bags."',
      },
      {
        id: 'diag-015-q5',
        kind: 'blank',
        prompt: 'Bulk pickup only happens ___',
        options: ['the first Saturday of each month', 'every Saturday', 'every other Monday', 'twice a year'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Bulk item pickup is scheduled for "first Saturday of each month."',
      },
      {
        id: 'diag-015-q6',
        kind: 'blank',
        prompt: 'For bulk pickup, they also need to ___ by Thursday beforehand',
        options: ['register online', 'pay a fee', 'call the city', 'label the items'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Bulk pickup notes state residents "must register online by Thursday."',
      },
      {
        id: 'diag-015-q7',
        kind: 'blank',
        prompt: 'There is a limit of ___ large items per household for bulk pickup',
        options: ['3', '5', '2', '10'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The notes state "limit 3 large items per household" for bulk pickup.',
      },
      {
        id: 'diag-015-q8',
        kind: 'blank',
        prompt: "Bulk pickup explicitly doesn't accept ___",
        options: ['construction debris', 'furniture', 'electronics', 'appliances'],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'The notes state "no construction debris accepted" for bulk item pickup.',
      },
    ],
  },

  {
    id: 'diag-016',
    sectionType: 'diagram',
    title: 'Comparing Three Car Insurance Quotes',
    difficulty: 'advanced',
    tags: ['insurance', 'comparison'],
    context:
      'A driver is comparing three car insurance quotes before renewing their policy, shown below, followed by a message applying the details.',
    diagramTitle: 'Car Insurance Quote Comparison',
    diagramData: {
      kind: 'comparison',
      categories: ['Guardian Auto', 'Northbridge Insurance', 'ValueShield'],
      rows: [
        { feature: 'Annual premium', values: ['$1,450', '$1,680', '$1,180'] },
        { feature: 'Deductible', values: ['$500', '$300', '$1,000'] },
        { feature: 'Roadside assistance', values: ['Included', 'Included', 'Extra $60/year'] },
        { feature: 'Accident forgiveness', values: ['After 5 years claim-free', 'Included from day one', 'Not offered'] },
        { feature: 'Winter tire discount', values: ['5% off premium', '5% off premium', 'No discount offered'] },
        { feature: 'Claims processing time', values: ['Average 10 business days', 'Average 5 business days', 'Average 15 business days'] },
      ],
    },
    applicationMessage: {
      label: 'Email',
      from: 'Hugo',
      to: 'Dana',
      subject: 'Re: Insurance renewal comparison',
      body: `Hi Dana,

I got all three insurance quotes back. Here's what I'm seeing.

ValueShield has the lowest annual premium at {{diag-016-q1}}, but the deductible is also the highest of the three at {{diag-016-q2}}.

Northbridge has the lowest deductible at {{diag-016-q3}}, which means we'd pay less out of pocket if we ever needed to file a claim.

One thing I really like about Northbridge is accident forgiveness is {{diag-016-q4}}, unlike Guardian Auto, which only kicks in {{diag-016-q5}}.

Since we already have winter tires, Guardian and Northbridge both offer {{diag-016-q6}}, while ValueShield doesn't offer any discount for that at all.

If we ever need roadside assistance, ValueShield would cost us an extra {{diag-016-q7}} per year for that, since it's not included like with the other two.

Looking at claims speed, Northbridge processes claims fastest, averaging {{diag-016-q8}}, compared to Guardian's 10 days and ValueShield's 15.

Given all of this, even though Northbridge isn't the cheapest, I think it might be worth the extra cost for the faster claims and immediate accident forgiveness.

What do you think?

Hugo`,
    },
    questions: [
      {
        id: 'diag-016-q1',
        kind: 'blank',
        prompt: "ValueShield has the lowest annual premium at ___",
        options: ['$1,180', '$1,450', '$1,680', '$1,300'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists ValueShield\u2019s annual premium as "$1,180," the lowest of the three.',
      },
      {
        id: 'diag-016-q2',
        kind: 'blank',
        prompt: "ValueShield's deductible is the highest at ___",
        options: ['$1,000', '$500', '$300', '$700'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists ValueShield\u2019s deductible as "$1,000," the highest of the three.',
      },
      {
        id: 'diag-016-q3',
        kind: 'blank',
        prompt: 'Northbridge has the lowest deductible at ___',
        options: ['$300', '$500', '$1,000', '$400'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists Northbridge Insurance\u2019s deductible as "$300," the lowest of the three.',
      },
      {
        id: 'diag-016-q4',
        kind: 'blank',
        prompt: 'Accident forgiveness with Northbridge is ___',
        options: ['included from day one', 'available after 5 years', 'not offered at all', 'available for an extra fee'],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'The chart lists Northbridge Insurance\u2019s accident forgiveness as "Included from day one."',
      },
      {
        id: 'diag-016-q5',
        kind: 'blank',
        prompt: "Guardian Auto's accident forgiveness only kicks in ___",
        options: ['after 5 years claim-free', 'after 1 year', 'immediately', 'never'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists Guardian Auto\u2019s accident forgiveness as "After 5 years claim-free."',
      },
      {
        id: 'diag-016-q6',
        kind: 'blank',
        prompt: 'Guardian and Northbridge both offer ___',
        options: ['a 5% winter tire discount', 'free roadside assistance only', 'a lower deductible', 'faster claims processing'],
        correctIndex: 0,
        skill: 'matching-information',
        explanation: 'The chart lists "5% off premium" for winter tires at both Guardian Auto and Northbridge Insurance, unlike ValueShield.',
      },
      {
        id: 'diag-016-q7',
        kind: 'blank',
        prompt: 'Roadside assistance with ValueShield would cost an extra ___ per year',
        options: ['$60', '$40', '$100', '$80'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists ValueShield\u2019s roadside assistance as "Extra $60/year."',
      },
      {
        id: 'diag-016-q8',
        kind: 'blank',
        prompt: 'Northbridge processes claims fastest, averaging ___',
        options: ['5 business days', '10 business days', '15 business days', '7 business days'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists Northbridge Insurance\u2019s claims processing time as "Average 5 business days."',
      },
    ],
  },

  {
    id: 'diag-017',
    sectionType: 'diagram',
    title: 'Comparing Three Summer Camp Programs',
    difficulty: 'intermediate',
    tags: ['children', 'comparison'],
    context:
      'A parent is comparing three summer day camp programs for their child before registering, shown below, followed by a message applying the details.',
    diagramTitle: 'Summer Camp Program Comparison',
    diagramData: {
      kind: 'comparison',
      categories: ['Camp Birchwood', 'Adventure Trails Camp', 'Lakeshore Day Camp'],
      rows: [
        { feature: 'Weekly fee', values: ['$220', '$310', '$180'] },
        { feature: 'Age range', values: ['6\u201312 years', '9\u201314 years', '5\u201310 years'] },
        { feature: 'Hours', values: ['9 a.m.\u20134 p.m.', '8 a.m.\u20135 p.m.', '9 a.m.\u20133 p.m.'] },
        { feature: 'Swimming included', values: ['Yes, daily', 'Yes, twice a week', 'No'] },
        { feature: 'Before/after care', values: ['Available, extra $40/week', 'Included in fee', 'Not available'] },
        { feature: 'Registration deadline', values: ['2 weeks before start', '1 month before start', '1 week before start'] },
      ],
    },
    applicationMessage: {
      label: 'Text Message',
      from: 'Rosalind',
      to: 'Partner Ezra',
      subject: 'Re: Summer camp pick',
      body: `Hey Ezra,

I compared the three camps for our 8-year-old. Here's what I found.

Since Adventure Trails starts at age 9, that one's actually not an option for us, since {{diag-017-q1}}.

Between the remaining two, Camp Birchwood includes {{diag-017-q2}}, while Lakeshore doesn't offer any swimming at all.

If we need before or after care because of our work schedules, Camp Birchwood offers that for {{diag-017-q3}}, while Lakeshore doesn't offer it at all.

Lakeshore is the cheapest option at {{diag-017-q4}} per week, but the hours only run until {{diag-017-q5}}, which is earlier than Camp Birchwood.

One thing to watch is Lakeshore's registration deadline is just {{diag-017-q6}}, the shortest of the three, so we'd need to decide quickly if we go with them.

Comparing total weekly cost, Camp Birchwood with before/after care would come to {{diag-017-q7}}, still less than Adventure Trails even though that one's not an option anyway.

Given the swimming and before/after care, I think Camp Birchwood makes the most sense for us, even with {{diag-017-q8}} compared to Lakeshore.

Let me know what you think!

Rosalind`,
    },
    questions: [
      {
        id: 'diag-017-q1',
        kind: 'blank',
        prompt: "Adventure Trails isn't an option since ___",
        options: [
          'its age range starts at 9, and our child is 8',
          'it is too expensive',
          'it has no swimming included',
          'its hours are too short'
        ],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'The chart lists Adventure Trails Camp\u2019s age range as "9\u201314 years," excluding an 8-year-old.',
      },
      {
        id: 'diag-017-q2',
        kind: 'blank',
        prompt: 'Camp Birchwood includes ___',
        options: ['daily swimming', 'swimming twice a week', 'no swimming', 'swimming once a month'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists Camp Birchwood\u2019s swimming as "Yes, daily."',
      },
      {
        id: 'diag-017-q3',
        kind: 'blank',
        prompt: 'Camp Birchwood offers before/after care for ___',
        options: ['an extra $40/week', 'no extra charge', 'an extra $80/week', 'an extra $20/week'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists Camp Birchwood\u2019s before/after care as "Available, extra $40/week."',
      },
      {
        id: 'diag-017-q4',
        kind: 'blank',
        prompt: 'Lakeshore is the cheapest option at ___ per week',
        options: ['$180', '$220', '$310', '$200'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists Lakeshore Day Camp\u2019s weekly fee as "$180," the lowest of the three.',
      },
      {
        id: 'diag-017-q5',
        kind: 'blank',
        prompt: "Lakeshore's hours only run until ___",
        options: ['3 p.m.', '4 p.m.', '5 p.m.', '2 p.m.'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists Lakeshore Day Camp\u2019s hours as "9 a.m.\u20133 p.m.," ending earlier than Camp Birchwood.',
      },
      {
        id: 'diag-017-q6',
        kind: 'blank',
        prompt: "Lakeshore's registration deadline is just ___",
        options: ['1 week before start', '2 weeks before start', '1 month before start', '3 days before start'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists Lakeshore Day Camp\u2019s registration deadline as "1 week before start," the shortest of the three.',
      },
      {
        id: 'diag-017-q7',
        kind: 'blank',
        prompt: 'Camp Birchwood with before/after care would total ___ per week',
        options: ['$260', '$220', '$310', '$300'],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'Camp Birchwood\u2019s $220 base fee plus the $40/week before/after care add-on totals $260.',
      },
      {
        id: 'diag-017-q8',
        kind: 'blank',
        prompt: 'Camp Birchwood makes sense even with ___ compared to Lakeshore',
        options: ['a higher weekly cost', 'a shorter age range', 'fewer swimming days', 'a shorter registration window'],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'Camp Birchwood\u2019s base fee ($220, or $260 with care) is higher than Lakeshore\u2019s $180, the tradeoff for swimming and care being available.',
      },
    ],
  },

  {
    id: 'diag-018',
    sectionType: 'diagram',
    title: 'Comparing Three Meal Kit Delivery Services',
    difficulty: 'intermediate',
    tags: ['food', 'comparison'],
    context:
      'A busy professional is comparing three meal kit delivery services before subscribing, shown below, followed by a message applying the details.',
    diagramTitle: 'Meal Kit Delivery Comparison',
    diagramData: {
      kind: 'comparison',
      categories: ['FreshBox', 'ChefCrate', 'QuickPlate'],
      rows: [
        { feature: 'Price per serving', values: ['$11.99', '$9.49', '$13.99'] },
        { feature: 'Minimum order', values: ['2 recipes, 2 servings', '3 recipes, 4 servings', '2 recipes, 1 serving'] },
        { feature: 'Average prep time', values: ['35\u201345 minutes', '20\u201330 minutes', '10\u201315 minutes'] },
        { feature: 'Dietary options', values: ['Vegetarian and standard', 'Vegetarian, vegan, and standard', 'Standard only'] },
        { feature: 'Delivery days available', values: ['Tue, Thu, Sat', 'Mon, Wed, Fri, Sun', 'Daily'] },
        { feature: 'Cancel anytime', values: ['Yes', 'Yes, with 1-week notice', 'Yes'] },
      ],
    },
    applicationMessage: {
      label: 'Text Message',
      from: 'Phuong',
      to: 'Roommate Caleb',
      subject: 'Re: Meal kit decision',
      body: `Hey Caleb,

I looked into the three meal kit services. Here's where I landed.

Since you're vegan now, ChefCrate is really our only option, because {{diag-018-q1}}.

The good news is ChefCrate is also the cheapest per serving, at {{diag-018-q2}}, compared to the other two.

One thing to know is ChefCrate has a bigger minimum order than the others, requiring {{diag-018-q3}}, so we'd be committing to more food each week.

If we ever want to cancel, ChefCrate requires {{diag-018-q4}}, unlike FreshBox and QuickPlate, which both allow cancelling immediately.

For delivery timing, ChefCrate delivers on {{diag-018-q5}}, which is more flexible than FreshBox's Tuesday, Thursday, Saturday only schedule.

QuickPlate has the fastest prep time at just {{diag-018-q6}}, but since it only offers standard meals with {{diag-018-q7}}, it wouldn't work for your diet anyway.

Given everything, I think ChefCrate is the clear choice for us, mainly because of {{diag-018-q8}} alongside the lower price.

Let me know if you agree!

Phuong`,
    },
    questions: [
      {
        id: 'diag-018-q1',
        kind: 'blank',
        prompt: 'ChefCrate is the only option since ___',
        options: [
          'it offers vegan meal options',
          'it has the fastest prep time',
          'it delivers every day',
          'it has the lowest minimum order'
        ],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'The chart lists ChefCrate\u2019s dietary options as "Vegetarian, vegan, and standard," the only service offering vegan meals.',
      },
      {
        id: 'diag-018-q2',
        kind: 'blank',
        prompt: 'ChefCrate is the cheapest per serving, at ___',
        options: ['$9.49', '$11.99', '$13.99', '$10.99'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists ChefCrate\u2019s price per serving as "$9.49," the lowest of the three.',
      },
      {
        id: 'diag-018-q3',
        kind: 'blank',
        prompt: 'ChefCrate requires a minimum order of ___',
        options: ['3 recipes, 4 servings', '2 recipes, 2 servings', '2 recipes, 1 serving', '4 recipes, 4 servings'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists ChefCrate\u2019s minimum order as "3 recipes, 4 servings," the largest of the three.',
      },
      {
        id: 'diag-018-q4',
        kind: 'blank',
        prompt: 'To cancel, ChefCrate requires ___',
        options: ['1-week notice', 'no notice at all', '1-month notice', 'a cancellation fee'],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'The chart lists ChefCrate\u2019s cancellation policy as "Yes, with 1-week notice."',
      },
      {
        id: 'diag-018-q5',
        kind: 'blank',
        prompt: 'ChefCrate delivers on ___',
        options: ['Monday, Wednesday, Friday, and Sunday', 'Tuesday, Thursday, and Saturday', 'every day of the week', 'weekends only'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists ChefCrate\u2019s delivery days as "Mon, Wed, Fri, Sun."',
      },
      {
        id: 'diag-018-q6',
        kind: 'blank',
        prompt: 'QuickPlate has the fastest prep time at just ___',
        options: ['10\u201315 minutes', '20\u201330 minutes', '35\u201345 minutes', '5\u201310 minutes'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists QuickPlate\u2019s average prep time as "10\u201315 minutes," the fastest of the three.',
      },
      {
        id: 'diag-018-q7',
        kind: 'blank',
        prompt: 'QuickPlate only offers standard meals with ___',
        options: ['no vegetarian or vegan options', 'a vegan option only', 'a vegetarian option only', 'gluten-free options'],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'The chart lists QuickPlate\u2019s dietary options as "Standard only," with no vegetarian or vegan choices.',
      },
      {
        id: 'diag-018-q8',
        kind: 'blank',
        prompt: 'ChefCrate is the clear choice mainly because of ___',
        options: ['its vegan dietary options', 'its fast prep time', 'its flexible cancellation', 'its daily delivery'],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'Since Caleb is vegan, ChefCrate\u2019s vegan option is the deciding factor throughout the message, alongside its lower price.',
      },
    ],
  },

  {
    id: 'diag-019',
    sectionType: 'diagram',
    title: 'Public Pool Swim Lesson Schedule',
    difficulty: 'intermediate',
    tags: ['recreation', 'children', 'scheduling'],
    context:
      'The city pool has released its fall swim lesson schedule across age groups and levels. A parent is reviewing the options below, followed by a message applying the details.',
    diagramTitle: 'Fall Swim Lesson Schedule',
    diagramData: {
      kind: 'table',
      headers: ['Class', 'Day', 'Time', 'Age/Level', 'Fee (8 weeks)'],
      rows: [
        ['Parent & Tot', 'Saturday', '9:00\u20139:30 a.m.', '6 months\u20133 years, with parent', '$95'],
        ['Preschool Swim 1', 'Tuesday', '5:00\u20135:30 p.m.', '3\u20135 years, beginner', '$110'],
        ['Swimmer 1', 'Wednesday', '6:00\u20136:30 p.m.', '5\u20138 years, beginner', '$110'],
        ['Swimmer 3', 'Wednesday', '6:30\u20137:15 p.m.', '5\u20138 years, intermediate', '$125'],
        ['Junior Lifesaving', 'Saturday', '11:00 a.m.\u201312:00 p.m.', '11\u201314 years, advanced', '$150'],
        ['Adult Beginner', 'Sunday', '4:00\u20134:45 p.m.', '18+ years, beginner', '$130'],
      ],
    },
    applicationMessage: {
      label: 'Text Message',
      from: 'Tatiana',
      to: 'Partner Joaquin',
      subject: 'Re: Swim lesson sign-up',
      body: `Hey Joaquin,

I went through the swim lesson schedule for the kids. Here's the plan.

For our 4-year-old, the right level is {{diag-019-q1}}, since that's the class specifically listed for ages 3 to 5 at the beginner level.

For our 7-year-old, since she already knows the basics, {{diag-019-q2}} would actually be more appropriate than the beginner Swimmer 1 class.

Both of those Wednesday classes happen to be back-to-back, with Swimmer 1 ending right as {{diag-019-q3}} begins, which is convenient for us.

If we wanted to bring the baby to a parent-and-tot class too, that one only runs {{diag-019-q4}}, which doesn't conflict with anything else.

I noticed Junior Lifesaving costs the most at {{diag-019-q5}}, but our kids aren't old enough for that yet anyway, since it's for ages {{diag-019-q6}}.

If you ever wanted to take adult beginner lessons yourself, that one runs {{diag-019-q7}}, separate from all the kids' classes.

Total for both kids' classes would come to {{diag-019-q8}} for the 8-week session combined.

Let me know if this all sounds right before I register everyone!

Tatiana`,
    },
    questions: [
      {
        id: 'diag-019-q1',
        kind: 'blank',
        prompt: 'For a 4-year-old, the right class is ___',
        options: ['Preschool Swim 1', 'Swimmer 1', 'Parent & Tot', 'Swimmer 3'],
        correctIndex: 0,
        skill: 'matching-information',
        explanation: 'Preschool Swim 1 is listed for "3\u20135 years, beginner," matching a 4-year-old.',
      },
      {
        id: 'diag-019-q2',
        kind: 'blank',
        prompt: 'For the 7-year-old who knows the basics, ___ would be more appropriate',
        options: ['Swimmer 3', 'Swimmer 1', 'Parent & Tot', 'Junior Lifesaving'],
        correctIndex: 0,
        skill: 'inference',
        explanation: 'Swimmer 3 is listed for "5\u20138 years, intermediate," matching a child who already knows the basics, unlike Swimmer 1\u2019s beginner level.',
      },
      {
        id: 'diag-019-q3',
        kind: 'blank',
        prompt: 'Swimmer 1 ends right as ___ begins',
        options: ['Swimmer 3', 'Preschool Swim 1', 'Junior Lifesaving', 'Adult Beginner'],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'Swimmer 1 runs "6:00\u20136:30 p.m." and Swimmer 3 runs "6:30\u20137:15 p.m." on the same day, back-to-back.',
      },
      {
        id: 'diag-019-q4',
        kind: 'blank',
        prompt: 'Parent & Tot only runs ___',
        options: ['Saturday mornings', 'Tuesday evenings', 'Wednesday evenings', 'Sunday afternoons'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'Parent & Tot is scheduled for "Saturday, 9:00\u20139:30 a.m."',
      },
      {
        id: 'diag-019-q5',
        kind: 'blank',
        prompt: 'Junior Lifesaving costs the most at ___',
        options: ['$150', '$130', '$125', '$110'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The schedule lists Junior Lifesaving\u2019s fee as "$150," the highest of the six classes.',
      },
      {
        id: 'diag-019-q6',
        kind: 'blank',
        prompt: 'Junior Lifesaving is for ages ___',
        options: ['11\u201314 years', '5\u20138 years', '3\u20135 years', '15\u201318 years'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The schedule lists Junior Lifesaving\u2019s age/level as "11\u201314 years, advanced."',
      },
      {
        id: 'diag-019-q7',
        kind: 'blank',
        prompt: 'Adult Beginner lessons run ___',
        options: ['Sunday afternoons', 'Saturday mornings', 'Tuesday evenings', 'Wednesday evenings'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The schedule lists Adult Beginner as "Sunday, 4:00\u20134:45 p.m."',
      },
      {
        id: 'diag-019-q8',
        kind: 'blank',
        prompt: "Total for both kids' classes would come to ___",
        options: ['$235', '$220', '$250', '$210'],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'Preschool Swim 1 ($110) plus Swimmer 3 ($125) totals $235 for the two children\u2019s classes combined.',
      },
    ],
  },

  {
    id: 'diag-020',
    sectionType: 'diagram',
    title: 'Comparing Three Moving Truck Rental Options',
    difficulty: 'intermediate',
    tags: ['moving', 'comparison'],
    context:
      'A resident planning a DIY move is comparing three truck rental companies, shown below, followed by a message applying the details.',
    diagramTitle: 'Moving Truck Rental Comparison',
    diagramData: {
      kind: 'comparison',
      categories: ['HaulIt Rentals', 'CityVan Co.', 'BudgetTruck'],
      rows: [
        { feature: 'Daily rate (16ft truck)', values: ['$89', '$110', '$69'] },
        { feature: 'Mileage included', values: ['100 km/day', 'Unlimited', '75 km/day'] },
        { feature: 'Extra mileage charge', values: ['$0.45/km over', 'N/A', '$0.55/km over'] },
        { feature: 'Furniture dolly included', values: ['No, extra $15', 'Yes, included', 'No, extra $10'] },
        { feature: 'Fuel policy', values: ['Return full', 'Return full', 'Prepaid fuel option available'] },
        { feature: 'One-way rentals allowed', values: ['No, round trip only', 'Yes', 'No, round trip only'] },
      ],
    },
    applicationMessage: {
      label: 'Text Message',
      from: 'Declan',
      to: 'Partner Naledi',
      subject: 'Re: Truck rental pick',
      body: `Hey Naledi,

I compared the three truck rental options for our move. Here's what I found.

Since we're moving to a different city and won't be driving the truck back, CityVan Co. is really our only option, because {{diag-020-q1}}.

The good news is CityVan also includes {{diag-020-q2}} mileage, so we don't need to worry about per-kilometre charges adding up on a long-distance move.

CityVan also includes the furniture dolly for free, while HaulIt charges {{diag-020-q3}} extra for one and BudgetTruck charges {{diag-020-q4}}.

If we were just doing a local move instead, BudgetTruck would have the lowest daily rate at {{diag-020-q5}}, but its mileage allowance is also the smallest at just {{diag-020-q6}} per day.

For fuel, most companies want the tank returned full, but BudgetTruck offers {{diag-020-q7}} as an alternative if we don't want to deal with finding a gas station right before drop-off.

Given that we need a one-way rental for this move, CityVan is really the only realistic choice, even though it costs {{diag-020-q8}} more per day than HaulIt.

Let me know if this all makes sense!

Declan`,
    },
    questions: [
      {
        id: 'diag-020-q1',
        kind: 'blank',
        prompt: 'CityVan Co. is really their only option, because ___',
        options: [
          'it allows one-way rentals',
          'it has the lowest daily rate',
          'it includes the most mileage',
          'it offers a prepaid fuel option'
        ],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'The chart lists CityVan Co.\u2019s one-way rentals as "Yes," while the other two only allow "round trip only."',
      },
      {
        id: 'diag-020-q2',
        kind: 'blank',
        prompt: 'CityVan includes ___ mileage',
        options: ['unlimited', '100 km/day', '75 km/day', '150 km/day'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists CityVan Co.\u2019s mileage included as "Unlimited."',
      },
      {
        id: 'diag-020-q3',
        kind: 'blank',
        prompt: 'HaulIt charges ___ extra for a furniture dolly',
        options: ['$15', '$10', '$20', '$25'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists HaulIt Rentals\u2019 furniture dolly as "No, extra $15."',
      },
      {
        id: 'diag-020-q4',
        kind: 'blank',
        prompt: 'BudgetTruck charges ___ extra for a furniture dolly',
        options: ['$10', '$15', '$20', 'nothing'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists BudgetTruck\u2019s furniture dolly as "No, extra $10."',
      },
      {
        id: 'diag-020-q5',
        kind: 'blank',
        prompt: 'BudgetTruck has the lowest daily rate at ___',
        options: ['$69', '$89', '$110', '$79'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists BudgetTruck\u2019s daily rate as "$69," the lowest of the three.',
      },
      {
        id: 'diag-020-q6',
        kind: 'blank',
        prompt: "BudgetTruck's mileage allowance is the smallest at just ___ per day",
        options: ['75 km', '100 km', 'unlimited', '50 km'],
        correctIndex: 0,
        skill: 'detail-scanning',
        explanation: 'The chart lists BudgetTruck\u2019s mileage included as "75 km/day," the lowest of the three.',
      },
      {
        id: 'diag-020-q7',
        kind: 'blank',
        prompt: 'BudgetTruck offers ___ as a fuel alternative',
        options: ['a prepaid fuel option', 'free fuel for the whole trip', 'a fuel reimbursement', 'no fuel policy at all'],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'The chart lists BudgetTruck\u2019s fuel policy as including "Prepaid fuel option available," unlike the other two.',
      },
      {
        id: 'diag-020-q8',
        kind: 'blank',
        prompt: 'CityVan costs ___ more per day than HaulIt',
        options: ['$21', '$41', '$15', '$30'],
        correctIndex: 0,
        skill: 'diagram-interpretation',
        explanation: 'CityVan is $110/day and HaulIt is $89/day — a $21 difference.',
      },
    ],
  },
];
