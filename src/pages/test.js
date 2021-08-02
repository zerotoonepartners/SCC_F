import React from 'react';
import './scss/test.scss';
import samplepic from '../static/images/samplepic.png';


function Test() {
  return (
    <>
    <div className="testWrapper">
        <div className="picAndContents">
            <div className="pictureWrapper">
                <img src={samplepic} className="img" />
                {/* <img src="https://lh3.googleusercontent.com/proxy/LSgsqaUYZMUqImrFd-uySO82tXs5VgWvyjQAkKn4ZDVDgLtLewB9ddlZt9rlJw_2vTOxqRVVab4YCnUQ8pW_SDhqzn8pErQMHoJ3qB2V9uH_MBQaW1b48EtBDqyG" alt="" /> */}
            </div>
            <div className="contentsWrapper">
                <div className="name">
                    <span className="nameKor">김선호</span>
                    <span className="nameEng">Sunho Kim</span>
                </div>
                <div className="department">
                    <span>경영기획본부 | 심사역</span>
                </div>
                <div className="contents">
                    <span className="hashTag">#열정 #전문성 #굿리스너</span>
                    <span className="introduce">            
                    안녕하세요<br/>자기소개가 들어갈 부분입니다.<br/>
                    각자 자신을 소개할 내용을 적어주시면 됩니다.<br/>
                    자기소개가 들어갈 부분입니다.<br/>
                    각자 자신을 소개할 내용을 적어주시면 됩니다.<br/>
                    자기소개가 들어갈 부분입니다.<br/>
                    각자 자신을 소개할 내용을 적어주시면 됩니다.<br/>
                    자기소개가 들어갈 부분입니다.<br/>
                    각자 자신을 소개할 내용을 적어주시면 됩니다.<br/>
                    이미지 부분은 사진 크기에 따라 사이즈를 재조절 할 것 같습니다.<br/></span>
                </div>
            </div>

        </div>

    </div>
    </>
  );
}

export default Test;
