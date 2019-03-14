import React from 'react';

const JokeSearch = ({ value, onChange }) => (
    <input
        type="text"
        value={value}
        onChange={onChange}
    />
);

export { JokeSearch };
