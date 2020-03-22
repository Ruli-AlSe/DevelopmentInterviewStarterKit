import React from 'react'

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

let PeopleTable = ({people}) => (
  <Table people={people} />
);

export default PeopleTable
