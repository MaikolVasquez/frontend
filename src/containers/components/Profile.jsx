import React from "react";
import {useState,useEffect} from 'react'
import '../../styles/General.styl'
import '../../styles/Profile.styl'
import 'regenerator-runtime/runtime'


const Profile = ()=>{
  const [data,setData] = useState({})
    useEffect(()=>{
        getInfo()
    },[])

  const getInfo = async ()=>{
      const data = await fetch("http://localhost:3000/data")
      const dataJson = await data.json()
      setData(dataJson)
}
    return  (
              <div className="general-container profile-container">
              <h2 className="Profile-title">{data.profession}</h2>
              <p className="Profile-desc">{data.Profile}</p>
              </div>  
            )
}

export default Profile;