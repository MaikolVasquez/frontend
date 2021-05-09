import React from 'react'
import {useState,useEffect} from "react";
import '../../styles/Header.styl'
import 'regenerator-runtime/runtime'


const Header = ()=>{
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
                <div className="header-container">
                <img src="https://i.postimg.cc/fTK33gbC/Whats-App-Image-2021-05-09-at-9-48-16-AM.jpg" alt="avatar" />
                <h2 className="Header-title">{data.name}</h2>
                    <p className="Header-item job-title-header">{data.profession}</p>
                    <p className="Header-item phone-header">Phone: {data.phone}</p>
                    <p className="Header-item email-header">Email: {data.email}</p>                        
                    <p className="Header-item website-header">Website: {data.website}</p> 
                    <p className="Header-item adress-header">Address: {data.address}</p> 
                </div>



            )
}

export default Header;