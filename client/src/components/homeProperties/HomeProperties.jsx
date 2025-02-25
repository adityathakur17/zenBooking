import React from 'react'
import "./homeProperties.css"
function HomeProperties() {
  
  return (
    <div className='hp'>
      <div className='hpItem'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/420377357.webp?k=29a0e9879ac8361539c3dae41f047d383e6fa6917f8f47cb50dad001ada0eae6&o=" alt="" className="hpImg" />
        <span className='hpName'>The Apartments by The Sloane</span>
        <span className="hpCity">Kensington and Chelsea</span>
        <span className="hpPrice">Starting from 39,756</span>
        <div className="hpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
      </div>
      <div className='hpItem'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" alt="" className="hpImg" />
        <span className='hpName'>Aparthotel Stare Miasto</span>
        <span className="hpCity">Old Town, Poland, Krakow</span>
        <span className="hpPrice">Starting from Rs10,311</span>
        <div className="hpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
      </div>
      <div className='hpItem'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/531732579.webp?k=df9d17c4371175b0e4a60e390083280c837d5e94dacc7d9ae6db48728b5fb5ff&o=" alt="" className="hpImg" />
        <span className='hpName'>Leman Locke</span>
        <span className="hpCity">Tower Hamlets, United Kingdom</span>
        <span className="hpPrice">Starting from Rs17,263</span>
        <div className="hpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
      </div>
      <div className='hpItem'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/579099936.webp?k=e04cc7f7fe864ce09b7d7d978dbb7db3e558038a2151eb7c4c11e895bafbd8c0&o=" alt="" className="hpImg" />
        <span className='hpName'>7Seasons Apartments Budapest</span>
        <span className="hpCity">06. Terezvros, Hungary, Budapest</span>
        <span className="hpPrice">Starting from Rs23,455</span>
        <div className="hpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
      </div>
    </div>
  )
}

export default HomeProperties