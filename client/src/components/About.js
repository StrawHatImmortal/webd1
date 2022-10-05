import React from 'react'
import pic from '../images/luffy.jpeg'
const About = () => {
  return (
    <>
    <div class="container emp-profile">
        <div class="row">
            <div class="col-md-4">
                <div class="profile-img">
                    <img src={pic} alt="pic" />
                </div>
            </div>
            <div class="col-md-6">
                <div class="profile-head">
                    <h3>ABOUT ME</h3> 
                    
                    <h5><u> Sneh Shah</u></h5>
                    <h5><u> Web Developer</u></h5>
                  
                </div>
                <div class="tab-content profile-tab" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
    
                            
                        <div class="row">
                            <div class="col-md-6">
                                <label>Name</label>
                            </div>
                            <div class="col-md-6">
                                <p>Sneh SHAH</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label>Phone</label>
                            </div>
                            <div class="col-md-6">
                                <p>9955504121 </p>
                            </div>
                        </div> <div class="row">
                            <div class="col-md-6">
                                <label>Email</label>
                            </div>
                            <div class="col-md-6">
                                <p> snehshah1675@gmail.com</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label>Age</label>
                            </div>
                            <div class="col-md-6">
                                <p>19</p>
                            </div>
                        </div>
                        
                    </div>     
                </div>
            </div>
          
            </div>
        </div>
{/* </div> */}
    </>
  )
}

export default About