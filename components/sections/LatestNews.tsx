import Button from "@/partials/Button";
import Date from "@/partials/Date";
import Title from "@/partials/Title";
import Image from "next/image";
import React from "react";
import { LatesNewsObj } from "typing";

const latestNews: LatesNewsObj[] = [
   {
      postImage: "/images/latestnews/blog_1.jpg",
      postAlt: "How To Start A Home-Based Business?",
      postTitle: "How To Start A Home-Based Business?",
      postDate: <Date dateString={"2023-02-28T14:05:22"} />,
   },
   {
      postImage: "/images/latestnews/blog_2.jpg",
      postAlt: "How To Make Trust Your Competitive Advantage?",
      postTitle: "How To Make Trust Your Competitive Advantage?",
      postDate: <Date dateString={"2023-03-01T14:05:22"} />,
   },
];

export default function LatestNews() {
   return (
      <section className="section_container pb-12 md:py-12">
         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex h-[450px] w-full flex-col justify-center rounded-3xl p-4">
               <Title
                  titleStyle="text-[40px] md:text-[50px] "
                  title="Read Our Latest News"
               />
               <p className="font-quicksand text-lg font-normal text-primary">
                  Lorem ipsum dolor sit amet, consec tetur adipiscing elitd do
                  eiusmod tempor incididunt ut lore magna aliqua.
               </p>
               <Button btnStyle="px-4 py-2 mt-6" btnName="Read More" />
            </div>
            {latestNews?.map((posts, index) => (
               <div
                  key={index}
                  className="relative h-[450px] w-full overflow-hidden rounded-3xl bg-red-700"
               >
                  <Image
                     src={posts?.postImage}
                     alt={posts?.postAlt}
                     width="0"
                     height="0"
                     sizes="80vw"
                     className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/50 text-white transition duration-300 ease-out hover:bg-black/60">
                     <p className="absolute bottom-16 px-8 font-quicksand text-2xl font-bold ">
                        <span className="block text-[14px]">
                           Demoteam | {posts?.postDate}
                        </span>
                        {posts.postTitle}
                     </p>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
}
