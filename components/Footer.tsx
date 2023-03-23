import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
   FaFacebook,
   FaTwitter,
   FaInstagram,
   FaLinkedin,
   FaYoutube,
} from "react-icons/fa";

const socialLinks = [
   {
      socialIcon: <FaFacebook className="h-5 w-5" />,
      socialLink: "/",
   },
   {
      socialIcon: <FaTwitter className="h-5 w-5" />,
      socialLink: "/",
   },
   {
      socialIcon: <FaInstagram className="h-5 w-5" />,
      socialLink: "/",
   },
   {
      socialIcon: <FaLinkedin className="h-5 w-5" />,
      socialLink: "/",
   },
   {
      socialIcon: <FaYoutube className="h-5 w-5" />,
      socialLink: "/",
   },
];

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
export default function Footer() {
   return (
      <footer className="sticky top-[100vh] bg-primary">
         <div className="relative bg-primary/90">
            <Image
               src="/images/bg-footer.jpg"
               alt="Vercel Logo"
               width="0"
               height="0"
               sizes="100vw"
               className="pointer-events-none  absolute bottom-0 right-0 -z-10 h-full w-full object-cover"
            />
            <div className="section_container z-10 w-full">
               <div className="grid-col-1 grid gap-8 py-24 text-white md:grid-cols-2 lg:grid-cols-4">
                  <div className=" space-y-8 ">
                     <h2 className="border-l-2 px-4 font-quicksand text-lg font-bold">
                        About Bosa Marketing
                     </h2>
                     <p className="font-quicksand text-base font-normal">
                        Accusantium vel interdum quae euis mod, laoreet fames
                        quaerat? Amet minima, velit aliquet dicta? Urna, nostrud
                        voluptate, mi vero, tenetur excepteur, diam lorem
                        aliquam saepe, laoreet. Provident torquent dignissimos.
                     </p>
                  </div>
                  <div className="">
                     <h2 className="mb-8 border-l-2 px-4 font-quicksand text-lg font-bold">
                        Our Office
                     </h2>
                     <Image
                        src="/images/office-map.png"
                        alt="marketing-solutions"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="h-auto w-full"
                     />
                  </div>
                  <div className=" ">
                     <h2 className="mb-8 border-l-2 px-4 font-quicksand text-lg font-bold">
                        Latest Posts
                     </h2>
                     <div className="space-y-4">
                        <div className="flex w-full items-center space-x-4 border-b-2 border-white/20 pt-1 pb-4 last:border-none">
                           <Image
                              src="/images/case-studies/case-studies-2.jpg"
                              alt="marketing-solutions"
                              width="0"
                              height="0"
                              sizes="100vw"
                              className="h-14 w-24 md:h-10"
                           />
                           <Link
                              href=""
                              className="font-quicksand text-[14px] font-bold"
                           >
                              Getting ready for the Marketing revolution.
                           </Link>
                        </div>
                        <div className="flex w-full items-center space-x-4 border-b-2 border-white/20 pt-1 pb-4 last:border-none">
                           <Image
                              src="/images/case-studies/case-studies-1.jpg"
                              alt="marketing-solutions"
                              width="0"
                              height="0"
                              sizes="100vw"
                              className="h-14 w-24 md:h-10"
                           />
                           <Link
                              href=""
                              className="font-quicksand text-[14px] font-bold"
                           >
                              Getting ready for the Marketing revolution.
                           </Link>
                        </div>
                     </div>
                  </div>
                  <div className="">
                     <h2 className="mb-8 border-l-2 px-4 font-quicksand text-lg font-bold">
                        Categories
                     </h2>
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
               </div>
            </div>
         </div>
         <div className="container flex w-full flex-col items-center justify-between space-y-4 py-8 md:flex-row md:space-y-0">
            <div className="flex space-x-5 text-white">
               {socialLinks?.map((social, index) => (
                  <div className="rounded-full bg-white/20 p-3" key={index}>
                     <Link href={social?.socialLink}>{social?.socialIcon}</Link>
                  </div>
               ))}
            </div>
            <div className="flex-end flex flex-col items-center space-y-8 font-quicksand text-sm text-white/50 md:items-end md:space-y-0">
               <p className="text-center">
                  Copyright © 2023 Apex Marketing. Powered by
                  <span className="text-white"> Apex Marketing</span>
               </p>
               <div className="flex text-white md:text-right">
                  <Link className="border-x-2 px-4" href="">
                     Terms & Conditions
                  </Link>
                  <Link className="border-r-2 px-4" href="">
                     Privacy Policy
                  </Link>
                  <Link className=" px-4" href="">
                     FAQs
                  </Link>
               </div>
            </div>
         </div>
      </footer>
   );
}
