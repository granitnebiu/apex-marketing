import Button from "@/partials/Button";
import PercentageRange from "@/partials/PersentageRange";
import Title from "@/partials/Title";
import Image from "next/image";
import React from "react";
import { MarketingSolutionsObj } from "typing";

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
];
export default function MarketingSolution() {
   return (
      <section className="section_container flex flex-col space-y-12 md:flex-row md:space-y-0 md:space-x-20 md:py-12">
         <div className="w-full md:w-1/2">
            <Image
               src="/images/markerting-solutins.png"
               alt="marketing-solutions"
               width="0"
               height="0"
               sizes="80vw"
               className="h-full w-full"
            />
         </div>
         <div className="flex w-full flex-col md:w-1/2">
            <div className="pb-8">
               <Title
                  titleStyle="text-[40px] md:text-[50px] "
                  title="Marketing Solutions for Your Company"
               />
               <p className="font-quicksand text-lg font-normal text-primary md:w-2/3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elitd do
                  eiusmod tempor incididunt ut lore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida.
               </p>
            </div>
            <div className="">
               {percentagesData?.map((percentages, index) => (
                  <div key={index} className="pb-4">
                     <p className="font-quicksand text-xl font-semibold">
                        {percentages?.title}
                     </p>
                     <PercentageRange percentage={percentages.value} />
                  </div>
               ))}
            </div>
            <div>
               <div className="flex items-center justify-between py-4">
                  <div className="flex items-center space-x-4">
                     <Image
                        src="/images/user.jpg"
                        alt="marketing-solutions"
                        width="0"
                        height="0"
                        sizes="80vw"
                        className="h-20 w-20 rounded-full"
                     />
                     <div>
                        <p className="font-quicksand text-base font-semibold">
                           Brayan Adams
                        </p>
                        <span className="font-quicksand text-base font-semibold">
                           Founder & CEO
                        </span>
                     </div>
                  </div>
                  <Button btnStyle="px-4 py-2" btnName="Call Us Now" />
               </div>
            </div>
         </div>
      </section>
   );
}
