const Step3 = ({ formData, handleChange, errors }) => (
  <div>
    <h2 className="mb-3">Step 3: Preferences</h2>
    <div className="form-group">
      <label>Choose your gender:</label>
      <div>
        <input
          type="radio"
          className={`form-check-input ${errors.gender ? 'is-invalid' : ''}`}
          id="male"
          name="gender"
          value="male"
          defaultChecked={formData.gender === 'male'}
          onChange={handleChange}
        />
        <label className="mx-3">Male</label>
        
        <input
          type="radio"
          className={`form-check-input ${errors.gender ? 'is-invalid' : ''}`}
          id="female"
          name="gender"
          value="female"
          defaultChecked={formData.gender === 'female'}
          onChange={handleChange}
        />

        <label className="ms-3">Female</label>
        {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
      </div>
    </div>

    <div className="form-group mt-3">
      <input
        type="checkbox"
        className="form-check-input"
        id="newsletter"
        name="newsletter"
        value="newsletter"
        checked={formData.newsletter}
        onChange={handleChange}
      />
      <label className="ms-3">Subscribe to newsletter</label>
    </div>

    <div className="form-group mt-3">
      <input
        type="checkbox"
        className="form-check-input"
        id="notifications"
        name="notifications"
        value="notifications"
        checked={formData.notifications}
        onChange={handleChange}
      />
      <label className="ms-3">Receive notifications</label>
    </div>

    <div className="form-group mt-3">
      <select
        name="role"
        className={`form-control ${errors.role ? 'is-invalid' : ''}`}
        value={formData.role}
        onChange={handleChange}
      >
        <option value="">Please select a role</option>
        <option value="Admin">Admin</option>
        <option value="User">User</option>
        <option value="Guest">Guest</option>
      </select>
      {errors.role && <div className="invalid-feedback">{errors.role}</div>}
      </div>
      </div>
);

export default Step3;

