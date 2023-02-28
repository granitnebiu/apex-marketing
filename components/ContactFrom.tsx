import React from "react";
import Button from "./partials/Button";
import InputForm from "./partials/InputForm";
import TextArea from "./partials/TextArea";

export default function ContactFrom() {
   return (
      <form className="">
         <div className="space-y-4 md:space-y-6">
            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8">
               <InputForm
                  type="text"
                  placeholder="Name*"
                  id="name"
                  name="name"
               />
               <InputForm
                  type="email"
                  placeholder="Email*"
                  id="email"
                  name="email"
               />
            </div>
            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8">
               <InputForm
                  type="text"
                  placeholder="Phone*"
                  id="phone"
                  name="phone"
               />
               <InputForm
                  type="text"
                  placeholder="Subject*"
                  id="subject"
                  name="subject"
               />
            </div>
            <div className="flex">
               <TextArea
                  placeholder="Your Message*"
                  id="message"
                  name="message"
               />
            </div>
            <div>
               <Button btnName="Submit" btnStyle="py-3 px-6" />
            </div>
         </div>
      </form>
   );
}
