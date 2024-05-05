import type { MetaFunction } from "@remix-run/node";

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
    return <div>presentacion</div>;
}
