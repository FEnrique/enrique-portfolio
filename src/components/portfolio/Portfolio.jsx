import React from 'react';
import './portfolio.css';
import NC from '../../assets/Netflix-clone.png';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={NC} alt="Netflix-Clone-img" />
          </div>

          <h3>Netflix Clone</h3>
            <a href="https://github.com/FEnrique/netflix-clone" target='_blank' className='btn'>Github</a>
            <a href="https://netflix-clone-vscode.web.app/" target='_blank' className='btn btn-primary'>Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio