import react from "react";
import { Switch, Route, Link } from 'react-router-dom';
import Logo from "./images/logo.png";

const Footer=()=>
{
    return(
        <>
            <div className="container-fluid mt-5 bg-dark">
                <div className="row">
                    <div className="col-md-3 mt-3">
                         <div className="footer-logo text-center">
                            <img src={Logo} />
                         </div>
                         <div className="footer-title">
                              <h6>Eating House is always ready to serve give a chance to express our love .<br />We are provide best services</h6>
                         </div>
                    </div>
                    <div className="col-md-3 mt-3">
                    <ul class="nav nav-pills">
                        <li class="nav-item" id="footer-links-title" >Quick Links</li>
                        </ul>
                       
                        <ul class="nav nav-pills">
                        <Link id="footer-style" to="./services"> <li  class="nav-item" id="footer-style">Services</li></Link>
                        </ul>
                       
                        <ul class="nav nav-pills">
                        <Link id="footer-style" to="./contact"><li class="nav-item" id="footer-style">Contact</li></Link>
                        </ul>
                        <ul class="nav nav-pills">
                        <Link id="footer-style" to="./price"><li class="nav-item" id="footer-style">Pricing</li></Link>
                        </ul> 
                        <ul class="nav nav-pills">
                     <Link id="footer-style" to="./rating"> <li class="nav-item" id="footer-style">Reviews</li></Link>
                        </ul>
                    </div>
                    <div className="col-md-3 mt-3">
                    <ul class="nav nav-pills">
                        <li class="nav-item" id="footer-links-title" >Social Links</li>
                        </ul>
                        <ul class="nav nav-pills">
                      <Link id="footer-style" to="">  <li class="nav-item" id="footer-style">Facebook</li></Link>
                        </ul>
                        <ul class="nav nav-pills">
                        <Link id="footer-style" to="">  <li class="nav-item" id="footer-style">Instagram</li></Link>
                        </ul>
                       
                        <ul class="nav nav-pills">
                        <Link id="footer-style" to=""><li class="nav-item" id="footer-style">LinkedIn</li></Link>  
                        </ul>
                        <ul class="nav nav-pills">
                        <Link id="footer-style" to="">  <li class="nav-item" id="footer-style">Twitter</li></Link>
                        </ul> 
                    </div>
                    <div className="col-md-3 mt-3">
                    <ul class="nav nav-pills">
                        <li class="nav-item text-center" id="footer-links-title" >We are here &nbsp;<span className="blink"><i class="far fa-hand-point-down"></i></span></li>
                        </ul>
                         <div className="map mt-3">
                         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56037.6364227508!2d77.26632767153973!3d28.619202271046664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3534ce7ebd1%3A0xb4884809885414ab!2sJoshi%20Eating%20House!5e0!3m2!1sen!2sin!4v1622381372627!5m2!1sen!2sin" ></iframe>
                         </div>
                    </div>
                   
                </div>
                <div className="footer-copyright pb-3">
                        <h5>All rights are reserved by <a href="https://www.linkedin.com/in/ajit-pal-253272b6/" target="_blank">AJIT KUMAR PAL</a></h5>
                   </div>
            </div>
        </>
    );

}
export default Footer;