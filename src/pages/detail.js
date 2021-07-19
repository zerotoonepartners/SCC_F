import react, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { ISO9001,ISO13148,ISO14001,ISO22000,FSSC22000,ISO22716,ISO45001 } from '../components/detailComp/iso';
import {성과공유기업,여성기업,메인비즈,벤처기업,뿌리기술전문기업} from '../components/detailComp/business';
import {가족친화인증,병역특례업체,노사문화우수기업,청년친화강소기업,인재육성형중소기업,공동근로복지기금설립} from "../components/detailComp/welfare";
import {기업부설연구소, 기업부설창작연구소} from "../components/detailComp/lab";
import DetailSecOne from '../components/detailComp/detailsecone';
import styled, { css, keyframes } from 'styled-components';
import Remote from '../components/detailComp/remote';
import './scss/detail.scss';
function Detail() {
  const isoMenu = [
    'ISO9001',
    'ISO13148',
    'ISO14001',
    'ISO22000',
    'FSSC22000',
    'ISO22716',
    'ISO45001',
  ];
  const labMenu = [
    `기업부설연구소/기업전담부서`,
    '기업창작연구소/창작전담부서',
  ];
  const businMenu = [
    '성과공유기업',
    '여성기업',
    '메인비즈',
    '벤처기업',
    '뿌리기술전문기업',
  ];
  const welMenu = [
    '가족친화인증',
    '병역특례업체',
    '노사문화 우수기업',
    '청년친화 강소기업',
    '인재육성형 중소기업',
    '공동근로복지기금설립',
  ];
  const [detNum, setDetNum] = useState('00');
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
  }, [detNum]);

  return (
    <>
      <div>
        <Header />
        <Route component={DetailSecOne} detNum={detNum} />
        <div className="detailMenuWrapper">
          <div
            className="detailItem"
            onClick={() => {
              setDetNum('00');
            }}
          >
            <span>ISO</span>
          </div>
          <div
            className="detailItem"
            onClick={() => {
              setDetNum('01');
            }}
          >
            <span>연구소</span>
          </div>
          <div
            className="detailItem"
            onClick={() => {
              setDetNum('10');
            }}
          >
            <span>경영</span>
          </div>
          <div
            className="detailItem"
            onClick={() => {
              setDetNum('11');
            }}
          >
            <span>복지</span>
          </div>
        </div>
        {}
        {detNum === '00' ? (
          <>
            <div id="ISO9001"><ISO9001 /></div>
            <div id="ISO13148"><ISO13148 /></div>
            <div id="ISO14001"><ISO14001 /></div>
            <div id="ISO22000"><ISO22000 /></div>
            <div id="FSSC22000"><FSSC22000 /></div>
            <div id="ISO22716"><ISO22716 /></div>
            <div id="ISO45001"><ISO45001 /></div>
            <Remote remoteMenu={remoteMenu} />
          </>
        ) : null}
        {detNum === '01' ? (
          <>
            <기업부설연구소 /><기업부설창작연구소/>
            <Remote remoteMenu={remoteMenu} />
          </>
        ) : null}
        {detNum === '10' ? (
          <>
            <성과공유기업/><여성기업/><메인비즈/><벤처기업/><뿌리기술전문기업/>
            <Remote remoteMenu={remoteMenu} />
          </>
        ) : null}
        {detNum === '11' ? (
          <>
            <가족친화인증/><병역특례업체/><노사문화우수기업/><청년친화강소기업/><인재육성형중소기업/><공동근로복지기금설립/>
            <Remote remoteMenu={remoteMenu} />
          </>
        ) : null}
      </div>
      <Footer />
    </>
  );
}

export default Detail;
