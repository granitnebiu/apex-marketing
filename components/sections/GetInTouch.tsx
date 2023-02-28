import ContactFrom from "@/ContactFrom";
import Title from "@/partials/Title";
import Image from "next/image";
import React from "react";
import { FaMapMarked, FaMailBulk, FaPhoneAlt } from "react-icons/fa";
export default function GetInTouch() {
   return (
      <div className="relative">
         <Image
            src="/images/getintouch/getintouch-bg.png"
            alt="Vercel Logo"
            width="0"
            height="0"
            sizes="100vw"
            className="pointer-events-none absolute bottom-0 right-0 -z-10 h-full w-full object-contain md:object-top"
         />

         <section className="section_container py-12">
            <div className="pb-16">
               <Title
                  titleStyle="text-[40px] md:text-[50px] text-center"
                  title="Get In Touch"
               />
               <p className="mx-auto block text-center font-quicksand text-lg font-normal text-fourth md:w-2/3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elitd do
                  eiusmod tempor incididunt ut lore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida.
               </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
               <div className="flex space-x-6 rounded-xl bg-secondary p-8 font-quicksand text-white">
                  <div>
                     <FaMapMarked className="h-12 w-12" />
                  </div>
                  <div className="">
                     <p className="pb-2 text-xl font-bold">Address:</p>
                     <div className="text-lg font-semibold">
                        <p>121 King St, Melbourne </p>
                        <p>VIC 3000, Australia</p>
                     </div>
                  </div>
               </div>
               <div className="flex space-x-6 rounded-xl bg-secondary p-8 font-quicksand text-white">
                  <div>
                     <FaMailBulk className="h-12 w-12" />
                  </div>
                  <div className="">
                     <p className="pb-2 text-xl font-bold">Email:</p>
                     <div className="text-lg font-semibold">
                        <p>info@example.com,</p>
                        <p>yourmail@gmail.com</p>
                     </div>
                  </div>
               </div>
               <div className="flex space-x-6 rounded-xl bg-secondary p-8 font-quicksand text-white">
                  <div>
                     <FaPhoneAlt className="h-12 w-12" />
                  </div>
                  <div className="">
                     <p className="pb-2 text-xl font-bold">Phone No.:</p>
                     <div className="text-lg font-semibold">
                        <p>(+01) 888-123-4587, </p>
                        <p>(+91) 192-987-898</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="flex flex-col py-12 md:flex-row">
               <div className="z-10 flex h-[600px] w-full items-center md:w-1/2">
                  <Image
                     src="/images/getintouch/getintouch-2.png"
                     alt="Vercel Logo"
                     width="0"
                     height="0"
                     sizes="80vw"
                     className="h-[500px] w-full object-contain"
                  />
               </div>
               <div className="relative md:-ml-4 lg:-ml-20">
                  <Image
                     src="/images/getintouch/getintouch-1.png"
                     alt="Vercel Logo"
                     width="0"
                     height="0"
                     sizes="100vw"
                     className="pointer-events-none absolute bottom-0 right-0 z-10 h-full w-full rounded-[100px] object-cover"
                  />
                  <div className="h-[700px] w-full rounded-[30px] bg-white px-4 pt-[60px] drop-shadow-xl md:h-[600px] md:w-[680px] md:rounded-[100px] md:px-[80px]">
                     <Title
                        titleStyle="text-[40px] md:text-[50px] text-left pb-8"
                        title="Drop us a Line"
                     />
                     <ContactFrom />
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}
