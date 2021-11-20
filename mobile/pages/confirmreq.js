import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';

//import comps
import Header from '../comps/Header';
import InfoCardTwo from '../comps/InfoCardTwo';
import Btn from '../comps/Btn';

const MainCont = styled.View`
    flex:1;
    justify-content: flex-start;
    align-items: center;
`;

const Wave = styled.Image`
    width: 100%;
    height: 30%;
    position: absolute;
`;

const HdCont = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: 100px;
`;
const ButCont = styled.View`
    flex-direction: row;
    margin-top: 20px;
    margin-bottom: 30px;
    align-items: center;
    justify-content: flex-end;
`;


export default function confirmreq() {

    const [changeForm, setChangeForm] = useState(true);

    if (changeForm === true) {
        return <MainCont>
            <Wave source={require('../assets/backgroundmobile.png')} />

            <ScrollView>
                <HdCont>
                    <Header
                        title="Request Process"
                        fontSize="28"
                    />
                </HdCont>

                <InfoCardTwo
                    text1="Doctor and Clinic Details"

                    text3="Doctor: Dr.Mills"
                    text4="Languages: English and Punjabi"
                    text5="Location: St Johns Clinic Vancouver 1234 Canada Way, Vancouver V4J 2B7"
                    text6="Contact: 604-123-4567"
                    fsize="18"
                    fweight="700"
                    display="none"
                />
                <InfoCardTwo
                    text2="Your submission will be sent to the clinic where it will be reviewed and processed. "
                    text4="Be advised it will take 5-7 business days."
                    text5="The clinic will contact you directly to arrange an appointment. "
                    display="none"
                    height="280"
                />
                <HdCont>
                    <Header
                        title="Would you like to proceed with this request?"
                        fontSize="16"
                        fontWeight="500"
                    />
                </HdCont>
                <ButCont>
                    <Btn
                        title="Send Request"
                        fsize='18'
                        width='160'
                        height='45'
                        borderRad='50'
                        onPress={() => { setChangeForm(false) }}
                    />
                </ButCont>

            </ScrollView>
        </MainCont>
    }
    return <MainCont>
        <ScrollView>
            <HdCont>
                <Header
                    title="Submission Confirmed"
                    fontSize="28"
                />
            </HdCont>

            <InfoCardTwo
                text1="Request Details"

                text3="Submitted on: Oct 7, 2021"
                text4="Requested for: Dr. Mills"
                text5="Location: St Johns Clinic Vancouver 1234 Canada Way, Vancouver V4J 2B7"
                text6="Contact: 604-123-4567"
                fsize="18"
                fweight="700"
                display="none"
            />
            <InfoCardTwo
                text2="Your request for a family doctor has been sent to St Johns Clinic Vancouver.  "
                text4="You will be contacted directly by the clinic. "
                text5="Please contact the clinic for further details. "
                display="none"
                height="280"
            />
        </ScrollView>
    </MainCont>
}
