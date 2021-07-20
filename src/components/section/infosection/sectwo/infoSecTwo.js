import react, { useContext } from 'react';
import { Route } from 'react-router-dom';
import './infoSecTwo.scss';

function InfoSecTwo() {
    return (
      <>
        <div className="infoSecTwoWrapper" >
          <div className="boxAndTitle">
            <div className="infoSecTwoBox"></div>
            <div className="aboutUsTitle"><span>Make it happen<br/>Shock everyone</span></div>
          </div>
            <div className="content">
              <span>스타트업인증센터는<br/>ISO인증, 연구소 설립, 경영인증 등의 인증을 도와드리고<br/>
              IR 작성 교육 등 스타트업에 필수적인 교육을 진행하는 전문 기업입니다.<br/><br/>
              전문적인 인력과 젊은 감각을 바탕으로<br/>
              그동안 수많은 스타트업과 길을 걸어왔습니다.<br/><br/>
              전문 지식을 가진 경영진이<br/>
              스타트업의 가치를 올려드립니다.</span>
            </div>
            <div className="line"></div>
        </div>
      </>
    );
  }
  
  export default InfoSecTwo;