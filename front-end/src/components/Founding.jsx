

import React from "react";
import { motion } from "framer-motion";

function Founding() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="card mb-6 mt-5 howewereest"
      style={{ maxWidth: "1500px" }}
    >
      <div className="row g-0">
        <div className="col-md-4 mt-24">
          <img
            src="https://www.shutterstock.com/image-photo/nairobi-kenya-august-2019-kibera-600w-1914202510.jpg"
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8 bg-gray-100 shadow-lg py-24 px-14">
          <div className="card-body">
            <h5 className="card-title text-xl font-semibold">
              How we were established
            </h5>
            <p className="card-text">
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
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Founding;

