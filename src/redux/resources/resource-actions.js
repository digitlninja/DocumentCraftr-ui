import {
    FETCH_RESOURCES_FAILURE,
    FETCH_RESOURCES_REQUEST,
    FETCH_RESOURCES_SUCCESS
} from './resource-types';
import axios from 'axios';

export const fetchAllResourcesRequest = () => ({
        type: FETCH_RESOURCES_REQUEST,
    }
);

export const fetchAllResourcesSuccess = (payload, resourceId) => {
    return {
        type: FETCH_RESOURCES_SUCCESS,
        payload: payload,
        resourceId: resourceId
    };
};

export const fetchAllResourcesFailure = (error) => ({
        type: FETCH_RESOURCES_FAILURE,
        payload: error
    }
);


export const fetchAllResources = () => {
    return async (dispatch) => {
        let response = {};
        try {
            dispatch(fetchAllResourcesRequest());
            response = await axios.get('http://localhost:3001/documents/resources/all');
            dispatch(fetchAllResourcesSuccess(response.data));
            return response.data;
        } catch (error) {
            dispatch(fetchAllResourcesFailure(error.message));
        }
    };
};

