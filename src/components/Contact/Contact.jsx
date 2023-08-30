import React from 'react';

const Contact = () => {
  const headingText = "Let's Connect !";

  const handleContactButtonClick = () => {
    window.location.href = 'mailto:mcdharnelpagaragan@gmail.com';
  };

  return (
    <section id='contact'>
      <h1 style={{ color: "#C2C2C2" }} data-aos="slide-up" data-aos-duration="500" className='letContact'>
        {headingText.split('').map((letter, index) => (
          <span key={index} className="bounce-letter" style={{ animationDelay: `${index * 0.1}s` }}>{letter}</span>
        ))}
      </h1>
      <div className='btnBoxContact' data-aos="slide-down" data-aos-duration="500">
        <button
          type="button"
          className="btn btn-warning btnContactMe"
          onClick={handleContactButtonClick}
        >
          <i className="bi bi-chat pe-2"></i>
          Message Me
        </button>
      </div>
    </section>
  );
}

export default Contact;
