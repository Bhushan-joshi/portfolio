import { motion } from "framer-motion";
const animationConfiguration = {
  initial: { y: 20 },
  animate: { y: 0 },
  exit: { y: -20 },
};

const Education = () => {
  return (
    <div className=" m-10 mr-0 sm:mr-10 mb-36">
      <motion.h1
        className="text-center text-4xl pt-10"
        style={{ color: "#99b898", fontFamily: "Roboto" }}
        variants={animationConfiguration}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1,type: "spring", stiffness: 100}}
      >
        Education
      </motion.h1>
      <div className="w-full mt-16 flex justify-center items-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
          <div className="col-span-4 w-full h-full ">
            <motion.div
              variants={animationConfiguration}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 1,type: "spring", stiffness: 100}}
              className="w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4"
             
            >
              <h1 className="text-white text-xl font-medium py-2">
                DR.G.Y. Pathrikar College of CS and IT
              </h1>
              <p className="text-gray-100 sm:text-sm text-xs">
                Dr. Babasaheb Ambedkar Marathwada University
                <br />
                2019-2022
              </p>
            </motion.div>
          </div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-indigo-300"></div>
            <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">
              3
            </div>
          </div>
          <div className="col-span-4 w-full h-full"></div>

          <div className="col-span-4 w-full h-full"></div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-indigo-300"></div>
            <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">
              2
            </div>
          </div>
          <div className="col-span-4 w-full h-full ">
            <motion.div
              variants={animationConfiguration}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 1,type: "spring", stiffness: 100}}
              className="w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4"
            >
              <h1 className="text-white text-xl font-medium py-2">
                Shivchhatrapati College
              </h1>
              <p className="text-gray-100 sm:text-sm text-xs">
                Maharashtra State Board <br />
                2017-2019
              </p>
            </motion.div>
          </div>

          <div className="col-span-4 w-full h-full ">
            <motion.div
              variants={animationConfiguration}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 1,type: "spring", stiffness: 100}}
              className="w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4"
            >
              <h1 className="text-white text-xl font-medium py-2">
                MAHARSHI VIDYALAY
              </h1>
              <p className="text-gray-100 sm:text-sm text-xs">
                Maharashtra State Board <br></br>
                2017
              </p>
            </motion.div>
          </div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-indigo-300"></div>
            <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">
              1
            </div>
          </div>
          <div className="col-span-4 w-full h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Education;
