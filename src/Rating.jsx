import react from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const Rate=()=>
{
    const inputOptions = new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            '#ff00ff0': 'POOR',
            '#ff0000': 'GOOD',
            '#00ff00': 'BETTER',
            '#0000ff': 'BEST'
          })
        }, 1000)
      })
      
      const { value: color } =  Swal.fire({
        title: 'Choose And Rate Us',
        input: 'radio',
        inputOptions: inputOptions,
        inputValidator: (value) => {
          if (!value) {
            return 'Please Choose and rate us!'
          }
        }
      })
      
      if (color) {
        Swal.fire({ html: `You selected: ${color}` })
      }
}
const Rating =()=>
{
    return(
                <>
                        <div className="container mt-5">
                            <div className="heading text-center mb-3">
                                <h3>Rating</h3>
                                <h6>Rate us on the basis of our services and quality, this helps us to improve</h6>
                                <div className="heading-break"></div>
                            </div>
                            <div className="row shadow p-5"> 
                            <div class=" col-md-12 mb-3">
                        <label for="FName" className="form-label">Name<span className="require">*</span></label>
                        <input type="text" className="form-control under" id="FName" />
                    </div>
                            <div class="mb-3">
                            <label for="Message" class="form-label">Message<span className="require">*</span></label>
                            <textarea class="form-control" id="Message" rows="2"></textarea>
                            </div> 
                            <div class="input-group-append text-center">
                                    <button id="sub" class="btn btn shadow" type="submit" onClick={Rate} >Submit</button>
                                </div>
                            </div>
                         </div>   
                 
                </>
    );
}
export default Rating;