import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
    return [
        { title: "Sonora | Maestrías" },
        {
            name: "description",
            content: "",
        },
    ];
};

export default function Index() {
    return (
        <div className=''>
            <div>map</div>
        </div>
    );
}
