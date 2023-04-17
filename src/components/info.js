import React from "react";
import Pic from "../dp.jpg";
export default function Info() {
    return (
        <div className="card-info">
        <div className="img-div"><img src={Pic} alt="dp" className="dp" /></div>
            
            <h1 className="name">Debmalya Sen</h1>
            <span className="work">Frontned Developer</span><br />
            <span className="address">Kolkata,India</span> 
            <br />
            <div className="socials">
            <button className="social-links" id="email" onClick={Email}><i class="fa-solid fa-envelope"></i>Email</button>
            <button className="social-links " onClick={LinkedIn}><i class="fa-brands fa-linkedin"></i>LinkedIN</button>
    

            </div>


      
        
              
        </div>
    )
}

function LinkedIn() {
    window.open('https://www.linkedin.com/in/debmalyasen1/', '_blank');
  }
  function Email() {
    window.location.href = 'mailto:debmalyasen37@gmail.com';
  }
