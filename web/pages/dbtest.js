import { addDoc, collection,setDoc,doc, getDoc } from 'firebase/firestore';
import database from 'mime-db';
import React, { useState,useEffect } from 'react';
import {db} from '../firebase';


export default function dbtest(){
   
const [name , setName] = useState();
const [ex , setEx] = useState();
const [gender , setGender] = useState();
const [location , setLocation] = useState();
const [lang , setLang] = useState();

const [data, setData] = useState();
// Push Function
const Push = async() => {
    const doctordata = collection(db,"doctors")
    
    await setDoc(doc(doctordata,name ),{
        
        name: name,
        ex: ex,
        gender:gender,
        location:location,
        lang:lang

    }).catch(alert);

}
const fetchData = ()=>{
    db.collection("doctors").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
    })   
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
      
        <div className="App" style={{marginTop : 250}}>
        <center>
        <input placeholder="Enter your name" value={name} 
        onChange={(e) => setName(e.target.value)}/>
        <br/><br/>
        <input placeholder="Enter your age" value={ex} 
        onChange={(e) => setEx(e.target.value)}/>
        <br/><br/>
        <input placeholder="Enter your gender" value={gender} 
        onChange={(e) => setGender(e.target.value)}/>
        <br/><br/>
        <input placeholder="Enter your location" value={location} 
        onChange={(e) => setLocation(e.target.value)}/>
        <br/><br/>
        <input placeholder="Enter your language" value={lang} 
        onChange={(e) => setLang(e.target.value)}/>
        <br/><br/> 
        <button onClick={Push}>PUSH</button>
        <button onClick={fetchData}>get</button>
        {/* <p>{listItems}</p> */}
        </center>

        </div>
       
    )
}

    // useEffect(()=>{
    //     getbookings();
    // },[])
    // if(loading){
    //     return <h1>loading..</h1>
    // }




