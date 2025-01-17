import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

function AddCategories() {



// <<-------------<-<-< Create Empty Object of Input names usign useState hook. >->->------------->>
const [formValue, setFormValue] = useState({
  categoryname:"",
  categorydesc:"",
  categoryimage:"",
  
  // status:"available"
});
// <<-------------<-<-< create onChange Function for Target and Get Input Values >->->------------->>
const onChange = (j) => {
  setFormValue({ ...formValue, id: new Date().getTime().toString(),  [j.target.name]:j.target.value, });
 
};
// <<-------------<-<-< Add Products Form Validation >->->------------->>
function Validation() 
{

  // ---------------< Category Name Validation >---------------
  if (formValue.categoryname == "") 
  {
    toast.error('Please fill the Category Name for Add Category.');
  
    return false
  }  
  // ---------------< Category Description Validation >---------------
  if (formValue.categorydesc == "") 
  {
    toast.error('Please fill the Category Description for Add Category.');
 
    return false

  }  
  // ---------------< Category Image URL Validation >---------------
  if (formValue.categoryimage == "") 
  {
    toast.error('Please fill the Category Image URL for Add Category.');
   
    return false

  }  
  return true;
}



// <<-------------<-<-< Create onSubmit function for formValue POST to Manage_Product & Show Product in webiste  >->->------------->>
const onSubmit = async (p) => {
  p.preventDefault();
  if (Validation()) 
  {
      const result = await axios.post(`http://localhost:3000/categories`, formValue);  

      if (result.status == 201) 
      {
        toast.success('Your Category has been Added Successfully.');
        setFormValue({ ...formValue, categoryname:"", categorydesc:"", categoryimage:"" });  
        return true;
      }

    else
    {
      toast.warning('Please Check the Category Name Correctly!');
      return false;
    }

  }
}


  return (
    <div>
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-head-line"> Add Categories </h1>
              <h1 className="page-subhead-line">
                Add Categories in your Website using this Form.
              </h1>
            </div>
          </div>
          {/* /. ROW  */}
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="panel panel-info">
                <div className="panel-heading"> Add Category  Form</div>
                <div className="panel-body">
                  <form role="form">

                    <div className="form-group">
                      <label> Categories Name </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter the Categories Name here..."
                        name="categoryname"
                        value={formValue.categoryname}
                        onChange={onChange}
                      />
                    </div>

                    <div className="form-group">
                      <label>  Category Description </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter the Category Description here..."
                        name="categorydesc"
                        value={formValue.categorydesc}
                        onChange={onChange}
                      />
                    </div>

                    <div className="form-group">
                      <label>  Category Image URL </label>
                      <input
                        className="form-control"
                        type="url"
                        placeholder="Enter the Category Image URL here..."
                        name="categoryimage"
                        value={formValue.categoryimage}
                        onChange={onChange}
                      />
                    </div>

                    <hr />
                    <div className="text-center">
                      <button type="submit" className="btn btn-info" onClick={onSubmit}>
                        Add Category
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

export default AddCategories;
