// import db from '../utils/store'
// import React, { useState,useEffect } from 'react';
// import styled from 'styled-components/native'
// import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';


// const dbtest =()=>{
//      const [booking,setbookings] = useState([]);
//      const [loading,setLoading] =useState(false);
//      const ref = firebase.firestore().collection("bookings");

//  function getbookings(){
//        setLoading(true)
//        ref.onSnapshot((querySnapshot)=>{
//            const items = [];
//            querySnapshot.forEach((doc) => {
//                items.push(doc.data());
//            });
//            setbookings(items)
//            setLoading(false) 
//        })
//     }

//     useEffect(()=>{
//         getbookings();
//     },[])
    
//     if(loading){
//         return <Text>loading..</Text>
//     }

//         return(
//             <View>
//                 <Text>booking</Text>
//                 {bookings.map((booking1) =>(
//                     <View key = {booking1.day}>
//                        <Text> {booking1.month}</Text>
//                        <Text>{booking1.year}</Text>
//                     </View>    
//                 ))}
  
//             </View>    
//         )
// }

// export default dbtest();
