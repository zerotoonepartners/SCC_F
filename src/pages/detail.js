import react, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { ISO9001 } from '../components/detailComp/iso';
import DetailSecOne from '../components/detailComp/detailsecone';
import styled, { css, keyframes } from 'styled-components';
import './scss/detail.scss';
function Detail() {
  const [detNum, setDetNum] = useState('00');
  useEffect(() => {}, []);

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
            <ISO9001 />
            <Remote detNum>asd</Remote>
          </>
        ) : null}
        {detNum === '01' ? <ISO9001 /> : null}
        {detNum === '10' ? <ISO9001 /> : null}
        {detNum === '11' ? <ISO9001 /> : null}
        {/* <ISO9001 />
      <ISO9001 />
      <ISO9001 />
      <ISO9001 />
      <ISO9001 /> */}
      </div>
      <Footer />
    </>
  );
}

export default Detail;

const Remote = styled.div`
  ${(props) =>
    props.detNum === '00' &&
    css`
      @media only screen and (max-width: 1024px) {
        width: 3rem;
        height: 3rem;
        background-color: red;
      }
      @media only screen and (max-width: 768px) {
      }
      @media only screen and (max-width: 320px) {
        width: 3rem;
        height: 3rem;
        background-color: red;
      }
    `}
  ${(props) =>
    props.detNum === '01' &&
    css`
      @media only screen and (max-width: 1024px) {
      }
      @media only screen and (max-width: 768px) {
      }
      @media only screen and (max-width: 320px) {
      }
    `}
`;
