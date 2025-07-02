import React from 'react';
import { ListGroup } from 'react-bootstrap';

const teamMembers = [
  { id: 1, name: "Alice", role: "Designer" },
  { id: 2, name: "Bob", role: "Developer" },
  { id: 3, name: "Charlie", role: "Manager" },
];

function TeamList() {
  return (
    <ListGroup>
      {teamMembers.map(member => (
        <ListGroup.Item key={member.id}>
          <strong>{member.name}</strong> - {member.role}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default TeamList;
