import React ,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,Dimensions,Button } from 'react-native';
import MapView,{PROVIDER_GOOGLE,Marker}from 'react-native-maps';
import styled from 'styled-components/native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';

const Map =({

})=>{
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading,setLoading] =useState("waiting");
  const [visible,setVisible] =useState(true)
  const [region,setRegion]=useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  })

  const getLoc = () => {
    console.log(location);
    const latitude =  location.coords.latitude;
    const longitude = location.coords.longitude;
  
     setRegion({
        latitude: latitude,
        longitude:longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      })
    }

    // const latitude = location.coords.latitude;
    // console.log(latitude);
    // let longitude = location.coords.longitude
    // setRegion({
    //           latitude: latitude,
    //           longitude: longitude,
    //           latitudeDelta: 0.015,
    //           longitudeDelta: 0.0121,
    //         })


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
      setLoading("Update Location");
      setVisible(false)
    })();
  },[]);

  let text = 'Waiting..';
  
 if (errorMsg) {
    text = errorMsg;} 
     else if (location) {
       text = JSON.stringify(location);
      //  const lat = location.coords.latitude;
      //  const long = location.coords.longitude;
      //  console.log(lat);
      //  console.log(current);

  }
 return(
  <View style={styles.container}>
  <MapView style={styles.map}
  region={region}
    >
   <MapView.Marker
     coordinate={{latitude: 49.25810,
     longitude: -123.021580}}
     title={"title"}
     description={"description"}
    />   
   </MapView>
    <Button onPress = {getLoc} title = {loading} disabled = {visible}/>     
  
    
 
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
      height: Dimensions.get('window').height/3,
    }})

export default Map;