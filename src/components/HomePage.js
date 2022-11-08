import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
 <>
 <h1 className='title'>DOMA Directory Page</h1>
 <div className = 'home-button-container'>
 <button className="noselect">Database</button>
 
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