interface Props {
   placeholder: string;
   type: string;
   name: string;
   id: string;
   icon?: any;
   showIcons?: boolean;
}

export default function InputForm({
   type = "text",
   name,
   placeholder = "",
   id,
   icon,
   showIcons = false,
}: Props) {
   return (
      <>
         <div className="relative flex w-full flex-col justify-center">
            <input
               id={id}
               className="  flex h-12 w-full items-center rounded-full border border-primary border-opacity-20   px-4 pl-8 outline-none "
               type={type}
               name={name}
               placeholder={placeholder}
               autoComplete="off"
            />
            {showIcons && (
               <div className="absolute right-0 top-0 flex h-12 w-12 items-center justify-center rounded-r-full bg-primary">
                  {icon}
               </div>
            )}
         </div>
      </>
   );
}
