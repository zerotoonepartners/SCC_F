import react, { useEffect, useState, useContext } from 'react';
import { Route } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import { SccContext } from '../../context/scc';
import './rightcontent.scss';
import {
  ISO9001,
  ISO13485,
  ISO14001,
  ISO22000,
  FSSC22000,
  ISO22716,
  ISO45001,
} from '../../components/detailComp/iso';
import {
  성과공유기업,
  여성기업,
  이노비즈,
  메인비즈,
  벤처기업,
  뿌리기술전문기업,
} from '../../components/detailComp/business';
import {
  가족친화인증,
  병역특례업체,
  노사문화우수기업,
  청년친화강소기업,
  인재육성형중소기업,
  공동근로복지기금설립,
} from '../../components/detailComp/welfare';
import {
  기업부설연구소,
  기업부설창작연구소,
} from '../../components/detailComp/lab';

const compNameArr = [
  [ISO9001, ISO14001, ISO45001, ISO22716, ISO22000, FSSC22000, ISO13485],
  [기업부설연구소, 기업부설창작연구소],
  [성과공유기업, 여성기업, 이노비즈, 메인비즈, 벤처기업, 뿌리기술전문기업],
  [
    가족친화인증,
    병역특례업체,
    노사문화우수기업,
    청년친화강소기업,
    인재육성형중소기업,
    공동근로복지기금설립,
  ],
];

function RightContent({ menuItem, itemToggleNum }) {
  const { contentToggle, setContentToggle } = useContext(SccContext);

  let DynamicComp =
    compNameArr[contentToggle.slice(0, 1)][contentToggle.slice(-1)];
  useEffect(() => {}, [contentToggle]);

  return (
    <>
      <div className="rightContentWrapper">
        <Route component={DynamicComp} />
      </div>
    </>
  );
}

const LeftMenuItem = styled.div`
  cursor: pointer;
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1px solid #ffffff;
  @media all and (min-width: 320px) {
  }
  @media all and (min-width: 768px) {
  }
  @media all and (min-width: 1024px) {
  }
  ${(props) =>
    props.contentChecker &&
    css`
      background-color: #303243;
      color: #ffffff;
    `}
`;

export default RightContent;
