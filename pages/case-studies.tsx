import Button from "@/partials/Button";
import Title from "@/partials/Title";
import DefaultLayout from "Layout/DefaultLayout";
import Image from "next/image";
import React from "react";
import { CaseCardType } from "typing";

const caseCard: CaseCardType[] = [
   {
      title: "Business Development Advisor",
      description:
         "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit sapi ente iure unde cubilia animi.",
      img: "/images/case-studies/case-studies-2.jpg",
      alt: "Business Development Advisor",
   },
   {
      title: "Grow Customer Based Facility",
      description:
         "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit sapi ente iure unde cubilia animi.",
      img: "/images/case-studies/case-studies-1.jpg",
      alt: "Grow Customer Based Facility",
   },
   {
      title: "Non Profit Services Case Study",
      description:
         "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit sapi ente iure unde cubilia animi.",
      img: "/images/case-studies/case-studies-3.jpg",
      alt: "Non Profit Services Case Study",
   },
];

export default function Aboutus() {
   return (
      <DefaultLayout>
         <div className="relative ">
            <Image
               src="/images/about-us.jpg"
               alt="background case studies"
               width="0"
               height="0"
               sizes="100vw"
               className="pointer-events-none absolute top-0 -z-10 h-full w-full object-cover"
            />
            <div className="bg-secondary/30">
               <section className="section_container flex h-60 items-center ">
                  <Title
                     title="Case Studies"
                     titleStyle="text-[60px] text-white"
                  />
               </section>
            </div>
         </div>
         <section className=" py-12 md:py-24">
            <div className="">
               <Title
                  titleStyle="text-[40px] md:text-[50px] text-center"
                  title="Our Marketing Statistics"
               />
               <p className="mx-auto block text-center font-quicksand text-lg font-normal text-fourth md:w-1/2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elitd do
                  eiusmod tempor incididunt ut lore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida.
               </p>
            </div>

            <div></div>
         </section>

         <section className="section_container flex flex-col gap-x-8 space-y-8 pb-12 md:flex-row md:space-y-0 ">
            <div className="flex w-full justify-center md:w-1/2">
               <Image
                  src="/images/case-studies/case-studies-5.jpg"
                  alt="Business academy client"
                  width="0"
                  height="0"
                  sizes="80vw"
                  className="h-80 w-full rounded-3xl object-top drop-shadow-xl md:w-[95%]"
               />
            </div>
            <div className="w-full p-8 text-center md:w-1/2 md:text-left">
               <Title
                  titleStyle="text-[35px] "
                  title="Business Academy Client Consulting Case Study"
               />
               <p className="text-md mx-auto block pb-2 font-quicksand font-semibold text-fourth">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elitd do
                  eiusmod tempor incididunt ut lore magna aliqua.
               </p>
               <p className="mx-auto block font-quicksand text-base font-normal text-fourth">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elitd do
                  eiusmod tempor incididunt ut lore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida. Fugit sociosqu reprehenderit
                  ducimus diam suspendisse blanditiis dolorem culpa, eos minus
                  quasi. Congue sed tempora quos.
               </p>
            </div>
         </section>

         <section className="section_container flex flex-col gap-x-8 space-y-8 md:flex-row-reverse md:space-y-0 ">
            <div className="flex w-full justify-center md:w-1/2">
               <Image
                  src="/images/case-studies/case-studies-4.jpg"
                  alt="Business academy client"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="h-80 w-full rounded-3xl object-top drop-shadow-xl md:w-[95%]"
               />
            </div>

            <div className="w-full p-8 text-center md:w-1/2 md:text-left">
               <Title
                  titleStyle="text-[35px]"
                  title="Business Academy Client Consulting Case Study"
               />
               <p className="text-md mx-auto block pb-2 font-quicksand font-semibold text-fourth">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elitd do
                  eiusmod tempor incididunt ut lore magna aliqua.
               </p>
               <p className="mx-auto block font-quicksand text-base font-normal text-fourth">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elitd do
                  eiusmod tempor incididunt ut lore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida. Fugit sociosqu reprehenderit
                  ducimus diam suspendisse blanditiis dolorem culpa, eos minus
                  quasi. Congue sed tempora quos.
               </p>
            </div>
         </section>

         <section className="section_container grid grid-cols-1 space-y-8 py-12 md:grid-cols-3 md:gap-8 md:space-y-0 md:py-24 ">
            {caseCard.map((card, index) => (
               <div
                  key={index}
                  className="rounded-3xl bg-white p-2 drop-shadow-xl"
               >
                  <Image
                     src={card.img}
                     alt={card.alt}
                     width="0"
                     height="0"
                     sizes="100vw"
                     className="h-68 w-full rounded-tl-3xl rounded-tr-3xl object-top drop-shadow-xl md:h-56"
                  />
                  <div className="flex w-full flex-col justify-center rounded-3xl p-8">
                     <Title
                        titleStyle="text-[24px] text-center"
                        title={card.title}
                     />
                     <p className="text-md text-center font-quicksand font-normal text-primary">
                        {card.description}
                     </p>
                  </div>
               </div>
            ))}
         </section>
         <div className="relative">
            <Image
               src="/images/case-studies/case-studies-bg2.jpg"
               alt="Vercel Logo"
               width="0"
               height="0"
               sizes="100vw"
               className="pointer-events-none absolute bottom-0 right-0 -z-10 h-full w-full object-top"
            />
            <section className="section_container -mb-8 py-24">
               <div className="w-full rounded-3xl bg-primary p-16 text-white md:w-1/2">
                  <Title
                     titleStyle="text-[35px] text-white"
                     title="Get Better Solution For Your Business"
                  />
                  <p className="text-md  text-whitee pb-8 font-quicksand font-normal">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elitd do
                     eiusmod tempor incididunt ut lore magna aliqua. Quis ipsum
                     suspendisse ultrices gravida.
                  </p>
                  <Button
                     btnName="Call Us Now"
                     btnStyle="bg-white !text-primary py-2 px-4"
                  />
               </div>
            </section>
         </div>
      </DefaultLayout>
   );
}
