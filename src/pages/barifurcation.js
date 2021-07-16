import react, { useContext } from "react"
import {useHistory,NavLink} from "react-router-dom"
import {SccContext} from "../context/scc"
import "./scss/barifurcation.scss"
import Kakao from "../components/kakao/kakao"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"

function Barifurcation(){
    return (
        <>
        <div className="bariWrapper">
            <Header/> 
            <div className="bariBody">
            <div className="twopill"><NavLink to="/eduform" className="navlink">교육 신청</NavLink></div>
            <div className="twopill"><NavLink to="/form" className="navlink">인증 신청</NavLink></div>
            <Kakao/>
            </div>
            <Footer/>
               
        </div>
        </>

    )
}

export default Barifurcation;