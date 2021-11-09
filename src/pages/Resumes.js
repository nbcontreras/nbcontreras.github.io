import { Helmet } from 'react-helmet';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TrackVisibility from 'react-on-screen';
import Sectiontitle from '../components/Sectiontitle';
import Smalltitle from '../components/Smalltitle';
import Layout from '../components/Layout';
import Progress from '../components/Progress';
import Resume from '../components/Resume';

function Resumes() {
  const [information, setInformation] = useState('');
  const [skills, setSkills] = useState([]);
  const [workingExperience, setWorkingExperience] = useState([]);
  const [educationExperience, setEducationExperience] = useState([]);

  useEffect(() => {
    axios.get('/api/information').then((response) => {
      setInformation(response.data);
    });
    axios.get('/api/skills').then((response) => {
      setSkills(response.data);
    });
    axios.get('/api/experience').then((response) => {
      setWorkingExperience(response.data.workingExperience);
      setEducationExperience(response.data.educationExperience);
    });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>{`Resumen - ${information.name}`}</title>
        <meta name="description" content={`Resumen - ${information.name}`} />
      </Helmet>
      <div className="mi-skills-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="Mis Habilidades" />
          <div className="mi-skills">
            <div className="row mt-30-reverse">
              {skills.map((skill) => (
                <TrackVisibility
                  once
                  className="col-lg-3 mt-30"
                  key={skill.title}
                >
                  <Progress
                    title={skill.title}
                    percentage={skill.value}
                    icon={skill.icon}
                  />
                </TrackVisibility>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Resumen" />
          <Smalltitle title="Experiencia laboral" icon="briefcase" />
          <div className="mi-resume-wrapper">
            {workingExperience.map((workingExp) => (
              <Resume key={workingExp.id} resumeData={workingExp} />
            ))}
          </div>
          <div className="mt-30"></div>
          <Smalltitle title="Educación" icon="book" />
          <div className="mi-resume-wrapper">
            {educationExperience.map((educatonExp) => (
              <Resume key={educatonExp.id} resumeData={educatonExp} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Resumes;
