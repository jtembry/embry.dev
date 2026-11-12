// The 3D shop's products. Each gets a card on /shop and its own page at /shop/<slug>
// (src/pages/shop/[slug].astro), whose photo is the link preview when the URL is shared.
// Stripe Payment Links (live account) and the Cal.com scan booking. Prices are the bands in the vault note
// "Embry Development LLC"; change them there first. Floorplans are invoiced on delivery, so they have no Stripe link.
export const products = [
  {
    slug: 'fidget',
    more: [['/prints/2026-11-05-fidget-batch-40.jpg', 'A box of 40 finished fidgets, ready to ship']],
    title: 'Traffic Light Fidget',
    image: '/prints/2026-11-05-fidget-set.jpg',
    alt: 'A finished fidget: red, yellow, and green keys on a black base',
    text: 'Three keys on a printed base, each on a real clicky keyboard switch. Pick a color for each key and for the base. One unit is three keys and a base.',
    prices: ['5 to 39 units: $10 each', '40 to 99: $8 each', '100 or more: $7 each · 250 or more: $6 each (email for these)'],
    buttons: [
      ['Order 5 to 39 · $10 each', 'https://buy.stripe.com/eVq14mh2Y2dUb8Sc1Z7Vm01'],
      ['Order 40 or more · $8 each', 'https://buy.stripe.com/4gM8wOaEA9Gmgtcfeb7Vm00'],
    ],
  },
  {
    slug: 'business-cards',
    title: 'Printed business cards',
    image: '/prints/2026-10-24-embry-cards-plate1-embry-cards.jpg',
    alt: 'A plate of two-color printed business cards',
    text: 'A business card printed in two colors of PLA, with your name and details on the face. Every order includes the design and a proof card, so you see one before the run.',
    prices: ['10 cards: $55', '25 cards: $87.50', '50 cards: $125', 'Each price includes the $25 design and proof. Reorders skip it: email for a reorder or more than 50.'],
    buttons: [
      ['10 cards · $55', 'https://buy.stripe.com/9B6aEWfYU5q6gtcd637Vm02'],
      ['25 cards · $87.50', 'https://buy.stripe.com/28E00i4gc2dU2Cmd637Vm03'],
      ['50 cards · $125', 'https://buy.stripe.com/4gMfZg9AwaKqgtcc1Z7Vm04'],
    ],
  },
  {
    slug: '3d-floorplan',
    title: '3D floorplan of your house',
    from: 'From $99',
    image: '/shop/3d-floorplan.jpg',
    alt: 'A printed 3D floorplan: green walls standing on a yellow floor, every room in place',
    text: 'I come to the house and scan every room with LiDAR, which takes about an hour. Then I print the floorplan with the walls standing, in two colors. A gift for a new homeowner, a piece for a listing, or a model of the job for a contractor.',
    prices: ['Small, about 5 in across: $99', 'Medium, about 7 in (shown): $129', 'Large, about 9.5 in: $179', 'The scan and modeling are included. Louisville metro included; $0.70 a mile past that. Invoiced on delivery.',
      'Realtor packs, any mix of sizes: 5 floorplans for $549, 10 for $999. Paid up front, used within 12 months.', 'Another print of a house I have already scanned, such as the same model in a subdivision: $49.', 'Homes over 3,500 sq ft add $40.'],
    buttons: [['Book a scan', 'https://cal.com/joel-embry/floorplan-scan'], ['Ask about a realtor pack', 'mailto:joel@embry.dev?subject=Realtor%20floorplan%20pack']],
  },
];

