import React, { useState } from 'react';
import Header from '../components/Header';

function PandP() {
    const [hovered, setHovered] = useState(false);

    const containerStyle = {
        padding: '20px',
        textAlign: 'center',
    };

    const headingStyle = {
        fontSize: '2.5em',
        fontWeight: 'bold',
        margin: '70px 0',
    };

    const sectionStyle = {
        margin: '20px 0',
        lineHeight: '1.6',
        textAlign: 'left',
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto',
    };

    const subheadingStyle = {
        fontSize: '1.8em',
        fontWeight: 'bold',
        margin: '10px 0',
    };

    const emailStyle = {
        fontSize: '1.0em',
        fontWeight: 'bold',
        color: '#78B7D0', 
        textDecoration: hovered ? 'underline' : 'none',
        transition: 'text-decoration 0.3s ease', // Smooth transition for underline effect
        marginLeft: '5px',
    };

    return (
        <div>
            <Header />
            <div style={containerStyle}>
                <h1 style={headingStyle}>Privacy and Policy</h1>
                <div style={sectionStyle}>
                    <h2 style={subheadingStyle}>Introduction</h2>
                    <p>Welcome to our Privacy and Policy page. This page outlines our policies regarding the collection, use, and disclosure of personal information when you use our services. We are committed to protecting your privacy and ensuring that your personal information is handled with care.</p>

                    <h2 style={subheadingStyle}>Information Collection and Use</h2>
                    <p>We collect various types of information for various purposes to provide and improve our services to you. The types of information we may collect include personal information such as your name, email address, and any other details you choose to provide.</p>

                    <h2 style={subheadingStyle}>Data Security</h2>
                    <p>We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure.</p>

                    <h2 style={subheadingStyle}>Changes to This Privacy Policy</h2>
                    <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

                    <h2 style={subheadingStyle}>Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at  
                        <a 
                            href="mailto:Akanksh@Arctechnolgies.com" 
                            style={emailStyle}
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                        >
                            Hello@rrrinfotech.com
                        </a>.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PandP;
