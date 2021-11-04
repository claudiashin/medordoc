import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import MapView,{PROVIDER_GOOGLE}from 'react-native-maps';
import styled from 'styled-components/native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';



const Map =({
     currentlatitude,

})=>{

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && !Constants.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);


  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }



 return(
  <View style={styles.container}>
  <MapView style={styles.map}
  initialRegion={{
       latitude: 49.246292,
       longitude: -123.116226,
       latitudeDelta: 0.0922,
       longitudeDelta: 0.0421,
    }}/>
    
  </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      // justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height/3,
    }})

export default Map;