import React from "react";
import {useState,useEffect} from 'react'
import '../../styles/General.styl'
import '../../styles/Skills.styl'
import 'regenerator-runtime/runtime'


const Skills = ()=>{
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
if(loading) {
    
    return(
        <div className="general-container skills-container">            
        <h2 className="Skills-title">Skills</h2>
        <p className="Skills-item">Loading...</p>
        <p className="Skills-item">Loading...</p>
        <p className="Skills-item">Loading...</p>
        <p className="Skills-item">Loading...</p>
        </div>
    )

} 

    return (
        <div className="general-container skills-container">            
        <h2 className="Skills-title">Skills</h2>
        <p className="Skills-item">{datastore.skills[0].name}: {datastore.skills[0].percentage}</p>
        <p className="Skills-item">{datastore.skills[1].name}: {datastore.skills[1].percentage}</p>
        <p className="Skills-item">{datastore.skills[2].name}: {datastore.skills[2].percentage}</p>
        <p className="Skills-item">{datastore.skills[3].name}: {datastore.skills[3].percentage}</p>
        </div>

    )
}

export default Skills;