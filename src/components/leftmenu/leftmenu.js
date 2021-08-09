import react, { useEffect, useState, useContext } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { SccContext } from '../../context/scc';
import './leftmenu.scss';

function LeftMenu({ menuItem, itemToggleNum }) {
  const { contentToggle, setContentToggle } = useContext(SccContext);

  return (
    <>
      <div className="leftMenuWrapper">
        {menuItem.map((item, index) => (
          <LeftMenuItem
            key={index}
            contentChecker={
              contentToggle === `${itemToggleNum}${index}` ? true : false
            }
            onClick={() => {
              setContentToggle(`${itemToggleNum}${index}`);
            }}
          >
            {item}
          </LeftMenuItem>
        ))}
      </div>
    </>
  );
}

const LeftMenuItem = styled.div`
  @media all and (min-width: 320px) {
    cursor: pointer;
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1px solid #ffffff;
  }
  @media all and (min-width: 768px) {
  }
  @media all and (min-width: 1024px) {
    padding: 0 1rem;
    width: 50%;
    height: 3rem;
    margin-bottom: 0.5rem;
    border-radius: 5px;
    font-weight: 500;
    &:hover {
      background-color: #ececec;
    }
  }
  ${(props) =>
    props.contentChecker &&
    css`
      background-color: #646ecb;
      color: #ffffff;
      &:hover {
        background-color: #646ecb;
      }
    `}
`;

export default LeftMenu;
