import {
    JOKES_FETCH,
    JOKES_FETCH_SUCCESS,
    JOKES_FETCH_ERROR,
    JOKES_CLEAR,
} from './actionTypes';

const initialState = {
    isLoading: false,
    isError: false,
    jokes: [],
};

const reducer = (state = initialState, action) => {
    const { type } = action;
    switch(type) {
        case JOKES_FETCH:
            return {
                ...state,
                isLoading: true,
                isError: false,
                jokes: [],
            };
        case JOKES_FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                jokes: action.payload.jokes,
            };
        case JOKES_FETCH_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true,
                jokes: [],
            };
        case JOKES_CLEAR:
            return {
                ...state,
                ...initialState,
            };
        default:
            return state;
    }
};

export { reducer };
