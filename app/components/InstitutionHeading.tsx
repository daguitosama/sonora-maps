import { Institution } from "~/lib/db/db";

export function InstitutionHeading({
    institution,
    className,
}: {
    institution: Institution;
    className?: string;
}) {
    const {
        name_gradient: { from, to },
        logo_source,
    } = institution;
    return (
        <div
            style={{
                backgroundImage: `linear-gradient( to right, ${from}, ${to} )`,
            }}
            className={"flex items-center justify-start gap-6 px-[30px] " + className}
        >
            <div>
                <div className='w-[70px] h-[70px] rounded-full block relative'>
                    <img
                        src={logo_source}
                        className='w-[70px] h-[70px] absolute left-0 drop-shadow-md '
                        alt=''
                    />
                </div>
            </div>
            <div className='max-w-[20rem]'>
                <h2 className='uppercase'>{institution.name}</h2>
            </div>
        </div>
    );
}
