"use client";

import { TypeAnimation } from "react-type-animation";

const TextAnimation = () => {
  return (
    <TypeAnimation
      preRenderFirstString={true}
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Modern UI/UX.",
        3000,
        "Responsive web design.",
        3000,
        "Exceptional Performance.",
        3000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "rem", display: "block" }}
      repeat={Infinity}
    />
  );
};

export default TextAnimation;
