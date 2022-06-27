import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiDribbble} from 'react-icons/fi'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/enrique-frauendorf-12010a238/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/FEnrique?tab=repositories" target='_blank'><FaGithub/></a>
        <a href="https://dribbble.com/EHFrauendorf" target='_blank'><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocial