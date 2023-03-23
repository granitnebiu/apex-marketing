import Date from "@/partials/Date";
import TruncatedHtml from "@/partials/TruncatedHtml";
import Image from "next/image";
import React from "react";
import { FaRegCalendarAlt, FaRegComments, FaRegUser } from "react-icons/fa";
import { blogPostData } from "~/utils/blog-posts/blogPostData";

export default function BlogPosts() {
   return (
      <section className="section_container flex items-center justify-center pb-32 font-quicksand ">
         <div className="flex w-full gap-x-8">
            <div className="grid w-full grid-cols-1 gap-8 md:w-2/3 md:grid-cols-2">
               {blogPostData?.map((post, index) => (
                  <div className="h-full space-y-4" key={index}>
                     <Image
                        src={`/images/blog-cards/${post?.post_image}`}
                        width="0"
                        alt={post?.post_alt}
                        height="0"
                        sizes="100vw"
                        className="w-full rounded-2xl object-cover"
                     />
                     <p className="text-[14px] uppercase text-secondary underline">
                        {post?.category}
                     </p>
                     <h3 className="w-5/6  text-2xl font-bold capitalize">
                        {post?.title}
                     </h3>
                     <div className="flex flex-wrap gap-x-4 text-[12px]">
                        <div className="flex items-center gap-x-2">
                           <FaRegCalendarAlt className="h-3 w-3 text-secondary" />
                           <Date dateString={post?.date} />
                        </div>
                        <div className="flex  items-center gap-x-2">
                           <FaRegUser className="h-3 w-3 text-secondary" />
                           <p>{post?.posted_by}</p>
                        </div>
                        <div className="flex  items-center gap-x-2">
                           <FaRegComments className="h-3 w-3 text-secondary" />
                           <p>{post?.comment}</p>
                        </div>
                     </div>
                     <TruncatedHtml
                        content={post?.description}
                        maxLength={100}
                     />
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
