import react from 'react';
import './contact.scss';
import phone from '../../static/images/phone.png';

function ContactBtn() {
  return (
    <>
      <a href="tel:02-6229-5100">
        <div className="contactWrapper">
          <div className="imgWrapper">
            <img src={phone} alt="phone" />
          </div>
          <div className="textWrapper">
            <span>문의</span>
          </div>
        </div>
        문의 전화
      </a>
    </>
  );
}

export default ContactBtn;
