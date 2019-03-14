

const JOKES_FETCH = 'JOKES.FETCH';
const JOKES_FETCH_SUCCESS = 'JOKES.FETCH.SUCCESS';
const JOKES_FETCH_ERROR = 'JOKES.FETCH.ERROR';

const fetchJokes = () => ({
    type: JOKES_FETCH,
});

const fetchJokesSuccess = (jokes) => ({
    type: JOKES_FETCH_SUCCESS,
    payload: { jokes },
});

const fetchJokesError = () => ({
    type: JOKES_FETCH_ERROR,
});

const startFetchingOfJokes = (filter) => {
    return (dispatch) => {
        dispatch(fetchJokes());
        fetch(`https://api.chucknorris.io/jokes/search?query=${filter}`)
        .then(response => response.json())
        .then(json => dispatch(fetchJokesSuccess(json.result)))
        .catch(() => dispatch(fetchJokesError()));
    }
};

export {
    JOKES_FETCH,
    JOKES_FETCH_SUCCESS,
    JOKES_FETCH_ERROR,
    fetchJokes,
    fetchJokesSuccess,
    fetchJokesError,
    startFetchingOfJokes,
};
