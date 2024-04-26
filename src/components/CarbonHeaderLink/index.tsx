import useBaseUrl from '@docusaurus/useBaseUrl';
import isInternalUrl from '@docusaurus/isInternalUrl';
import IconExternalLink from '@theme/Icon/ExternalLink';
import type { Props } from '@theme/NavbarItem/NavbarNavLink';

import {
    HeaderMenuItem,
} from '@carbon/react';

export default function CarbonHeaderLink ({
    activeBasePath,
    activeBaseRegex,
    to,
    href,
    label,
    html,
    isDropdownLink,
    prependBaseUrlToHref,
    ...props
}: Props) {
    // TODO all this seems hacky
    // {to: 'version'} should probably be forbidden, in favor of {to: '/version'}
    const toUrl = useBaseUrl(to);
    const activeBaseUrl = useBaseUrl(activeBasePath);
    const normalizedHref = useBaseUrl(href, {forcePrependBaseUrl: true});
    const isExternalLink = label && href && !isInternalUrl(href);

  // Link content is set through html XOR label
  const linkContentProps = html
    ? {dangerouslySetInnerHTML: {__html: html}}
    : {
        children: (
            <>
                {label}
                {isExternalLink && (
                    <IconExternalLink
                        {...(isDropdownLink && {width: 12, height: 12})}
                    />
                )}
            </>
        ),
    };

    // return (
    //     <HeaderMenuItem href={item.href}>
    //         {item.children}
    //     </HeaderMenuItem>
    // )

    if (href) {
        return (
            <HeaderMenuItem
                href={prependBaseUrlToHref ? normalizedHref : href}              
            >
                {linkContentProps.children}
            </HeaderMenuItem>
        );
    }

    return (
        <HeaderMenuItem
            href={toUrl}              
        >
            {linkContentProps.children}
        </HeaderMenuItem>
    );
}
