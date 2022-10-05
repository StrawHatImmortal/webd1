import React from 'react'
import {NavLink} from 'react-router-dom';
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
    MDBCheckbox
}
    from 'mdb-react-ui-kit';

const Login = () => {
    return (
        <>
            <MDBContainer fluid>

                <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-2 mt-2">Login</p>

                                <div className="d-flex flex-row align-items-center mb-1">
                                    <MDBIcon fas icon="envelope me-2" size='lg' />
                                    <MDBInput placeholder='Your Email' id='form2' type='email' />
                                </div>

                                <div className="d-flex flex-row align-items-center mb-1">
                                    <MDBIcon fas icon="lock me-2" size='lg' />
                                    <MDBInput placeholder='Password' id='form3' type='password' />
                                </div>

                                <MDBBtn className='mb-4' size='lg'>Sign up</MDBBtn>
                                <NavLink to='/signup'>Create Your account </NavLink>
                            </MDBCol>

                            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                                <figure>
                                    <MDBCardImage src='https://egymerch.com/site_assets/assets/imgs/login/login.png' height={300}/>
                                </figure>
                            </MDBCol>

                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>

            </MDBContainer>
        </>
    )
}

export default Login