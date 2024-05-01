export interface Map_Page_Data {
    title: string;
    bg_color: string;
    institutions: Institution[];
}
export interface Course {
    id: string;
    title: string;
    totals: {
        enrollment: number;
        entitlements: number;
        egress: number;
    };
}
export interface Institution {
    id: string;
    name: string;
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
export const Doctorados_Data: Map_Page_Data = {
    title: "DOCTORADOS",
    bg_color: "#DC7F37",
    institutions: [
        {
            id: "0",
            name: "Universidad de Sonora, Campus Hermosillo",
            logo_source: "/img/logos/IT_Hermosillo.svg",
            name_gradient: {
                from: "#b46525d2",
                to: "#DC7F37",
            },
            totals_note: "La vocación del Universidad de Sonora en Doctorados da acceso a:",
            totals: {
                national: {
                    enrollment: 0,
                    entitlements: 0,
                    egress: 0,
                },
                local: {
                    enrollment: 161,
                    entitlements: 39,
                    egress: 49,
                },
            },
            coordinates: {
                latitude: "29.08348517",
                longitude: "-110.9603618",
            },
            courses: [
                {
                    id: "0",
                    title: "Doctorado en Ciencias en Biotecnologías",
                    totals: {
                        enrollment: 40,
                        entitlements: 9,
                        egress: 14,
                    },
                },
            ],
        },
    ],
};
