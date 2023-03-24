import React from "react";
import AccordionItem from "./AccordionItem";
import { data } from "./Questions";

export default function Accordion() {
  const [open, setOpen] = React.useState<any>(false);

  const toggle = (i: any) => {
    if (open === i) {
      return setOpen(null);
    } else {
      setOpen(i);
    }
  };
  return (
    <>
      <h1 className="text-white text-6xl font-bold flex justify-center">
        Frequently Asked Questions
      </h1>
      <div className="flex justify-center pt-[50px]">
        <div className="text-white p-5 sm:w-[550px] md:w-[650px] lg:w-[1150px]">
          {data.map((item, i): any => {
            return (
              <AccordionItem
                key={i}
                open={i === open}
                item={item}
                toggle={() => toggle(i)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
