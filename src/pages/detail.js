import react, { useEffect, useState, useContext } from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Kakao from '../components/kakao/kakao';
import { SccContext } from '../context/scc';
import styled, { css, keyframes } from 'styled-components';
import './scss/detail.scss';
import TopCircle from '../components/topcircle/topcircle';
import ContactBtn from '../components/contact/contact';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import LeftMenu from '../components/leftmenu/leftmenu';
import RightContent from '../components/rightcontent/rightcontent';

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
    '기업부설연구소/연구개발전담부서',
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
  const [itemToggle, setItemToggle] = useState(0);
  const { contentToggle, setContentToggle } = useContext(SccContext);
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

  useEffect(() => {
    setContentToggle(`${itemToggle}0`);
  }, [itemToggle]);
  return (
    <>
      <Header />
      <div className="detailTopWrapper">
        <div className="detailTopImg"></div>
      </div>
      <div className="detailMenuBarWrapper">
        <MenuItem
          itemToggle={itemToggle === 0 ? true : false}
          onClick={() => {
            setItemToggle(0);
          }}
        >
          <TextItem itemToggle={itemToggle === 0 ? true : false}>ISO</TextItem>
        </MenuItem>
        <MenuItem
          itemToggle={itemToggle === 1 ? true : false}
          onClick={() => {
            setItemToggle(1);
          }}
        >
          <TextItem itemToggle={itemToggle === 1 ? true : false}>
            연구소
          </TextItem>
        </MenuItem>
        <MenuItem
          itemToggle={itemToggle === 2 ? true : false}
          onClick={() => {
            setItemToggle(2);
          }}
        >
          <TextItem itemToggle={itemToggle === 2 ? true : false}>경영</TextItem>
        </MenuItem>
        <MenuItem
          itemToggle={itemToggle === 3 ? true : false}
          onClick={() => {
            setItemToggle(3);
          }}
        >
          <TextItem itemToggle={itemToggle === 3 ? true : false}>복지</TextItem>
        </MenuItem>
      </div>
      <div className="topCateTitleWrapper">
        <span>
          {itemToggle === 0
            ? 'ISO 인증'
            : itemToggle === 1
            ? '연구소'
            : itemToggle === 2
            ? '경영'
            : itemToggle === 3
            ? '복지'
            : null}
        </span>
      </div>
      <div className="detailContentsWrapper">
        <LeftMenu
          itemToggleNum={itemToggle}
          menuItem={
            itemToggle === 0
              ? isoMenu
              : itemToggle === 1
              ? labMenu
              : itemToggle === 2
              ? businMenu
              : itemToggle === 3
              ? welMenu
              : null
          }
        />
        <RightContent
          contentItem={
            itemToggle === 0
              ? isoMenu
              : itemToggle === 1
              ? labMenu
              : itemToggle === 2
              ? businMenu
              : itemToggle === 3
              ? welMenu
              : null
          }
        />
      </div>
      <Kakao />
      <Footer />
      <Route component={ContactBtn} />
    </>
  );
}

const MenuItem = styled.div`
  cursor: pointer;
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media all and (min-width: 320px) {
  }
  @media all and (min-width: 768px) {
  }
  @media all and (min-width: 1024px) {
  }
  ${(props) =>
    props.itemToggle &&
    css`
      background-color: #ffffff;
    `}
`;

const TextItem = styled.span`
  @media all and (min-width: 320px) {
  }
  @media all and (min-width: 768px) {
  }
  @media all and (min-width: 1024px) {
    font-weight: 800;
  }
  color: #ffffff;
  ${(props) =>
    props.itemToggle &&
    css`
      color: #000;
    `}
`;

export default Detail;
