import "../styles/About.scss";

import TMDb from "../../public/images/TMDb.svg";



function About() {
  return (
    <div id="about-div">
      <div id="about-title-div">
        <h3 id="about-title">About</h3> 
      </div>
      <div className="line"></div> 
      <div className="about-container">
        <section>
          <h3>About the Project</h3>
          <p> KICK is an innovative movie discovery application designed for educational purposes.
             It offers a comprehensive database that organizes films based on their popularity,
              ratings, and release dates, enabling users to effortlessly navigate through a vast selection of movies.
               Users can personalize their experience by adding movies to their Favorites list and compiling a Watch List for future viewing.
          </p>
          <p>☆ This product uses the <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer noopener" id="tmdb-link">TMDb API</a> but is not endorsed or certified by TMDb.</p>
          <div>
            <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer noopener">
              <br/>
              <img src={TMDb}  alt="TMDb Logo"/>
            </a>
          </div>
        </section>
        <section>
          <h3>About the Team</h3>
          <p>KICK is the brainchild of a dedicated team passionate about leveraging technology to craft exceptional web development solutions.
             Our commitment to excellence and innovation drives us to continuously explore new avenues in technology,
              ensuring that FilmFindr remains at the forefront of digital movie discovery platforms.
          </p>
        </section>
      </div>
      <div className="line"></div> 
    </div>   
  );
}

export default About;