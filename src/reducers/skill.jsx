import {
    SKILL_SUCCESS,
    SKILL_REQUEST,
    SKILL_FAILURE,
  } from "../actions/actionTypes";
  
  const initialState = { item: null, loading: false, error: null, id: null };
  
  export default function skillReducer(state = initialState, action) {
    switch (action.type) {
      case SKILL_REQUEST:
        const {id} = action.payload
        return { ...state, loading: true, error: null, id};
      case SKILL_FAILURE:
        const { error } = action.payload;
        return { ...state, loading: false, error };
      case SKILL_SUCCESS:
        const { item } = action.payload;
        return { ...state, item, loading: false, error: null };
      default:
        return state;
    }
  }
  