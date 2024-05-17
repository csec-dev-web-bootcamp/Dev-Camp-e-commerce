"use client"; // New line at the top
import React from "react";

const About = ({ children }) => {
  return (
    <>
      <div className="w-full h-full">
        <div className="h-full w-5/6 m-auto">{children}</div>
      </div>
    </>
  );
};

export default About;
