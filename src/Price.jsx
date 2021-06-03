import react from 'react';
const Price=()=>
{
    return(
                <>
                     <div className="container mt-5">
                    <div className="heading text-center mb-3">
                    <h3>Price</h3>
                    <h6>This is our charges for our quality services</h6>
                    <div className="heading-break"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 price-card shadow ">
                        <ul class="list-group list-group-flush text-center">
                            <li class="list-group-item bg-dark-gray p-3" id="price-title"><h3>VEG FOOD</h3></li>
                            <li class="list-group-item">Normal/Basic</li>
                            <li class="list-group-item">Delux Plate</li>
                            <li class="list-group-item">Super Delux Plate</li>
                            <li class="list-group-item">Extra Loaded</li>
                            <li class="list-group-item"></li>
                        </ul>
                        </div>
                        <div className="col-md-3">
                        <ul class="list-group list-group-flush text-center">
                            <li class="list-group-item bg-dark-gray p-3" id="price-title"><h3>NON-VEG FOOD</h3></li>
                            <li class="list-group-item">Normal/Basic</li>
                            <li class="list-group-item">Delux Plate</li>
                            <li class="list-group-item">Super Delux Plate</li>
                            <li class="list-group-item">Extra Loaded</li>
                            <li class="list-group-item"></li>
                        </ul>
                        </div>
                        <div className="col-md-3 price-card shadow">
                        <ul class="list-group list-group-flush text-center">
                            <li class="list-group-item bg-dark-gray p-3" id="price-title"><h3>FAST FOOD</h3></li>
                            <li class="list-group-item">Normal/Basic</li>
                            <li class="list-group-item">Delux Plate</li>
                            <li class="list-group-item">Super Delux Plate</li>
                            <li class="list-group-item">Extra Loaded</li>
                            <li class="list-group-item"></li>
                        </ul>
                        </div>
                        <div className="col-md-3">
                        <ul class="list-group list-group-flush text-center">
                            <li class="list-group-item bg-dark-gray p-3" id="price-title"><h3>Sweets FOOD</h3></li>
                            <li class="list-group-item">Normal/Basic</li>
                            <li class="list-group-item">Delux Plate</li>
                            <li class="list-group-item">Super Delux Plate</li>
                            <li class="list-group-item">Extra Loaded</li>
                            <li class="list-group-item"></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </>
    );
}
export default Price;