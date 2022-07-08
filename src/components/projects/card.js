import React, { useState } from "react";
import Modal from "./modal";

const Card = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white text-black cursor-pointer"
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
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{st}
            </span>
          ))}
        </div>
      </div>
      {isOpen && (
        <Modal setIsOpen={closeModal}>
          <div className=" w-full lg:max-w-full lg:flex rounded-lg">
            <div class="sm:h-96 sm:w-96 flex-none bg-cover m-2 text-center overflow-hidden">
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
                <p className="text-gray-700 text-base">
                  {item.description}
                </p>
              </div>
              <div className="sm:px-6 sm:pt-4 pb-2">
                {item.stack.map((st) => (
                  <span
                    key={st[0]}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    #{st}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Card;
