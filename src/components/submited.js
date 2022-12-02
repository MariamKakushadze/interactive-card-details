import React from "react";
import done from "../images/icon-complete.svg";
export default function Submited({
  setCompleted,
  setNumber,
  setName,
  setMm,
  setYy,
  setCvcc,
}) {
  const reset = (e) => {
    e.preventDefault();
    setCompleted(true);
    setNumber("0000 0000 0000 0000");
    setName("JANE APPLESEED");
    setMm("00");
    setYy("00");
    setCvcc("000");
  };
  return (
    <>
      <form className="max-w-xl flex flex-col gap-5 mt-20 mx-auto lg:align-middle lg:justify-center lg:mt-0">
        <div className="flex flex-col text-xs gap-5 text-center">
          <img src={done} alt="" className="w-20 h-20 mx-auto" />
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
          onClick={reset}
        >
          Continue
        </button>
      </form>
    </>
  );
}
