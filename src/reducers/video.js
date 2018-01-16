import { GET_VIDEO } from '../actionTypes';

const initialState = [];

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_VIDEO:
            return action.payload;
        default:
            return state;
    }
}