import { Fragment } from "react";
import task from "../assets/taskImg.gif";
const Task = () => {
  return (
    <Fragment>
      <div className="flex px-6 xl:gap-60 w-[100%] flex-col md:flex-row justify-center items-center md:px-8 lg:px-16 xl:px-24">
        <div className="">
          <p className="text-lg text-red-500 capitalize font-medium relative mb-[35px] before:content-[''] before:absolute before:bg-red-500 before:h-0.5 before:box-border before:w-[110px] before:left-0 before:-bottom-2.5">
            Task We Do
          </p>
          <h1 className=" text-3xl font-bold">In Web & App Development</h1>
          <ul>
            <li className="flex items-center transition-all duration-300 hover:bg-[#f4f8f8] mb-4 mt-4">
              <p className="text-2xl font-semibold text-[#959595] hover:text-[#3a3a3a]">
                1
              </p>
              <p className="ml-[-5px] hover:ml-10 font-semibold">
                Maintenance and Support
              </p>
            </li>
            <li className="flex items-center transition-all duration-300 hover:bg-[#f4f8f8] mb-4">
              <p className="text-2xl font-semibold text-[#959595] hover:text-[#3a3a3a]">
                2
              </p>
              <p className="ml-[-5px] hover:ml-10 font-semibold">
                Quality Testing and Assurance
              </p>
            </li>
            <li className="flex items-center transition-all duration-300 hover:bg-[#f4f8f8] mb-4">
              <p className="text-2xl font-semibold text-[#959595] hover:text-[#3a3a3a]">
                3
              </p>
              <p className="ml-[-5px] hover:ml-10 font-semibold">
                Mobile App Development (Android, iOS, Windows)
              </p>
            </li>
            <li className="flex items-center transition-all duration-300 hover:bg-[#f4f8f8] mb-4">
              <p className="text-2xl font-semibold text-[#959595] hover:text-[#3a3a3a]">
                4
              </p>
              <p className="ml-[-5px] hover:ml-10 font-semibold">
                Customized Solutions for Your Business
              </p>
            </li>
            <li className="flex items-center transition-all duration-300 hover:bg-[#f4f8f8] mb-4">
              <p className="text-2xl font-semibold text-[#959595] hover:text-[#3a3a3a]">
                5
              </p>
              <p className="ml-[-5px] hover:ml-10 font-semibold">
                Website Development
              </p>
            </li>
            <li className="flex items-center transition-all duration-300 hover:bg-[#f4f8f8] mb-4">
              <p className="text-2xl font-semibold text-[#959595] hover:text-[#3a3a3a]">
                6
              </p>
              <p className="ml-[-5px] hover:ml-10 font-semibold">
                User Interface (UI) and User Experience (UX) Design
              </p>
            </li>
            <li className="flex items-center transition-all duration-300 hover:bg-[#f4f8f8] mb-4">
              <p className="text-2xl font-semibold text-[#959595] hover:text-[#3a3a3a]">
                7
              </p>
              <p className="ml-[-5px] hover:ml-10 font-semibold">
                Content Management System (CMS) Developme
              </p>
            </li>
            <li className="flex items-center transition-all duration-300 hover:bg-[#f4f8f8] mb-4 ease-in-out">
              <p className="text-2xl font-semibold text-[#959595] hover:text-[#3a3a3a]">
                8
              </p>
              <p className="ml-[-5px] hover:ml-10 font-semibold">
                Mobile Responsive Design
              </p>
            </li>
            <li className="flex items-center transition-all duration-300 hover:bg-[#f4f8f8] mb-4 ease-in-out">
              <p className="text-2xl font-semibold text-[#959595] hover:text-[#3a3a3a]">
                9
              </p>
              <p className="ml-[-5px] hover:ml-10 font-semibold">
                API Integration and Development
              </p>
            </li>
            <li className="flex items-center transition-all duration-300 hover:bg-[#f4f8f8] mb-4 ease-in-out">
              <p className="text-2xl font-semibold text-[#959595] hover:text-[#3a3a3a]">
                10
              </p>
              <p className="ml-[-16px] hover:ml-10 font-semibold">
                Cross-Platform Development
              </p>
            </li>
          </ul>
        </div>
        <div>
          <img src={task} alt="" className=" w-[32rem]" />
        </div>
      </div>
    </Fragment>
  );
};
export default Task;
