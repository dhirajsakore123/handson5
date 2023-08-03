import React, { useState } from 'react'

const HocCompo = (WrappedComponent) => {
    function Hoc(){
     const[Counter,setCounter]=useState(0)
     const HandelClick=()=>{
        setCounter(Counter+1);
     }
     return(
        <>
        <WrappedComponent counter={Counter} handelClick={HandelClick}  />
        </>
     )
    }
 return Hoc
}

export default HocCompo
