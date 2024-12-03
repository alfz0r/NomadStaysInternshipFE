const Step3 = ({ formData, handleSubmit }) => (
    <div>
      <h2 className="mb-3">Step 3: Review Your Details</h2>
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
      </ul>
      <button
        className="btn btn-success mt-3"
        onClick={handleSubmit}
      >
        Confirm and Submit
      </button>
    </div>
  );
  
  export default Step3;
  