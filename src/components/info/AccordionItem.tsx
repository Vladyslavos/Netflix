import React from "react";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { Collapse } from "react-collapse";

export default function AccordionItem({ open, toggle, item }: any) {
  return (
    <>
      <div>
        <div
          className="flex justify-between cursor-pointer h-[90px] mt-2 bg-[#2D2D2D] p-4 items-center hover:bg-[#4e4e4e]"
          onClick={toggle}
        >
          <h2 className="text-2xl">{item.question}</h2>
          {open ? (
            <AiOutlineClose className="font-bold text-4xl" />
          ) : (
            <AiOutlinePlus className="font-bold text-4xl" />
          )}
        </div>
        <Collapse isOpened={open}>
          <div className="bg-[#2D2D2D] border-t-2 border-black text-2xl p-4">
            {item.answer}
          </div>
        </Collapse>
      </div>
    </>
  );
}
