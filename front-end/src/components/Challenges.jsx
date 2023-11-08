import React from 'react';

const Challenges = () => {
    return (
        <main className='challengesbody w-3/4 ml-44 mt-12 ' >
            <div className=' text-center '>
                <h1 className='text-black text-2xl font-bold '>Some Of The Many Challenges Faced By The Residents</h1>
            </div>
          <ul className="infoGraphic">
            <li>
              <div className="numberWrap">
                <div className="number fontColor1">1</div>
                <div className="coverWrap">
                  <div className="numberCover"></div>
                </div>
              </div>
              <div className="content">
                <div className="icon iconCodepen"></div>
                <h2>OverPopulation</h2>
                <p>Sagittis, audantium sem eveniet lacus pede porttitor aenean.</p>
              </div>
            </li>
            <li>
              <div className="numberWrap">
                <div className="number fontColor2">2</div>
                <div className="coverWrap">
                  <div className="numberCover"></div>
                </div>
              </div>
              <div className="content">
                <div className="icon iconSocial"></div>
                <h2>Poverty</h2>
                <p>Sagittis, audantium sem eveniet lacus pede porttitor aenean.</p>
              </div>
            </li>
            <li>
              <div className="numberWrap">
                <div className="number fontColor3">3</div>
                <div className="coverWrap">
                  <div className="numberCover"></div>
                </div>
              </div>
              <div className="content">
                <div className="icon iconAirplane"></div>
                <h2>Insecurity</h2>
                <p>Sagittis, audantium sem eveniet lacus pede porttitor aenean.</p>
              </div>
            </li>
            <li>
              <div className="numberWrap">
                <div className="number fontColor4">4</div>
                <div className="coverWrap">
                  <div className="numberCover"></div>
                </div>
              </div>
              <div className="content">
                <div className="icon iconMap"></div>
                <h2>Inadequate Housing</h2>
                <p>Sagittis, audantium sem eveniet lacus pede porttitor aenean.</p>
              </div>
            </li>
            <li>
              <div className="numberWrap">
                <div className="number fontColor5">5</div>
                <div className="coverWrap">
                  <div className="numberCover"></div>
                </div>
              </div>
              <div className="content">
                <div className="icon iconBulb"></div>
                <h2>Limited Healthcare</h2>
                <p>Sagittis, audantium sem eveniet lacus pede porttitor aenean.</p>
              </div>
            </li>
          </ul>
        </main>
      );
        }

export default Challenges;
