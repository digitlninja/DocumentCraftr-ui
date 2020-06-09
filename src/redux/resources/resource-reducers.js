import {FETCH_RESOURCES_SUCCESS, FETCH_RESOURCES_FAILURE, FETCH_RESOURCES_REQUEST} from './resource-types';

const initialState = {
    loading: false,
    error: '',
    resources: [],
};

const resourcesReducer = (state = initialState, action) => {
    switch (action.type) {
        // GET ALL RESOURCES
        case FETCH_RESOURCES_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_RESOURCES_SUCCESS:
            return {
                loading: false,
                resources: action.payload
            };
        case FETCH_RESOURCES_FAILURE:
            return {
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default resourcesReducer;
