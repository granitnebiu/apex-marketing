import React from "react";
import Button from "./partials/Button";
import { SiLichess } from "react-icons/si";
import { VscRocket } from "react-icons/vsc";
import { HiOutlineUsers } from "react-icons/hi";

import { HeroInfos } from "typing";
import Image from "next/image";

const heroInfo: HeroInfos[] = [
   {
      icon: <SiLichess className="h-16 w-16" />,
      title: "Best Strategy",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
   },
   {
      icon: <VscRocket className="h-16 w-16" />,
      title: "Start Up",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
   },
   {
      icon: <HiOutlineUsers className="h-16 w-16" />,
      title: "Organizations",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
   },
];
export default function HeroSection() {
   return (
      <section className="relative  w-full bg-primary md:rounded-bl-[100px]">
         <div className="section_container   flex w-full flex-wrap rounded-bl-[100px] bg-primary">
            <div className="py-[50px] md:w-1/2 md:pb-[180px] lg:pt-[100px] lg:pb-[220px] ">
               <h2 className="drop-shadow-3xl mb-5 text-left font-quicksand text-[50px] font-bold leading-[1.1em] text-white">
                  Best Business Marketing
               </h2>
               <p className="pb-8 font-quicksand text-lg text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elitd do
                  eiusmod tempor incididunt ut lore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida.
               </p>
               <Button btnName="Get Started" btnStyle="w-auto px-8 py-3" />
            </div>
            <div className="w-1/2"></div>
         </div>
         <Image
            src="/images/hero-marketing.png"
            alt="Vercel Logo"
            width="0"
            height="0"
            sizes="90vw"
            className="pointer-events-none bottom-0 right-0 h-full w-full object-contain object-right-bottom md:absolute md:w-1/2 lg:w-full"
         />
         <div className="w-full bg-secondary/95 py-[55px] font-quicksand text-white md:absolute md:-bottom-24 md:rounded-tl-[50px] lg:-bottom-12 lg:ml-[120px]">
            <div className="section_container flex flex-col md:flex-row">
               {heroInfo?.map((heros, index) => (
                  <div
                     key={index}
                     className="flex w-full flex-col items-center py-8 md:w-1/3 md:flex-row md:space-x-8 md:py-0"
                  >
                     <span className="pb-4 md:pb-0">{heros.icon}</span>
                     <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold">{heros.title}</h3>
                        <p className=" text-lg text-white">
                           {heros.description}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
