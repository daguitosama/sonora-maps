import { Data_Board } from "./Data_Board";
import { Map_Board } from "./Map_Board";
import { Map_Page_Data } from "../../lib/db/db";

export interface Map_Page_Props {
    data: Map_Page_Data;
}
export function Map_Page({ data }: Map_Page_Props) {
    return (
        <div className='flex flex-col sm:flex-row h-[100vh]'>
            {/* data */}
            <Data_Board data={data} />
            {/* map */}
            <Map_Board data={data} />
        </div>
    );
}
