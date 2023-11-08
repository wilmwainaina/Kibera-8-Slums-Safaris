


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

function Donations() {
  const navigate = useNavigate();

  const handleFormClick = () => {
    navigate('/donationsform');
  };

  return (
    <Container className="py-5">
      <h1 className="text-3xl font-semibold text-center mb-9 text-black mt-24">Who We Partnered With:</h1>
      <p className="text-center">
        Here are the various organizations we've partnered with to work on our goals.
      </p>

      <Row className="mt-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
          <Col md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="mb-4 p-2" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <Card.Img
                  variant="top"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Kibera_Nairobi_Kenya_slums_shanty_town_October_2008.jpg/300px-Kibera_Nairobi_Kenya_slums_shanty_town_October_2008.jpg"
                  alt="Card Image"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button
                      variant="primary"
                      className="w-45 bg-[#027884] text-white rounded-md py-2 px-4 cursor-pointer"
                    >
                      Story
                    </Button>
                    <Button
                      variant="primary"
                      className="w-45 bg-[#027884] text-white rounded-md py-2 px-4 cursor-pointer"
                      onClick={handleFormClick}
                    >
                      Donate
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Donations;


