import React, { useEffect, useRef, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Typewriter from "typewriter-effect";
import {useDispatch} from 'react-redux'
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
import { login, register } from '../Redux/Action/Action';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate=useNavigate()
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
 
   const dispatch=useDispatch()
const handleRegister=(e)=>{
  dispatch(register({email,password}))
}
const handleLogin=()=>{
dispatch(login({email,password},navigate))
}
  return (
    <div>
    <div className="faza">
        {/* <Typewriter 
   onInit={(typewriter)=> {
  typewriter
   
  .typeString("how kifech t7ot component tya7t video")
    
  .pauseFor(1000)
  .deleteAll()
  .typeString("attend brabbi kima 7atitha ta7tha 7ot l navigation fou9 l video :)")
  .start()
  }}
  /> */}
  {/* <Typewriter
  options={{
    strings: ['wait wait wait', '7ot l navigation fou9 l video saybek meni','hello jihed'],
    autoStart: true,
    loop: true,
  }}
/>
   */}
  </div>
      {/* <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.i-diamants.com/thmb/carre/512/medias_upload/moxie/bijoux/solitaire-classique-diamant-or-4-griffes-classic.jpg"
          alt="First bague"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.benjannet.com/2722-home_default/bague-mini-modele-pretty-woman.jpg"
          alt="Second bague"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.joaillerie-larous.com.tn/33649-large_default/bague-153993.jpg"
          alt="Third bague"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}
    <MDBContainer fluid className="p-3 my-5">

<MDBRow>

  <MDBCol col='10' md='6'>
    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
  </MDBCol>

  <MDBCol col='4' md='6'>


    <MDBInput onChange={(e)=>{setEmail(e.target.value)}} wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
    <MDBInput onChange={(e)=>{setPassword(e.target.value)}} wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

    <MDBBtn onClick={(e)=>e.target.innerText==="SIGN UP"?handleRegister():handleLogin()} className="mb-4 w-100" size="lg">{window.location.href==="http://localhost:3000/login"?"sign in":"sign up"}</MDBBtn>

    <div className="divider d-flex align-items-center my-4">
      <p className="text-center fw-bold mx-3 mb-0">OR</p>
    </div>

    <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
      <MDBIcon fab className="mx-2"/>
      Continue with Google
    </MDBBtn>

    <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#55acee'}}>
      <MDBIcon fab icon="facebook-f" className="mx-2"/>
      Continue with facebook
    </MDBBtn>
</MDBCol>
</MDBRow>

</MDBContainer>
    </div>
  )
}
