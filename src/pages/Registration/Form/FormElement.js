import React, {Component} from 'react';

export class FormElement extends Component {

    render() {
        return (
        <div class="container">
            <form>
                <div className="row jumbotron">
                    <h2 className="text-center" style={{marginBottom:"20px", marginTop:"-20px"}}>Registration</h2>
                    <div className="col-sm-6 form-group">
                        <label htmlFor="name-f">Full Name</label>
                        <input type="text" className="form-control" name="fname" id="name-f" placeholder="Enter your full name." required/>
                    </div>
                    <div className="col-sm-6 form-group">
                        <label htmlFor="nik">NIK</label>
                        <input type="number" className="form-control" name="nik" id="nik" placeholder="Enter your number of identity." required/>
                    </div>
                    <div className="col-sm-6 form-group">
                        <label htmlFor="place_birth">Place Of Birth</label>
                        <input type="text" className="form-control" name="place_birth" placeholder="place of birth"/>
                    </div>
                    <div className="col-sm-6 form-group">
                        <label htmlFor="Date">Date Of Birth</label>
                        <input type="Date" name="dob" className="form-control" id="Date" placeholder="" required/>
                    </div>
                    <div className="col-sm-6 form-group">
                        <label htmlFor="sex">Gender</label>
                        <select id="sex" className="form-control browser-default custom-select">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    <div className="col-sm-6 form-group">
                        <label htmlFor="religion">Religion</label>
                        <select id="religion" className="form-control browser-default custom-select">
                            <option value="Buddha">Buddha</option>
                            <option value="Hindu">Hindu</option>
                            <option value="Hindu">Islam</option>
                            <option value="Hindu">Konghucu</option>
                            <option value="Hindu">Kristen</option>
                        </select>
                    </div>

                    <div className="col-sm-6 form-group">
                        <label htmlFor="blood_type">Blood Type</label>
                        <select id="blood_type" className="form-control browser-default custom-select">
                        <option value="Buddha">A</option>
                        <option value="Hindu">B</option>
                        <option value="Hindu">AB</option>
                        <option value="Hindu">O</option>
                        </select>
                    </div>
                    <div className="col-sm-6 form-group">
                        <label htmlFor="marital_status">Marital Status</label>
                        <select id="marital_status" className="form-control browser-default custom-select">
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                            <option value="Divorced">Divorced</option>
                        </select>
                    </div>

                    <div className="col-sm-6 form-group">
                        <label htmlFor="wife_name">Wife's Name</label>
                        <input type="text" className="form-control" name="wife_name" placeholder="enter your wife's name"/>
                    </div>

                    <div className="col-sm-6 form-group">
                        <label htmlFor="husband_name">Husband's Name</label>
                        <input type="number" className="form-control" name="husband_name" placeholder="enter your husband name"/>
                    </div>

                    <div className="col-sm-6 form-group">
                        <label htmlFor="number_child">Number of Child</label>
                        <input type="number" className="form-control" name="number_child" placeholder="Number of child"/>
                    </div>

                    <div className="col-sm-6 form-group">
                        <label htmlFor="mother_name">Mother's Name</label>
                        <input type="text" className="form-control" name="mother_name" placeholder="mother_name"/>
                    </div>

                    <div className="col-sm-6 form-group">
                        <label htmlFor="address-1">Domisili Address</label>
                        <input type="address" className="form-control" name="Locality" id="address-1" placeholder="Locality/House/Street no." required/>
                    </div>

                    <div className="col-sm-6 form-group">
                        <label htmlFor="zip">Postal-Code</label>
                        <input type="zip" className="form-control" name="Zip" id="zip" placeholder="Postal-Code." required/>
                    </div>

                    <div className="col-sm-6 form-group">
                        <label htmlFor="tel">Phone Number</label>
                        <input type="tel" name="phone" className="form-control" id="tel" placeholder="Enter Your Contact Number." required/>
                    </div>

                    <div className="col-sm-6 form-group">
                        <label htmlFor="emergency_number">Emergency Number</label>
                        <input type="tel" name="emergency_number" className="form-control" id="tel"
                               placeholder="Enter Your Emergency Number." required/>
                    </div>

                    <div className="col-sm-6 form-group">
                        <label htmlFor="account_name">Account Name</label>
                        <input type="text" name="account_name" class="form-control" id="account_name" placeholder="Enter your Account Name." required/>
                    </div>
                    <div class="col-sm-6 form-group">
                        <label htmlFor="account_number">Account Number</label>
                        <input type="number" name="account_number" className="form-control" id="account_number" placeholder="Enter your account number." required/>
                    </div>

                    <div className="col-sm-6 form-group">
                        <label htmlFor="npwp">NPWP</label>
                        <input type="number" name="npwp" className="form-control" id="npwp"
                               placeholder="Enter your NPWP number." required/>
                    </div>

                    <div className="col-sm-6 form-group">
                        <label htmlFor="name_npwp">Name's NPWP</label>
                        <input type="text" name="name_npwp" className="form-control" id="name_npwp"
                               placeholder="Enter your NPWP names." required/>
                    </div>

                    <div className="col-sm-12 form-group mb-0">
                        <button className="btn btn float-right" style={{backgroundColor:"#292961", color:"white", width:"20%", marginTop:"10px", borderRadius:"20px"}}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
        )
    }
}


export default FormElement