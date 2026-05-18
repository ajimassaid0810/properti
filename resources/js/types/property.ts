export type ProjectLocation = {
    latitude: string | number;
    longitude: string | number;
    address: string;
    landmark?: string | null;
    nearby_points?: string[] | null;
};

export type Gallery = {
    id: number;
    image_url: string;
    caption?: string | null;
};

export type UnitType = {
    name: string;
    land?: string;
    building: string;
    bedroom: string;
    price: string;
};

export type Project = {
    id: number;
    name: string;
    slug: string;
    category: 'Rumah' | 'Apartemen' | 'Komersial';
    location: string;
    price_start: string;
    status: string;
    thumbnail: string;
    short_description: string;
    description: string;
    unit_types?: UnitType[] | null;
    facilities?: string[] | null;
    specifications?: string[] | null;
    site_plan?: Record<string, string> | null;
    is_featured?: boolean;
    is_published?: boolean;
    galleries?: Gallery[];
    location_detail?: ProjectLocation | null;
};

export type Testimonial = {
    id: number;
    client_name: string;
    client_role: string;
    project_name?: string | null;
    avatar_url?: string | null;
    quote: string;
    rating: number;
};

export type BlogPost = {
    id: number;
    title: string;
    slug: string;
    category: string;
    excerpt: string;
    content: string;
    cover_image: string;
    meta_title?: string | null;
    meta_description?: string | null;
    published_at?: string | null;
};

export type CompanyProfile = {
    company_name: string;
    tagline?: string | null;
    about: string;
    history?: string | null;
    vision_mission?: {
        vision?: string;
        mission?: string[];
    } | null;
    core_values?: string[] | null;
    legalities?: string[] | null;
    timeline?: Array<{ year: string; title: string }> | null;
    phone?: string | null;
    whatsapp?: string | null;
    email?: string | null;
    address?: string | null;
    social_links?: Record<string, string> | null;
    office_latitude?: string | number | null;
    office_longitude?: string | number | null;
};
