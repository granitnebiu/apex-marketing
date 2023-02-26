import Link from "next/link";
import React from "react";
import { MenuItem } from "typing";

const menuItems: MenuItem[] = [
   {
      label: "Home",
      url: "/",
   },
   {
      label: "About Us",
      url: "/",
   },
   {
      label: "Case Studies",
      url: "/",
   },
   {
      label: "Blog",
      url: "/",
   },
   {
      label: "Contact Us",
      url: "/",
   },
];

export default function Menu() {
   return (
      <nav className="space-x-8 font-bold uppercase text-white">
         {menuItems.map((menu, index) => (
            <Link key={index} href={menu.url}>
               {menu.label}
            </Link>
         ))}
      </nav>
   );
}
