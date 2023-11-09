import React from "react";
import OurCoreValues from "./OurCoreValues";
import Footer from "./Footer";

function WhatDoWeDo() {
  return (
    <div>
      <div className=" relative mt-20 w-4/5 ml-52 ">
        <section className="light">
          <div className="container py-2">
            <div className="h1 text-center text-dark" id="pageHeaderTitle">
              WHAT DO WE DO?
            </div>

            <article className="postcard light blue">
              <div className="postcard__text t-dark">
                <h1 className="postcard__title blue">
                  <a href="#">What do we do</a>
                </h1>
                <div className="postcard__subtitle small">
                  <time dateTime="2020-05-25 12:00:00">
                    {/* <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020 */}
                  </time>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  At our core, we are a purpose-driven organization committed to
                  delivering exceptional customer experiences while upholding
                  the values of our community, culture, and environment. We
                  understand that travel is more than just a journey; it's about
                  creating lasting memories and meaningful connections. To
                  achieve this, we offer a wide range of travel services
                  designed to fulfill the desires and goals of our clients. We
                  curate unforgettable experiences, ensuring that every journey
                  is not just a trip but a transformative adventure. Whether
                  it's exploring diverse cultures, enjoying breathtaking
                  landscapes, or embarking on thrilling adventures, we provide
                  tailored solutions that resonate with the unique aspirations
                  of each traveler.
                </div>
                <a className="postcard__img_link" href="#"></a>
              </div>
              <img
                className="postcard__img"
                src="https://www.shutterstock.com/image-photo/nairobi-kenya-august-2019-kibera-600w-1914202510.jpg"
                alt="Image Title"
              />
            </article>
          </div>
        </section>
        <section className="light">
          <div className="container py-2">
            <article className="postcard light blue">
              <div className="postcard__text t-dark">
                <h1 className="postcard__title blue">
                  <a href="#">What do we do</a>
                </h1>
                <div className="postcard__subtitle small">
                  <time dateTime="2020-05-25 12:00:00">
                    {/* <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020 */}
                  </time>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  Our vision is to empower our clients to live their dreams and
                  make their travel aspirations a reality. We achieve this by
                  offering a comprehensive array of services that cater to all
                  aspects of their journeys. We are responsive to the
                  ever-evolving needs of our clients, ensuring flexibility and
                  adaptability in all facets of our service. From meticulously
                  planned itineraries to spontaneous getaways, we create
                  opportunities for individuals and groups to explore the world
                  with confidence. By combining our purpose-driven approach with
                  our commitment to turning visions into cherished experiences,
                  we play a vital role in the travel industry, making travel
                  dreams come true for everyone we serve.
                </div>
                <a className="postcard__img_link" href="#"></a>
              </div>
              <img
                className="postcard__img"
                src="https://www.shutterstock.com/image-photo/nairobi-kenya-august-2019-kibera-600w-1914202510.jpg"
                alt="Image Title"
              />
            </article>
          </div>
        </section>
      </div>
      <OurCoreValues />
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
}

export default WhatDoWeDo;
