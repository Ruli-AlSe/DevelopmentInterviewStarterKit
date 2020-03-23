import React from 'react'

let Table = ({person}) => (
  <table>
    <caption><strong>Email: { person.email_address }</strong></caption>
    <thead>
      <tr>
        <th>Character</th>
        <th>Count</th>
      </tr>
    </thead>
    {person ? <TableBody frequency={getFrequency(person.email_address)} /> : <div>No Data</div>}
  </table>
);

function getFrequency(email) {
  var freq = {};
  for (var i=0; i<email.length; i++) {
    var character = email.charAt(i);
    if (freq[character]) {
        freq[character]++;
    } else {
        freq[character] = 1;
    }
  }

  return sortFrequency(freq);
};

function sortFrequency(obj) {
  return Object.entries(obj).sort(function (a, b) {
    return b[1] - a[1]
  });
}

let TableBody = ({frequency}) => (
  <tbody>
    {frequency.map(function (elem, index) {
      return (
        <tr key={ index }>
          <td>{ elem[0] }</td>
          <td>{ elem[1] }</td>
        </tr>
      );
    })}
  </tbody>
);

let TableList = ({people}) => (
  <div>
    {people.map(function(person, index) {
      return (
        <Table person={person} key={index}/>
      );
    })}
  </div>
);

let PeopleTable = ({people}) => (
  people ? <TableList people={people} /> : <div />
);

export default PeopleTable
