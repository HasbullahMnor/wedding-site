import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>17/11</h1>
        <p>Creating my wedding website by learning to design and code React Apps. Lets builde something great. Just dont do it half way.</p>
        <p>Welcome and thank you for being apart of our special day. We can't wait to share this day with all of you.</p>
        <br/>
       <Link to="/page-2/">Make RSVP</Link>

       <svg width="100%" height="172" viewBox="0 0 100% 172" fill="none">
          <path fill="rgb(233, 192, 8, 0.8)">
          <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s"
          values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;

          M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;

          M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
          
          M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;" />
          </path>
        </svg>

        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} alt="" width="50" />
          <img src={require('../images/logo-figma.png')} alt="" width="50" />
          <img src={require('../images/logo-studio.png')} alt="" width="50" />
          <img src={require('../images/logo-framer.png')} alt="" width="50" />
          <img src={require('../images/logo-react.png')} alt="" width="50" />
          <img src={require('../images/logo-swift.png')} alt="" width="50" />
        </div>
        
      </div>
    </div>
  </Layout>
)

export default IndexPage

