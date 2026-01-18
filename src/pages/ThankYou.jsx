import { Link } from "react-router-dom";
import Header from "../components/Header";

function ThankYou() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <div>
          <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "20px" }}>
            Thank You!
          </h1>

          <p style={{ fontSize: "1.2rem", marginBottom: "30px", color: "#555" }}>
            We’ve received your message successfully.  
            Our team will reach out to you shortly.
          </p>

          <Link
            to="/home"
            style={{
              display: "inline-block",
              padding: "12px 24px",
              backgroundColor: "#0d6efd",
              color: "#fff",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
