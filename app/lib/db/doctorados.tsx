import { Program } from "./db";
import { Map_Sonora } from "./MapaSonora";
import { Map_SonoraNational } from "./MapSonoraNational";

export const DOCTORADOS: Program = {
    title: "DOCTORADOS",
    bg_color: "#DC7F37",
    map: <Map_Sonora />,
    national_map: <Map_SonoraNational />,
    institutions: [
        {
            id: "0",
            slug: "hermosillo",
            name: "Universidad de Sonora, Campus Hermosillo",
            logo_source: "/img/logos/UNISON_sonora.png",
            name_gradient: {
                from: "#b46525d2",
                to: "#DC7F37",
            },
            totals_note: "La vocación del Universidad de Sonora en Doctorados da acceso a:",
            totals: {
                national: {
                    enrollment: 300,
                    entitlements: 180,
                    egress: 150,
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
                    slug: "",
                    id: "0",
                    title: "DOCTORADO EN CIENCIAS DE LA INGENIERÍA",
                    totals: {
                        enrollment: 37,
                        entitlements: 5,
                        egress: 5,
                    },
                },
                {
                    slug: "",
                    id: "1",
                    title: "DOCTORADO EN CIENCIAS (FÍSICA)",
                    totals: {
                        enrollment: 23,
                        entitlements: 3,
                        egress: 3,
                    },
                },

                {
                    slug: "",
                    id: "2",
                    title: "DOCTORADO EN ELECTRÓNICA",
                    totals: {
                        enrollment: 0,
                        entitlements: 1,
                        egress: 0,
                    },
                },

                {
                    slug: "",
                    id: "3",
                    title: "DOCTORADO EN CIENCIAS DE MATERIALES",
                    totals: {
                        enrollment: 47,
                        entitlements: 12,
                        egress: 20,
                    },
                },

                {
                    slug: "",
                    id: "4",
                    title: "DOCTORADO EN BIOCIENCIAS",
                    totals: {
                        enrollment: 23,
                        entitlements: 3,
                        egress: 3,
                    },
                },

                {
                    slug: "",
                    id: "5",
                    title: "DOCTORADO EN CIENCIAS (MATEMÁTICAS)",
                    totals: {
                        enrollment: 9,
                        entitlements: 2,
                        egress: 6,
                    },
                },

                {
                    slug: "",
                    id: "6",
                    title: "DOCTORADO EN NANOTECNOLOGÍA",
                    totals: {
                        enrollment: 22,
                        entitlements: 13,
                        egress: 12,
                    },
                },
            ],
        },
        {
            id: "1",
            slug: "cajeme",
            name: "Instituto Tecnológico de Sonora",
            logo_source: "/img/logos/ITSON.png",
            name_gradient: {
                from: "#b46525d2",
                to: "#DC7F37",
            },
            totals_note:
                "La vocación del Instituto Tecnológico de Sonora en Doctorados da acceso a:",
            totals: {
                national: {
                    enrollment: 100,
                    entitlements: 80,
                    egress: 80,
                },
                local: {
                    enrollment: 55,
                    entitlements: 11,
                    egress: 16,
                },
            },
            coordinates: {
                latitude: "27.48341845",
                longitude: "-109.9338582",
            },
            courses: [
                {
                    slug: "biotecnologias",
                    id: "0",
                    title: "DOCTORADO EN CIENCIAS EN BIOTECNOLOGÍA",
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
