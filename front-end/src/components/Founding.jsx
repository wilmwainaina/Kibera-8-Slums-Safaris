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
              <p className="card-text">
                Our journey began by working with a similar organization
                dedicated to improving the lives of marginalized communities in
                various slums. Drawing inspiration from the impactful work and
                life-changing initiatives witnessed during our involvement with
                this organization, we felt a profound sense of purpose and a
                calling to make a difference. Motivated by the transformative
                changes we witnessed within these communities, we embarked on
                our own mission to bring hope and positive change to the lives
                of those residing in Kibera slums. The experiences and lessons
                learned while working with the previous organization became the
                foundation upon which we built our own initiatives, emphasizing
                the importance of healthcare access, education, vocational
                training, and skill development. This journey has been a
                testament to the power of collective efforts in addressing the
                immediate needs of slum residents while nurturing long-term
                self-sufficiency and empowerment.
              </p>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Founding;
