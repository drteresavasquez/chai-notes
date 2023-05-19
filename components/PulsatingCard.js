import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

import React from 'react';

export default function PulsatingCard() {
  return (
    <Card>
      <Card.Header>
        <Placeholder xs={12} size="lg" />
      </Card.Header>
      <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
          <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
      </Card.Body>
    </Card>
  );
}
