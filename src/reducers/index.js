import { combineReducers } from 'redux';

import departments from './departments';
import department from './department';
import teacher from './teacher';
import streams from './streams';
import video from './video';
import page from './page';

export default combineReducers({
    departments,
    department,
    teacher,
    streams,
    video,
    page
});