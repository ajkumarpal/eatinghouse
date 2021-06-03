import react from "react";
import {Button,Card} from 'react-bootstrap';
import Nonveg from './images/nonveg.png';
import Veg from './images/veg.png';
import FastFood from './images/fastfood.png';
import Sweets from './images/sweets.png';
const Services =()=>
{
    return(
      <>
                <div className="container border-0 text-center mt-5">
                <div className="heading text-center mb-3">
                    <h3>Our Services</h3>
                    <div className="heading-break"></div>
                </div>
                <div className="row text-center">
                <div className="col-md-3 col-sm-4 mb-2">
                <div class="card border-0 shadow">
                    <img src={Veg} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text">Veg Foods</p>
                        <div className="line-break-div"></div>
                    </div>
                    </div>
                    </div> 
                    <div className="col-md-3 col-sm-4 mb-2">
                <div class="card border-0 shadow">
                    <img src={Nonveg} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text">Non-Veg Foods</p>
                        <div className="line-break-div"></div>
                    </div>
                    </div>
                    </div> 
                    <div className="col-md-3 col-sm-4 mb-2">
                <div class="card border-0 shadow">
                    <img src={FastFood} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text">Fast Foods</p>
                        <div className="line-break-div"></div>
                    </div>
                    </div>
                    </div> 
                    <div className="col-md-3 col-sm-4 mb-2">
                <div class="card border-0 shadow">
                    <img src={Sweets} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text">Sweets</p>
                        <div className="line-break-div"></div>
                    </div>
                    </div>
                    </div> 
                    </div>
                </div>
            
        </>
    );
};
export default Services;