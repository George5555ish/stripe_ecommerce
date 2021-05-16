import React from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
// import './owl.css';  
import Image1 from "../screens/images/instagram-img-01.jpg";
import Image2 from "../screens/images/instagram-img-02.jpg";
import Image3 from "../screens/images/instagram-img-03.jpg";
import Image4 from "../screens/images/instagram-img-04.jpg";
import Image5 from "../screens/images/instagram-img-05.jpg";
import Image6 from "../screens/images/instagram-img-06.jpg";
import Image7 from "../screens/images/instagram-img-07.jpg";
import Image8 from "../screens/images/instagram-img-08.jpg";

import { FaInstagram } from 'react-icons/fa';

export default function OwlCarouselSlider (){

    return (
        <div className="flex-slider" style={{width: "100%"}}>  
            {/* <div className="arrowIcons">
               {"<"}
            </div> */}
     <div class='container-fluid'>            
      <OwlCarousel items={8}  
        className="owl-theme"  
        loop  
        autoplay="true"
       
        
        autoplayHoverPause="true"
        nav  
        margin={8}
 
         >  
         <div className="slider-height"><div className="hidden-div"><div className="hidden-div-child"><FaInstagram size={32} color="#000000"/></div></div><img  className="img" src= {Image1} alt=""/>
         </div>  
         <div className="slider-height"><div className="hidden-div"><div className="hidden-div-child"><FaInstagram size={32} color="#000000"/></div></div><img  className="img" src= {Image2} alt=""/>
         </div>  
         <div className="slider-height"><div className="hidden-div"><div className="hidden-div-child"><FaInstagram size={32} color="#000000"/></div></div><img  className="img" src= {Image3} alt=""/>
         </div> 
         <div className="slider-height"><div className="hidden-div"><div className="hidden-div-child"><FaInstagram size={32} color="#000000"/></div></div><img  className="img" src= {Image4} alt=""/>
         </div>  
         <div className="slider-height"><div className="hidden-div"><div className="hidden-div-child"><FaInstagram size={32} color="#000000"/></div></div><img  className="img" src= {Image5} alt=""/>
         </div>  
         <div className="slider-height"><div className="hidden-div"><div className="hidden-div-child"><FaInstagram size={32} color="#000000"/></div></div><img  className="img" src= {Image6} alt=""/>
         </div>  
         <div className="slider-height"><div className="hidden-div"><div className="hidden-div-child"><FaInstagram size={32} color="#000000"/></div></div><img  className="img" src= {Image7} alt=""/>
         </div>  
         <div className="slider-height"><div className="hidden-div"><div className="hidden-div-child"><FaInstagram size={32} color="#000000"/></div></div><img  className="img" src= {Image8} alt=""/>
         </div>    
    </OwlCarousel>  
    </div>  
             {/* <div className="arrowIcons">
               {">"}
            </div> */}
    </div> 
    );
}