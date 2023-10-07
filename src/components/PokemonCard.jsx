

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PokemonCard(props) {
  return (
    <Card style={{width: '18rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',}} >
      <Card.Img variant="top" src={props.imageUrl} style={{maxHeight: 342, maxWidth: 245}} className="mx-auto" />
      <Card.Body>
        <Card.Title>
			{props.cardTitle}
		</Card.Title>
        <Card.Text>
          {props.cardDescription}
        </Card.Text>
        <Button variant="primary">
			View Card
		</Button>
      </Card.Body>
    </Card>
  );
}

export default PokemonCard;