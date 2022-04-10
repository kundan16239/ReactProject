import React from 'react';
import { useState, useEffect } from "react";
import './Postview.css';
import Card from './Card.js';
import Header from './Header.js'


const Postview=()=> {
  const [items,setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3004/user")
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);
        },
      )
  }, [])

  // console.log(items)
  return (
    <>
      <Header/>

      
      {items.map((e)=>
      <Card details={e}/>
      )}
    </>
    
  );
}

export default Postview;
