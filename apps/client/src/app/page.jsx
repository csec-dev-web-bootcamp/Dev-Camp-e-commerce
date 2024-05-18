"use client";

import Header from "../components/global/Header";
import Welcome from "../components/global/Welcome";
import Categories from "../components/global/Categories";
// import CarouselEffect from "../components/global/Carousel";
// import { CarouselPlugin } from "../components/global/Carousel";
// import Carousel from "../components/global/Carousel";
import Subscribe from "../components/global/Subscribe";
import Message from "../components/global/Message";
import Footer from "../components/global/Footer";

export default function Page({ children }) {
  return (
    <main className="w-full ">
      {/* <div className=" m-auto"> */}
      {/* <CarouselEffect /> */}

      <Welcome />
      <Categories />
      <Subscribe />
      <Message />

      {/* </div> */}
    </main>
  );
}
