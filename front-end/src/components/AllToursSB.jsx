import React from "react";
import AllTours from "./AllTours";
import Sidebar from "./SideBar";

function AllToursSB(){
    return( 
        <div className="mb-24">
            <Sidebar/>
            <AllTours/>

        </div>
    )
}
export default AllToursSB