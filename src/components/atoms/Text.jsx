/** @jsx jsx */
import { jsx } from '@emotion/core'

const Text = ({ children, big = false }) => (
    <p
        css={(theme) => ({
            display: 'inline',
            padding: '4px',
            margin: '8px',
            fontSize: big ? '24px' : '16px',
            color: theme.foregroundColor,
            backgroundColor: theme.backgroundColor,
        })}
    >
        {children}
    </p>
);

export { Text }; 