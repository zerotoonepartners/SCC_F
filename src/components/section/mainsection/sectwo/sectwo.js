import react, { useContext } from 'react';
import { Route } from 'react-router-dom';
import './sectwo.scss';
import twoImg from '../../../../static/images/secTwoImg.png';

function SecTwo() {
  return (
    <>
      <div className="sec2">
        <div className="aboutTitleWrapper">
          <div className="aboutTitle">
            <span>About Us</span>
          </div>
          <div className="smallLine"></div>
        </div>
        <div className="aboutContentsWrapper">
          <div className="contentImgWrapper">
            <img src={twoImg} alt="twoImg" />
          </div>
          <div className="contentsWrapper">
            <span className="slogan">
              당신의 가능성, <span className="strong">스인터</span>가
              함께합니다.
            </span>
            <span className="sloganContent">
              정부지원사업 신청, 정책자금 확보, 투자 유치, <br />
              대기업 공공기관과의 거래, 해외 업무, 기업이미지 향상
              <br /> 위와 같은 혜택을 누리고 싶으신가요? <br /> 이미 많은
              초기기업들이 스인터와 함께 해냈습니다. <br />
              <br /> 스인터를 왜 찾을까요? <br />
              스인터는 검증된 노하우를 가진 다수의 전문가를 보유하고 있습니다.
              <br />
              스인터는 저렴한 비용으로 신속하게 초기기업을 도와드립니다. <br />
              철저한 A/S도 보장해드립니다. <br /> 이것이 스인터가 필요한
              이유입니다.
              <br />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecTwo;
