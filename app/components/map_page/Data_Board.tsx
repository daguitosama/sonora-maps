import { Courses_Board } from "./Courses_Board";
import { Institution_Heading } from "./Institution_Heading";
import { Institution_Totals } from "./Institution_Totals";
import { Map_Page_Props } from "./MapPage";
import { Institution } from "./db";

//
export function Data_Board({ data }: Map_Page_Props) {
    const { title, bg_color } = data;
    return (
        <div
            className='h-[50vh] sm:h-[100vh] sm:w-[45vw] text-white font-bold '
            style={{ backgroundColor: bg_color }}
        >
            <div className='h-full w-full  pt-24 overflow-y-scroll'>
                <div className='px-[30px]'>
                    {/* title */}
                    <div className='p-2 border-4 border-white inline-block'>
                        <h1 className='text-xl '>{title}</h1>
                    </div>
                </div>

                {/* Courses */}
                <div className='mt-4 md:mt-8 pb-10'>
                    <Courses data={data} />
                </div>
            </div>
        </div>
    );
}

function Courses({ data }: Map_Page_Props) {
    const { institutions } = data;
    return (
        <div>
            <ul>
                {institutions.map((institution) => {
                    return (
                        <li key={institution.name}>
                            <Institution_Card institution={institution} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

interface Institution_Card_Props {
    institution: Institution;
}
function Institution_Card({ institution }: Institution_Card_Props) {
    return (
        <div className=''>
            <div>
                <Institution_Heading institution={institution} />
            </div>

            <div className='mt-2'>
                <Institution_Totals institution={institution} />
            </div>

            <div className='mt-2'>
                <Courses_Board institution={institution} />
            </div>
        </div>
    );
}
