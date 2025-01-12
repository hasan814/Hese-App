"use client";

import { useState } from "react";
import { steps } from "@/utils/UseCasesLink";

import AccordionItem from "../modules/AccordionItem";

const UseCasesPages = () => {
  const [openStep, setOpenStep] = useState<number | null>(0);

  return (
    <div className="p-6 bg-grayLight min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-4">
          Our Working Process
        </h1>
        <p className="text-gray-700 mb-8">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
        <div>
          {steps.map((step, index) => (
            <AccordionItem
              key={step.number}
              step={step}
              isOpen={openStep === index}
              onClick={() => setOpenStep(openStep === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseCasesPages;
