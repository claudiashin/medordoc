import React from "react";
import {View,Text, SafeAreaView, StyleSheet, TextInput} from "react-native" ;
import styled from "styled-components/native";
//import {IoChevronBack} from 'react-icons/fa';
//import { LeftOutlined } from 'react-native-elements';
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
width: 222px;
height:48px;
background-color: #FFFFFF;
align-items:center;
justify-content: space-between;
padding-left: 5px;
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
background-color:transparent;
font-size:16px;
border: 1px solid black;
&:focus {
    border-color: rgba(0,0,0,0.3);
}
` 
//Go button styling

const Gocont = styled.View`
    display:flex;
    height: 48px;
    width: 48px;
    border: 1px solid black;
    border-radius: 15px;
`

const Gobut = styled.Button`
    
`

const SearchBar=({

})=>{
    return <Maincont>
        <Searchcont>
            <Searchinput/>
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