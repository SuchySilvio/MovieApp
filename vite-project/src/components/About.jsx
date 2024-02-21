// Import the SCSS file for styling
import "../styles/About.scss";

// About component definition
function About() {
  return (
    <div className="about-container">
      <h3>About</h3>
      <div className="line"></div>
      <p>This is a movie app created for educational use.</p>
      {/* Add TMDb attribution here */}
      <div className="line"></div>
    </div>
  );
}

// Export the About component
export default About;
