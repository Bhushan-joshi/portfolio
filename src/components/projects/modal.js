import React from "react";
import { CgClose } from "react-icons/cg";
import { motion , AnimatePresence } from "framer-motion";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      damping: 10,
      stiffness: 110,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = (props) => {
  return (
    <AnimatePresence>
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center "
      >
        <div
          className=" relative bg-white w-11/12"
          style={{ borderRadius: "6px" }}
        >
          <CgClose
            onClick={props.setIsOpen}
            className="h-8 w-8 absolute right-4 top-2 text-slate-800 cursor-pointer"
            title="close"
          />
          {props.children}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
