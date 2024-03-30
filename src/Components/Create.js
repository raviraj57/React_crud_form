import React, { useState, useEffect } from "react";
import { useLocation,Link } from "react-router-dom";
import "./create.css";

const Create = (props) => {
  const initialFormData = {
    UserID:"",
    Name: "",
    Email: "",
    Address: "",
    DOB: "",
    Age: "",
    Phone: "",
    Gender: "",
    Hobbies: {
      cricket: false,
      hockey: false,
      chess: false,
      polo: false,
    },
  };

  const [formData, setFormData] = useState(initialFormData);
  const [editIndex, setEditIndex] = useState(null);
  const location = useLocation();
  const {submittedData, setSubmittedData} = props;
  useEffect(() => {
    if(location.state){
      setFormData(submittedData[location.state.index]);
      console.log(submittedData[location.state.index]);
      setEditIndex(location.state.index);
    }
  },[location.state, submittedData]);

  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
  
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        Hobbies: {
          ...formData.Hobbies,
          [name]: checked,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleRadio = (value) => {
    setFormData({...formData, Gender: value})
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    

    if (editIndex !== null) {
      const updatedData = [...submittedData];
      updatedData[editIndex] = formData;
      setSubmittedData(updatedData);
      setEditIndex(null);
      setFormData(initialFormData)
    } else {
      setSubmittedData([...submittedData, formData]);
    }
  
    setFormData(initialFormData);
    window.alert("Form submitted successfully!");
  };

  

  return (
    <> 
      <div>
      
        <h2>Person Details::</h2>
        <form onSubmit={handleSubmit} className="form-container">

       
       
        
          <div>
            <label>UserName:</label>
            <input
              type="text"
              name="Name"
              
              value={formData.Name}
              onChange={handleChange}
            />
          </div>
       
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="Email"
              
              value={formData.Email}
              onChange={handleChange}
            />
          </div>
         
          <div>
            <label>Address:</label>
            <textarea
              type="text"
              name="Address"
            
              value={formData.Address}
              onChange={handleChange}
            />
          </div>
     
          <div>
            <label>DOB:</label>
            <input
              type="text"
              placeholder="dd-mm-yyyy"
              name="DOB"
            
              value={formData.DOB}
              onChange={handleChange}
            />
          </div>
         
          <div>
            <label>Age:</label>
            <input
              type="number"
              name="Age"
              // required
              value={formData.Age}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label>Phone:</label>
            <input
              type="number"
              name="Phone"
              // required
              value={formData.Phone}
              onChange={handleChange}
            />
          </div>
        
          <div>
            <label> Hobbies::<br></br>
              <input
                type="checkbox"
                name="cricket"
                checked={formData.Hobbies.cricket}
                onChange={handleChange}
              />
              Cricket
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="hockey"
                checked={formData.Hobbies.hockey}
                onChange={handleChange}
              />
              Hockey
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="chess"
                checked={formData.Hobbies.chess}
                onChange={handleChange}
              />
              Chess
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="polo"
                checked={formData.Hobbies.polo}
                onChange={handleChange}
              />
              Polo
            </label>
          </div>
          
          <div className="Gender">
            <label >Gender:</label>
            <input
              type="radio"
              name="male"
              value='male'
              checked={formData.Gender === 'male'}
              onChange={() => handleRadio('male')}
            />
            Male
            <input
              type="radio"
              name="female"
              value='female'
              checked={formData.Gender === 'female'}
              onChange={() =>  handleRadio('female')}
            />
            Female
            <input
              type="radio"
              name="other"
              value='other'
              checked={formData.Gender === 'other'}
              onChange={() =>  handleRadio('other')}
            />
            Others
          </div>
          
          <button type="submit" className="submit-button">submit
          
          </button>
        </form>
        <div className="link-container">
  <Link to="/update">After submiting your form <b><u>Go to update page</u></b> To view your details:</Link>
</div>

      </div>
    </>
  );
};

export default Create;
