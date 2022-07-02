import { motion } from "framer-motion";

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity:0},
};

const Transitions = (props) => {
  return (
    <motion.div
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: props.duration ? props.duration : .1 }}
      className={props.className}
      style={props.style}
    >
      {props.children}
    </motion.div>
  );
};
export default Transitions;
