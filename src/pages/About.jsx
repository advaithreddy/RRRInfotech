import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'; // Import Footer component
import backgroundImage from '../assets/images/bkabout.jpg';

function About() {
    const containerStyle = {
        position: 'relative',
        zIndex: 1,
        height: '100vh',
    };

    const imageStyle = {
        height: '50vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const contentStyle = {
        padding: '20px',
        textAlign: 'center',
    };

    const headingStyle = {
        fontSize: '28px',
        fontWeight: 'bold',
        marginBottom: '20px',
    };

    const paragraphStyle = {
        fontSize: '18px',
        lineHeight: '1.6',
    };

    return (
        <div>
            <Header />
            <div style={containerStyle}>
                {/* Image covering 50% of the screen */}
                <div style={imageStyle}></div>

                {/* Content Below Image */}
                <div style={contentStyle}>
                    <h1 style={headingStyle}>About</h1>
                    <p style={paragraphStyle}>
                        Arc Technolgies, established in 2023, is a forward-thinking staffing and recruitment firm dedicated to bridging the gap between businesses and top-tier talent across diverse sectors, including IT, healthcare, and non-IT industries. Our core mission is to empower organizations by providing exceptional recruitment solutions tailored to their unique needs and challenges.
                    </p>
                    <p style={paragraphStyle}>
                        At Arc Technolgies, we understand that every business has distinct requirements when it comes to staffing. Whether it’s finding skilled IT professionals, healthcare experts, or talent in other fields, our team is committed to delivering tailored solutions that align with each client’s strategic goals. We take pride in our ability to connect companies with the right candidates who can drive their success and contribute to their growth.
                    </p>
                    <p style={paragraphStyle}>
                        Our commitment to excellence is at the heart of everything we do. We are driven by a passion for building enduring relationships with both our clients and candidates. Our approach is rooted in personalized service, where we take the time to understand the specific needs and aspirations of our clients and candidates.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
