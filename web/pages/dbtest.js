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

   
    



