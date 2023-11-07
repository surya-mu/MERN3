import React from 'react'
import './home.css'
import { Link } from 'react-router-dom';





export function Home(){

  return (
    <>
    <div>
      <div className='hero-section'>
          <img loading='lazy' src='./Courses2.jpg' alt=''></img>
          <h1>Tired of Searching for Free Courses? &nbsp; Try CertiFree!</h1>
          <h2> The Courses You Need. &nbsp; &nbsp;All at One Place. &nbsp; Everything made Free. </h2>
          <button><Link to='/courses'>Get Started  &nbsp;➔</Link></button>
      </div>
    </div>
      <h1 id='next-heading'>Why Choose Us?</h1>
    <div> 
      <div  id='placeholder-div'className='hero-section2'>
            <img  src='./Courses1.jpg' alt=''></img>
            <h1>A Wide Variety of 100+ to choose from! </h1>
            <h2>Helping Learners Worldwide. <br />Start Learning Now!</h2>
      </div>
    </div>
    </>


  )
}
