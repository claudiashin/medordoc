import { addDoc, collection,setDoc,getDoc,doc,query,where,} from 'firebase/firestore';
import React, { useState,useEffect } from 'react';
import {db} from '../firebase';

export default function dbtest({
    num ="booking2000",
}){
    const booking = async() =>{
    const bookingdata = collection(db,"bookings")
    // await setDoc(bookingdata,{
    //     date:1233,
    //     month:1221,
    //     year:2023
    // }
    await setDoc(doc(bookingdata, num), {
        date:1225,
        month:12,
        year:2019});
}
    
    const  getting =async()=>{
        const docRef = doc(db, "bookings", "booking100");
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
       
    }

    // const query = async()=>{
    //     const q = query(collection(db, "bookings"), where("year", "==", 2019));

    //     const querySnapshot = await getDocs(q);
    //     querySnapshot.forEach((doc) => {
    //       // doc.data() is never undefined for query doc snapshots
    //       console.log(doc.id, " => ", doc.data());
    //     }); 
    // }
 
   
    return(
        <div>
            <h1>booking</h1>
            <button onClick = {booking}/>
            <button onClick = {getting}/>
            <button onClick = {query}/>
            {/* {bookings.map((booking1) =>(
                <div key = {booking1.day}>
                   <h2> {booking1.month}</h2>
                   <p>{booking1.year}</p>
                </div>    
            ))} */}
        </div>    
    )
}

    // useEffect(()=>{
    //     getbookings();
    // },[])
    // if(loading){
    //     return <h1>loading..</h1>
    // }




