import Footer from "@/Footer";
import Header from "@/Header";
import { ChildrenComp } from "typing";

export default function DefaultLayout({ children }: ChildrenComp) {
   return (
      <>
         <Header />
         {children}
         <Footer />
      </>
   );
}
