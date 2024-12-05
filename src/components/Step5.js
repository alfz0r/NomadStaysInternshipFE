const Step5 = ({ formData, handleSubmit  }) => (

    <div>

<h2 className="mb-3">Step 5: Review Your Details</h2>
      <ul className="list-group">
        <li className="list-group-item">
          <strong>Date of birth:</strong> {formData.dob}
        </li>
        <li className="list-group-item">
          <strong>File uploaded:</strong> {formData.docpicker}
        </li>
        <li className="list-group-item">
          <strong>Comment:</strong> {formData.textarea}
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


export default Step5;