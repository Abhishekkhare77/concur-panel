import React from 'react'
import { Search, Notification, Switcher } from "@carbon/icons-react";
import {
  HeaderMenuItem,
  HeaderGlobalBar,
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem,
  HeaderContainer, Theme, Header, HeaderMenuButton, HeaderGlobalAction, HeaderName, HeaderNavigation
} from "@carbon/react";

import { useNavigate, useParams } from 'react-router-dom';
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

const DataDiscoveryLayout = (props) => {

  const navigate = useNavigate();
  const page = window.location.href;
  console.log(page);
  return (
    <div>
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <>
            <Theme theme="g100">
              <Header aria-label="IBM Platform Name">
                <HeaderMenuButton
                  aria-label="Open menu"
                  onClick={onClickSideNavExpand}
                  isActive={isSideNavExpanded}
                />
                <HeaderName href="#" prefix="Concur x">
                  Catax
                </HeaderName>
                <HeaderNavigation aria-label="Carbon Tutorial">
                  <HeaderMenuItem href="/repos">Repositories</HeaderMenuItem>
                </HeaderNavigation>
                <HeaderNavigation aria-label="Carbon Tutorial">
                  <HeaderMenuItem href="/repos">Link 1</HeaderMenuItem>
                </HeaderNavigation>
                <HeaderNavigation aria-label="Carbon Tutorial">
                  <HeaderMenuItem href="/repos">Link 2</HeaderMenuItem>
                </HeaderNavigation>
                <HeaderNavigation aria-label="Carbon Tutorial">
                  <HeaderMenuItem href="/repos">Link 3</HeaderMenuItem>
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
                    <SideNavMenuItem href="/controlcenter">Control Center</SideNavMenuItem>
                    <SideNavMenuItem href="/gallery" isActive={page === "http://localhost:3000/templates"}>Gallery</SideNavMenuItem>
                    <SideNavMenu renderIcon={Fade16} title="Setup">
                      <SideNavMenuItem isActive={page === "http://localhost:3000/sectiontemplates"} href="/workernodes">Worker Nodes</SideNavMenuItem>
                      <SideNavMenuItem isActive={page === "http://localhost:3000/sectiontemplates"} href="/datasources">Data Sources</SideNavMenuItem>
                      <SideNavMenuItem isActive={page === "http://localhost:3000/sectiontemplates"} href="/credentials">Credentials</SideNavMenuItem>
                      <SideNavMenuItem isActive={page === "http://localhost:3000/sectiontemplates"} href="/scanprofiles">Scan Profiles</SideNavMenuItem>
                      <SideNavMenuItem isActive={page === "http://localhost:3000/sectiontemplates"} href="/classifiers">Classifiers</SideNavMenuItem>
                      <SideNavMenuItem isActive={page === "http://localhost:3000/sectiontemplates"} href="/classificationprofiles">Classification Profiles</SideNavMenuItem>
                      <SideNavMenuItem isActive={page === "http://localhost:3000/sectiontemplates"} href="/automationrules">Automation Rules</SideNavMenuItem>
                    </SideNavMenu>
                    <SideNavMenu renderIcon={Fade16} title="Discovery Review">
                      <SideNavMenuItem isActive={page === "http://localhost:3000/sectiontemplates"} href="/workernodes">Terms</SideNavMenuItem>
                      <SideNavMenuItem isActive={page === "http://localhost:3000/sectiontemplates"} href="/datasources">Status Tracker</SideNavMenuItem>
                    </SideNavMenu>
                  </SideNavItems>
                </SideNav>
              </Header>
            </Theme>
          </>
        )}
      />
      <div style={{ marginLeft: "17vw", marginTop: '8vh' }}>
        {props.children}
      </div>
    </div>
  )
}

export default DataDiscoveryLayout
