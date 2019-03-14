import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { Card } from '../components/molecules/Card';
import { SearchForm } from '../components/molecules/SearchForm';

import { startFetchJokes, clearJokes } from './actions';
import { jokes as selectJokes } from './selectors';

// 'npm install --save emotion @emotion/core emotion-theming styled-system'
// move to atoms - Text, Input, Icon
// move to molecules - Card, SearchFrom
// try prop - fontSize of Text
// try ThemeProvider

// `npm install --save react-redux redux redux-thunk`
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
            <SearchForm 
                onChange={handleOnChange}
            />
            {jokes.map(
                joke => <Card key={joke.id} text={joke.value} icon={joke.icon_url} />
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
