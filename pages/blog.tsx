import React from "react";
import CardsBlogs from "@/CardsBlogs";
import CarouselSlider from "@/CarouselSlider";
import DefaultLayout from "Layout/DefaultLayout";

export default function Blog() {
   return (
      <DefaultLayout>
         <CarouselSlider />
         <div className="py-16">
            <CardsBlogs />
         </div>
      </DefaultLayout>
   );
}
