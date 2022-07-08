import React, { useState, useEffect } from "react";
import Transitions from "../Transitions";
import Modal from "./modal";
import { motion,AnimatePresence } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Card = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const [ref, inView] = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: .1,
          type: "spring",
          stiffness: 110,
          bounce: 0.3,
          delay:.2
        },
      });
    }
  }, [inView, animation]);
  return (
    <Transitions>
      <motion.div
        animate={animation}
        onClick={() => setIsOpen(true)}
        className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white text-black cursor-pointer"
        ref={ref}
        style={{opacity:'0',y:'50px'}}
      >
        <img className="w-full" src={item.img} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{item.name}</div>

          <p className="text-gray-700 text-base truncate">{item.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {item.stack.map((st) => (
            <span
              key={st[0]}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 sm:mx-4 mb-3 mt-0"
            >
              #{st}
            </span>
          ))}
        </div>
      </motion.div>
      {isOpen && (
        <AnimatePresence key={item.id}>
        <Modal setIsOpen={closeModal}>
          <div className=" w-full lg:max-w-full lg:flex rounded-lg">
            <div className="sm:h-96 sm:w-96 flex-none bg-cover m-2 text-center overflow-hidden">
              <img
                className="w-full h-full rounded-md"
                src={item.img}
                alt="Sunset in the mountains"
              />
            </div>
            <div className=" border-gray-400  bg-white p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <div className="text-gray-900 font-bold sm:text-4xl text-2xl mb-2 mt-0 relative top-0">
                  {item.name}
                </div>
                <p className="text-gray-700 text-base">{item.description}</p>
              </div>
              <div className="sm:px-6 sm:pt-4 pb-2">
                {item.stack.map((st) => (
                  <span
                    key={st[0]}
                    className="inline-block bg-gray-200 rounded-full  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    #{st}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Modal>
        </AnimatePresence>
      )}
    </Transitions>
  );
};

export default Card;

// // initial={{
//   opacity:0,
//   y:'50px',
// }}
// animate={{
//   opacity:1,
//   y:0,
// }}
// transition={{ duration: 1,type: "spring", stiffness: 110}}
