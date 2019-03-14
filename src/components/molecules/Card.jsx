import React from 'react';

import { Text } from '../atoms/Text';
import { Icon } from '../atoms/Icon';

const Card = ({ icon, text }) => (
    <div>
        <Icon sourceUrl={icon} alt="Another Joke" />
        <Text>{text}</Text>
    </div>
);

export { Card };
