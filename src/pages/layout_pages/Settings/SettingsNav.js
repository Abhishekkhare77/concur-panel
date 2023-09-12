import React from 'react'
import { Search, Notification, Switcher } from "@carbon/icons-react";
import {
    Content,
    HeaderNavigation,
    HeaderMenuItem,
    Header,
    HeaderContainer,
    HeaderMenuButton,
    HeaderName,
    HeaderGlobalBar,
    HeaderGlobalAction,
    SkipToContent,
    SideNav,
    SideNavItems,
    SideNavLink,
    SideNavMenu,
    SideNavMenuItem,
    Theme
} from "@carbon/react";
import { useNavigate } from 'react-router-dom';

const Fade16 = () => (
    <svg
        width="16"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        aria-hidden="true"
    >
        <path d="M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12 12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86 23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14 14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59 10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59 10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z" />
    </svg>
);

const SettingsNav = () => {

    const navigate = useNavigate();
    return (
        <HeaderContainer
            render={({ isSideNavExpanded, onClickSideNavExpand }) => (
                <>
                    <Theme theme="g100">
                        <Header aria-label="IBM Platform Name">
                            <SkipToContent />
                            <HeaderMenuButton
                                aria-label="Open menu"
                                onClick={onClickSideNavExpand}
                                isActive={isSideNavExpanded}
                            />
                            <HeaderName href="#" prefix="Concur x">
                                Catax
                            </HeaderName>
                            <HeaderNavigation aria-label="Carbon Tutorial">
                                <HeaderMenuItem href="/apps">Apps</HeaderMenuItem>
                            </HeaderNavigation>
                            <HeaderGlobalBar>
                                <HeaderGlobalAction aria-label="Search" onClick={() => { }}>
                                    <Search />
                                </HeaderGlobalAction>
                                <HeaderGlobalAction
                                    aria-label="Notifications"
                                    onClick={() => { }}
                                >
                                    <Notification />
                                </HeaderGlobalAction>
                                <HeaderGlobalAction
                                    aria-label="Apps Page"
                                    onClick={() => { navigate('/apps') }}
                                >
                                    <Switcher />
                                </HeaderGlobalAction>
                            </HeaderGlobalBar>
                            <SideNav
                                aria-label="Side navigation"
                                expanded={isSideNavExpanded}
                            >
                                <SideNavItems>
                                    <SideNavMenu renderIcon={Fade16} title="User Management
">
                                        <SideNavMenuItem href="#">Orginizations</SideNavMenuItem>
                                        <SideNavMenuItem aria-current="page" href="#">
                                            Depatments
                                        </SideNavMenuItem>
                                        <SideNavMenuItem href="#">Roles</SideNavMenuItem>
                                        <SideNavMenuItem href="#">Users</SideNavMenuItem>
                                        <SideNavMenuItem href="#">User Groups</SideNavMenuItem>
                                        <SideNavMenuItem href="#">User Settings</SideNavMenuItem>
                                    </SideNavMenu>
                                    <SideNavMenu renderIcon={Fade16} title="Access Management">
                                        <SideNavMenuItem href="#">Login History</SideNavMenuItem>
                                        <SideNavMenuItem href="#">Audit</SideNavMenuItem>
                                        <SideNavMenuItem href="#">Sessions Settings</SideNavMenuItem>
                                        <SideNavMenuItem href="#">Twi-Step Verification</SideNavMenuItem>
                                    </SideNavMenu>
                                    <SideNavMenu renderIcon={Fade16} title="Email & Branding">
                                        <SideNavMenuItem href="#">Email Settings</SideNavMenuItem>
                                        <SideNavMenuItem href="#">Email Templates</SideNavMenuItem>
                                    </SideNavMenu>
                                    <SideNavLink renderIcon={Fade16} href="#">
                                        Data Import
                                    </SideNavLink>
                                    <SideNavLink renderIcon={Fade16} href="/settings">
                                        Bulk Import
                                    </SideNavLink>
                                </SideNavItems>
                            </SideNav>
                        </Header>
                    </Theme>
                </>
            )}
        />
    )
}

export default SettingsNav
