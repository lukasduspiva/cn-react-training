/** @jsx jsx */
import { jsx } from '@emotion/core'

const Input = ({ onChange, value }) => (
    <input 
        css={{
            padding: '4px',
            margin: '8px',
            fontSize: '16px',
            borderRadius: '4px',
            border: '1px solid black',
        }}
        type="text" 
        onChange={onChange}
        value={value}
    />
);

export { Input };
