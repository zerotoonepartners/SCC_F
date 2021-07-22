import react, { useContext } from "react"
import EduFormSet from "../components/eduform/eduform";
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Kakao from "../components/kakao/kakao";
import { Route } from 'react-router-dom';
import './scss/eduform.scss';
import FormSecOne from "../components/section/formsection/formsecone/formsecone";


function EduForm(){
    return (
        <>
        <div class="formWrapper">
        <Route component={Header} />
        <Route component={FormSecOne} />
        <Route component={EduFormSet} />
        <Route component={Kakao} />
        <Route component={Footer}/>
        </div> 
        </>

    )
}

export default EduForm;