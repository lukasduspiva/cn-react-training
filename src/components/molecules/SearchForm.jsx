import React from 'react';

import { Text } from '../atoms/Text';
import { Input } from '../atoms/Input';

const SearchForm = ({ onChange, value }) => (
    <div>
        <Text big>Search for joke</Text>
        <Input
            onChange={onChange}
            value={value}
        />
    </div>
);

export { SearchForm };
