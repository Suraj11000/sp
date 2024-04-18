import { Fragment } from "react";
import lapImg from "../assets/Firmware.gif";
import heroImg from "../assets/banner.png";
import { FaChevronRight } from "react-icons/fa6";

const Home = () => {
  return (
    <Fragment>
      <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-8 lg:px-16 xl:px-24">
        <div className="w-full md:w-3/5 lg:w-1/2 mr-0 md:mr-8 mb-8 md:mb-0">
          <h3 className="text-red-500 md:text-xl font-semibold md:mb-3">
            Empowering Your Business
          </h3>
          <h1 className="text-[#011a41] text-lg md:text-3xl font-bold md:mb-6">
            Transform Your Ideas into Reality
          </h1>
          <p className="md:mb-12 mb-2">
            We are a team of over 50+ highly professional developers and experts
            in web & app development. Our goal is to achieve 100% customer
            satisfaction by delivering cutting-edge solutions for your business.
            From Android, iOS, and Windows app development, we cover it all. Let
            us enhance your online presence with high-level animations and
            videos that captivate your audience. Trust SR INFOTECH to elevate
            your business to new heights with our expertise in web and app
            development.
          </p>
          <div className="flex flex-row items-center gap-5">
            <button className="bg-[#1d3557] hover:bg-red-500 text-white font-bold px-6 py-2 rounded-full text-lg md:mb-0 md:mr-4">
              Contact Us
            </button>
            <div className="flex items-center">
              <FaChevronRight size={44} className="bg-red-500 rounded-full p-1 text-white mr-2" />
              <button className="text-red-500 hover:text-white font-bold px-6 py-2 rounded-full text-lg">
                Explore
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 relative z-0">
          <img src={heroImg} alt="" className="w-full" />
          <img src={lapImg} alt="" className="w-28 absolute bottom-2 z-10" />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
