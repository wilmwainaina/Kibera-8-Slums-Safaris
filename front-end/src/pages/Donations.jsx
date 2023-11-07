import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';
import DonationForm from './DonationForm';

function Donations() {
  const navigate = useNavigate();

  const handleformsclick = () => {
    navigate('./Form');
  }
  ;

  return (
    <div className='py-24'>
      <div className='text-center text-xl '>
      <h1 className='text-3xl font-semibold'>Who We Patenered With:</h1>
      <p className='m-4'>
        Here below are the various organizations we as a group have patnered with to work with us on our goals;
      </p>
       </div>

      <div className=''>
      <div className="mt-5 w-80 pl-20">
        <Row className='flex '>
          {[1, 2, 3, 4].map((index) => (
            <Col md={6} className="mb-4 p-14" key={index}>
              <Card className='border'>
                <Card.Img variant="top" src="data:image/jpeg;base64,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" alt="Card Image" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                  <div className='flex'>
                    <Button
                     variant="primary"
                      className='w-20 bg-[#027884] text-white border-none rounded-md py-2 px-4 mt-4 cursor-pointer m-4'
                      >
                      story
                    </Button>
                    <Button
                      variant="primary"
                      className='w-20 bg-[#027884] text-white border-none rounded-md py-2 px-4 mt-4 cursor-pointer m-4'
                      onClick={handleformsclick}>
                      donate
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
    
          </div>
  );
}

export default Donations;

