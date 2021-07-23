import react, { useContext } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { SccContext } from '../context/scc';
import './scss/barifurcation.scss';
import Kakao from '../components/kakao/kakao';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

function Barifurcation() {
  return (
    <>
      <div className="bariWrapper">
        <Header />
        <div className="bariBody">
          <NavLink to="/eduform" className="navlink">
            <div className="twopill">교육 신청</div>
          </NavLink>
          <NavLink to="/form" className="navlink">
            <div className="twopill">인증 신청</div>
          </NavLink>
          <Kakao />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Barifurcation;
