import React, { useState, useEffect } from 'react';

import { Joke } from '../components/Joke';
import { JokeSearch } from '../components/JokeSearch';

const Jokes = () => {

    const [ jokes, setJokes ] = useState([]);
    const [ filter, setFilter ] = useState('');

    const handleJokesChange = jokes => setJokes(jokes);
    const handleFilterChange = e => setFilter(e.target.value);

    useEffect(() => {
        if (filter.length > 2) {
            fetch(`https://api.chucknorris.io/jokes/search?query=${filter}`)
            .then(response => response.json())
            .then(json => handleJokesChange(json.result));
        } else {
            handleJokesChange([]);
        }
    }, [filter]);
    
    return (
        <div>
            <JokeSearch
                value={filter}
                onChange={handleFilterChange}
            />
            {jokes.map(
                joke => <Joke key={joke.id} {...joke} />  
            )}
        </div>
    );
}; 

export { Jokes };