import { Fragment } from "react";
import topRound from "../assets/topRound.png";
import web from "../assets/webimg.png";
import app from "../assets/appImg.png";
import windo from "../assets/windo.png";
import appStore from "../assets/app-store.png";

const Services = () => {
  return (
    <Fragment>
      <div className="px-4 md:px-10 lg:px-20 xl:px-36">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-lg text-red-500 capitalize font-medium relative mb-6 md:mb-[35px] before:content-[''] before:absolute before:bg-red-500 before:h-0.5 before:box-border before:w-[110px] before:left-0 before:-bottom-2.5">
            Our Services
          </h3>
          <h3 className="text-red-500 border-t border-l border-r rounded-t-md rounded-b-none px-3 py-1 mb-8 md:mb-10">
            Web & App Services
          </h3>
        </div>
        <hr className="mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <ServiceCard
            image={web}
            title="Web Development"
            description="Our expert team of developers creates innovative and user-friendly websites using modern technologies. We blend creativity and functionality to provide an outstanding online presence for your business."
          />
          <ServiceCard
            image={app}
            title="App Development"
            description="We specialize in developing custom mobile applications for Android and iOS platforms. From concept to execution, we ensure that your app delivers an exceptional user experience and meets your business objectives."
          />
          <ServiceCard
            image={windo}
            title="Windows App Development"
            description="Our team has extensive experience in developing Windows applications tailored to your specific requirements. We leverage the latest technologies to build robust and scalable apps that run seamlessly on Windows devices."
          />
          <ServiceCard
            image={appStore}
            title="App Store Optimization"
            description="Increase your app's visibility and downloads with our App Store Optimization (ASO) services. We employ proven strategies to optimize your app's keywords, description, and visuals, helping you reach a wider audience and drive more installs."
          />
        </div>
      </div>
    </Fragment>
  );
};

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="border relative rounded-3xl pt-8 px-4 hover:bg-[#1d3557] hover:text-white transition-all duration-[0.9s] ease-[ease]">
      <img src={topRound} alt="" className="absolute top-0 right-[0]" />
      <div className="flex flex-col justify-center items-center text-center">
        <img src={image} alt="" className="w-14 mb-3" />
        <h3 className="font-bold mt-3 mb-4">{title}</h3>
        <p className="mb-4">{description}</p>
      </div>
      <img
        src={topRound}
        alt=""
        className="absolute bottom-0 left-[0] rotate-180"
      />
    </div>
  );
};

export default Services;
