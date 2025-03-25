import { AircraftSpec, BlueprintHotspot, Feature, Testimonial, ContactMethod } from '../../../shared/types';

export const SITE_NAME = 'Gulfstream Aerospace';
export const SITE_TAGLINE = 'Redefining Private Aviation';

export const NAV_ITEMS = [
  { label: 'FLEET', href: '#fleet' },
  { label: 'OWNERSHIP', href: '#ownership' },
  { label: 'INNOVATION', href: '#innovation' },
  { label: 'SERVICES', href: '#services' },
  { label: 'ABOUT', href: '#about' }
];

export const AIRCRAFT_SPECS: AircraftSpec[] = [
  { value: '8,000', unit: 'NM', label: 'Maximum Range' },
  { value: '0.925', unit: 'MACH', label: 'Maximum Speed' },
  { value: '4', unit: 'ZONES', label: 'Cabin Living Areas' },
  { value: '16', unit: 'SEATS', label: 'Passenger Capacity' }
];

export const BLUEPRINT_HOTSPOTS: BlueprintHotspot[] = [
  {
    id: 'wing-design',
    x: 30,
    y: 40,
    title: 'Wing Design',
    description: 'Advanced swept wing architecture reduces drag by 8% over previous models, allowing for greater range and fuel efficiency.',
    type: 'aerodynamics'
  },
  {
    id: 'engines',
    x: 60,
    y: 20,
    title: 'Pratt & Whitney PW800 Engines',
    description: 'Latest generation engines deliver 10% better fuel consumption while reducing noise footprint by 50% compared to previous generation.',
    type: 'innovation'
  },
  {
    id: 'flight-deck',
    x: 65,
    y: 50,
    title: 'Symmetry Flight Deck',
    description: 'Revolutionary avionics suite with 10 touch-screen displays and active control sidesticks providing pilots with unprecedented situational awareness.',
    type: 'innovation'
  },
  {
    id: 'cabin',
    x: 80,
    y: 45,
    title: 'Cabin Experience',
    description: 'Industry-leading cabin altitude of 2,900 feet at 41,000 feet creates a more comfortable, less fatiguing travel experience with 100% fresh air replenished every 2 minutes.',
    type: 'comfort'
  }
];

export const AI_FEATURES: Feature[] = [
  {
    title: 'Intelligent Recognition',
    description: "Our advanced biometric system recognizes passengers upon entry, automatically adjusting cabin settings to each individual's preferences - from lighting and temperature to seat position and entertainment options.",
    icon: 'user',
    meta: 'Enhanced Privacy Protection'
  },
  {
    title: 'Quantum Security',
    description: 'Our next-generation security system employs quantum encryption for communications and continuous threat assessment, utilizing AI algorithms to proactively identify potential security concerns before they develop.',
    icon: 'shield-check',
    meta: 'Military-Grade Protection'
  },
  {
    title: 'Predictive Intelligence',
    description: 'Our aircraft continuously monitors thousands of data points to predict maintenance needs before they arise, ensuring optimal performance and eliminating unexpected downtime through real-time analysis and forward-looking diagnostics.',
    icon: 'lightbulb',
    meta: '99.8% Operational Readiness'
  }
];

export const INTERIOR_FEATURES: Feature[] = [
  {
    title: 'Handcrafted Excellence',
    description: 'Every detail of the interior is meticulously handcrafted by skilled artisans using the finest materials, from hand-stitched leather to custom wood veneers.',
    icon: 'hand-metal'
  },
  {
    title: 'Whisper-Quiet Cabin',
    description: 'Advanced sound suppression technology creates the quietest cabin in the industry, allowing for effortless conversation or peaceful rest during your journey.',
    icon: 'volume-x'
  },
  {
    title: 'Circadian Lighting',
    description: 'Dynamic lighting system mimics natural daylight cycles, helping reduce jet lag while enhancing the spacious feel of the cabin environment.',
    icon: 'sun-moon'
  }
];

export const CABIN_HIGHLIGHTS = [
  {
    value: '14',
    label: 'Panoramic Windows',
    description: 'Largest in the industry, flooding the cabin with natural light'
  },
  {
    value: '4',
    label: 'Living Zones',
    description: 'Fully customizable spaces for dining, work, entertainment and rest'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "The G800 has completely transformed our global operations. The range allows us to connect any two points without stopping, while the cabin technology ensures our team arrives refreshed and productive.",
    author: "Robert C.",
    position: "CEO, Global Ventures Inc."
  },
  {
    quote: "After experiencing the G800, I can't imagine flying in anything else. The attention to detail, from the cabin atmosphere to the predictive AI systems, creates an unparalleled travel experience.",
    author: "Elena M.",
    position: "Principal, Quantum Holdings"
  },
  {
    quote: "The security features alone make the G800 worth the investment. The biometric systems and encryption protocols give us peace of mind when traveling with sensitive information.",
    author: "James T.",
    position: "Director of Operations, Meridian Group"
  },
  {
    quote: "As someone who flies over 300 hours annually, the G800's cabin environment has noticeably reduced travel fatigue. The air quality, sound suppression, and lighting design make all the difference.",
    author: "Sophia K.",
    position: "International Art Dealer"
  }
];

export const CONTACT_METHODS: ContactMethod[] = [
  {
    title: "Contact Sales",
    icon: "phone",
    info: "+1 (800) 123-4567",
    link: "tel:+18001234567"
  },
  {
    title: "Email Us",
    icon: "mail",
    info: "sales@gulfstream.com",
    link: "mailto:sales@gulfstream.com"
  },
  {
    title: "Visit Us",
    icon: "map-pin",
    info: "500 Gulfstream Road\nSavannah, GA 31408"
  }
];

export const FOOTER_LINKS = {
  company: [
    { label: "About", href: "#about" },
    { label: "Careers", href: "#careers" },
    { label: "News", href: "#news" },
    { label: "Innovation", href: "#innovation" },
    { label: "Sustainability", href: "#sustainability" }
  ],
  products: [
    { label: "G800", href: "#g800" },
    { label: "G700", href: "#g700" },
    { label: "G650ER", href: "#g650er" },
    { label: "G600", href: "#g600" },
    { label: "G500", href: "#g500" }
  ],
  services: [
    { label: "Ownership", href: "#ownership" },
    { label: "Maintenance", href: "#maintenance" },
    { label: "Training", href: "#training" },
    { label: "Customer Support", href: "#support" },
    { label: "Parts & Materials", href: "#parts" }
  ],
  legal: [
    { label: "Terms & Conditions", href: "#terms" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Cookie Policy", href: "#cookies" },
    { label: "Accessibility", href: "#accessibility" }
  ]
};
