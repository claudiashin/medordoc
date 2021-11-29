import React from "react";
import Lottie from "react-lottie";

const HeroLottie =({ 
  source, 
  width, 
  height,
}) =>{

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: source,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },

  };

  return (
    <div>
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  );
};

export default HeroLottie