import {
    ADD_DOCUMENT_RESOURCE_FAILURE,
    ADD_DOCUMENT_RESOURCE_REQUEST,
    ADD_DOCUMENT_RESOURCE_SUCCESS,
    DELETE_RESOURCE_FAILURE,
    DELETE_RESOURCE_REQUEST,
    DELETE_RESOURCE_SUCCESS
} from './document-types';
import axios from 'axios';

export const addResourceRequest = () => ({
        type: ADD_DOCUMENT_RESOURCE_REQUEST,
    }
);

export const addResourceSuccess = (resource) => {
    return {
        type: ADD_DOCUMENT_RESOURCE_SUCCESS,
        payload: resource
    };
};

export const addResourceFailure = (error) => ({
        type: ADD_DOCUMENT_RESOURCE_FAILURE,
        payload: error
    }
);

export const deleteResourceRequest = () => ({
        type: DELETE_RESOURCE_REQUEST,
    }
);

export const deleteResourceSuccess = (resourceId) => {
    return {
        type: DELETE_RESOURCE_SUCCESS,
        resourceId: resourceId,
    };
};

export const deleteResourceFailure = (error) => ({
        type: DELETE_RESOURCE_FAILURE,
        payload: error
    }
);

export const addResource = (documentId, resource, options = {}) => {
    if(!documentId || !resource) {
        throw Error('addResource: Bad Request')
    }
    return async (dispatch) => {
        try {
            dispatch(addResourceRequest());
            let response = {};

            // If it's a file resource, send request with multipart header
            if(options && options.isFile) {
                response = await axios.post(`http://localhost:3001/documents/resources/${documentId}`, resource,{
                    headers: { 'Content-Type': 'multipart/form-data;'},
                });
            } else {
                // Otherwise, send request with default headers
                response = await axios.post(`http://localhost:3001/documents/resources/${documentId}`, resource);
            }
            await dispatch(addResourceSuccess(response.data));
            return response.data;
        } catch (error) {
            await dispatch(addResourceFailure(error.message));
        }
    };
};

export const deleteResource = (resourceId) => {
    if(!resourceId) {
        throw Error('deleteResource: Bad Request')
    }
    return async (dispatch) => {
        let response = {};
        try {
            dispatch(deleteResourceRequest(resourceId));
            response = await axios.delete(`http://localhost:3001/documents/resources/${resourceId}`);
            dispatch(deleteResourceSuccess(resourceId));
            return response.data;
        } catch (error) {
            dispatch(deleteResourceFailure(error.message));
        }
    };
};