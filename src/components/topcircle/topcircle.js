import React from 'react';
import './topcircle.scss';
import arrowTop from '../../img/arrowTop.png';

function TopCircle() {
  return (
    <>
      <a href="#top">
        <div className="topButtonWrapper">
          <img class="topImg" src={arrowTop} alt="topImg" />
          <div></div>
        </div>
        맨 위로
      </a>
    </>
  );
}

export default TopCircle;
