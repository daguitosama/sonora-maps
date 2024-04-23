import { NavLink, Outlet, useLocation } from "@remix-run/react";
import { Menu } from "@headlessui/react";

export default function MapLayout() {
    const location = useLocation();
    const background_color_for_routes = {
        doctorados: "bg-[#DC7F37]",
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
                <div className='relative'>
                    <Navigation />
                </div>
                <Outlet />
            </div>
        </div>
    );
}

function Navigation() {
    const base_link_classes =
        "text-black text-sm md:text-base leading-none p-2 uppercase  transition-all duration-200 rounded-md ";
    return (
        <div className='px-[30px] max-w-screen-xl pt-4 absolute left-0 top-0'>
            <Menu
                as='div'
                className='relative'
            >
                <Menu.Button className='py-2 px-3 text-md bg-white rounded-md shadow-md'>
                    Menú
                </Menu.Button>
                <Menu.Items className='absolute left-0 mt-2 p-1 flex flex-col  origin-top-right  rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none'>
                    <Menu.Item>
                        <NavLink
                            to='/'
                            className={({ isActive }) =>
                                isActive
                                    ? base_link_classes + "ring-2 ring-white text-white bg-black "
                                    : base_link_classes + " "
                            }
                        >
                            Doctorados
                        </NavLink>
                    </Menu.Item>

                    <Menu.Item>
                        <NavLink
                            to='/maestrias'
                            className={({ isActive }) =>
                                isActive
                                    ? "ring-2 ring-white text-white  " +
                                      base_link_classes +
                                      "bg-black"
                                    : base_link_classes + "text-black"
                            }
                        >
                            Maestrías
                        </NavLink>
                    </Menu.Item>

                    <Menu.Item>
                        <NavLink
                            to='/especialidades'
                            className={({ isActive }) =>
                                isActive
                                    ? "ring-2 ring-white text-white  " +
                                      base_link_classes +
                                      "bg-black"
                                    : base_link_classes + "text-black"
                            }
                        >
                            Especialidades
                        </NavLink>
                    </Menu.Item>
                </Menu.Items>
            </Menu>
        </div>
    );
}
