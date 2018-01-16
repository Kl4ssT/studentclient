import { combineReducers } from 'redux';

import departments from './departments';
import department from './department';
import teacher from './teacher';
import streams from './streams';
import video from './video';

export default combineReducers({
    departments,
    department,
    teacher,
    streams,
    video
});