import axios from 'axios';
import { get } from 'https';
const initialState = {};

//ACTION TYPES:
const GOT_CANDIES = 'GOT_CANDIES';

//ACTION CREATOR:
const gotCandies = candies => ({
  type: GOT_CANDIES,
  candies,
});

//THUNK CREATOR
export const getCandies = () => {
  //THUNK
  return async dispatch => {
    const { data } = await axios.get('/api/candies');
    dispatch(gotCandies(data));
  };
};
const candiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CANDIES:
        return {
            ...state,
            candies: action.candies
        }
    default:
      return state;
  }
};

export default candiesReducer;
