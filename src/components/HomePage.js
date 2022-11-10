import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
 <>
 <img src="https://i.ibb.co/ZfVr2s9/mutant-registration-act-copy-2.png" className="home-img"></img>
 {/* <h1 className='title'>DOMA Directory Page</h1> */}
 <div className = 'home-button-container'>
  {/* <button className="noselect">Not Database</button>  */}
 
 <Link to={"/characters"}>
 <button className="noselect">People</button>
 </Link>
 
 <Link to={"/events"}>
 <button className="noselect">Events</button>
 </Link>
 
 </div>


</>
  )
}

export default HomePage

 {/* <div className="searchBar"> 
    <input type="text" placeholder="Search People / Events"></input>
    <button>Go</button>

    </div> */}
