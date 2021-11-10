import React from 'react';
import * as Icon from 'react-feather';
import LineIcon from 'react-lineicons';

function Portfolio(props) {
  const { html_url, description, name, language } = props.content;

  const GithubIconSytle = {
    color: '#55e62d',
    fontWeight: 'bold',
    fontSize: '3.2em',
  };

  return (
    <div className="mi-portfolio mi-portfolio-visible">
      <div className="mi-portfolio-image">
        <LineIcon name="github-original" style={GithubIconSytle} />

        <ul>
          {html_url ? (
            <li>
              <a rel="noopener noreferrer" target="_blank" href={html_url}>
                <Icon.Link />
              </a>
            </li>
          ) : null}
        </ul>
      </div>
      {description ? <h6>{description}</h6> : null}
      {!html_url ? (
        <h6>{name}</h6>
      ) : (
        <h6>
          <a rel="noopener noreferrer" target="_blank" href={html_url}>
            {name}
          </a>
        </h6>
      )}
      <small>{language}</small>
    </div>
  );
}

export default Portfolio;
