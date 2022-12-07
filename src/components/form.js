import React, { useState } from "react";
import InputMask from "react-input-mask";

export default function Form({
  setCompleted,
  setNumber,
  setName,
  setMm,
  setYy,
  setCvcc,
}) {
  const [holdersName, setHoldersName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [error, setError] = useState("");
  const [cardError, setCardError] = useState("");
  const [monthError, setMonthError] = useState("");
  const [yearError, setYearError] = useState("");
  const [cvcError, setCvcError] = useState("");

  const nameVal = function () {
    let format = /^[a-z ,.'-]+$/i;
    if (holdersName === "") {
      setError("Can’t be blank");
    } else if (!format.test(holdersName)) {
      setError("Wrong format");
    } else {
      setError("");
    }
  };
  const cardVal = function () {
    if (cardNumber === "") {
      setCardError("Can’t be blank");
    } else if (cardNumber.length !== 19) {
      setCardError("Wrong format");
    } else {
      setCardError("");
    }
  };
  const monthVal = function () {
    if (month === "") {
      setMonthError("Can’t be blank");
    } else if (month.length !== 2) {
      setMonthError("Wrong format");
    } else {
      setMonthError("");
    }
  };
  const yearVal = function () {
    if (year === "" || year.length !== 2) {
      setYearError("error");
    } else {
      setYearError("");
    }
  };
  const cvcVal = function () {
    if (cvc === "") {
      setCvcError("Can’t be blank");
    } else if (cvc.length !== 3) {
      setCvcError("Wrong format");
    } else {
      setCvcError("");
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    nameVal();
    cardVal();
    monthVal();
    yearVal();
    cvcVal();
    if (
      error === "" &&
      cardError === "" &&
      monthError === "" &&
      yearError === "" &&
      cvcError === "" &&
      holdersName !== "" &&
      cardNumber !== "" &&
      month !== "" &&
      year !== "" &&
      cvc !== ""
    ) {
      setCompleted(false);
      setNumber(cardNumber);
      setName(holdersName);
      setMm(month);
      setYy(year);
      setCvcc(cvc);
    }
  };
  return (
    <>
      <form
        className="max-w-xl flex flex-col gap-5 mt-24 mx-auto lg:align-middle lg:justify-center lg:mt-0"
        onSubmit={submitHandler}
      >
        <div className="flex flex-col text-xs gap-2.5">
          <label>CARHOLDER NAME</label>
          <input
            className="pl-4 w-80 h-11 rounded-lg border border-[#DFDEE0] outline-none focus:outline-[#6348FE] outline-1 outline-offset-0"
            type="text"
            placeholder="e.g. Jane Appleseed"
            onChange={(e) => setHoldersName(e.target.value)}
            style={
              error !== "" ? { borderColor: "red" } : { borderColor: "#DFDEE0" }
            }
          ></input>
          <p className="text-red-500">{error}</p>
        </div>
        <div className="flex flex-col text-xs gap-2.5">
          <label>CARD NUMBER</label>
          <InputMask
            placeholder="e.g. 1234 5678 9123 0000"
            className="pl-4 w-80 h-11 rounded-lg border border-[#DFDEE0] outline-none focus:outline-[#6348FE] outline-1 outline-offset-0"
            style={
              cardError !== ""
                ? { borderColor: "red" }
                : { borderColor: "#DFDEE0" }
            }
            mask="9999 9999 9999 9999"
            maskchar=" "
            onChange={(e) => setCardNumber(e.target.value)}
          ></InputMask>
          <p className="text-red-500">{cardError}</p>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col text-xs gap-2.5">
            <label>EXP.DATE (MM/YY)</label>
            <div className="flex gap-4 relative">
              <input
                type="number"
                placeholder="MM"
                maxLength={2}
                className=" pl-4 w-16 h-11 rounded-lg border border-[#DFDEE0] outline-none focus:outline-[#6348FE] outline-1 outline-offset-0"
                onChange={(e) => setMonth(e.target.value)}
                style={
                  monthError !== ""
                    ? { borderColor: "red" }
                    : { borderColor: "#DFDEE0" }
                }
              ></input>
              <p className="text-red-500 absolute top-12">{monthError}</p>
              <input
                type="number"
                placeholder="YY"
                maxLength={2}
                className="pl-4 w-16 h-11 rounded-lg border border-[#DFDEE0] outline-none focus:outline-[#6348FE] outline-1 outline-offset-0"
                onChange={(e) => setYear(e.target.value)}
                style={
                  yearError !== ""
                    ? { borderColor: "red" }
                    : { borderColor: "#DFDEE0" }
                }
              ></input>
            </div>
          </div>
          <div className="flex flex-col text-xs gap-2.5 relative">
            <label>CVC</label>
            <input
              type="number"
              placeholder="e.g. 124"
              maxLength={3}
              className="pl-4 w-40 h-11 rounded-lg border border-[#DFDEE0] outline-none focus:outline-[#6348FE] outline-1 outline-offset-0"
              onChange={(e) => setCvc(e.target.value)}
              style={
                cvcError !== ""
                  ? { borderColor: "red" }
                  : { borderColor: "#DFDEE0" }
              }
            ></input>
            <p className="text-red-500 absolute top-[73px]">{cvcError}</p>
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
