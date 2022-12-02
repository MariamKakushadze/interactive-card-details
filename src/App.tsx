import React from "react";
import CreditCard from "./components/creditCard";
import Form from "./components/form";
// import Submited from "./components/submited";

export default function App() {
  return (
    <div className="flex flex-col">
      <CreditCard />
      <Form />
      {/* <Submited /> */}
    </div>
  );
}
