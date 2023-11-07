import React from 'react';
import { useNavigate } from 'react-router-dom';

function DidYouKnow() {
  const navigate= useNavigate()
  const handledidyouknowclick=()=>{

    navigate("/admin")
  }


  return (
    <div >
    <div className="card w-75  didykcard mb-16  ml-44 bg-gray-100 shadow-lg py-24 px-14">
  <div className="card-body">
    <h5 className="card-title text-xl font-semibold">Did You Know?</h5>
    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil officia alias earum deserunt enim molestias voluptas placeat sint odit numquam.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil officia alias earum deserunt enim molestias voluptas placeat sint odit numquam</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil officia alias earum deserunt enim molestias voluptas placeat sint odit numquam</p>
    <a href="#" className="btn btn-primary btn-lg learnmore mt-4 " style={{backgroundColor:"#027884"}} onClick={handledidyouknowclick}>Learn More</a>
  </div>
</div>    </div>
  );
}

export default DidYouKnow;
