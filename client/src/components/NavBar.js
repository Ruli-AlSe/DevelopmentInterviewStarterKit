import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NAV_HEIGHT = 46;
const AVATAR_HEIGHT = 40;
const AVATAR_WIDTH = 40;

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-content: center;

  margin: 0px;
  padding 0px;
  height: ${NAV_HEIGHT}px;
  width: 100%;
`;

let NavText = styled.p`
  color: #4a90e2;
  padding-right: 10px;
  padding-left: 10px;
  color: white;
`;

const Badge = styled.div`
  margin: 3px;
  display: flex;
  min-width: 152px;
  align-items: center;
  overflow: hidden;
  border-radius: 7px;
  border 2px solid #4a90e2;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  background-color: #4a90e2;
`;

let SignInBadge = () => (
  <Badge>
    <Link to='/users/auth/salesloft' style={{textDecoration: 'none'}}><NavText>Login</NavText></Link>
  </Badge>
);

let UserBadge = ({user}) => (
  <Badge>
    <Link to='/' style={{textDecoration: 'none'}}><NavText>{user.name}</NavText></Link>
  </Badge>
);

let FrequencyCountBadge = () => (
  <Badge>
    <Link to='/people/freq-count' style={{textDecoration: 'none'}}><NavText>Frequency count</NavText></Link>
  </Badge>
);

let ListPeopleBadge = () => (
  <Badge>
    <Link to='/people' style={{textDecoration: 'none'}}><NavText>List people</NavText></Link>
  </Badge>
);

let NavBar = ({user}) => (
  <StyledNavBar>
    <ListPeopleBadge />
    <FrequencyCountBadge />
    {user ? <UserBadge user={user} /> : <SignInBadge />}
  </StyledNavBar>
);

export default NavBar
