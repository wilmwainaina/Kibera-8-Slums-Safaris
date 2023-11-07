import React, { useEffect, useState } from 'react';
import DidYouKnow from './DidYouKnow';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function LandingPage() {
  const [isNavActive, setNavActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 1) {
        setNavActive(true);
      } else {
        setNavActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigate = useNavigate();

  const handleaccomplishmentsclick = () => {
    navigate('/aboutus');
  };

  const handlewhatwedoclick = () => {
    navigate('/whatwedo');
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <section id="roto" className={`w-11/12 ml-20 mt-20 ${isNavActive ? 'active' : ''}`}>
        <div id="rotoTransition" className="carousel slide carousel-fade  " data-bs-ride="carousel" data-bs-interval="5000" data-bs-pause="false">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="slide">
                <img
                  src="https://www.shutterstock.com/image-photo/nairobi-kenya-august-2019-kibera-600w-1914202510.jpg"
                  alt="slide-1"
                  className="mainImage"
                />
                <div className="roundOuter">
                  <img
                    src="https://www.shutterstock.com/image-photo/nairobi-kenya-august-2019-kibera-600w-1914202510.jpg"
                  />
                </div>
                <div className="roundInner">
                  <img
                    src="https://www.shutterstock.com/image-photo/nairobi-kenya-august-2019-kibera-600w-1914202510.jpg"
                    alt="slide-1"
                  />
                </div>
                <div className="slideText">
                  <h1 className="animate__animated animate__fadeInUp font-bold text-white">KIBERA 8 SLUM SAFARI</h1>
                  <p className="animate__animated animate__fadeInUp font-medium text-white">KENYA</p>
                  <div className="buttonNav animate__animated animate__fadeInDown">
                    <button type="button" data-bs-target="#rotoTransition" data-bs-slide="prev">
                      <i className="fa-solid fa-arrow-left-long"></i>
                    </button>
                    <span></span>
                    <button type="button" data-bs-target="#rotoTransition" data-bs-slide="next">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="slide">
                <img
                  src="https://www.shutterstock.com/image-photo/nairobi-kenya-august-2019-kibera-600w-1914202510.jpg"
                  alt="slide-1"
                  className="mainImage"
                />
                <div className="roundOuter">
                  <img
                    src="https://www.shutterstock.com/image-photo/nairobi-kenya-august-2019-kibera-600w-1914202510.jpg"
                    alt="slide-1"
                  />
                </div>
                <div className="roundInner">
                  <img
                    src="https://www.shutterstock.com/image-photo/nairobi-kenya-august-2019-kibera-600w-1914202510.jpg"
                    alt="slide-1"
                  />
                </div>
                <div className="slideText">
                  <h1 className="animate__animated animate__fadeInUp font-bold text-white">Eradicating Poverty </h1>
                  <p className="animate__animated animate__fadeInUp font-medium text-white">With Love And Care</p>
                  <div className="buttonNav animate__animated animate__fadeInDown">
                    <button type="button" data-bs-target="#rotoTransition" data-bs-slide="prev">
                      <i className="fa-solid fa-arrow-left-long"></i>
                    </button>
                    <span></span>
                    <button type="button" data-bs-target="#rotoTransition" data-bs-slide="next">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container bg-gray-100 shadow-lg py-24 px-14">
          <div className="row">
            <div className="col-md-6">
              <h2 className="text-xl font-semibold">Why Kibera 8 Slums Safaris?</h2>
              <p className="longparagraph text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil officia alias earum deserunt enim molestias
                voluptas placeat sint odit numquam mollitia, rerum qui laboriosam perspiciatis fugiat aspernatur? Commodi
                illum nostrum provident libero impedit voluptates aperiam quaerat aspernatur maxime laborum beatae labore
                numquam praesentium necessitatibus cupiditate saepe neque, aliquam adipisci! Quasi a tenetur magnam
                dignissimos similique temporibus, inventore tempora suscipit, maiores ex libero consequatur itaque rerum
                voluptate porro fugit neque in maxime vero aliquid. Dolore magnam temporibus iusto sapiente blanditiis,
                autem ea possimus nesciunt et quis aliquid a sed dolor illo neque nemo odit quae deserunt accusamus dolores
                debitis est libero.
              </p>
              <button type="button" className="btn btn-primary btn-lg learnmore mt-4" onClick={handleaccomplishmentsclick} style={{ backgroundColor: '#027884' }}>
                KNOW MORE
              </button>
            </div>
            <div className="col-md-6 d-grid">
              <img src="https://www.wearewater.org/images/340599/default.jpg" alt="image" />
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="container bg-gray-100 shadow-lg py-16 px-14">
          <div className="row">
            <div className="col-md-6 d-grid">
              <img src="https://www.wearewater.org/images/340599/default.jpg" alt="image" />
            </div>
            <div className="col-md-6 hidder">
              <h2 className="text-xl font-semibold">What Do we Do?</h2>
              <p className="longparagraph text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil officia alias earum deserunt enim molestias
                voluptas placeat sint odit numquam mollitia, rerum qui laboriosam perspiciatis fugiat aspernatur? Commodi
                illum nostrum provident libero impedit voluptates aperiam quaerat aspernatur maxime laborum beatae labore
                numquam praesentium necessitatibus cupiditate saepe neque, aliquam adipisci! Quasi a tenetur magnam
                dignissimos similique temporibus, inventore tempora suscipit, maiores ex libero consequatur itaque rerum
                voluptate porro fugit neque in maxime vero aliquid. Dolore magnam temporibus iusto sapiente blanditiis,
                autem ea possimus nesciunt et quis aliquid a sed dolor illo neque nemo odit quae deserunt accusamus dolores
                debitis est libero.
              </p>
              <button type="button" className="btn btn-primary btn-lg learnmore mt-4" onClick={handlewhatwedoclick} style={{ backgroundColor: '#027884' }}>
                KNOW MORE
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="ml-24 mt-4">
        <DidYouKnow />
      </div>
    </motion.div>
  );
}

<<<<<<< HEAD
export default  LandingPage;
=======
export default LandingPage;
>>>>>>> 86e1329d114f2d7e827c5caec7c4c5ebe02b6eda





