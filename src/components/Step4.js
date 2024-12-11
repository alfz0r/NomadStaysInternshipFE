import React, { useState } from 'react';

const Step4 = ({ formData, handleSubmit }) => {
  const [editing, setEditing] = useState(false); // starea de editare
  const [updatedFormData, setUpdatedFormData] = useState({ ...formData }); // Stare pentru datele editate

  const handleSave = () => {
    debugger
    localStorage.setItem('formData', JSON.stringify(updatedFormData));
    setEditing(false);
    handleSubmit(updatedFormData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedFormData({
      ...updatedFormData,
      [name]: value,
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Step 4: Review Your Details</h2>
      {editing ? (
        <div className="card p-4 shadow">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              className="form-control"
              name="name"
              value={updatedFormData.name}
              onChange={handleInputChange}
              placeholder="Name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              name="email"
              value={updatedFormData.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              className="form-control"
              name="address"
              value={updatedFormData.address}
              onChange={handleInputChange}
              placeholder="Address"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">City</label>
            <input
              className="form-control"
              name="city"
              value={updatedFormData.city}
              onChange={handleInputChange}
              placeholder="City"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">ZIP Code</label>
            <input
              className="form-control"
              name="zip"
              value={updatedFormData.zip}
              onChange={handleInputChange}
              placeholder="ZIP"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Date of Birth</label>
            <input
              className="form-control"
              name="dob"
              value={updatedFormData.dob}
              onChange={handleInputChange}
              placeholder="Date of Birth"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">File Uploaded</label>
            <input
              className="form-control"
              name="docpicker"
              value={updatedFormData.docpicker}
              onChange={handleInputChange}
              placeholder="Document Picker"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Notes</label>
            <textarea
              className="form-control"
              name="textarea"
              value={updatedFormData.textarea}
              onChange={handleInputChange}
              placeholder="Notes"
            />
          </div>
          <button
            className="btn btn-primary"
            onClick={() => {
              setEditing(false);
              handleSave(); // Trimite datele actualizate
            }}
          >
            SAVE
          </button>
        </div>
      ) : (
        <div>
          <ul className="list-group shadow">
            <li className="list-group-item">
              <strong>Name:</strong> {formData.name}
            </li>
            <li className="list-group-item">
              <strong>Email:</strong> {formData.email}
            </li>
            <li className="list-group-item">
              <strong>Address:</strong> {formData.address}
            </li>
            <li className="list-group-item">
              <strong>City:</strong> {formData.city}
            </li>
            <li className="list-group-item">
              <strong>ZIP Code:</strong> {formData.zip}
            </li>
            <li className="list-group-item">
              <strong>Date of Birth:</strong> {formData.dob}
            </li>
            <li className="list-group-item">
              <strong>File Uploaded:</strong> {formData.docpicker}
            </li>
            <li className="list-group-item">
              <strong>Notes:</strong> {formData.textarea}
            </li>
          </ul>
          <button
            className="btn btn-primary mt-3"
            onClick={() => setEditing(true)}
          >
            EDIT
          </button>
        </div>
      )}
    </div>
  );
};

export default Step4;
