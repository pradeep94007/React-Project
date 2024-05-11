import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Add_Products() {
  const [formValue, setFormValue] = useState({
    cate_name: "",
    product_name: "",
    desc: "",
    price: "",
    discounted_price: "",
    img_url: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  function Validation(){
    if(formValue.cate_name=="" ||
      formValue.product_name=="" ||
      formValue.desc=="" ||
      formValue.price ==""||
      formValue.discounted_price ==""||
      formValue.img_url==""){
        toast.error("Please fill in all the required fields.");
        return false
      }
      return true
  }

  const onSubmit = async (event) => {
    event.preventDefault();
   if( Validation()){

    try {
      await axios.post(`http://localhost:3000/${formValue.cate_name.toLowerCase()}`, formValue);
      setFormValue({
        cate_name: "",
        product_name: "",
        desc: "",
        price: "",
        discounted_price: "",
        img_url: "",
      });
      alert("Data sent successfully");
    } catch (error) {
      console.error("Error sending data:", error);
      alert("Failed to send data. Please try again.");
    }
   }

  };

  return (
    <div>
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-head-line"> Add Products </h1>
              <h1 className="page-subhead-line">
                Add Products in your Website and Manage Products page into Admin Panel using this Form.
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="panel panel-success">
                <div className="panel-heading"> Add Products Form</div>
                <div className="panel-body">
                  <form onSubmit={onSubmit}>
                    <div className="form-group">
                      <label> Category Name </label>
                      <select
                        className="form-control"
                        name="cate_name"
                        onChange={onChange}
                        value={formValue.cate_name}
                      >
                        <option disabled value=""> Select Category </option>
                        <option value="Casual"> Casual Outfit </option>
                        <option value="Ethnic"> Ethnic Outfit </option>
                        <option value="Businessprofessional"> Business Professional Outfit </option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label> Product Name </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter the Product Name here..."
                        name="product_name"
                        value={formValue.product_name}
                        onChange={onChange}
                      />
                    </div>

                    <div className="form-group">
                      <label> Product Description </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter the Product Description here..."
                        name="desc"
                        value={formValue.desc}
                        onChange={onChange}
                      />
                    </div>

                    <div className="form-group">
                      <label> Price </label>
                      <input
                        className="form-control"
                        type="number"
                        placeholder="Enter the Main Price of Product ( ₹ )"
                        name="price"
                        value={formValue.price}
                        onChange={onChange}
                      />
                    </div>

                    <div className="form-group">
                      <label> Discounted Price </label>
                      <input
                        className="form-control"
                        type="number"
                        placeholder="Enter the Discounted Price of Product ( ₹ )"
                        name="discounted_price"
                        value={formValue.discounted_price}
                        onChange={onChange}
                      />
                    </div>

                    <div className="form-group">
                      <label> Product Image URL </label>
                      <input
                        className="form-control"
                        type="url"
                        placeholder="Enter the Product Image URL"
                        name="img_url"
                        value={formValue.img_url}
                        onChange={onChange}
                      />
                    </div>

                    <hr />
                    <div className="text-center">
                      <button type="submit" className="btn btn-success"> Add Product </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add_Products;
