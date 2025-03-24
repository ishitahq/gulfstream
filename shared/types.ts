export interface Feature {
    title: string;
    description: string;
    icon: string;
    meta?: string;
  }
  
  export interface AircraftSpec {
    value: string;
    unit: string;
    label: string;
  }
  
  export interface BlueprintHotspot {
    id: string;
    x: number;
    y: number;
    title: string;
    description: string;
    type: 'aerodynamics' | 'innovation' | 'comfort';
  }
  
  export interface Testimonial {
    quote: string;
    author: string;
    position: string;
  }
  
  export interface HeroBackground {
    url: string;
    alt: string;
  }
  
  export interface ContactMethod {
    title: string;
    icon: string;
    info: string;
    link?: string;
  }
  