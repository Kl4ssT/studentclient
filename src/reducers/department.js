import {GET_DEPARTMENT, GET_TEACHERS} from '../actionTypes';

const initialState = {
    Teachers: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_DEPARTMENT:
            return Object.assign({}, action.payload, { Teachers: [] });
        case GET_TEACHERS:
            return Object.assign({}, state, { Teachers: action.payload });
        default:
            return state;
    }
}