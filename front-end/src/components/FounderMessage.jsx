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
        A MESSAGE FROM OUR FOUNDER WILLIS
      </h5>
      <div className="card-body">
        <p className="card-text">
          <span>Dear Reader, </span>
          <br></br>
          <br />
          <span>
            Our journey began with a similar organization dedicated to improving
            the lives of marginalized communities in slums. Inspired by the
            transformative changes we witnessed, we founded our organization
            with a mission to bring hope and positive change to the residents of
            Kibera slums. Drawing from our experiences, we prioritize healthcare
            access, quality education, vocational training, and skill
            development. Our journey reflects the power of collective efforts in
            addressing immediate needs while fostering long-term
            self-sufficiency. We are grateful for your support as we continue to
            make a lasting impact in Kibera.
          </span>
          <br></br>
          <br />
          <span>Warm regards,</span>
          <br></br>
          <span>Willis</span>
          <br></br> Founding Member of Kibera 8 Slum Tours
        </p>
      </div>
    </motion.div>
  );
}

export default FounderMessage;
