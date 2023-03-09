import Link from "next/link";
import React, { useState } from "react";
import { menuItems } from "~/utils/menus/menuItems";
import Button from "./Button";
import { IoMdClose } from "react-icons/io";
import { RiMenu4Line } from "react-icons/ri";
import { useRouter } from "next/router";

export default function MenuMobile() {
   const { asPath } = useRouter();
   const currentRoute = asPath;
   const [menuToggle, setMenuToggle] = useState(false);

   return (
      <>
         {menuToggle ? (
            <IoMdClose
               onClick={() => setMenuToggle(!menuToggle)}
               className="absolute right-8 top-8 z-[99999] h-8 w-8 text-white transition duration-500 lg:hidden "
            />
         ) : (
            <RiMenu4Line
               onClick={() => setMenuToggle(!menuToggle)}
               className="relative h-8 w-8 text-white transition duration-500 lg:hidden"
            />
         )}
         {menuToggle && (
            <nav className="absolute inset-0 z-50 flex h-full w-full select-none flex-col items-center justify-center space-y-8  bg-primary font-quicksand font-bold uppercase text-white  lg:hidden">
               {menuItems.map((menu, index) => (
                  <Link
                     className={`${
                        currentRoute === menu.url
                           ? "border-b-2 border-tertiary pb-2 text-tertiary transition duration-500"
                           : ""
                     }  border-b-2 border-b-transparent pb-2 text-xl transition duration-500 hover:border-b-2 hover:border-white hover:pb-2 hover:text-white `}
                     key={index}
                     href={menu.url}
                     onClick={() => setMenuToggle(!menuToggle)}
                  >
                     {menu.label}
                  </Link>
               ))}
               <Button btnName="Get a Quote" btnStyle="w-auto px-5 py-2" />
            </nav>
         )}
      </>
   );
}
