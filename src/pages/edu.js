import react, { useContext, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Kakao from '../components/kakao/kakao';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import HideShow from '../components/hideshow/hideshow';
import { getData } from '../api/api.js';
import { SccContext, SccContextProvider } from '../context/scc';
import EduSecOne from '../components/section/edusection/eduSecOne';

function Edu() {
  const { setEvent, event } = useContext(SccContext);
  return (
    <div>
      <>
        <div className="eduWrapper">
          <Route component={Header} />
          <Route component={EduSecOne} event />
          <Route component={Footer} />
        </div>
      </>

      <Kakao />
    </div>
  );
}

export default Edu;
