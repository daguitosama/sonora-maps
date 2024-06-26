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
            className={"flex items-center justify-start gap-2 px-[10px] " + className}
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

export function InstitutionHeadingNational({
    institution,
    className,
}: {
    institution: Institution;
    className?: string;
}) {
    const { logo_source } = institution;
    return (
        <div className={"flex items-center justify-start gap-2 px-[10px] " + className}>
            <div>
                <div className='rounded-full block relative'>
                    <img
                        src={logo_source}
                        className=' w-[100px] drop-shadow-xl '
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
