import React, { useState, useEffect, } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import styled from 'styled-components/native';

// Import Comps
import MenuCard from '../comps/MenuCard';
import NavBar from '../comps/NavBar';

const NavBarCont = styled.View``;


const home = ({ navigation }) => {

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
      <MenuCard title="Find a Doctor" ind={[3]} Cardpress={() => navigation.navigate("finddoc")} />
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
  },

  image: {
    width: 255,
    height: 211,
    marginBottom: 60,
  }
});

export default home;