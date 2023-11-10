import React from "react";
import { motion } from "framer-motion";

function IntroductionAK() {
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
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">
              Welcome To Kibera: A Window into Nairobi's Vibrant Community
            </h1>
            <p>
              Welcome to Kibera, a vibrant window into Nairobi's diverse
              community. Kibera is a place where life's stories unfold with
              remarkable resilience and unity. The winding pathways of Kibera echo tales of
              strength, tenacity, and unbreakable spirit. It's a community where
              diversity thrives, showcasing the triumph of humanity over
              adversity.
            </p>
            <br></br>

            <p>
              In the heart of Kibera, amidst the colorful streets and lively
              neighborhoods, you'll find a microcosm of life's extraordinary
              journey. The people of Kibera come from diverse backgrounds,
              creating a vibrant mosaic of cultures and experiences. Amidst the
              challenges, this community is bound by a shared determination to
              rise above adversity.
            </p>
            <br></br>

            <p>
              Whether you're wandering through the bustling markets, engaging
              with local artisans, or simply experiencing everyday life, Kibera
              offers a unique perspective that reminds us of the resilience of
              the human spirit. Kibera is more than a place; it's an inspiring testament
              to the strength and unity that emerges when people come together
              to create a brighter future.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://kenyapage.net/pictures/kibera/large.jpg"
              alt="Kibera"
              className="rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default IntroductionAK;
