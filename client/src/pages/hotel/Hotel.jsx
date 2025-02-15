import React, { useState } from 'react'
import "./hotel.css"
import Navbar from "../../components/navbar/Navbar.jsx"
import Header from "../../components/header/Header.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import MailList from '../../components/mailList/MailList.jsx'
import Footer from '../../components/footer/Footer.jsx'

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState()
  const photos = [
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max500/471052508.jpg?k=bc54c3d76e6ba6b5ded590faec055c28bea90093295dab1a4af825479a0ea2ec&o="
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max500/471052508.jpg?k=bc54c3d76e6ba6b5ded590faec055c28bea90093295dab1a4af825479a0ea2ec&o="
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max500/471052508.jpg?k=bc54c3d76e6ba6b5ded590faec055c28bea90093295dab1a4af825479a0ea2ec&o="
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/470755345.jpg?k=0dcbf3927a040276bb1599e284207db92c54e59aad132a3f15113abd84cb0301&o=&hp=1v"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max500/471052508.jpg?k=bc54c3d76e6ba6b5ded590faec055c28bea90093295dab1a4af825479a0ea2ec&o="
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max500/471052508.jpg?k=bc54c3d76e6ba6b5ded590faec055c28bea90093295dab1a4af825479a0ea2ec&o="
    }
  ];

  const handleOpen = (i)=>{
    setSlideNumber(i)
    setOpen(true)
  }

  const handleMove = (direction) =>{
    let newSlideNumber;

    if(direction==='l'){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1;
    } else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1;
    }

    setSlideNumber(newSlideNumber)
  }

  return (
    <div>
      <Navbar/>
      <Header type = "list"/>
      <div className="hotelContainer">
       { open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handleMove("l")}/>
         
          <div className='sliderWrapper'>
            <img src={photos[ slideNumber].src} alt="" className="sliderImg" />
          </div>
         
          <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handleMove("r")}/>
          
         </div>}
        <div className="hotelWrapper">
          <button className='bookNow'>Reserve or Book Now!</button>
          <h1 className="hotelTitle">Royal Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Grant Road Mumbai</span>
            </div>
            <span className='hotelDistance'>
              Excellent location - 500m from center
            </span>
            <span className='hotelPriceHighlight'>
              Book a stay over $114 at this property and get a free airport taxi
            </span>
            <div className="hotelImages">
              {photos.map((photo,i)=>(
                <div className="hotelImageWrapper">
                  <img onClick={()=>(handleOpen(i))} src={photo.src} alt="" className='hotelImg' />
                </div>
              ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">Get the celebrity treatment with world-class service at Aloft New Delhi Aerocity</h1>
              <p className="hotelDesc">
              Boasting a fitness centre and a garden, Aloft New Delhi Aerocity is located in New Delhi, 2 km from New Delhi International Airport. 12 km from Jantar Mantar, the hotel offers a terrace and a shared lounge. India Gate is 12 km from the property.
              All rooms at the hotel are fitted with a seating area and a flat-screen TV. With a private bathroom, some rooms at Aloft New Delhi Aerocity also boast pool view. The rooms include a desk.
              A continental breakfast can be enjoyed at the property. At the accommodation you will find a restaurant serving pizza cuisine. Vegetarian and dairy-free options can also be requested.
              Aloft New Delhi Aerocity offers an outdoor pool. You can play billiards at this 5-star hotel.
              Speaking English and Hindi at the reception, staff will be happy to provide guests with practical guidance on the area.
              Humayun's Tomb is 13 km from the hotel. 7 km from Qutub Minar and 10 km from Rashtrapati Bhavan
              Couples in particular like the wonderful location – they rated it 9.1 for a two-person trip.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay</h1>
              <span>
              Top Location: Highly rated by recent guests (9.0)
              </span>
              <h2>
                <b>$983</b> 
              </h2>
              <button>Reserve or Book Now</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>

  )
}

export default Hotel;