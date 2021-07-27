import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from './image.jpg';

const Cart = (props) => {
const {name,id, email, catchPhrase} = props.team;
const divStyle = {
    border: "2px solid blue",
    padding: "5px",
    
}

    return (
        <div className="home-cart">
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>Team Name: {name}</Card.Title>
    <Card.Text>
 About the 1932–33 Ashes series in which the English fast bowlers employed the bodyline tactic of bowling short balls at the bodies of Australian batsmen, especially to neutralize the talent of Don Bradman.
    </Card.Text>
    <Link to={`/teamDetail/${id}`}><Button variant="primary"> Click for details</Button></Link>
  </Card.Body>
</Card>
        </div>
    );
};

export default Cart;

