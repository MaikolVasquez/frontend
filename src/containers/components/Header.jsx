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
                <img src="" alt="" />
                <h2 className="Header-title">{data.name}</h2>
                    <p className="Header-item job-title-header">{data.profession}</p>
                    <p className="Header-item phone-header">{data.phone}</p>
                    <p className="Header-item email-header">{data.email}</p>                        
                    <p className="Header-item website-header">{data.website}</p> 
                    <p className="Header-item adress-header">{data.address}</p> 
                </div>



            )
}

export default Header;