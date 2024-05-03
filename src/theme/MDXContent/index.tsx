import React from 'react';
import {MDXProvider as Provider} from '@mdx-js/react';
import type {Props} from '@theme/MDXContent';
import defaultComponents from 'gatsby-theme-carbon/src/components/MDXProvider/defaultComponents';

export default function CarbonMDXContent({children}: Props): JSX.Element {
    return <Provider components={defaultComponents}>{children}</Provider>;
}
