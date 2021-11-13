import React from "react";
import {View,Text, SafeAreaView, StyleSheet, TextInput} from "react-native" ;
import styled from "styled-components/native";
// import {IoChevronBack} from 'react-icons/fa';
 import { AntDesign } from '@expo/vector-icons';
 import { EvilIcons } from '@expo/vector-icons';
// import { LeftOutlined } from 'react-native-elements';

//main container
const Maincont = styled.View`
    display:flex;
    flex-direction: row;
    justify-content: center;
    width:100%;
    max-height: 85px;
    margin-bottom: 15px;
    margin-top: 10px;
    background: transparent;
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
    height: 75px;
    width: 75px;
    top: 8px;
    left: 290px;
    z-index: 2;
    
`
const SearchIcon = styled.Image`

    height: 25px;
    width: 25px;
`
//Go button styling

const Gocont = styled.View`
    display:flex;
    justify-content: center;
    height: 48px;
    width: 48px;
    margin-right: 20px;
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
`

const Gobut = styled.Button`
    
`

const SearchBar=({

})=>{
    return <Maincont>
        
        <Searchiconcont >
            <SearchIcon source={require('../../assets/icons/search.png')}/>
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