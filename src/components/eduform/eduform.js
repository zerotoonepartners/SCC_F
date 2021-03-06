import { useContext, useEffect, useState } from 'react';
import { send } from 'emailjs-com';
import Modal from 'react-modal';
import './eduform.scss';
import './modal.scss';
import cancel from '../../static/images/cancel.png';

import { SccContext } from '../../context/scc';

export default function FormSet() {
  const {event,selectEdu,setSelectEdu} = useContext(SccContext);
  const [toSend, setToSend] = useState({
    authlist: [],
    username: '',
    call: '',
    email: '',
    enter: '',
  });
  const [emailText, setEmailText] = useState('이메일 형식이 잘못되었습니다.');
  const [mod, setMod] = useState(false);
  const [mm, setMm] = useState({
    msg: '',
    closebutton: true,
    err: false,
  });
  const [acheck, setAcheck] = useState(false);
  const cateText = '* 반드시 하나 이상의 교육 항목을 선택해주세요.';
  const [eselection, setESelection] = useState({ arr: [] });
  const re = /\S+@\S+\.\S+/;
  //mail send
  const onSubmit = (e) => {
    if (check()) {
      setMm({ msg: '전송중입니다.', closebutton: false, err: false });
      setMod(true);
      e.preventDefault();
      send(
        'service_6dcpags', //service ID
        'template_lthzijg', //template ID
        toSend,
        'user_IC1FAzC3AFBY7NflAfgxo', //userID
      )
        .then((response) => {
          //console.log('SUCCESS!', response.status, response.text);
          setMm({
            msg: '신청이 완료되었습니다!',
            closebutton: true,
            err: false,
          });
          setMod(true);
        })
        .catch((err) => {
          //console.log('FAILED...', err);
          setMm({
            msg: 'Email Server Error : 500',
            closebutton: true,
            err: true,
          });
          setMod(true);
        });
    } else if(acheck===true && check()===false) {
      setMm({
        msg: '이메일 형식 포함 양식에 맞는 지 확인해 주세요.',
        closebutton: true,
        err: true,
      });
      setMod(true);
    }else if(acheck===false && check()===true){
      setMm({
        msg:'개인정보 처리 약관에 동의하여주세요.',
        closebutton : true,
        err : true
      });
      setMod(true);
    }else{
      setMm({
        msg:'양식을 채워 주세요.',
        closebutton : true,
        err : true
      });
      setMod(true);
    }

  };
  //input part
  const usernameChange = (e) => {
    setToSend({
      ...toSend,
      username: e.target.value,
    });
  };
  const callChange = (e) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value)) {
      setToSend({
        ...toSend,
        call: e.target.value,
      });
    }
  };
  const emailChange = (e) => {
    setToSend({
      ...toSend,
      email: e.target.value,
    });
  };
  const enterChange = (e) => {
    setToSend({
      ...toSend,
      enter: e.target.value,
    });
  };

  useEffect(() => {
      //console.log(eselection.arr);
    if (selectEdu!==undefined){
      addHandler(selectEdu);
      setSelectEdu(undefined);
    }
    if (toSend.call.length === 11) {
      setToSend({
        ...toSend,
        call: toSend.call.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
      });
    }
    if (re.test(toSend.email)) {
      setEmailText('');
    } else {
      setEmailText('이메일 형식이 잘못되었습니다.');
    }
    toSend.authlist = eselection.arr;
  }, [toSend.call, toSend.email, eselection]);

  //check mail form
  const check = () => {
    let re = /\S+@\S+\.\S+/;
    let et = re.test(toSend.email);
    let nt = toSend.username.length > 0;
    let pt = toSend.enter.length > 0;
    let ct = toSend.call.length === 13;
    let at = toSend.authlist.length > 0;
    return et && nt && pt && ct && at;
  };
  //modal
  const closeModal = () => {
    setMod(false);
  };
  //page reset
  const reload = () => {
    //console.log('reloading');
    window.location.reload();
  };
  //hide and show
  const addHandler = (e) => {
    let 중복 = false;
    eselection.arr.map((value, key) => {
      if (value === e) {
        중복 = true;
      }
    });
    if (중복) {
    } else {
      setESelection({ arr: [...eselection.arr, e] });
    }
  };

  const delHandler = async (e) => {
    let index = await getkey(e);
    if (index === undefined) {
    } else {
      let tmp = eselection.arr;
      tmp.splice(index, 1);
      setESelection({ arr: tmp });
    }
  };

  const getkey = (str) => {
    let idx = undefined;
    eselection.arr.map(async (value, key) => {
      if (value === str) {
        idx = key;
      }
    });
    return idx;
  };

  return (
    <div className="formcomWrapper">
        <div className="eduformCutting"></div>
      <form noValidate className="formBox" target="if">
        <div className="formContentTitleWrapper">
          <div className="formContentTitleBox">
            교육 신청
          </div>
          <div className="formContentDot">
            <div className="dot dot2"></div>
            <div className="dot dot1"></div>
          </div>
        </div>
        {
            event===undefined ? 
            <div className="eduContentContainer"><div className="eduContent">현재 진행중인 교육이 없습니다.</div></div>
            :
            <div className="eduContentContainer">
            {
                event.map((item,idx)=>{
                  if(item.done===false){
                    return(
                        <button className="eduContent" key={idx} onClick={()=>{addHandler(item.title)}}>
                        <span>{item.title}</span>
                        </button>
                    )
                  }
                })
              
            }
            </div>
        }
        <div className="inputContainer">
          <div className="catecover">
          { eselection.arr.length===0? 
              <div className="cateText">{cateText}</div>
            : eselection.arr.map((value, key) => {
              return (
                <div className="catebox">
                  {value}
                  <button
                    onClick={() => {
                      delHandler(value);
                    }}
                  >
                    <img src={cancel} alt="cancel" />
                  </button>
                </div>
              );
            })}
          </div>
          <div class="inputcover">
            <input
              class="inputBox"
              placeholder="성함(직위)"
              type="text"
              name="username"
              value={toSend.username}
              onChange={usernameChange}
            />
            <input
              class="inputBox"
              placeholder="휴대폰 번호"
              type="text"
              name="call"
              value={toSend.call}
              onChange={callChange}
            />
            <input
              class="inputBox"
              placeholder="기업명(업태/종목)"
              type="text"
              name="enter"
              value={toSend.enter}
              onChange={enterChange}
            />
            <input
              class="inputBox"
              placeholder="Email 주소"
              type="text"
              name="email"
              value={toSend.email}
              onChange={emailChange}
            />
            <div class="emailTextBox">
              {emailText}
              <div className="indiBox"><input type="checkbox" onClick={()=>{acheck?setAcheck(false):setAcheck(true)}}></input>개인약관처리방침 동의<a href="">   상세보기</a></div>
            </div>
            <div className="applyBtn" id="btn">
              <button id="button" onClick={onSubmit}>
                신청하기
              </button>
            </div>
          </div>
        </div>
      </form>
      <div>
        {mm.closebutton ? (
          <Modal
            isOpen={mod}
            onRequestClose={closeModal}
            close={closeModal}
            className="modalbody"
            contentLabel="dev"
          >
            <div className="modalmsg">{`${mm.msg}`}</div>
            {mm.err ? (
              //에러가 있을 시
              <button className="modal_btn" onClick={closeModal}>
                닫기
              </button>
            ) : (
              //에러가 없을 시
              <button className="modal_btn" onClick={(closeModal, reload)}>
                닫기
              </button>
            )}
          </Modal>
        ) : (
          //전송중일시
          <Modal
            isOpen={mod}
            onRequestClose={closeModal}
            close={closeModal}
            className="modalbody"
            contentLabel="dev"
          >
            <div className="modalmsg">{`${mm.msg}`}</div>
          </Modal>
        )}
      </div>
      <iframe id="if" name="if" style={{ display: 'none' }}></iframe>
    </div>
  );
}
