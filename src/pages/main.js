import react, { useContext } from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import TopCircle from '../components/topcircle/topcircle';
import ApplyPillButton from '../components/applypillbutton/applypillbutton';
import Kakao from '../components/kakao/kakao';
import SecOne from '../components/section/mainsection/secone/secone';
import SecTwo from '../components/section/mainsection/sectwo/sectwo';
import SecThree from '../components/section/mainsection/secthree/secthree';
import SecFour from '../components/section/mainsection/secfour/secfour';
import './scss/main.scss';
import ContactBtn from '../components/contact/contact';
import NewFooter from '../components/newFooter/newFooter';
import SecBanner from '../components/section/mainsection/secbanner/secbanner';
function Main() {
  return (
    <div class="mainWrapper">
      <div className="layer"></div>
      <Route component={Header} />
      <Route component={SecOne} />
      <Route component={SecTwo} />
      <Route component={SecBanner} />
      
      <Route component={SecThree} />
      <Route component={SecFour} />
      <Route component={Kakao} />
      <Route component={Footer} />
      <Route component={ContactBtn} />
    </div>
  );
}

export default Main;
