import react, { useContext, setState } from 'react';
import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import ISO from '../../../../static/images/isoLogo.png';
import EDU from '../../../../static/images/eduLogo.png';
import MARK from '../../../../static/images/marketLogo.png';

import './secthree.scss';

function SecThree() {
  return (
    <>
      <div className="sec3">
        <div className="serviceWrapper">
          <div className="titleWrapper">
            <span class="serviceTitle">Our Service</span>
            <div className="smallLine"></div>
          </div>
          <div className="serviceBoxWrapper">
            <div className="serviceBox">
              <div className="boxDescWrapper">
                <div className="boxDescTitle">
                  <span>교육</span>
                </div>
                <div className="boxLine"></div>
                <div className="boxDescContent">
                  <span>스타트업에<br/>실질적인 도움이 되는<br/>전문적인 교육을 통해<br/>성장해보세요.</span>
                </div>
              </div>
              <div className="iconWrapper">
                <img src={ISO} alt="ISO" />
              </div>
              <span className="boxTitle">교육</span>
            </div>
            <div className="serviceBox pur">
              <div className="boxDescWrapper">
                <div className="boxDescTitle">
                  <span>인증</span>
                </div>
                <div className="boxLine"></div>
                <div className="boxDescContent">
                  <span>분야에 맞는<br/>인증심사를 통해<br/>기업의 가치를<br/>높여보세요.</span>
                </div>
              </div>
              <div className="iconWrapper">
                <img src={EDU} alt="EDU" />
              </div>
              <span className="boxTitle">인증</span>
            </div>
            <div className="serviceBox">
              <div className="boxDescWrapper">
                <div className="boxDescTitle">
                  <span>컨설팅</span>
                </div>
                <div className="boxLine"></div>
                <div className="boxDescContent">
                  <span>기업의<br/>특성과 분야를 고려한<br/>맞춤형 인증과 교육을<br/>설계해드립니다.</span>
                </div>
              </div>
              <div className="iconWrapper">
                <img src={MARK} alt="MARK" />
              </div>
              <span className="boxTitle">컨설팅</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecThree;
