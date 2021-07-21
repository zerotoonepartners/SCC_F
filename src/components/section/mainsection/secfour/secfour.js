import react, { useContext, setState } from 'react';
import React, { useEffect, useState } from 'react';
import ThreeBall from '../../../../static/images/threeball.png';
import { Route } from 'react-router-dom';
import FlowBanner from '../../../flowbanner/flowbanner';
import './secfour.scss';

function SecFour() {
  return (
    <>
      <div className="sec4">
        <div className="secTitleWrapper">
          <span>Our Process</span>
          <div className="secLine"></div>
        </div>
        <div className="secPartOneWrapper">partOne</div>
        <div className="secPartTwoWrapper">partTwo</div>
        <div className="secSlider">slider</div>
      </div>
    </>
  );
}

export default SecFour;
