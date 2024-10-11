export interface FilterProps {
    onApplyFilters: (filters: {
      categories: string[];
      brands: string[];
      priceRange: [number, number];
    }) => void;
    categories: { id: number; attributes: { title: string } }[];
    brands: { id: number; attributes: { name: string } }[];
  }