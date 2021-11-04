import React from "react";
import {View,Text, SafeAreaView, StyleSheet, TextInput} from "react-native" ;
import styled from "styled-components/native";
// import {IoChevronBack} from 'react-icons/fa';
// import { AntDesign } from '@expo/vector-icons';
// import { EvilIcons } from '@expo/vector-icons';
// import { LeftOutlined } from 'react-native-elements';

//main container
const Maincont = styled.View`
    display:flex;
    flex-direction: row;
    justify-content: center;
    width:100%;
    max-height: 85px;
`
//search bar styling
const Searchcont = styled.View`
display:flex;
position:relative;
width: 221px;
height:48px;
align-items:center;
justify-content: space-between;
margin-left: 30px;
margin-right: 20px;
box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
`

const Searchinput = styled.TextInput`
padding-left: 48px;
border:none;
position:absolute;
top:0px;
left:0px;
height: 100%
width:100%;
border-radius: 15px;
background-color:#ffffff;
font-size:16px;
z-index: -1;
&:focus {
    border-color: rgba(0,0,0,0.3);
}
`
const Searchiconcont = styled.View`
    display: flex;
    position: relative;
    top: 7px;
    left: 250px;
    z-index: 2;
    
`
//Go button styling

const Gocont = styled.View`
    display:flex;
    justify-content: center;
    height: 48px;
    width: 48px;
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
`

const Gobut = styled.Button`
    
`

const SearchBar=({

})=>{
    return <Maincont>
        {/* <AntDesign name="left" size={40} color="black" /> */}
        <Searchiconcont>
        {/* <EvilIcons name="search" size={35} color="black" /> */}
        </Searchiconcont>
        
        <Searchcont>
        
            <Searchinput>
                
                    
                
            </Searchinput>
        </Searchcont>
        <Gocont>
            <Gobut title="GO" color="black"></Gobut>
        </Gocont>
    </Maincont>
    
}

export default SearchBar;


// export default function SearchBar (){
//     return <Searchcont>
//         <Searchinput/>
//     </Searchcont>
// } 