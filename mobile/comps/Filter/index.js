import React from "react";
import {View,Text, SafeAreaView, StyleSheet, TextInput, Pressable} from "react-native" ;
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";


import Btn from '../Btn';
// height: ${props=>props.display==="none"?"0px":"370px"};

import {useState} from 'react';
import { TouchableOpacity } from "react-native";

//main container
const Extra = styled.View`
    width: 300px;
    justify-content: center;
    align-items: center;

`
const Maincont = styled.View`
    display:flex;
   
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 430px;
    background-color: #ffffff;
    border: 1px solid #E9D7CB;
    border-radius: 5px;

`

//filter icon container
const Iconcont = styled.View`
    position: absolute;
    bottom: 375px;
    left: 350px;
`
const FilterIcon = styled.Image`
    height: 25px;
    width: 25px;
`

//headers
const Headercont = styled.View`
    display: flex;
    margin: 15px;
    margin-right: 100px;
`
const HeaderTwocont = styled.View`
    display: flex;
    margin: 15px;
    margin-right: 245px;
`
const Filterheader = styled.Text`
    font-size: 24px;
`

//filter option 
const Filtercont = styled.View`
    display:flex;
    flex-wrap: wrap;
    flex-direction:row;
    justify-content: center;
    align-items: center;
`
const FilterTwocont = styled.View`
    display:flex;
    flex-direction:row;
    margin-right: 100px;
    
   
`
const Filteropt = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    width:100px;
    height: 50px;
    border: 1px solid #E9D7CB;
    border-radius: 5px; 
    margin: 4px;
    
`
const FilteroptTwo = styled.TouchableOpacity`
    display: ${props=>props.display};
    justify-content: center;
    align-items: center;
    width:100px;
    height: 50px;
    border: 1px solid #E9D7CB;
    border-radius: 5px; 
    margin: 4px;
    
`
const Filttext = styled.Text`
    font-size: 16px;
`

const Btncont = styled.View`
    display: flex;
    position: relative;
    margin-bottom: 10px;
    top: 25px;
    left: 80px;
`

const Filter=({
    headerText1 = "Header",
    headerText2 = "Header",
    optionText1 = "Deafult",
    optionText2 = "Deafult",
    optionText3 = "Deafult",
    optionText4 = "Deafult",
    optionText5 = "Deafult",
    optionText6 = "Deafult",
    optionText7 = "Deafult",
    optionText8 = "Deafult",
    optionText9 = "Deafult",
    optionText10 = "Deafult",
    optionText11 = "Deafult",
    optionText12 = "Deafult",

    display = "flex",

    
})=>{
     

    // var display = "none";
  

    // if(open){
    //     display = "flex"
    // }

    //  const [touch, touchOpen] = useState(false);
    //  var color = "#E9D7CB";
    //  if(touch){
    //      color = "#fff"
    //  }
    //  const [touch2, touchOpen2] = useState(false);
    //  var color = "#E9D7CB";
    //  if(touch2){
    //      color = "#fff"
    //  }
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);
    const [show8, setShow8] = useState(false);
    const [show9, setShow9] = useState(false);
    const [show10, setShow10] = useState(false);
    const [show11, setShow11] = useState(false);
    const [show12, setShow12] = useState(false);

    return <Extra>
            {/* <Iconcont >
                <Ionicons onPress={()=>setOpen(!open)} 
                name="filter" size={40} color="black" />
            </Iconcont> */}
        <Maincont >

            <Headercont>
                <Filterheader>{headerText1=headerText1}</Filterheader>
            </Headercont>
            <Filtercont>
                <Filteropt 
                 onPress={()=>setShow(!show)}
                 style={{backgroundColor: show ? "#fff" : "#E9D7CB"}} 
                >
                    <Filttext>{optionText1=optionText1}</Filttext>
                </Filteropt>
                <Filteropt
                 onPress={()=>setShow2(!show2)}
                 style={{backgroundColor: show2 ? "#fff" : "#E9D7CB"}}
                >
                    <Filttext>{optionText2=optionText2}</Filttext>
                </Filteropt>
                <Filteropt
                 onPress={()=>setShow3(!show3)}
                 style={{backgroundColor: show3 ? "#fff" : "#E9D7CB"}}
                >
                    <Filttext>{optionText3=optionText3}</Filttext>
                </Filteropt>
                <Filteropt
                 onPress={()=>setShow4(!show4)}
                 style={{backgroundColor: show4 ? "#fff" : "#E9D7CB"}}
                >
                    <Filttext>{optionText4=optionText4}</Filttext>
                </Filteropt>
                <Filteropt
                 onPress={()=>setShow5(!show5)}
                 style={{backgroundColor: show5 ? "#fff" : "#E9D7CB"}}
                >
                    <Filttext>{optionText5=optionText5}</Filttext>
                </Filteropt>
                <Filteropt
                 onPress={()=>setShow6(!show6)}
                 style={{backgroundColor: show6 ? "#fff" : "#E9D7CB"}}
                >
                    <Filttext>{optionText6=optionText6}</Filttext>
                </Filteropt>
            </Filtercont>
            <HeaderTwocont>
                <Filterheader>{headerText2=headerText2}</Filterheader>
            </HeaderTwocont>

            <FilterTwocont>
            <Filteropt
                 onPress={()=>setShow7(!show7)}
                 style={{backgroundColor: show7 ? "#fff" : "#E9D7CB"}}
            >
                <Filttext>{optionText7=optionText7}</Filttext>
            </Filteropt>
            <Filteropt
                 onPress={()=>setShow8(!show8)}
                 style={{backgroundColor: show8 ? "#fff" : "#E9D7CB"}}
            >
                <Filttext>{optionText8=optionText8}</Filttext>
            </Filteropt>



            <FilteroptTwo 
            onPress={()=>setShow9(!show9)}
            style={{backgroundColor: show9 ? "#fff" : "#E9D7CB"}}
            display={display}>
                <Filttext>{optionText8=optionText9}</Filttext>
            </FilteroptTwo>
            <FilteroptTwo 
            onPress={()=>setShow10(!show10)}
            style={{backgroundColor: show10 ? "#fff" : "#E9D7CB"}}
            display={display}>
                <Filttext>{optionText8=optionText10}</Filttext>
            </FilteroptTwo>
            <FilteroptTwo 
            onPress={()=>setShow11(!show11)}
            style={{backgroundColor: show11 ? "#fff" : "#E9D7CB"}}
            display={display}>
                <Filttext>{optionText8=optionText11}</Filttext>
            </FilteroptTwo>
            <FilteroptTwo 
            onPress={()=>setShow12(!show12)}
            style={{backgroundColor: show12 ? "#fff" : "#E9D7CB"}}
            display={display}>
                <Filttext>
                    {optionText8=optionText12}</Filttext>
            </FilteroptTwo>
            </FilterTwocont>

            <Btncont>
                <Btn title={"Apply"} height={40} width={100} fsize={18}/>
            </Btncont>
        </Maincont>
        </Extra>
    
}

export default Filter;