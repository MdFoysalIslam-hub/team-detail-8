import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from './images.jpg';
import img2 from './souuthern-stars.jpg';



const TeamDetail = () => {
const {id} = useParams();

    const [team, setTeam] = useState({});
   
    useEffect(()=> {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data =>setTeam(data) )
    },)
    const {name, email, city, username, } = team
    const [showImg, setShowImg]=useState()

    if (showImg === true) {return (<Card.Img variant="top" src={img} Relode/> 
    
    
    )}
    else if (showImg === false) {return (<Card.Img variant="top" src={img2} />)}
    return (
        <div>
 <Button onClick={()=> setShowImg(true)}>Male Team</Button>
    <Button onClick={()=> setShowImg(false)}>Female Team</Button>
            <Card style={{ width: '58rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>Team Title {name}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.{username}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio{email}</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in{city}</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
  </Card.Body>
</Card>

        </div>
    );
};

export default TeamDetail;

