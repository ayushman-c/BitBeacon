import React from 'react'
import './Home.css'
import Footer from '../../components/Footer/Footer'

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
            <div className="sign-in">SERVICES</div>
        </div>
      </div>

      <div className="hero-animation">
        <div className="btc-img"></div>
        <div className="cryp-container">
          <div className="etherium"></div>
          <div className="tether"></div>
          <div className="binance"></div>
          <div className="xrp"></div>
        </div>
      </div>
    </div>

      <div className="about-container" id="about">
        <div className="about-img"></div>
        <div className="about-description">
          <div className="about-heading">About Us</div>

          <div className="detail-og">
          <div className="detail-container">
            <div className="about-details-1">Hey I am Ayushman, a frontend developer. This website is made as a personal project to showcase my frontend skills and learn about API fetching. API used here is of CoinGecko, and it is made in React.js and deployed in Netlify..</div>
            <div className="about-details-2">Our platform uses reliable and accurate data sourced from the CoinGecko API, ensuring transparency and consistency across all metrics.</div>
            <div className="about-details-3">Whether you're a trader, investor, or crypto enthusiast, our goal is to give you a dependable platform for monitoring the global crypto market.</div>
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
                        <div className="heading-1">Foundation</div>
                        <div className="desc-1">October 2025</div>
                        <div className="desc-2">We begin by building the core platform, including live cryptocurrency price tracking, detailed coin pages, and interactive historical charts. The goal of this phase is to establish a solid, reliable base for users to access real-time market data.</div>
                    </div>
                </div>

                <div className="bullet-1">
                    <div className="tick"></div>
                    <div className="body-1">
                        <div className="heading-1">Enhancements</div>
                        <div className="desc-1">November 2025</div>
                        <div className="desc-2">Next, we improve the overall user experience with features like an integrated search bar, smoother UI design, mobile responsiveness. Additional chart time ranges are also introduced to give users more control over how they view market trends.</div>
                    </div>
                </div>

                <div className="bullet-1">
                    <div className="tick"></div>
                    <div className="body-1">
                        <div className="heading-1">Advanced Features</div>
                        <div className="desc-1">November 2025</div>
                        <div className="desc-2">In the final phase, the platform becomes more personalized and powerful. Users will be able to create watchlists, set price alerts, and view real-time updates through WebSockets. Portfolio tracking tools will also be added to help users monitor their investments more effectively.</div>
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
