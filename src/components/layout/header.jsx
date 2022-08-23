import React from 'react'
import "../../styles/header.css"
import {Link} from "react-router-dom";
export default function Header() {
  return (
    <div>
        <nav>

        <ul className='navbarre' style={{display:"flex"}}>
         <li><img src="https://previews.123rf.com/images/ylivdesign/ylivdesign1211/ylivdesign121100088/16526995-blue-movie-logo-on-a-black-background.jpg"/></li>
            <li><Link to="/">Home</Link></li>
        
            <li><Link to="/horor Movies">Horor Movies</Link></li>
            <li><Link to="/adventure Movies">Adventure Movies</Link></li>
            <li><Link to="/action Movies">Action Movies</Link></li>
            <li><Link to="/comedy Movies">Comedy Movies</Link></li>
            <li><Link to="/drama Movies">Drama Movies</Link></li>
            <li><Link to="/romance Movies">Romance Movies</Link></li>

          
        
        </ul>
      </nav>
     

     

    </div>
  )
}
