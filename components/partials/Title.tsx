import React from "react";

export default function Title({ title, titleStyle }) {
   return (
      <p
         className={`${titleStyle} mb-5 font-quicksand  font-bold leading-[1.1em] text-secondary`}
      >
         {title}
      </p>
   );
}
