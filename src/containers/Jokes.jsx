import React, { useState, useEffect } from 'react';

import { Joke } from '../components/Joke';
import { JokeSearch } from '../components/JokeSearch';

// Using https://api.chucknorris.io/
// Goal: app for searching database of jokes
//  - start search on 3 letters
//  - display results
//  - when clearing filer string - clearing results

const Jokes = () => {

    const [filter, setFilter ] = useState(''); 
    const [jokes, setJokes ] = useState([]); 

    const handleUsersChange = jokes => setJokes(jokes);
    const handleInputChange = e => setFilter(e.target.value);

    useEffect(() => {
        if (filter.length >= 3) {
            fetch(`https://api.chucknorris.io/jokes/search?query=${filter}`)
            .then(response => response.json())
            .then(myJson => handleUsersChange(myJson.result))
            .catch(error => console.log(error));
        }
        if (filter.length < 3) {
            handleUsersChange([]);
        }
    }, [filter]);

    return (
        <div>
            <JokeSearch 
                onChange={handleInputChange}
                value={filter}
            />
            {jokes.map(
                joke => <Joke key={joke.id} {...joke} />
            )}
        </div>
    )
};

export { Jokes };
