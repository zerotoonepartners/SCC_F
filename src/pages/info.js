import react, { useContext, useEffect } from 'react';
import { Route } from 'react-router-dom';
import ContactBtn from '../components/contact/contact';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Kakao from '../components/kakao/kakao';
import InfoSecOne from '../components/section/infosection/secone/infoSecOne';
import InfoSecThree from '../components/section/infosection/secthree/infoSecThree';
import InfoSecTwo from '../components/section/infosection/sectwo/infoSecTwo';
import './scss/info.scss';

function Info() {
  return (
    <div>
      <div className="infoPageWrapper">
        <Route component={Header} />
        <Route component={InfoSecOne} />
        <Route component={InfoSecTwo} />
        <Route component={InfoSecThree} />
        <Route component={Footer} />
        <Route component={ContactBtn} />
        <Route component={Kakao}/>
      </div>
    </div>
  );
}

export default Info;
