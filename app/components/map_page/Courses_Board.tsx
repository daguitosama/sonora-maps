import { useState } from "react";
import { Course, Institution } from "./db";

interface Courses_Board_Props {
    institution: Institution;
}
export function Courses_Board({ institution }: Courses_Board_Props) {
    const [selected_course_idx, set_selected_idx] = useState<number>(0);

    return (
        <div className='relative'>
            <div className='absolute top-4 left-0 w-full py-2 px-[30px] bg-gradient-to-r from-[#000] via-[#2E2120]  to-transparent '>
                <h2 className='uppercase font-light text-lg'>Ofertas de carreras</h2>
            </div>
            <div className=' w-full overflow-x-auto whitespace-nowrap'>
                <div className='grid grid-cols-2 gap-2 w-full min-w-[600px] whitespace-normal'>
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
        <ul className='pt-20 px-[30px] grid  pb-20 border border-white'>
            {courses.map((course, idx) => {
                return (
                    <li key={course.id}>
                        <button
                            className={"flex items-center gap-2 ".concat(
                                selected_idx == idx ? "" : "opacity-70"
                            )}
                            onClick={() => {
                                set_selected_idx(idx);
                                // console.log("selecting idx: ", idx);
                            }}
                        >
                            <div className='bg-black text-white text-lg font-bold px-2 py-1 flex items-center gap-1 '>
                                <span>{idx + 1}</span> <span>.</span>
                            </div>
                            <div>
                                <p className='text-start uppercase'>{course.title}</p>
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
        <div className='pb-20 '>
            <div className='pt-20 pb-10 bg-[#EAD6C1] px-3'>
                {/* matriculados */}
                <div className='grid grid-cols-3 gap-3'>
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
                <div className='grid grid-cols-3 gap-3'>
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
                <div className='grid grid-cols-3 gap-3'>
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
