import react, { useContext } from "react"
import EduFormSet from "../components/eduform/eduform";
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Kakao from "../components/kakao/kakao";
import { Route } from 'react-router-dom';
import './scss/eduform.scss';
import EduFormSectionOne from "../components/section/eduformsection/eduformsectionone/eduformsectionone";
import EduFormSectionTwo from "../components/section/eduformsection/eduoformsectiontwo/eduformsectiontwo";


function EduForm(){
    return (
        <>
        <div class="formWrapper">
        <Route component={Header} />
        <Route component={EduFormSectionOne}/>
        <Route component={EduFormSet} />
        <Route component={Kakao} />
        <Route component={EduFormSectionTwo}/>
        <Route component={Footer}/>
        </div> 
        </>

    )
}

export default EduForm;