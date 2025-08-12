export interface CityInfo {
  name: string;
  slugCity: string; // e.g., marietta
}

export interface CountyInfo {
  name: string; // e.g., Cobb County
  short: string; // e.g., Cobb
  slugCounty: string; // e.g., cobb
  cities: CityInfo[];
}

export const counties: CountyInfo[] = [
  {
    name: 'Cobb County',
    short: 'Cobb',
    slugCounty: 'cobb',
    cities: [
      { name: 'Marietta', slugCity: 'marietta' },
      { name: 'Smyrna', slugCity: 'smyrna' },
      { name: 'Kennesaw', slugCity: 'kennesaw' },
      { name: 'Mableton', slugCity: 'mableton' },
      { name: 'Austell', slugCity: 'austell' },
      { name: 'Powder Springs', slugCity: 'powder-springs' },
      { name: 'Vinings', slugCity: 'vinings' }
    ]
  },
  {
    name: 'Paulding County',
    short: 'Paulding',
    slugCounty: 'paulding',
    cities: [
      { name: 'Dallas', slugCity: 'dallas' },
      { name: 'Hiram', slugCity: 'hiram' }
    ]
  },
  {
    name: 'Douglas County',
    short: 'Douglas',
    slugCounty: 'douglas',
    cities: [
      { name: 'Douglasville', slugCity: 'douglasville' },
      { name: 'Lithia Springs', slugCity: 'lithia-springs' }
    ]
  },
  {
    name: 'Carroll County',
    short: 'Carroll',
    slugCounty: 'carroll',
    cities: [
      { name: 'Carrollton', slugCity: 'carrollton' },
      { name: 'Villa Rica', slugCity: 'villa-rica' }
    ]
  }
];

export const getCountyBySlug = (slugCounty: string): CountyInfo | undefined =>
  counties.find((c) => c.slugCounty === slugCounty);

export const getCityBySlug = (slugCity: string): { county: CountyInfo; city: CityInfo } | undefined => {
  for (const county of counties) {
    const city = county.cities.find((c) => c.slugCity === slugCity);
    if (city) return { county, city };
  }
  return undefined;
};


