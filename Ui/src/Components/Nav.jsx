import { Fragment, useRef, useState, useEffect } from "react";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import logo from "../assets/srLogo.png";
import Home from "./HomePage";
import About from "./aboutUs";
import Services from "./Services";
import Strategy from "./Strategy";
import What from "./whatDo";
import Task from "./task";

import Contact from "./Contact";
import Tech from "./tech";
import Oppor from "./Oppor";
import Info from "./info";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";

import { FaBars } from "react-icons/fa6";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!menuRef.current || !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const techRef = useRef(null);
  const opporRef = useRef(null);
  const strategyRef = useRef(null);
  const whatRef = useRef(null);
  const taskRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleSelectChange = (e) => {
    const value = e.target.value;
    switch (value) {
      case "strategy":
        scrollToRef(strategyRef);
        break;
      case "what":
        scrollToRef(whatRef);
        break;
      case "task":
        scrollToRef(taskRef);
        break;
      default:
        break;
    }
  };

  return (
    <Fragment>
      <Info />
      <nav className="sticky top-0 z-50 bg-white">
        <div className="flex flex-wrap px-12 justify-between items-center md:mt-5 bg-[#fbfbfb]">
          <div>
            <img src={logo} alt="" width={120} />
          </div>
          <div className=" hidden md:block">
            <div className=" flex gap-8 flex-wrap">
              <ul className=" flex justify-between items-center gap-8 font-semibold g">
                <li onClick={() => scrollToRef(homeRef)}>Home</li>
                <li onClick={() => scrollToRef(opporRef)}>Opportunity</li>
                <li onClick={() => scrollToRef(contactRef)}>Contact</li>
              </ul>
              <div className="flex gap-5 font-semibold">
                <select onChange={(e) => handleSelectChange(e)}>
                  <option value="null">More</option>
                  <option value="strategy">Our Strategy</option>
                  <option value="what">What We Do</option>
                  <option value="task">Task We Do</option>
                </select>
              </div>
              <div>
                <div className="social-links flex justify-center items-center gap-3 mt-2">
                  <a
                    href="#"
                    className="flex justify-center items-center h-7 w-7 bg-[black] text-center leading-10 text-[white] transition-all duration-[0.5s] ease-[ease] ml-0 mr-2.5 mt-0 mb-2.5 rounded-[50%] hover:text-[white] hover:bg-red-500"
                  >
                    <FaFacebookF className="text-xl" />
                  </a>
                  <a
                    href="#"
                    className="flex justify-center items-center h-7 w-7 bg-[black] text-center leading-10 text-[white] transition-all duration-[0.5s] ease-[ease] ml-0 mr-2.5 mt-0 mb-2.5 rounded-[50%] hover:text-[white] hover:bg-red-500"
                  >
                    <FaTwitter className="text-xl" />
                  </a>

                  <a
                    href="#"
                    className="flex justify-center items-center h-7 w-7 bg-[black] text-center leading-10 text-[white] transition-all duration-[0.5s] ease-[ease] ml-0 mr-2.5 mt-0 mb-2.5 rounded-[50%] hover:text-[white] hover:bg-red-500"
                  >
                    <FaLinkedinIn className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div ref={menuRef} className="md:hidden text-start">
            <div
              className={`hamburger relative text-2xl hover:scale-110`}
              onClick={toggleMenu}
            >
              <FaBars id="menu" className={menuOpen ? "open" : ""} />
            </div>
            {menuOpen && (
              <div className="flex flex-col gap-8 flex-wrap">
                <ul className="flex flex-col justify-between items-center gap-8 font-semibold">
                  <li onClick={() => scrollToRef(homeRef)}>Home</li>
                  <li onClick={() => scrollToRef(opporRef)}>Opportunity</li>
                  <li onClick={() => scrollToRef(contactRef)}>Contact</li>
                </ul>
                <div className="gap-5 font-semibold">
                  <select onChange={(e) => handleSelectChange(e)}>
                    <option value="null">More</option>
                    <option value="strategy">Our Strategy</option>
                    <option value="what">What We Do</option>
                    <option value="task">Task We Do</option>
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      <main>
        <div>
          <div className=" mt-5 md:mt-20" ref={homeRef}>
            <Home />
          </div>
          <div className=" mt-32 md:mt-60" ref={aboutRef}>
            <About />
          </div>
          <div className="mt-32" ref={servicesRef}>
            <Services />
          </div>
          <div className="mt-32" ref={techRef}>
            <Tech />
          </div>
          <div className="mt-32" ref={opporRef}>
            <Oppor />
          </div>
          <div className="mt-32" ref={strategyRef}>
            <Strategy />
          </div>
          <div className="mt-32" ref={whatRef}>
            <What />
          </div>
          <div className="mt-32" ref={taskRef}>
            <Task />
          </div>
          {/* <div className="mt-32">
            <Test />
          </div> */}
          <div className="mt-32" ref={contactRef}>
            <Contact />
          </div>
          <div>
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
                          <p className="text-white text-base leading-8">
                            Banglore
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
                      <li
                        className=" cursor-pointer hover:font-semibold text-white flex gap-1 items-center leading-8"
                        onClick={() => scrollToRef(homeRef)}
                      >
                        <FaAngleRight />
                        Home
                      </li>
                      <li
                        className=" cursor-pointer hover:font-semibold text-white flex gap-1 items-center leading-8"
                        onClick={() => scrollToRef(aboutRef)}
                      >
                        <FaAngleRight />
                        About Us
                      </li>
                      <li
                        className=" cursor-pointer hover:font-semibold text-white flex gap-1 items-center leading-8"
                        onClick={() => scrollToRef(servicesRef)}
                      >
                        <FaAngleRight />
                        Our Services
                      </li>
                      <li
                        className=" cursor-pointer hover:font-semibold text-white flex gap-1 items-center leading-8"
                        onClick={() => scrollToRef(contactRef)}
                      >
                        <FaAngleRight />
                        Contact Us
                      </li>
                    </ul>
                  </div>
                  <div className=" px-[15px] py-0">
                    <h4 className="text-xl text-[white] capitalize font-medium relative mb-[35px]">
                      follow us
                    </h4>
                    <p className=" text-white">
                      SR INFOTECH is a Bangalore-based startup dedicated to
                      empowering businesses with end-to-end services on major
                      online portals in India. Our team excels in digital
                      marketing, web, and app development. We are committed to
                      helping retailers and companies thrive online, serving as
                      a one-stop solution for enhancing your online presence.
                    </p>
                  </div>
                </div>
              </div>
              <hr className=" mt-6" />
              <p className=" text-white flex justify-center mt-4">
                © 2024{" "}
                <span className="text-red-700 font-bold"> SR INFOTECH </span> |
                All Right Reserved
              </p>
            </footer>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default Nav;
