


import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function AllTours() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const handleViewMoreClick = () => {
    navigate('/aboutkibera');
  }

  return (
    <div>
      <div className='ml-72'>
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >

      <div className="mostpopularTitle">
        <h3 className="text-black text-2xl ml-36 mb-6 mt-6 font-bold">All Tours</h3>
      </div>

      <div className="mostpopularbody ml-36 max-w-screen-xl bg-gray-100 shadow-lg py-24 px-14">
        <div className="containermostpopular ml-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="cardmostpopular"
          >
            <div className="card-header">
              <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/c1/9a/06.jpg" alt="rover" />
            </div>
            <div className="card-bodymostpopular">
              <h1 className='font-bold  text-xl mb-3'>Victoria Crafts</h1>
              <p className="text-black">
            This is a a collective that is at the forefront of collecting trash and repurposing as jewelry. The group is collecting old and fresh bones, brass, and horns, transforming them into jewelry, bowls, and trinkets.          
                </p>
              <button
                type="button"
                className="btn btn-primary btn-lg learnmore mt-11"
                style={{ backgroundColor: "#027884" }}
              >
                Know More
              </button>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="cardmostpopular"
          >
            <div className="card-header">
              <img src="https://genetsafaris.com/wp-content/uploads/2016/09/kibera-slum.jpg" alt="balloons" />
            </div>
            <div className="card-bodymostpopular">
            <h1 className='font-bold  text-xl mb-3'> Power Women Group-</h1>

              <p className="text-black">
             This is a group of 15 women infected and affected by HIV/AIDS. The group was started with the aim of eradicating stigma and discrimination in the society through creation of community awareness on the same disease.              </p>
              <button
                type="button"
                className="btn btn-primary btn-lg learnmore mt-11"
                style={{ backgroundColor: "#027884" }}
              >
                Know More
              </button>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="cardmostpopular"
          >
            <div className="card-header">
              <img src="https://genetsafaris.com/wp-content/uploads/2016/09/kibera-slum.jpg" alt="balloons" />
            </div>
            <div className="card-bodymostpopular">
            <h1 className='font-bold  text-xl mb-3'>SHOFCO</h1>

              <p className="text-black">
              This is a grassroots movement that catalyzes large-scale transformation in urban slums by providing critical services for all, community advocacy platforms, and education and leadership development for women and girls.              </p>
              <button
                type="button"
                className="btn btn-primary btn-lg learnmore mt-11"
                style={{ backgroundColor: "#027884" }}
              >
                Know More
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-primary btn-lg learnmore mt-11 ml-44 viewmore"
          style={{ backgroundColor: "#027884", marginLeft: "415px" }}
          onClick={handleViewMoreClick}
        >
          View More
        </button>
      </div>
    </motion.div>
    </div>
    </div>
  );
}

export default AllTours;
