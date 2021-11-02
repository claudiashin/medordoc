import React from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import styled from 'styled-components/native';


const Map =({

})=>{
    return(
  <View style={styles.container}>
    <MapView style={styles.map} />
  </View>
    )  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    }})

export default Map;