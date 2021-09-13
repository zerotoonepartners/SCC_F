import react, { useContext } from 'react';
import { Route } from 'react-router-dom';
import './infoSecFour.scss';

import newsArrow from '../../../../static/images/newsArrow.png';

function InfoSecFour() {
    return (
      <>
        <div className="infoSecFourWrapper" >
          <div className="newsWrapper">
            <div className="newsTitle">
              <span>NewsLetter</span>
            </div>
            <div className="newsContents">
              <span>정책자금과 데모데이 행사가 궁금하시다면?<br/>
              뉴스레터를 구독해보세요</span>
              <div className="iconWrapper">
                <img src={newsArrow} alt="newsArrow" onClick={() => window.open('https://page.stibee.com/subscriptions/82706', '_blank')}/>
              </div>
            </div>

          </div>
        </div>
      </>
    );
  }
  
  export default InfoSecFour;