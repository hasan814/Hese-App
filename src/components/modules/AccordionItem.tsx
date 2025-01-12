import { AccordionItemProps } from "@/types";

import React from "react";

const AccordionItem: React.FC<AccordionItemProps> = ({
  step,
  isOpen,
  onClick,
}) => {
  return (
    <div
      className={`rounded-lg overflow-hidden mb-4 border border-black shadow ${
        isOpen ? "bg-yellow shadow-black" : "bg-gray-200 shadow-black"
      }`}
    >
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={onClick}
      >
        <div className="flex items-center">
          <span
            className={`text-2xl font-bold ${
              isOpen ? "text-black" : "text-gray-700"
            }`}
          >
            {step.number}
          </span>
          <h2
            className={`ml-4 text-xl font-medium ${
              isOpen ? "text-black" : "text-gray-700"
            }`}
          >
            {step.title}
          </h2>
        </div>
        <span
          className={`w-8 h-8 flex items-center justify-center rounded-full border ${
            isOpen
              ? "bg-gray-100 text-black border-black"
              : "bg-gray-100 text-black border-black"
          }`}
        >
          {isOpen ? "−" : "+"}
        </span>
      </div>
      {isOpen && (
        <div className="p-4 text-black text-sm bg-grayLight">
          <hr className="my-4 border-t border-black" />
          {step.description}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
