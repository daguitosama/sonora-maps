export function ProgramHeader({ title }: { title: string }) {
    return (
        <div className='w-full pt-16 overflow-y-scroll'>
            <div className='px-[30px]'>
                {/* title */}
                <div className='p-2 border-4 border-white inline-block'>
                    <h1 className='text-xl text-white font-bold'>{title}</h1>
                </div>
            </div>
        </div>
    );
}
