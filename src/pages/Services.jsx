// import React from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import backgroundImage from '../assets/images/bkservices.jpg';
// import serviceImage1 from '../assets/images/softwaredevservice.jpg';
// import serviceImage2 from '../assets/images/itservice.jpg';
// import serviceImage3 from '../assets/images/technologyservice.jpg';
// import serviceImage4 from '../assets/images/managementservice.jpg';

// function Services() {
//     const cardStyle = {
//         width: '30%',
//         height: '300px',
//         margin: '20px',
//         borderRadius: '15px',
//         overflow: 'hidden',
//         boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
//         transition: 'transform 0.3s ease-in-out',
//         transformStyle: 'preserve-3d',
//     };

//     const cardContainerStyle = {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         marginBottom: '50px',
//     };

//     const contentStyle = {
//         flex: '1',
//         color: 'white',
//         padding: '20px',
//         backgroundColor: '#001F3F', // Dark blue background
//         borderRadius: '15px',
//         marginLeft: '20px',
//         marginRight: '20px',
//     };

//     const headingStyle = {
//         fontSize: '24px',
//         fontWeight: 'bold',
//         marginBottom: '10px',
//     };

//     const handleMouseEnter = (e) => {
//         e.currentTarget.style.transform = 'perspective(1000px) rotateY(10deg) rotateX(10deg) scale(1.05)';
//         e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.4)';
//     };

//     const handleMouseLeave = (e) => {
//         e.currentTarget.style.transform = 'none';
//         e.currentTarget.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.2)';
//     };

//     return (
//         <div style={{ minHeight: '100vh', position: 'relative' }}>
//             <Header />
//             <div style={{ position: 'relative', zIndex: 1 }}>
//                 {/* Image covering 50% of the screen */}
//                 <div 
//                     style={{
//                         height: '50vh',
//                         backgroundImage: `url(${backgroundImage})`,
//                         backgroundSize: 'cover',
//                         backgroundPosition: 'center',
//                     }}
//                 ></div>

//                 {/* Services Section */}
//                 <div style={{ padding: '50px', backgroundColor: '#001F3F' }}>
//                     <div style={cardContainerStyle}>
//                         <div 
//                             style={{ ...cardStyle, backgroundImage: `url(${serviceImage1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//                             className="service-card"
//                             onMouseEnter={handleMouseEnter}
//                             onMouseLeave={handleMouseLeave}
//                         ></div>
//                         <div style={contentStyle}>
//                             <h2 style={headingStyle}>Software Development</h2>
//                             <p>
//                                 Our custom software development technologies accelerate operations, generate revenues, and streamline corporate missions from conception to design to delivery. Our software configuration experts apply groundbreaking technologies and resources to address impediments ranging from stylistic structure to evaluation and execution. We evaluate your goals to deliver superior technologies and establish holistic software solutions and implementation roadmaps.
//                             </p>
//                         </div>
//                     </div>

//                     <div style={cardContainerStyle}>
//                         <div style={contentStyle}>
//                             <h2 style={headingStyle}>IT Services</h2>
//                             <p>
//                                 Our IT strategy consulting services assist firms in developing advanced IT strategies, initiatives, and solutions. One of the most significant hurdles for a company today is guaranteeing that it has a well-developed IT structure that facilitates corporate objectives. Today’s structural and technological decisions can substantially impact your organization’s future profitability, productivity, and originality.
//                             </p>
//                         </div>
//                         <div 
//                             style={{ ...cardStyle, backgroundImage: `url(${serviceImage2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//                             className="service-card"
//                             onMouseEnter={handleMouseEnter}
//                             onMouseLeave={handleMouseLeave}
//                         ></div>
//                     </div>

//                     <div style={cardContainerStyle}>
//                         <div 
//                             style={{ ...cardStyle, backgroundImage: `url(${serviceImage3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//                             className="service-card"
//                             onMouseEnter={handleMouseEnter}
//                             onMouseLeave={handleMouseLeave}
//                         ></div>
//                         <div style={contentStyle}>
//                             <h2 style={headingStyle}>Technology Consulting</h2>
//                             <p>
//                                 Technology has become increasingly vital to driving company strategy and guaranteeing its excellence. Today, novel technical concepts are swiftly becoming the new corporate champions and a vehicle for change, corporate reinvention, and a tool for comprehending the realm of what emerging innovations can achieve. However, technological expenditures may not always yield the intended results, and businesses recognize that controlling technology to synthesize developments is a considerable challenge.
//                             </p>
//                         </div>
//                     </div>

