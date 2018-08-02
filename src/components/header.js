import React from 'react'
import { Link } from 'gatsby'
import './Header.css'


const Header = ({ siteTitle }) => (
<div className="Header">
  <div className="HeaderGroup">
    <Link to="/"><img src={require('../images/logo-designcode.svg')} width="30" alt=""/></Link>
    <Link to="/gallery">Gallery</Link>
	  <Link to="/guessbook">Guessbook</Link>
	  <Link to="/registry">Registry</Link>
	  <Link to="/rsvp"><button>Rsvp</button></Link>
  </div>
</div>


)

export default Header
