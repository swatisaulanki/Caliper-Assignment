import React, { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'
const Fetching = () => {
    const [data,setData]=useState([])

    const GetFetch=()=>{
      axios.get("https://mock5-server-api.herokuapp.com/plants")
      .then((res)=>{
        console.log(res.data)
        setData(res.data)
      })
    }
    useEffect(()=>{
        GetFetch()
    },[])
  return (
    <>
    <div>
    <div>
        <h2>OUR GALLERY</h2>
      </div>

      <div>
        <h1>Latest Projects</h1>
      </div>
      </div>
      <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:"10px", columnGap:"10px"}}>
      {
        data.length>0 && data.map((item)=>{
            return(
                <div key={item.id}>
               <img src={item.image} style={{ height:"300px", width:"90%", boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}/>
            </div>
            )

        })
      }
      </div>
    </>
  )
}

export default Fetching
