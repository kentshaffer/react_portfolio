import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_81tdjek', 'template_y1q8ev9', form.current, 'Z1sec7K5MAGC0wuy3')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col align-self-center'>
          <h1 className='text-center'>Contact</h1>
          <form ref={form} onSubmit={sendEmail}>

            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                type='name'
                name='name'
                className='form-control'
                id='name'
                placeholder='Your name here'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                className='form-control'
                id='email'
                placeholder='Your email here'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='message'>Message</label>
              <textarea
                name='message'
                className='form-control'
                id='message'
                placeholder='Your message here'
                rows='7'>
              </textarea>
            </div>

            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};



export default Contact;