import react, { useContext } from 'react';
import { Route } from 'react-router-dom';
import './infoSecThree.scss';

function InfoSecThree() {
    return (
      <>
        <div className="infoSecThreeWrapper" >
        <div className="boxAndTitle">
            <div className="box"></div>
            <div className="serviceTitle"><span>Our Service</span>
            <div className="line"></div></div>
          </div>

            <div className="serviceContentsWrapper">
              <div className="imgAndContent">
                <div className="imgWrapper"><img src="https://images.unsplash.com/photo-1529119368496-2dfda6ec2804?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" /></div>
                <div className="contentWrapper">
                  <span className="serviceContentTitle">벤처기업 인증</span>
                  <span className="serviceContent">세제, 창업, 입지, 금융, 특허, 마케팅 등의 분야에서 우대 혜택을 받을 수 있도록 벤처기업 인증을 받을 수 있도록 도와드립니다.</span>
                  </div>
              </div>

              <div className="imgAndContent">
                <div className="imgWrapperReverse"><img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" /></div>
                <div className="contentWrapperReverse">
                <span className="serviceContentTitle">벤처기업 인증</span>
                <span className="serviceContent">세제, 창업, 입지, 금융, 특허, 마케팅 등의 분야에서 우대 혜택을 받을 수 있도록 벤처기업 인증을 받을 수 있도록 도와드립니다.</span>
                </div>
              </div>

              <div className="imgAndContent">
                <div className="imgWrapper"><img src="https://images.unsplash.com/photo-1496681859237-6039cd585c4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" /></div>
                <div className="contentWrapper">
                <span className="serviceContentTitle">벤처기업 인증</span>
                <span className="serviceContent">세제, 창업, 입지, 금융, 특허, 마케팅 등의 분야에서 우대 혜택을 받을 수 있도록 벤처기업 인증을 받을 수 있도록 도와드립니다.</span>
                </div>
              </div>

            
            </div>
        </div>
      </>
    );
  }
  
  export default InfoSecThree;