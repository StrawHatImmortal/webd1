import React from 'react'
import { NavLink } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
  MDBInputField
}
  from 'mdb-react-ui-kit';

const Contact = () => {
  return (
    <>
      <MDBContainer fluid>

        <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }} >
          <MDBCardBody>
            <MDBRow>
              <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-2 mt-2">Contact Us</p>

                <div className="d-flex flex-row align-items-center mb-1">
                  <MDBIcon fas icon="fas fa-info-circle me-2" size='lg' />
                  <MDBInput placeholder='Your Name' id='form2' type='email' width={20} />
                </div>

                <div className="d-flex flex-row align-items-center mb-1">
                  <MDBIcon fas icon="fas fa-at me-2" size='lg' />
                  <MDBInput placeholder='Your Email' id='form2' type='email' />
                </div>

                <div className="d-flex flex-row align-items-center mb-1">
                  <MDBIcon fas icon="fas fa-phone me-2" size='lg' />
                  <MDBInput placeholder='Phone Number' id='form3' type='password' />
                </div>

                <div className="d-flex flex-row align-items-center mb-1">
                  <MDBIcon fas icon="fas fa-comment-alt me-2" size='lg' />
                  <textarea class="form-control" id="textAreaExample" rows="4" cols='23' placeholder='Message'></textarea>
                </div>
                <MDBBtn className='mb-4' size='lg'>Send Message</MDBBtn>
              </MDBCol>

              <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                <div class="col-md-5 text-center" >
                  <ul class="list-unstyled mb-0">
                    <li><i class="fas fa-map-marker-alt fa-2x"></i>
                      <p>Ahmedabad, Gujarat, India</p>
                    </li>

                    <li><i class="fas fa-phone mt-4 fa-2x"></i>
                      <p>++91 9876543210</p>
                    </li>

                    <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                      <p>contact@mdbootstrap.com</p>
                    </li>
                  </ul>
                </div>
              </MDBCol>

            </MDBRow>
          </MDBCardBody>
        </MDBCard>

      </MDBContainer>
    </>
  )
}

export default Contact