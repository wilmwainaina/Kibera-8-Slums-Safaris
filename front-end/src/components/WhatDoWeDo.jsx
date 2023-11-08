

import React from "react";
import OurCoreValues from "./OurCoreValues";
import Footer from "./Footer";

function WhatDoWeDo() {
  return (
    <div>
    <div className=" relative mt-20 w-4/5 ml-52 ">

      <section className="light">
        <div className="container py-2">
        <div className="h1 text-center text-dark" id="pageHeaderTitle">WHAT DO WE DO?</div>


          <article className="postcard light blue">
            <div className="postcard__text t-dark">
              <h1 className="postcard__title blue"><a href="#">What do we do</a></h1>
              <div className="postcard__subtitle small">
                <time dateTime="2020-05-25 12:00:00">
                  {/* <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020 */}
                </time>
              </div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
              
              We will also provide new hope by (co-)funding the projects and organizations that we will visit with our tours. Since we are a community-based non-profit organization, all our ‘profits’ go to Kibera-based projects to improve the lives of the children. Funding also supports the operations of our own Hope and Shine Center. Furthermore, the tours will provide employment for the people of Kibera.
              In 2009, Kibera Tours started organizing tours within Kibera. The first tours were developed in cooperation with Swedish, Danish, Dutch, etc., adoption families and the Sawadee. The enthusiastic reviews of the first tourists inspired us to go ahead and show Kibera to more and more tourists in Kenya.

              </div>
              <a className="postcard__img_link" href="#">
            </a>

            </div>
            <img className="postcard__img" src="https://www.shutterstock.com/image-photo/nairobi-kenya-august-2019-kibera-600w-1914202510.jpg" alt="Image Title" />

          </article>
        </div>
      </section>
      <section className="light">
        <div className="container py-2">

          <article className="postcard light blue">
            <div className="postcard__text t-dark">
              <h1 className="postcard__title blue"><a href="#">What do we do</a></h1>
              <div className="postcard__subtitle small">
                <time dateTime="2020-05-25 12:00:00">
                  {/* <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020 */}
                </time>
              </div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
              In 2009, Kibera Tours started organizing tours within Kibera. The first tours were developed in cooperation with Swedish, Danish, Dutch, etc., adoption families and the Sawadee. The enthusiastic reviews of the first tourists inspired us to go ahead and show Kibera to more and more tourists in Kenya.
              We will also provide new hope by (co-)funding the projects and organizations that we will visit with our tours. Since we are a community-based non-profit organization, all our ‘profits’ go to Kibera-based projects to improve the lives of the children. Funding also supports the operations of our own Hope and Shine Center. Furthermore, the tours will provide employment for the people of Kibera.

              </div>
              <a className="postcard__img_link" href="#">
            </a>

            </div>
            <img className="postcard__img" src="https://www.shutterstock.com/image-photo/nairobi-kenya-august-2019-kibera-600w-1914202510.jpg" alt="Image Title" />

          </article>
          
        </div>
      </section>


    </div>
    <OurCoreValues/>
    <div className="mt-24">
    <Footer/>
    </div>

    </div>
  );
}

export default WhatDoWeDo;
