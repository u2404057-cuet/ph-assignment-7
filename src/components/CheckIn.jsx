import React from "react";
import { FaVideo } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdOutlineTextsms } from "react-icons/md";

const CheckIn = ({name}) => {

    

    console.log(name);
  return (
    <>
      <h3 className="text-lg">Quick Check-In</h3>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
        <button className="btn min-h-10 md:h-full  ">
          <IoCall />
          Call
        </button>
        <button className="btn min-h-10 md:h-full">
          <MdOutlineTextsms />
          Text
        </button>
        <button className="btn min-h-10 md:h-full">
          <FaVideo />
          Video
        </button>
      </div>
    </>
  );
};

export default CheckIn;
