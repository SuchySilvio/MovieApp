// Import package.json from the parent directory
import packageJson from '../../package.json';

// Import SCSS styles for the Footer component
import '../styles/Footer.scss';

function Footer () {
    // Getting the current year
    const currentYear = new Date().getFullYear();

    // Extracting contributors from package.json, defaulting to an empty array if not present
    const contributors = packageJson.contributors || [];

    // Joining contributor names with " & " separator
    const contributorNames = contributors.join(' & ');
    
    // Footer component JSX
    return (
        <footer>
            {/* Displaying the copyright year and contributor names */}
            <p>&copy; {currentYear} - Developed by {contributorNames}</p>

            {/* Link to the GitHub repository */}
            <a href="">
                View the code{/* GitHub logo */}
                <img src="../public/images/GitHub-logo.png" id="footer-github-icon" alt="Footer github icon"/>
            </a>
        </footer>
    )
}

// Export Footer component
export default Footer;