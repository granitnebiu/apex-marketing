import React from "react";
import { TitleProps } from "typing";

export default function Title({ title, titleStyle }: TitleProps) {
   return (
      <p
         className={`${titleStyle} mb-5 font-quicksand  font-bold leading-[1.1em] text-secondary`}
      >
         {title}
      </p>
   );
}
