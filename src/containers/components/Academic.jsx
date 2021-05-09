import React from "react";
import {useState,useEffect} from 'react'
import '../../styles/General.styl'
import '../../styles/Academic.styl'
import 'regenerator-runtime/runtime'



const Academic = ()=>{
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

    return  (
                <div className="general-container academic-container">            
                <h2 className="Academic-title">Academic</h2>
                <p className="Academic-item">{datastore.Academic[0].degree}</p>
                <p className="Academic-item">{datastore.Academic[0].startDate}</p>
                <p className="Academic-item">{datastore.Academic[0].endDate}</p>
                <p className="Academic-item">{datastore.Academic[0].institution}</p>
                </div>

            )
}

export default Academic;