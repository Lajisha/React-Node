import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
    height: 100vh;
    background-image: linear-gradient(to bottom,rgb(235, 28, 94),rgb(255, 157, 0));   

    /* background-image: linear-gradient(to right,rgb(255, 89, 0),rgb(255, 187, 0)); */
    display: flex;
    justify-content:center;
    align-items: center;


.div1{
    height: 100vh;
    width: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;   
}
.lab{
    margin: 20px;
    font-size: 20px;
    color: whitesmoke;
}
.button{
    border: none;
    outline: none;
    width: 130px;
    height: 50px;
    border-radius: 50px;
    /* float: right; */
    margin:30px 0 0 0;
    font-size: 18px;
}

.div2{
    background-image: linear-gradient(to top,rgb(235, 28, 94),rgb(255, 157, 0));   
    height: 70vh;
    width: 110vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    /* background-color: white; */
    justify-content: center;
    border-top-left-radius: 10% 50%;
    border-bottom-left-radius: 10% 50%;
}

#head{
    font-size: 30px;
    font-weight: bold;
}

.nm,.unm,.email,.pswd{
    margin: 40px  0 0 0;
    width: 800px;
    height: 40px;
    font-size: 20px;
    /* background-color: blue; */
}
.details{
    width: 500px;
    height: 40px;
}

#name{
    margin-left: 70px;
}
#username{
    margin-left: 20px;

}
#email{
    margin-left: 70px;

}
#password{
    margin-left: 35px;
}

#btn2{
    background-color: orange;
    margin:30px 0 0 70%;
    color: white;
}
`



const Register = () => {
  return (
<Container>
        
        <form action="" class="form">
            <div class="div1">
            <label class="lab" id="head">Join Us</label>
            <label class="lab">Subscribe Easy Tutorials YouTube Channel to watch more videos</label>
            <input type="submit" name="" class="button" value="About Us"/>
            </div>
        </form>
        
    
        <form action="">
            <div class="div2">
                <label for="" id="head">Register Here</label> 
                <div class="nm">
                    <label for="name" >Name</label>
                    <input type="text" class='details' id='name' title="enter your NAME" required/>
                </div>          
                <div class="unm">
                    <label for="username" >UserName</label>
                    <input type="text" name="" id="username" class='details'  title="enter USERNAME " required/>
                </div>
                <div class="email">
                    <label for="email" >Email</label>
                    <input type="email" name="email" id="email" class='details'  title="enter EMAIL" required/>
                </div>
                    <div class="pswd">
                        <label for="password" >Password</label>
                        <input type="password" class='details' id="password"  minlength="8" title="password must be at least 8 characters long " required/>    
                    </div>
                    <input type="submit" class="button"  name="" id="btn2" value="Register"/>
            </div>
        </form>
</Container>    
  )
}

export default Register