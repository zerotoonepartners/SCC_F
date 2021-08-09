import './consultSecSix.scss'
import cooIcon5 from '../../../../static/images/cooIcon5.png';


function ConsultSecSix() {
    return (
      <>
        <div className="consultSecSixWrapper">
          <div className="applyBox">
            <div className="applyTitleWrapper">
              <div className="title">
                <span>상담 신청</span>
              </div>
              <div className="subTitle">
                <span>컨설팅 상담을 위해 아래 서류가 필요합니다.<br/>
                상담을 원하시면 기업검토 문의를 눌러주세요.</span>
              </div>
            </div>

            <div className="applyContentsWrapper">
              <div className="iconWrapper">
               <img src={cooIcon5} className="cooIcon" />
              </div>
              <div className="sentenceWrapper">
                <div className="sentence">
                  <span>1. 명함 사진</span>
                  <span>2. 사업자등록증</span>
                  <span>3. 회사소개서/IR자료</span>
                  <span>4. 4대보험 가입자 명부</span>
                </div>
              </div>
            </div>
            
            <div className="buttonWrapper">
              <div className="applyButton" onClick={() => window.open('http://pf.kakao.com/_Ejxcxns/chat', '_blank', 'width=340,height=520')}>
              <span>기업검토 문의</span>
              </div>

            </div>

          </div>

        </div>
      </>
    );
  }
  
  export default ConsultSecSix;