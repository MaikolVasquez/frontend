import React from "react";
import {useState,useEffect} from 'react'
import '../../styles/General.styl'
import '../../styles/Experience.styl'
import 'regenerator-runtime/runtime'


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
if(loading) {
return (
    <div className="general-container experience-container">            
    <h2 className="Experience-title">Loading...</h2>
    <p className="Experience-item experience-item1">Loading...</p>
    <p className="Experience-item experience-item2">Loading...</p>
    <p className="Experience-item experience-item3">Loading...</p>
    <p className="Experience-item experience-item4">Loading...</p>
    </div> 
)    


}

    return  (
                <div className="general-container experience-container">            
                    <h2 className="Experience-title">Experience</h2>
                    <p className="Experience-item experience-item1">Position: {datastore.experience[0].jobTitle}</p>
                    <p className="Experience-item experience-item1">Company: {datastore.experience[0].company}</p>
                    <p className="Experience-item experience-item2">Start Date: {datastore.experience[0].startDate}</p>
                    <p className="Experience-item experience-item3">End Date: {datastore.experience[0].endDate}</p>
                    <p className="Experience-item experience-item4">Description: {datastore.experience[0].jobDescription}</p>
                </div>

            )
}

export default Experience;