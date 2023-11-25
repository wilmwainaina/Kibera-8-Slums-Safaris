import React from "react";
import { motion } from "framer-motion";

function HistoryAK() {
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
            <h1 className="text-4xl font-bold mb-4">A Historical Overview</h1>
            <p>
              Kibera's history is a rich tapestry woven with the threads of
              resilience and community spirit. The story of Kibera dates back
              many decades, with the community emerging as a vibrant response to
              urbanization and migration. Over the years, Kibera has grown to
              become one of Nairobi's most iconic neighborhoods, home to diverse
              cultures and backgrounds. It has faced its share of challenges,
              yet the spirit of Kibera remains unbreakable, illustrating the
              strength of its people.
            </p>
            <br></br>

            <p>
              The historical journey of Kibera is one of transformation and
              resilience. This remarkable community has not only stood the test
              of time but has also become a symbol of hope and inspiration for
              those who have had the privilege to witness its story. Kibera's
              history is a testament to the enduring human spirit in the face of
              adversity.
            </p>
            <br></br>
            <p>
              Kibera's transformation over the years highlights its unique place
              in Nairobi's history. From its beginnings as an informal
              settlement to a vibrant, resilient community, Kibera has defied
              the odds and continues to inspire with its unwavering spirit. This
              historical journey serves as a reminder of the incredible
              potential for positive change even in the most challenging
              circumstances.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default HistoryAK;
