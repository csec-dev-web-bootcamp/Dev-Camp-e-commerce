import React from "react";

const Footer = () => {
  return (
    <main className="w-full  mx-auto">
      <div className="flex flex-col items-center justify-center p-10 gap-4">
        <div className="flex gap-10">
          <div>logo</div>
          <div>Home</div>
          <div>Contact</div>
          <div>About</div>
          <div>Address</div>
          <div>Shop</div>
        </div>
        <div>
          <p>@copy right</p>
        </div>
      </div>
    </main>
  );
};

export default Footer;
