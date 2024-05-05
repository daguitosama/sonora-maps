import { DOCTORADOS } from "./doctorados";

export interface Course {
    id: string;
    title: string;
    slug: string;
    totals: {
        enrollment: number;
        entitlements: number;
        egress: number;
    };
}
export interface Institution {
    id: string;
    slug: string;
    name: string;
    map: string;
    logo_source: string;
    name_gradient: {
        from: string;
        to: string;
    };
    totals_note: string;
    totals: {
        national: { enrollment: number; entitlements: number; egress: number };
        local: {
            enrollment: number;
            entitlements: number;
            egress: number;
        };
    };
    coordinates: {
        longitude: string;
        latitude: string;
    };
    courses: Course[];
}

export interface Program {
    title: string;
    bg_color: string;
    totals: {
        national: { enrollment: number; entitlements: number; egress: number };
        local: {
            enrollment: number;
            entitlements: number;
            egress: number;
        };
    };
    institutions: Institution[];
}

export const DB = {
    // keys are planned for
    // matching `$program` slugs
    // like:
    // $program: $program_data
    doctorados: DOCTORADOS,
};
type DB_KEY = keyof typeof DB;

export function parse_program_key(key: string | undefined): DB_KEY {
    if (!key) {
        // default program view
        return "doctorados";
    }
    if (Object.keys(DB).includes(key)) {
        return key as DB_KEY;
    } else {
        // default program view
        return "doctorados";
    }
}

export const MAP_PINS_IDS = new Map(
    Object.entries({
        // pin-id : data-route
        sonora: "/sonora",
    })
);
