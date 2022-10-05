import React,{useState} from 'react'
import {NavLink,useNavigate} from 'react-router-dom';
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
}
    from 'mdb-react-ui-kit';

const Signup = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",email:"", phone:"",work:"",password:"",cpassword:""
    });
    let name, value;

    const handleInputs = (event)=>{
        console.log(event);
        name = event.target.name;
        value = event.target.value;

        setUser({...user,[name]:value});
    }

    const PostData = async (event) =>{
        event.preventDefault();
        const{name,email,phone,work,password,cpassword} =user;
        const res = await fetch("/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,phone,work,password,cpassword
            })
        });
        const data = await res.json();
        if(data.status === 422 || !data){
            window.alert("Invalid");
            console.log("Invalid");
        }
        else{
            window.alert("Success");
            console.log("Sucess");
            navigate.push('/login');
        }
    }

    return (
        <>
            <MDBContainer fluid>
                <MDBCard method="POST" className='text-black m-5' style={{ borderRadius: '25px' }}>
                    <MDBCardBody >
                        <MDBRow>
                            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-2 mt-2">Sign up</p>

                                <div className="d-flex flex-row align-items-center mb-2 ">
                                    <MDBIcon fas icon="user-circle me-3" size='lg' />
                                    <MDBInput name='name' value={user.name} onChange={handleInputs} placeholder='Your Name' id='form1' type='text' className='w-100' />

                                </div>

                                <div className="d-flex flex-row align-items-center mb-2">
                                    <MDBIcon fas icon="envelope me-3" size='lg' />
                                    <MDBInput name='email' value={user.email} onChange={handleInputs} placeholder='Your Email' id='form2' type='email' />

                                </div>

                                <div className="d-flex flex-row align-items-center mb-2">
                                    <MDBIcon fas icon="fas fa-phone me-3" size='lg' />
                                    <MDBInput name='phone' value={user.phone} onChange={handleInputs} placeholder='Mobile Number' id='form3' type='number' />

                                </div>

                                <div className="d-flex flex-row align-items-center mb-2">
                                    <MDBIcon fas icon="briefcase me-3" size='lg' />
                                    <MDBInput name='work' value={user.work} onChange={handleInputs} placeholder='Your Profession' id='form4' type='text' />

                                </div>

                                <div className="d-flex flex-row align-items-center mb-2">
                                    <MDBIcon fas icon="key me-3" size='lg' />
                                    <MDBInput name='password' value={user.password} onChange={handleInputs} placeholder='Password' id='form4' type='password' />

                                </div>

                                <div className="d-flex flex-row align-items-center mb-2">
                                    <MDBIcon fas icon="key me-3" size='lg' />
                                    <MDBInput name='cpassword' value={user.cpassword} onChange={handleInputs} placeholder='Confirm your password' id='form4' type='password' />

                                </div>
                                <MDBBtn className='mb-3' size='lg' onClick={PostData}>Register</MDBBtn>

                                <NavLink to='/login'>Already have an account? Sign in</NavLink>
                            </MDBCol>

                            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                                <figure>
                                    <MDBCardImage src='https://egymerch.com/site_assets/assets/imgs/login/login.png' height={400}/>
                                </figure>
                            </MDBCol>

                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>

            </MDBContainer>
        </>
    )
}

export default Signup