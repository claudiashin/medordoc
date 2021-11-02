<<<<<<< HEAD
import React, {useRef} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

=======
import React, { useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

const lottieFiles =[
    require('../../assets/lottie_clipboard.json'),
    require('../../assets/lottie_desktop.json'),    
    require('../../assets/lottie_doctor.json'),
    require('../../assets/lottie_doctorwoman.json'),
    require('../../assets/lottie_laptop.json'),
    require('../../assets/lottie_location.json'),
    require('../../assets/lottie_login.json'),
    require('../../assets/lottie_receptionist.json'),
    require('../../assets/lottie_user.json'),
    require('../../assets/lottie_welcome.json'),
]
>>>>>>> 3f4cd3d02e812de123b3a9bddfc3b4b16b6b62fa

const MenuCont = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
<<<<<<< HEAD
    width: 375px;
    height: auto;
`;

const MxenuCard = ({
    title = "Find a Clinic",
    width = 290,
=======
`;

const MenuCard = ({
    title = "Find a Clinic",
    width = 280,
>>>>>>> 3f4cd3d02e812de123b3a9bddfc3b4b16b6b62fa
    height = 300,
    fSize = 24,
    color = "#5C5C5C",
    fWeight = "bold",
    border = "solid",
    borderColor = "#5C5C5C",
    bWidth = 1.5,
    borderRad = 5,
<<<<<<< HEAD
    // lottieFile = "../../assets/lottie_location.json",
=======
    ind = 0,

>>>>>>> 3f4cd3d02e812de123b3a9bddfc3b4b16b6b62fa
}) => {
    var anim = useRef();
    return (
        <MenuCont>
<<<<<<< HEAD
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
=======
            <TouchableOpacity onPress={() => {}}>
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
                        source={lottieFiles[ind]}
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
            </TouchableOpacity>
>>>>>>> 3f4cd3d02e812de123b3a9bddfc3b4b16b6b62fa
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
