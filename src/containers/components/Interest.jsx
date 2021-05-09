import React from "react";
import {useState,useEffect} from 'react'
import '../../styles/General.styl'
import '../../styles/Interest.styl'



const Interest = ()=>{
    const [datastore,setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        getInfo()
    },[])


  const getInfo = async ()=>{
      const data = await fetch("http://localhost:3000/data")
      const dataJson = await data.json()      
      setData(dataJson)
      setLoading(false)
}
if(loading) return <div /> 

    return (
        <div className="general-container interest-container">            
            <h2 className="Interest-title">Interest</h2>
            <p className="Interest-item">{datastore.interest[0]}</p>
            <p className="Interest-item">{datastore.interest[1]}</p>
            <p className="Interest-item">{datastore.interest[2]}</p>
            <p className="Interest-item">{datastore.interest[3]}</p>
        </div>

    )
}

export default Interest;