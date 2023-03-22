import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Signin() {

    const navigate = useNavigate()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState("")

    const handleSignin = async(e)=>{
        e.preventDefault()

        const res = await axios.post("http://localhost:8000/signin", {email:email,password:password})
        console.log(res);

        if(res.data.status==="success")
        {
            sessionStorage.setItem("token", res.data.token)
            alert("login successfull")
            navigate("/home")
        }
        else{
            alert("invalid credentials")
        }
        
    }

  return (
    <div>
        <form>
            <input type="email" placeholder='email' onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
            <input type="password" placeholder='password' onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
            <button onClick={handleSignin}>Signin</button>
            <p>dont have an account?
            <Link to="/signup">Signup</Link>
            </p>
        </form>
    </div>
  )
}

export default Signin