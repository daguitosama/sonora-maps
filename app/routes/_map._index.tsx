import type { MetaFunction } from "@remix-run/cloudflare";

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
    return (
        <div className=''>
            <div className='flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0'>
                <div>
                    <img
                        src='/sample-data.png'
                        className=''
                        alt=''
                    />
                </div>
                <div className='max-h-screen'>
                    <img
                        src='/sample-map.png'
                        className=''
                        alt=''
                    />
                </div>
            </div>
        </div>
    );
}
