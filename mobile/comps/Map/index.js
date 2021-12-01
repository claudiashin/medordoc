import React ,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,Dimensions,Button } from 'react-native';
import MapView,{PROVIDER_GOOGLE,Marker,Callout, Circle,}from 'react-native-maps';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styled from 'styled-components/native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';

const Map =({
//  onMappress =()=>{}
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
     <MapView.Callout onPress={()=>navigation.navigate('clinicprofile',{
          UID:"oXOf7T5hj4ewq5ls5YzoJQpGbrp1"
        })} tooltip> 
      <View style={styles.calloutText} >
        <Text>Burnaby{"\n"}20 minutes</Text>
        <Button title = "Burnaby Clinic"/>
       </View>
   </MapView.Callout>  
    </MapView.Marker>  


    <MapView.Marker
     coordinate={{latitude: 49.119025947952196,
     longitude: -122.69051360196951}}
     key='test1'
     title={"Beyond Health & Medical"}
     description={"description"}
     
    >
     {/*<MapView.Callout onPress={()=>alert('lk')} tooltip>  */}
     <MapView.Callout onPress={()=>navigation.navigate('clinicprofile',{
       UID:"tNhCs4WtlTat6NsZ8Q5egHYg1Qo1"
     })} tooltip> 
      <View style={styles.calloutText} >
        <Text>Beyond Health Medical{"\n"}</Text>
        <Button title = "Beyond Health"/>
       </View>
   </MapView.Callout>  
    </MapView.Marker> 

    {/* Vancouver  */}

    <MapView.Marker
     coordinate={{latitude: 49.244778852146425,
     longitude: -123.0647862522749}}
     key='test9'
     title={"Pacific Medical Clinic"}
     description={"description"}
     
    >
     {/*<MapView.Callout onPress={()=>alert('lk')} tooltip>  */}
     <MapView.Callout onPress={()=>navigation.navigate('clinicprofile',{
       UID:"oXOf7T5hj4ewq5ls5YzoJQpGbrp1"
     })} tooltip> 
      <View style={styles.calloutText} >
        <Text>Pacific Medical Clinic{"\n"}</Text>
        <Button title = "Pacific Medical"/>
       </View>
   </MapView.Callout>  
    </MapView.Marker> 

    <MapView.Marker
     coordinate={{latitude: 49.26417601736956,
     longitude: -123.1512787154561}}
     key='test10'
     title={"Maple Walk-In Medical Clinic"}
     description={"description"}
     
    >
     {/*<MapView.Callout onPress={()=>alert('lk')} tooltip>  */}
     <MapView.Callout onPress={()=>navigation.navigate('clinicprofile',{
       UID:"bsZQIcxwkfRFjc7VOgIoxUY0l1T2"
     })} tooltip> 
      <View style={styles.calloutText} >
        <Text>Maple Walk-In Medical Clinic{"\n"}</Text>
        <Button title = "Maple Walk-In"/>
       </View>
   </MapView.Callout>  
    </MapView.Marker> 

    <MapView.Marker
     coordinate={{latitude: 49.23799460611637,
     longitude: -123.03192121545707}}
     key='test11'
     title={"Care Point Medical Clinic"}
     description={"description"}
     
    >
     {/*<MapView.Callout onPress={()=>alert('lk')} tooltip>  */}
     <MapView.Callout onPress={()=>navigation.navigate('clinicprofile',{
       UID:"7FKK9IbpIUhrfOOnk9d19SCy9By1"
     })} tooltip> 
      <View style={styles.calloutText} >
        <Text>Care Point Medical Clinic{"\n"}</Text>
        <Button title = "Care Point"/>
       </View>
   </MapView.Callout>  
    </MapView.Marker>

    {/* Richmond */}

    <MapView.Marker
     coordinate={{latitude: 49.17067718619756,
     longitude: -123.13700408847518}}
     key='test12'
     title={"WELL Health - Richmond Central Medical Clinic"}
     description={"description"}
     
    >
     {/*<MapView.Callout onPress={()=>alert('lk')} tooltip>  */}
     <MapView.Callout onPress={()=>navigation.navigate('clinicprofile',{
       UID:"Fe7Rz5MFkvcam9eIJoPugZ9GumJ2"
     })} tooltip> 
      <View style={styles.calloutText} >
        <Text>WELL Health - Richmond Central Medical Clinic{"\n"}</Text>
        <Button title = "WELL Health"/>
       </View>
   </MapView.Callout>  
    </MapView.Marker>

    <MapView.Marker
     coordinate={{latitude: 49.17762637915499,
     longitude: -123.12017978662351}}
     key='test13'
     title={"Mega Fu Medical Clinic"}
     description={"description"}
     
    >
     {/*<MapView.Callout onPress={()=>alert('lk')} tooltip>  */}
     <MapView.Callout onPress={()=>navigation.navigate('clinicprofile',{
       UID:"9w9DqZEXIoczwfGSESl82tYCbnJ3"
     })} tooltip> 
      <View style={styles.calloutText} >
        <Text>Mega Fu Medical Clinic{"\n"}</Text>
        <Button title = "Mega Fu"/>
       </View>
   </MapView.Callout>  
    </MapView.Marker>

    <MapView.Marker
     coordinate={{latitude: 49.17243946354279,
     longitude: -123.13201701048123}}
     key='test14'
     title={"Elicare: Lansdowne Medical Clinic"}
     description={"description"}
     
    >
     {/*<MapView.Callout onPress={()=>alert('lk')} tooltip>  */}
     <MapView.Callout onPress={()=>navigation.navigate('clinicprofile',{
       UID:"IKSr9FZPi9f1l9zRdcsopC8MQX42"
     })} tooltip> 
      <View style={styles.calloutText} >
        <Text>Elicare: Lansdowne Medical Clinic{"\n"}</Text>
        <Button title = "Elicare"/>
       </View>
   </MapView.Callout>  
    </MapView.Marker>

    {/* N. Vancouver */}

    <MapView.Marker
     coordinate={{latitude: 49.32502014827226,
     longitude: -123.10976403079742}}
     key='test15'
     title={"WELL Health - Pemberton Marine Medical Clinic"}
     description={"description"}
     
    >
     {/*<MapView.Callout onPress={()=>alert('lk')} tooltip>  */}
     <MapView.Callout onPress={()=>navigation.navigate('clinicprofile',{
       UID:"4nKPf2aTTgVxHTvbDYQvUX1ckK12"
     })} tooltip> 
      <View style={styles.calloutText} >
        <Text>WELL Health - Pemberton Marine Medical Clinic{"\n"}</Text>
        <Button title = "WELL Health"/>
       </View>
   </MapView.Callout>  
    </MapView.Marker>

    <MapView.Marker
     coordinate={{latitude: 49.33709193342039,
     longitude: -123.10156883079685}}
     key='test16'
     title={"Edgemont Medical Clinic"}
     description={"description"}
     
    >
     {/*<MapView.Callout onPress={()=>alert('lk')} tooltip>  */}
     <MapView.Callout onPress={()=>navigation.navigate('clinicprofile',{
       UID:"AZGku04fe3VxBuWATRo7XGKQM4q1"
     })} tooltip> 
      <View style={styles.calloutText} >
        <Text>Edgemont Medical Clinic{"\n"}</Text>
        <Button title = "Edgemont"/>
       </View>
   </MapView.Callout>  
    </MapView.Marker>

    <MapView.Marker
     coordinate={{latitude: 49.32408385005227,
     longitude: -123.10597326952801}}
     key='test17'
     title={"Integrated Wellness Medical Centre"}
     description={"description"}
     
    >
     {/*<MapView.Callout onPress={()=>alert('lk')} tooltip>  */}
     <MapView.Callout onPress={()=>navigation.navigate('clinicprofile',{
       UID:"5s7PlHsnLVQ92jlM1T73dcNDoQw1"
     })} tooltip> 
      <View style={styles.calloutText} >
        <Text>Integrated Wellness Medical Centre{"\n"}</Text>
        <Button title = "Integrated Wellness"/>
       </View>
   </MapView.Callout>  
    </MapView.Marker>

    {/* Surrey */}

    <MapView.Marker
     coordinate={{latitude: 49.17625223466123,
     longitude: -122.8661477442954}}
     key='test18'
     title={"Cedar Hills Medical Clinic"}
     description={"description"}
     
    >
     {/*<MapView.Callout onPress={()=>alert('lk')} tooltip>  */}
     <MapView.Callout onPress={()=>navigation.navigate('clinicprofile',{
       UID:"0lTILXDCYOfuCVljAtYhispFL6f1"
     })} tooltip> 
      <View style={styles.calloutText} >
        <Text>Cedar Hills Medical Clinic{"\n"}</Text>
        <Button title = "Cedar Hills"/>
       </View>
   </MapView.Callout>  
    </MapView.Marker>

    <MapView.Marker
     coordinate={{latitude: 49.139615888454905,
     longitude: -122.84382264429685}}
     key='test19'
     title={"Primacy - Manchanda Medical Clinic"}
     description={"description"}
     
    >
     {/*<MapView.Callout onPress={()=>alert('lk')} tooltip>  */}
     <MapView.Callout onPress={()=>navigation.navigate('clinicprofile',{
       UID:"Zca6JHSUenPWWxrgxUxGIRB1THG2"
     })} tooltip> 
      <View style={styles.calloutText} >
        <Text>Primacy - Manchanda Medical Clinic{"\n"}</Text>
        <Button title = "Manchanda"/>
       </View>
   </MapView.Callout>  
    </MapView.Marker>

    <MapView.Marker
     coordinate={{latitude: 49.16786830279477,
     longitude: -122.79983716289601}}
     key='test20'
     title={"WELL Health - Care Place Fleetwood Medical Clinic"}
     description={"description"}
     
    >
     {/*<MapView.Callout onPress={()=>alert('lk')} tooltip>  */}
     <MapView.Callout onPress={()=>navigation.navigate('clinicprofile',{
       UID:"Fe7Rz5MFkvcam9eIJoPugZ9GumJ2"
     })} tooltip> 
      <View style={styles.calloutText} >
        <Text>WELL Health - Care Place Fleetwood Medical Clinic{"\n"}</Text>
        <Button title = "WELL Health"/>
       </View>
   </MapView.Callout>  
    </MapView.Marker>

    {/* Coquitlam */}

    <MapView.Marker
     coordinate={{latitude: 49.24950615192547,
     longitude: -122.86775447464734}}
     key='test21'
     title={"The Well Medical Clinic"}
     description={"description"}
     
    >
     {/*<MapView.Callout onPress={()=>alert('lk')} tooltip>  */}
     <MapView.Callout onPress={()=>navigation.navigate('clinicprofile',{
       UID:"GMUCL8SKdNhl7MmBpC0i8vq8qkQ2"
     })} tooltip> 
      <View style={styles.calloutText} >
        <Text>The Well Medical Clinic{"\n"}</Text>
        <Button title = "The Well"/>
       </View>
   </MapView.Callout>  
    </MapView.Marker>

    <MapView.Marker
     coordinate={{latitude: 49.2846221548812,
     longitude: -122.79547012742275}}
     key='test22'
     title={"Eagleridge Medical Clinic"}
     description={"description"}
     
    >
     {/*<MapView.Callout onPress={()=>alert('lk')} tooltip>  */}
     <MapView.Callout onPress={()=>navigation.navigate('clinicprofile',{
       UID:"3DOGWNAI0eY2rl1cAhCwZKMYtHD2"
     })} tooltip> 
      <View style={styles.calloutText} >
        <Text>Eagleridge Medical Clinic{"\n"}</Text>
        <Button title = "Eagleridge"/>
       </View>
   </MapView.Callout>  
    </MapView.Marker>

     {/* Burnaby */}

    <MapView.Marker
     coordinate={{latitude: 49.23149795614685,
     longitude: -123.00568035376993}}
     key='test3'
     title={"Old Orchard Medical Clinic"}
     description={"description"}
     
    >
     {/*<MapView.Callout onPress={()=>alert('lk')} tooltip>  */}
     <MapView.Callout onPress={()=>navigation.navigate('clinicprofile',{
       UID:"koHQxfxwzJevDdhWLtXIpmO7wTu2"
     })} tooltip> 
      <View style={styles.calloutText} >
        <Text>Old Orchard Medical Clinic{"\n"}</Text>
        <Button title = "Old Orchard"/>
       </View>
   </MapView.Callout>  
    </MapView.Marker>  

    <MapView.Marker
     coordinate={{latitude: 49.225848064224245,
     longitude: -123.00572321668015}}
     key='test4'
     title={"Mango Walk-in Clinic"}
     description={"description"}
     
    >
     {/*<MapView.Callout onPress={()=>alert('lk')} tooltip>  */}
     <MapView.Callout onPress={()=>navigation.navigate('clinicprofile',{
       UID:"5KR7qdJxJRclkuRFdLqQGaS45EJ3"
     })} tooltip> 
      <View style={styles.calloutText} >
        <Text>Mango Walk-in Clinic{"\n"}</Text>
        <Button title = "Mango"/>
       </View>
   </MapView.Callout>  
    </MapView.Marker> 

    <MapView.Marker
     coordinate={{latitude: 49.26760916802921,
     longitude: -122.99993537312844}}
     key='test5'
     title={"Brentwood Medical Clinic"}
     description={"description"}
     
    >
     {/*<MapView.Callout onPress={()=>alert('lk')} tooltip>  */}
     <MapView.Callout onPress={()=>navigation.navigate('clinicprofile',{
       UID:"lklNfAH6oadPInmca1nFik3tGdY2"
     })} tooltip> 
      <View style={styles.calloutText} >
        <Text>Brentwood Medical Clinic{"\n"}</Text>
        <Button title = "Brentwood"/>
       </View>
   </MapView.Callout>  
    </MapView.Marker>

    <MapView.Marker
     coordinate={{latitude: 49.21914637937007,
     longitude: -122.928060857557}}
     key='test6'
     title={"Welcome Medical Clinic"}
     description={"description"}
     
    >
     {/*<MapView.Callout onPress={()=>alert('lk')} tooltip>  */}
     <MapView.Callout onPress={()=>navigation.navigate('clinicprofile',{
       UID:"jQ8PrGGxTHNfB5ICJHKQbRSaRyP2"
     })} tooltip> 
      <View style={styles.calloutText} >
        <Text>Welcome Medical Clinic{"\n"}</Text>
        <Button title = "Welcome"/>
       </View>
   </MapView.Callout>  
    </MapView.Marker>

    <MapView.Marker
     coordinate={{latitude: 49.22906673032412,
     longitude: -123.0007734941976}}
     key='test7'
     title={"Kingsway Medical Clinic"}
     description={"description"}
     
    >
     {/*<MapView.Callout onPress={()=>alert('lk')} tooltip>  */}
     <MapView.Callout onPress={()=>navigation.navigate('clinicprofile',{
       UID:"iBOBd62i4vUMaXlfFYJKaQq4fHk1"
     })} tooltip> 
      <View style={styles.calloutText} >
        <Text>Kingsway Medical Clinic{"\n"}</Text>
        <Button title = "Kingsway"/>
       </View>
   </MapView.Callout>  
    </MapView.Marker>

    <MapView.Marker
     coordinate={{latitude: 49.227159448828274,
     longitude: -122.99475686906143}}
     key='test8'
     title={"Metrohealth Clinic"}
     description={"description"}
     
    >
     {/*<MapView.Callout onPress={()=>alert('lk')} tooltip>  */}
     <MapView.Callout onPress={()=>navigation.navigate('clinicprofile',{
       UID:"J5EZzpNev2OPal1H9oVKSkKGEZs2"
     })} tooltip> 
      <View style={styles.calloutText} >
        <Text>Metrohealth Clinic{"\n"}</Text>
        <Button title = "Metrohealth"/>
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