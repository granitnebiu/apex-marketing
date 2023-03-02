import PercentageRange from "@/partials/PersentageRange";
import Title from "@/partials/Title";
import MarketingSolution from "@/sections/MarketingSolution";
import DefaultLayout from "Layout/DefaultLayout";
import Image from "next/image";
import React from "react";
import { FaRegLightbulb, FaUserCog, FaBullhorn } from "react-icons/fa";
import { VscRocket } from "react-icons/vsc";
import { MarketingSolutionsObj, WorkingProcess } from "typing";

const percentagesData: MarketingSolutionsObj[] = [
   {
      title: "Service Experienced",
      value: 90,
   },
   {
      title: "Professional Team",
      value: 75,
   },
   {
      title: "Customer Satisfactions",
      value: 85,
   },
   {
      title: "Global Clients",
      value: 70,
   },
   {
      title: "Project Completed",
      value: 92,
   },
   {
      title: "Customer Satisfactions",
      value: 71,
   },
];

const workingProcess: WorkingProcess[] = [
   {
      icon: <FaRegLightbulb className="h-12 w-12" />,
      title: "Making Ideas",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      color: "bg-primary",
      position: "",
   },
   {
      icon: <FaUserCog className="h-12 w-12" />,
      title: "Working Plan",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      color: "bg-secondary",
      position: "md:mt-8",
   },
   {
      icon: <FaBullhorn className="h-12 w-12" />,
      title: "Research",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      color: "bg-primary",
      position: "",
   },
   {
      icon: <VscRocket className="h-12 w-12" />,
      title: "Working Plan",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      color: "bg-secondary",
      position: "md:mt-8",
   },
];

export default function Aboutus() {
   return (
      <DefaultLayout>
         <div className="relative ">
            <Image
               src="/images/about-us.jpg"
               alt="Vercel Logo"
               width="0"
               height="0"
               sizes="100vw"
               className="pointer-events-none absolute top-0 -z-10 h-full w-full object-cover"
            />
            <div className="bg-secondary/30">
               <section className="section_container flex h-60 items-center ">
                  <Title title="About Us" titleStyle="text-[60px] text-white" />
               </section>
            </div>
         </div>
         <section className="pt-12">
            <MarketingSolution
               hideElements={true}
               marketingTitle="Fames aliqua taciti fugit ligula cumque facere distinctio voluptas Voluptate laboris."
               marketingDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elitd do eiusmod tempor incididunt ut lore magna aliqua. Quis ipsum suspendisse ultrices gravida. Elit turpis non, perspiciatis dolore dolore condimentum, nam perspiciatis dolores, justo? Torquent, veniam quae itaque ante adipiscing! Veritatis veniam, ullam, tellus consequat ullam quaerat."
            />
         </section>

         <section className="section_container pb-12 ">
            <div className="grid gap-x-8 md:grid-cols-2 ">
               {percentagesData?.map((percentages, index) => (
                  <div key={index} className="pb-4">
                     <p className="font-quicksand text-xl font-semibold">
                        {percentages?.title}
                     </p>
                     <PercentageRange percentage={percentages.value} />
                  </div>
               ))}
            </div>
         </section>

         <div className="relative ">
            <Image
               src="/images/case-studies/case-studies-backgrund.png"
               alt="Vercel Logo"
               width="0"
               height="0"
               sizes="100vw"
               className="absolute top-0 -z-10 h-full w-full object-cover"
            />

            <section className="section_container md:mt-12 md:py-12">
               <Image
                  src="/images/line.png"
                  alt="Vercel Logo"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="section_container absolute top-0 -z-10 h-full w-full object-contain"
               />
               <div className="">
                  <Title
                     titleStyle="text-[40px] md:text-[50px] text-center"
                     title="Our Team of Professionals"
                  />
                  <p className="mx-auto block text-center font-quicksand text-lg font-normal text-fourth md:w-2/3">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elitd do
                     eiusmod tempor incididunt ut lore magna aliqua. Quis ipsum
                     suspendisse ultrices gravida.
                  </p>
               </div>
               <div className=" grid grid-cols-2 pt-12 md:grid-cols-4 ">
                  {workingProcess?.map((process, index) => (
                     <div
                        key={index}
                        className={`${process?.position} mb:pb-0 pb-12 drop-shadow-lg`}
                     >
                        <div
                           className={`${process?.color} mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary text-white`}
                        >
                           {process?.icon}
                        </div>
                        <Title
                           title={process?.title}
                           titleStyle="text-xl text-center"
                        />
                        <p className="mx-auto block  text-center font-quicksand text-lg font-normal text-fourth md:w-full">
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit.
                        </p>
                     </div>
                  ))}
               </div>
            </section>
         </div>
      </DefaultLayout>
   );
}
