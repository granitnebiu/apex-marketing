import { useRef } from "react";
import { useSpring, animated } from "react-spring";
import { useIntersection } from "react-use";
import { Percentage } from "typing";

const PercentageRange = ({ percentage }: Percentage) => {
   const ref = useRef(null);
   const intersection = useIntersection(ref, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
   });

   const springProps = useSpring({
      width:
         intersection && intersection.intersectionRatio >= 0.5
            ? `${percentage}%`
            : "0%",
      config: { tension: 220, friction: 20 },
   });

   return (
      <div
         ref={ref}
         style={{
            width: "100%",
            height: "15px",
            backgroundColor: "#eee",
            position: "relative",
            borderRadius: "20px",
         }}
      >
         <animated.div
            style={{
               height: "100%",
               backgroundColor: "#2E3840",
               position: "absolute",
               top: 0,
               left: 0,
               borderRadius: "20px",
               ...springProps,
            }}
         />
         <span
            style={{
               position: "absolute",
               color: "#ffffff",
               top: "50%",
               left: "50%",
               transform: "translate(-50%, -50%)",
            }}
         >
            {percentage}%
         </span>
      </div>
   );
};

export default PercentageRange;
