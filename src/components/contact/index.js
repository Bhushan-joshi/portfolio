import React, { useEffect, useState } from "react";
import "./about.css";
import Form from "./form";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { motion } from "framer-motion";
import Transitions from "../Transitions";
import Icons from "./icons";

const Contact = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const clearInput = () => {
    setName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };
  useEffect(() => {
    document.title = "Contact me";
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    addDoc(collection(db, "contacts"), {
      name: name,
      lastName: lastName,
      email: email,
      message: message,
    })
      .then((res) => {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      })
      .catch((err) => {
        console.log(err);
      });
    clearInput();
  };

  return (
    <Transitions>
      <div className="bg_img w-screen h-screen flex justify-center">
        <div className="h-5/6 sm:w-8/12 w-full mt-10">
          <motion.h1
            initial={{ opacity: 0, y: "20px" }}
            animate={{ opacity: 1, y: "0" }}
            transition={{ duration: 0.7, type: "spring", stiffness: 70 }}
            className="text-5xl flex justify-center mb-4"
            style={{ color: "#e1685e" }}
          >
            Contact
          </motion.h1>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: "-50px" }}
              animate={{ opacity: 1, y: "0" }}
              transition={{ duration: 1, type: "spring", stiffness: 110 }}
              className="bg-teal-100 sm:mx-20 mx-4  border-t-4 border-teal-500 rounded-b text-teal-900 px-6 py-3 shadow-md"
              role="alert"
            >
              <div className="flex">
                <div className="py-1">
                  <svg
                    className="fill-current h-6 w-6 text-teal-500 mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold">
                    Thank you for getting in touch with me
                  </p>
                </div>
              </div>
            </motion.div>
          )}
          <Form
            name={name}
            setName={setName}
            lastName={lastName}
            setLastName={setLastName}
            email={email}
            setEmail={setEmail}
            message={message}
            setMessage={setMessage}
            onSubmit={onSubmit}
          />
          <div className="sm:px-20 py-2">
            <Icons />
          </div>
        </div>
      </div>
    </Transitions>
  );
};

export default Contact;
