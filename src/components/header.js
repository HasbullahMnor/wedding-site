import React from 'react'
import { Link } from 'gatsby'
import './header.css'


class Header extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
    hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset
  
    if (scrollTop > 50) {
    this.setState({ hasScrolled: true })
    } else {
    this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src={require('../images/logo-designcode.svg')} width="30" alt=""/></Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/guessbook">Guessbook</Link>
          <Link to="/registry">Registry</Link>
          <Link to="/rsvp"><button>Rsvp</button></Link>
        </div>
      </div>
    )
  }
}

export default Header
