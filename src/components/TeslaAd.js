import React from 'react';
import { Card } from 'react-bootstrap'

function TeslaAd() {
  return (
    <div className="">
    <Card style={{ width: '18rem' }}>
    <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Tesla Ad</Card.Subtitle>
    <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
    </Card>
    </div>
  );
}

export default TeslaAd;
