import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, InputGroup, FormControl } from 'react-bootstrap';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 1000,
    image: 'https://via.placeholder.com/300x200',
    description: 'This is a description for Product 1.',
    rating: 4.5
  },
  {
    id: 2,
    name: 'Product 2',
    price: 2000,
    image: 'https://via.placeholder.com/300x200',
    description: 'This is a description for Product 2.',
    rating: 3.5
  },
  {
    id: 3,
    name: 'Product 3',
    price: 3000,
    image: 'https://via.placeholder.com/300x200',
    description: 'This is a description for Product 3.',
    rating: 4
  }
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <InputGroup>
            <FormControl placeholder="Search products..." />
            <InputGroup.Append>
              <Button variant="primary">Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        {products.map((product) => (
          <Col md={4} key={product.id}>
            <Card className="mb-4">
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: {product.price}</Card.Text>
                <Card.Text>Rating: {product.rating}</Card.Text>
                <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
