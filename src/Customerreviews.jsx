import react from "react";
import Amit from './images/man.png';
import Varsha from "./images/actress.png";
import Aastha from "./images/woman.png";
import { Carousel } from 'react-bootstrap';
const Customerreviews =()=>
{
    return(

        <>
            <div className="container mt-5">
            <div className="heading text-center mb-3">
                    <h3>Our Customers</h3>
                    <div className="heading-break"></div>
                </div>
            <div className="carousel-body text-center">
            
            <Carousel  variant="dark">
                    <Carousel.Item>
                    <div class="card" id="custumer-card"  >
                        <img src={Amit} class="card-img-top" alt="AMIT" />
                        <div class="card-body">
                        <h5 style={{color: "black"}}>Amit Kumar</h5>
                        <div className="heading-break"></div>
                        <p style={{color: "black"}}>Food is really great, ma and family really enjoy this Night.</p>
                        </div>
                        </div>
                        
                    </Carousel.Item>
                    <Carousel.Item>
                    <div class="card" id="custumer-card">
                        <img src={Varsha} class="card-img-top" alt="AMIT" />
                        <div class="card-body">
                        <h5 style={{color: "black"}}>Varsha</h5>
                        <div className="heading-break"></div>
                        <p style={{color: "black"}}>Behaviour of the hotel Staff is really great.</p>
                        </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div class="card" id="custumer-card">
                        <img src={Aastha} class="card-img-top" alt="AMIT" />
                        <div class="card-body">
                        <h5 style={{color: "black"}}>Aastha</h5>
                        <div className="heading-break"></div>
                        <p style={{color: "black"}}>Memorable Night, Thank You Eating House.</p>
                        </div>
                        </div>
                    </Carousel.Item>
                    </Carousel>
                   
            </div>

            </div>
        </>
    );
}
export default Customerreviews;