import type { MetaFunction } from "@remix-run/node";
import { Map_Page } from "~/components/map_page/MapPage";
import { Doctorados_Data } from "~/components/map_page/db";

export const meta: MetaFunction = () => {
    return [
        { title: "Sonora | Doctorados" },
        {
            name: "description",
            content: "",
        },
    ];
};

export default function Index() {
    return <Map_Page data={Doctorados_Data} />;
}
