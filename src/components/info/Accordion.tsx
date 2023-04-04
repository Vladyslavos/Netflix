import React from "react";
import AccordionItem from "./AccordionItem";
import { data } from "./Questions";
import { animation } from "../../animation/animation";
import { motion } from "framer-motion";

export default function Accordion() {
  const [open, setOpen] = React.useState<boolean | null | number>(false);

  const toggle = (i: number) => {
    if (open === i) {
      return setOpen(null);
    } else {
      setOpen(i);
    }
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      custom={2}
      variants={animation}
      viewport={{ once: true }}
    >
      <h1 className="text-white text-4xl md:text-6xl font-bold flex justify-center p-5 text-center">
        Frequently Asked Questions
      </h1>
      <div className="flex justify-center pt-[50px]">
        <div className="text-white p-5 sm:w-[550px] md:w-[650px] lg:w-[1150px]">
          {data.map((item, i) => {
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
    </motion.div>
  );
}
