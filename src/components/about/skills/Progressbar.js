import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Progress = (props) => {
  let color = "#2563EB";
  const width = props.percentage;

  if (width < "40" && width > "1") {
    color = "#9F1239";
  }
  if (width > "40" && width < "70") {
    color = "#FBBF24";
  }
  const [ref, inView] = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        width: width,
        transition: {
          duration: 1,
          type: "spring",
          stiffness: 100,
          bounce: 0.3,
        },
      });
    }
  }, [inView,width,animation]);
  return (
    <>
      <div ref={ref} className="flex justify-between mb-1 mt-4">
        <span className="text-base font-medium  text-white">
          {props.name}
        </span>
        <span className="text-sm font-medium  text-white">{width}</span>
      </div>
      <div className="w-full  rounded-full h-4 bg-gray-700">
        <motion.div
          animate={animation}
          className="h-4 rounded-full"
          style={{ width: 0, backgroundColor: color }}
        ></motion.div>
      </div>
    </>
  );
};

export default Progress;
