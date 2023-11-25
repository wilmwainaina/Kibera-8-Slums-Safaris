// import React from "react";

import React from "react";
import { motion } from "framer-motion";
import Population from "./Population";
import Challenges from "./Challenges";
import HeaderAK from "./HeaderAK";

function Facts() {
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
        <Population />
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Challenges />
      </motion.div>
    </div>
  );
}

export default Facts;
