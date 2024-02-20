import mernImage from "../assets/mern.png";
import realestate from "../assets/realestate.PNG";
import anime from "../assets/anime.PNG";
import book from "../assets/notebook.PNG";
import store from "../assets/store.PNG";
import blog from "../assets/blog.JPG";
import map from "../assets/map.PNG";
import { Tilt } from "react-tilt";
import AOS from'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

function Mern() {
    useEffect(() => {
        AOS.init();
      },[])
  return (
    <div id="mern" className="mt-5 pt-md-5 p-4">
      <div className="container-fluid">
        <div className="row justify-content-center align-items-start mt-5">
          <div className="col-12 col-lg-4 mb-4 mb-lg-0">
            <img src={mernImage} className="img-fluid mt-md-5 pt-md-5" alt="MERN" />
          </div>

          <div className="col-12 col-lg-8">
            <div className="row row-cols-1 row-cols-md-2 g-4">
              <div className="col" data-aos="fade-up" data-aos-duration="3000">
                <Tilt options={{ max: 25 }}>
                  <div className="card h-100 custom-shadow" >
                    <img src={realestate} className="card-img-top" alt="Real Estate" />
                    <div className="card-body">
                      <h5 className="card-title">Real Estate</h5>
                      <a href="https://real-estate-frontend-sigma.vercel.app/" target="blank" rel="norefferer"  className="btn btn-primary">
                        Visit Page
                      </a>
                
              </div>
            </div>
          </Tilt>
        </div>
        <div className="col" data-aos="fade-up" data-aos-duration="3000">
          <Tilt options={{ max: 25 }}>
            <div className="card h-100 custom-shadow">
              <img src={store} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Ecommerce Store</h5>
                <a
                        href="https://ecommerce-nine-alpha.vercel.app/"
                        target="blank" rel="norefferer"
                  className="btn btn-primary"
                >
                  Visit Page
                </a>
              </div>
            </div>
          </Tilt>
        </div>
        <div className="col" data-aos="fade-up" data-aos-duration="3000">
          <Tilt options={{ max: 25 }}>
            <div className="card h-100 custom-shadow">
              <img src={book} className="card-img-top"  alt="..." />
              <div className="card-body">
                <h5 className="card-title">My INotebook</h5>
                <a
                        href="https://inotebook-seven-mocha.vercel.app/login"
                        target="blank" rel="norefferer"
                  className="btn btn-primary"
                >
                  Visit Page
                </a>
              </div>
            </div>
          </Tilt>
        </div>
        <div className="col" data-aos="fade-up" data-aos-duration="3000">
          <Tilt options={{ max: 25 }}>
            <div className="card h-100 custom-shadow">
              <img src={anime} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Anime Website</h5>
                <a
                        href="https://anime-project-teal.vercel.app/"
                        target="blank" rel="norefferer"
                  className="btn btn-primary"
                >
                  Visit Page
                </a>
              </div>
            </div>
          </Tilt>
        </div>
        <div className="col" data-aos="fade-up" data-aos-duration="3000">
          <Tilt options={{ max: 25 }}>
            <div className="card h-100 custom-shadow">
              <img src={blog} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">My Blog</h5>
                <a
                        href="https://blog-placeparks.vercel.app/"
                        target="blank" rel="norefferer"
                  className="btn btn-primary"
                >
                  Visit Page
                </a>
              </div>
            </div>
          </Tilt>
        </div>
        <div className="col" data-aos="fade-up" data-aos-duration="3000">
          <Tilt options={{ max: 25 }}>
            <div className="card h-100 custom-shadow">
              <img src={map} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Interactive Periodic Table</h5>
                <a
                        href="https://dashboard-map-iota.vercel.app/"
                        target="blank" rel="norefferer"
                  className="btn btn-primary"
                >
                  Visit Page
                </a>
              </div>
            </div>
          </Tilt>
          </div>
          </div>
</div>
        </div>
      </div>
    </div>
  );
}

export default Mern;
