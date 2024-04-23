import { NavLink, Outlet, useLocation } from "@remix-run/react";

export default function MapLayout() {
    const location = useLocation();
    const background_color_for_routes = {
        doctorados: "bg-[#D08447]",
        maestrias: "bg-[#AB4E49]",
        especialidades: "bg-[#8F3740]",
    };
    let dynamic_bg_color: string =
        background_color_for_routes.doctorados; /* default  for `/` (doctorados route)*/
    if (location.pathname == "/maestrias") {
        dynamic_bg_color = background_color_for_routes.maestrias;
    }
    if (location.pathname == "/especialidades") {
        dynamic_bg_color = background_color_for_routes.especialidades;
    }
    return (
        <div>
            <div className={"min-h-screen  transition-colors duration-200 " + dynamic_bg_color}>
                <Navigation />
                <div className='mt-10 px-[30px] max-w-screen-xl mx-auto'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

function Navigation() {
    const base_link_classes =
        "text-white text-sm md:text-base leading-none p-2 uppercase  transition-all duration-200 ";
    return (
        <div className='w-full flex items-center justify-center p-2 md:py-4 gap-2 md:gap-3'>
            <NavLink
                to='/'
                className={({ isActive }) =>
                    isActive
                        ? "ring-2 ring-white " + base_link_classes + "bg-[#CF8548]"
                        : base_link_classes + "bg-[#CF8548]"
                }
            >
                Doctorados
            </NavLink>
            <NavLink
                to='/maestrias'
                className={({ isActive }) =>
                    isActive
                        ? "ring-2 ring-white " + base_link_classes + "bg-[#AB4E4A]"
                        : base_link_classes + "bg-[#AB4E4A]"
                }
            >
                Maestrías
            </NavLink>

            <NavLink
                to='/especialidades'
                className={({ isActive }) =>
                    isActive
                        ? "ring-2 ring-white " + base_link_classes + "bg-[#8F3641]"
                        : base_link_classes + "bg-[#8F3641]"
                }
            >
                Especialidades
            </NavLink>
        </div>
    );
}
