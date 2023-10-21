import { countryCodes } from "../availableCountries";
import { useContext } from "react";
import { AppContext } from "../App";

function Dropdown() {
  const { country, setCountry } = useContext(AppContext);
  const handleSelectChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <div>
      <h2>Select Country to Watch Holidays</h2>
      <select value={country} onChange={handleSelectChange}>
        {countryCodes.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name} - {country.code}
          </option>
        ))}
      </select>
      <p>Selected Option: {country}</p>
    </div>
  );
}

export default Dropdown;
