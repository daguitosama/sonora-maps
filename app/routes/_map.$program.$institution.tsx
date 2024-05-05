import { useParams } from "@remix-run/react";
import BoardData from "~/components/BoardData";
import BoardMap from "~/components/BoardMap";
import { DB, parse_program_key } from "~/lib/db/db";

export default function Course() {
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
    const course_slug = params.course as string;
    const course = institution.courses.filter((course) => {
        return course.slug == course_slug;
    })[0];
    return (
        <div
            className='min-h-screen transition-colors duration-200'
            style={{ backgroundColor: bg_color }}
        >
            <div className='flex flex-col sm:flex-row h-full'>
                <BoardData
                    program={program}
                    institution={institution}
                    course={course}
                />
                <BoardMap map_svg_src={institution.map} />
            </div>
        </div>
    );
}
