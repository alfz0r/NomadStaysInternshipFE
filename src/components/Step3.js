const Step3 = ({ formData, handleChange, errors }) => (
    <div>
      <h2 className="mb-3">Step 3: Preferences</h2>
      <div>
      <label>Choose your gender:</label>
        <div>
          <input  
            type="radio"
            className="form-check-input"
            id="male"
            name="gender"
            value="male"
            defaultChecked={formData.gender === "male"}
            onChange={handleChange}
          />
          <label>Male</label>
          
          <input 
            type="radio"
            className="form-check-input"
            id="female"
            name="gender"
            value="female"
            defaultChecked={formData.gender === "female"}
            onChange={handleChange}
          />
          
          <label>Female</label>
        </div>
     </div>
     
     {/* <div>
      <input 
        type="checkbox"
        className="form-check-input"
        id="newsletter"
        name="preferences"
        value="newsletter"
        checked={formData.newsletter}
        onChange={handleChange}
      />
      <label>Subscribe to newsletter</label>
     </div> */}

     {/* <div>
      <input 
        type="checkbox"
        className="form-check-input"
        id="notifications"
        name="preferences"
        value="notifications"
        checked={formData.notifications}
        onChange={handleChange}
      />
      <label>Receive notifications</label>
     </div> */}
     
     <div>
      {/* <select
      name="roles"
      className={"form-control ${errors.roles ? 'is-invalid' : ''}"}
      value={formData.roles}
      onChange={handleChange}
      >
      <option value="">Please select a role</option>
      <option value="">Admin</option>
      <option value="">User</option>
      <option value="">Guest</option>
        </select> */}
      </div>
    </div>
  );
  
  export default Step3;