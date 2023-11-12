import React, { useEffect, useState } from 'react';
import DidYouKnow from './DidYouKnow';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from './Footer';

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
      <div>
      </div>
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
              In 2009, Kibera 8 slums Safari started organizing tours within Kibera. The first tours were developed in cooperation with Swedish, Danish, Dutch, etc., adoption families and the Sawadee. The enthusiastic reviews of the first tourists inspired us to go ahead and show Kibera to more and more tourists in Kenya.
              Fighting poverty in Kibera by providing quality education that unlocks successful futures for all”. Quality education is understood as an education that empowers every individual by providing the basic skills and knowledge for the future, while nurturing their personal talents and creative capabilities.
              Our mission is to promote Kibera as the city of hope. We promote Kibera as a city of hope by organizing tours and showing the mostly unseen part of Nairobi to tourists visiting Kenya. We show Kibera as it is. We visit different places with our guests to show them the positive sides of Kibera and the ways people try to improve their lives and work towards and hope for a better future.
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
              We promote Kibera as a city of hope by organizing tours and showing the mostly unseen part of Nairobi to tourists visiting Kenya. We show Kibera as it is. We visit different places with our guests to show them the positive sides of Kibera and the ways people try to improve their lives and work towards and hope for a better future.
              We will also provide new hope by (co-)funding the projects and organizations that we will visit with our tours. Since we are a community-based non-profit organization, all our ‘profits’ go to Kibera-based projects to improve the lives of the children. Funding also supports the operations of our own Hope and Shine Center. Furthermore, the tours will provide employment for the people of Kibera.
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
      <Footer/>
    </motion.div>
  );
}

export default LandingPage;





