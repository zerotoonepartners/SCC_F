import react from 'react';
import styled, { css } from 'styled-components';
import './Pill.scss';

function Pill({ text, border_color, background, color, chosen }) {
  return (
    <Oval
      border_color={border_color}
      background={background}
      color={color}
      chosen={chosen}
    >
      <div class="test">{text}</div>
    </Oval>
  );
}

export default Pill;

const Oval = styled.div`
  ${(props) =>
    props.chosen === true &&
    css`
      && {
        background: #ffffff;
        color: #076afd;
        border: 1px solid #076afd;
      }
    `}
  ${(props) =>
    props.chosen === false &&
    css`
      && {
        background: #076afd;
        color: ffffff;
        border: 1px solid #ffffff;
      }
    `}
  
cursor:pointer;
  @media all and (min-width: 320px) {
    background: ${(props) => props.background};
    color: ${(props) => props.color};
    border: 1px solid ${(props) => props.border_color};
    border-radius: 15px;
    width: 2.7rem;
    height: 1.2rem;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 0.1rem;
  }
  @media all and (min-width: 768px) {
  }
  @media all and (min-width: 1024px) {
    transition: all 1s ease;
    background: ${(props) => props.background};
    color: ${(props) => props.color};
    border_color: 1px solid ${(props) => props.border_color};
    border-radius: 30px;
    width: 9rem;
    height: 3rem;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 1.1rem;
  }
`;
