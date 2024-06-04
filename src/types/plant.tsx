export interface Plant {
    id: number;
    common_name: string | null;
    slug: string;
    scientific_name: string;
    main_species_id: number;
    image_url: string | null;
    year: number;
    bibliography: string;
    author: string;
    family_common_name: string;
    genus_id: number;
    observations: string;
    vegetable: boolean;
    links: Record<string, any>;
    main_species: Record<string, any>;
    genus: Record<string, any>;
    family: Record<string, any>;
    species: any[];
    subspecies: any[];
    varieties: any[];
    hybrids: any[];
    forms: any[];
    subvarieties: any[];
    sources: any[];
}  