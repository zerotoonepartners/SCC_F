import { Route } from 'react-router-dom';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Kakao from '../components/kakao/kakao';
import EduPoster from '../components/eduPoster/eduPoster';
import './scss/eduLanding.scss';
import ContactBtn from '../components/contact/contact';

function EduLanding() {
  return (
    <>
      <div className="eduLandingPageWrapper">
        <Route component={Header} />
        <Route component={EduPoster} />
        <Route component={Kakao} />
      </div>
      <Route component={Footer} />
      <Route component={ContactBtn} />
    </>
  );
}

export default EduLanding;
