"use client";
import React from "react";
import { SparklesCore } from "./sparkles";


import { TypewriterEffectSmooth } from "./typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Find",
      className: "text-white ",
    },
    {
      text: "the",
      className: "text-white ",
    },
    {
      text: "best",
      className: "text-white ",
    },
    {
      text: "prices",
      className: "text-white ",
    },
    {
      text: "here.",
      className: "text-red-500 ",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center  ">

      <TypewriterEffectSmooth words={words} />
    </div>
  );
}






export default function Hero() {
  return (
    <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <h1 className="text-9xl font-bold text-center text-white relative z-20">
        <TypewriterEffectSmoothDemo />
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={2500}
          className="w-full h-full"
          particleColor="#FFA500"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
