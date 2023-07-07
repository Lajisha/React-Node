import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const Main=styled.div`

    height: 100vh;
    display: flex;
    background-color: rgb(9, 56, 117);
    align-items: center;
    justify-content: center;
    overflow: hidden;

.formdiv{
    height: 80vh;
    width: 70vh;
    border-radius: 10px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    overflow: hidden;
}

/* @media screen (orientation: landscape) {
  
}
@media screen and (max-width:800px){
  .formdiv label{
    align-items: center;
  }
} */

.login{
    font-size: 40px;
}
.box{
    width: 500px;
    height: 60px;
}
.mail,.pswd{
    display: flex;
    flex-direction: column;
    margin: 15px;
}
#Password,#Email{
    font-size: 15px;

}
.check{
    width: 500px;
    font-size: 15px;
}

.btn1{
    border: none;
    width: 500px;
    height: 60px;
    font-size: 20px;
    margin: 30px;
    color: white;
    background-color: rgb(9, 56, 117);
}

.link{
    color: rgb(9, 56, 117);
}
.forgot{
    margin: 10px;
}

@media screen and (max-width:800px)   {
  .formdiv{
    width:350px;
    /* height:350px; */
  }
  .formdiv input{
    width:300px;
  }
}

@media screen and (max-height:600px){
  .formdiv{
    font-size: 15px;
  }
  .box{
    height: 30px;
  }
  .mail,.pswd{

    margin: 10px;
}
.btn1{
    height: 30px;
    /* font-size: 20px; */
    margin: 15px;

}
.forgot{
    margin: 5px;
}
}

`


const Login = () => {

  const [passwordShown,setPasswordShown]=useState(false);

  const pswd = () => {
    setPasswordShown(!passwordShown);
  }

  const value = 0
  useEffect(() => {console.log(value);},[value])
  
  return (
    <Main>
      <form  className='form' action="">
        <div className="formdiv">
            <label htmlFor="" className='login'>Login</label>
            <div className="mail">
              <label htmlFor="Email">Email:</label>
              <input type="email"  onChange={(e)=>console.log(e.target.value)}    id='Email' className='box' placeholder='Enter email'title='EMAIL'/>
            </div>
            <div className="pswd">
              <label htmlFor="Password">Password:</label>
              <input type={passwordShown ? "text" : 'password'} onChange={(e)=>console.log(e.target.value)} id='Password' className='box' placeholder='Enter password' title='PASSWORD'/>          
            </div>
            <div className="check">
              <input type="checkbox" id='ch' onClick={pswd}/>
              {/* <label htmlFor='ch'> */}
              Show Password
              {/* </label>      */}
            </div>
            <input type="submit" className='btn1' value='SIGN IN'/>
            <div className="forgot">
              Forgot <a className='link' href="">Username / Password</a>?
            </div>
              <div className="signup">
                  Don't have account? <a className='link' href="">Sign up</a>
            </div>
        
        </div>
      
      </form>
    </Main>
  )
}

export default Login
