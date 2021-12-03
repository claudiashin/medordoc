import React, { useRef } from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import { useRouter } from "next/router";

const MenuCont = styled.div`
  display: flex;
  cursor: pointer;
`;

const MyCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const MyCardText = styled.div`
  text-align: center;
`;

const MenuCard = ({
  title = "Doctor Requests",
  source,
  width,
  height,
  routeTo = "/",
}) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: source,
    rendererSettings: {},
  };

  const router = useRouter();

  return (
    <MenuCont>
      <MyCard
        onClick={() => router.push(routeTo)}
        style={{
          width: width,
          height: height,
          margin: 30,
          borderColor: "#5C5C5C",
          borderWidth: 1.5,
          borderRadius: 5,
          boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.20)",
        }}
      >
        <Lottie options={defaultOptions} height={height} width={width} />

        <MyCardText
          style={{
            fontSize: 22,
            color: "#5C5C5C",
            fontWeight: "bold",
            marginBottom: 25,
          }}
        >
          {title}
        </MyCardText>
      </MyCard>
    </MenuCont>
  );
};

export default MenuCard;
