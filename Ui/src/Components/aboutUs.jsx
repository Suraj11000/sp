import { Fragment } from "react";
import topImg from "../assets/topRound.png";
import { FaCheck } from "react-icons/fa";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
const About = () => {
  return (
    <Fragment>
      <div className="flex flex-col gap-14 md:flex-row justify-center items-center px-6 md:px-8 lg:px-16 xl:px-24">
        <div className="grid grid-cols-2 grid-rows-2 gap-8 w-full lg:w-1/2 abcard">
          <div className="border relative rounded-3xl pt-8">
            <img src={topImg} alt="" className="absolute top-0 right-[0]" />
            <div className=" px-5">
              <h1 className="text-4xl text-[#1d3557] font-bold mb-3">50+</h1>
              <p className="">Professional</p>
              <p>Developers</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-[#1d3557] rounded-b-3xl py-3"></div>
          </div>
          <div className="border relative rounded-3xl pt-8">
            <img src={topImg} alt="" className="absolute top-0 right-[0]" />
            <div className=" px-5">
              <h1 className="text-4xl text-[#ffc7a2] font-bold mb-3">200+</h1>
              <p className="">Project successfully</p>
              <p>completed</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-[#ffc7a2] rounded-b-3xl py-3"></div>
          </div>
          <div className="border relative rounded-3xl pt-8">
            <img src={topImg} alt="" className="absolute top-0 right-[0]" />
            <div className=" px-5">
              <h1 className="text-4xl text-[#e63946] font-bold mb-3">200+</h1>
              <p className="">Project successfully</p>
              <p>completed</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-[#e63946] rounded-b-3xl py-3"></div>
          </div>
          <div className="border relative rounded-3xl pt-8">
            <img src={topImg} alt="" className="absolute top-0 right-[0]" />
            <div className=" px-5">
              <h1 className="text-4xl text-[#457b9d] font-bold mb-3">200+</h1>
              <p className="">Project successfully</p>
              <p>completed</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-[#457b9d] rounded-b-3xl py-3"></div>
          </div>
        </div>
        <div className=" w-full lg:w-1/2">
          <h3 className="text-lg text-red-500 capitalize font-medium relative mb-[35px] before:content-[''] before:absolute before:bg-red-500 before:h-0.5 before:box-border before:w-[75px] before:left-0 before:-bottom-2.5">
            About Us
          </h3>
          <h1>Empowering Businesses with Cutting-Edge Solutions</h1>
          <p className=" mb-5">
            At SR INFOTECH, our passion is to empower online retailers and
            businesses with top-notch services that set them apart. Our journey
            began with a vision to create an exclusive portfolio of offerings,
            establishing our company as a recognizable leader in the industry.
          </p>
          <p>
            We are a team of more than 50+ highly professional web & app
            developers dedicated to your success. With a focus on delivering
            exceptional results, we offer a wide range of services tailored to
            meet your unique needs.
          </p>
          <ul className="flex flex-wrap gap-2">
            <li className="flex gap-3 items-center ">
              <FaCheck className=" mb-4 text-red-500" />{" "}
              <p className="max-w-60">Android, iOS & Windows App Development</p>
            </li>
            <li className="flex gap-3 items-center">
              <FaCheck className=" mb-4 text-red-500" />{" "}
              <p className="max-w-60">High-Level Animation/Video Integration</p>
            </li>
            <li className="flex gap-3 items-center">
              <FaCheck className=" mb-4 text-red-500" />{" "}
              <p className="max-w-60 mb-4">Website Development</p>
            </li>
          </ul>
          <div className="flex gap-4 mt-5">
            <div>
              <button className=" bg-red-500 px-6 py-2 font-bold text-white rounded-full">
                View Services
              </button>
            </div>

            <div className="social-links flex">
              <a
                href="#"
                className="flex justify-center items-center h-10 w-10 bg-[#1d3557] text-center leading-10 text-[white] transition-all duration-[0.5s] ease-[ease] ml-0 mr-2.5 mt-0 mb-2.5 rounded-[50%] hover:bg-red-500"
              >
                <FaFacebookF className="text-xl" />
              </a>
              <a
                href="#"
                className="flex justify-center items-center h-10 w-10 bg-[#1d3557] text-center leading-10 text-[white] transition-all duration-[0.5s] ease-[ease] ml-0 mr-2.5 mt-0 mb-2.5 rounded-[50%]  hover:bg-red-500"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="#"
                className="flex justify-center items-center h-10 w-10 bg-[#1d3557] text-center leading-10 text-[white] transition-all duration-[0.5s] ease-[ease] ml-0 mr-2.5 mt-0 mb-2.5 rounded-[50%] hover:bg-red-500"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="#"
                className="flex justify-center items-center h-10 w-10 bg-[#1d3557] text-center leading-10 text-[white] transition-all duration-[0.5s] ease-[ease] ml-0 mr-2.5 mt-0 mb-2.5 rounded-[50%] hover:bg-red-500"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
