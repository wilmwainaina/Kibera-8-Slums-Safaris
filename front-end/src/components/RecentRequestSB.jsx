import React from "react";
import RecentRequests from "./RecentRequests";
import Sidebar from "./SideBar";

function RecentRequestsSB(){
  
    return(
        <div>
            <Sidebar/>
            <div className="">
            <RecentRequests/>
            </div>
        </div>
    )
}

export default RecentRequestsSB