import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

function Add_Contries() {

 
const [formValue, setFormValue] = useState({
  countryname:"",
  created_at:""
 
});

const onChange = (j) => {
  setFormValue({ ...formValue, id: new Date().getTime().toString(), [j.target.name]:j.target.value, });

};
const onSubmit = async (p) => {
  p.preventDefault();
 
      const result = await axios.post(`http://localhost:3000/countries`, formValue);  
        toast.success('Your Country has been Added Successfully.');
        setFormValue({ ...formValue, categoryname:"", categorydesc:"", categoryimage:"" });  

}

  return (
    <div>
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-head-line"> Add Contries </h1>
              <h1 className="page-subhead-line">
                Add Contries in your Website using this Form.
              </h1>
            </div>
          </div>
          {/* /. ROW  */}
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="panel panel-info">
                <div className="panel-heading"> Add Contries </div>
                <div className="panel-body">
                  <form role="form">

                  <div className="form-group">
                      <label> Country Name </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter Country Name here..."
                        name="countryname"
                        onChange={onChange}
                      />
                    </div>

                    <hr />
                    <div className="text-center">
                      <button type="submit" className="btn btn-info" onClick={onSubmit}>
                        Add Country
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /. PAGE INNER  */}
      </div>
      {/* /. PAGE WRAPPER  */}
    </div>
  );
}

export default Add_Contries;
