import React from 'react'
import "./contact.css"
import emailjs from "emailjs-com"
import { useRef } from 'react';
import { MdOutlineEmail } from "react-icons/md"
import { AiOutlineLinkedin } from "react-icons/ai"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gj90bql', 'template_ijecupe', form.current, 'c-n3_7l9XcIg2G_kZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Business Email</h4>
            <h5>cglinkadesigns.com</h5>
            <a href="mailto:christopher@cglinkadesigns.com" target="_blank" rel='noreferrer'>Send a message</a>
          </article>
          <article className='contact__option'>
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Personal Email</h4>
            <h5>glinkachris@gmail.com</h5>
            <a href="mailto:glinkachris@gmail.com" target="_blank" rel='noreferrer'>Send a message</a>
          </article>
          <article className='contact__option'>
            <AiOutlineLinkedin className="contact__option-icon"/>
            <h4>LinkedIn</h4>
            <h5>Christopher Glinka</h5>
            <a href="https://www.linkedin.com/in/christopher-glinka-4b5b7b1a1/" target="_blank" rel='noreferrer'>Follow Me</a>
          </article>
        </div>
        {/* End of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact