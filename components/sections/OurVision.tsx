import Title from "@/partials/Title";
import Image from "next/image";
import React from "react";
import { FaBullhorn, FaUsers, FaChartLine } from "react-icons/fa";

const ourVision = [
   {
      imgUrl: "/images/ourvision/ourvision-1.jpg",
      imgDescription: "Digital Marketing",
      cardTitle: "Digital Marketing",
      cardDescription:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullam corper mattis, pulvinar dapibus.",
      cardIcon: <FaBullhorn className="h-8 w-8" />,
   },
   {
      imgUrl: "/images/ourvision/ourvision-2.jpg",
      imgDescription: "Keyword Research",
      cardTitle: "Keyword Research",
      cardDescription:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullam corper mattis, pulvinar dapibus.",
      cardIcon: <FaUsers className="h-8 w-8" />,
   },
   {
      imgUrl: "/images/ourvision/ourvision-3.jpg",
      imgDescription: "Marketing Analysis",
      cardTitle: "Marketing Analysis",
      cardDescription:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullam corper mattis, pulvinar dapibus.",
      cardIcon: <FaChartLine className="h-8 w-8" />,
   },
];
export default function OurVision() {
   return (
      <div className="relative">
         <Image
            src="/images/ourvision/background-vision.png"
            alt="Vercel Logo"
            width="0"
            height="0"
            sizes="100vw"
            className="pointer-events-none absolute bottom-0 right-0 h-full w-full object-cover"
         />

         <section className="section_container pt-24">
            <div className="mt-20">
               <Title
                  titleStyle="text-[50px] text-center"
                  title="Our Vision, Our Passion"
               />
               <p className="mx-auto block w-2/3 text-center font-quicksand text-lg font-normal text-fourth">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elitd do
                  eiusmod tempor incididunt ut lore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida.
               </p>
            </div>
            <div className="flex py-24">
               {ourVision?.map((vision, index) => (
                  <div key={index} className="space-y-4 px-4">
                     <div className="relative">
                        <Image
                           src={vision.imgUrl}
                           alt={vision.imgDescription}
                           width="0"
                           height="0"
                           sizes="100vw"
                           className="w-max-48 xl:w-max-72 mx-auto block h-48 w-48 rounded-full object-cover xl:h-72 xl:w-72"
                        />
                        <div className="absolute bottom-0 right-0 flex h-24 w-24 items-center justify-center rounded-full bg-red-700 text-white">
                           {vision.cardIcon}
                        </div>
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
