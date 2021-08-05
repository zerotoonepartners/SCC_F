import './consultSecTwo.scss'
import cooImg from '../../../../static/images/cooImg.png';

function ConsultSecTwo() {
    return (
      <>
        <div className="consultSecTwoWrapper">
          <div className="consultTitleWrapper">
            <div className="title1">
              <span>1. Virtual COO</span>
            </div>
            <div className="title2">
              <span>Your personal trainer Your personal trainer</span>
            </div>
          </div>

          <div className="consultContentsWrapper">
            <div className="cooImgWrapper">
              <img src={cooImg} className="cooImg" />
              <span>Virtual COO</span>
            </div>
            <div className="cooContentsWrapper">

              <div className="cooContent">
                <div className="cooSentenceEmpty">
                    <span> </span>
                </div>
                <div className="cooSentence">
                  <span>· 스타트업의 COO 역할을 숙련된 전문가가 수행</span>
                </div>
                <div className="cooSentence">
                  <span>· 전략기획, 재무, 영업, 인사 등 중요 의사결정 지원</span>
                </div>
                <div className="cooSentence">
                  <span>· 원격+정기방문 방식의 상시 관리 체계</span>
                </div>
                <div className="cooSentenceSmall">
                  <span>* COO: Chief Operating Officer</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </>
    );
  }
  
  export default ConsultSecTwo;