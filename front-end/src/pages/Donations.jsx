import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

function Donations() {
  const navigate = useNavigate();

  const handleCardClick = (storyId) => {
    if (storyId === 1) {
      navigate(`stories/${storyId}`);
    }else if (storyId === 2) {
      window.location.href = "https://www.google.com/search?q=kibera+slum+photos&sca_esv=581468142&ei=L0lPZa_rEoyskdUPyoO5sAY&oq=kibera+slum&gs_lp=Egxnd3Mtd2l6LXNlcnAiC2tpYmVyYSBzbHVtKgIIBDIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYRxjWBBiwAzIKEAAYigUYsAMYQzIKEAAYigUYsAMYQzIKEAAYigUYsAMYQzIKEAAYigUYsAMYQzIQEC4YigUYyAMYsAMYQ9gBATIQEC4YigUYyAMYsAMYQ9gBATIQEC4YigUYyAMYsAMYQ9gBATIQEC4YigUYyAMYsAMYQ9gBATIWEC4YigUYxwEYrwEYyAMYsAMYQ9gBATIQEC4YigUYyAMYsAMYQ9gBATIQEC4YigUYyAMYsAMYQ9gBATIQEC4YigUYyAMYsAMYQ9gBAUjtFVAAWABwAngBkAEAmAEAoAEAqgEAuAEByAEA4gMEGAAgQYgGAZAGFLoGBggBEAEYCA&sclient=gws-wiz-serp";
    }else if (storyId === 3) {
      window.location.href = "https://www.google.com/search?q=largest+slum+in+nairobi&sca_esv=581468142&ei=Zk1PZcfRCJ6nkdUP0Imf-Aw&oq=kibera+slum+ph&gs_lp=Egxnd3Mtd2l6LXNlcnAiDmtpYmVyYSBzbHVtIHBoKgIIBjIHEAAYigUYQzICECYyAhAmMgIQJjICECYyAhAmMggQABiKBRiGAzIIEAAYigUYhgMyCBAAGIoFGIYDMggQABiKBRiGA0icN1CyBFiJCnABeACQAQCYAYoGoAGxD6oBCTMtMi4wLjEuMbgBAcgBAPgBAcICCBAAGIAEGLADwgILEAAYigUYhgMYsAPiAwQYASBBiAYBkAYE&sclient=gws-wiz-serp"
    }
  };

  const handleFormClick = () => {
    navigate("/donationsform");
  };

  // Array of objects with card information
  const cardsData = [
    {
      title: "Hope and Shine Center",
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Kibera_Nairobi_Kenya_slums_shanty_town_October_2008.jpg/300px-Kibera_Nairobi_Kenya_slums_shanty_town_October_2008.jpg",
      description:
        "The Hope and Shine Center aims to bridge the education gap in Kibera by providing cost-free access to education. High school fees and limited access to study materials often deprive many children in Kibera of a proper education. In response, the Hope and Shine Center is opening its doors to the community.",
    },
    {
      title: "Power Women Group",
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Kibera_Nairobi_Kenya_slums_shanty_town_October_2008.jpg/300px-Kibera_Nairobi_Kenya_slums_shanty_town_October_2008.jpg",
      description:
        "It is a dedicated non-profit organization with a powerful mission to transform lives and communities. With a primary focus on creating sustainable employment opportunities, empowering women, and eradicating poverty, Power Women Group has been a beacon of hope for those in need while ensuring that every young girl is empowered.",
    },
    {
      title: "Victoria's Craft Group",
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Kibera_Nairobi_Kenya_slums_shanty_town_October_2008.jpg/300px-Kibera_Nairobi_Kenya_slums_shanty_town_October_2008.jpg",
      description:
        "Victoria's Craft Group is a dynamic organization on a mission to build a greener and more sustainable future. Committed to the twin goals of employment creation and environmental stewardship, VCG provides innovative solutions to tackle pressing issues while ensuring that our environment is catered for",
    },
  ];

  return (
    <>
      <Container className="">
        <h1 className="text-3xl font-semibold text-center mb-9 text-black  ">
          Who We Partnered With:
        </h1>
        <p className="text-center py-4">
          We actively seek partnerships with organizations whose missions and
          goals revolve around creating employment opportunities, empowering
          women, eradicating poverty, and promoting recycling. These
          partnerships reflect our commitment to social responsibility,
          sustainability, and community development. By collaborating with
          like-minded entities, we aim to collectively drive positive change,
          foster economic growth, and create a more inclusive and eco-friendly
          future. Our shared values and collaborative efforts amplify our impact
          in addressing critical global challenges, ultimately leading to
          greater prosperity, gender equality, and a cleaner, more sustainable
          planet. Here are the various organizations we've partnered with to
          work on our goals:
        </p>

        <Row className="mt-4 py-8">
          {cardsData.map((card, index) => (
            <Col md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card
                  className="mb-4 p-2"
                  style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
                >
                  <Card.Img
                    variant="top"
                    src={card.imageSrc}
                    alt={card.title}
                  />
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.description}</Card.Text>
                    <br />
                    <div className="d-flex justify-content-between">
                      <a
                      href="https://www.google.com/search?q=kibera+slum&sca_esv=581468142&ei=D0lPZcKhEaThkdUPgZuRkAY&oq=kibera&gs_lp=Egxnd3Mtd2l6LXNlcnAiBmtpYmVyYSoCCAAyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGEcY1gQYsAMyChAAGIoFGLADGEMyChAAGIoFGLADGEMyChAAGIoFGLADGEMyChAAGIoFGLADGEMyDhAAGOQCGNYEGLAD2AEBMg4QABjkAhjWBBiwA9gBATIOEAAY5AIY1gQYsAPYAQEyEBAuGIoFGMgDGLADGEPYAQIyEBAuGIoFGMgDGLADGEPYAQIyEBAuGIoFGMgDGLADGEPYAQIyEBAuGIoFGMgDGLADGEPYAQJIgC1QAFgAcAF4AZABAJgBAKABAKoBALgBAcgBAOIDBBgAIEGIBgGQBhO6BgYIARABGAm6BgYIAhABGAg&sclient=gws-wiz-serp"
                      target="-blank"
                      rel="noopener noreferrer"
                      className="w-45 bg-[#027884] text-white rounded-md py-2 px-4 cursor-pointer text-decoration-none"
                      onClick={() => handleCardClick(index + 1 )}  
                      >
                        Story

                      </a>
                      
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

      <Footer />
    </>
  );
}

export default Donations;