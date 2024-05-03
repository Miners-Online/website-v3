import { useThemeConfig } from '@docusaurus/theme-common';
import { type Props as NavbarItemConfig } from '@theme/NavbarItem';
import { Switcher, Notification, UserAvatar } from '@carbon/icons-react';
import useBaseUrl from '@docusaurus/useBaseUrl';

import {
    Header,
    HeaderContainer,
    HeaderName,
    HeaderNavigation,
    HeaderMenuButton,
    HeaderGlobalBar,
    HeaderGlobalAction,
    SkipToContent,
    SideNav,
    SideNavItems,
    HeaderSideNavItems,
    Theme,
} from '@carbon/react';
import CarbonHeaderLink from '../CarbonHeaderLink';

function useNavbarItems() {
    // TODO temporary casting until ThemeConfig type is improved
    return useThemeConfig().navbar.items as NavbarItemConfig[];
}

export default function CarbonHeader () {
    const items = useNavbarItems();
    const {
        navbar: {title: navbarTitle, logo},
    } = useThemeConfig();

    const logoLink = useBaseUrl(logo?.href || '/');

    return (
        <Theme theme='g100'>
            <HeaderContainer
                render={({ isSideNavExpanded, onClickSideNavExpand }) => (
                <Header aria-label={navbarTitle}>
                    <SkipToContent />
                    <HeaderMenuButton
                        aria-label="Open menu"
                        onClick={onClickSideNavExpand}
                        isActive={isSideNavExpanded}
                    />
                    <HeaderName href={logoLink} prefix="">
                    {navbarTitle}
                    </HeaderName>
                    <HeaderNavigation aria-label={navbarTitle}>
                        {items.map((item, i) => (
                            <CarbonHeaderLink {...item}/>
                        ))}
                    </HeaderNavigation>
                    <SideNav
                        aria-label="Side navigation"
                        expanded={isSideNavExpanded}
                        isPersistent={false}
                    >
                        <SideNavItems>
                            <HeaderSideNavItems>
                                {items.map((item, i) => (
                                    <CarbonHeaderLink {...item}/>
                                ))}
                            </HeaderSideNavItems>
                        </SideNavItems>
                    </SideNav>
                    <HeaderGlobalBar>
                    <HeaderGlobalAction aria-label="Notifications" tooltipAlignment="center">
                        <Notification size={20} />
                    </HeaderGlobalAction>
                    <HeaderGlobalAction aria-label="User Avatar" tooltipAlignment="center">
                        <UserAvatar size={20} />
                    </HeaderGlobalAction>
                    <HeaderGlobalAction aria-label="App Switcher" tooltipAlignment="end">
                        <Switcher size={20} />
                    </HeaderGlobalAction>
                    </HeaderGlobalBar>
                </Header>
                )}
            />
        </Theme>
    )
}
