import react from "react";
import Partner_one from "./images/Partners/partner1.PNG";
import Partner_two from "./images/Partners/partner2.PNG";
import Partner_three from "./images/Partners/partner3.PNG";
import Partner_four from "./images/Partners/partner4.PNG";
import Partner_five from "./images/Partners/partner5.PNG";
import Partner_six from "./images/Partners/partner6.PNG";
import { Carousel } from 'react-bootstrap';
const Partners =()=>
{
    return(

        <>
            <div className="container mt-5">
            <div className="heading text-center mb-3">
                    <h3>Our Partners</h3>
                    <div className="heading-break"></div>
                </div>
            <div className="carousel-body text-center">
            
            <Carousel  variant="dark" >
                    <Carousel.Item>
                    <div class="card" id="custumer-card"  >
                       <div className="row">
                       <div className="col-md-6 col-sm-12 shadow">
                        <img src={Partner_one} class="card-img-top" alt="Partner" style={{height: "100%"}} />
                       
                        </div>
                        <div className="col-md-6 col-sm-12 shadow">
                            <img src={Partner_two} class="card-img-top" alt="Partner" style={{height: "100%"}} />
                                
                            </div>
                        </div>
                        </div>
                        
                    </Carousel.Item>
                    <Carousel.Item>
                    <div class="card" id="custumer-card">
                    <div className="row">
                       <div className="col-md-6 col-sm-12">
                        <img src={Partner_three} class="card-img-top" alt="Partner" style={{height: "100%"}} />
                        
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <img src={Partner_four} class="card-img-top" alt="Partner" style={{height: "100%"}} />
                            
                        
                            </div>
                        </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div class="card" id="custumer-card">
                    <div className="row">
                       <div className="col-md-6 col-sm-12">
                        <img src={Partner_five} class="card-img-top" alt="Partner" style={{height: "100%"}} />
                       
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <img src={Partner_six} class="card-img-top" alt="Partner" style={{height: "100%"}} />
                                
                        
                            </div>
                        </div>
                        </div>
                    </Carousel.Item>
                    </Carousel>
                   
            </div>

            </div>
        </>
    );
}
export default Partners;