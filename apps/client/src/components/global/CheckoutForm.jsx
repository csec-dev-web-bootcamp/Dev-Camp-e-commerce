import React from "react";
import Input from "./Input";

export default function CheckoutForm() {
  return (
    <div className="w-full bg-white  rounded-lg md:max-w-2xl ">
      <div className="md:flex">
        <div className="w-full p-4 px-5  flex flex-col gap-6 py-5">
          <h1 className="text-2xl mb-3 font-bold">Billing details</h1>

          <div className="grid md:grid-cols-2 md:gap-4  ">
            <Input name={"First Name"} />
            <Input name={"Last Name"} />
          </div>
          <Input name={"Company Name"} />
          <Input name={"Address"} />
          <Input name={"Apartment"} />
          <div className="grid md:grid-cols-3 md:gap-2">
            <Input name={"Zip Code"} />
            <Input name={"City"} />
            <Input name={"State"} />
          </div>
          <Input name={"Country"} />
          <Input name={"Phone Number"} />
        </div>
      </div>
    </div>
  );
}
