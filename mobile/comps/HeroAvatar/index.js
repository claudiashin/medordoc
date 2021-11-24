import styled from "styled-components/native";
import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { Button, Image, View, Platform } from "react-native";

const HeroAvatarCont = styled.View`
  width: 100%;
  max-height: 300px;
  align-items: center;
`;
const HeroImage = styled.Image`
  width: ${(props) => props.herowidth}px;
  height: ${(props) => props.heroheight}px;
  border-radius: 200px;
`;
const PlusImage = styled.Image`
  width: ${(props) => props.pluswidth}px;
  height: ${(props) => props.plusheight}px;
  position: absolute;
  right: ${(props) => props.right}px;
  bottom: ${(props) => props.bottom}px;
  display: ${(props) => props.visible};
`;
const PlusCont = styled.TouchableOpacity``;

const HeroAvatar = ({
  heroheight = "300",
  herowidth = "300",
  pluswidth = "30",
  plusheight = "30",
  right = "-70",
  bottom = "10",
  visible = "flex",
}) => {
  const [image, setImage] = useState(
    "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0="
  );

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <HeroAvatarCont>
      {image && (
        <HeroImage
          heroheight={heroheight}
          herowidth={herowidth}
          source={{ uri: image }}
        />
      )}
      <PlusCont onPress={pickImage}>
        <PlusImage
          pluswidth={pluswidth}
          plusheight={plusheight}
          right={right}
          bottom={bottom}
          visible={visible}
          source={require("../../assets/plus.png")}
        />
      </PlusCont>
    </HeroAvatarCont>
  );
};

export default HeroAvatar;
