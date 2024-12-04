const Step4 = ({ formData, handleSubmit, handleChange, errors }) => {
    <div>
        <h2>Date of Birth</h2>
    <div className="form-group mt-3">
    <label>Date of Birth</label>
    <input
      type="date"
      className={`form-control ${errors.dob ? 'is-invalid' : ''}`}
      name="dob"
      placeholder="Date of Birth"
      value={formData.dob}
      onChange={handleChange}
    />
    {errors.dob && <div className="invalid-feedback">{errors.dob}</div>}
  </div>


  </div>


}

export default Step4;