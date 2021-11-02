import React, { useRef } from "react";
import styled from "styled-components/native";
import LottieView from 'lottie-react-native';

const HeroLottieCont = styled.View`

`
const Herolottie = ({
  style,
  ...lottieProps
}) =>{
  var anim = useRef();
  return <HeroLottieCont>
   <LottieView
        ref={(ref) => {
          anim = ref;
        }}
        style={style}
        autoPlay={true}
        {...lottieProps}
      />
  </HeroLottieCont>
}

export default Herolottie