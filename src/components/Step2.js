const Step2 = ({ formData, handleChange, errors }) => {
  const counties = [
      "Alba", "Arad", "Argeș", "Bacău", "Bihor", "Bistrița-Năsăud", "Botoșani", "Brașov",
      "Brăila", "Buzău", "Caraș-Severin", "Călărași", "Cluj", "Constanța", "Covasna", 
      "Dâmbovița", "Dolj", "Galați", "Giurgiu", "Gorj", "Harghita", "Hunedoara", 
      "Ialomița", "Iași", "Ilfov", "Maramureș", "Mehedinți", "Mureș", "Neamț", 
      "Olt", "Prahova", "Satu Mare", "Sălaj", "Sibiu", "Suceava", "Teleorman", 
      "Timiș", "Tulcea", "Vaslui", "Vâlcea", "Vrancea","Bucuresti"
  ];
  return(

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
    <div className="form-group mt-3">
          <label>Select a county</label>
          <select 
              id="counties" 
              className={`form-control ${errors.county ? 'is-invalid' : ''}`}
              value={formData.county}
              onChange={handleChange}
              name="county"
          >
              <option value=''>select a county</option>
              {counties.map((county,index) => (
                  <option value={county} key={index}>{county}</option>
              ))}
              
          </select>
          {errors.county && <div className="invalid-feedback">{errors.county}</div>}
      </div>

  </div>
  );
}

export default Step2;
  