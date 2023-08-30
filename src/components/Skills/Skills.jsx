import React from 'react';
// import 'aos/dist/aos.css';
// import AOS from 'aos';

const Skills = () => {
  return (
    <>
      <div className='ps-3 pb-5'>
        <h3 data-aos="fade-up-right" data-aos-duration="2000" style={{ color: 'rgba(255, 204, 0, 0.952)' }}>MY SKILLS</h3>
        <div className="row mt-5">
          <div className="bar col-12 col-lg-6 col-md-6">
            <p className='about' data-aos="slide-right" data-aos-duration="500" style={{ color: 'antiquewhite' }}>WEB DEVELOPMENT</p>
            <p data-aos="slide-left" data-aos-duration="500" style={{ color: '#E9DCC9' }}>Experienced Web Developer skilled in HTML, CSS, Bootstrap, Tailwind, JavaScript, Reactjs, jQuery, PHP, Laravel, MySQL, and Firebase. Proficient in creating dynamic and responsive websites and applications that provide excellent user experiences.</p>
            <div data-aos="slide-left" data-aos-duration="500" className="dev-icons my-4">
              <i className="devicon-html5-plain colored"></i>
              <i className="devicon-css3-plain colored"></i>
              <i className="devicon-javascript-plain colored"></i>
              <i className="devicon-bootstrap-plain colored"></i>
              <i className="devicon-tailwindcss-plain colored"></i>
              <i className="devicon-react-original colored"></i>
              <i className="devicon-php-plain colored"></i>
              <i className="devicon-laravel-plain colored"></i>
              <i className="devicon-mysql-plain colored"></i>
              <i className="devicon-firebase-plain colored"></i>
            </div>
            <div className="progress progress-moved">
              <div className="progress-bar bg-warning progress-bar" role="progressbar" style={{ width: '95%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <br/><br/>
            <p className='about' data-aos="slide-right" data-aos-duration="500" style={{ color: 'antiquewhite' }}>UI UX DESIGN</p>
            <p data-aos="slide-left" data-aos-duration="500" style={{ color: '#E9DCC9' }}>Experienced UI/UX Designer proficient in creating intuitive and visually appealing digital experiences. Skilled in Photoshop, Adobe XD, Figma, and Canva, I transform concepts into stunning and user-centric designs.</p>
            <div data-aos="slide-left" data-aos-duration="500" className="dev-icons my-4">
              <i className="devicon-photoshop-plain colored"></i>
              <i className="devicon-xd-plain colored"></i>
              <i className="devicon-figma-plain colored"></i>
              <i className="devicon-canva-original colored"></i>
            </div>
            <div className="progress progress-moved1">
              <div className="progress-bar bg-warning progress-bar1" role="progressbar" style={{ width: '90%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div className="bar1 col-12 col-lg-6 col-md-6 ">
            <p className='about' data-aos="slide-right" data-aos-duration="500" style={{ color: 'antiquewhite' }}>ROBOTICS</p>
            <p data-aos="slide-left" data-aos-duration="500" style={{ color: '#E9DCC9' }}>
              Skilled in Robotics, C++, Kodular, Android Studio, and Arduino, I enjoy exploring creative tech projects. From coding in C++ to developing apps using Kodular and Android Studio, and tinkering with Arduino for hardware experiments.</p>
            <div data-aos="slide-left" data-aos-duration="500" className="dev-icons my-4">
              <i className="devicon-androidstudio-plain colored"></i>
              <i className="devicon-cplusplus-plain colored"></i>
              <i className="devicon-arduino-plain colored"></i>
            </div>
            <div className="progress progress-moved2">
              <div className="progress-bar bg-warning progress-bar2" role="progressbar" style={{ width: '85%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <br/><br/>
            <p className='about' data-aos="slide-right" data-aos-duration="500" style={{ color: 'antiquewhite' }}>IDE SOFTWARE</p>
            <p data-aos="slide-left" data-aos-duration="500" style={{ color: '#E9DCC9' }}>
            Fluent in multiple software IDEs including VS Code, Visual Studio, Atom, and Arduino IDE. These platforms are my creative hubs, where I code, design, and bring ideas to life effectively and innovate across different projects.</p>
            <div data-aos="slide-left" data-aos-duration="500" className="dev-icons my-4">
              <i className="devicon-visualstudio-plain colored"></i>
              <i className="devicon-vscode-plain colored"></i>
              <i className="devicon-atom-original colored"></i>
            </div>
            <div className="progress progress-moved3">
              <div className="progress-bar bg-warning progress-bar3" role="progressbar" style={{ width: '98%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
