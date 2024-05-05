import { Link } from "@remix-run/react";
import { Institution } from "../lib/db/db";

interface Institution_Totals_Props {
    institution: Institution;
    className?: string;
}
export function InstitutionTotals({ institution, className }: Institution_Totals_Props) {
    return (
        <div
            className={"px-[30px] w-full overflow-x-auto whitespace-nowrap space-y-4 " + className}
        >
            {/* first row */}
            <div className=' grid grid-cols-3 gap-2'>
                <div className='max-w-[12rem] text-wrap'>
                    <p className='text-xs'> La vocación del instituto da acceso a:</p>
                </div>
                <div className=' text-black px-2 py-1 bg-gradient-to-r from-white via-white to-transparent flex items-center justify-center'>
                    <p className='font-extrabold text-xl'>Local</p>
                </div>

                <Link
                    to='#'
                    className=' text-black  px-2 py-1  bg-white flex items-center justify-center'
                >
                    <p className='font-extrabold text-xl'>Nacional</p>
                </Link>
            </div>

            {/* matriculados */}
            <div className=' grid grid-cols-3 gap-2'>
                <div className=' py-2'>
                    <p className='uppercase text-xl font-bold font-futura'> Matriculados</p>
                </div>

                <div className=' bg-[#994A4C] rounded-md flex items-center justify-center py-2'>
                    <p className='font-extrabold text-xl'>
                        {institution.totals.local.enrollment
                            ? institution.totals.local.enrollment
                            : "-"}
                    </p>
                </div>

                <div className=' bg-[#7F2A51] rounded-md flex items-center justify-center py-2'>
                    <p className='font-extrabold text-xl'>
                        {institution.totals.national.enrollment
                            ? institution.totals.national.enrollment
                            : "-"}
                    </p>
                </div>
            </div>

            {/* matriculados */}
            <div className=' grid grid-cols-3 gap-2'>
                <div className=' py-2'>
                    <p className='uppercase text-xl font-bold font-futura'> Titulados</p>
                </div>

                <div className=' bg-[#D7985A] rounded-md flex items-center justify-center py-2'>
                    <p className='font-extrabold text-xl'>
                        {institution.totals.local.entitlements
                            ? institution.totals.local.entitlements
                            : "-"}
                    </p>
                </div>

                <div className=' bg-[#E4A460] rounded-md flex items-center justify-center py-2'>
                    <p className='font-extrabold text-xl'>
                        {institution.totals.national.entitlements
                            ? institution.totals.national.entitlements
                            : "-"}
                    </p>
                </div>
            </div>

            {/* egresados */}
            <div className=' grid grid-cols-3 gap-2'>
                <div className=' py-2'>
                    <p className='uppercase text-xl font-bold font-futura'> Egresados</p>
                </div>

                <div className=' bg-[#B19880] rounded-md flex items-center justify-center py-2'>
                    <p className='font-extrabold text-xl'>
                        {institution.totals.local.egress ? institution.totals.local.egress : "-"}
                    </p>
                </div>

                <div className=' bg-[#A7A5A6] rounded-md flex items-center justify-center py-2'>
                    <p className='font-extrabold text-xl'>
                        {institution.totals.national.egress
                            ? institution.totals.national.egress
                            : "-"}
                    </p>
                </div>
            </div>
        </div>
    );
}
