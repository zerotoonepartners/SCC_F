import react from 'react';
import './newFooter.scss';

function NewFooter() {
  return (
    <>
      <div className="newFooterWrapper">
        <div className="footerInfoTop">
          <div className="topLogo"></div>
          <div className="topContent">
            <div className="contentsItem">
              <div className="itemTitle"></div>
              <div className="itemDesc"></div>
            </div>
            <div className="contentsItem">
              <div className="itemTitle"></div>
              <div className="itemDesc"></div>
            </div>
            <div className="contentsItem">
              <div className="itemTitle"></div>
              <div className="itemDesc"></div>
            </div>
          </div>
        </div>
        <div className="footerInfoBottom">
          <span>
            사업자등록번호: 288-87-00902 대표자: 김경태 <br />© 2021
            스타트업인증센터. All Rights Reserved.
          </span>
        </div>
      </div>
    </>
  );
}

export default NewFooter;
