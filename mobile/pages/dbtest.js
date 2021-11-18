// import app from '../utils/inits'
// import db from '../utils/inits'
// import React, { useState,useEffect } from 'react';


// function dbtest (){
//     const[booking,setbookings] = useState([]);
//     const [loading,setLoading] =useState(false);

//     const ref = firebase.firestore().collection("bookings");
    
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
//         return <h1>loading..</h1>
//     }

   
//         return(
//             <div>
//                 <h1>booking</h1>
//                 {bookings.map((booking1) =>(
//                     <div key = {booking1.day}>
//                        <h2> {booking1.month}</h2>
//                        <p>{booking1.year}</p>
//                     </div>    
//                 ))}
  
//             </div>    
//         )
    


// }
