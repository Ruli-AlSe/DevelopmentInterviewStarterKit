import React from 'react'
import styled from 'styled-components'
import ConnectedNavBar from '../containers/ConnectedNavBar'
import ConnectedPeople from '../containers/ConnectedPeople'

const Page = styled.div`
  display: grid;
  grid-template 46px 1fr / 1fr;
  height: 100%;
  width: 100%;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PeopleTable = ConnectedPeople[0];

export const PeoplePage = () => (
  <Page>
    <ConnectedNavBar />
    <FlexBox>
      <PeopleTable />
    </FlexBox>
  </Page>
);
