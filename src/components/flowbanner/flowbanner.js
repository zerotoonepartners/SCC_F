import styled, { keyframes, css } from 'styled-components';
import flow8 from '../../static/images/flow8logo.png';
import flow7 from '../../static/images/flow7logo.png';
import flow6 from '../../static/images/flow6logo.png';
import flow5 from '../../static/images/flow5logo.png';
import './flowbanner.scss';
// 누끼 logo 1~4더 따기

const scrolling = keyframes`
    0%{
       transform: translateX(0);     
    }
    100%{
       transform: translateX(-100vw); 
    }
`;

const Marq = styled.div`
  width: 100%;
  height: 18vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  display: flex;
`;

const MarqUl = styled.ul`
  background-color: transparent;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  height: 12vh;
  animation: ${scrolling} 12s linear infinite;
`;

const MarqLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33vw;
  height: 100%;
  white-space: nowrap;
  color: #ffffff;
  @media (max-width: 1024px) {
    font-size: 15px;
  }
`;

const bannerMsg1 = 'LOGO';

function FlowBanner() {
  return (
    <>
      <Marq>
        <MarqUl>
          <MarqLi>
            <img class="logoImg" src={flow8} alt="flow8" />
          </MarqLi>
          <MarqLi>
            <img class="logoImg" src={flow7} alt="flow7" />
          </MarqLi>
          <MarqLi>
            <img class="logoImg" src={flow6} alt="flow6" />
          </MarqLi>
          <MarqLi>
            <img class="logoImg" src={flow5} alt="flow5" />
          </MarqLi>
          <MarqLi>
            <img class="logoImg" src={flow8} alt="flow4" />
          </MarqLi>
          <MarqLi>
            <img class="logoImg" src={flow7} alt="flow3" />
          </MarqLi>
          <MarqLi>
            <img class="logoImg" src={flow6} alt="flow2" />
          </MarqLi>
          <MarqLi>
            <img class="logoImg" src={flow5} alt="flow1" />
          </MarqLi>
          <MarqLi>
            <img class="logoImg" src={flow6} alt="flow0" />
          </MarqLi>
        </MarqUl>
      </Marq>
    </>
  );
}

export default FlowBanner;
