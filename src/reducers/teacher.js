import { GET_TEACHER,  GET_VIDEOS } from '../actionTypes';

const initialState = {
    info: {},
    videos: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_TEACHER:
            return Object.assign({}, state, { info: action.payload });
        case GET_VIDEOS:
            return Object.assign({}, state, { videos: action.payload });
        default:
            return state;
    }
}