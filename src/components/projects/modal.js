import React from "react";
import { CgClose } from "react-icons/cg";
const Modal = (props) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center ">
      <div className=" relative bg-white w-11/12" style={{borderRadius:'6px'}}>
        <CgClose
          onClick={props.setIsOpen}
          className="h-8 w-8 absolute right-4 top-2 text-slate-800 cursor-pointer"
          title="close"
        />
        {props.children}
      </div>
    </div>
  );
};

export default Modal;