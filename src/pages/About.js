import { Helmet } from 'react-helmet';
import axios from 'axios';
import FsLightbox from 'fslightbox-react';
import React, { useEffect, useState } from 'react';
import * as Icon from 'react-feather';
import ProgressiveImage from 'react-progressive-image';
import Layout from '../components/Layout';
import Sectiontitle from '../components/Sectiontitle';
import Goals from '../components/Goals';

function About() {
  const [toggler, setToggler] = useState(false);
  const [information, setInformation] = useState('');
  const [goals, setGoals] = useState([]);

  const handleToggler = (event) => {
    setToggler({
      toggler: !toggler,
    });
  };

  useEffect(() => {
    axios.get('/api/information').then((response) => {
      setInformation(response.data);
    });
    axios.get('/api/goals').then((response) => {
      setGoals(response.data);
    });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>{`Sobre - ${information.name}`}</title>
        <meta
          name="description"
          content="Chester React Personal Portfolio Template About Page"
        />
      </Helmet>
      <div className="mi-about-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="Sobre mi" />
          <div className="row">
            <div className="col-lg-5">
              <div className="mi-about-image">
                <ProgressiveImage
                  src={information.aboutImage}
                  placeholder="/images/about-image-placeholder.png"
                >
                  {(src) => (
                    <img
                      src={src}
                      alt="aboutimage"
                      onClick={() => handleToggler(!toggler)}
                    />
                  )}
                </ProgressiveImage>
                <span className="mi-about-image-icon">
                  <Icon.ZoomIn />
                </span>
                <FsLightbox
                  toggler={toggler}
                  sources={[information.aboutImageLg]}
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="mi-about-content">
                <h3>
                  Soy <span className="color-theme">{information.name}</span>
                </h3>
                <p>{information.aboutContent}</p>
                <ul>
                  {!information.name ? null : (
                    <li>
                      <b>Nombre</b> {information.name}
                    </li>
                  )}
                  {!information.age ? null : (
                    <li>
                      <b>Edad</b> {information.age} Años
                    </li>
                  )}
                  {!information.phone ? null : (
                    <li>
                      <b>Teléfono</b> {information.phone}
                    </li>
                  )}
                  {!information.nationality ? null : (
                    <li>
                      <b>Nacionalidad</b> {information.nationality}
                    </li>
                  )}
                  {!information.language ? null : (
                    <li>
                      <b>Idiomas</b> {information.language}
                    </li>
                  )}
                  {!information.englishlevel ? null : (
                    <li>
                      <b>Inglés</b> {information.englishlevel}
                    </li>
                  )}
                  {!information.email ? null : (
                    <li>
                      <b>Correo</b> {information.email}
                    </li>
                  )}
                  {!information.address ? null : (
                    <li>
                      <b>Dirección</b> {information.address}
                    </li>
                  )}
                  {!information.freelanceStatus ? null : (
                    <li>
                      <b>Freelance</b> {information.freelanceStatus}
                    </li>
                  )}
                  {!information.githubImage ? null : (
                    <li>
                      <b>Estadísticas GitHub</b>
                    </li>
                  )}
                </ul>
              </div>
              <div className="mi-about-content">
                <img src={information.githubImage} alt="githubImage" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mi-goal-area mi-section mi-padding-top  mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Metas Personales de Aprendizaje" />
          <div className="mi-goal-wrapper">
            <div className="row mt-30-reverse">
              {goals.map((goal) => (
                <div
                  className="col-lg-4 col-md-6 col-12 mt-30"
                  key={goal.title}
                >
                  <Goals content={goal} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mi-review-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Reviews" />
          <div className="row justify-content-center">
            <div className="col-12">
              <Slider className="mi-testimonial-slider" {...sliderSettings}>
                {reviews.map((review) => (
                  <Testimonial key={review.id} content={review} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div> */}
    </Layout>
  );
}

export default About;
