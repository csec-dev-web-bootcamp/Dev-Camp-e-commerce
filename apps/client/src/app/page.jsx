'use client'

import Header from "../components/global/Header";
import Welcome from "../components/global/Welcome";
import Categories from "../components/global/Categories";
// import CarouselEffect from "../components/global/Carousel";
// import { CarouselPlugin } from "../components/global/Carousel";
import Carousel from "../components/global/Carousel";


export default function Page() {
  return (
    <main className="w-full mx-auto">
      <div className="flex flex-col w-full gap-4 ">
        {/* <CarouselEffect /> */}
        <Welcome />
        <Categories />
      </div>
    </main>
  );
}
