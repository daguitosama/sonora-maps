import { useState } from "react";
import { Course, Institution } from "../lib/db/db";

interface Courses_Board_Props {
    institution: Institution;
    className?: string;
}
export function InstitutionCoursesBoard({ institution, className }: Courses_Board_Props) {
    const [selected_course_idx, set_selected_idx] = useState<number>(0);

    return (
        <div className={"relative " + className}>
            <div className='absolute top-2 left-0 w-full py-2 px-[30px] bg-gradient-to-r from-[#000] via-[#2E2120]  to-transparent '>
                <h2 className='uppercase font-light'>Ofertas de carreras</h2>
            </div>
            <div className=' w-full  '>
                <div className='grid grid-cols-2 gap-2 w-full '>
                    <Carreras
                        institution={institution}
                        selected_idx={selected_course_idx}
                        selected_course_idx={set_selected_idx}
                    />
                    <Carreras_Board
                        institution={institution}
                        selected_course_idx={selected_course_idx}
                    />
                </div>
            </div>
        </div>
    );
}

interface Carreras_Props {
    institution: Institution;
    selected_idx: number;
    selected_course_idx: (idx: number) => void;
}
function Carreras({
    institution,
    selected_idx,
    selected_course_idx: set_selected_idx,
}: Carreras_Props) {
    const { courses } = institution;
    return (
        <ul className='pt-14 px-[10px] flex flex-col gap-3  pb-2 border border-white'>
            {courses.map((course, idx) => {
                return (
                    <li key={course.id}>
                        <button
                            className={" ".concat(selected_idx == idx ? "underline" : "")}
                            onClick={() => {
                                set_selected_idx(idx);
                            }}
                        >
                            <div>
                                <p className='text-xs text-start uppercase'>{course.title}</p>
                            </div>
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}

interface Carreras_Board_Props {
    institution: Institution;
    selected_course_idx: number;
}
function Carreras_Board({ institution, selected_course_idx }: Carreras_Board_Props) {
    const { coordinates, courses } = institution;
    const current_course = courses[selected_course_idx];
    //  bar lengths calculus
    const max_number_of_courses_folks = get_max_course_folks_number(current_course);
    const folks_bar_width =
        max_number_of_courses_folks + Math.ceil(max_number_of_courses_folks * 0.3);
    //
    return (
        <div className='pb-2 '>
            <div className='pt-14 pb-10 bg-[#EAD6C1] px-2 flex flex-col gap-2'>
                {/* matriculados */}
                <div className=''>
                    <div className='text-black flex flex-col items-center col-span-1 '>
                        <p className='font-bold'>{current_course.totals.enrollment}</p>
                        <p className='font-light text-sm'>Matriculados</p>
                    </div>

                    <div className='col-span-2 flex items-center justify-center'>
                        <div className='bg-[#2E2120] h-[26px] w-full rounded-full '>
                            <div
                                className='bg-[#892053] h-[26px] rounded-full'
                                style={{
                                    width: `${Math.ceil(
                                        (current_course.totals.enrollment / folks_bar_width) * 100
                                    )}%`,
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
                {/* titulados */}
                <div className=''>
                    <div className='text-black flex flex-col items-center col-span-1 '>
                        <p className='font-bold'>{current_course.totals.entitlements}</p>
                        <p className='font-light text-sm'>Titulados</p>
                    </div>

                    <div className='col-span-2 flex items-center justify-center'>
                        <div className='bg-[#2E2120] h-[26px] w-full rounded-full '>
                            <div
                                className='bg-[#EFA151] h-[26px] rounded-full'
                                style={{
                                    width: `${Math.ceil(
                                        (current_course.totals.entitlements / folks_bar_width) * 100
                                    )}%`,
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
                {/* egresados */}
                <div className=''>
                    <div className='text-black flex flex-col items-center col-span-1 '>
                        <p className='font-bold'>{current_course.totals.egress}</p>
                        <p className='font-light text-sm'>Egresados</p>
                    </div>

                    <div className='col-span-2 flex items-center justify-center'>
                        <div className='bg-[#2E2120] h-[26px] w-full rounded-full '>
                            <div
                                className='bg-[#A7A5A6] h-[26px] rounded-full'
                                style={{
                                    width: `${Math.ceil(
                                        (current_course.totals.egress / folks_bar_width) * 100
                                    )}%`,
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-end '>
                <div className='text-end text-sm font-light'>
                    <p>Longitud: {coordinates.longitude}</p>
                    <p>Latitud: {coordinates.latitude}</p>
                </div>
            </div>
        </div>
    );
}

function get_max_course_folks_number(course: Course): number {
    let max_number_of_courses_folks = 0;
    if (course.totals.egress > max_number_of_courses_folks) {
        max_number_of_courses_folks = course.totals.egress;
    }
    if (course.totals.enrollment > max_number_of_courses_folks) {
        max_number_of_courses_folks = course.totals.enrollment;
    }
    if (course.totals.entitlements > max_number_of_courses_folks) {
        max_number_of_courses_folks = course.totals.entitlements;
    }
    return max_number_of_courses_folks;
}
