import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import MapView,{PROVIDER_GOOGLE,Marker}from 'react-native-maps';
import styled from 'styled-components/native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';

const Map =({
     currentlatitude,

})=>{

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const tokyoRegion = {
     latitude: 49.2511364,
     longitude: -123.002596,
     latitudeDelta: 0.01,
     longitudeDelta: 0.01,
   };

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
    text = errorMsg;} 
     else if (location) {
       text = JSON.stringify(location);
       const lat = location.coords.latitude;
       const long = location.coords.longitude;
       console.log(lat);
       console.log(long);
  }



 return(
  <View style={styles.container}>
  <MapView style={styles.map}
  initialRegion={{
      latitude:49.24943520266814,
      longitude: -123.00034945406064,
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
      height: Dimensions.get('window').height/2,
    }})

export default Map;