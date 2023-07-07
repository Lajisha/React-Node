import React, { useState } from 'react'
import pic from '../assets/Spotifyyy.png'
import styled from 'styled-components'

const Container=styled.div`
    background-image: linear-gradient(to bottom,rgb(235, 28, 94),rgb(255, 157, 0));   
    height: 100vh;
    font-family: Arial;
    font-weight: bold;
    overflow: hidden;

.img{
    /* width: 15%; */
    height: 70px;
}

.first{
    background-color: #100d0d;
    height: 100px;

    opacity: 0.7;
}

.navbar{
    display: flex;
    align-items: center;
    color: white;
}

.nav{
    width: 100%;
}

ul{
    width:70%;
    font-size: 25px;
    display: flex;
    justify-content:space-around;
    float: inline-end;
}
li{
    list-style: none;
}

li a{
    text-decoration: none;
    color: white;
}

.checkbtn{
    font-size: 30px;
    color: white;
    float: right;
    line-height: 80px;
    cursor: pointer;
    display: none;
}

#check{
    display: none;
}

@media (max-width: 916px) {

    .img{
    width: 50%;
    height: 70%;
    }

    .checkbtn{
        font-family: 'Times New Roman', Times, serif;
        display: block;
        font-weight: normal;
        right: 50px;
        top:10px ;
        position: fixed;
    }

    .nav .no{
    display: none;
    }

    ul{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        position: fixed;
        width: 100%;
        height: 100vh;
        background-color: #100d0d;
        top: 75px;
        left: -200%;
        text-align: center;
        transition: all .5s;
        overflow: hidden;
    }

    .nav ul li{
        margin: 20px 0;
        width: 90%;
    }

    .first ul li a{
        font-family: 'Times New Roman', Times, serif;
        font-size: 30px;
        font-weight: normal;
    }

    a:hover{
        opacity:1;
        background:none ;
        color:#ff0000;
    }

    #check:checked ~ ul{
        left: 0%;
    }
}




.second{
    height: 89.7vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: white;
}

.music{
    font-size: 100px;
    margin-bottom: 10px;
}
.million,.count{
    font-size: 25px;
    margin-bottom: 25px;
}
.btn{
    border: none;
    outline: none;
    width: 300px;
    height: 50px;
    border-radius: 50px;
    color: white;
    font-size: 20px;
    font-weight: bold;
    background-color: rgb(95, 144, 23);
}

`


const Home = () => {
    const [value,setValue]=useState(0)
    const incrmnt = ()=>{ setValue(value+1)}

  return (
    <Container>
        <div className="first">
        
            
            <div className="navbar">
            
            <img className="img" src={pic} alt=""></img>  
            
         
                <div className="nav">
                <input type="checkbox" id='check' />
            <label htmlFor="check" className='checkbtn'>Menu</label>
                    <ul>
                        <li><a href="">Premium</a></li>
                        <li><a href="">Help</a></li>
                        <li><a href="">Download</a></li>
                        <li className='no'>|</li>
                        <li><a href="/Register">Sign up</a></li>
                        <li><a href="/Login">Log in</a></li>
                    </ul>
                                       
                </div>
            </div>
        </div>

        <div className="second">
            <div className="text">
                <div className="music">
                    Music for everyone
                </div>
                <div className="million">
                    Millions of songs. No credit card needed.   
                </div>
            </div>
            <div className="count">
                count : {value}
            </div>
            <div className="button">
                <button className='btn' onClick={incrmnt}>GET SPOTIFY FREE</button>
            </div>
        </div>
    </Container>
        
  )
}

export default Home
