import Header from '../components/Header';
import './industries.css';

import backgroundImage from '../assets/images/bkindustries.jpg';
import image1 from '../assets/images/communicationindustry.jpg';
import image2 from '../assets/images/educationindustry.jpg';
import image3 from '../assets/images/informationindustry.jpg';
import image4 from '../assets/images/technologyindustry.jpg';

function Industries() {
  return (
    <div className="industries-page">
      <Header />

      {/* HERO */}
      <div
        className="industries-hero"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      <div className="industries-section">

        <IndustryRow
          title="Communications"
          image={image1}
        >
          Communication services enable the seamless transmission of information
          across systems, organizations, and individuals. They play a critical
          role in connecting businesses with customers, partners, and service
          providers while supporting collaboration and informed decision-making.
          Effective communication strengthens operational efficiency, builds
          trust, and enhances public perception in an increasingly connected
          world.
        </IndustryRow>

        <IndustryRow
          title="Education"
          image={image2}
          reverse
        >
          Educational institutions focus on empowering individuals through
          structured learning and skill development. From schools and universities
          to vocational training centers and digital learning platforms, education
          services help shape knowledgeable, adaptable, and future-ready
          communities across diverse sectors.
        </IndustryRow>

        <IndustryRow
          title="Information Services"
          image={image3}
        >
          Information services involve collecting, processing, and delivering
          data that supports informed decision-making across organizations.
          Businesses rely on information services for analytics, research,
          reporting, and strategic insights that enhance operational efficiency
          and competitive advantage in complex markets.
        </IndustryRow>

        <IndustryRow
          title="Technology"
          image={image4}
          reverse
        >
          The technology industry drives innovation through the development of
          hardware, software, digital platforms, and intelligent systems.
          Technology enables organizations to optimize processes, enhance
          productivity, and adapt to evolving digital ecosystems in a rapidly
          changing global landscape.
        </IndustryRow>

      </div>
    </div>
  );
}

function IndustryRow({ title, image, children, reverse }) {
  return (
    <div className={`industry-row ${reverse ? 'reverse' : ''}`}>
      <div className="industry-content">
        <h2>{title}</h2>
        <p>{children}</p>
      </div>

      <div className="industry-image">
        <img src={image} alt={title} loading="lazy" />
      </div>
    </div>
  );
}

export default Industries;
