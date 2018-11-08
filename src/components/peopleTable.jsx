import React from "react";

const PeopleTable = props => {
  const { peoples } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Office</th>
          <th>Age</th>
          <th>Start Date</th>
          <th>Sallary</th>
        </tr>
      </thead>
      <tbody>
        {peoples.map(people => (
          <tr key={people.id}>
            <td>{people.name}</td>
            <td>{people.position}</td>
            <td>{people.office}</td>
            <td>{people.age}</td>
            <td>{people.startDate}</td>
            <td>{people.salary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PeopleTable;
