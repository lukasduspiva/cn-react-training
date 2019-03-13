import React from 'react';

const Joke = ({ value, icon_url }) => (
    <div>
        <img
            src={icon_url} 
            alt="Joke" 
            width="32px"
            height="32px"
        />
        <blockquote>{value}</blockquote>
    </div>
);

export { Joke };
