import React from "react";
import CardsBlogs from "@/blog/CardsBlogs";
import CarouselSlider from "@/blog/CarouselSlider";
import DefaultLayout from "Layout/DefaultLayout";
import BlogPosts from "@/blog/BlogPosts";

export default function Blog() {
   return (
      <DefaultLayout>
         <CarouselSlider />
         <div className="py-16">
            <CardsBlogs />
         </div>
         <BlogPosts />
      </DefaultLayout>
   );
}
