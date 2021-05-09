import React from "react";
import {useState,useEffect} from 'react'
import '../../styles/General.styl'
import '../../styles/Experience.styl'


const Experience = ()=>{
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
                <div className="general-container experience-container">            
                    <h2 className="Experience-title">{datastore.experience[0].jobTitle}</h2>
                    <p className="Experience-item experience-item1">{datastore.experience[0].company}</p>
                    <p className="Experience-item experience-item2">{datastore.experience[0].startDate}</p>
                    <p className="Experience-item experience-item3">{datastore.experience[0].endDate}</p>
                    <p className="Experience-item experience-item4">{datastore.experience[0].jobDescription}</p>
                </div>

            )
}

export default Experience;