import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Alert from 'react-bootstrap/Alert'
import '../../styles/Contact.css';

const styles = {
  textInput: {
    backgroundColor: 'rgb(81, 80, 80)',
    color: 'white',
    borderColor: 'white',
    boxShadow: 'pink',
  },
  pageText: {
    color: 'white',
    marginBottom: '2%'
  },
  pageHeaderText: {
    color: 'white',
    marginBottom: '2%',
    marginTop: '3%'
  },
  bodyContainer: {
    backgroundColor: 'rgb(22, 22, 22)',
    height: '100vh'
  },
  emailBtn: {
    backgroundColor: 'palevioletred',
    marginTop: '2%',
    borderColor: 'White'
  },
  pageBreak: {
    borderBottom: '0.5px',
    borderColor: 'palevioletred',
    borderStyle: 'solid',
    width: '15%',
    marginBottom: '1%',
    marginTop: '2%'
  },
  formGroup: {
    width: '60vw'
  }
}

const Contact = () => {
  const form = useRef();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
  };
  const handleSubmit = (event) => {
    event.preventDefault()
    sendEmail()
  }
  const sendEmail = () => {
    emailjs.sendForm('service_81tdjek', 'template_y1q8ev9', form.current, 'Z1sec7K5MAGC0wuy3')
      .then((result) => {
        <Alert variant='success'>
          Message successfully sent!
        </Alert>
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div style={styles.bodyContainer}>
      <div className='container'>
        <div className='row'>
          <div className='col align-self-center'>
            <h1 style={styles.pageHeaderText} className='text-center'>Let's Talk</h1>
            <form ref={form} onSubmit={handleSubmit}>

              <div style={styles.formGroup} className='form-group'>
                <label style={styles.pageText} htmlFor='name'>Name</label>
                <input
                  style={styles.textInput}
                  type='name'
                  name='name'
                  className='form-control'
                  id='name'
                  placeholder='Your name here'
                  onChange={handleInputChange}
                  value={form.name}
                />
              </div>

              <div style={styles.pageBreak} />

              <div style={styles.formGroup} className='form-group'>
                <label style={styles.pageText} htmlFor='email'>Email</label>
                <input
                  style={styles.textInput}
                  type='email'
                  name='email'
                  className='form-control'
                  id='email'
                  placeholder='Your email here'
                />
              </div>

              <div style={styles.pageBreak} />

              <div style={styles.formGroup} className='form-group'>
                <label style={styles.pageText} htmlFor='message'>Message</label>
                <textarea
                  style={styles.textInput}
                  name='message'
                  className='form-control'
                  id='message'
                  placeholder='Your message here'
                  rows='7'
                  onChange={handleInputChange}
                  value={form.message}
                >
                </textarea>
              </div>

              <button style={styles.emailBtn} id='btn' type='submit' className='btn'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Contact;