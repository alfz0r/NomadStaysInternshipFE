const Step4 = ({ formData, handleChange, errors }) => (
    <div className="container mt-4">
      <h2 className="mb-3">Step 4: Address Information</h2>
  
      
      <div className="form-group mb-3">
        <label className="form-label">Date of Birth</label>
        <input
          type="date"
          className={`form-control ${errors.dob ? 'is-invalid' : ''}`}
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />
        {errors.dob && <div className="invalid-feedback">{errors.dob}</div>}
      </div>
  
      
      <div className="form-group mb-3">
        <label className="form-label">Choose File to Upload</label>
        <input
          type="file"
          className={`form-control ${errors.docpicker ? 'is-invalid' : ''}`}
          name="docpicker"
          accept=".pdf"
          onChange={handleChange}
        />
        {errors.docpicker && <div className="invalid-feedback">{errors.docpicker}</div>}
      </div>
  
      
      <div className="form-group mb-3">
        <label className="form-label">Comment</label>
        <textarea
          rows={8}
          className={`form-control ${errors.textarea ? 'is-invalid' : ''}`}
          placeholder="Write a comment..."
          name="textarea" // Ensure the name matches the formData key
          value={formData.textarea}
          onChange={handleChange}
        />
        {errors.textarea && <div className="invalid-feedback">{errors.textarea}</div>}
      </div>
    </div>
  );
  
  export default Step4;
  