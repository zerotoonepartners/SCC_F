import react, { useContext } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { SccContext } from '../context/scc';
import './scss/barifurcation.scss';
import Kakao from '../components/kakao/kakao';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import p3 from '../../src/static/images/p3.png';
import p6 from '../../src/static/images/p6.png';
import ContactBtn from '../components/contact/contact';
import NewFooter from '../components/newFooter/newFooter';

function Barifurcation() {
  let history = useHistory();
  return (
    <>
      <Header />
      <div className="bariWrapper">
        <div className="detailSecOneWrapper">
          <div className="detailLanding"></div>
        </div>
        <div className="bariContentWrapper">
          <div className="bariContentTitleWrapper">
            <div className="bariContentTitleBox">교육/인증 신청</div>
            <div className="bariContentDot">
              <span className="dot dot1"></span>
              <span className="dot dot2"></span>
            </div>
          </div>
          <div className="bariContentCardWrapper">
            <div className="bariCard">
              <div className="bariCardTitle">
                <span>스타트업에 필요한 맞춤 교육</span>
              </div>
              <div className="bariCardContent">
                <ul>
                  <li>스타트업 필수 인증 교육</li>
                  <li>정부지원사업 교육</li>
                  <li>ISO 심사원 양성과정</li>
                  <span>※ 위 항목은 상시 교육이 아니며, 시기 별로 다양한 교육이 진행됩니다.</span>
                </ul>
              </div>
              <div className="bariCardMookup" onClick={()=>{history.push('/edu')}}>
                <span>더 알아보기</span>
              </div>
              <div className="bariCardBtn" onClick={()=>{history.push('/eduform')}}>
                <span>신청하기</span>
              </div>
            </div>
            <div className="bariCard">
              <div className="bariCardTitle">
                <span>기업의 가치를 높이고 싶다면</span>
              </div>
              <div className="bariCardContent">
                <ul>
                  <li>ISO 인증</li>
                  <li>연구소 설립 신고</li>
                  <li>경영 인증</li>
                  <li>복지 인증</li>
                </ul>
              </div>
              <div className="bariCardMookup"  onClick={()=>{history.push('/detail')}}>
                <span>더 알아보기</span>
              </div>
              <div className="bariCardBtn" onClick={()=>{history.push('/form')}}>
                <span>신청하기</span>
              </div>
            </div>
          </div>
        </div>
        <Kakao />
      </div>
      <Footer />
      <ContactBtn />
    </>
  );
}

export default Barifurcation;
