import Button from "@/partials/Button";
import Title from "@/partials/Title";
import DefaultLayout from "Layout/DefaultLayout";
import Image from "next/image";
import React from "react";
import { infoContact } from "typing";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactFrom from "@/ContactFrom";

const infoContacts: infoContact[] = [
   {
      icon: <FaMapMarkerAlt className="h-8 w-8 text-secondary" />,
      title: "Address:",
      description: "121 King St, Melbourne VIC 3000, Australia",
   },
   {
      icon: <MdEmail className="h-auto w-8 text-secondary" />,
      title: "Email:",
      description: "info@example.com, yourmail@gmail.com",
   },
   {
      icon: <FaPhoneAlt className="h-8 w-8 text-secondary" />,
      title: "Phone:",
      description: "(+01) 888-123-4587, (+91) 192-987-898",
   },
];

export default function ContactUs() {
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
                     title="Contact Us"
                     titleStyle="text-[60px] text-white"
                  />
               </section>
            </div>
         </div>

         <div className="relative">
            <Image
               src="/images/getintouch/getintouch-bg.png"
               alt="Vercel Logo"
               width="0"
               height="0"
               sizes="100vw"
               className="pointer-events-none absolute bottom-0 right-0 -z-10 h-full w-full object-contain"
            />
            <section className="section_container -mb-8 flex flex-col gap-x-24 space-y-8 p-8 py-24 md:flex-row md:space-y-0">
               <div className="flex w-full flex-col space-y-4 rounded-2xl bg-white p-12 font-quicksand drop-shadow-xl md:w-1/2 ">
                  {infoContacts?.map((info, index) => (
                     <div
                        key={index}
                        className="flex items-center gap-x-4 border-b-2 pb-4 last:border-b-0"
                     >
                        {info?.icon}
                        <div>
                           <p className=" text-lg font-bold text-secondary">
                              {info?.title}
                           </p>
                           <p className="text-base">{info?.description}</p>
                        </div>
                     </div>
                  ))}
               </div>

               <div className="w-full">
                  <Title
                     title="Drop us a Line"
                     titleStyle="text-[40px] text-secondary mb-8"
                  />
                  <ContactFrom />
               </div>
            </section>
         </div>
         <section className="-mb-6 w-full md:pt-24">
            <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5132297.359442328!2d5.968357985600645!3d51.08992317063123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a721ec2b1be6b%3A0x75e85d6b8e91e55b!2sGermany!5e0!3m2!1sen!2s!4v1678392949265!5m2!1sen!2s"
               width="100%"
               height="450"
               loading="lazy"
            ></iframe>
         </section>
      </DefaultLayout>
   );
}
