import react, { useContext, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Kakao from '../components/kakao/kakao';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { SccContext, SccContextProvider } from '../context/scc';
import EduSecOne from '../components/section/edusection/eduSecOne';
import ContactBtn from '../components/contact/contact';

function Edu() {
  const { setEvent, event } = useContext(SccContext);
  return (
    <div>
      <>
        <div className="eduWrapper">
          <Route component={Header} />
          <Route component={EduSecOne} event />
          <Route component={Footer} />
          <Route component={ContactBtn} />
        </div>
      </>

      <Kakao />
    </div>
  );
}

export default Edu;
