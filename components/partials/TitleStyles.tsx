import React from "react";

interface Props {
   titleText: string;
   extraStyle?: string;
}
export default function TitleStyles({ titleText, extraStyle = "" }: Props) {
   return (
      <h4
         className={`${extraStyle} flex items-center justify-center gap-x-2 font-quicksand 
      font-bold uppercase before:h-0.5 before:w-[20px] before:bg-gray-200
       before:content-[''] after:h-0.5 after:w-[20px]  after:bg-gray-200 after:content-['']`}
      >
         {titleText}
      </h4>
   );
}
