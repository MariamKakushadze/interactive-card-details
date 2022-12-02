import React from "react";
export default function Form() {
  return (
    <>
      <form className="max-w-xl flex flex-col gap-5 mt-24 mx-auto">
        <div className="flex flex-col text-xs gap-2.5">
          <label>CARHOLDER NAME</label>
          <input
            className="pl-4 w-80 h-11 rounded-lg border border-[#DFDEE0] outline-none focus:outline-[#6348FE] outline-1 outline-offset-0"
            type="text"
            placeholder="e.g. Jane Appleseed"
          ></input>
        </div>
        <div className="flex flex-col text-xs gap-2.5">
          <label>CARD NUMBER</label>
          <input
            type="number"
            placeholder="e.g. 1234 5678 9123 0000"
            className="pl-4 w-80 h-11 rounded-lg border border-[#DFDEE0] outline-none focus:outline-[#6348FE] outline-1 outline-offset-0"
          ></input>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col text-xs gap-2.5">
            <label>EXP.DATE (MM/YY)</label>
            <div className="flex gap-4">
              <input
                type="number"
                placeholder="MM"
                maxLength={2}
                className=" pl-4 w-16 h-11 rounded-lg border border-[#DFDEE0] outline-none focus:outline-[#6348FE] outline-1 outline-offset-0"
              ></input>
              <input
                type="number"
                placeholder="YY"
                maxLength={2}
                className="pl-4 w-16 h-11 rounded-lg border border-[#DFDEE0] outline-none focus:outline-[#6348FE] outline-1 outline-offset-0"
              ></input>
            </div>
          </div>
          <div className="flex flex-col text-xs gap-2.5">
            <label>CVC</label>
            <input
              type="number"
              placeholder="e.g. 124"
              maxLength={3}
              className="pl-4 w-40 h-11 rounded-lg border border-[#DFDEE0] outline-none focus:outline-[#6348FE] outline-1 outline-offset-0"
            ></input>
          </div>
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
