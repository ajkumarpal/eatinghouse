import react from "react";
import ErrorImg from './images/ErrorImage.gif';
import { Link } from 'react-router-dom';
const Error =()=>
{
    return(
            <>
                <div className="container mt-5">
                <div className="heading text-center mb-3">
                    <h3>Sorry !  Page Not Found</h3>
                    <div className="heading-break"></div>
                </div>
                   
                   <div className="row mx-5">
                   <img src={ErrorImg} class="img-fluid mt-5 text-center" alt="..." />
                   <div className="col-md-6 mt-5 float-start text-center">
                        <Link to="/" id="back">Back To Home</Link>
                    </div>
                    <div className="col-md-6 mt-5 float-end text-center">
                        <Link to="/contact" id="back">Contact Page</Link>
                    </div>
                   </div>
                </div>
                
            </>
    );

}
export default Error;