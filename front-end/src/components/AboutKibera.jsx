import React from "react";
import HeaderAK from "./HeaderAK";
import IntroductionAk from "./IntroductionAK";
import HistoryAK from "./HistoryAK";
import Footer from "./Footer";

function AboutKibera(){
    return(
        <div >
            <HeaderAK/>
            <IntroductionAk/>
            <div className="mt-12"> 
            <HistoryAK/>
            </div>
            <Footer />
        </div>
    )
}

export default AboutKibera

