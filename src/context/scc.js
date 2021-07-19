import { createContext, useEffect, useState } from 'react';
import { getData } from '../api/api';
import firebase from 'firebase/app';
import { firebaseDB } from '../firebase';
//import 'firebase/database';
const SccContext = createContext();

const SccContextProvider = ({ children }) => {
  const [eduflag, setEduflag] = useState(false);
  const [prac, setPrac] = useState('test');

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
        eduflag,
        setEduflag,
        prac,
        setPrac,
        event,
        setEvent,
      }}
    >
      {children}
    </SccContext.Provider>
  );
};

export { SccContextProvider, SccContext };
