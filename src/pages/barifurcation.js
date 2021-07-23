import react, { useContext } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { SccContext } from '../context/scc';
import './scss/barifurcation.scss';
import Kakao from '../components/kakao/kakao';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import p3 from '../../src/static/images/p3.png';
import p6 from '../../src/static/images/p6.png';

function Barifurcation() {
  return (
    <>
      <div className="bariWrapper">
        <Header />
        <div className="bariBody">
          <div className="btnWrapper">
            <div className="btnItemWrapper">
              <div className="topDesc">
                <span>
                  스타트업을 위한 <br /> 퀄리티 있는 교육
                </span>
              </div>
              <div className="imgBox">
                <img src={p3} alt="" />
              </div>
              <NavLink to="/eduform" className="navlink">
                <div className="twopill">교육 신청</div>
              </NavLink>
            </div>
            <div className="breakLine"></div>
            <div className="btnItemWrapper">
              <div className="topDesc">
                <span>
                  기업의 가치를 <br /> 높이는 방법
                </span>
              </div>
              <div className="imgBox">
                <img src={p6} alt="" />
              </div>
              <NavLink to="/form" className="navlink">
                <div className="twopill">인증 신청</div>
              </NavLink>
            </div>
          </div>
          <Kakao />
        </div>
      </div>
    </>
  );
}

export default Barifurcation;
