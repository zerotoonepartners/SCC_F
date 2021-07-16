import { useEffect } from 'react';
import './kakao.scss';

export default function Kakao() {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    //kakao api
    try{window.Kakao.init('0bb9e084ab14a4bc648238354b0cabd0');} catch(e){}
    window.Kakao.Channel.createChatButton({
      container: '#kakao-talk-channel-chat-button',
      //channel personal id
      channelPublicId: '_Ejxcxns',
      title: 'consult',
      size: 'small',
      color: 'yellow',
      shape: 'pc',
      supportMultipleDensities: true,
    });
    document.body.appendChild(script);
    document.body.removeChild(script);
    //     window.Kakao.init('580d16e31b9329a3a0b977f32adbc7d0');
    //     window.Kakao.Channel.createChatButton({
    //         container:'#kakao-talk-channel-chat-button',
    //         channelPublicId : '_QxbbPs',
    //         title : 'consult',
    //         size: 'small',
    //         color : 'yellow',
    //         shape : 'pc',
    //         supportMultipleDensities : true,
    //     })
  }, []);
  return <div class="kakaoBtn" id="kakao-talk-channel-chat-button"></div>;
}
