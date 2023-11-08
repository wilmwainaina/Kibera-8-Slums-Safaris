import React from "react";
import { motion } from "framer-motion";

function HistoryAK(){
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 2 } },
      };
    
      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-gray-100 shadow-lg text-black p-8 mt-0"
        >
          <div className="container mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex justify-center items-center">
                <img
                  src="https://kenyapage.net/pictures/kibera/large.jpg"
                  alt="Kibera"
                  className="rounded-md shadow-lg"
                />
              </div>

              <div className="text-center md:text-left">
                
                <h1 className="text-4xl font-bold mb-4">
                A Historical Overview
                </h1>
                <p>
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet justo non nunc aliquam, quis               tristique erat venenatis. Proin ut orci non sapien ultrices cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet justo non nunc aliquam, quis
                   tristique erat venenatis. Proin ut orci non sapien ultrices cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet justo non nunc aliquam, quis
                  tristique erat venenatis. Proin ut orci non sapien ultrices cursus.              tristique erat venenatis. Proin ut orci non sapien ultrices cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet justo non nunc aliquam, quis
                tristique erat venenatis. Proin ut orci non sapien ultrices cursus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet justo non nunc aliquam, quis
                   tristique erat venenatis. Proin ut orci non sapien ultrices cursus.
    
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      );
        }     

export default HistoryAK

