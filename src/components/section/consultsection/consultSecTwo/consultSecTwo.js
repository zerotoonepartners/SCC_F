import './consultSecTwo.scss'
import cooImg from '../../../../static/images/cooImg.png';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ConsultSecTwo() {

  useEffect(() => {
    AOS.init({
      once: true
    });
  }, []);

    return (
      <>
        <div className="consultSecTwoWrapper">
          <div className="consultTitleWrapper">
            <div className="title1">
              <span>1. Virtual COO</span>
            </div>
            <div className="title2">
              <span>Be your personal trainer</span>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-offset="350" data-aos-duration="3000" data-aos-delay="200" >
          <div className="consultContentsWrapper">
            <div className="cooImgWrapper">
              <img src={cooImg} className="cooImg" alt="cooImg"/>
              <span>Virtual COO</span>
            </div>
            <div className="cooContentsWrapper">

              <div className="cooContent">
                <div className="cooSentenceEmpty">
                    <span> </span>
                </div>
                <div className="cooSentence">
                  <span>· 스타트업의 COO 역할을 숙련된 전문가가 수행</span>
                </div>
                <div className="cooSentence">
                  <span>· 전략기획, 재무, 영업, 인사 등 중요 의사결정 지원</span>
                </div>
                <div className="cooSentence">
                  <span>· 원격+정기방문 방식의 상시 관리 체계</span>
                </div>
                <div className="cooSentenceSmall">
                  <span>* COO: Chief Operating Officer</span>
                </div>
              </div>
              </div>

            </div>
          </div>

        </div>
      </>
    );
  }
  
  export default ConsultSecTwo;