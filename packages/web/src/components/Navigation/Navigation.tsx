import React, {useContext} from 'react';
import styled from '@emotion/styled';

import {AppContext} from '../AppProvider/AppContext';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

function Navigation(): JSX.Element {

  const {theme, toggleTheme} = useContext(AppContext);

  const Nav = styled.div`
    display: flex;
    height: 30px;
    padding: 20px 60px;
    justify-content: space-between;
    background: ${theme === 'light' ? "#FFFFFF" : "#122632"};
    
    @media (max-width: 576px) {
      padding: 20px;
      align-items: center;
    }
  `;

  const NavTitle = styled.div`
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: 800;
    color: ${theme === 'light' ? "#000000" : "#EC7D8A"};
  `;

  const NavItem = styled.span`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 400;
    margin-left: 20px;
    margin-right: 20px;
    color: ${theme === 'light' ? "#000000" : "#EC7D8A"};
    &:first-of-type {
      margin-left: 0px;
    }

    &:last-child {
      margin-right: 0px;
    }
  `;

  const Navigation = styled.div`
    display: block;
    @media (max-width: 576px) {
      display: none;
    }
  `;

  return(
    <Nav>
      <NavTitle>
        FAHAD AHMED
      </NavTitle>
      <div style={{display: "grid"}}>
        <ToggleSwitch value={theme} handleToggle={toggleTheme} />
        <Navigation>
          <NavItem>Services</NavItem>
          <NavItem>Blog</NavItem>
          <NavItem>Contact</NavItem>
        </Navigation>
      </div>
    </Nav>
  )
}

export default Navigation;