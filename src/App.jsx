import './App.css'
import { useState } from "react";
import { CV } from "./CV/CV";
import Hero from './Commponents/Hero/Hero';
import About from './Commponents/About/About';
import Education from './Commponents/Education/Education';
import Experience from './Commponents/Experience/Experience';
import More from './Commponents/More/More';

const { hero, education, experience, languages, habilities, volunteer } = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div>
      <div className='about'>
        <Hero hero={hero} />
          <h2>About me</h2>
        <About hero={hero} />
      </div>
      <div className='btn'>
            <button
              className="custom-btn"
              onClick={() => setShowEducation(true)}
            >
              Education
            </button>
            <button
              className="custom-btn"
              onClick={() => setShowEducation(false)}
            >
              Experience
            </button>
      </div>
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