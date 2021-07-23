import { useEffect, useState } from 'react';
import { send } from 'emailjs-com';
import Modal from 'react-modal';
import './form.scss';
import './modal.scss';
import cancel from '../../static/images/cancel.png';

export default function FormSet() {
  const [toSend, setToSend] = useState({
    authlist: [],
    username: '',
    call: '',
    email: '',
    enter: '',
  });
  const [emailText, setEmailText] = useState('이메일 형식이 잘못되었습니다.');
  const cateText = '* 반드시 하나 이상의 인증 항목을 선택해주세요.';
  const [mod, setMod] = useState(false);
  const [acheck, setAcheck] = useState(false);
  const [mm, setMm] = useState({
    msg: '',
    closebutton: true,
    err: false,
  });
  const [iso, setIso] = useState(false);
  const Iso = [
    'ISO 9001',
    'ISO 13485',
    'ISO 14001',
    'ISO 22000',
    'FSSC 22000',
    'ISO 22716',
    'ISO 45001',
    
  ];
  const [oper, setOper] = useState(false);
  const Oper = [
    '성과공유기업',
    '여성기업',
    '이노비즈',
    '메인비즈',
    '벤처기업',
    '뿌리기술 전문기업',
  ];
  const [welfare, setWelfare] = useState(false);
  const Welfare = [
    '가족친화인증',
    '병역특례',
    '노사문화 우수기업',
    '청년친화 강소기업',
    '인재육성형 중소기업',
    '공동근로복지재단설립',
  ];
  const [labor, setLabor] = useState(false);
  const Labor = [
    '기업부설연구소',
    '기업전담부서',
    '기업창작연구소',
    '창작전담부서',
  ];
  const [selection, setSelection] = useState({ arr: [] });
  const re = /\S+@\S+\.\S+/;
  //mail send
  const onSubmit = (e) => {
    if (check()&&acheck) {
      setMm({ msg: '전송중입니다.', closebutton: false, err: false });
      setMod(true);
      e.preventDefault();
      send(
        'service_2gdjk0y',
        'template_xbhsdep',
        toSend,
        'user_zD0dr13eGKGyjsGZGCdKa',
      )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setMm({
            msg: '신청이 완료되었습니다!',
            closebutton: true,
            err: false,
          });
          setMod(true);
        })
        .catch((err) => {
          console.log('FAILED...', err);
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
    if (toSend.call.length === 11) {
      setToSend({
        ...toSend,
        call: toSend.call.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
      });
    }
    if (re.test(toSend.email)) {
      setEmailText("");
    } else {
      setEmailText('이메일 형식이 잘못되었습니다.');
    }
    toSend.authlist = selection.arr;
  }, [toSend.call, toSend.email, selection]);

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
    console.log('reloading');
    window.location.reload();
  };
  //hide and show
  const addHandler = (e) => {
    let 중복 = false;
    selection.arr.map((value, key) => {
      if (value === e) {
        중복 = true;
      }
    });
    if (중복) {
    } else {
      setSelection({ arr: [...selection.arr, e] });
    }
  };

  const delHandler = async (e) => {
    let index = await getkey(e);
    if (index === undefined) {
    } else {
      let tmp = selection.arr;
      tmp.splice(index, 1);
      setSelection({ arr: tmp });
    }
  };

  const getkey = (str) => {
    let idx = undefined;
    selection.arr.map(async (value, key) => {
      if (value === str) {
        idx = key;
      }
    });
    return idx;
  };

  return (
    <div class="formcomWrapper">
      <div className="categoryWrapper">
        <div
          className="subcategoryWrapper"
          onClick={() => {
            if (iso) {
              setIso(false);
            } else {
              setIso(true);
              setOper(false);
              setWelfare(false);
              setLabor(false);
            }
          }}
        >
          <div id="btn_3">
            <button>{iso ? '▾ ISO 인증' : '▸ ISO 인증'}</button>
          </div>
        </div>
        <div
          className="subcategoryWrapper"
          onClick={() => {
            if (oper) {
              setOper(false);
            } else {
              setIso(false);
              setOper(true);
              setWelfare(false);
              setLabor(false);
            }
          }}
        >
          <div id="btn_3" className="btn_3">
            <button>{oper ? '▾ 경영 인증' : '▸ 경영 인증'}</button>
          </div>
        </div>
        <div
          className="subcategoryWrapper"
          onClick={() => {
            if (welfare) {
              setWelfare(false);
            } else {
              setIso(false);
              setOper(false);
              setWelfare(true);
              setLabor(false);
            }
          }}
        >
          <div id="btn_3">
            <button>{welfare ? '▾ 복지 인증' : '▸ 복지 인증'}</button>
          </div>
        </div>
        <div
          className="subcategoryWrapper"
          onClick={() => {
            if (labor) {
              setLabor(false);
            } else {
              setIso(false);
              setOper(false);
              setWelfare(false);
              setLabor(true);
            }
          }}
        >
          <div id="btn_3">
            <button>{labor ? '▾ 연구소 인증' : '▸ 연구소 인증'}</button>
          </div>
        </div>
      </div>
      <div
        // className="selectionWrapper"
        className="selectionWrapper"
      >
        {iso ? (
          Iso.map((value, key) => {
            return (
              <div className="btnContent" id="btn_2">
                <button
                  onClick={() => {
                    addHandler(value);
                  }}
                >
                  {value}
                </button>
              </div>
            );
          })
        ) : (
          <></>
        )}
        {oper ? (
          Oper.map((value, key) => {
            return (
              <div className="btnContent" id="btn_2">
                <button
                  onClick={() => {
                    addHandler(value);
                  }}
                >
                  {value}
                </button>
              </div>
            );
          })
        ) : (
          <></>
        )}
        {welfare ? (
          Welfare.map((value, key) => {
            return (
              <div className="btnContent" id="btn_2">
                <button
                  onClick={() => {
                    addHandler(value);
                  }}
                >
                  {value}
                </button>
              </div>
            );
          })
        ) : (
          <></>
        )}
        {labor ? (
          Labor.map((value, key) => {
            return (
              <div className="btnContent" id="btn_2">
                <button
                  onClick={() => {
                    addHandler(value);
                  }}
                >
                  {value}
                </button>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
      <form noValidate class="formBox" target="if">
        <div class="inputContainer">
          <div className="catecover">
            { selection.arr.length===0? 
              <div className="cateText">{cateText}</div>
            : selection.arr.map((value, key) => {
              return (
                <div className="catebox">
                  {value}
                  <button
                    onClick={() => {
                      delHandler(value);
                    }}
                  >
                    <img src={cancel} alt="" />
                  </button>
                </div>
              );
            })}
          </div>
          <div class="inputcover">
            <input
              class="inputBox"
              placeholder="성함(직위)*"
              type="text"
              name="username"
              value={toSend.username}
              onChange={usernameChange}
            />
            <input
              class="inputBox"
              placeholder="휴대폰 번호*"
              type="text"
              name="call"
              value={toSend.call}
              onChange={callChange}
            />
            <input
              class="inputBox"
              placeholder="기업형(업태/종목)*"
              type="text"
              name="enter"
              value={toSend.enter}
              onChange={enterChange}
            />
            <input
              class="inputBox"
              placeholder="Email 주소*"
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
