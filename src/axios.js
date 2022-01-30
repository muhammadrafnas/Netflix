import axios from 'axios'
import {baseUrl} from './Constents/constents'

const instance = axios.create({
    baseURL: baseUrl,
   
  });
  export default  instance