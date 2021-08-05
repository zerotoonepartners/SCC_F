import { url } from './config.js';
import axios from 'axios';
import { setEvent } from '../context/scc';

export const getData = async () => {
  try {
    const res = await axios.get(`${url}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
