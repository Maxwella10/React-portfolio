//import React from 'react';

//function Home() {
//return <div>Home</div>;
//}

//export default Home;

import profilePic from '../../assets/avatar.png';

function Home() {
  return (
    <section className="hero-background d-flex justify-content-center align-items-center">
      <div className="container row gap-5 gap-lg-0">
        <div className="col-lg-7 my-auto order-2 order-lg-1 text-center text-lg-start">
          <div className="mx-auto">
            <h1 className="display-4 fw-bold mb-3 heading-width">
              Maxwell Acha, Frontend Developer and Data Analyst
            </h1>
            <p className="lead fw-normal mb-3">
              Welcome to my portfolio, I specialize in transforming intricate
              designs into fully functional, polished websites and also telling
              stories with Datasets of all kinds . Let's collaborate to bring
              your vision to life and make your online presence stand out.
            </p>
            <a
              href="projectGallery"
              className="btn btn-xl btn-light box-shadow rounded-3 overflow-hidden"
            >
              Check Out My Work
            </a>
          </div>
        </div>
        <div className="col-lg-5 my-auto order-1 order-lg-2 text-center">
          <div className="avatar-container">
            <img
              src={profilePic}
              className="img-fluid rounded-5 border border-light scale rotate box-shadow"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
