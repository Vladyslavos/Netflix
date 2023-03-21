import React from "react";
import Collapsible from "react-collapsible";

export default function Accordion() {
  return (
    <div>
      <Collapsible
        trigger="Start here"
        className="text-red m-0 h-[340px] w-[300px] bg-slate-100"
      >
        <p className="text-black">
          This is the collapsible content. It can be any element or React
          component you like.
        </p>
        <p className="text-black">
          It can even be another Collapsible component. Check out the next
          section!
        </p>
      </Collapsible>
    </div>
  );
}
