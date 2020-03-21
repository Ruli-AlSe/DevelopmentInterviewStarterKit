import React from 'react'
import styled from 'styled-components'
import ConnectedNavBar from '../containers/ConnectedNavBar'

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

let Table = ({people}) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Job</th>
      </tr>
    </thead>
    {people ? <TableBody people={people} /> : <tbody />}
  </table>
);

let TableBody = ({people}) => (
  <tbody>
    {people.map(function(person, index) {
      return (
        <tr key={index}>
          <td><strong>{ index+1 + '. ' }</strong>{ person.display_name }</td>
          <td>{ person.email_address }</td>
          <td>{ person.title }</td>
        </tr>
      );
    })}
  </tbody>
);

let PeoplePage = ({people}) => (
  <Page>
    <ConnectedNavBar />
    <FlexBox>
      <Table people={people} />
    </FlexBox>
  </Page>
);

export default PeoplePage
