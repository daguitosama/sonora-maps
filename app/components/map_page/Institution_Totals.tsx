import { Institution } from "./db";

interface Institution_Totals_Props {
    institution: Institution;
}
export function Institution_Totals({ institution }: Institution_Totals_Props) {
    const { totals, totals_note } = institution;
    return (
        <div className='px-[30px] w-full overflow-x-auto whitespace-nowrap'>
            <div className='grid grid-cols-8 gap-3 min-w-[600px] whitespace-normal'>
                {/* first column */}
                <div className='col-span-2 grid gap-2'>
                    <div className='max-w-[12rem] text-wrap'>
                        <p className='text-xs  '>{totals_note}</p>
                    </div>
                    <div className='grid gap-2 pb-4'>
                        <div className=' text-black px-2 py-1 text-md font-bold bg-gradient-to-r from-white to-transparent'>
                            <p>Nacional</p>
                        </div>
                        <div className=' text-black px-2 py-1 text-md font-bold bg-gradient-to-r from-white to-transparent'>
                            <p>Local</p>
                        </div>
                    </div>
                </div>
                {/* matriculados column */}
                <div className='grid col-span-2 '>
                    <div className='flex flex-col items-center justify-end'>
                        <p className='uppercase font-light'>Matriculados</p>
                    </div>
                    <div className='pt-[28px]'>
                        <div className=' bg-[#A8544D] rounded-md font-light text-center grid grid-rows-2'>
                            <div className='bg-[#960E53] rounded-md py-2'>
                                {totals.national.enrollment ? totals.national.enrollment : "-"}
                            </div>
                            <div className='py-2'>
                                {totals.local.enrollment ? totals.local.enrollment : "-"}
                            </div>
                        </div>
                    </div>
                </div>

                {/* titulados column */}
                <div className='grid col-span-2 '>
                    <div className='flex flex-col items-center justify-end'>
                        <p className='uppercase font-light'>Titulados</p>
                    </div>
                    <div className='pt-[28px]'>
                        <div className='bg-[#E3974E] rounded-md font-light text-center grid grid-rows-2'>
                            <div className='bg-[#EFA151] rounded-md py-2'>
                                {totals.national.entitlements ? totals.national.entitlements : "-"}
                            </div>
                            <div className='py-2'>
                                {totals.local.entitlements ? totals.local.entitlements : "-"}
                            </div>
                        </div>
                    </div>
                </div>

                {/* titulados column */}
                <div className='grid col-span-2 '>
                    <div className='flex flex-col items-center justify-end'>
                        <p className='uppercase font-light'>Egresados</p>
                    </div>

                    <div className='pt-[28px]'>
                        <div className='bg-[#B79885] rounded-md font-light text-center grid grid-rows-2'>
                            <div className='bg-[#A7A5A6] rounded-md py-2'>
                                {totals.national.egress ? totals.national.egress : "-"}
                            </div>
                            <div className='py-2'>
                                {totals.local.egress ? totals.local.egress : "-"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
