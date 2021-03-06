import React from 'react';
import './footer.scss';
import logo from '../../img/sccLogoK.png';

function Footer() {
  return (
    <>
      <div className="footerWrapper">
        <div className="footerLogoWrapper">
          <div className="footerLogoText">
            <span>
              STARTUP <br />
              CERTIFICATION <br />
              CENTER
            </span>
          </div>
        </div>
        <div className="footerContents">
          <div className="contentsItem">
            <div className="footerItem">
              <span class="infoTitle">Phone</span> <br />
              <span class="infoTitleDes">02-6229-5100</span>
            </div>
            <div className="footerItem">
              <span class="infoTitle">E-mail</span> <br />
              <span class="infoTitleDes">info@ztop.kr</span>
            </div>
            <div className="footerItem">
              <span class="infoTitle">Address</span>
              <br />
              <span class="infoTitleDes">
                서울특별시 서초구 서초동 <br /> 서초중앙로22길 117
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="footerCopy">
        <span>
          <span className="businCopy">
          대표자: 김경태 <span>|</span> 사업자 등록번호: 288-87-00902 <span>|</span> <br/>통신판매업 신고번호: 제 2019-서울서초-3027 호
          </span>     
          <span className="businCopy">
          &copy; 2021 스타트업인증센터. All Rights Reserved.
          </span>

        </span>
      </div>
    </>
  );
}

export default Footer;
