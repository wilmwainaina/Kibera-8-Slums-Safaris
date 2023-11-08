
import React from "react";
import { motion } from "framer-motion";
import YouTubeVideos from "./YouTubeVideos";
import PhotoGalleryAK from "./Gallery";
import HeaderAK from "./HeaderAK";

function GalleryPart() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  };

  return (
    <div>
      <HeaderAK />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <PhotoGalleryAK />
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <YouTubeVideos />
      </motion.div>
    </div>
  );
}

export default GalleryPart;
