import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';




const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullTexts = ["I'm Mc.Dharnel", "Computer Engineer", "Frontend Developer"];
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    AOS.init();

    console.log("AOS initialized");
    let flipCount = 0;

    const typingInterval = setInterval(() => {
      const nextChar = fullTexts[textIndex][typedText.length];
      if (nextChar) {
        setTypedText((prevText) => prevText + nextChar);
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const flipAnimation = () => {
      if (flipCount < 5) {
        flipCount++;
        document.querySelector('.imgBox1').style.animation = 'infiniteFlip 4s infinite';
      } else {
        clearInterval(flipInterval);
      }
    };

    const flipInterval = setInterval(flipAnimation, 3000);

    const handleScroll = () => {
      AOS.refresh(); // Refresh AOS animations on scroll
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(typingInterval);
      clearInterval(flipInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [typedText, textIndex]);

  useEffect(() => {
    const textChangeInterval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % fullTexts.length);
      setTypedText('');
    }, 5000);

    return () => {
      clearInterval(textChangeInterval);
    };
  }, [textIndex]);

  const showCursor = typedText.length < fullTexts[textIndex].length;

  
  const [collapsed, setCollapsed] = useState(false);

  const toggleIcons = () => {
    setCollapsed(!collapsed);
  };
  
    // const buttonData = [
    //   "devicon-html5-plain colored",
    //   "devicon-css3-plain colored",
    //   "devicon-javascript-plain colored",
    //   "devicon-bootstrap-plain colored",
    //   "devicon-firebase-plain colored",
    //   "devicon-php-plain colored",
    //   "devicon-laravel-plain colored",
    //   "devicon-tailwindcss-plain colored",
    //   "devicon-arduino-plain colored",
    //   "devicon-react-original colored",
    // ];

  return (
    <>
    
      <div className="container-fluid" id="home">
      <div className="custom-shape-divider-bottom1-1692281193">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill1"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill1"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill1"></path>
          </svg>
      </div>
        <div className="container">
       
          <div className="row">
            <div className="col-12 col-lg-6 col-md-6 py-5" >
              <h5  data-aos="slide-left" data-aos-duration="2000" style={{ color: 'rgba(255, 204, 0, 0.952)' }}>Hello</h5> 
              <div
                        className="arm-waving"
                        data-aos="slide-left"
                        data-aos-duration="2000"
                        style={{
                            position: 'absolute',
                            top: '1.6rem',
                            left: 'calc(7% + 30px)',
                            fontSize: '40px',
                            animation: 'waveAnimation 2s infinite',
                        }}
                        >
                        👋
                        </div>
              <h1 className='sm-my-5' style={{ color: 'antiquewhite', position: 'relative' }}>
                <div style={{ height: '70px', display: 'flex', alignItems: 'center' }}>
                    {typedText && (
                    <span>
                        <span style={{ color: 'white', fontSize: '50px' }}>
                        {typedText.slice(0, typedText.indexOf(' ') + 1)}
                        </span>
                        <strong style={{ color: 'rgba(255, 204, 0, 0.952)', fontSize: '55px' }}>
                        {typedText.slice(typedText.indexOf(' ') + 1, typedText.length)}
                        </strong>
                        {showCursor && <span className="typing-cursor">|</span>}

                       
                    </span>
                    )}
                </div>
                </h1>
              <p data-aos="fade-up-right" data-aos-duration="2000" style={{ color: 'antiquewhite' }}>
                A passionate designer and developer with a keen eye for aesthetics and a strong technical background. I believe that the marriage of design and development is a powerful combination that allows me to create innovative and user-centered digital experiences.
              </p>
              <br />
              <div className="hireMeContainer">
                  <a href="https://drive.google.com/file/d/16nw9cc47zvhZTnPK-QJ7qK5qFyD9nlkq/view?usp=sharing" download="McResume.pdf">
                    <div data-aos="slide-down" data-aos-duration="3000">
                    <button type="button" className="btn btn-warning btnHero"><i className="bi bi-download pe-2"></i>
                        My CV
                      </button>
                    </div>
                  </a>
              </div>
              <br />
              <div className="icons-container" style={{display: "flex"}}>
                <div className="icons" data-aos="slide-up" data-aos-duration="2000">
                  <a href=""><i className="bi-facebook iconsPadding"></i></a>
                </div>
                <div className="icons" data-aos="slide-up" data-aos-duration="1500">
                  <a href=""><i className="bi-google dark iconsPadding"></i></a>
                </div>
                <div className="icons" data-aos="slide-up" data-aos-duration="1000">
                  <a href=""><i className="bi-twitter white iconsPadding"></i></a>
                </div>
                <div className="icons" data-aos="slide-up" data-aos-duration="500">
                  <a href=""><i className="bi-linkedin dark iconsPadding"></i></a>
                </div>
              </div>

            </div>
            {/* <BiRightTopArrowCircle /> */}
        <div className="col-12 col-lg-6 col-md-6 d-flex justify-content-center align-items-center">
          <div className="atom-container">
            <div className="atom">
              <div className="electron"></div>
              <div className="electron-alpha"></div>
              <div className="electron-omega"></div>
            </div>
            <div className="imgBox1">
              <img className="img1" src="images/mc1-1.png" alt="" />
              {/* <div className="circle-button" onClick={toggleIcons}><a style={{ color: 'rgb(37, 37, 37)' }} className="navbar-brand logo fa-battle-net1">
            <span className="wave-text">M</span>C
          </a></div>
              <div className={`circle-buttons ${collapsed ? 'collapsed' : ''}`}>
              {buttonData.map((buttonClass, index) => (
                <div
                  key={index}
                  className={`circle-button ${buttonClass}`}
                  style={{
                    animationDelay: `${index * 0.1}s`, // Adjust the delay as needed
                  }}
                ></div>
              ))}
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
        
        <div className="custom-shape-divider-bottom-1692281193 ">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
          </svg>
      </div>
      </div>
      
     
      
    </>
  );
};

export default Hero;
