import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const TextCont = styled.View`
  justify-content: center;
  align-items: center;
  height: 50px;
  margin: 5px;
`;

const Btn = ({
    title = "Next", 
    fSize = 22,
    color = "#fff",
    fWeight = "bold",
    letterSpace = 1.5,
    bgColor = "#97BDD6",
    borderRad = 30,
    width = 145,
    height = 60,
}) => {
    return (
        <TouchableOpacity onPress={() => {}}>
            <View style={{
                backgroundColor: bgColor,
                width: width,
                height: height,
                borderRadius: borderRad,
            }}>
                <TextCont>
                    <Text style={{
                        fontSize: fSize,
                        color: color,
                        fontWeight: fWeight,
                        letterSpacing: letterSpace,
                    }}>{title}</Text>
                </TextCont>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Btn
