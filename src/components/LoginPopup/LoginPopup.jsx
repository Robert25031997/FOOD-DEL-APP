import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowLogin}) => {


    const [currState, setCurrState] = useState("Inregistreaza-te")

  return (
    <div className='login-popup'>
    <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt=''/>
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input type="text" placeholder='Numele tau' required />}
            <input type='email' placeholder='Email-ul tau' required />
            <input type='password' placeholder='Password' required />
        </div>
        <button>{currState==="Inregistreaza-te"?"Creeaza cont" : "Logheaza-te"}</button>
        <div className="login-popup-condition">
            <input type='checkbox' required/>
            <p>Pentru a continua, trebuie sa fiti de acord cu termenii si conditiile</p>
        </div>
        {currState==="Logheaza-te"
        ?<p>Vrei sa creezi un cont nou? <span onClick={()=>setCurrState("Inregistreaza-te")}>Click aici!</span></p>
        :<p>Ai deja un cont? <span onClick={()=>setCurrState("Logheaza-te")}>Logheaza-te aici</span></p>
        }
        
    </form>
    </div>
  )
}

export default LoginPopup
