import Image from "next/image";
import React from "react";
import { FaRegCalendarAlt, FaRegComments, FaRegUser } from "react-icons/fa";
import { cardBlogData } from "~/utils/blog-cards/blogCardData";
import Date from "./partials/Date";

export default function CardsBlogs() {
   return (
      <section className="section_container flex items-center justify-center">
         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {cardBlogData?.map((cardBlog, index) => (
               <div
                  key={index}
                  className=" group relative h-96 w-full rounded-2xl"
               >
                  <Image
                     src={`/images/blog-cards/${cardBlog?.card_image}`}
                     width="0"
                     alt={cardBlog?.card_alt}
                     height="0"
                     sizes="100vw"
                     className="h-full w-full rounded-2xl object-cover"
                  />
                  <div className=" absolute inset-0 rounded-2xl bg-black/40 transition duration-500 ease-in-out group-hover:bg-black/80">
                     <div className="flex h-full flex-col justify-end space-y-4 px-4 pb-8">
                        <p className="block w-28 bg-secondary px-2 py-1 text-center font-quicksand font-bold uppercase text-white group-hover:bg-primary">
                           {cardBlog?.category}
                        </p>
                        <h3 className="font-quicksand text-xl capitalize text-white after:mt-2 after:block after:h-0.5 after:w-[50px] after:bg-white after:content-['']">
                           {cardBlog?.title}
                        </h3>
                        <div className="flex flex-wrap gap-x-4 pt-8 text-[12px] text-white">
                           <div className="flex  items-center gap-x-2">
                              <FaRegCalendarAlt className="h-3 w-3" />
                              <Date dateString={cardBlog?.date} />
                           </div>
                           <div className="flex  items-center gap-x-2">
                              <FaRegUser className="h-3 w-3" />
                              <p>{cardBlog?.posted_by}</p>
                           </div>
                           <div className="flex  items-center gap-x-2">
                              <FaRegComments className="h-3 w-3" />
                              <p>{cardBlog?.comment}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
}
