import Footer from "@/Footer";
import Header from "@/Header";

export default function DefaultPage({ children }) {
   return (
      <div className="bg-postColor dark:bg-graylight/10 h-full  w-full">
         <Header />
         <div>{children}</div>
         <Footer />
      </div>
   );
}
