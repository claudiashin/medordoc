import React, {useRef} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';


const MenuCont = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 375px;
    height: auto;
`;

const MxenuCard = ({
    title = "Find a Clinic",
    width = 290,
    height = 300,
    fSize = 24,
    color = "#5C5C5C",
    fWeight = "bold",
    border = "solid",
    borderColor = "#5C5C5C",
    bWidth = 1.5,
    borderRad = 5,
    // lottieFile = "../../assets/lottie_location.json",
}) => {
    var anim = useRef();
    return (
        <MenuCont>
            <View style={{
                justifyContent: "flex-end",
                alignItems: "center",
                width: width,
                height: height,
                margin: 12,
                borderStyle: border,
                borderColor: borderColor,
                borderWidth: bWidth,
                borderRadius: borderRad,
            }}>

                <LottieView
                    ref={(ref) => {
                        anim = ref;
                    }}
                    style={{
                        width: 200,
                        height: 200,
                        marginBottom: 10,
                        backgroundColor: "#fff",
                    }}
                    source={lottieFile}
                    autoPlay={true}
                />

                <Text style={{
                    textAlign: "center",
                    fontSize: fSize,
                    color: color,
                    fontWeight: fWeight,
                    margin: 15,
                }}>{title}</Text>
            </View>
        </MenuCont>
    )
}

export default MenuCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
