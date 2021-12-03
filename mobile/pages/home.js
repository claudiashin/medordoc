import React, { useState, useEffect, } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import styled from 'styled-components/native';
import { useFonts, Nunito_400Regular } from '@expo-google-fonts/nunito';
// import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

// Import Comps
import MenuCard from '../comps/MenuCard';
import NavBar from '../comps/NavBar';

const NavBarCont = styled.View``;


const home = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
  });

  const [loading, setLoad] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 2000);

  })

  if (loading === true) {

    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/MedOrDoc.png')}/>
      </View>
    );
  }
  return <>
   <View style={styles.container}>
      <MenuCard ind={[5]} Cardpress={() => navigation.navigate("findclinic")} />
      <MenuCard 
         style={{ fontFamily: 'Nunito_400Regular', fontSize: 40 }}
      title="Find a Doctor" ind={[3]} Cardpress={() => navigation.navigate("finddoc")} />
    </View>
      <NavBarCont>
      <NavBar />
    </NavBarCont>
    </>
}
const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#F7F2EE',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 70,
    fontFamily: 'Nunito_400Regular'
  },

  image: {
    width: 255,
    height: 211,
    marginBottom: 60,
  }
});

export default home;
