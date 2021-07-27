import react, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Kakao from '../components/kakao/kakao';
import {
  ISO9001,
  ISO13485,
  ISO14001,
  ISO22000,
  FSSC22000,
  ISO22716,
  ISO45001,
} from '../components/detailComp/iso';
import {
  성과공유기업,
  여성기업,
  이노비즈,
  메인비즈,
  벤처기업,
  뿌리기술전문기업,
} from '../components/detailComp/business';
import {
  가족친화인증,
  병역특례업체,
  노사문화우수기업,
  청년친화강소기업,
  인재육성형중소기업,
  공동근로복지기금설립,
} from '../components/detailComp/welfare';
import {
  기업부설연구소,
  기업부설창작연구소,
} from '../components/detailComp/lab';
import DetailSecOne from '../components/detailComp/detailsecone';
import styled, { css, keyframes } from 'styled-components';
import Remote from '../components/detailComp/remote';
import './scss/detail.scss';
import TopCircle from '../components/topcircle/topcircle';
function Detail() {
  const isoMenu = [
    'ISO9001',
    'ISO13485',
    'ISO14001',
    'ISO22000',
    'FSSC22000',
    'ISO22716',
    'ISO45001',
  ];
  const labMenu = [
    '기업부설연구소/연구개발전담부서',
    '기업창작연구소/창작전담부서',
  ];
  const businMenu = [
    '성과공유기업',
    '여성기업',
    '이노비즈',
    '메인비즈',
    '벤처기업',
    '뿌리기술전문기업',
  ];
  const welMenu = [
    '가족친화인증',
    '병역특례업체',
    '노사문화우수기업',
    '청년친화강소기업',
    '인재육성형중소기업',
    '공동근로복지기금설립',
  ];
  const [detNum, setDetNum] = useState('00');
  const [temp, setTemp] = useState('ISO9001');
  const [remoteMenu, setRemoteMenu] = useState(isoMenu);
  useEffect(() => {
    if (detNum === '00') {
      setRemoteMenu(isoMenu);
    } else if (detNum === '01') {
      setRemoteMenu(labMenu);
    } else if (detNum === '10') {
      setRemoteMenu(businMenu);
    } else {
      setRemoteMenu(welMenu);
    }
    console.log(isoMenu[0]);
    console.log(typeof isoMenu[0]);
  }, [detNum]);

  return (
    <>
      <div>
        <Header />
        <Route component={DetailSecOne} detNum={detNum} />
        <div className="detailMenuWrapper">
          <div
            className="detailItem iso"
            onClick={() => {
              setDetNum('00');
            }}
          >
            <span>ISO</span>
          </div>
          <div
            className="detailItem lab"
            onClick={() => {
              setDetNum('01');
            }}
          >
            <span>연구소</span>
          </div>
          <div
            className="detailItem busin"
            onClick={() => {
              setDetNum('10');
            }}
          >
            <span>경영</span>
          </div>
          <div
            className="detailItem wel"
            onClick={() => {
              setDetNum('11');
            }}
          >
            <span>복지</span>
          </div>
        </div>
        <div className="hoverMenuWrapper">
          <div className="hoverMenuItem">
            <ul className="menuUlWrapper">
              <li>ISO9001</li>
              <li>ISO3489</li>
              <li>ISO1234</li>
              <li>ISO9582</li>
              <li>ISO1925</li>
            </ul>
          </div>
          <div className="hoverMenuItem">item2</div>
          <div className="hoverMenuItem">item3</div>
          <div className="hoverMenuItem">item4</div>
        </div>
        {detNum === '00' ? (
          <>
            <div id="ISO9001">
              <Route component={ISO9001} />
            </div>
            <div id="ISO13485">
              <ISO13485 />
            </div>
            <div id="ISO14001">
              <ISO14001 />
            </div>
            <div id="ISO22000">
              <ISO22000 />
            </div>
            <div id="FSSC22000">
              <FSSC22000 />
            </div>
            <div id="ISO22716">
              <ISO22716 />
            </div>
            <div id="ISO45001">
              <ISO45001 />
            </div>
            <Remote remoteMenu={remoteMenu} />
          </>
        ) : null}
        {detNum === '01' ? (
          <>
            <div id="기업부설연구소/연구개발전담부서">
              <기업부설연구소 />
            </div>
            <div id="기업창작연구소/창작전담부서">
              <기업부설창작연구소 />
            </div>
            <Remote remoteMenu={remoteMenu} />
          </>
        ) : null}
        {detNum === '10' ? (
          <>
            <div id="성과공유기업">
              <성과공유기업 />
            </div>
            <div id="여성기업">
              <여성기업 />
            </div>
            <div id="이노비즈">
              <이노비즈 />
            </div>
            <div id="메인비즈">
              <메인비즈 />
            </div>
            <div id="벤처기업">
              <벤처기업 />
            </div>
            <div id="뿌리기술전문기업">
              <뿌리기술전문기업 />
            </div>
            <Remote remoteMenu={remoteMenu} />
          </>
        ) : null}
        {detNum === '11' ? (
          <>
            <div id="가족친화인증">
              <가족친화인증 />
            </div>
            <div id="병역특례업체">
              <병역특례업체 />
            </div>
            <div id="노사문화우수기업">
              <노사문화우수기업 />
            </div>
            <div id="청년친화강소기업">
              <청년친화강소기업 />
            </div>
            <div id="인재육성형중소기업">
              <인재육성형중소기업 />
            </div>
            <div id="공동근로복지기금설립">
              <공동근로복지기금설립 />
            </div>
            <Remote remoteMenu={remoteMenu} />
          </>
        ) : null}
      </div>
      <Kakao />
      <TopCircle />
      <Footer />
    </>
  );
}

export default Detail;
