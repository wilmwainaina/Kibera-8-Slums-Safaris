import React from 'react';
import { useNavigate } from 'react-router-dom';

function DidYouKnow() {
  const navigate= useNavigate()
  const handledidyouknowclick=()=>{

    navigate("/facts")
  }


  return (
    <div >
    <div className="card w-75  didykcard mb-16  ml-44 bg-gray-100 shadow-lg py-24 px-14">
  <div className="card-body">
    <h5 className="card-title text-xl font-semibold">Did You Know?</h5>
    <p className="card-text">
    Kibera is also home to a mix of people from various Kenyan tribes, as well as immigrants from neighboring countries like Uganda, Tanzania, and South Sudan. This diverse population contributes to the rich cultural fabric and dynamic social life within the community.
      </p>
    <p>
    Kibera has a unique and intricate system of micro-businesses and informal economies. Despite the lack of formal job opportunities, many residents have established small businesses within the slum, ranging from small food stalls and shops to craft workshops. This entrepreneurial spirit is a testament to the resilience and creativity of Kibera's residents, who often find innovative ways to make a living in challenging circumstances.

       </p>
    <p>
    Kibera is also home to a mix of people from various Kenyan tribes, as well as immigrants from neighboring countries like Uganda, Tanzania, and South Sudan. This diverse population contributes to the rich cultural fabric and dynamic social life within the community.

      </p>
    <a href="#" className="btn btn-primary btn-lg learnmore mt-4 " style={{backgroundColor:"#027884"}} onClick={handledidyouknowclick}>Learn More</a>
  </div>
</div>    </div>
  );
}

export default DidYouKnow;
