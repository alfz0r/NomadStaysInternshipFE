const Step4 = ({ formData, handleSubmit }) => (
    <div>
      <h2 className="mb-3">Step 4: Review Your Details</h2>
      <ul className="list-group">
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
          <strong>Gender:</strong> {formData.gender}
        </li>
        <li className="list-group-item">
          <strong>Subscribe to newsletter:</strong> {formData.newsletter ? 'Subscribed' : 'Not subscribed'}
        </li>
        <li className="list-group-item">
          <strong>Receive notifications:</strong> {formData.notifications ? 'Notifications on' : 'Notifications off'}
        </li>
        
      </ul>
      <button
        className="btn btn-success mt-3"
        onClick={handleSubmit}
      >
        Confirm and Submit
      </button>
    </div>
  );
  
// const Step4 = ({ formData, handleSubmit, handleChange, errors }) => {
//     <div>
//         <h2>Date of Birth</h2>
//     <div className="form-group mt-3">
//     <label>Date of Birth</label>
//     <input
//       type="date"
//       className={`form-control ${errors.dob ? 'is-invalid' : ''}`}
//       name="dob"
//       placeholder="Date of Birth"
//       value={formData.dob}
//       onChange={handleChange}
//     />
//     {errors.dob && <div className="invalid-feedback">{errors.dob}</div>}
//   </div>


//   </div>


// }

export default Step4;