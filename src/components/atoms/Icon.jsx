/** @jsx jsx */
import { jsx } from '@emotion/core'

const Icon = ({ sourceUrl, alt }) => (
    <img
        css={{
            width: '32px',
            height: '32px',
        }}
        src={sourceUrl} 
        alt={alt}
    />
);

export { Icon };
