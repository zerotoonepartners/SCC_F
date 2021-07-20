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
      setEvent(temp);
      console.log(event);
    } catch (e) {
      console.log(e);
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
      }}
    >
      {children}
    </SccContext.Provider>
  );
};

export { SccContextProvider, SccContext };
