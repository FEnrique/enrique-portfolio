import React from 'react';
import './about.css';
import ME from '../../assets/Me.jpeg';
import {FaAward} from 'react-icons/fa';
import {VscFolderLibrary} from 'react-icons/vsc';
import {BsLaptop} from 'react-icons/bs';
import {GiSkills} from 'react-icons/gi';
import {IoIosBusiness} from 'react-icons/io';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Studying</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>2+ Completed</small>
            </article>
          </div>

          <p>
            <ul>
              <li><BsLaptop/> Hardworking College Student seeking employment.</li>
              <li><GiSkills/> Bringing forth a motivated attitude and a variety of powerful skills.</li>
              <li><IoIosBusiness/> Committed to utilizing my skills to further the mission of a company.</li>
            </ul>
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
      
    </section>
  )
}

export default About