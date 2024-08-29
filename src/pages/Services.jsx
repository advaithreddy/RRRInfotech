import React from 'react';
import Header from '../components/Header';
import backgroundImage from '../assets/images/bkservices.jpg';

function Services() {
    return (
        <div>
            <Header />
            <div style={{ position: 'relative', zIndex: 1, height: '100vh' }}>
                {/* Image covering 50% of the screen */}
                <div 
                    style={{
                        height: '50vh',
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                ></div>

                {/* Content Below Image */}
                <div style={{ padding: '20px' }}>
                    <h1>Our Team</h1>
                    <p>Meet the team behind Arc Technologies.</p>
                </div>
            </div>
        </div>
    );
}

export default Services;
