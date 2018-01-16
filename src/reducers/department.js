import { GET_DEPARTMENT } from '../actionTypes';

const initialState = {
    Teachers: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_DEPARTMENT:
            return action.payload;
        default:
            return state;
    }
}