//                     <div style={cardContainerStyle}>
//                         <div style={contentStyle}>
//                             <h2 style={headingStyle}>Management Consulting</h2>
//                             <p>
//                                 The ideal approach to management structure is to evaluate how a firm operates while considering every aspect of the organization. After that, identifying the primary objective begins, establishing the company’s mission using the data gathered during the evaluation stage. Finally, a robust and reliable strategy is developed using the information gathered throughout the evaluation.
//                             </p>
//                         </div>
//                         <div 
//                             style={{ ...cardStyle, backgroundImage: `url(${serviceImage4})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//                             className="service-card"
//                             onMouseEnter={handleMouseEnter}
//                             onMouseLeave={handleMouseLeave}
//                         ></div>
//                     </div>
//                 </div>
//             </div>
//             {/* <Footer style={{ position: 'absolute', bottom: 0, width: '100%', zIndex: 2 }} /> Ensure the Footer component is visible */}
//         </div>
//     );
// }

// export default Services;

import Header from '../components/Header';
import './services.css';

import backgroundImage from '../assets/images/bkservices.jpg';
import serviceImage1 from '../assets/images/softwaredevservice.jpg';
import serviceImage2 from '../assets/images/itservice.jpg';
import serviceImage3 from '../assets/images/technologyservice.jpg';
import serviceImage4 from '../assets/images/managementservice.jpg';

function Services() {
  return (
    <div className="services-page">
      <Header />

      {/* Hero Image */}
      <div
        className="services-hero"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      <div className="services-section">

        <ServiceRow
          image={serviceImage1}
          title="Software Development"
          reverse={false}
        >
          Our custom software development services are designed to help businesses transform ideas into scalable, secure, and high-performance digital solutions. We work closely with clients to understand their operational challenges and long-term goals before crafting tailored software architectures.
          From enterprise applications and cloud-based platforms to automation tools and system integrations, our development approach ensures flexibility, reliability, and future readiness. We emphasize clean code, modern frameworks, and robust testing practices to deliver solutions that evolve with your business.
        </ServiceRow>

        <ServiceRow
          image={serviceImage2}
          title="IT Services"
          reverse
        >
          Our IT services empower organizations to build resilient, efficient, and future-proof technology ecosystems. We assist companies in aligning their IT infrastructure with business objectives while ensuring performance, security, and scalability at every stage.
          By combining strategic planning with hands-on technical expertise, we help clients optimize systems, modernize legacy environments, and adopt emerging technologies that enhance productivity and reduce operational risk.
        </ServiceRow>

        <ServiceRow
          image={serviceImage3}
          title="Technology Consulting"
          reverse={false}
        >
          Technology consulting at RRR Infotech focuses on enabling businesses to leverage innovation as a competitive advantage. We help organizations navigate complex technology decisions by evaluating current systems, identifying gaps, and recommending solutions aligned with business strategy.
          Our consultants work across digital transformation, cloud adoption, data platforms, and emerging technologies to ensure that technology investments deliver measurable value and long-term sustainability.
        </ServiceRow>

        <ServiceRow
          image={serviceImage4}
          title="Management Consulting"
          reverse
        >
          Our management consulting services are built around understanding how organizations operate at every level. We analyze processes, governance structures, and operational workflows to identify opportunities for improvement and growth.
          By combining data-driven insights with practical execution strategies, we help leaders design effective organizational models, streamline decision-making, and implement change initiatives that drive measurable business outcomes.
        </ServiceRow>
      </div>
    </div>
  );
}

function ServiceRow({ image, title, children, reverse }) {
  return (
    <div className={`service-row ${reverse ? 'reverse' : ''}`}>
      <div className="service-image">
        <img src={image} alt={title} loading="lazy" />
      </div>

      <div className="service-content">
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default Services;

