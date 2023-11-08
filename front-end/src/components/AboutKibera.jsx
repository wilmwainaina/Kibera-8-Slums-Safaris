import React from "react";
import HeaderAK from "./HeaderAK";
import IntroductionAk from "./IntroductionAK";
import HistoryAK from "./HistoryAK";


function AboutKibera(){
    return(
        <div className="mt-96">
            <HeaderAK/>
            <IntroductionAk/>
            <div className="mt-12"> 
            <HistoryAK/>
            </div>
            
        </div>
    )
}

export default AboutKibera

