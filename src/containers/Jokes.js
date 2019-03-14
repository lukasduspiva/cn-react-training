import React from 'react';
import { connect } from 'react-redux';

import { Joke } from '../components/Joke';
import { JokeSearch } from '../components/JokeSearch';

import { startFetchingOfJokes } from './actions';

const JokesBase = ({ jokes, fetchJokes }) => {

    const handleOnChange = (e) => {
        const { value } = e.target;
        value.length >= 3 && fetchJokes(value);
    };

    return (
        <div>
            <JokeSearch
                onChange={handleOnChange}
            />
            {jokes.map(
                joke => <Joke key={joke.id} {...joke} />  
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    jokes: state.jokes.jokes,
})

const mapDispatchToProps = ({
    fetchJokes: startFetchingOfJokes, 
});

const Jokes = connect(mapStateToProps, mapDispatchToProps)(JokesBase);

export { Jokes };