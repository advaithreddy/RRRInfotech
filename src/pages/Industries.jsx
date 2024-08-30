import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'; // Import Footer component
import backgroundImage from '../assets/images/bkindustries.jpg';
import image1 from '../assets/images/communicationindustry.jpg'; // Local images
import image2 from '../assets/images/educationindustry.jpg';
import image3 from '../assets/images/informationindustry.jpg';
import image4 from '../assets/images/technologyindustry.jpg';

function Industries() {
    const containerStyle = {
        backgroundColor: '#A00F1E', // Darker red background
        padding: '20px',
        color: 'white',
        minHeight: 'calc(100vh - 100px)', // Ensure full height minus footer height
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '0', // No margin at the bottom
    };

    const rowStyle = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
    };

    const contentStyle = {
        flex: '0 0 60%',
        padding: '20px',
        backgroundColor: '#A00F1E', // Darker red background for content
    };

    const imageStyle = {
        flex: '0 0 40%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
        borderRadius: '10px',
    };

    const headingStyle = {
        fontSize: '28px', // Larger font size
        fontWeight: 'bold',
        marginBottom: '10px',
    };

    const paragraphStyle = {
        fontSize: '16px',
    };

    return (
        <div>
            <Header />
            <div style={{ position: 'relative' }}>
                {/* Image covering 50% of the screen */}
                <div 
                    style={{
                        height: '50vh',
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                ></div>

                {/* Industries Section */}
                <div style={containerStyle}>
                    <div style={rowStyle}>
                        <div style={contentStyle}>
                            <h2 style={headingStyle}>Communications</h2>
                            <p style={paragraphStyle}>
                                The act of communicating through systems or the process of transmitting and receiving information between two or more sites is referred to as a communication service. It serves as a vital external connection between the company, its providers, and its consumers. The concept “communication service” refers to the transmission and reception of sound, written documents, other visually perceived representations, and data encrypted in programming languages. Communication aids in the effective operation of businesses as well as the creation of positive public perception. Through communications, individuals are educated, their knowledge is expanded, and their perspectives are broadened. In addition, communication helps us overcome linguistic and human interaction hurdles.
                            </p>
                        </div>
                        <div 
                            style={{ ...imageStyle, backgroundImage: `url(${image1})` }}
                        ></div>
                    </div>

                    <div style={rowStyle}>
                        <div 
                            style={{ ...imageStyle, backgroundImage: `url(${image2})` }}
                        ></div>
                        <div style={contentStyle}>
                            <h2 style={headingStyle}>Education</h2>
                            <p style={paragraphStyle}>
                                Education institutions are those whose primary goal is to provide education. These organizations can be public, non-profit, or for-profit. These institutions include elementary and secondary schools, community colleges, top universities, charter schools, online/offline academies, vocational centers, and corporate educational support services.
                            </p>
                        </div>
                    </div>

                    <div style={rowStyle}>
                        <div style={contentStyle}>
                            <h2 style={headingStyle}>Information Services</h2>
                            <p style={paragraphStyle}>
                                The international information services (IS) sector uses integrated ways to acquire, process, share and store various forms of information to optimize societal and organizational efficiency. IS data, which often includes individuals, software, technology, and operations, are utilized for research, analytics, and improved outcomes. The significance of information services is effectively related to decision-making operations for purchasing and supplying in business-to-business (B2B) companies. B2B businesses aim to provide information that will facilitate other enterprises in selecting a good or service. Overall, information services can provide countless advantages and enhance how a company manages the external and internal procedures it confronts daily.
                            </p>
                        </div>
                        <div 
                            style={{ ...imageStyle, backgroundImage: `url(${image3})` }}
                        ></div>
                    </div>

                    <div style={rowStyle}>
                        <div 
                            style={{ ...imageStyle, backgroundImage: `url(${image4})` }}
                        ></div>
                        <div style={contentStyle}>
                            <h2 style={headingStyle}>Technology</h2>
                            <p style={paragraphStyle}>
                                The Technology industry includes companies that create, produce, or supply electronic devices such as computers, software equipment, computer services, scientific equipment, and all the electronic components and commodities that compose the technology industry. In today’s digital age, technology helps consumers and companies prosper.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> Ensure the Footer component is visible */}
        </div>
    );
}

export default Industries;
