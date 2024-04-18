import { Fragment } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";

const Info = () => {
  return (
    <Fragment>
      <div className=" flex flex-wrap justify-between items-center md:py-2 md:px-12 px-6">
        <div>
          <ul className=" flex justify-between items-center gap-6">
            <li>
              <div className=" flex justify-between items-center gap-1 text-sm">
                <FaLocationDot className=" text-red-500" /> <p>Banglore</p>
              </div>
            </li>
            <li>
              <div className=" flex justify-between items-center gap-1 text-sm">
                <FaClock className=" text-red-500" />
                <p>9.00 am - 9.00 pm</p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul className=" flex justify-between items-center gap-6">
            <li>
              <div className=" flex justify-between items-center gap-1 text-sm">
                <IoMdCall className=" text-red-500" /> <p>+918877249744 </p>
              </div>
            </li>
            <li>
              <div className=" flex justify-between items-center gap-1 text-sm">
                <IoMdCall className=" text-red-500" />
                <p>+918073983005</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </Fragment>
  );
};

export default Info;
