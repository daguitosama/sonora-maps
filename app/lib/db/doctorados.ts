import { Program } from "./db";

export const DOCTORADOS: Program = {
    title: "DOCTORADOS",
    bg_color: "#DC7F37",
    institutions: [
        {
            id: "0",
            slug: "sonora",
            name: "Universidad de Sonora, Campus Hermosillo",
            logo_source: "/img/logos/UNISON_sonora.png",
            map: "/img/maps/mapa-doctorados.svg", // "/img/maps/IT_Hermosillo.png", // "/img/maps/mapa-doctorados.svg",
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
                    slug: "biotecnologias",
                    id: "0",
                    title: "Doctorado en Ciencias en Biotecnologías",
                    totals: {
                        enrollment: 40,
                        entitlements: 9,
                        egress: 14,
                    },
                },
                {
                    slug: "ingenierias",
                    id: "1",
                    title: "DOCTORADO EN CIENCIAS DE LA INGENIERÍA",
                    totals: {
                        enrollment: 15,
                        entitlements: 2,
                        egress: 2,
                    },
                },
            ],
        },
    ],
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
};
