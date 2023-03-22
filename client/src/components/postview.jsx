import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Postview() {
    const [postdata, setPostData]= useState([])
    const [search, setSearch] = useState("")
    useEffect(()=>{
        getData()
    },[])
    const getData = async()=>{
        const res = await axios.get("http://localhost:8000/get")
        console.log(res.data);
        setPostData(res.data.allPost)

    }
  return (
    <div>
        <form>
            <input type="text" placeholder='search' onChange={(e)=>{setSearch(e.target.value)}} />
        </form>

        <div className="container">
            {postdata.filter((item)=>{
                return search.toLowerCase() === ""
                ? item
                : item.name.toLowerCase().includes(search)
            }).map((item,id)=>{
                return(
                    <div key={id}>
                        <img src={item.image} alt="" />
                        <p>{item.name}</p>
                        <p>{item.location}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Postview