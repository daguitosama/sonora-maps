import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import tailwind_styles from "./tailwind.css?url";
import react_tooltip_styles from "react-tooltip/dist/react-tooltip.css?url";
export const links = () => {
    return [
        { rel: "stylesheet", href: tailwind_styles },
        { rel: "stylesheet", href: react_tooltip_styles },
    ];
};
export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <head>
                <meta charSet='utf-8' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <Meta />
                <Links />
            </head>
            <body className=''>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return <Outlet />;
}

export function HydrateFallback() {
    return <p>Loading...</p>;
}
