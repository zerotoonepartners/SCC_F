import React from 'react';
import './scss/test.scss';


function Test() {
  return (
    <>
    <div className="testWrapper">
        <div className="picAndContents">
            <div className="pictureWrapper">
                <img src="https://img.hankyung.com/photo/202106/BF.26713751.1.jpg" alt="" />
            </div>
            <div className="contentsWrapper">
                <div className="name">
                    <span className="nameKor">이준호</span>
                    <span className="nameEng">Junho Lee</span>
                </div>
                <div className="department">
                    <span>경영기획본부 | 심사역</span>
                </div>
                <div className="contents">
                    <span className="hashTag">#열정 #전문성 #굿리스너</span>
                    <span className="introduce">안녕하세요<br/>자기소개가 들어갈 부분입니다.<br/>
                    각자 자신을 소개할 내용을 적어주시면 됩니다.<br/>
                    @@@@@@@@@@@@@@ 적어주세요.</span>
                </div>
            </div>

        </div>

    </div>
    </>
  );
}

export default Test;
