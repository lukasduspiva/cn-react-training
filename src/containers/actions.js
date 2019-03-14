import {
    JOKES_FETCH,
    JOKES_FETCH_SUCCESS,
    JOKES_FETCH_ERROR,
    JOKES_CLEAR,
} from './actionTypes';

const fetchJokes = () => ({ type: JOKES_FETCH });

const fetchJokesSuccess = (jokes) => ({ type: JOKES_FETCH_SUCCESS, payload: { jokes } });

const fetchJokesError = () => ({ type: JOKES_FETCH_ERROR });

const clearJokes = () => ({ type: JOKES_CLEAR });

const startFetchJokes = (filter) => {
    return (dispatch) => {
        dispatch(fetchJokes());
        fetch(`https://api.chucknorris.io/jokes/search?query=${filter}`)
        .then(response => response.json())
        .then(myJson => dispatch(fetchJokesSuccess(myJson.result)))
        .catch(() => dispatch(fetchJokesError(fetchJokesError)));
    }
};

export {
    fetchJokes,
    fetchJokesSuccess,
    fetchJokesError,
    clearJokes,
    startFetchJokes,
};
