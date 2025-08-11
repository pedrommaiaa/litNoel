// Lit Noel Service Areas and Locations
export interface ServiceLocation {
  name: string;
  slug: string;
  county?: string;
  description?: string;
  featured?: boolean;
}

export const serviceLocations: ServiceLocation[] = [
  {
    name: "West Georgia",
    slug: "west-georgia",
    description: "Residential and commercial Christmas light installation across West Georgia"
  },
  {
    name: "Metro Atlanta",
    slug: "metro-atlanta",
    description: "Professional holiday lighting throughout the greater Atlanta metro area"
  }
];

// Helper functions
export const getFeaturedLocations = (): ServiceLocation[] => {
  return serviceLocations.filter(location => location.featured);
};

export const getLocationBySlug = (slug: string): ServiceLocation | undefined => {
  return serviceLocations.find(location => location.slug === slug);
};

export const getAllLocationNames = (): string[] => {
  return serviceLocations.map(location => location.name);
};