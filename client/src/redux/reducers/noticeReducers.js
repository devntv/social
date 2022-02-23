import { TYPES } from "../actions/noticeActions";

const initialState = {};

const noticeReducers = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.NOTICE:
      return action.payload;

    default:
      return state;
  }
};

export default noticeReducers;
