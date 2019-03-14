import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { Joke } from '../components/Joke';
import { JokeSearch } from '../components/JokeSearch';

import { startFetchJokes, clearJokes } from './actions';
import { jokes as selectJokes } from './selectors';

// `npm install --save react-redux redux`
// same as previous example
// create custom CLEAR action to handle when filter is less than 3 characters

// Using https://api.chucknorris.io/
// Goal: app for searching database of jokes
//  - start search on 3 letters
//  - display results
//  - when clearing filer string - clearing results

const JokesBase = ({ jokes, fetchJokes, clearJokes }) => {

    const handleOnChange = (e) => {
        const { value } = e.target;
        value.length >= 3 ? fetchJokes(value) : clearJokes();
    };

    return (
        <Fragment>
            <JokeSearch 
                onChange={handleOnChange}
            />
            {jokes.map(
                joke => <Joke key={joke.id} {...joke} />
            )}
        </Fragment>
    )
};

const mapStateToProps = (state) => ({
    jokes: selectJokes(state.jokes),
});

const mapDispatchToProps = ({
    fetchJokes: startFetchJokes,
    clearJokes,
})

const Jokes = connect(mapStateToProps, mapDispatchToProps)(JokesBase);

export { Jokes };
