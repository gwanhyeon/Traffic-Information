
import { UPDATE_CURRENT_PAGE, UPDATE_START_END_PAGE } from './types';

export const updateCurrPage = (page) => (dispatch) =>{
    console.log("updateCurrPage")
    console.log("# page=>", page);
    dispatch({type : UPDATE_CURRENT_PAGE, payload : page})
}
export const updateStartEndPage = (start,end) => (dispatch) => {
    console.log("updateCurrPage")
    dispatch({type:UPDATE_START_END_PAGE, payload: {start, end} });
}