import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import backgroundImage from '../assets/images/bkservices.jpg';
import serviceImage1 from '../assets/images/softwaredevservice.jpg';
import serviceImage2 from '../assets/images/itservice.jpg';
import serviceImage3 from '../assets/images/technologyservice.jpg';
import serviceImage4 from '../assets/images/managementservice.jpg';

function Services() {
    const cardStyle = {
        width: '30%',
        height: '300px',
        margin: '20px',
        borderRadius: '15px',
        overflow: 'hidden',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.3s ease-in-out',
        transformStyle: 'preserve-3d',
    };

    const cardContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '50px',
    };

    const contentStyle = {
        flex: '1',
        color: 'white',
        padding: '20px',
        backgroundColor: '#001F3F', // Dark blue background
        borderRadius: '15px',
        marginLeft: '20px',
        marginRight: '20px',
    };

    const headingStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '10px',
    };

    const handleMouseEnter = (e) => {
        e.currentTarget.style.transform = 'perspective(1000px) rotateY(10deg) rotateX(10deg) scale(1.05)';
        e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.4)';
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.2)';
    };

    return (
        <div style={{ minHeight: '100vh', position: 'relative' }}>
            <Header />
            <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Image covering 50% of the screen */}
                <div 
                    style={{
                        height: '50vh',
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                ></div>

                {/* Services Section */}
                <div style={{ padding: '50px', backgroundColor: '#001F3F' }}>
                    <div style={cardContainerStyle}>
                        <div 
                            style={{ ...cardStyle, backgroundImage: `url(${serviceImage1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            className="service-card"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        ></div>
                        <div style={contentStyle}>
                            <h2 style={headingStyle}>Software Development</h2>
                            <p>
                                Our custom software development technologies accelerate operations, generate revenues, and streamline corporate missions from conception to design to delivery. Our software configuration experts apply groundbreaking technologies and resources to address impediments ranging from stylistic structure to evaluation and execution. We evaluate your goals to deliver superior technologies and establish holistic software solutions and implementation roadmaps.
                            </p>
                        </div>
                    </div>

                    <div style={cardContainerStyle}>
                        <div style={contentStyle}>
                            <h2 style={headingStyle}>IT Services</h2>
                            <p>
                                Our IT strategy consulting services assist firms in developing advanced IT strategies, initiatives, and solutions. One of the most significant hurdles for a company today is guaranteeing that it has a well-developed IT structure that facilitates corporate objectives. Today’s structural and technological decisions can substantially impact your organization’s future profitability, productivity, and originality.
                            </p>
                        </div>
                        <div 
                            style={{ ...cardStyle, backgroundImage: `url(${serviceImage2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            className="service-card"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        ></div>
                    </div>

                    <div style={cardContainerStyle}>
                        <div 
                            style={{ ...cardStyle, backgroundImage: `url(${serviceImage3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            className="service-card"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        ></div>
                        <div style={contentStyle}>
                            <h2 style={headingStyle}>Technology Consulting</h2>
                            <p>
                                Technology has become increasingly vital to driving company strategy and guaranteeing its excellence. Today, novel technical concepts are swiftly becoming the new corporate champions and a vehicle for change, corporate reinvention, and a tool for comprehending the realm of what emerging innovations can achieve. However, technological expenditures may not always yield the intended results, and businesses recognize that controlling technology to synthesize developments is a considerable challenge.
                            </p>
                        </div>
                    </div>

                    <div style={cardContainerStyle}>
                        <div style={contentStyle}>
                            <h2 style={headingStyle}>Management Consulting</h2>
                            <p>
                                The ideal approach to management structure is to evaluate how a firm operates while considering every aspect of the organization. After that, identifying the primary objective begins, establishing the company’s mission using the data gathered during the evaluation stage. Finally, a robust and reliable strategy is developed using the information gathered throughout the evaluation.
                            </p>
                        </div>
                        <div 
                            style={{ ...cardStyle, backgroundImage: `url(${serviceImage4})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            className="service-card"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        ></div>
                    </div>
                </div>
            </div>
            {/* <Footer style={{ position: 'absolute', bottom: 0, width: '100%', zIndex: 2 }} /> Ensure the Footer component is visible */}
        </div>
    );
}

export default Services;
