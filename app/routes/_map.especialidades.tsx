import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
    return [
        { title: "Sonora | Especialidades" },
        {
            name: "description",
            content: "",
        },
    ];
};

export default function Especialidades_Route() {
    return (
        <div className=''>
            <div>Especialidades</div>
        </div>
    );
}
