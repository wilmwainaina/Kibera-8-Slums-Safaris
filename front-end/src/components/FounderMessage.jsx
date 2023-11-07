import React from "react";
import { motion } from "framer-motion";

function FounderMessage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="card mb-5 mt-5 p-5 howewereest"
      style={{ maxWidth: "1500px" }}
    >
      <h5 className="card-header text-xl font-semibold">
        A MESSAGE FROM OUR FOUNDER DR. NOELLE MAINGI
      </h5>
      <div className="card-body">
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil officia alias earum deserunt enim molestias
                voluptas placeat sint odit numquam mollitia, rerum qui laboriosam perspiciatis fugiat aspernatur? Commodi
                illum nostrum provident libero impedit voluptates aperiam quaerat aspernatur maxime laborum beatae labore
                numquam praesentium necessitatibus cupiditate saepe neque, aliquam adipisci! Quasi a tenetur magnam
                dignissimos similique temporibus, inventore tempora suscipit, maiores ex libero consequatur itaque rerum
                voluptate porro fugit neque in maxime vero aliquid. Dolore magnam temporibus iusto sapiente blanditiis,
               autem ea possimus nesciunt et quis aliquid a sed dolor illo neque nemo odit quae deserunt accusamus dolores
                 debitis est libero.dignissimos similique temporibus, inventore tempora suscipit, maiores ex libero consequatur itaque rerum
                voluptate porro fugit neque in maxime vero aliquid. Dolore magnam temporibus iusto sapiente blanditiis,
                autem ea possimus nesciunt et quis aliquid a sed dolor illo neque nemo odit quae deserunt accusamus dolores
                debitis est libero</p>

      </div>
    </motion.div>
  );
}

export default FounderMessage;


