import Link from "next/link";
import { ButtonProps } from "typing";

export default function Button({ btnName, btnStyle }: ButtonProps) {
   return (
      <Link href="/">
         <button
            className={`${btnStyle} font-xl select-none rounded-full bg-secondary font-quicksand font-bold text-white transition duration-300 ease-out hover:bg-secondaryLight hover:ease-in`}
         >
            {btnName}
         </button>
      </Link>
   );
}
