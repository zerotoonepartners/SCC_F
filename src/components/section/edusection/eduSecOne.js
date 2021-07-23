import react, { useContext, useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';
import './eduSecOne.scss';
import { SccContext, SccContextProvider } from '../../../context/scc';

function EduSecOne() {
  const { setEvent, event } = useContext(SccContext);
  const diu =
    'https://images.unsplash.com/photo-1560439514-e960a3ef5019?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80';
  let history = useHistory();
  console.log(event);
  return (
    <>
      <div className="eduLandingWrapper">
        <div className="eduLanding"></div>
        <div className="eduLine">
          <span className="eduTitle">스인터에서 진행하는 교육현황</span>
        </div>
        <div className="eduCardWrapper">
          {event === undefined ? (
            <div className="card">
              <img className="thumb" src={diu} alt="" />
              <div className="cardContentWrapper">
                <div className="cardTitleWrapper">
                  <span className="cardTitle">
                    현재 진행중인 교육이 없습니다.
                  </span>
                </div>
                <div className="cardDescWrapper">
                  <span className="cardDesc">
                    현재 진행중인 교육이 없습니다.
                  </span>
                </div>
                <div className="cardFooterWrapper">
                  <div className="cardIsFree">
                    <span></span>
                  </div>
                  <div className="cardPubDateWrapper">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            event.map((item, index) => {
              return (
                <div
                  className="card"
                  key={item.id}
                  onClick={() => {
                    history.push('/eduform');
                  }}
                >
                  <img className="thumb" src={item.imgUrl} alt="" />
                  <div className="cardContentWrapper">
                    <div className="cardTitleWrapper">
                      <span className="cardTitle">{item.title}</span>
                    </div>
                    <div className="cardDescWrapper">
                      <span className="cardDesc">{item.content}</span>
                    </div>
                    <div className="cardFooterWrapper">
                      <div className="cardIsFree">
                        <span>{`기간 : ${item.startStamp} ~ ${item.endStamp}`}</span>
                      </div>
                      <div className="cardPubDateWrapper">
                        <span>{item.isFree ? '무료' : '유료'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

export default EduSecOne;
