import React from "react";
import videoSrc from "../assets/videos/mainscreen.mp4";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <Header />

            {/* Video Section */}
            <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
                <video 
                    autoPlay 
                    loop 
                    muted 
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: '-1',
                    }}
                >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div style={{
                    position: 'relative', 
                    zIndex: 1, 
                    color: 'white', 
                    padding: '20px', 
                    display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'center', 
                    alignItems: 'flex-start', 
                    height: '100vh',
                    paddingLeft: '10%',
                }}>
                    <p style={{
                        fontSize: '4rem', // Increased the font size
                        fontFamily: 'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif', // Use a bolder font
                        fontWeight: 'bolder', // Extra bold text
                        margin: '0',
                    }}>
                        Empowering Futures
                    </p>
                    <p style={{
                        fontSize: '4rem',
                        fontFamily: 'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif',
                        fontWeight: 'bolder',
                        margin: '0',
                    }}>
                        Creating Opportunities
                    </p>
                    <Link 
                        to="/about" 
                        style={{
                            marginTop: '20px',
                            padding: '10px 20px',
                            fontSize: '1.5rem',
                            fontFamily: 'Arial, sans-serif',
                            fontWeight: 'bold',
                            color: 'white',
                            border: '2px solid white',
                            borderRadius: '12px', // Slightly curved border
                            backgroundColor: 'transparent',
                            textDecoration: 'none',
                            transition: 'background-color 0.3s ease, color 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = 'white';
                            e.target.style.color = 'black';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                            e.target.style.color = 'white';
                        }}
                    >
                        Learn More
                    </Link>
                </div>
            </div>

            {/* Content Below Video */}
            <div style={{ padding: '20px' }}>
                <h2>About Us</h2>
                <p>Some content here...</p>
                {/* More content */}
            </div>
        </div>
    );
}

export default Home;
