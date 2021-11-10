import React,{useState,useEffect} from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View,Image, ScrollView, Button } from 'react-native';

import SigninForm from '../comps/SigninForm';
import BookingForm from '../comps/BookingForm';
import HeroAvatar from '../comps/HeroAvatar';
import LoginForm from '../comps/LoginForm';
import Btn from '../comps/Btn';




const HeroCont = styled.View`
    marginBottom: 50px;
`
const ButCont = styled.View`
    marginLeft: 180px;
    marginTop: 50px;
`


export default function patientprofile() {
    
    const [changeForm, setChangeForm] = useState(true);

    if (changeForm === true ){
        return (
            <ScrollView style={styles.scrollView} >
                <HeroCont>
                    <HeroAvatar 
                        heroheight="150"
                        herowidth="150"
                        pluswidth="25"
                        plusheight="25"
                        right="105"
                        bottom="15"
                    />
                </HeroCont>
                <BookingForm />

                <ButCont>
                        <Btn
                        title = "Edit"
                        fsize = '20'
                        bgcolor = "#97BDD6"
                        width = '150'
                        height = '50'
                        borderRad = '60'
                        onPress={()=>{setChangeForm(false)}}
                    ></Btn>
                </ButCont>
            </ScrollView>
        )
    }

    return <ScrollView style={styles.scrollView} >
        <HeroCont>
            <HeroAvatar 
                heroheight="150"
                herowidth="150"
                pluswidth="25"
                plusheight="25"
                right="105"
                bottom="15"
            />
        </HeroCont>
        <BookingForm 
            editable={true}
        />
        <ButCont>
         <Btn
            title = "Save"
            fsize = '20'
            bgcolor = "#97BDD6"
            width = '150'
            height = '50'
            borderRad = '60'
            onPress={()=>{setChangeForm(true)}}
            ></Btn>
        </ButCont>
    </ScrollView>
}

const styles = StyleSheet.create({
    scrollView: {
      flex:1,
      marginHorizontal: 30,
      marginTop: 30,
    },
  });
  