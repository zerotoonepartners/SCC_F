import react, { useContext } from 'react';
import { Route } from 'react-router-dom';
import './infoSecThree.scss';

function InfoSecThree() {
    return (
      <>
        <div className="infoSecThreeWrapper" >
        <div className="boxAndTitle">
            <div className="infoSecThreeBox"></div>
            <div className="serviceTitle"><span>Our Service</span>
            <div className="line"></div></div>
          </div>

            <div className="serviceContentsWrapper">
              <div className="imgAndContent">
                <div className="imgWrapper"><img src="https://images.unsplash.com/photo-1529119368496-2dfda6ec2804?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" /></div>
                <div className="contentWrapper">
                  <span className="serviceContentTitle">기업 인증</span>
                  <span className="serviceContent">중소기업 대상으로 매년 증가하는 정부 예산을 통해 정부지원사업이 편성되고 있습니다.<br/>
                  벤처기업, 기업부설연구소, 이노비즈, 메인비즈 등의 기업인증을 바탕으로 세제/금융을 지원하며, 
                  정부지원사업/정책자금 심사 시 해당 기업인증에 대한 가점을 부여하고 있습니다.<br/>
                  스타트업인증센터는 기업인증 과정 컨설팅 뿐만 아니라 기업의 파트너 역할을 합니다.</span>
                  </div>
              </div>

              <div className="imgAndContent">
                <div className="imgWrapperReverse"><img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" /></div>
                <div className="contentWrapperReverse">
                <span className="serviceContentTitle">스타트업 교육</span>
                <span className="serviceContent">초기 스타트업을 운영하면서 어려움을 겪는 대표님들이 대부분입니다.<br/>하지만 걱정하실 필요 없습니다.<br/>
                스타트업 교육을 통해 정책자금, 지원사업, IR, 필수인증 등 A에서 Z까지 스타트업인증센터에서 알려드립니다.</span>
                </div>
              </div>

              <div className="imgAndContent">
                <div className="imgWrapper"><img src="https://images.unsplash.com/photo-1496681859237-6039cd585c4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" /></div>
                <div className="contentWrapper">
                <span className="serviceContentTitle">맞춤형 컨설팅</span>
                <span className="serviceContent">기업자료 검토를 통해 기업 내 존재하는 문제점과 방향성을 맞춤형으로 제시해 드립니다.<br/>
                또한 전문 인력 부재로 인해 고민인 기업에게 전담관리팀장을 배정하여 기업의 CFO, COO 역할이 될 것을 약속드립니다. <br/>
                단발성이 아닌 상시 관리 체계로 원격+정기방문 방식으로 서비스를 제공합니다.</span>
                </div>
              </div>

            
            </div>
        </div>
      </>
    );
  }
  
  export default InfoSecThree;