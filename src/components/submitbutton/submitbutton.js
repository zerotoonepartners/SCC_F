import React from 'react';
import './submitbutton.scss';
import phone from '../../static/images/phone.png';

function Submitbutton() {
  return (
    <a href="tel:02-6229-5100">
      <div className="submitButtonWrapper">
        <div className="imgWrapper">
          <img src={phone} alt="phone" />
        </div>
        <div className="textWrapper">
          <span>신청하기</span>
        </div>
      </div>
    </a>
  );
}

export default Submitbutton;
