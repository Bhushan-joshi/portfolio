import React from "react";
import { motion } from "framer-motion";

const Form = (props) => {
  return (
    <form className="sm:px-20 py-6" onSubmit={(e) => props.onSubmit(e)}>
      <div className="mx-14 flex  mb-10">
        <motion.input
          initial={{ opacity: 0, y: "20px" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ duration: 0.7, type: "spring", stiffness: 70 }}
          onChange={(e) => props.setName(e.target.value)}
          type={"text"}
          className="w-1/2 mr-4 h-12 font-bold border-b-yellow-600 sm:text-2xl text-xl  p-2   border-b-4 focus:outline-none  bg-transparent"
          placeholder="First Name"
          style={{ color: "#907bb9" }}
          value={props.name}
          required
        />
        <motion.input
          initial={{ opacity: 0, y: "20px" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ duration: 0.7, type: "spring", stiffness: 70 }}
          onChange={(e) => props.setLastName(e.target.value)}
          type={"text"}
          className="w-1/2 h-12 font-bold border-b-yellow-600 sm:text-2xl text-xl  p-2   border-b-4 focus:outline-none  bg-transparent"
          placeholder="Last Name"
          style={{ color: "#907bb9" }}
          value={props.lastName}
          required
        />
      </div>
      <div className="mx-14 mb-10">
        <motion.input
          initial={{ opacity: 0, y: "20px" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ duration: 0.7, type: "spring", stiffness: 70 }}
          onChange={(e) => props.setEmail(e.target.value)}
          type={"email"}
          className="w-full h-12 font-bold border-b-yellow-600 sm:text-2xl text-xl  p-2   border-b-4 focus:outline-none  bg-transparent"
          placeholder="Email"
          style={{ color: "#907bb9" }}
          value={props.email}
          required
        />
      </div>

      <div className="mx-14  mb-10">
        <motion.textarea
          initial={{ opacity: 0, y: "20px" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ duration: 0.7, type: "spring", stiffness: 70 }}
          onChange={(e) => props.setMessage(e.target.value)}
          rows="3"
          cols="50"
          className="w-full font-bold border-b-yellow-600 sm:text-2xl text-xl p-2 text-violet-500  border-b-4  focus:outline-none  bg-transparent"
          placeholder="Tell me about you"
          style={{ color: "#907bb9" }}
          value={props.message}
          required
        ></motion.textarea>
      </div>
      <div className="flex justify-center items-center">
        <motion.button
          initial={{ opacity: 0, y: "20px" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ duration: 0.7, type: "spring", stiffness: 70 }}
          type="submit"
          className="text-white bg-gradient-to-br from-yellow-600 to-purple-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 outline-none"
        >
          Submit
        </motion.button>
      </div>
    </form>
  );
};

export default Form;
