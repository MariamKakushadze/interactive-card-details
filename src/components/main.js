import React, { useState } from "react";
import Form from "./form";
import Submited from "./submited";
import CreditCard from "./creditCard";

export default function Main() {
  const [completed, setCompleted] = useState(true);
  const [number, setNumber] = useState("0000 0000 0000 0000");
  const [name, setName] = useState("JANE APPLESEED");
  const [mm, setMm] = useState("00");
  const [yy, setYy] = useState("00");
  const [cvcc, setCvcc] = useState("000");
  return (
    <>
      <CreditCard name={name} number={number} mm={mm} yy={yy} cvcc={cvcc} />
      {completed ? (
        <Form
          setCompleted={setCompleted}
          setName={setName}
          setNumber={setNumber}
          setMm={setMm}
          setYy={setYy}
          setCvcc={setCvcc}
        />
      ) : (
        <Submited
          completed={completed}
          setCompleted={setCompleted}
          setName={setName}
          setNumber={setNumber}
          setMm={setMm}
          setYy={setYy}
          setCvcc={setCvcc}
        />
      )}
    </>
  );
}
