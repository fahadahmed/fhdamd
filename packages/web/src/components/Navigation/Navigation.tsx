import React from 'react';
import styled from '@emotion/styled';

function Navigation(): JSX.Element {

  const Nav = styled.div`
    display: flex;
    height: 30px;
    padding: 20px 60px;
    justify-content: space-between;
  `;

  const NavTitle = styled.div`
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: 800;
  `;

  const NavItem = styled.span`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 400;
    margin-left: 20px;
    margin-right: 20px;

    &:first-child {
      margin-left: 0px;
    }

    &:last-child {
      margin-right: 0px;
    }
  `;
  return(
    <Nav>
      <NavTitle>
        FAHAD AHMED
      </NavTitle>
      <div>
        <NavItem>Services</NavItem>
        <NavItem>Blog</NavItem>
        <NavItem>Contact</NavItem>
      </div>
    </Nav>
  )
}

export default Navigation;