import * as actionTypes from './actionTypes.js';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
  type:actionTypes.SEARCH_FOCUS
});
export const mouseEnter = () => ({
  type:actionTypes.MOUSE_ENTER
});
export const mouseLeave = () => ({
  type:actionTypes.MOUSE_LEAVE
});
export const changePage = (page) => ({
  type:actionTypes.CHANGE_PAGE,
  page
});
export const searchBlur = ()=>({
  type:actionTypes.SEARCH_BLUR
});
export const getList = () => {
  return (dispath) => {
    axios.get('/api/headerList.json').then( (res)=>{
      const data = res.data;
      dispath(changeList(data.data));
    }).catch( ()=> {
      console.log('error');
    })
  }
};