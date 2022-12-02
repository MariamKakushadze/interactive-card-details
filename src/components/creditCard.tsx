import React from "react";
import back from "../images/bg-card-back.png";
import front from "../images/bg-card-front.png";

export default function CreditCard() {
  return (
    <div className="bg">
      <div className="relative h-72 max-w-xl m-auto">
        <div className="absolute w-72 h-40 top-28 left-4 z-10">
          <img src={front} alt="" />
          <div className="bg-white rounded-2xl w-8 h-8 absolute top-4 left-5"></div>
          <div className="rounded-2xl w-4 h-4 absolute top-6 left-16 border-2"></div>
          <p className="text-white absolute top-20 left-5 text-lg tracking-widest">
            0000 0000 0000 0000
          </p>
          <p className="text-white absolute top-32 left-5 text-[9px] tracking-wider">
            JANE APPLESEED
          </p>
          <p className="text-white absolute top-32 right-5 text-[9px] tracking-wider">
            00/00
          </p>
        </div>
        <div className="absolute w-72 h-40 top-6 right-4">
          <img src={back} alt="" />
          <p className=" text-white absolute top-16 right-8 text-[15px]">000</p>
        </div>
      </div>
    </div>
  );
}
