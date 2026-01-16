import React from 'react';
import Header from '../components/Header';
import backgroundImage from '../assets/images/bkteam.jpg';

function Team() {
    const containerStyle = {
        position: 'relative',
        zIndex: 1,
        height: '100vh',
        paddingBottom: '150px', // Increase space for the footer
    };

    const imageStyle = {
        height: '50vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const contentStyle = {
        padding: '20px',
        textAlign: 'center', // Center the text
        marginBottom: '20px', // Add margin to create space between cards and footer
    };

    const headingStyle = {
        fontSize: '3em',
        fontWeight: 'bold',
        margin: '-5px 0 10px 0',
    };

    const subheadingStyle = {
        fontSize: '1.5em',
        margin: '0 0 30px 0',
    };

    const cardContainerStyle = {
        display: 'flex',
        justifyContent: 'center', // Center cards horizontally
        flexWrap: 'wrap', // Allow cards to wrap on smaller screens
        gap: '25px', // Space between cards
        marginBottom: '100px', // Add margin to ensure space between cards and footer
    };

    const cardStyle = {
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '25px',
        width: '300px',
        textAlign: 'center',
        boxShadow: '0 10px 8px rgba(0,0,0,0.1)',
        backgroundColor: '#FFF6EA', // Add background color to cards
    };

    const nameStyle = {
        fontSize: '1em',
        fontWeight: 'bold',
        color:'#424242',
    }

    return (
        <div>
            <Header />
            <div style={containerStyle}>
                {/* Image covering 50% of the screen */}
                <div style={imageStyle}></div>

                {/* Content Below Image */}
                <div style={contentStyle}>
                    <h1 style={headingStyle}>Team</h1>
                    <p style={subheadingStyle}>Meet the team behind RRR Infotech.</p>
                    <div style={cardContainerStyle}>
                        <div style={cardStyle}>
                            <h2 style={nameStyle}>Akanksh Ch</h2>
                            <p><strong>Lead Developer</strong></p>
                            <p>Akanksh is a dedicated and skilled developer with extensive experience in backend technologies and a passion for coding.</p>
                        </div>
                        <div style={cardStyle}>
                            <h2 style={nameStyle}>Raj Kumar</h2>
                            <p><strong>Project Manager</strong></p>
                            <p>Raj is an experienced project manager who excels in coordinating tasks, managing timelines, and ensuring successful project delivery.</p>
                        </div>
                        <div style={cardStyle}>
                            <h2 style={nameStyle}>Mahesh</h2>
                            <p><strong>UX/UI Designer</strong></p>
                            <p>Mahesh is a creative UX/UI designer who transforms ideas into visually compelling and user-friendly designs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;
