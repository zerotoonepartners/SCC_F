import { Route } from 'react-router-dom';
import Kakao from '../components/kakao/kakao';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

import ContactBtn from '../components/contact/contact';
import ConsultSecOne from '../components/section/consultsection/consultSecOne/consultSecOne';
import ConsultSecTwo from '../components/section/consultsection/consultSecTwo/consultSecTwo';
import ConsultSecThree from '../components/section/consultsection/consultSecThree/consultSecThree';
import ConsultSecFour from '../components/section/consultsection/consultSecFour/consultSecFour';
import ConsultSecFive from '../components/section/consultsection/consultSecFive/consultSecFive';

function Consult() {
  return (
    <div>
      <>
        <div className="consultPageWrapper">
          <Route component={Header} />
          <Route component={ConsultSecOne} />
          <Route component={ConsultSecTwo} />
          <Route component={ConsultSecThree} />
          <Route component={ConsultSecFour} />
          <Route component={ConsultSecFive} />
          <Route component={Footer} />
          <Route component={ContactBtn} />
        </div>
      </>

      <Kakao />
    </div>
  );
}

export default Consult;