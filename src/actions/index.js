import { GET_DEPARTMENTS, GET_DEPARTMENT, GET_TEACHER, GET_VIDEOS, GET_STREAMS, GET_VIDEO } from '../actionTypes';
import api from '../api';

export const getDepartments = () => {
    return async (dispatch) => {
        try
        {
            const departments = await api.get('/departments');

            dispatch(initDepartments(departments.data));
        }
        catch (e)
        {
            console.log(e);
        }
    }
};

const initDepartments = (departments) => {
    return {
        type: GET_DEPARTMENTS,
        payload: departments
    }
};

export const getDepartment = (id) => {
    return async (dispatch) => {
        try
        {
            const department = await api.get(`/departments/${id}`);

            dispatch(initDepartment(department.data));
        }
        catch (e)
        {
            console.log(e);
        }
    }
};

const initDepartment = (department) => {
    return {
        type: GET_DEPARTMENT,
        payload: department
    }
};

export const getTeacher = (id) => {
    return async (dispatch) => {
        try
        {
            const teacher = await api.get(`/teachers/${id}`);
            const videos = await api.get(`/teachers/videos/${id}`);

            dispatch(initTeacher(teacher.data));
            dispatch(initVideos(videos.data));
        }
        catch (e)
        {
            console.log(e);
        }
    }
};

const initTeacher = (teacher) => {
    return {
        type: GET_TEACHER,
        payload: teacher
    }
};

const initVideos = (videos) => {
    return {
        type: GET_VIDEOS,
        payload: videos
    }
};

export const getStreams = () => {
    return async (dispatch) => {
        try
        {
            const streams = await api.get('/streams');

            console.log(streams.data);

            dispatch(initStreams(streams.data));
        }
        catch (e)
        {
            console.log(e);
        }
    };
};

const initStreams = (streams) => {
    return {
        type: GET_STREAMS,
        payload: streams
    };
};

export const getVideo = (videoId) => {
    return async (dispatch) => {
        try
        {
            const video = await api.get(`/video/${videoId}`);

            dispatch(initVideo(video.data));
        }
        catch (e)
        {
            console.log(e);
        }
    };
};

const initVideo = (video) => {
    return {
        type: GET_VIDEO,
        payload: video
    }
}