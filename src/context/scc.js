import { createContext, useEffect, useState } from 'react';
import { getData } from '../api/api';
const SccContext = createContext();

const SccContextProvider = ({ children }) => {
  const [event, setEvent] = useState([
    {
      id: undefined,
      title: undefined,
      content: undefined,
      imgUrl: undefined,
      LandingUrl: undefined,
      done: undefined,
      isFree: undefined,
      startStamp: undefined,
      endStamp: undefined,
      created_at: undefined,
    },
  ]);
  const [selectEdu, setSelectEdu] = useState();
  const [contentToggle, setContentToggle] = useState('00');
  async function fetchData() {
    try {
      let temp = await getData();
      temp.map((item, idx) => {
        item.startStamp = item.startStamp.slice(0, 10);
        item.endStamp = item.endStamp.slice(0, 10);
        item.content =
          item.content.length > 100
            ? `${item.content.substring(0, 100)}...`
            : item.content;
      });
      let temp2 = temp.reverse();
      setEvent(temp2);
    } catch (e) {
      //console.log(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <SccContext.Provider
      value={{
        event,
        setEvent,
        setSelectEdu,
        selectEdu,
        contentToggle,
        setContentToggle,
      }}
    >
      {children}
    </SccContext.Provider>
  );
};

export { SccContextProvider, SccContext };
