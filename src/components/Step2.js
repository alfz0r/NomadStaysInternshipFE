const Step2 = ({ formData, handleChange, errors }) => (
    <div>
      <h2 className="mb-3">Step 2: Address Information</h2>
      <div className="form-group">
        <label>Address</label>
        <input
          type="text"
          className={`form-control ${errors.address ? 'is-invalid' : ''}`}
          name="address"
          placeholder="Enter your address"
          value={formData.address}
          onChange={handleChange}
        />
        {errors.address && <div className="invalid-feedback">{errors.address}</div>}
      </div>
      <div className="form-group mt-3">
        <label>City</label>
        <input
          type="text"
          className={`form-control ${errors.city ? 'is-invalid' : ''}`}
          name="city"
          placeholder="Enter your city"
          value={formData.city}
          onChange={handleChange}
        />
        {errors.city && <div className="invalid-feedback">{errors.city}</div>}
      </div>
      <div className="form-group mt-3">
        <label>ZIP Code</label>
        <input
          type="text"
          className={`form-control ${errors.zip ? 'is-invalid' : ''}`}
          name="zip"
          placeholder="Enter your ZIP code"
          value={formData.zip}
          onChange={handleChange}
        />
        {errors.zip && <div className="invalid-feedback">{errors.zip}</div>}
      </div>
    </div>
  );
  
  export default Step2;
  