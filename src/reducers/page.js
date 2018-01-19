import { GET_PAGE } from '../actionTypes';

const initialState = {};

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_PAGE:
            return action.payload;
        default:
            return state;
    }
}