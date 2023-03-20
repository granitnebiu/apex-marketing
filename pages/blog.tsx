import CarouselSlider from "@/CarouselSlider";
import Button from "@/partials/Button";
import Title from "@/partials/Title";
import DefaultLayout from "Layout/DefaultLayout";
import Image from "next/image";
import React from "react";

export default function Blog() {
   return (
      <DefaultLayout>
         <section className="relative "></section>
         <CarouselSlider />
         <section className="section_container flex h-60 items-center">
            Coming Soon
         </section>
      </DefaultLayout>
   );
}
