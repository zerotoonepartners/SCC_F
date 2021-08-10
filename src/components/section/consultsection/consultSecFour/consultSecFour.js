import './consultSecFour.scss'
import consultImg from '../../../../static/images/consultImage.png';
import cooIcon4 from '../../../../static/images/cooIcon4.png';

// import FadeIn from 'react-fade-in/lib/FadeIn';
// import "animate.css/animate.min.css";

// import ScrollAnimation from 'react-animate-on-scroll';

// import styled, { keyframes } from 'styled-components';
// import { bounce, fadeInDown, fadeInUp } from 'react-animations';

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



function ConsultSecFour() {

  // const fadeAnimation = keyframes`${fadeInDown}`;
  // const FadeInUpDiv = styled.div`
  //   animation: 3s ${fadeAnimation};   
  // `;

  useEffect(() => {
    AOS.init({
      
    });
  }, []);

    return (
      <>
        <div className="consultSecFourWrapper">
          <div className="consultTitleWrapper">
            <div className="title1">
              <span>2. 정부지원사업 컨설팅</span>
            </div>
            <div className="title2">
              <span>Your personal trainer Your personal trainer</span>
            </div>
          </div>
          
          <div className="consultImgWrapper">
          <img src={consultImg} className="consultImg" />
          </div>


          <div className="consultContentsWrapper">
            <div className="whyNeed">
              <span>왜 필요할까요?</span>
            </div>

            
            <div className="circlesPurWrapper">
              <div className="circlesPur">
                <span>자금 부족</span>
              </div>
              <div className="circlesPur">
                <span>지원사업별<br/>노하우 부족</span>
              </div>
              <div className="circlesPur">
                <span>지원금 소진<br/>필요</span>
              </div>
            </div>
            <div className="circlesWhiteWrapper">
              <div className="circleswhite">
                  <span>맞춤형<br/>지원사업<br/>지식 부족</span>
              </div>
              <div className="circleswhite">
                  <span>완성도<br/>낮은<br/>사업계획서</span>
              </div>
            </div> 


            <div data-aos="fade-down" data-aos-offset="300" data-aos-duration="3000">
            <div className="resultWrapper">

              <div className="arrowIcon">
                 <img src={cooIcon4} alt=""/>

              </div>
        
              <div className="result">
                <span>기업별 맞춤형 정부지원사업 전담 매니저가 필요</span>
              </div>

            </div>  

            </div>       
          </div>


          


        </div>
      </>
    );
  }
  
  export default ConsultSecFour;