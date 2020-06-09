import {
    FETCH_DOCUMENTS_FAILURE,
    FETCH_DOCUMENTS_REQUEST,
    FETCH_DOCUMENTS_SUCCESS,
    DELETE_DOCUMENT_FAILURE,
    DELETE_DOCUMENT_REQUEST,
    DELETE_DOCUMENT_SUCCESS,
    FETCH_DOCUMENT_FAILURE,
    FETCH_DOCUMENT_REQUEST,
    FETCH_DOCUMENT_SUCCESS,
    UPDATE_DOCUMENT_FAILURE,
    UPDATE_DOCUMENT_REQUEST,
    UPDATE_DOCUMENT_SUCCESS,
    ADD_DOCUMENT_RESOURCE_FAILURE,
    ADD_DOCUMENT_RESOURCE_REQUEST,
    ADD_DOCUMENT_RESOURCE_SUCCESS,
    DELETE_RESOURCE_FAILURE,
    DELETE_RESOURCE_REQUEST,
    DELETE_RESOURCE_SUCCESS,
    ADD_DOCUMENT_REQUEST,
    ADD_DOCUMENT_FAILURE,
    ADD_DOCUMENT_SUCCESS
} from "./document-types";

const initialState = {
    loading: false,
    error: "",
    documents: [],
};

const documentsReducer = (state = initialState, action) => {
    switch (action.type) {
        // GET ALL DOCUMENTS
        case FETCH_DOCUMENTS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_DOCUMENTS_SUCCESS:
            return {
                loading: false,
                documents: action.payload
            };
        case FETCH_DOCUMENTS_FAILURE:
            return {
                loading: false,
                error: action.payload
            };

        // GET SINGLE DOCUMENT
        case FETCH_DOCUMENT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_DOCUMENT_SUCCESS:
            return {
                loading: false,
                documents: action.payload
            };
        case FETCH_DOCUMENT_FAILURE:
            return {
                loading: false,
                error: action.payload
            };

        // ADD SINGLE DOCUMENT
        case ADD_DOCUMENT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ADD_DOCUMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                documents: action.payload,
            };
        case ADD_DOCUMENT_FAILURE:
            return {
                loading: false,
                error: action.payload
            };

        // EDIT SINGLE DOCUMENT
        case UPDATE_DOCUMENT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case UPDATE_DOCUMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                documents: action.payload,
            };
        case UPDATE_DOCUMENT_FAILURE:
            return {
                loading: false,
                error: action.payload
            };

        // DELETE SINGLE DOCUMENT
        case DELETE_DOCUMENT_REQUEST:
            return {
                ...state,
                loading: true
            };
        case DELETE_DOCUMENT_SUCCESS:
            return {
                loading: false,
                documents: state.documents.filter((document) => document._id !== action.documentId)
            };
        case DELETE_DOCUMENT_FAILURE:
            return {
                loading: false,
                error: action.payload
            };

        // === RESOURCES ===
        // ADD RESOURCE TO DOCUMENT
        case ADD_DOCUMENT_RESOURCE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ADD_DOCUMENT_RESOURCE_SUCCESS:
            return {
                ...state,
                loading: false,
                documents: action.payload
            };
        case ADD_DOCUMENT_RESOURCE_FAILURE:
            return {
                loading: false,
                error: action.payload
            };

        // DELETE RESOURCE
        case DELETE_RESOURCE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case DELETE_RESOURCE_SUCCESS:
            const updatedResources = state.documents.resources.filter((resource) => resource._id !== action.resourceId);
            return {
                loading: false,
                documents: state.documents.resources = [...updatedResources]
            };
        case DELETE_RESOURCE_FAILURE:
            return {
                loading: false,
                error: action.payload
            };

        default:
            return state;

    }
};

export default documentsReducer;
