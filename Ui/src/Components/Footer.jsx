import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#011a41] mt-20 py-[30px] font-Poppins">
      <div className="mt-8 m-auto flex px-10">
        <div className=" px-10 gap-10 flex-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          <div className=" px-[15px] py-0">
            <h4 className="text-xl text-[white] capitalize font-medium relative mb-[25px] ">
              SR INFOTECH
            </h4>
            <ul className=" leading-10">
              <li>
                <div className=" flex items-center gap-2 text-sm">
                  <FaLocationDot className=" text-white" size={20} />{" "}
                  <p className="text-white text-base leading-8">Banglore</p>
                </div>
              </li>
              <li>
                <div className=" flex items-center gap-2 text-sm">
                  <IoMdCall className=" text-white" size={20} />
                  <p className="text-white text-base leading-8">
                    {" "}
                    +918877249477
                  </p>
                </div>
              </li>
              <li>
                <div className=" flex items-center gap-2 text-sm">
                  <IoMdCall className=" text-white" size={20} />
                  <p className="text-white text-base leading-8">
                    {" "}
                    +918877249477
                  </p>
                </div>
              </li>
              <li>
                <div className=" flex items-center gap-2 text-sm">
                  <IoMail className=" text-white" size={20} />
                  <p className="text-white text-base leading-8">
                    xyz@gmail.com
                  </p>
                </div>
              </li>
            </ul>
            <div className="social-links flex mt-4">
              <a
                href="#"
                className="flex justify-center items-center h-10 w-10  text-center leading-10 text-[white] transition-all duration-[0.5s] ease-[ease] ml-0 mr-2.5 mt-0 mb-2.5 rounded-[50%] border hover:text-[black] hover:bg-[white]"
              >
                <FaFacebookF className="text-xl" />
              </a>
              <a
                href="#"
                className="flex justify-center items-center h-10 w-10 border text-center leading-10 text-[white] transition-all duration-[0.5s] ease-[ease] ml-0 mr-2.5 mt-0 mb-2.5 rounded-[50%] hover:text-[black] hover:bg-[white]"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="#"
                className="flex justify-center items-center h-10 w-10 border text-center leading-10 text-[white] transition-all duration-[0.5s] ease-[ease] ml-0 mr-2.5 mt-0 mb-2.5 rounded-[50%] hover:text-[black] hover:bg-[white]"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="#"
                className="flex justify-center items-center h-10 w-10 border text-center leading-10 text-[white] transition-all duration-[0.5s] ease-[ease] ml-0 mr-2.5 mt-0 mb-2.5 rounded-[50%] hover:text-[black] hover:bg-[white]"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
            </div>
          </div>
          <div className=" px-[15px] py-0">
            <h4 className="text-xl text-[white] capitalize font-medium relative mb-[35px] ">
              Quick Links
            </h4>
            <ul>
              <li className=" cursor-pointer hover:font-semibold text-white flex gap-1 items-center leading-8">
                <FaAngleRight />
                Home
              </li>
              <li className=" cursor-pointer hover:font-semibold text-white flex gap-1 items-center leading-8">
                <FaAngleRight />
                About Us
              </li>
              <li className=" cursor-pointer hover:font-semibold text-white flex gap-1 items-center leading-8">
                <FaAngleRight />
                Our Services
              </li>
              <li className=" cursor-pointer hover:font-semibold text-white flex gap-1 items-center leading-8">
                <FaAngleRight />
                Pricing
              </li>
              <li className=" cursor-pointer hover:font-semibold text-white flex gap-1 items-center leading-8">
                <FaAngleRight />
                Contact Us
              </li>
              <li className=" cursor-pointer hover:font-semibold text-white flex gap-1 items-center leading-8">
                <FaAngleRight />
                Refund Policy
              </li>
            </ul>
          </div>
          <div className=" px-[15px] py-0">
            <h4 className="text-xl text-[white] capitalize font-medium relative mb-[35px]">
              follow us
            </h4>
            <p className=" text-white">
              SR INFOTECH is a Bangalore-based startup dedicated to empowering
              businesses with end-to-end services on major online portals in
              India. Our team excels in digital marketing, web, and app
              development. We are committed to helping retailers and companies
              thrive online, serving as a one-stop solution for enhancing your
              online presence.
            </p>
          </div>
        </div>
      </div>
      <hr className=" mt-6" />
      <p className=" text-white flex justify-center mt-4">
        © 2024 <span className="text-red-700 font-bold"> SR INFOTECH </span> |
        All Right Reserved
      </p>
    </footer>
  );
};

export default Footer;
