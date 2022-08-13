import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useState } from "react";

import {faCircleArrowRight,faCircleArrowLeft, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

function Hotel () {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

   const photos = [
    {
      src:"https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/45976671.jpg?k=0032d6fb71d152b9c1c75e8482fc0db25464e742cd2e73c4df26252a6cdd7bca&o=&hp=1"
    },
    {
      src:"https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/45976882.jpg?k=0b73249c2fb440513d7d72722876c873b197c70074e4643fe194beb079d4826c&o=&hp=1"
    },
    {
      src:"https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/45976882.jpg?k=0b73249c2fb440513d7d72722876c873b197c70074e4643fe194beb079d4826c&o=&hp=1"
    },
    {
      src:"https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/45976882.jpg?k=0b73249c2fb440513d7d72722876c873b197c70074e4643fe194beb079d4826c&o=&hp=1"
    },
    {
      src:"https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/45976882.jpg?k=0b73249c2fb440513d7d72722876c873b197c70074e4643fe194beb079d4826c&o=&hp=1"
    },
    {
      src:"https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/45976882.jpg?k=0b73249c2fb440513d7d72722876c873b197c70074e4643fe194beb079d4826c&o=&hp=1"
    }
]


 function handleOpen (i) {
     setSlideNumber(i);
     setOpen(true);
 }

 function handleMove(direction) {
          let newSlideNumber;
          if (direction === "l") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
          } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
          }

          setSlideNumber(newSlideNumber);
 }


    return(
    <div>
      <Navbar />
      <Header type="List"/>
      <div className="hotelContainer">
       {open && <div className="slider">
        <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={function(){
          setOpen(false);
        }}/>
        <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={function(){
          handleMove("l")
        }}/>
        <div className="sliderWrapper">
          <img src={photos[slideNumber].src}
           className="sliderImg"
          />
        </div>
        <FontAwesomeIcon icon={faCircleArrowRight}  className="arrow" onClick={function(){
          handleMove("r")
        }}/>
       </div>}
        <div className="hotelWrapper">
        <button className="bookNow">
           Reserve or Book Now!
        </button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
             Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighLight"> 
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map(function(photo,i){
                return(
                <div className="hotelImgWrapper">
                   <img src={photo.src} 
                     className="hotelImg"
                     onClick={function(){handleOpen(i)}}
                   />
                </div>
                )
            })}
          </div>
          <div className="hotelDetails">
             <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">Stay in the heart of Paris</h1>
                <p className="hotelDesc">
                in the 2nd arr. District of Paris, close to Opéra Garnier, LivinParis - Luxury 3 Bedrooms Le Louvre I features free WiFi and a washing machine. The property has city views and is a 15-minute walk from Louvre Museum and 1.9 km from Musée de l'Orangerie
               The apartment features 3 separate bedrooms, 2 bathrooms, a fully equipped kitchen with a dining area and dishwasher, and a living room with a flat-screen TV. Towels and bed linen are featured.
                Pompidou Center is 2.3 km from the apartment, while Orsay Museum is 2.3 km away. The nearest airport is Paris - Orly Airport, 17.7 km from LivinParis - Luxury 3 Bedrooms Le Louvre I.
                This is our guests' favorite part of Paris, according to independent reviews.
                </p>
             </div>
             <div className="hotelDetailsPrice">
               <h1>Perfect for a 9-night stay!</h1>
               <span>
                Located in the real heart of paris, this property has an excellent location score of 9.8! 
               </span>
               <h2>
                <b>$945</b> (9 nights)
               </h2>
               <button>Reserve or Book Now!</button>
             </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>

    </div>  
    );
}

export default Hotel;