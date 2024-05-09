import { Course, Institution, Program } from "~/lib/db/db";
import { InstitutionHeading } from "./InstitutionHeading";
import { ProgramHeader } from "./ProgramHeader";
import { InstitutionTotals } from "./InstitutionTotals";
import { InstitutionCoursesBoard } from "./InstitutionCoursesBoard";

export default function BoardData({
    program,
    institution,
}: {
    program: Program;
    institution: Institution;
    course: Course;
}) {
    return (
        <div className='h-[50vh] sm:h-[100vh] sm:w-[45vw] text-white font-bold overflow-y-scroll  shadow-2xl border border-l border-black/10'>
            <div className='lg:w-[500px] lg:mx-auto'>
                <ProgramHeader title={program.title} />
                <InstitutionHeading
                    institution={institution}
                    className='mt-2'
                />
                <InstitutionTotals
                    institution={institution}
                    className='mt-5 '
                />
                <InstitutionCoursesBoard
                    institution={institution}
                    className='mt-5'
                />
            </div>
        </div>
    );
}
