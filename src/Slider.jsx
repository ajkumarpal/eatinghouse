import react from 'react';
import ImgOne from './images/advt1.jpg';
import ImgTwo from './images/advt2.jpg';
import ImgThree from "./images/advt3.jpg";
import ImgFour from "./images/advt4.jpg";
import ImgFive from "./images/advt5.jpg";
import { Carousel } from 'react-bootstrap';

const Slider =()=>
{
    return(

            <>
            <br></br>
            <br></br>
            
                <Carousel variant="dark">
  <Carousel.Item>
    <img className="d-block w-100" src={ImgOne} alt="First slide"
    />
    <Carousel.Caption>
      {/* <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"src={ImgTwo} alt="Second slide"
    />
    <Carousel.Caption>
      {/* <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"src={ImgThree} alt="Third slide"
    />
    <Carousel.Caption>
      {/* <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"src={ImgFour} alt="Third slide"
    />
    <Carousel.Caption>
      {/* <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"src={ImgFive} alt="Third slide"
    />
    <Carousel.Caption>
      {/* <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  

            </>
    );
};
export default Slider;