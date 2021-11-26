import React ,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,Dimensions,Button } from 'react-native';
import MapView,{PROVIDER_GOOGLE,Marker,Callout, Circle,}from 'react-native-maps';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';

const Map =({
 onMappress =()=>{}
})=>{
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading,setLoading] =useState("waiting");
  const [visible,setVisible] =useState(true)
  const navigation = useNavigation();
  const [region,setRegion]=useState({
    latitude: 48.250150584432035,
    longitude: -123.01565794794925,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  })

  const [ pin, setPin ] = React.useState({
		latitude: 48.250150584432035,
		longitude: -123.01565794794925
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
      setLoading("Current Location");
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
 		<View style={styles.container} keyboardShouldPersistTaps={'handled'}>
			<GooglePlacesAutocomplete
				placeholder="Search"
				fetchDetails={true}
				GooglePlacesSearchQuery={{
          rankby: "distance",
          type:'hospital'
          
				}}
				onPress={(data, details = null) => {
					// 'details' is provided when fetchDetails = true
					console.log(data, details)
					setRegion({
						latitude: details.geometry.location.lat,
						longitude: details.geometry.location.lng,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421
					})
				}}
				query={{
					key: "AIzaSyCCt-xyjh42M9cMpdoeAo4nK6sP5bWDVss",
					language: "en",
					components: "country:ca",
					types: "establishment",
					radius: 30000,
					location: `${region.latitude}, ${region.longitude}`
				}}
				styles={{
					container: { flex: 0, position: "absolute",top:"13%", width: "80%", zIndex: 1 },
					listView: { backgroundColor: "white" }
				}}
			/>
  
   <MapView style={styles.map}
    region={region}
    provider={PROVIDER_GOOGLE}　
    >
   
   <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
				<Marker
					coordinate={pin}
					pinColor="black"
					draggable={true}
					onDragStart={(e) => {
						console.log("Drag start", e.nativeEvent.coordinates)
					}}
					onDragEnd={(e) => {
						setPin({
							latitude: e.nativeEvent.coordinate.latitude,
							longitude: e.nativeEvent.coordinate.longitude
						})
					}}
				>
   
					<Callout>
						<Text>I'm here</Text>
					</Callout>
				</Marker>
				<Circle center={pin} radius={1000} /> 
    <MapView.Marker
     coordinate={{latitude: 49.250150584432035,
     longitude: -123.01565794794925}}
     key='test'
     title={"Burnaby Clinic"}
     description={"description"}
     
    >
     {/*<MapView.Callout onPress={()=>alert('lk')} tooltip>  */}
     <MapView.Callout onPress={()=>navigation.navigate('clinicprofile')} tooltip> 
      <View style={styles.calloutText} >
        <Text>Burnaby{"\n"}20 minutes</Text>
        <Button title = "lead" onPress={()=>navigation.navigate('clinicprofile')} />
       </View>
   </MapView.Callout>  
    </MapView.Marker>   
   </MapView>
    <Button onPress = {getLoc} title = {loading} disabled = {visible}/>     
  </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1.0,
      backgroundColor: '#fff',
      alignItems: 'center',
      // justifyContent: 'center',
      // margin:50
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height/2,
    }})

export default Map;