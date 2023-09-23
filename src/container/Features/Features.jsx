import React from 'react'
import './Features.scss'

import asset8 from '../../assets/asset8.svg'
import asset9 from '../../assets/asset9.svg'
import asset10 from '../../assets/asset10.svg'
import asset11 from '../../assets/asset11.svg'
import asset12 from '../../assets/asset12.svg'



const Features = () => {
  return (
    <div id='features' className="feature-container">
      <div className="feature-content">
        <div className="feature-header">
          <img src={asset8} alt="" />
          <h1>The GENESIS <br /> of <span> Matterblock. </span></h1>
          <p>
            There’s plenty of money being thrown around but it takes more than money to build the future. To be a success in this ecosystem you need access a Swiss Army Knife of tools, network & exposure. We’re the rarest of investment partners - sharing this access with you. We have the battle-scars and the network needed to support high-quality projects in leaping to your next level and beyond.
          </p>
        </div>

        <div className="feature-cards">
          <div className="feature-card">
            <img src={asset9} alt="Logo here" />
            <h1 className="feature-card-header">Business Success Strategies</h1>
            <ul>
              <li>2012 years in the industry</li>
              <li>Personal support from established CEOs & experts</li>
              <li>Review and feedback on your business model</li>
              <li>Go-to-market strategy</li>
            </ul>
          </div>

          <div className="feature-card dull-white">
            <img src={asset10} alt="Logo here" />
            <h1 className="feature-card-header">Business Success Strategies</h1>
            <ul>
              <li>2012 years in the industry</li>
              <li>Personal support from established CEOs & experts</li>
              <li>Review and feedback on your business model</li>
              <li>Go-to-market strategy</li>
            </ul>
          </div>

          <div className="feature-card">
            <img src={asset10} alt="Logo here" />
            <h1 className="feature-card-header">Business Success Strategies</h1>
            <ul>
              <li>2012 years in the industry</li>
              <li>Personal support from established CEOs & experts</li>
              <li>Review and feedback on your business model</li>
              <li>Go-to-market strategy</li>
            </ul>
          </div>

          <div className="feature-card dull-white">
            <img src={asset11} alt="Logo here" />
            <h1 className="feature-card-header">Business Success Strategies</h1>
            <ul>
              <li>2012 years in the industry</li>
              <li>Personal support from established CEOs & experts</li>
              <li>Review and feedback on your business model</li>
              <li>Go-to-market strategy</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Features