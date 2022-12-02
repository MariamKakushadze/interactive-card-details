import React from "react";
import completed from "../images/icon-complete.svg";
export default function Submited() {
  return (
    <>
      <form className="max-w-xl flex flex-col gap-5 mt-20 mx-auto">
        <div className="flex flex-col text-xs gap-5 text-center">
          <img src={completed} alt="" className="w-20 h-20 mx-auto" />
          <h2
            className="text-xl text-[#21092F] tracking-xl
          "
          >
            THANK YOU!
          </h2>
          <p className="text-sm text-[#8F8694]">
            We’ve added your card details
          </p>
        </div>

        <button
          type="submit"
          className="w-80 h-11 text-white bg-[#21092F] rounded-lg hover:bg-[#331e3f]"
        >
          Confirm
        </button>
      </form>
    </>
  );
}
