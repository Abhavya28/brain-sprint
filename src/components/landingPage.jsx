import React from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h1>Brain Sprint</h1>
        <button onClick={()=>navigate("/dashboard")}>Let's Begin!</button>
    </div>
  )
}

export default LandingPage