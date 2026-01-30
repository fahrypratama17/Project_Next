"use client";

import { faqProps } from "@/types/types";
import { RiAddLine, RiSubtractLine } from "@remixicon/react";
import { useState } from "react";

const FaqCard = ({ title, text }: faqProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div className="py-5">
      <div className="flex items-start gap-2">
        <button
          className="bg-primary-100 text-primary-800 hover:bg-primary-300 flex size-8 shrink-0 items-center justify-center rounded-lg transition-colors"
          onClick={handleClick}
        >
          {isOpen ? <RiSubtractLine /> : <RiAddLine />}
        </button>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>

      <div
        className={`max-h-0 overflow-y-hidden transition-[max-height] ${isOpen ? "max-h-60 overflow-y-auto" : ""}`}
      >
        <p className="mx-8 p-2">{text}</p>
      </div>
    </div>
  );
};

export default FaqCard;
