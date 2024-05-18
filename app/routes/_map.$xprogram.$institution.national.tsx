import { useParams } from "@remix-run/react";
import BoardDataNational from "~/components/BoardDataNational";
import { BoardMapNational } from "~/components/BoardMap";
import { DB, parse_program_key } from "~/lib/db/db";

export default function Institution() {
    //
    const params = useParams();
    const program_slug = parse_program_key(params.program);
    //
    const program = DB[program_slug];
    //
    const { bg_color } = program;
    //
    const institution_slug = params.institution as string;
    const institution = DB[program_slug].institutions.filter(
        (institution) => institution.slug == institution_slug
    )[0];
    //

    return (
        <div
            className='min-h-screen transition-colors duration-200'
            style={{ backgroundColor: bg_color }}
        >
            <div className='flex flex-col sm:flex-row h-full'>
                <BoardDataNational institution={institution} />
                <BoardMapNational map={program.national_map} />
            </div>
        </div>
    );
}
