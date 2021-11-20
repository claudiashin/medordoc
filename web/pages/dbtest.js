import { addDoc, collection,setDoc,doc} from 'firebase/firestore';
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
    return(
        <div>
            <h1>booking</h1>
            <button onClick = {booking}/>
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




