import React, { useRef, useState } from "react";

import { HeroInfos } from "typing";
import Image from "next/image";
import SliderEm from "@/partials/SliderEm";
import Link from "next/link";

const slides = [
   {
      username: "Andrew Tates",
      title: "Marketing Teleport",
      description:
         "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
   },
   {
      username: "Lewis Darwin",
      title: "Ceo of Balance",
      description:
         "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
   },
   {
      username: "Robert Kaluti",
      title: "Ceo of Polymachine",
      description:
         "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
   },
];

const companiesList = [
   {
      companies_url: "/",
      companies_image: "/images/logos/logo1.png",
   },
   {
      companies_url: "/",
      companies_image: "/images/logos/logo2.png",
   },

   {
      companies_url: "/",
      companies_image: "/images/logos/logo4.png",
   },
   {
      companies_url: "/",
      companies_image: "/images/logos/logo5.png",
   },
   {
      companies_url: "/",
      companies_image: "/images/logos/logo3.png",
   },
];
export default function BestCustomer() {
   return (
      <div className="relative bg-primary/90">
         <Image
            src="/images/ourvision/background-vision.png"
            alt="Vercel Logo"
            width="0"
            height="0"
            sizes="100vw"
            className="background_image pointer-events-none absolute bottom-0 right-0  h-full w-full  object-contain"
         />
         <section className="relative  w-full md:rounded-bl-[100px]">
            <div className="section_container rounded-bl-[100px]y flex w-full flex-wrap">
               <div className="w-1/2"></div>
               <div className="py-[50px] md:w-1/2 lg:pt-[100px] ">
                  <h2 className="drop-shadow-3xl mb-5 text-left font-quicksand text-[50px] font-bold leading-[1.1em] text-white">
                     The Best Customer Experiences
                  </h2>
                  <p className="pb-8 font-quicksand text-lg text-white">
                     Lorem ipsum dolor sit amet, consec tetur adipiscing elitd
                     do eiusmod tempor incididunt ut lore magna aliqua.
                  </p>
                  <SliderEm slides={slides} />
               </div>
            </div>
            <div>
               <Image
                  src="/images/bestcustomer/bestcustomer.png"
                  alt="Vercel Logo"
                  width="0"
                  height="0"
                  sizes="60vw"
                  className="pointer-events-none top-0 left-0 hidden h-full w-full object-contain object-left-top md:absolute md:block md:w-[50%] lg:w-[35%]"
               />
            </div>
            <div className="section_container w-full overflow-hidden py-16 lg:overflow-visible">
               <div className="flex w-full cursor-pointer flex-row overflow-x-auto scrollbar-hide lg:w-1/2 lg:overflow-x-visible">
                  {companiesList.map((item, index) => (
                     <div
                        key={index}
                        className="flex w-full min-w-[50%] items-center md:min-w-[50%]"
                     >
                        <Link href={item?.companies_url}>
                           <Image
                              src={item?.companies_image}
                              alt=""
                              width="0"
                              height="0"
                              sizes="100vw"
                              className="h-24 w-full"
                              key={index}
                           />
                        </Link>
                     </div>
                  ))}
               </div>
            </div>
         </section>
      </div>
   );
}
