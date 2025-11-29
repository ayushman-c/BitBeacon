import React from 'react'
import './Home.css'

function Home() {
  return (
    <>
      <div className="hero-box" id="home">
      <div className="hero-main-container">
        <div className="yellow-heading">BITBEACON LANDING PAGE</div>
        <div className="normal-heading">Where Crypto Moves, You Move</div>
        <div className="description">Stay updated with lightning-fast crypto data, live charts, and market insights—everything you need to navigate the digital finance world.</div>
        <div className="buttons">
            <a href="#about">
            <div className="explore">EXPLORE</div>

            </a>
            <div className="sign-in">SIGN-IN</div>
        </div>
      </div>

      <div className="hero-animation">
        <div className="btc-img"></div>
      </div>
    </div>

      <div className="about-container" id="about">
        <div className="about-img"></div>
        <div className="about-description">
          <div className="about-heading">About Us</div>

          <div className="detail-og">
          <div className="detail-container">
            <div className="about-details-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi commodi pariatur non architecto accusamus quia ipsa voluptatum eius corrupti assumenda. Voluptatum ullam ea dolor, aperiam sit excepturi ipsam obcaecati aut.</div>
            <div className="about-details-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi commodi pariatur non architecto accusamus quia ipsa voluptatum eius corrupti assumenda. Voluptatum ullam ea dolor, aperiam sit excepturi ipsam obcaecati aut.</div>
            <div className="about-details-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi commodi pariatur non architecto accusamus quia ipsa voluptatum eius corrupti assumenda. Voluptatum ullam ea dolor, aperiam sit excepturi ipsam obcaecati aut.</div>
          </div>
          </div>
          
          <div className="learn-more-container">
          <div className="learn-more">LEARN MORE</div>

          </div>
        </div>
      </div>

      <div className="roadmap-main-container" id="roadmap">
            <div className="box-1">
            <div className="roadmap-heading">Roadmap</div>
            <div className="roadmap-bullets">
                <div className="bullet-1">
                    <div className="tick"></div>
                    <div className="body-1">
                        <div className="heading-1">Research</div>
                        <div className="desc-1">October 2025</div>
                        <div className="desc-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum sed nibh sit amet accumsan. Suspendisse posuere congue ante quis fringilla.</div>
                    </div>
                </div>

                <div className="bullet-1">
                    <div className="tick"></div>
                    <div className="body-1">
                        <div className="heading-1">Research</div>
                        <div className="desc-1">October 2025</div>
                        <div className="desc-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum sed nibh sit amet accumsan. Suspendisse posuere congue ante quis fringilla.</div>
                    </div>
                </div>

                <div className="bullet-1">
                    <div className="tick"></div>
                    <div className="body-1">
                        <div className="heading-1">Research</div>
                        <div className="desc-1">October 2025</div>
                        <div className="desc-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum sed nibh sit amet accumsan. Suspendisse posuere congue ante quis fringilla.</div>
                    </div>
                </div>
                </div>
            </div>

            <div className="box-2">
                <div className="roadmap-img"></div>
            </div>


            </div>
    </>
  )
}

export default Home
