import react from "react"
import {useHistory} from "react-router-dom"
import nf from "../img/Notfound_img.png"
import './scss/notfound.scss'

function Notfound(){
    let history = useHistory();
    return (
        <div className="notfound">
            <div className="notfound2">
                <p>잘못 된 요청입니다. (Not Found 404!)</p>
                <div className="nfimgBox">
                    <img src={nf} width="200px" height="200px" />
                </div>
                <button onClick={()=>{
                history.replace('/');
                }}>메인페이지로 돌아가기</button>
            </div>
        </div>
    )
}

export default Notfound;