import './App.css'
import { useState } from "react";
import { CV } from "./CV/CV";
import Hero from './Commponents/Hero/Hero';
import About from './Commponents/About/About';
import Education from './Commponents/Education/Education';
import Experience from './Commponents/Experience/Experience';
import More from './Commponents/More/More';

const { hero, education, experience, languages, habilities, volunteer } = CV;

const App = () => {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="App">
      <div>
        <Hero hero={hero} />
        <div className="divider">
          <span></span>
          <span>About me</span>
          <span></span>
        </div>
        <About hero={hero} />
      </div>
      <nav>
        <div className="divider">
          <span></span>
          <span>
            <button
              className="custom-btn btn-4"
              onClick={() => setShowEducation(true)}
            >
              Education
            </button>
            <button
              className="custom-btn btn-4"
              onClick={() => setShowEducation(false)}
            >
              Experience
            </button>
          </span>
          <span></span>
        </div>
      </nav>
      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
      <More
        languages={languages}
        habilities={habilities}
        volunteer={volunteer}
      />
      <br />
      <br />
    </div>
  );
}

export default App;