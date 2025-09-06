import type { CountyInfo, CityInfo } from './geo';

export const makeCountyTitle = (countyName: string) => `Christmas Light Installation in ${countyName}, GA | Lit Noel`;
export const makeCountyDesc = (countyName: string) =>
  `Professional Christmas light installation in ${countyName}. Design, install, in‑season maintenance, and takedown. Free quote.`;

export const makeCityTitle = (cityName: string) => `Christmas Light Installation in ${cityName}, GA | Lit Noel`;
export const makeCityDesc = (cityName: string, countyName: string) =>
  `Holiday lighting in ${cityName}, ${countyName}. Custom design, professional installation, in‑season maintenance, and post‑season removal.`;

export const countyIntro = (countyName: string) =>
  `We provide turnkey Christmas light installation throughout ${countyName}. Our team handles everything—custom design, safe installation, timers, in‑season maintenance, and post‑season takedown—so you simply enjoy a beautifully lit property.`;

export const cityIntro = (cityName: string) =>
  `Bring holiday cheer to ${cityName} with professional Christmas lights. We handle design, installation, timers, maintenance, and takedown using durable, energy‑efficient LEDs.`;

// 150–300 word local copy generators
export const countyLocalCopy = (county: CountyInfo): string => {
  const citySamples = county.cities.slice(0, 4).map((c) => c.name).join(', ');
  return [
    `We provide turnkey Christmas light installation throughout ${county.name}. From balanced roofline outlines and peak accents to wreaths and selective tree wraps, our team designs a clean, cohesive display that suits your property and budget. We install durable, commercial‑grade LED lighting with tidy cable routing, outdoor‑rated clips, and timers so your lights run automatically through the season. In‑season maintenance is included—if anything shifts or goes out, just call and we’ll make it right.`,
    `Common areas we serve in ${county.short} include ${citySamples} and surrounding neighborhoods. Homeowners choose us for a safe, professional alternative to ladder work and trial‑and‑error DIY installs. Businesses appreciate reliable scheduling, neat job sites, and consistent branding across entrances, rooflines, and landscape features. After the holidays, we return for careful takedown and site cleanup.`,
    `If you’re in ${county.name} and want a straightforward process—design, install, maintenance, and takedown handled start to finish—give us a call. We’ll discuss your goals, review your property, and provide a clear, itemized quote for a display that looks great all season.`
  ].join('\n\n');
};

export const cityLocalCopy = (city: CityInfo, county: CountyInfo): string => {
  return [
    `We install professional Christmas lights for homes and businesses across ${city.name} in ${county.short}. Our process is simple: we review your property, recommend a clean, balanced design, and install commercial‑grade LEDs with timers so your lights come on each evening without hassle. Cables are secured neatly, roof and ladder work is handled safely, and your site is left clean.`,
    `During the season, if a strand fades or a section shifts, call us and we’ll take care of it—typical response time is 24–48 hours. After the holidays, we return for careful takedown and cleanup. Many customers in ${city.name} prefer a classic warm‑white roofline with peak accents, while storefronts and community spaces often add wreaths or select tree wraps for visibility.`,
    `If you’re comparing options in ${city.name}, choose the straightforward route: professional design, durable materials, reliable maintenance, and post‑season removal handled end‑to‑end. Call to discuss your goals and get a clear, itemized quote for your property.`
  ].join('\n\n');
};


