import { Fragment } from "react";
import bulb from "../assets/Light bulb.gif"

const Strategy = () => {
  return (
    <Fragment>
      <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-8 lg:px-16 xl:px-24">
        <div>
          <h3 className="text-lg text-red-500 capitalize font-medium relative mb-[35px] before:content-[''] before:absolute before:bg-red-500 before:h-0.5 before:box-border before:w-[110px] before:left-0 before:-bottom-2.5">Our Strategy</h3>
          <p className="mb-6">
            Our <span className=" text-red-500 font-bold">BRIGHT</span>{" "}
            operational strategy outlined below serves as a compass for all: it
            clearly defines the six pillars on which we are focusing to build
            business sustainably.
          </p>
          <ul>
            <li className="flex items-center gap-5 text-center mb-4">
              <h3 className=" text-white bg-[#1d3557] p-1 px-2 rounded-lg">
                B
              </h3>
              <h3>Best customer experience</h3>
            </li>
            <li className="flex items-center gap-5 text-center mb-4">
              <h3 className=" text-white bg-red-500 p-1 px-2 rounded-lg">R</h3>
              <h3>Returns and efficiency focus</h3>
            </li>
            <li className="flex items-center gap-5 text-center mb-4">
              <h3 className=" text-white bg-[#1d3557] p-1 px-2 rounded-lg">
                I
              </h3>
              <h3>Ignite commercial performance</h3>
            </li>
            <li className="flex items-center gap-5 text-center mb-4">
              <h3 className=" text-white bg-red-500 p-1 px-2 rounded-lg">G</h3>
              <h3>Growth through technology</h3>
            </li>
            <li className="flex items-center gap-5 text-center mb-4">
              <h3 className=" text-white bg-[#1d3557] p-1 px-2 rounded-lg">
                H
              </h3>
              <h3>Hearts and minds</h3>
            </li>
            <li className="flex items-center gap-5 text-center mb-4">
              <h3 className=" text-white bg-red-500 p-1 px-2 rounded-lg">
                T
              </h3>
              <h3>Tight coordination and timely delivey</h3>
            </li>
          </ul>
        </div>
        <div>
          <img src={bulb} alt="" className=" w-[70rem]" />
        </div>
      </div>
    </Fragment>
  );
};

export default Strategy;
