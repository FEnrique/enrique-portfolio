import React from 'react';
import './portfolio.css';
import NC from '../../assets/Netflix-clone.png';
import EP from '../../assets/enrique-portfolio.png';

const Portfolio = () => {

  const data = [
  {
    id: 1,
    image: NC,
    title: 'Netflix Clone', 
    github: 'https://github.com/FEnrique/netflix-clone',
    demo: 'https://netflix-clone-vscode.web.app/'
  },
  {
    id: 2,
    image: EP,
    title: `Enrique's Portfolio`,
    github: 'https://github.com/FEnrique/enrique-portfolio',
    demo: 'https://enrique-frauendorf-portfolio.web.app/'
  }
]

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio