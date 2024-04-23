import { Map_Page_Data } from "./db";

interface Map_Page_Props {
    data: Map_Page_Data;
}
export function Map_Page({ data }: Map_Page_Props) {
    data;
    return (
        <div className='flex flex-col sm:flex-row h-[100vh]'>
            {/* data */}
            <Data_Board />
            {/* map */}
            <Map_Board />
        </div>
    );
}

function Data_Board() {
    return (
        <div className='bg-white text-black h-[50vh] sm:h-[100vh] sm:w-[45vw]'>
            <div className='h-full w-full flex items-center justify-center'>
                <p>Data Board</p>
            </div>
        </div>
    );
}

function Map_Board() {
    return (
        <div className='text-white bg-black h-[50vh] sm:h-[100vh] sm:w-[55vw]'>
            <div className='h-full w-full flex items-center justify-center'>
                <p>Map Board</p>
            </div>
        </div>
    );
}
