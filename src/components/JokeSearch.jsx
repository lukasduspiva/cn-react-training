import React from 'react';

const JokeSearch = ({ onChange, value }) => (
    <input 
        type="text" 
        onChange={onChange}
        value={value}
    />
);

export { JokeSearch };
