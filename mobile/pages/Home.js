import React,{useState,useEffect,} from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import MenuCard from '../comps/MenuCard'
import styled from 'styled-components/native';


const Home = ({navigation})=>{

      const [loading, setLoad] = useState(true)
      useEffect(() => {
       setTimeout(() => {
          setLoad(false);
        }, 2000);
    
      })
     
      if (loading ===true){
     
        return (
          <View style={styles.container}>
           <Image source = {require('../assets/MedOrDoc.png')}/>
          </View>
       );
      }
      return (
        <View style={styles.container}>
         <MenuCard ind = {[5]}　Cardpress ={()=>navigation.navigate("findclinic")}/>
         <MenuCard ind={[3]}/> 
        </View>
      );
    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Home;