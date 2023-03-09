import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { menuItems } from "~/utils/menus/menuItems";
import Button from "./Button";

export default function Menu() {
   const { asPath } = useRouter();
   const currentRoute = asPath;
   return (
      <nav className="hidden space-x-8 font-quicksand font-bold uppercase text-white lg:block">
         {menuItems.map((menu, index) => (
            <Link
               className={`${
                  currentRoute === menu.url
                     ? "border-b-2 border-tertiary pb-2 text-tertiary transition duration-500"
                     : ""
               }  transition duration-500 hover:border-b-2 hover:border-white hover:pb-2 hover:text-white `}
               key={index}
               href={menu.url}
            >
               {menu.label}
            </Link>
         ))}
         <Button btnName="Get a Quote" btnStyle="w-auto px-5 py-2" />
      </nav>
   );
}
