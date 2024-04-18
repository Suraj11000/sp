import { Fragment } from "react";
import whatImg from "../assets/whatImg.gif";
import { FaCheck } from "react-icons/fa";
const What = () => {
  return (
    <Fragment>
      <div className="flex px-6  xl:gap-28 flex-col md:flex-row justify-center items-center md:px-8 lg:px-16 xl:px-24">
        <div>
          <img src={whatImg} alt="" className=" w-[80rem]"/>
        </div>
        <div>
          <h3 className="text-lg text-red-500 capitalize font-medium relative mb-[35px] before:content-[''] before:absolute before:bg-red-500 before:h-0.5 before:box-border before:w-[110px] before:left-0 before:-bottom-2.5">
            What We Do
          </h3>
          <p className="mb-5">
            At SR INFOTECH, we offer a comprehensive range of digital services
            to empower businesses for success. We specialize in three core
            areas:
          </p>
          <ul>
          <li className="mb-5">
              <div className=" flex items-center gap-2">
                <FaCheck className=" mb-5 text-red-500" />
                <h5 ><span className=" text-red-500 font-bold">Web Development:</span>                   Our expert team of developers creates innovative and
                  user-friendly websites tailored to your specific needs. We
                  blend creativity and functionality to provide an outstanding
                  online presence for your business.</h5>
              </div>
            </li>
            <li className="mb-5">
              <div className=" flex items-center gap-2">
                <FaCheck className="mb-5 text-red-500" />
                <h5 ><span className=" text-red-500 font-bold">Web Development:</span>                   Our expert team of developers creates innovative and
                  user-friendly websites tailored to your specific needs. We
                  blend creativity and functionality to provide an outstanding
                  online presence for your business.</h5>
              </div>
            </li>
            <p>
              SR INFOTECH is your one-stop solution to achieve success in web
              and app development.
            </p>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default What;
