import ViewCart from "@app/client/components/global/viewCart";
import { getMe } from "@app/client/data/users";
import React from "react";

export default function page() {
  const user = getMe();
  console.log(user);
  return (
    <>
      <h1>{JSON.stringify(user)}</h1>
      <ViewCart />
    </>
  );
}
