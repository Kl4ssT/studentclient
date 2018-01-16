import { GET_STREAMS } from '../actionTypes';

const initialState = [];

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_STREAMS:
            return action.payload;
        default:
            return state;
    }
}