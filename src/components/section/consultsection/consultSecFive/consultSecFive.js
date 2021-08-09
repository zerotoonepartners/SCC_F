import './consultSecFive.scss'
import cooIcon1 from '../../../../static/images/cooIcon1.png';
import cooIcon2 from '../../../../static/images/cooIcon2.png';
import cooIcon3 from '../../../../static/images/cooIcon3.png';
import cooIcon4 from '../../../../static/images/cooIcon4.png';

function ConsultSecFive() {
    return (
      <>
        <div className="consultSecFiveWrapper">
          <div className="consultContentsWrapper">
            <div className="jungbu">
              <span className="strong">정부지원사업 컨설팅</span>
              <span>기업별 맞춤형 1:1 전담 매니저를 배정해드립니다.</span>
            </div>
            <div className="checkSentence">
              <div className="ACheckSen">
                <span className="check">✓</span><span>기업의 규모, 업종, 여건 등을 종합적으로 고려하여 지원사업을 추천합니다.</span>
              </div>
              <div className="ACheckSen">
                <span className="check">✓</span><span>지원사업별 사업계획서 자문을 진행합니다.</span>
              </div>
              <div className="ACheckSen">
                <span className="check">✓</span><span>서류통과 후 2차 대면평가를 위한 PT 리허설을 실시합니다.</span>
              </div>
              <div className="ACheckSen">
                <span className="check">✓</span><span>사업과제 선정 후 사업비의 올바른 진행 및 관리를 돕습니다.</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default ConsultSecFive;