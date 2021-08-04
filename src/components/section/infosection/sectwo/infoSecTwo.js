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
              <span>스타트업인증센터는<br/>초기 법인 설립부터 스타트업의 커리어를 쌓는 파트너 역할을 합니다.<br/><br/>
              정보가 없어 어렵게 느꼈던 각종 인증 및 지원사업 정보를 제공해드립니다.<br/><br/>
              ISO 인증, 기업부설연구소, 성과공유기업 등 지원사업 도전 시 가점항목이며,<br/>
              추후 투자유치를 위한 준비사항입니다.<br/><br/>
              전문적인 인력과 젊은 감각을 바탕으로 빠른 인증 뿐만 아니라<br/>
              스타트업 대표님들께 힘이 되어드리겠습니다.<br/><br/>
              스타트업인증센터가 함께 기업가치를 높여드립니다.</span>
            </div>
            <div className="line"></div>
        </div>
      </>
    );
  }
  
  export default InfoSecTwo;