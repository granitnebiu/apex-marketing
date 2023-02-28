import Title from "@/partials/Title";
import Image from "next/image";
import React from "react";
import { OurTeamObj } from "typing";

import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const ourTeam: OurTeamObj[] = [
   {
      imgUrl: "/images/team/team1.jpg",
      imgDescription: "Robert Park",
      cardTitle: "Robert Park",
      cardDescription: "Director",
      cardIcon: [
         {
            facebook: <FaFacebook className="h-5 w-5" />,
            twitter: <FaTwitter className="h-5 w-5" />,
            linkedIn: <FaLinkedin className="h-5 w-5" />,
         },
      ],
   },
   {
      imgUrl: "/images/team/team2.jpg",
      imgDescription: "Cheris Dieron",
      cardTitle: "Cheris Dieron",
      cardDescription: "Consultant",
      cardIcon: [
         {
            facebook: <FaFacebook className="h-5 w-5" />,
            twitter: <FaTwitter className="h-5 w-5" />,
            linkedIn: <FaLinkedin className="h-5 w-5" />,
         },
      ],
   },
   {
      imgUrl: "/images/team/team3.jpg",
      imgDescription: "Jasmine Kohsli",
      cardTitle: "Jasmine Kohsli",
      cardDescription: "Member",
      cardIcon: [
         {
            facebook: <FaFacebook className="h-5 w-5" />,
            twitter: <FaTwitter className="h-5 w-5" />,
            linkedIn: <FaLinkedin className="h-5 w-5" />,
         },
      ],
   },
   {
      imgUrl: "/images/team/team5.jpg",
      imgDescription: "Robert Mane",
      cardTitle: "Robert Mane",
      cardDescription: "Member",
      cardIcon: [
         {
            facebook: <FaFacebook className="h-5 w-5" />,
            twitter: <FaTwitter className="h-5 w-5" />,
            linkedIn: <FaLinkedin className="h-5 w-5" />,
         },
      ],
   },
];

export default function OurTeam() {
   return (
      <div className="relative">
         <Image
            src="/images/ourvision/background-vision.png"
            alt="Vercel Logo"
            width="0"
            height="0"
            sizes="100vw"
            className="pointer-events-none absolute bottom-0 right-0 -z-10 h-full w-full object-contain"
         />

         <section className="section_container pt-24">
            <div className="md:mt-20">
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
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 py-24 md:grid-cols-2 lg:grid-cols-4 lg:gap-y-0">
               {ourTeam?.map((vision, index) => (
                  <div
                     key={index}
                     className="relative w-full space-y-3 border-2 bg-white p-8"
                  >
                     <Image
                        src={vision.imgUrl}
                        alt={vision.imgDescription}
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="mx-auto block h-40 w-40 rounded-full object-cover"
                     />
                     <div className="mb- absolute -bottom-5 w-full">
                        {vision?.cardIcon?.map((fsocials, index) => (
                           <div
                              className="-ml-8 flex w-full justify-center space-x-4"
                              key={index}
                           >
                              <p className="flex h-12 w-12 items-center justify-center rounded-full bg-red-700 text-white">
                                 {fsocials.facebook}
                              </p>
                              <p className="flex h-12 w-12 items-center justify-center rounded-full bg-red-700 text-white">
                                 {fsocials.twitter}
                              </p>
                              <p className="flex h-12 w-12 items-center justify-center rounded-full bg-red-700 text-white">
                                 {fsocials.linkedIn}
                              </p>
                           </div>
                        ))}
                     </div>

                     <Title
                        titleStyle="text-center text-lg pt-4"
                        title={vision.cardTitle}
                     />
                     <p className="text-center font-quicksand text-base font-normal text-fourth">
                        {vision.cardDescription}
                     </p>
                  </div>
               ))}
            </div>
         </section>
      </div>
   );
}
