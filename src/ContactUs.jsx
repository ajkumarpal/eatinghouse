import react from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const Contact=()=>
{
    return(
Swal.fire(
    'Thanks For Submiting Here !',
    'We will keep you in touch !',
    'success'
  )
  );
}
const ContactUs=()=>
{
    return(
            <>
                   <div className="container mt-5">
                    <div className="heading text-center mb-3">
                    <h3>Contact Us</h3>
                    <div className="heading-break"></div>
                    </div>
                    <div className="row shadow p-5">  
                    <div class=" col-md-6 mb-3">
                        <label for="FName" className="form-label"> First Name<span className="require">*</span></label>
                        <input type="text" className="form-control under" id="FName" />
                    </div>
                    <div class=" col-md-6 mb-3">
                        <label for="LName" className="form-label"> Last Name</label>
                        <input type="text" className="form-control under" id="LName" />
                    </div>
                    <div className="col-md-6">
                    <div class="mb-3">
                        <label for="Email" className="form-label">Email Address<span className="require">*</span></label>
                        <input type="email" className="form-control" id="Email"  />
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div class="mb-3">
                        <label for="Phone" className="form-label">Phone Number<span className="require">*</span></label>
                        <input type="tel" className="form-control" id="Phone"  />
                        </div>
                        </div>
                        <div class="mb-3">
                        <label for="Subject" className="form-label">Subject<span className="require">*</span></label>
                        <input type="text" className="form-control" id="Subject"  />
                    </div>
                    <div class="mb-3">
                    <label for="Message" class="form-label">Message <span className="require">*</span></label>
                    <textarea class="form-control" id="Message" rows="2"></textarea>
                    </div>
                    <div class="input-group-append text-center">
                                    <button id="sub" class="btn btn shadow" type="button" onClick={Contact}>Submit</button>
                                </div>
                    </div>
                    </div>
            </>
    );

}
export default ContactUs;