import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Signup() {

    const navigate = useNavigate()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSignup = async(e)=>{
        e.preventDefault()
        let p1 = password, p2 = confirmPassword
        if(!email.includes("@"))
        {
            alert("enter valid email")
            return
        }
        if(p1!==p2)
        {
            alert("password doesn't match")
            return
        }
        const res  = await axios.post("http://localhost:8000/signup", {email:email, password:password})
        console.log(res);
        if(res.data.status==="failed")
        {
            alert("user already exists")
            return
        }

        alert("signup successfull")
        navigate("/")
        
    }

  return (
    <div>
        <h1>Signup form</h1>
        <form>
            <input type="email" placeholder='email' onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
            <input type="password" placeholder='password' onChange={(e)=>{setPassword(e.target.value)}} value={password} />
            <input type="password" placeholder='confirm password' onChange={(e)=>{setConfirmPassword(e.target.value)}} value={confirmPassword}/>
            <button onClick={handleSignup}>Signup</button>
        </form>
    </div>
  )
}

export default Signup