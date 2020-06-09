import {
    DELETE_DOCUMENT_FAILURE,
    DELETE_DOCUMENT_REQUEST,
    DELETE_DOCUMENT_SUCCESS,
    FETCH_DOCUMENTS_FAILURE,
    FETCH_DOCUMENTS_REQUEST,
    FETCH_DOCUMENTS_SUCCESS
} from './document-types';
import axios from 'axios';

export const fetchAllDocumentsRequest = () => ({
        type: FETCH_DOCUMENTS_REQUEST,
    }
);

export const fetchAllDocumentsSuccess = (documents) => {
    return {
        type: FETCH_DOCUMENTS_SUCCESS,
        payload: documents
    };
};

export const fetchAllDocumentsFailure = (error) => ({
        type: FETCH_DOCUMENTS_FAILURE,
        payload: error
    }
);

export const deleteDocumentsRequest = () => ({
        type: DELETE_DOCUMENT_REQUEST,
    }
);

export const deleteDocumentsSuccess = (documentId) => {
    return {
        type: DELETE_DOCUMENT_SUCCESS,
        documentId: documentId,
    };
};

export const deleteDocumentsFailure = (error) => ({
        type: DELETE_DOCUMENT_FAILURE,
        payload: error
    }
);

export const fetchAllDocuments = () => {
    return async (dispatch) => {
        let response = {};
        try {
            dispatch(fetchAllDocumentsRequest());
            response = await axios.get('http://localhost:3001/documents');
            dispatch(fetchAllDocumentsSuccess(response.data));
            return response.data;
        } catch (error) {
            dispatch(fetchAllDocumentsFailure(error.message));
        }
    };
};

export const deleteDocument = (documentId) => {
    if(!documentId) {
        throw Error('deleteDocument: Bad Request')
    }
    return async (dispatch) => {
        let response = {};
        try {
            dispatch(deleteDocumentsRequest(documentId));
            response = await axios.delete(`http://localhost:3001/documents/${documentId}`);
            dispatch(deleteDocumentsSuccess(documentId));
            return response.data;
        } catch (error) {
            dispatch(deleteDocumentsFailure(error.message));
        }
    };
};