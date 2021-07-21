import react, { useContext } from 'react';
import { Route } from 'react-router-dom';
import { useHistory } from 'react-router';
import './secone.scss';

function SecOne() {
  let history = useHistory();
  return (
    <>
      <div className="sec1" id="top">
        <div className="landingImgWrapper">
          <span>
            Specialized Certification Center for Startups <br />
            <span className="strongMain">스타트업인증센터</span>
          </span>
          <div className="applyBtnWrapper">
            <span
              className="apllyBtn"
              onClick={() => {
                history.push('/barifurcation');
              }}
            >
              교육/인증 신청하기
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecOne;
