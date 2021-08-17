import react, { useContext } from 'react';
import { Route } from 'react-router-dom';
import './formsectwo.scss';

function FormSecTwo() {
  return (
    <>
      <div className="formsectwoWrapper">
          <div className="listWrapper">
              <div className="list">
                  <div className="listTitle">
                      <span>ISO</span>
                  </div>
                  <div className="listSub">
                      <span>ISO 9001</span>
                      <span>ISO 14001</span>
                      <span>ISO 45001</span>
                      <span>ISO 22716</span>
                      <span>ISO 22000</span>
                      <span>FSSC 22000</span>
                      <span>ISO 13485</span>
                  </div>
              </div>
              <div className="list">
                  <div className="listTitle">
                      <span>연구소</span>
                  </div>
                  <div className="listSub">
                      <span>기업부설연구소</span>
                      <span>연구개발전담부서</span>
                      <span>기업창작연구소</span>
                      <span>창작전담부서</span>
                  </div>
              </div>
              <div className="list">
                  <div className="listTitle">
                      <span>경영</span>
                  </div>
                  <div className="listSub">
                      <span>성과공유기업</span>
                      <span>여성기업</span>
                      <span>이노비즈</span>
                      <span>메인비즈</span>
                      <span>벤처기업</span>
                      <span>뿌리기술전문기업</span>
                  </div>
              </div>
              <div className="list">
                  <div className="listTitle">
                      <span>복지</span>
                  </div>
                  <div className="listSub">
                      <span>가족친화인증</span>
                      <span>병역특례업체</span>
                      <span>노사문화우수기업</span>
                      <span>청년친화강소기업</span>
                      <span>인재육성형중소기업</span>
                      <span>공동근로복지기금설립</span>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}

export default FormSecTwo;