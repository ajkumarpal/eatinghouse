import './App.css';
import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar,Nav,NavDropdown,Container,Carousel } from 'react-bootstrap';
import NavbarComponent from './NavbarComponent';
import Footer from './Footer';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Special from './Special';

import Services from './Services';
import ContactUs from './ContactUs';
import Price from './Price';
import Rating from './Rating';
import Error from './Error';
import Coming from './Coming';
import Partners from './Partners';

function App() {
  return (
    <>
    <Router>
    <NavbarComponent />
    
    <Switch>
       
          <Route exact path="/" component={Home} />
          <Route exact  path="/contact" component={ContactUs} />
          <Route exact path="/special" component={Special} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/price" component={Price} />
          <Route exact path="/rating" component={Rating} />
          <Route exact path="/coming" component={Coming} />
          
          <Route component={Error} />
          
          </Switch>
        <Footer />
      </Router>
     </>
  );
}

export default App;
