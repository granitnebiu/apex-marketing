import React, { CSSProperties } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as CarouseLResponsive } from "react-responsive-carousel";
import Image from "next/image";
import Title from "./partials/Title";
import Date from "./partials/Date";
import { FaRegCalendarAlt, FaRegUser, FaRegComments } from "react-icons/fa";
import { sliderItems } from "~/utils/sliders/sliderItems";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

export default function CarouselSlider() {
   const arrowStyles: CSSProperties = {
      position: "absolute",
      zIndex: 9999999,
      top: "calc(50% - 15px)",
      width: 30,
      height: 30,
      cursor: "pointer",
   };

   const indicatorStyles: CSSProperties = {
      background: "transparent",
      display: "inline-block",
      margin: "0 2px",
      width: "10px",
      height: "10px",
      borderRadius: "100%",
      border: "2px solid white",
   };

   return (
      <CarouseLResponsive
         className="group "
         showThumbs={false}
         autoPlay
         showStatus={false}
         emulateTouch={true}
         useKeyboardArrows={true}
         infiniteLoop
         renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
               <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{ ...arrowStyles, left: 15 }}
               >
                  <HiOutlineChevronLeft className="h-10 w-10 text-transparent transition duration-500 ease-in-out group-hover:text-white" />
               </button>
            )
         }
         renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
               <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{ ...arrowStyles, right: 15 }}
               >
                  <HiOutlineChevronRight className="h-10 w-10 text-transparent transition duration-500 ease-in-out group-hover:text-white" />
               </button>
            )
         }
         renderIndicator={(onClickHandler, isSelected, index, label) => {
            if (isSelected) {
               return (
                  <li
                     className="border-2 border-white"
                     style={{
                        ...indicatorStyles,
                        background: "white",
                        width: "10px",
                        height: "10px",
                        borderRadius: "100%",
                     }}
                     aria-label={`Selected: ${label} ${index + 1}`}
                     title={`Selected: ${label} ${index + 1}`}
                  />
               );
            }
            return (
               <li
                  style={indicatorStyles}
                  onClick={onClickHandler}
                  onKeyDown={onClickHandler}
                  value={index}
                  key={index}
                  role="button"
                  tabIndex={0}
                  title={`${label} ${index + 1}`}
                  aria-label={`${label} ${index + 1}`}
               />
            );
         }}
      >
         {sliderItems?.map((slider, index) => (
            <div key={index} className="relative h-[600px] ">
               <Image
                  src={`/images/sliders/${slider?.slider_image}`}
                  width="0"
                  alt={slider?.slider_alt}
                  height="0"
                  sizes="100vw"
                  className="pointer-events-none absolute bottom-0 right-0 h-full w-full object-cover"
               />
               <div className=" absolute top-0 h-full w-full bg-black/30 pt-24 text-left font-quicksand text-white md:pt-48 ">
                  <div className="section_container px-16">
                     <div className="space-y-4">
                        <p className="text-base underline">
                           {slider?.category}
                        </p>
                        <Title
                           titleStyle="text-[30px] md:text-[40px] w-full md:w-2/3 text-white uppercase"
                           title="How stay calm from the first time in business"
                        />
                        <div className="flex gap-x-2 text-[12px] md:gap-x-8">
                           <div className="flex  items-center gap-x-2">
                              <FaRegCalendarAlt className="h-3 w-3" />
                              <Date dateString={slider?.date} />
                           </div>
                           <div className="flex  items-center gap-x-2">
                              <FaRegUser className="h-3 w-3" />
                              <p>{slider?.posted_by}</p>
                           </div>
                           <div className="flex  items-center gap-x-2">
                              <FaRegComments className="h-3 w-3" />
                              <p>{slider?.comment}</p>
                           </div>
                        </div>
                        <p className="w-full text-base md:w-2/3">
                           {slider?.description}
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         ))}
      </CarouseLResponsive>
   );
}
