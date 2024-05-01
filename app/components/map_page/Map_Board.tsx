import { Map_Page_Props } from "./MapPage";

//
export function Map_Board({ data }: Map_Page_Props) {
    const { bg_color } = data;

    return (
        <div
            className='h-[50vh] sm:h-[100vh] sm:w-[55vw]'
            style={{ backgroundColor: bg_color }}
        >
            <div className='h-full w-full '>
                <p>Map Board</p>
            </div>
        </div>
    );
}
