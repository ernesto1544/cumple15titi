import React from 'react'
import SectionWrapper from './SectionWrapper'
import "../assets/css/present.css";
function Present() {
  return (
    <SectionWrapper>
      <div className='mb-64'>
        <h1 className="absolute -top-[7rem] left-0 right-0 text-center flex items-center justify-center text-xl font-extrabold text-customBlue drop-shadow-lg">
          Click en la caja para ver tu regalo!
        </h1>
      </div>
      <div className="birthday-gift">
        <input id='click' type='checkbox'/>
        <label className='gift' htmlFor='click'>
          <div className="gift-top"></div>
          <div className="gift-bottom"></div>
          <div id="raffle-red" className="entry raffle raffle-1">
          </div>
          <div id="raffle-red" className="entry raffle raffle-2">
            <div className="no-scale">
              <span className="ticket-text">MAX<br/>Tarjeta de<br/>Regalo</span>
            </div>
          </div>
          <div id="raffle-red" className="entry raffle raffle-3">
          </div>
        </label>
      </div>
    </SectionWrapper>
  )
}

export default Present