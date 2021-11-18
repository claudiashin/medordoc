import React, { useState, useEffect, } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import styled from 'styled-components/native';

// Import Compsmj xcv 
import MenuCard from '../comps/MenuCard';


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
  return (
    <View style={styles.container}>
      <MenuCard ind={[5]} Cardpress={() => navigation.navigate("findclinic")} />
      <MenuCard title="Find a Doctor" ind={[3]} Cardpress={() => navigation.navigate("finddoc")} />
    </View>
  );

}
const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#F7F2EE',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  image: {
    width: 255,
    height: 211,
    marginBottom: 60,
  }
});

export default home;
