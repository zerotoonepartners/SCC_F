import react, { useContext, setState } from 'react';
import React, { useEffect, useState } from 'react';
import ThreeBall from '../../../../static/images/threeball.png';
import { Route } from 'react-router-dom';
import FlowBanner from '../../../flowbanner/flowbanner';
import './secfour.scss';
import p1 from "../../../../static/images/p1.png"
import p2 from "../../../../static/images/p2.png"
import p3 from "../../../../static/images/p3.png"
import p4 from "../../../../static/images/p4.png"
import p5 from "../../../../static/images/p5.png"
import p6 from "../../../../static/images/p6.png"


function SecFour() {
  return (
    <>
      <div className="sec4">
        <div className="secTitleWrapper">
          <span>Our Process</span>
          <div className="secLine"></div>
        </div>
        <div className="secPartOneWrapper">
          <div className="secPartOneTitle">체계적인 교육 시스템</div>
          <div className="secPartOneSubTitle">이미 많은 기업들이 선택한 스타트업 인증센터의 체계적인 교육 시스템</div>
          <div className="processAllContainer">
            <div className="processContainer">

              <div className="processBox">
                <div className="imgBox">
                  <img src={p1} className="pimg"/>
                </div>
                <div className="processTextBox">
                  <div className="processTextTitle">
                    <span>STEP 1. 문의 및 신청</span>
                  </div>
                  <div className="processTextContent">
                    <span>전화 혹은 홈페이지 폼을 통해 진행 중인 교육을 신청합니다.</span>
                  </div>
                </div>
              </div>
              <div className="processBox">
                <div className="imgBox">
                  <div className="processline"></div>
                </div>
                <div className="processTextBox">
                </div>
              </div>
              <div className="processBox">
                <div className="imgBox">
                  <img src={p2} className="pimg"/>
                </div>
                <div className="processTextBox">
                  <div className="processTextTitle">
                    <span>STEP 2. 교육 진행</span>
                  </div>
                  <div className="processTextContent">
                    <span>교육비 입금이 확인되면 교육이 진행됩니다.</span>
                  </div>
                </div>
              </div>
              <div className="processBox">
                <div className="imgBox">
                  <div className="processline"></div>
                </div>
                <div className="processTextBox">
                  
                </div>
              </div>
              <div className="processBox">
                <div className="imgBox">
                  <img src={p3} className="pimg"/>
                </div>
                <div className="processTextBox">
                  <div className="processTextTitle">
                    <span>STEP 3. 수료증/자격증 취득</span>
                  </div>
                  <div className="processTextContent">
                    <span>교육 후 수료증 및 자격증을 수여합니다.</span>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
        <div className="secPartOneWrapper">
          <div className="secPartOneTitle">개별 기업에 최적화된 인증 시스템</div>
          <div className="secPartOneSubTitle">개별 기업 맞춤 인증 안내와 베테랑 심사역들의 신속한 인증 심사</div>
          <div className="processAllContainer">
            <div className="processContainer">

              <div className="processBox">
                <div className="imgBox">
                  <img src={p4} className="pimg"/>
                </div>
                <div className="processTextBox">
                  <div className="processTextTitle">
                    <span>STEP 1. 인증 신청</span>
                  </div>
                  <div className="processTextContent">
                    <span>개별 기업에 필요한 인증 안내를 도와드립니다. 인증별 필요한 견적 서류를 요청합니다.</span>
                  </div>
                </div>
              </div>
              <div className="processBox">
                <div className="imgBox">
                  <div className="processline"></div>
                </div>
                <div className="processTextBox">
                </div>
              </div>
              <div className="processBox">
                <div className="imgBox">
                  <img src={p5} className="pimg"/>
                </div>
                <div className="processTextBox">
                  <div className="processTextTitle">
                    <span>STEP 2. 인증 심사</span>
                  </div>
                  <div className="processTextContent">
                    <span>문서심사, 현장심사를 진행합니다.</span>
                  </div>
                </div>
              </div>
              <div className="processBox">
                <div className="imgBox">
                  <div className="processline"></div>
                </div>
                <div className="processTextBox">
                  
                </div>
              </div>
              <div className="processBox">
                <div className="imgBox">
                  <img src={p6} className="pimg"/>
                </div>
                <div className="processTextBox">
                  <div className="processTextTitle">
                    <span>STEP 3. 인증서 발행</span>
                  </div>
                  <div className="processTextContent">
                    <span>심사 후 인증서가 발행됩니다.</span>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
        <div className="secSlider">slider</div>
      </div>
    </>
  );
}

export default SecFour;
