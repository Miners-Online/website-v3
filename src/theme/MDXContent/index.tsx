import React from 'react';
import {MDXProvider as Provider} from '@mdx-js/react';
import type {Props} from '@theme/MDXContent';
import MDXComponents from '@theme/MDXComponents';

export default function CarbonMDXContent({children}: Props): JSX.Element {
    return <Provider components={MDXComponents}>{children}</Provider>;
}
