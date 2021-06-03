import react from "react";
import CommingSoon from './images/commingsoon.gif';
import { Link } from 'react-router-dom';
import Subscribe from "./Subscribe";
const Coming =()=>
{
    return(
            <>
                <div className="container mt-5">
                <div className="heading text-center mb-3">
                    <h3>WOW 😃 !  Coming Something new</h3>
                    <div className="heading-break"></div>
                </div>
                   
                   <div className="row mx-5 text-center">
                   <img src={CommingSoon} class="img-fluid mt-5 text-center" alt="..." style={{width: "75%", height: "30%", marginLeft: "10%"}} />
                   {/* <div className="col-md-6 mt-5 float-start text-center">
                        <Link to="/" id="back">Back To Home</Link>
                    </div>
                    <div className="col-md-6 mt-5 float-end text-center">
                        <Link to="/contact" id="back">Contact Page</Link>
                    </div> */}
                   </div>
                   <Subscribe />
                </div>
                
            </>
    );

}
export default Coming;