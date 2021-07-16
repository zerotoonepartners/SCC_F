import react, { useContext } from 'react';
import FormSet from '../components/form/form';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Kakao from '../components/kakao/kakao';
import FormSecOne from '../components/section/formsection/formsecone/formsecone';
import { Route } from 'react-router-dom';
import './scss/form.scss';
import HideShow from '../components/hideshow/hideshow';

function Form() {
  return (
    <>
      <div class="formWrapper">
        <Route component={Header} />
        <Route component={FormSecOne} />
        <Route component={FormSet} />
        <Route component={Kakao} />
        <Route component={Footer} />
      </div>
    </>
  );
}

export default Form;
