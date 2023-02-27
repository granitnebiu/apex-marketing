import Button from "@/partials/Button";
import PercentageRange from "@/partials/PersentageRange";
import Title from "@/partials/Title";
import Image from "next/image";
import React from "react";
import { CaseObj } from "typing";

const caseCard: CaseObj[] = [
   {
      caseImg: "/images/case-studies/case-studies-1.jpg",
      caseAlt: "Independent Financial Advisor",
      caseDescription: "Independent Financial Advisor",
   },
   {
      caseImg: "/images/case-studies/case-studies-2.jpg",
      caseAlt: "Health Insurance Case Study",
      caseDescription: "Health Insurance Case Study",
   },
   {
      caseImg: "/images/case-studies/case-studies-3.jpg",
      caseAlt: "Industrial Chemical Manufacture Study",
      caseDescription: "Industrial Chemical Manufacture Study",
   },
   {
      caseImg: "/images/case-studies/case-studies-4.jpg",
      caseAlt: "Business Development Advisor",
      caseDescription: "Business Development Advisor",
   },
   {
      caseImg: "/images/case-studies/case-studies-5.jpg",
      caseAlt: "Grow Customer Based Facility",
      caseDescription: "Grow Customer Based Facility",
   },
];
export default function CaseStudies() {
   return (
      <div className="relative">
         <Image
            src="/images/case-studies/case-studies-backgrund.png"
            alt="Vercel Logo"
            width="0"
            height="0"
            sizes="100vw"
            className="pointer-events-none absolute bottom-0 right-0 h-full w-full object-cover"
         />
         <section className="section_container py-24">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
               <div className="flex w-full flex-col justify-center rounded-3xl p-8">
                  <Title
                     titleStyle="text-[40px] md:text-[50px] "
                     title="Case Studies"
                  />
                  <p className="font-quicksand text-lg font-normal text-primary">
                     Lorem ipsum dolor sit amet, consec tetur adipiscing elitd
                     do eiusmod tempor incididunt ut lore magna aliqua.
                  </p>
                  <Button btnStyle="px-4 py-2 mt-6" btnName="View More" />
               </div>
               {caseCard?.map((cases, index) => (
                  <div
                     key={index}
                     className="relative w-full overflow-hidden rounded-3xl bg-red-700"
                  >
                     <Image
                        src={cases?.caseImg}
                        alt={cases?.caseAlt}
                        width="0"
                        height="0"
                        sizes="80vw"
                        className="h-full w-full object-cover"
                     />
                     <div className="absolute inset-0 bg-black/50 text-white transition duration-300 ease-out hover:bg-black/60">
                        <p className="absolute bottom-16 px-8 font-quicksand text-2xl font-bold ">
                           {cases?.caseDescription}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </section>
      </div>
   );
}
