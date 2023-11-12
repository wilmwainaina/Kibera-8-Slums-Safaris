import React from "react";

const coreValues = [
  {
    title: "Mission Oriented",
    description:
    "Committed to delivering exceptional customer experiences while respecting our community, culture, and environment.",
  },
  {
    title: "Vision Driven",
    description:
      "Our vision is to create unforgettable experiences for our clients, helping them achieve their travel desires and goals.",
  },
  {
    title: "Adaptable",
    description: "We respond effectively to changing needs and circumstances, ensuring flexibility in all aspects of our service.",
  },
];

function OurCoreValues() {
  return (
    <div className="relative w-full h-96 bg-cover bg-center">
      <img
        src="https://www.shutterstock.com/image-photo/nairobi-kenya-august-2019-kibera-600w-1914202510.jpg"
        alt="Core Values Background"
        className="absolute inset-0 w-full h-full object-cover filter blur-md"
      />

      <div className="absolute inset-0 flex items-center justify-center  bg-opacity-70 text-white">
        <h2 className="text-3xl font-bold mb-44">WE ARE:</h2>
        <div className="flex flex-wrap justify-center items-center  space-x-20">
          {coreValues.map((coreValue, index) => (
            <div
              key={index}
              className="core-values-container p-6 w-64 rounded-lg  border border-#027884 text-center shadow-xl"
            >
              <h1 className="core-values-title text-2xl font-bold mb-4">
                {coreValue.title}
              </h1>
              <p className="core-values-description text-white">
                {coreValue.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurCoreValues;
