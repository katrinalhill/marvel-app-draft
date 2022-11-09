// import { React, useState, useContext, useEffect} from 'react'
// import {Link} from 'react-router-dom'
// import EventContext from "./EventContext"
// import './Character.css'

function AboutUs() {
  return (
    <div>
    <div className ="aboutus">
     
      <h1 id="aboutus-data-h">Who Are We</h1>
      <h2 className="aboutus-data-p"> Protectors, Defenders, and Servers of ViaCom City</h2>

      <h1 className="aboutus-data-h" > What We Investigate </h1>
      <h2 className="aboutus-data-p" >
        <li className = "aboutuslist">  Nefarious Activity -  </li>
        <li className = "aboutuslist">  Cyber Crime -  </li>
        <li className = "aboutuslist">  Public Corruption - </li>
        <li className = "aboutuslist">  Freedom Fighting  -</li>
        <li className = "aboutuslist">  Weapons of Mass Destruction -  </li>
     </h2>
      
    </div>
    <hr />

          <div className="aboutus-images">
              <img src="https://i.annihil.us/u/prod/marvel/i/mg/8/d0/5ada3227bc266/clean.jpg" height='300px' width='600px'/>
              <img src="https://cdn.mos.cms.futurecdn.net/NbkvkgfMP6du7nre4qUH6K-1920-80.jpg.webp" height='300px' width='600px'/>
              <img src="https://pyxis.nymag.com/v1/imgs/8b7/95c/eefdf19a7df22128c3568b2cc741b41139-21-ultimates-lede.2x.rhorizontal.w700.jpg" height='300px' width= '600px'/>
              <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/invaders-6_card_0.jpg" height='300px' width='600px'/>
            </div>


    <hr />
    {/* <div className="Storyboards">
      <div className="StoryDisinformation">
        The DOMA executes an aggressive disinformation program aimed at 
      </div>

    </div> */}
    </div>
  )
}

export default AboutUs;