import Button from "@/partials/Button";
import Title from "@/partials/Title";
import DefaultLayout from "Layout/DefaultLayout";
import Image from "next/image";
import React from "react";

export default function Blog() {
   return (
      <DefaultLayout>
         <section className="relative ">
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
                     title="Blog"
                     titleStyle="text-[45px] lg:text-[60px] text-white"
                  />
               </section>
            </div>
         </section>
         <section className="section_container flex h-60 items-center">
            Coming Soon
         </section>
      </DefaultLayout>
   );
}
