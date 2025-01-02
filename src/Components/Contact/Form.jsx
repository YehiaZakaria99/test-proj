import React, { useState } from "react";
import Style from "./Contact.module.scss";

export default function Form() {
    // const [placeHolder, setPlaceHolder] = useState("");
    // let [addShow, setaddShow] = useState(false);
    // function show(val , ph){
    //     if(val){
    //         setaddShow(true);
    //         setPlaceHolder(`${ph} :`);
    //     } else{
    //         setaddShow(false);
    //     }
    //     return addShow;
    // }
  


  return (
    <>
      <form action="">
        <div className={`${Style["input-box"]}`}>
            <span className={``}>{}</span>
            <input  autoComplete="current-userName" className="my-3" type="text" placeholder="userName"/>
        </div>
        <div className={`${Style["input-box"]}`}>
            <span className={``}>{}</span>
            <input  className="my-3" autoComplete="current-age"  type="text" placeholder="userAge"/>
        </div>
        <div className={`${Style["input-box"]}`}>
            <span className={``}>{}</span>
            <input  className="my-3" autoComplete="current-email" type="email" placeholder="userEmail"/>
        </div>
        <div className={`${Style["input-box"]}`}>
            <span className={``}>{}</span>
            <input  className="my-3" autoComplete="current-password" type="password" placeholder="userPassword"/>
        </div>
        <button type="submit" className={`${Style["send-btn"]}`}>Send Message</button>
      </form>
    </>
  );
}
