import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Array from './Array'


function MainCards() {
   
  return (
    <div className="container my-3">
    <Row xs={2} md={6} className="g-4">
      {Array.map((p , idx) => (
        <Col> 
          <Card style={{height:"400px",marginTop:"14px"}} >
            <Card.Img variant="top" src={p.image} />
            <Card.Body>
              <Card.Title>{p.title}</Card.Title>
              <Card.Text>
              <p style={{fontSize:"12px"}} >{p.About}</p> 
              </Card.Text>           
            </Card.Body>
            <Card.Footer>
            <Card.Link href={p.link}> 
                <Button>
                  Watch Now
                </Button>
              </Card.Link>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  );
}

export default MainCards;