import React from 'react';
import $ from 'jquery';
import Power3 from 'gsap';
import './index.css';
// import 'normalize.css';

// import 'jquery';
import { TweenMax } from 'gsap/gsap-core';



 export default function Gsap() {


  //  const [autoSlide, setAutoSlide] = useState(true);

  var slideshowDuration = 4000;
  var slideshow=$('.main-content .slideshow');
  var windowHeight;

  
  function slideshowSwitch(slideshow,index){
    if(slideshow.data('wait')) return;
  
    var slides = slideshow.find('.slide');
    // var pages = slideshow.find('.pagination');
    var activeSlide = slides.filter('.is-active');
    var activeSlideImage = activeSlide.find('.image-container');
    var newSlide = slides.eq(index);
    var newSlideImage = newSlide.find('.image-container');
    var newSlideContent = newSlide.find('.slide-content');
    var newSlideElements=newSlide.find('.caption > *');
   
    if(newSlide.is(activeSlide))return;
  
    newSlide.addClass('is-new');
    var timeout=slideshow.data('timeout');
    clearTimeout(timeout);
    slideshow.data('wait',true);
    var transition=slideshow.attr('data-transition');
 
    if(transition ==='fade'){
        return;
  
    } 
    
    else {
      if(newSlide.index()>activeSlide.index()){
        var newSlideRight=0;
        var newSlideLeft='auto';
        // var newSlideImageRight=-slideshow.width()/8;
        // var newSlideImageLeft='auto';
        var newSlideImageToRight=0;
        var newSlideImageToLeft='auto';
        var newSlideContentLeft='auto';
        var newSlideContentRight=0;
        var activeSlideImageLeft=-slideshow.width()/4;
      } else {
        // var newSlideRight='';
        // var newSlideLeft=0;
        // var newSlideImageRight='auto';
        // var newSlideImageLeft=-slideshow.width()/8;
        // var newSlideImageToRight='';
        // var newSlideImageToLeft=0;
        // var newSlideContentLeft=0;
        // var newSlideContentRight='auto';
        // var activeSlideImageLeft=slideshow.width()/4;
      }
  
      newSlide.css({
        display:'block',
        width:0,
        right:newSlideRight,
        left:newSlideLeft
        ,zIndex:2
      });
  
    
  
      newSlideContent.css({
        width:slideshow.width(),
        left:newSlideContentLeft,
        right:newSlideContentRight
      });
  
      activeSlideImage.css({
        left:0
      });
  
      TweenMax.set(newSlideElements,{y:20,force3D:true});
      TweenMax.to(activeSlideImage,1,{
        left:activeSlideImageLeft,
        ease:Power3.easeInOut
      });
  
      TweenMax.to(newSlide,1,{
        width:slideshow.width(),
        ease:Power3.easeInOut
      });
  
      TweenMax.to(newSlideImage,1,{
        right:newSlideImageToRight,
        left:newSlideImageToLeft,
        ease:Power3.easeInOut
      });
  
      TweenMax.staggerFromTo(newSlideElements,0.8,{alpha:0,y:60},{alpha:1,y:0,ease:Power3.easeOut,force3D:true,delay:0.6},0.1,function(){
        newSlide.addClass('is-active').removeClass('is-new');
        activeSlide.removeClass('is-active');
        newSlide.css({
          display:'',
          width:'',
          left:'',
          zIndex:''
        });
  
        newSlideImage.css({
          width:'',
          right:0,
          left:''
        });
  
        newSlideContent.css({
          width:'',
          left:''
        });
  
        newSlideElements.css({
          opacity:'',
          transform:''
        });
  
        activeSlideImage.css({
          left:''
        });
  
        
        slideshow.find('.pagination').trigger('check');
        slideshow.data('wait',false);
        // if(autoSlide){
        //   timeout=setTimeout(function(){
        
        //     slideshowNext(slideshow,false,true);


        // if (autoSlide){
          
          
        //       autoSlideMethod();
        
         
        // }
          
        //   },slideshowDuration);
        //   slideshow.data('timeout',timeout);
        // }


      });
    }
  }
  
  function slideshowNext(slideshow,previous){
    var slides=slideshow.find('.slide');
    var activeSlide=slides.filter('.is-active');
    var newSlide=null;
    
    if(previous){
      newSlide=activeSlide.prev('.slide');
      if(newSlide.length === 0) {
        newSlide=slides.last();
      }
    } else {
      newSlide=activeSlide.next('.slide');
      if(newSlide.length === 0)
        newSlide=slides.filter('.slide').first();
    }
  
    slideshowSwitch(slideshow,newSlide.index());
  }

 

  // function autoSlideMethod(){
   
  //   setTimeout(() => {
  //     slideshowNext($(this).closest('.slideshow'),$(this).hasClass('next'));
    
  //   }, slideshowDuration);
  // }

  
  function homeSlideshowParallax(){
    var scrollTop=$(window).scrollTop();
    if(scrollTop>windowHeight) {
  
    };
    var inner=slideshow.find('.slideshow-inner');
    var newHeight=windowHeight-(scrollTop/2);
    var newTop=scrollTop*0.8;
  
    inner.css({
      transform:'translateY('+newTop+'px)',height:newHeight
    });
  }
  
  $(document).ready(function() {
   $('.slide').addClass('is-loaded');
  
   $('.slideshow .arrows .arrow').on('click',function(){
    slideshowNext($(this).closest('.slideshow'),$(this).hasClass('prev'));
  });
  
   $('.slideshow .pagination .item').on('click',function(){
    slideshowSwitch($(this).closest('.slideshow'),$(this).index());
  });
  
   $('.slideshow .pagination').on('check',function(){
    var slideshow=$(this).closest('.slideshow');
    var pages=$(this).find('.item');
    var index=slideshow.find('.slides .is-active').index();
    pages.removeClass('is-active');
    pages.eq(index).addClass('is-active');
  });
  
  /* Lazyloading
  $('.slideshow').each(function(){
    var slideshow=$(this);
    var images=slideshow.find('.image').not('.is-loaded');
    images.on('loaded',function(){
      var image=$(this);
      var slide=image.closest('.slide');
      slide.addClass('is-loaded');
    });
  */
  
  var timeout=setTimeout(function(){
    slideshowNext(slideshow,false,true);
  },slideshowDuration);
  
  slideshow.data('timeout',timeout);
  });
  
  if($('.main-content .slideshow').length > 1) {
    $(window).on('scroll',homeSlideshowParallax);
  }


  //IF you want the autoSlide feature
  // window.onload = function(){
  
  //   autoSlideMethod()
  // }
  
  
  

    return (
        <main className="main-content">
        <section className="slideshow">
          <div className="slideshow-inner">
            <div className="slides">
              <div className="slide is-active ">
                <div className="slide-content">
                <div className="caption">
              <div className="title working">CLOTHES</div>
              <div className="text">
                <p className="workingtwo">Affordable and Elegant</p>
              </div> 
              <a href="#total-products" className="btn">
                <span className="btn-inner">SHOP NOW</span>
              </a>
            </div>
                </div>
                <div className="image-container"> 
                  <img src="https://www.alixbdanthenay.fr/wp-content/uploads/2015/07/Indispensable-1.jpg" alt="" className="image" />
                </div>
              </div>
              <div className="slide">
                <div className="slide-content">
                  <div className="caption">
                    <div className="title working">BAGS</div>
                    <div className="text">
                      <p className="workingtwo">Get Your Quality in Style</p>
                    </div> 
                    <a href="#total-products" className="btn">
                      <span className="btn-inner">SHOP NOW</span>
                    </a>
                  </div>
                </div>
                <div className="image-container">
                  <img src="https://www.alixbdanthenay.fr/wp-content/uploads/2015/07/Indispensable-4-1.jpg" alt="" className="image" />
                </div>
              </div>
              <div className="slide">
                <div className="slide-content">
                  <div className="caption">
                    <div className="title working">SHOES</div>
                    <div className="text">
                      <p className="workingtwo"> Wears in Various Styles </p>
                    </div> 
                    <a href="#total-products" className="btn">
                      <span className="btn-inner">SHOP NOW</span>
                    </a>
                  </div>
                </div>
                <div className="image-container">
                  <img src="https://www.alixbdanthenay.fr/wp-content/uploads/2016/11/11.jpg" alt="" className="image" />
                </div>
              </div>
              <div className="slide">
                <div className="slide-content">
                  <div className="caption">
                    <div className="title working">Belts</div>
                    <div className="text">
                      <p className="workingtwo">I hope This is Correct Sha</p>
                    </div> 
                    <a href="#total-products" className="btn">
                      <span className="btn-inner">SHOP NOW</span>
                    </a>
                  </div>
                </div>
                <div className="image-container"> 
                  <img src="https://www.alixbdanthenay.fr/wp-content/uploads/2016/11/20mars17-sans-typo.jpg" alt="" className="image" />
                </div>
              </div>
            </div>
            <div className="pagination">
              <div className="item is-active"> 
                <span className="icon">1</span>
              </div>
              <div className="item">
                <span className="icon">2</span>
              </div>
              <div className="item">
                <span className="icon">3</span>
              </div>
              <div className="item">
                <span className="icon">4</span>
              </div>
            </div>
            <div className="arrows">
              <div className="arrow prev">
                <span className="svg svg-arrow-left">
                  <svg version="1.1" id="svg4-Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="14px" height="26px" viewBox="0 0 14 26" enableBackground="new 0 0 14 26"> <path d="M13,26c-0.256,0-0.512-0.098-0.707-0.293l-12-12c-0.391-0.391-0.391-1.023,0-1.414l12-12c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414L2.414,13l11.293,11.293c0.391,0.391,0.391,1.023,0,1.414C13.512,25.902,13.256,26,13,26z"/> </svg>
                  <span className="alt sr-only"></span>
                </span>
              </div>
              <div className="arrow next">
                <span className="svg svg-arrow-right">
                  <svg version="1.1" id="svg5-Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="14px" height="26px" viewBox="0 0 14 26" enableBackground="new 0 0 14 26"> <path d="M1,0c0.256,0,0.512,0.098,0.707,0.293l12,12c0.391,0.391,0.391,1.023,0,1.414l-12,12c-0.391,0.391-1.023,0.391-1.414,0s-0.391-1.023,0-1.414L11.586,13L0.293,1.707c-0.391-0.391-0.391-1.023,0-1.414C0.488,0.098,0.744,0,1,0z"/> </svg>
                  <span className="alt sr-only"></span>
                </span>
              </div>
            </div>
          </div> 
        </section>
      </main>
    )

}
