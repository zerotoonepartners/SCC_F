import react, { useContext } from 'react';
import { Route } from 'react-router-dom';
import './secbanner.scss';
import React from "react";
import TextTransition, { presets } from "react-text-transition";


const TEXTS = [
  "견적이",
  "인증이",
  "교육이"
];



function SecBanner() {

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);


  return (
    <>
      <div className="secBannerWrapper">
        <div className="bannerWrraper">
          <div className="smallBanner">
            <span>기업 검토를 기다리는 시간이 아까우신가요?</span>
          </div>
          <div className="bigBanner">
            <div className="bigBannerOne">
              <span>스타트업 인증센터는</span>
            </div>
            <div className="bigBannerTwo">
              <span><TextTransition text={TEXTS[index % TEXTS.length]} springConfig={presets.wobbly}/></span>
            </div>
            <div className="bigBannerOne">
              <span>빠릅니다.</span>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default SecBanner;
