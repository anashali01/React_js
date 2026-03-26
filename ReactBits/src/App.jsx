import { useState } from "react";
import { useRef } from "react";
import VariableProximity from "./VariableProximity";
import "./App.css";
import Shuffle from "./Shuffle";

function App() {
  const containerRef = useRef(null);
  return (
    <>
      <Shuffle
        text="Hello World"
        shuffleDirection="right"
        duration={0.35}
        animationMode="evenodd"
        shuffleTimes={1}
        ease="power3.out"
        stagger={0.03}
        threshold={0.1}
        triggerOnce={true}
        triggerOnHover
        respectReducedMotion={true}
        loop={false}
        loopDelay={0}
      />
      <div ref={containerRef} style={{ position: "relative" }}>
        <VariableProximity
          label={"Hover me! And then star React Bits on GitHub, or else..."}
          className={"variable-proximity-demo"}
          fromFontVariationSettings="'wght' 400, 'opsz' 9"
          toFontVariationSettings="'wght' 1000, 'opsz' 40"
          containerRef={containerRef}
          radius={100}
          falloff="linear"
          falloff="linear"
        />
      </div>
    </>
  );
}

export default App;
