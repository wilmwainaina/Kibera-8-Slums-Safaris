import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";

const labels = ["Male", "Female", "Children"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Population",
      backgroundColor:[
        'rgba(2, 120, 132, 0.2)',   // Adjust the RGB values and alpha (transparency) as needed
        'rgba(2, 120, 132, 0.8)',
        'rgba(2, 120, 132, 2.0)',
    ] ,
      borderColor: "rgb(0,0,0)",
      data: [20, 30, 45],
    },
  ],
};
const Population = () => {
  return (
    <div className=" flex flex-row w-3/4 ml-44 mt-16 bg-gray-100 shadow-lg py-24 px-14">
        <div>
        <p className="text-black">
    Kibera's population is a diverse mix of individuals, including men, women, and children. Understanding the demographics of this community is crucial for various social and developmental initiatives. The pie chart above illustrates the distribution of the population in Kibera as follows:<br/>

    - "Male": Represents the percentage of males within the community.<br/>
    - "Female": Indicates the percentage of females residing in Kibera.<br/>
    - "Children": Reflects the portion of the population comprising children.<br/>

    This data helps in tailoring programs and services to cater to the unique needs of each group. It's essential to address the challenges and opportunities specific to the different demographics in Kibera.

  </p>          </div>
    <div className="flex justify-end items-center w-3/4 h-96">
      <Pie data={data} />
    </div>
    </div>
  );
};
export default Population;