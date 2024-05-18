import { Institution } from "~/lib/db/db";
import { InstitutionHeadingNational } from "./InstitutionHeading";
import { InstitutionTotalsNational } from "./InstitutionTotals";

export default function BoardDataNational({ institution }: { institution: Institution }) {
    return (
        <div className='h-[50vh] sm:h-[100vh] sm:w-[45vw] pt-20 text-white font-bold overflow-y-scroll  shadow-2xl border border-l border-black/10'>
            <div className='bg-gradient-to-r from-black via-black/70 to-transparent py-2 px-3'>
                <h1 className='text-3xl font-bold'>Nacional</h1>
            </div>
            <div className=''>
                <InstitutionHeadingNational institution={institution} />
                <InstitutionTotalsNational
                    institution={institution}
                    className='mt-5 '
                />
            </div>
        </div>
    );
}
