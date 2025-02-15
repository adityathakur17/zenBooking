import React from 'react'
import "./searchItem.css"

function SearchItem() {
  return (
    <div className='searchItem'>
        <img 
        src="https://cf.bstatic.com/xdata/images/hotel/square600/639407153.webp?k=259e9874c7a67fb37da48df1a37bcc740b5ff6a2801e2f4aaf02adc7915ca725&o=" 
        alt=""
        className='siImg' />
        <div className='siDesc'>
            <h1 className="siTitle">Tower Street Apartments</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free Airport taxi</span>
            <span className='siSubtitle'>
                Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">
                Entire Studio + 1 bathroom + 21m full bed
            </span>
            <span className="siCancelOp">Free Cancellation</span>
            <span className="siCancelOpSubtitle">You can cancel later, so lock in this greate price today!</span>    
        </div>
        <div className='siDetails'>
            <div className='siRating'>
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className='siDetailTexts'>
                <span className='siPrice'>$123</span>
                <span className='siTaxOp'>Include taxts and fees</span>
                <button className='siCheckButton'>See availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem