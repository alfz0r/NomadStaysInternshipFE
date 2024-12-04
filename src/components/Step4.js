

const Step4 = ({ formData, handleChange, errors }) => (
    <div>
      <h2 className="mb-3">Step 4: Address Information</h2>
      <div className="form-group mt-3">
      <label>Date of Birth</label>
      <input
        type="date"
        className={`form-control ${errors.dob ? 'is-invalid' : ''}`}
        name="dob"
        value={formData.dob}
        onChange={handleChange}
      />
      {errors.dob && <div className="invalid-feedback">{errors.dob}</div>}
    </div>
    <div>
        <label>Choose file to upload</label>
        <input 
        type="file"
        className={`form-control ${errors.dockpicker ? 'is-invalid' : ''}`}
        name="docpicker"
        accept=".pdf"
        value={formData.dockpicker}
        onChange={handleChange}
        />
         {errors.dockpicker && <div className="invalid-feedback">{errors.dockpicker}</div>}
    </div>

    </div>
  );
  
  export default Step4;
  