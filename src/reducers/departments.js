import { GET_DEPARTMENTS } from '../actionTypes';

const initialState = [];

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_DEPARTMENTS:
            return action.payload;
        default:
            return state;
    }
}