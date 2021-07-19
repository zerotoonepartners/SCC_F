import react, { useContext } from 'react';
import { Route } from 'react-router-dom';
import './infoSecOne.scss'

function InfoSecOne() {
  return (
    <>
      <div className="infoSecOneWrapper" >
          <div className="infoLanding">
            <div className="infoLine">
                <span className="infoTitle">
                  Who we are<br/></span>
                <span className="infoSubTitle">스타트업인증센터</span>
            </div>
          </div>
        </div>
    </>
  );
}

export default InfoSecOne;
