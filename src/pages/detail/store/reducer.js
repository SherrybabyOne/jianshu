import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS ({
  title:'123',
  imgUrl:'',
  content:'123'
})

export default ( state = defaultState,action ) => {
  if(action.type === actionTypes.CHANGE_DETAIL){
    return state.merge({
      title:action.title,
      imgUrl:action.imgUrl,
      content:action.content
    })
  }
  return state;
}