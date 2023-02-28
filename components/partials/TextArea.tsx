interface Props {
   placeholder: string;
   name: string;
   id: string;
}

export default function TextArea({ placeholder, name, id }: Props) {
   return (
      <>
         <div className="w-full  ">
            <textarea
               className="h-32 w-full rounded-3xl border border-primary border-opacity-20 pt-4 pl-8 outline-none "
               name={name}
               placeholder={placeholder}
               id={id}
               autoComplete="off"
            ></textarea>
         </div>
      </>
   );
}
