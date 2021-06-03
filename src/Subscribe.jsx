import react from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const MySwal=()=>
{
    return(
Swal.fire(
    'Thanks For Subscribed !',
    'We will keep you in touch !',
    'success'
  )
  );
}
const Subscribe =() =>
    {
        return(
                <>
                          <div className="container mt-5">
                    <div className="heading text-center mb-3">
                    <h3>Subscribe Us</h3>
                    <h6>Subscribe us for new update and offers</h6>
                    <div className="heading-break"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center mt-5">
                            
                            <div class="input-group text-center">
                                <input id="subscribe" placeholder="Type here..." type="email" class="form-control border-end" aria-label="Text input  button" />
                                <div class="input-group-append">
                                    <button id="sub" class="btn btn shadow" type="button" onClick={MySwal}>Subscribe</button>
                                </div>
                                </div>
                        </div>
                    </div>
            
                </div>
                </>
        );

    }
    export default Subscribe;