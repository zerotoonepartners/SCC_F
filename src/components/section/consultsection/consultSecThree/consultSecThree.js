import './consultSecThree.scss'
import cooIcon1 from '../../../../static/images/cooIcon1.png';
import cooIcon2 from '../../../../static/images/cooIcon2.png';
import cooIcon3 from '../../../../static/images/cooIcon3.png';
import cooIcon4 from '../../../../static/images/cooIcon4.png';

function ConsultSecThree() {
    return (
      <>
        <div className="consultSecThreeWrapper">
          <div className="titleWrapper">
            <div className="mainTitle">
              <span><span className="strong">Virtual COO</span>가 <span className="strong">왜</span> 필요할까요?</span>
            </div>
            <div className="subTitle">
              <span>넓은 시각과 풍부한 경험으로 스타트업에게 알맞은 방향을 제시해드립니다.</span>
            </div>
          </div>

          <div className="contentsWrapper">
            <div className="iconAndNameWrapper">
              <div className="iconAndName">
                <img src={cooIcon1} className="cooIcon" />
                <div className="cooIconContent">
                  <span>
                    · 전문적인 경험 부족<br/>
                    · 문제해결 능력 부족<br/>
                    · 인건비 증가 부담<br/>
                    · 체계적인 프로세스 미비<br/>
                  </span>
                </div>
              </div>
              <div className="arrowIcon">
               <img src={cooIcon4} alt=""/>
              </div>
              <div className="iconAndName">
                <img src={cooIcon2} className="cooIcon" />
                <div className="cooIconContent">
                  <span>기업 성장 정체</span>
                </div>
              </div>
              <div className="arrowIcon">
                <img src={cooIcon4} alt=""/>
              </div>
              <div className="iconAndName">
                <img src={cooIcon3} className="cooIcon" />
                <div className="cooIconContent">
                  <span>새로운 시각 필요 !</span>
                </div>
              </div>


            </div>

          </div>
          


        </div>
      </>
    );
  }
  
  export default ConsultSecThree;