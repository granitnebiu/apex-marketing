import Date from "@/partials/Date";
import InputForm from "@/partials/InputForm";
import TitleStyles from "@/partials/TitleStyles";
import TruncatedHtml from "@/partials/TruncatedHtml";

import Image from "next/image";
import React from "react";
import { FaRegCalendarAlt, FaRegComments, FaRegUser } from "react-icons/fa";
import { blogPostData } from "~/utils/blog-posts/blogPostData";
import { AiOutlineSearch, AiOutlineComment } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";
import Link from "next/link";

export default function BlogPosts() {
   const categories = [
      {
         catName: "Business",
         catUrl: "/",
         catCount: 4,
      },
      {
         catName: "Consultant",
         catUrl: "/",
         catCount: 1,
      },
      {
         catName: "Development",
         catUrl: "/",
         catCount: 2,
      },
      {
         catName: "Marketing",
         catUrl: "/",
         catCount: 3,
      },
   ];
   return (
      <section className="section_container flex items-center justify-center pb-32 font-quicksand ">
         <div className="flex w-full flex-col gap-x-8 md:flex-row">
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
            <div className="w-full space-y-6 font-quicksand md:w-1/3">
               <div className="space-y-8 pb-8">
                  <TitleStyles titleText="Search" />
                  <InputForm
                     type="text"
                     placeholder="Search"
                     id="search"
                     name="search"
                     showIcons={true}
                     icon={<AiOutlineSearch className="h-4 w-5 text-white" />}
                  />
               </div>
               <div className="space-y-8 pb-8">
                  <TitleStyles titleText="Latest Posts" />
                  {blogPostData.slice(0, 5).map((latest, index) => (
                     <div
                        key={index}
                        className="flex w-full items-center space-x-4 border-b-2 border-white/20 pt-1 last:border-none"
                     >
                        <Image
                           src={`/images/blog-cards/${latest?.post_image}`}
                           alt={latest?.post_alt}
                           width="0"
                           height="0"
                           sizes="100vw"
                           className="h-12 w-16 object-cover"
                        />
                        <div className="flex flex-col text-[12px]">
                           <Link href="" className="font-quicksand  font-bold">
                              {latest?.title}
                           </Link>
                           <div className="flex items-center gap-4">
                              <div className="flex items-center gap-2">
                                 <BsCalendarDate className="h-3 w-3 text-primary" />
                                 <Date dateString={latest?.date} />
                              </div>
                              <div className="flex items-center gap-2">
                                 <AiOutlineComment className="h-3 w-3 text-primary" />
                                 <p>0</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
               <div className="space-y-2 pb-8">
                  <TitleStyles extraStyle="pb-8" titleText="Categories" />
                  {categories?.map((cate, indx) => (
                     <div
                        key={indx}
                        className="flex w-full justify-between border-b-2 border-white/20 pt-1 pb-4 last:border-none"
                     >
                        <Link
                           href={cate.catUrl}
                           className="font-quicksan w-full"
                        >
                           {cate.catName}
                        </Link>
                        <span className="w-full text-right">
                           ({cate.catCount})
                        </span>
                     </div>
                  ))}
               </div>
               <div className="space-y-2 pb-8">
                  <TitleStyles extraStyle="pb-8" titleText="recent posts" />
                  <div className="space-y-4">
                     {blogPostData.slice(0, 5).map((recent, index) => (
                        <div key={index} className="space-y-1">
                           <h3 className="text-[15px]">{recent?.title}</h3>
                           <div className="text-[13px] text-gray-400">
                              <Date dateString={recent?.date} />
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
