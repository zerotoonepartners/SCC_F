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
              <div className="iconWrapper iso">
                <img src={ISO} alt="" />
              </div>
              <span>교육</span>
            </div>
            <div className="serviceBox pur">
              <div className="iconWrapper">
                <img src={EDU} alt="" />
              </div>
              <span>인증</span>
            </div>
            <div className="serviceBox">
              <div className="iconWrapper">
                <img src={MARK} alt="" />
              </div>
              <span>마케팅</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecThree;
