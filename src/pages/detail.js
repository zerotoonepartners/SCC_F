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
import ContactBtn from '../components/contact/contact';
import Carousel from '../components/detailslider/detailslider';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
function Detail() {
  const isoMenu = [
    'ISO 9001',
    'ISO 14001',
    'ISO 45001',
    'ISO 22716',
    'ISO 22000',
    'FSSC 22000',
    'ISO 13485',
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
      <Header />

      <Carousel />
      <Kakao />
      <TopCircle />
      <Footer />
      <Route component={ContactBtn} />
    </>
  );
}

export default Detail;
