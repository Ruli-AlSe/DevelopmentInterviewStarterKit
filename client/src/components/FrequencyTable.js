import React from 'react'

let Table = ({people}) => (
  <table>
    <thead>
      <tr>
        <th>Character</th>
        <th>Count</th>
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
          <td>{ person.email_address }</td>
          <td>{ index+1 + '. ' }</td>
        </tr>
      );
    })}
  </tbody>
);

let PeopleTable = ({people}) => (
  <Table people={people} />
);

export default PeopleTable
