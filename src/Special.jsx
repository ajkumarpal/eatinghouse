import react from "react";
import {Button,Card} from 'react-bootstrap';
import Chef from './images/chef.png';
import SpecialNight from './images/specialnight.png';
import HotFood from './images/hotfood.png';
import HomeDelivery from './images/delivery.png';
const Special =()=>
{
    return(
      <>
                <div className="container border-0 text-center mt-5">
                <div className="heading text-center mb-3">
                    <h3>Our Speciality</h3>
                    <div className="heading-break"></div>
                </div>
                <div className="row text-center">
                <div className="col-md-3 col-sm-4 mb-2">
                <div class="card border-0 shadow">
                    <img src={Chef} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text">Experience Chef</p>
                        <div className="line-break-div"></div>
                    </div>
                    </div>
                    </div> 
                    <div className="col-md-3 col-sm-4 mb-2">
                <div class="card border-0 shadow">
                    <img src={SpecialNight} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text">Special Night Dinner</p>
                        <div className="line-break-div"></div>
                    </div>
                    </div>
                    </div> 
                    <div className="col-md-3 col-sm-4 mb-2">
                <div class="card border-0 shadow">
                    <img src={HotFood} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text">Hot Food</p>
                        <div className="line-break-div"></div>
                    </div>
                    </div>
                    </div> 
                    <div className="col-md-3 col-sm-4 mb-2">
                <div class="card border-0 shadow">
                    <img src={HomeDelivery} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text">Home Delivery</p>
                        <div className="line-break-div"></div>
                    </div>
                    </div>
                    </div> 
                    </div>
                </div>
            
        </>
    );
};
export default Special;