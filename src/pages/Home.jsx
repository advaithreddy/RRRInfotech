import React from "react";
import videoSrc from "../assets/videos/mainscreen.mp4";
import Header from "../components/Header";
import { Link } from "react-router-dom";

import softwareLogo from "../assets/images/softwaredevlogo.png";
import itServicesLogo from "../assets/images/itlogo.png";
import techConsultingLogo from "../assets/images/technologylogo.png";
import managementConsultingLogo from "../assets/images/managementlogo.png";
import communicationsLogo from "../assets/images/communication.png";
import educationLogo from "../assets/images/education.png";
import infoServicesLogo from "../assets/images/information.png";
import technologyLogo from "../assets/images/technology.png";

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
                        fontSize: '4rem', 
                        fontFamily: 'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif', 
                        fontWeight: 'bolder', 
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
                            borderRadius: '12px',
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

            {/* Services Section */}
            <div style={{ 
                padding: '50px', 
                backgroundColor: 'white', 
                textAlign: 'center', 
            }}>
                <h2 style={{
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: '40px',
                }}>
                    Workforce Management Services
                </h2>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '20px',
                    flexWrap: 'wrap', // Allows wrapping of cards
                }}>
                    {/* Card 1: Software Development */}
                    <Link 
                        to="/services" 
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '23%',
                            padding: '20px',
                            backgroundColor: '#FFF9E6',
                            borderRadius: '12px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            transition: 'transform 0.3s ease, background-color 0.3s ease',
                            textDecoration: 'none',
                            color: 'black',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#FEEFCB';
                            e.currentTarget.style.transform = 'scale(1.05) translateZ(30px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#FFF9E6';
                            e.currentTarget.style.transform = 'scale(1) translateZ(0)';
                        }}
                    >
                        <img src={softwareLogo} alt="Software Development" style={{ width: '50%', marginBottom: '20px' }} />
                        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Software Development</p>
                    </Link>

                    {/* Card 2: IT Services */}
                    <Link 
                        to="/services" 
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '23%',
                            padding: '20px',
                            backgroundColor: '#FFF9E6',
                            borderRadius: '12px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            transition: 'transform 0.3s ease, background-color 0.3s ease',
                            textDecoration: 'none',
                            color: 'black',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#FEEFCB';
                            e.currentTarget.style.transform = 'scale(1.05) translateZ(30px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#FFF9E6';
                            e.currentTarget.style.transform = 'scale(1) translateZ(0)';
                        }}
                    >
                        <img src={itServicesLogo} alt="IT Services" style={{ width: '50%', marginBottom: '20px' }} />
                        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>IT Services</p>
                    </Link>

                    {/* Card 3: Technology Consulting */}
                    <Link 
                        to="/services" 
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '23%',
                            padding: '20px',
                            backgroundColor: '#FFF9E6',
                            borderRadius: '12px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            transition: 'transform 0.3s ease, background-color 0.3s ease',
                            textDecoration: 'none',
                            color: 'black',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#FEEFCB';
                            e.currentTarget.style.transform = 'scale(1.05) translateZ(30px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#FFF9E6';
                            e.currentTarget.style.transform = 'scale(1) translateZ(0)';
                        }}
                    >
                        <img src={techConsultingLogo} alt="Technology Consulting" style={{ width: '50%', marginBottom: '20px' }} />
                        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Technology Consulting</p>
                    </Link>

                    {/* Card 4: Management Consulting */}
                    <Link 
                        to="/services" 
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '23%',
                            padding: '20px',
                            backgroundColor: '#FFF9E6',
                            borderRadius: '12px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            transition: 'transform 0.3s ease, background-color 0.3s ease',
                            textDecoration: 'none',
                            color: 'black',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#FEEFCB';
                            e.currentTarget.style.transform = 'scale(1.05) translateZ(30px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#FFF9E6';
                            e.currentTarget.style.transform = 'scale(1) translateZ(0)';
                        }}
                    >
                        <img src={managementConsultingLogo} alt="Management Consulting" style={{ width: '50%', marginBottom: '20px' }} />
                        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Management Consulting</p>
                    </Link>
                </div>
            </div>

            {/* Industries Section */}
            <div style={{ 
                position: 'relative', 
                padding: '50px', 
                backgroundColor: 'rgba(255, 255, 255, 0.3)', 
                textAlign: 'center',
                backgroundImage: `url(${videoSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <h2 style={{
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: '40px',
                }}>
                    Industries
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '30px',
                }}>
                    {/* Card 1: Communications */}
                    <Link 
                        to="/industries" 
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '20px',
                            backgroundColor: '#003366',
                            borderRadius: '12px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            transition: 'transform 0.3s ease, background-color 0.3s ease',
                            textDecoration: 'none',
                            color: 'white',
                            width: '100%',
                            height: '200px', // Set a fixed height for cards
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'white';
                            e.currentTarget.style.color = '#003366';
                            e.currentTarget.style.transform = 'scale(1.05) translateZ(10px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#003366';
                            e.currentTarget.style.color = 'white';
                            e.currentTarget.style.transform = 'scale(1) translateZ(0)';
                        }}
                    >
                        <div style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            backgroundColor: 'white',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: '10px',
                        }}>
                            <img src={communicationsLogo} alt="Communications" style={{ width: '40px', height: '40px' }} />
                        </div>
                        <p style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Communications</p>
                    </Link>

                    {/* Card 2: Education */}
                    <Link 
                        to="/industries" 
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '20px',
                            backgroundColor: '#003366',
                            borderRadius: '12px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            transition: 'transform 0.3s ease, background-color 0.3s ease',
                            textDecoration: 'none',
                            color: 'white',
                            width: '100%',
                            height: '200px', // Set a fixed height for cards
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'white';
                            e.currentTarget.style.color = '#003366';
                            e.currentTarget.style.transform = 'scale(1.05) translateZ(10px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#003366';
                            e.currentTarget.style.color = 'white';
                            e.currentTarget.style.transform = 'scale(1) translateZ(0)';
                        }}
                    >
                        <div style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            backgroundColor: 'white',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: '10px',
                        }}>
                            <img src={educationLogo} alt="Education" style={{ width: '40px', height: '40px' }} />
                        </div>
                        <p style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Education</p>
                    </Link>

                    {/* Card 3: Information Services */}
                    <Link 
                        to="/industries" 
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '20px',
                            backgroundColor: '#003366',
                            borderRadius: '12px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            transition: 'transform 0.3s ease, background-color 0.3s ease',
                            textDecoration: 'none',
                            color: 'white',
                            width: '100%',
                            height: '200px', // Set a fixed height for cards
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'white';
                            e.currentTarget.style.color = '#003366';
                            e.currentTarget.style.transform = 'scale(1.05) translateZ(10px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#003366';
                            e.currentTarget.style.color = 'white';
                            e.currentTarget.style.transform = 'scale(1) translateZ(0)';
                        }}
                    >
                        <div style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            backgroundColor: 'white',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: '10px',
                        }}>
                            <img src={infoServicesLogo} alt="Information Services" style={{ width: '40px', height: '40px' }} />
                        </div>
                        <p style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Information Services</p>
                    </Link>

                    {/* Card 4: Technology */}
                    <Link 
                        to="/industries" 
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '20px',
                            backgroundColor: '#003366',
                            borderRadius: '12px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            transition: 'transform 0.3s ease, background-color 0.3s ease',
                            textDecoration: 'none',
                            color: 'white',
                            width: '100%',
                            height: '200px', // Set a fixed height for cards
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'white';
                            e.currentTarget.style.color = '#003366';
                            e.currentTarget.style.transform = 'scale(1.05) translateZ(10px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#003366';
                            e.currentTarget.style.color = 'white';
                            e.currentTarget.style.transform = 'scale(1) translateZ(0)';
                        }}
                    >
                        <div style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            backgroundColor: 'white',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: '10px',
                        }}>
                            <img src={technologyLogo} alt="Technology" style={{ width: '40px', height: '40px' }} />
                        </div>
                        <p style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Technology</p>
                    </Link>
                </div>
            </div>

            {/* Additional Content Below */}
            <div style={{ padding: '50px', backgroundColor: 'white', color: 'black', textAlign: 'center' }}>
                <h2>Ready to Transform Your Career?</h2>
                <p>Contact us today to get started.</p>
                <Link 
                    to="/contact" 
                    style={{        
                        display: 'inline-block', // Align with text
                        padding: '10px 20px',
                        backgroundColor: '#fff',
                        color: '#007BFF',
                        borderRadius: '5px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        marginTop: '20px', // Space between text and button
                        transition: 'background-color 0.3s ease, color 0.3s ease', // Smooth transition for hover
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#007BFF'; // Button color on hover
                        e.target.style.color = '#fff'; // Text color on hover
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#fff'; // Original button color
                        e.target.style.color = '#007BFF'; // Original text color
                    }}
                >
                    Get in Touch
                </Link>
            </div>
        </div>
    );
}

export default Home;
