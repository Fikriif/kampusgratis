"use client";

import React from "react";
import { useRecoilState } from "recoil";
import { exampleState } from "../atoms/exampleAtom";

const ExampleComponent = () => {
  const [text, setText] = useRecoilState(exampleState);

  return (
    <div className="pt-10 ">
      <div className="text-dark text-2xl font-semibold flex pb-5 justify-center">
        <div>
          Welcome to <span className="text-primary"> Kampus Gratis </span> blog
        </div>
      </div>
      <div className="flex justify-center">{text}</div>
      <div className="flex justify-center">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border border-solid border-2 border-slate-500"
        />
      </div>
    </div>
  );
};

export default ExampleComponent;
