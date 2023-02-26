import React from "react";
import Button from "./partials/Button";
import { SiLichess } from "react-icons/si";
import { VscRocket } from "react-icons/vsc";
import { HiOutlineUsers } from "react-icons/hi";

import { HeroInfos } from "typing";

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
      <section className="relative w-full rounded-bl-[100px] bg-primary">
         <div className="section_container flex w-full flex-wrap bg-primary">
            <div className="w-1/2 pt-[100px] pb-[220px]">
               <h2 className="title">Best Business Marketing</h2>
               <p className="font-quicksand pb-8 text-lg text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elitd do
                  eiusmod tempor incididunt ut lore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida.
               </p>
               <Button btnName="Get Started" btnStyle="w-auto px-8 py-3" />
            </div>

            <div className="w-1/2"></div>
         </div>
         <div className=" absolute -bottom-12 ml-[120px] w-full rounded-tl-[50px] bg-secondary/95 py-[55px] text-white">
            <div className="section_container flex">
               {heroInfo?.map((heros, index) => (
                  <div key={index} className="flex w-1/3 space-x-8">
                     {heros.icon}
                     <div>
                        <h3 className="text-xl font-bold">{heros.title}</h3>
                        <p className="font-quicksand text-lg text-white">
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
