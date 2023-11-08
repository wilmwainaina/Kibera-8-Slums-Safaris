
import React from 'react';
import { motion } from "framer-motion";
import AllTours from './AllTours';
import RecentRequests from './RecentRequests';

function MostPopular() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50, textRendering: "optimizeLegibility" },
    visible: { opacity: 1, y: 0, transition: { duration: 1, textRendering: "optimizeLegibility" } },
  };
  return (
    <div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className='mostpopularTitle'
      >
        <h3 className='text-black text-2xl ml-36 mb-6 mt-6 font-bold'>Most Popular</h3>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className='mostpopularbody ml-36 max-w-screen-xl bg-gray-100 shadow-lg py-24 px-14'
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="containermostpopular ml-12"
        >
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
              <p className='text-black'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  
              </p>
              <button type="button" className="btn btn-primary btn-lg learnmore mt-11"  style={{backgroundColor:"#027884"}}>Know More</button>
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
              <p className='text-black'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </p>
              <button type="button" className="btn btn-primary btn-lg learnmore mt-11"  style={{backgroundColor:"#027884"}}>Know More</button>
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
              <p className='text-black'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </p>
              <button type="button" className="btn btn-primary btn-lg learnmore mt-11"  style={{backgroundColor:"#027884"}}>Know More</button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AllTours />
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <RecentRequests />
      </motion.div>
    </div>
  );
}

export default MostPopular;
