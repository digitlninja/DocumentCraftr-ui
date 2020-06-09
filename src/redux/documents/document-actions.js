import {
    FETCH_DOCUMENT_FAILURE,
    FETCH_DOCUMENT_REQUEST,
    FETCH_DOCUMENT_SUCCESS,
    UPDATE_DOCUMENT_FAILURE,
    UPDATE_DOCUMENT_REQUEST,
    UPDATE_DOCUMENT_SUCCESS,
    ADD_DOCUMENT_SUCCESS,
    ADD_DOCUMENT_FAILURE,
    ADD_DOCUMENT_REQUEST
} from './document-types';
import axios from 'axios';

export const fetchDocumentRequest = () => ({
        type: FETCH_DOCUMENT_REQUEST,
    }
);

export const fetchDocumentSuccess = (payload, documentId) => {
    return {
        type: FETCH_DOCUMENT_SUCCESS,
        payload: payload,
        documentId: documentId
    };
};

export const fetchDocumentFailure = (error) => ({
        type: FETCH_DOCUMENT_FAILURE,
        payload: error
    }
);


export const addDocumentRequest = () => ({
        type: ADD_DOCUMENT_REQUEST,
    }
);

export const addDocumentSuccess = (document) => {
    return {
        type: ADD_DOCUMENT_SUCCESS,
        payload: document
    };
};

export const addDocumentFailure = (error) => ({
        type: ADD_DOCUMENT_FAILURE,
        payload: error
    }
);


export const updateDocumentRequest = () => ({
        type: UPDATE_DOCUMENT_REQUEST,
    }
);

export const updateDocumentSuccess = (document) => {
    return {
        type: UPDATE_DOCUMENT_SUCCESS,
        payload: document
    };
};

export const updateDocumentFailure = (error) => ({
        type: UPDATE_DOCUMENT_FAILURE,
        payload: error
    }
);

export const fetchDocument = (documentId) => {
    return async (dispatch) => {
        let response = {};
        try {
            dispatch(fetchDocumentRequest());
            response = await axios.get(`http://localhost:3001/documents/${documentId}`);
            dispatch(fetchDocumentSuccess(response.data, documentId));
            return response.data;
        } catch (error) {
            dispatch(fetchDocumentFailure(error.message));
        }
    };
};

export const addDocument = (document) => {
    return async (dispatch) => {
        let response = {};
        try {
            dispatch(addDocumentRequest());
            response = await axios.post(`http://localhost:3001/documents/`, document);
            dispatch(addDocumentSuccess(response.data));
            return response.data;
        } catch (error) {
            dispatch(addDocumentFailure(error.message));
        }
    };


};export const updateDocument = (document) => {
    return async (dispatch) => {
        let response = {};
        try {
            dispatch(updateDocumentRequest());
            response = await axios.put(`http://localhost:3001/documents/${document._id}`, document);
            dispatch(updateDocumentSuccess(response.data));
            return response.data;
        } catch (error) {
            dispatch(updateDocumentFailure(error.message));
        }
    };
};