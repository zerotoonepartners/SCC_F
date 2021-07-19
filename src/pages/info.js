import react, { useContext, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import InfoSecOne from '../components/section/infosection/secone/infoSecOne';
import InfoSecThree from '../components/section/infosection/secthree/infoSecThree';
import InfoSecTwo from '../components/section/infosection/sectwo/infoSecTwo';


function Info() {
  return (
    <div>
      <>
        <div className="infoWrapper">
          <Route component={Header} />
          <Route component={InfoSecOne} />
          <Route component={InfoSecTwo} />
          <Route component={InfoSecThree} />
          <Route component={Footer} />
        </div>
      </>

      
    </div>
  );
}

export default Info;
