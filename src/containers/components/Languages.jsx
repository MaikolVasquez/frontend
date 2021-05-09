import React from "react";
import {useState,useEffect} from 'react'
import '../../styles/General.styl'
import '../../styles/Languages.styl'

const Languages = ()=>{
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
        <div className="general-container languages-container">            
            <h2 className="Languages-title">Languages</h2>
            <p className="Languages-item">{datastore.languages[0].name}</p>
            <p className="Languages-item">{datastore.languages[1].name}</p>
            <p className="Languages-item">another lenguage</p>
        </div>

    )
}

export default Languages;