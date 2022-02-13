import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { NOTFOUND_IMG } from "../Contants/images";

const Notfound = () => {
  return (
    <div className="relative flex justify-center items-center w-screen h-screen flex-col">
      <h2 className=" font-semibold">404 | Not found</h2>
      <div className="w-56 h-52 mt-12">
        <img src={NOTFOUND_IMG} alt="notfound" />
      </div>
      <div className="flex items-center">
        <div className="ml-2 text-blue-medium flex-row flex items-center">
          <Link to="/">Go to Home</Link>
          <div className="ml-2">
            <BsArrowRightCircleFill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
