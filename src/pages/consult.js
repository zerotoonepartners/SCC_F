import { Route } from 'react-router-dom';
import Kakao from '../components/kakao/kakao';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import ConsultSection from "../components/section/consultsection/consultSection";
import ContactBtn from '../components/contact/contact';

function Consult() {
  return (
    <div>
      <>
        <div className="consultPageWrapper">
          <Route component={Header} />
          <Route component={ConsultSection} />
          <Route component={Footer} />
          <Route component={ContactBtn} />
        </div>
      </>

      <Kakao />
    </div>
  );
}

export default Consult;