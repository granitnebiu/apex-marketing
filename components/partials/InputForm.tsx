interface Props {
   placeholder: string;
   type: string;
   name: string;
   id: string;
}

export default function InputForm({
   type = "text",
   name,
   placeholder = "",
   id,
}: Props) {
   return (
      <>
         <div className="flex w-full flex-col justify-center">
            <input
               id={id}
               className="flex h-12 w-full items-center rounded-full border border-primary border-opacity-20   px-4 pl-8 outline-none "
               type={type}
               name={name}
               placeholder={placeholder}
               autoComplete="off"
            />
         </div>
      </>
   );
}
