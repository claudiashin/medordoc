import { addDoc, collection } from 'firebase/firestore';
import React, { useState,useEffect } from 'react';
import {db} from '../firebase';

export default function dbtest(){
    const booking = async() =>{
    const bookingdata = collection(db,"bookings")
    await addDoc(bookingdata,{
        day:12,
        month:11,
        year:2021
    })
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

   
    



