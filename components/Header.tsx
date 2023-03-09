import Image from "next/image";
import Link from "next/link";
import React from "react";
import Menu from "./partials/Menu";
import MenuMobile from "./partials/MenuMobile";

export default function Header() {
   return (
      <header className="flex items-center bg-primary py-6">
         <div className="container flex w-full select-none items-center justify-between">
            <div>
               <Link href="/">
                  <Image
                     src="/images/logo.png"
                     alt="Vercel Logo"
                     className="w-48"
                     width={100}
                     height={24}
                     priority
                  />
               </Link>
            </div>
            <Menu />
            <MenuMobile />
         </div>
      </header>
   );
}
