import React from 'react';
import 'aos/dist/aos.css'; 
import AOS from 'aos';




const About = () => {

  return (
    <>
  
            <div className="col-12 col-lg-12 col-md-6">
              <h3 data-aos="fade-up-right" data-aos-duration="2000" style={{ color: 'rgba(255, 204, 0, 0.952)' }}>ABOUT ME</h3>
              <p data-aos="fade-up-left" data-aos-duration="500" style={{ color: 'rgba(255, 204, 0, 0.952)' }}>I am a Designer and Developer based in Philippines</p>
              <p data-aos="fade-down-right" data-aos-duration="500" style={{ color: 'antiquewhite' }}>Hello! I am <span className='about'>Mc. Dharnel Pagaragan</span>, a proud graduate of AMA University with a degree in <span className='about'>Computer Engineering</span>, hailing from the beautiful region of Isabela. My unyielding passion lies in the realm of web development and software engineer, particularly in the capacity of a <span className='about'>Full-stack Web Developer</span>. My journey has been one of continuous growth, and at present, I am channeling my efforts into honing my front-end expertise.</p>
              <p data-aos="fade-down-left" data-aos-duration="500" style={{ color: 'antiquewhite' }}>Through my recent completion of the <span className='about'>Fullstack Web Dev program at KodeGo Bootcamp</span>, I not only fortified my front-end proficiency but also had the privilege of acquainting myself with an array of other cutting-edge technologies. This multifaceted training has brought me leaps closer to my aspiration of becoming a versatile and adept Full-stack Web Developer.</p>
              {/* <div><button   type="button" className="btn btn-warning">DOWNLOAD CV</button></div> */}
          </div>
         
    </>
  );
}

export default About;
