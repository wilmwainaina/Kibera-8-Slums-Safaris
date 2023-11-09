import React from "react";
import { useNavigate } from "react-router-dom";


function HeaderAK(){
  const navigate= useNavigate()
  const handleaboutclick=()=>{
    navigate('/introduction')
  }

  const handlecommunityclick=() =>{
    navigate('/photogallery')
  }

  const handlechallengesclick =()=>{
    navigate('/facts')
  }

    return(
        <div>
            <div className=" ">
      <header className="text-center bg-custom  py-8">
        <h1 className="text-4xl font-bold py-9" style={{backgroundColor:"#027884"}}>Exploring Kibera: A Glimpse into Nairobi's Largest Slum</h1>
      </header>

     

      {/* Content sections go here */}
    </div>
        </div>
    )

}
export default  HeaderAK


