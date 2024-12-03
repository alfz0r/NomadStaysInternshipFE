import countriesPhones from '../resources/countriesPhoneCodes.json';

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
      {errors.address && (
        <div className="invalid-feedback">{errors.address}</div>
      )}
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
    <div className="form-group mt-3">
      <label>County</label>
      <select
        name="county"
        className={`form-control ${errors.county ? 'is-invalid' : ''}`}
        value={formData.county}
        onChange={handleChange}
      >
        <option value="">Please select county</option>
        <option value="Bucuresti">Bucuresti</option>
        <option value="Maramures">Maramures</option>
        <option value="Constanta">Constanta</option>
      </select>
      {errors.county && <div className="invalid-feedback">{errors.county}</div>}
    </div>
    <div className="form-group mt-3">
      <input
        type="checkbox"
        className="form-check-input"
        id="newsletter"
        name="preferences"
        value="newsletter"
        checked={formData.preferences.includes('newsletter')}
        onChange={handleChange}
      />
      <label>Subscribe to newsletter</label>
    </div>
    <div className="form-group mt-3">
      <label>Gender</label>
      <div className="form-check">
        <input
          type="radio"
          className="form-check-input"
          id="male"
          name="gender"
          value="male"
          checked={formData.gender === 'male'}
          onChange={handleChange}
        />
        <label>Male</label>
      </div>
      <div className="form-check">
        <input
          type="radio"
          className="form-check-input"
          id="female"
          name="gender"
          value="female"
          checked={formData.gender === 'female'}
          onChange={handleChange}
        />
        <label>Female</label>
      </div>
    </div>
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

    <div className="form-group mt-3">
      <label>Phone number</label>
      <select
        name="county"
        className={`form-control ${errors.county ? 'is-invalid' : ''}`}
        value={formData.county}
        onChange={handleChange}
      >
        <option value="">Please select county</option>
        {Object.keys(countriesPhones).map((key) => (
          <option value={key}>
            {key} {countriesPhones[key]}
          </option>
        ))}
        {/*          
          <option value="Bucuresti">Bucuresti</option>
          <option value="Maramures">Maramures</option>
          <option value="Constanta">Constanta</option> */}
      </select>
      <input
        type="number"
        name="phoneNumber"
        className={`form-control ${errors.county ? 'is-invalid' : ''}`}
        value={formData.phoneNumber}
        onChange={handleChange}
      />
        
      {errors.county && <div className="invalid-feedback">{errors.county}</div>}
    </div>
  </div>
);

export default Step2;
