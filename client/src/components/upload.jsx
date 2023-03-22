import axios from 'axios'
import React, { useState } from 'react'
import FileBase64 from "react-file-base64"
import { useNavigate } from 'react-router-dom'

function Upload() {

    const navigate = useNavigate()
    const [data,setData] = useState({name:"", location:""})
    const [file, setFile] = useState("")

    const handlePost = async(e)=>{
        e.preventDefault()
        const res = await axios.post("http://localhost:8000/post", {data, file})
        console.log(res);
        navigate("/postview")
    }
  return (
    <div>
        <div className="form-container">
            <form action="" method='post' encType='multipart/form-data'>
                <FileBase64 multiple={false} onDone={(image)=>{setFile({...file,image:image.base64})}}/>
                <input type="text" placeholder='name' onChange={(e)=>{setData({...data,name:e.target.value})}}/>
                <input type="text" placeholder='location' onChange={(e)=>{setData({...data,location:e.target.value})}}/>
                <button onClick={handlePost}>Post</button>
            </form>
        </div>
    </div>
  )
}

export default Upload