import { Link } from "@remix-run/react";
import { Institution } from "../lib/db/db";

interface Institution_Totals_Props {
    institution: Institution;
    className?: string;
}
export function InstitutionTotals({ institution, className }: Institution_Totals_Props) {
    return (
        <div className={"px-[10px] w-full overflow-x-auto whitespace-nowrap  " + className}>
            {/* first row */}
            <div className=' flex items-center justify-between gap-[10px] py-[5px]'>
                <div className=' text-wrap w-[124px]'>
                    <p className='text-xs font-extrabold'>La vocación del instituto da acceso a:</p>
                </div>
                <div className=' w-[82px] h-[28px] flex items-center justify-center text-black px-2 py-1 bg-white  '>
                    <p className='font-bold'>Local</p>
                </div>

                <Link
                    to='#'
                    className=' w-[82px] h-[28px] flex items-center justify-center text-black  px-2 py-1  bg-white '
                >
                    <p className='font-bold'>Nacional</p>
                </Link>
            </div>

            {/* matriculados */}
            <div className='flex items-center justify-between gap-[10px] py-[5px]'>
                <div className='w-[124px]'>
                    <p className='uppercase text-sm font-bold '> Matriculados</p>
                </div>

                <div className=' bg-[#994A4C] rounded-md flex items-center justify-center w-[82px] h-[28px]'>
                    <p className='font-bold'>
                        {institution.totals.local.enrollment
                            ? institution.totals.local.enrollment
                            : "-"}
                    </p>
                </div>

                <div className=' bg-[#7F2A51] rounded-md flex items-center justify-center w-[82px] h-[28px]'>
                    <p className='font-bold'>
                        {institution.totals.national.enrollment
                            ? institution.totals.national.enrollment
                            : "-"}
                    </p>
                </div>
            </div>

            {/* titulados */}
            <div className='flex items-center justify-between gap-[10px] py-[5px]'>
                <div className='w-[124px]'>
                    <p className='uppercase  font-bold '> Titulados</p>
                </div>

                <div className=' bg-[#D7985A] rounded-md flex items-center justify-center w-[82px] h-[28px]'>
                    <p className='font-bold'>
                        {institution.totals.local.entitlements
                            ? institution.totals.local.entitlements
                            : "-"}
                    </p>
                </div>

                <div className=' bg-[#E4A460] rounded-md flex items-center justify-center w-[82px] h-[28px]'>
                    <p className='font-bold'>
                        {institution.totals.national.entitlements
                            ? institution.totals.national.entitlements
                            : "-"}
                    </p>
                </div>
            </div>

            {/* egresados */}
            <div className='flex items-center justify-between gap-[10px] py-[5px]'>
                <div className='w-[124px]'>
                    <p className='uppercase font-bold'> Egresados</p>
                </div>

                <div className=' bg-[#B19880] rounded-md flex items-center justify-center w-[82px] h-[28px]'>
                    <p className='font-bold'>
                        {institution.totals.local.egress ? institution.totals.local.egress : "-"}
                    </p>
                </div>

                <div className=' bg-[#A7A5A6] rounded-md flex items-center justify-center w-[82px] h-[28px]'>
                    <p className='font-bold'>
                        {institution.totals.national.egress
                            ? institution.totals.national.egress
                            : "-"}
                    </p>
                </div>
            </div>
        </div>
    );
}
