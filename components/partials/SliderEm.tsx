import { useState, useEffect, useRef } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";

interface EmblaCarouselProps {
   slides: { username: string; title: string; description: string }[];
}

const SliderEm: React.FC<EmblaCarouselProps> = ({ slides }) => {
   const [viewportRef, embla] = useEmblaCarousel();
   const [selectedIndex, setSelectedIndex] = useState(0);
   const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
   const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
   const prevBtnRef = useRef<HTMLButtonElement>(null);
   const nextBtnRef = useRef<HTMLButtonElement>(null);

   const scrollPrev = () => embla && embla.scrollPrev();
   const scrollNext = () => embla && embla.scrollNext();

   const onSelect = () => {
      if (!embla) return;
      setPrevBtnEnabled(embla.canScrollPrev());
      setNextBtnEnabled(embla.canScrollNext());
      setSelectedIndex(embla.selectedScrollSnap());
   };

   const scrollSnapList = embla && embla.scrollSnapList();
   // Check if scrollSnapList is defined before mapping over it
   const dots =
      scrollSnapList &&
      scrollSnapList.map((snap, index) => (
         <button
            key={index}
            className={`mx-2 h-3 w-3 cursor-pointer rounded-full border-2 border-white  outline-none transition duration-300 ease-in-out ${
               index === selectedIndex
                  ? "mx-2 h-2 w-7 cursor-pointer rounded-full border-2 bg-white outline-none transition duration-300 ease-in-out"
                  : ""
            }`}
            onClick={() => embla && embla.scrollTo(index)}
         />
      ));

   useEffect(() => {
      if (!embla) return;
      onSelect();
      embla.on("select", onSelect);

      if (embla) {
         embla.on("select", onSelect);
         onSelect();
      }
      return () => embla && embla.destroy();
   }, [embla]);

   return (
      <div className="relative">
         <div className="overflow-hidden" ref={viewportRef}>
            <div className="md:ml-[calc(var(--slide-spacing) * -1)] flex h-auto flex-row">
               {slides.map((slide, index) => (
                  <div
                     className="relative mr-4 w-[70%] min-w-0 flex-shrink-0 rounded-2xl bg-white p-8 font-quicksand  text-primary md:m-8 md:w-[100%]"
                     key={index}
                  >
                     <p className="text-2xl font-bold text-primary">
                        {slide.username}
                     </p>
                     <p className="text-base font-bold">{slide.title}</p>
                     <p className="mt-3">{slide.description}</p>
                  </div>
               ))}
            </div>
         </div>
         <div className="absolute -bottom-8 ml-auto mr-auto flex w-full justify-center md:-bottom-4 ">
            {dots}
         </div>
      </div>
   );
};

export default SliderEm;
