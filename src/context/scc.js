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
      done: undefined,
      isFree: undefined,
      startStamp: undefined,
      endStamp: undefined,
      created_at: undefined,
    },
  ]);
  async function fetchData() {
    try {
      let temp = await getData();
      temp.map((item,idx)=>{
        item.startStamp=item.startStamp.slice(0,10);
        item.endStamp=item.endStamp.slice(0,10);
      })
      let temp2 = temp.reverse();
      setEvent(temp2);
      console.log("here");
      console.log(event);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    console.log("나 몇번?");
    fetchData();
  }, []);
  return (
    <SccContext.Provider
      value={{
        event,
        setEvent,
      }}
    >
      {children}
    </SccContext.Provider>
  );
};

export { SccContextProvider, SccContext };
