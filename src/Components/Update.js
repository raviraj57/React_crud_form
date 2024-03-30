import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Update.css'


const Update = ({submittedData, setSubmittedData}) => {
 
  const navigate = useNavigate();
  console.log(submittedData);
 
  const handleEdit = (index) => {
    navigate('/',{
      state:{index:index}
    })
  };

  const handleDelete = (index) => {
    const updatedData = submittedData.filter((_,i) => i!== index);
    setSubmittedData(updatedData);
  };



  return (
    <>
    <div className='container'>
    <div className="link-section">
    <Link to="/">Add User:</Link>
  </div>
      <h2>Submitted Data::</h2>
        <table className="data-table">
          <thead>
            <tr>
            <th>User ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
              <th>DOB</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Hobbies</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {submittedData.map((data, index) => (
             <tr key={index}>
                 <td>{index+1}</td>
                <td>{data.Name}</td>
                <td>{data.Email}</td>
                <td>{data.Address}</td>
                <td>{data.DOB}</td>
                <td>{data.Age}</td>
                <td>{data.Phone}</td>
                <td>
                  {Object.entries(data.Hobbies)
                    .filter(([key, value]) => value)
                    .map(([key]) => key)
                    .join(", ")}
                </td>
                <td>{data.Gender}</td>
                <td>
               
            <div className='button-container'>
            <button onClick={() => {handleEdit(index) }} >Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    </>
  )
}

export default Update