import styled, { css, keyframes } from 'styled-components';
import React, { useEffect, useState, useRef } from 'react';
import ThreeBall from '../../../../static/images/threeball.png';
import { Route } from 'react-router-dom';
import FlowBanner from '../../../flowbanner/flowbanner';
import Avatar1 from '../../../../img/avatar1.png';
import Avatar2 from '../../../../img/avatar2.png';
import Avatar3 from '../../../../img/avatar3.png';
import Avatar4 from '../../../../img/avatar4.png';
import './secfour.scss';
import p1 from '../../../../static/images/p1.png';
import p2 from '../../../../static/images/p2.png';
import p3 from '../../../../static/images/p3.png';
import p4 from '../../../../static/images/p4.png';
import p5 from '../../../../static/images/p5.png';
import p6 from '../../../../static/images/p6.png';
import check from '../../../../static/images/check.png';


function SecFour() {
  const [dotToggle, setDotToggle] = useState(1);
  function useInterval(callback, delay) {
    const savedCallback = useRef();
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useInterval(() => {
    setDotToggle(dotToggle + 1);
  }, 3500);

  return (
    <>
      <div className="sec4">
        <div className="secTitleWrapper">
          <span>Our Process</span>
          <div className="secLine"></div>
        </div>

        <div className="secPartOneWrapper">
          <div className="secPartOneTitle">
            개별 기업에 최적화된 인증 시스템
          </div>
          <div className="secPartOneSubTitle">
            개별 기업 맞춤 인증 안내와 베테랑 심사역들의 신속한 인증 심사
          </div>
          <div className="processAllContainer">
            <div className="processContainer">
              <div className="processBox">
                <div className="imgBox">
                  <img src={p4} className="pimg" />
                </div>
                <div className="processTextBox">
                  <div className="processTextTitle">
                    <span>STEP 1. 고객 문의 및 상담</span>
                  </div>
                  <div className="processTextContent">
                    <span>
                      개인별/회사별 맞춤형 상담을 진행합니다.
                    </span>
                  </div>
                </div>
              </div>

              <div className="processBox">
                <div className="imgBox">
                  <div className="imgSubBox">
                    <img src={check} className="checkimg" />
                      <div className="processSubTextContent">
                        <span>
                        인증 신청 후 견적 서류를 요청합니다.
                        </span>
                      </div>
                  </div>

                  <div className="processline"></div>
                </div>
                <div className="processTextBox"></div>

              </div>
              
              <div className="processBox">
                <div className="imgBox">
                  <img src={p5} className="pimg" />
                </div>
                <div className="processTextBox">
                  <div className="processTextTitle">
                    <span>STEP 2. 인증 신청</span>
                  </div>
                  <div className="processTextContent">
                    <span>인증 신청 후 필요한 견적 서류를 요청합니다.</span>
                  </div>
                </div>
              </div>
              <div className="processBox">
                <div className="imgBox">
                  <div className="imgSubBox">
                      <img src={check} className="checkimg" />
                        <div className="processSubTextContent">
                          <span>
                          문서심사/현장심사를 진행합니다.
                          </span>
                        </div>
                  </div>
                  <div className="processline"></div>
                </div>
                <div className="processTextBox"></div>
              </div>
              <div className="processBox">
                <div className="imgBox">
                  <img src={p6} className="pimg" />
                </div>
                <div className="processTextBox">
                  <div className="processTextTitle">
                    <span>STEP 3. 인증서 발행 및 사후관리</span>
                  </div>
                  <div className="processTextContent">
                    <span>인증서 발행 후 사후관리를 통해 </span><span>고객만족도를 제고합니다.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="secPartOneWrapper">
          <div className="secPartOneTitle">체계적인 교육 시스템</div>
          <div className="secPartOneSubTitle">
            이미 많은 기업들이 선택한 스타트업 인증센터의 체계적인 교육 시스템
          </div>
          <div className="processAllContainer">
            <div className="processContainer">
              <div className="processBox">
                <div className="imgBox">
                  <img src={p1} className="pimg" />
                </div>
                <div className="processTextBox">
                  <div className="processTextTitle">
                    <span>STEP 1. 고객 문의 및 상담</span>
                  </div>
                  <div className="processTextContent">
                    <span>
                      개인별/회사별 맞춤형 상담을 진행합니다.
                    </span>
                  </div>
                </div>
              </div>
              <div className="processBox">
                <div className="imgBox">
                  <div className="imgSubBox">
                      <img src={check} className="checkimg" />
                        <div className="processSubTextContent">
                          <span>
                          맞춤상담을 통해 고객에 최적화된 교육을 제안합니다.
                          </span>
                        </div>
                    </div>
                  <div className="processline"></div>
                </div>
                <div className="processTextBox"></div>
              </div>
              <div className="processBox">
                <div className="imgBox">
                  <img src={p2} className="pimg" />
                </div>
                <div className="processTextBox">
                  <div className="processTextTitle">
                    <span>STEP 2. 교육 신청</span>
                  </div>
                  <div className="processTextContent">
                    <span>전화 혹은 홈페이지 폼을 통해 </span><span>진행 중인 교육을 신청합니다.</span>
                  </div>
                </div>
              </div>
              <div className="processBox">
                <div className="imgBox">
                  <div className="imgSubBox">
                      <img src={check} className="checkimg" />
                        <div className="processSubTextContent">
                          <span>
                          고객의 이해도에 따른 교육과 보충을 진행합니다.
                          </span>
                        </div>
                    </div>
                  <div className="processline"></div>
                </div>
                <div className="processTextBox"></div>
              </div>
              <div className="processBox">
                <div className="imgBox">
                  <img src={p3} className="pimg" />
                </div>
                <div className="processTextBox">
                  <div className="processTextTitle">
                    <span>STEP 3. 수료증/자격증 취득</span>
                  </div>
                  <div className="processTextContent">
                    <span>교육 후 수료증/자격증이 발급됩니다.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blankLine"></div>

        <div className="secSlider">
          <Slider>
            <SliderContents dotToggle={dotToggle}>
              <SliderItem>
                <div className="sliderItemWrapper">
                  <div className="avatar">
                    <img src={Avatar1} alt="" />
                  </div>
                  <div className="commentWrapaper">
                    <span className="comment">
                      “각 팀별 IR 준비, 심사와 더불어 실제 기업 IR 심사를 통해
                      투자심사역으로써 실전감각을 키울 수 있었습니다!”
                      <br />
                      <br />
                      <span className="auth">IR컨설턴트 2기 -서oo 대리-</span>
                    </span>
                  </div>
                </div>
              </SliderItem>
              <SliderItem>
                <div className="sliderItemWrapper">
                  <div className="avatar">
                    <img src={Avatar4} alt="" />
                  </div>
                  <div className="commentWrapaper">
                    <span className="comment">
                      “처음 내부적인 문서 시스템을 갖추는 것에 대한 두려움이 있었지만,
                      인증서 발급까지 세세하게 신경써 주셔서 어려움 없이 마무리 되었습니다.”
                      <br />
                      <br />
                      <span className="auth">
                      ISO 9001 & 14001 -OO바이오-
                      </span>
                    </span>
                  </div>
                </div>
              </SliderItem>
              <SliderItem>
                <div className="sliderItemWrapper">
                  <div className="avatar">
                    <img src={Avatar2} alt="" />
                  </div>
                  <div className="commentWrapaper">
                    <span className="comment">
                      “스타트업에서 성장하기 위해 필수적으로 알아야 할 인증,
                      연구소 등 각종 제도에 대해 자세하게 다뤄 필요한 내용을
                      얻어 갈 수 있었습니다”
                      <br />
                      <br />
                      <span className="auth">
                        스타트업 필수교육생 -정oo대리-
                      </span>
                    </span>
                  </div>
                </div>
              </SliderItem>
              <SliderItem>
                <div className="sliderItemWrapper">
                  <div className="avatar">
                    <img src={Avatar3} alt="" />
                  </div>
                  <div className="commentWrapaper">
                    <span className="comment">
                    “내부 사정으로 촉박한 시간에도 불구하고, 연구소와 ISO 인증을 동시에 시간 내로 진행해 주셔서 대단히 감사드립니다.”
                      <br />
                      <br />
                      <span className="auth">
                      기업부설연구소, ISO 9001 & 14001 -OO벤처스-
                      </span>
                    </span>
                  </div>
                </div>
              </SliderItem>
              <SliderItem>
                <div className="sliderItemWrapper">
                  <div className="avatar">
                    <img src={Avatar2} alt="" />
                  </div>
                  <div className="commentWrapaper">
                    <span className="comment">
                    “정책자금을 준비하며 느낀 어려움을 해소할 수 있었고, 강의
                      후 개인적인 궁금증에 대해 정책자금 상담을 해주셔서
                      좋았습니다.”
                      <br />
                      <br />
                      <span className="auth">
                        정책자금 신의한수 교육생 -hm***-
                      </span>
                    </span>
                  </div>
                </div>
              </SliderItem>
              <SliderItem>
                <div className="sliderItemWrapper">
                  <div className="avatar">
                    <img src={Avatar4} alt="" />
                  </div>
                  <div className="commentWrapaper">
                    <span className="comment">
                      “벤처기업과 성과공유기업 관련하여 컨설팅을 의뢰드렸는데,
                      처음부터 끝까지 쉽고 자세하게 알려주시고 진행해 주셔서 만족스러웠습니다.”
                      <br />
                      <br />
                      <span className="auth">벤처기업, 성과공유기업 -해OO-</span>
                    </span>
                  </div>
                </div>
              </SliderItem>
              <SliderItem>
                <div className="sliderItemWrapper">
                  <div className="avatar">
                    <img src={Avatar1} alt="" />
                  </div>
                  <div className="commentWrapaper">
                    <span className="comment">
                    “심사를 나가시는 심사원이 직접 교육을 진행하셔서 생생한 심사 현장 이야기를 들을 수 있었습니다.”<br />
                    <span className="comment2">“핵심 위주로 설명해 주셔서 이해가 쉬웠습니다!”</span>
                      <br />
                      <br />
                      <span className="auth">ISO 교육생 -이oo, 최oo-</span>
                    </span>
                  </div>
                </div>
              </SliderItem>
            </SliderContents>
            <div className="dotWrapper">
              <DotBtn
                dotToggle={dotToggle}
                onClick={() => {
                  setDotToggle(1);
                }}
              />
              <DotBtn
                dotToggle={dotToggle}
                onClick={() => {
                  setDotToggle(2);
                }}
              />
              <DotBtn
                dotToggle={dotToggle}
                onClick={() => {
                  setDotToggle(3);
                }}
              />
              <DotBtn
                dotToggle={dotToggle}
                onClick={() => {
                  setDotToggle(4);
                }}
              />
              <DotBtn
                dotToggle={dotToggle}
                onClick={() => {
                  setDotToggle(5);
                }}
              />
              <DotBtn
                dotToggle={dotToggle}
                onClick={() => {
                  setDotToggle(6);
                }}
              />
              <DotBtn
                dotToggle={dotToggle}
                onClick={() => {
                  setDotToggle(7);
                }}
              />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

const DotBtn = styled.div`
  width: 2px;
  height: 2px;
  border: 2px solid gray;
  background-color: gray;
  border-radius: 50%;
`;

const SliderItem = styled.div`
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 320px) {
    // border:1px solid red;
    width: 25%;
    height: 100%;
  }
`;

const SliderContents = styled.div`
  width: 700%;
  height: 100%;
  display: flex;
  transform: translateX(-0%);
  transition: 1s all ease;
  ${(props) =>
    props.dotToggle === 1 &&
    css`
      transform: translateX(-0%);
    `}
  ${(props) =>
    props.dotToggle === 2 &&
    css`
      transform: translateX(-14.28%);
    `}
  ${(props) =>
    props.dotToggle === 3 &&
    css`
      transform: translateX(-28.56%);
    `}
  ${(props) =>
    props.dotToggle === 4 &&
    css`
      transform: translateX(-42.84%);
    `}
  ${(props) =>
    props.dotToggle === 5 &&
    css`
      transform: translateX(-57.12%);
    `}
  ${(props) =>
    props.dotToggle === 6 &&
    css`
      transform: translateX(-71.4%);
    `}
  ${(props) =>
    props.dotToggle === 7 &&
    css`
      transform: translateX(-85.68%);
    `}  
`;

const Slider = styled.div`
  border: 0.5px solid #9c9c9c;
  border-radius: 7px;
  width: 60%;
  height: 100%;
  overflow: hidden;
  position: relative;
  margin-bottom: 5rem;
`;

export default SecFour;
