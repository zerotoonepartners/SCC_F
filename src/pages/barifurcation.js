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
                  <li>설명</li>
                  <li>설명</li>
                  <li>설명</li>
                </ul>
              </div>
              <div className="bariCardMookup">
                <span>더 알아보기</span>
              </div>
              <div className="bariCardBtn">
                <span>신청하기</span>
              </div>
            </div>
            <div className="bariCard">
              <div className="bariCardTitle">
                <span>기업의 가치를 높이고 싶다면</span>
              </div>
              <div className="bariCardContent">
                <ul>
                  <li>설명</li>
                  <li>설명</li>
                  <li>설명</li>
                </ul>
              </div>
              <div className="bariCardMookup">
                <span>더 알아보기</span>
              </div>
              <div className="bariCardBtn">
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
