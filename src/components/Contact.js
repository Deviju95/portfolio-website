import React, { useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import ModalMessage from './ModalMessage';

const Contact = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [isSent, setIsSent] = useState(false);

  const [toSend, setToSend] = useState({
    message: '',
  });
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // setShow(true);

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        toSend,
        process.env.REACT_APP_USER_ID
      )
      .then((response) => {
        // Modal Popup
        setIsSent(true);
        setShow(true);
        console.log('Message Send!', response.status, response.text);
      })
      .catch((err) => {
        setIsSent(false);
        setShow(true);
        console.log('Failed to Send Message.', err);
      });
  };

  return (
    <>
      <Row className='pt-5 pb-5' id='contact'>
        <Col md={12}>
          {/* Intro */}
          <Col>
            <p>contact</p>
            <h1>
              <mark>Lets chat!</mark>
            </h1>
          </Col>

          {/* Social */}
          <Col className='mt-4'>
            <h6 className='mt-4 mb-3'>Social</h6>
            <Row xs={2} sm={3} md={3} lg={4} className='g-4 social_links_style'>
              <Col>
                <a
                  href='mailto:jangju99@gmail.com'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div
                    style={{ backgroundColor: '#17CE3A' }}
                    className='social_icon_box'
                  >
                    <div className='social_icon'>
                      <MdEmail />
                    </div>
                  </div>
                  <p>
                    Email <br />
                    <small>jangju99@gmail.com</small>
                  </p>
                </a>
              </Col>
              <Col>
                <a
                  href='https://www.instagram.com/justin_j.ang/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div
                    style={{ backgroundColor: '#DD2A7B' }}
                    className='social_icon_box'
                  >
                    <div className='social_icon'>
                      <FaInstagram />
                    </div>
                  </div>
                  <p>
                    Instagram <br />
                    <small>@justin_j.ang</small>
                  </p>
                </a>
              </Col>
              <Col>
                <a
                  href='https://www.linkedin.com/in/justin-jang-b061a0174/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div
                    style={{ backgroundColor: '#2867B2' }}
                    className='social_icon_box'
                  >
                    <div className='social_icon'>
                      <FaLinkedinIn />
                    </div>
                  </div>
                  <p>
                    LinkedIn <br />
                    <small>Justin K. Jang</small>
                  </p>
                </a>
              </Col>
              <Col>
                <a
                  href='https://github.com/deviju95'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div
                    style={{ backgroundColor: '#333333' }}
                    className='social_icon_box'
                  >
                    <div className='social_icon'>
                      <FaGithub />
                    </div>
                  </div>
                  <p>
                    GitHub <br />
                    <small>deviju95</small>
                  </p>
                </a>
              </Col>
            </Row>
          </Col>

          {/* Drop me a line */}
          <Col>
            {/* using emailjs */}
            <form onSubmit={submitHandler}>
              <legend>Drop me a line—</legend>
              <div className='form-group row'>
                <Col sm={12} md={12} lg={8}>
                  <div className='form-group'>
                    <textarea
                      required
                      rows='3'
                      className='form-control'
                      type='text'
                      name='message'
                      value={toSend.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </Col>
              </div>

              <button type='submit' className='btn btn-primary mt-3'>
                Send
              </button>
            </form>
          </Col>
        </Col>
      </Row>

      {/* Modal */}

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        {isSent ? (
          <ModalMessage
            title='Message Sent Successfully!'
            body='Thank you for your message. Have a nice day :D'
          />
        ) : (
          <ModalMessage
            title='Message Failed :('
            body='Failed to process your message at this time. Feel free to reach out through above links at anytime!'
          />
        )}

        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Contact;
