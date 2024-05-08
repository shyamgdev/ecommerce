import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State, City } from "country-state-city";
import { newAddress } from "../Redux/Action/AddressAction";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";

function AddressForm() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);
  const [address, setAddress] = useState();
  const navigate = useNavigate();
  const alert = useAlert();

  const indianStates = State.getStatesOfCountry("IN") || [];
  const [stateIsoCode, setStateIsoCode] = useState();
  const phoneNumberPattern = /^[0-9]{10}$/; // Regular expression for a 10-digit phone number

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddress({ ...address, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      navigate("/login");
      return
    }
    if (!phoneNumberPattern.test(address.mobile)) {
      alert.error("Password must be numeric and must be 10 digits");
    } else {
      dispatch(newAddress(address));
    }
  };

  return (
    <div className="px-4 py-6 bg-white">
      <form
        onSubmit={handleSubmit}
        className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4"
      >
        {/* USER FULL NAME */}
        <input
          placeholder="Full Name *"
          name="name"
          id="name"
          onChange={handleInput}
          type="text"
          required
        />
        {/* USER EMAIL */}
        <input
          name="email"
          id="email"
          onChange={handleInput}
          type="email"
          placeholder="Contact Email *"
          required
        />
        {/* USER MOBILE NUMBER */}
        <input
          name="mobile"
          id="mobile"
          onChange={handleInput}
          type="tel"
          minLength="10"
          maxLength="10"
          placeholder="Contact Mobile No. *"
          required
        />
        {/* USER ADDRESS */}
        <input
          name="address"
          id="address"
          onChange={handleInput}
          type="text"
          placeholder="Address *"
          required
        />
        {/* USER STATE */}
        <select
          className={`form-input ${address?.state ? "" : "text-body"}`}
          name="state"
          id="state"
          onChange={(e) => {
            console.log(address.state);
            handleInput(e);
            setStateIsoCode(
              e.target.options[e.target.selectedIndex].getAttribute(
                "data-value"
              )
            );
          }}
          required
        >
          {!stateIsoCode && <option>State *</option>}
          {indianStates?.map((state, i) => (
            <option key={i} value={state.name} data-value={state.isoCode}>
              {state.name}
            </option>
          ))}
        </select>
        {/* USER CITY/TOWN */}
        <select
          disabled={!stateIsoCode ? true : false}
          className="form-input"
          name="city"
          id="city"
          onChange={handleInput}
          type="text"
          required
        >
          {!address?.city && <option>City/Town *</option>}
          {City.getCitiesOfState("IN", stateIsoCode)?.map((city, i) => (
            <option key={i} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
        {/* USER ZIP CODE */}
        <input
          name="pinCode"
          id="pinCode"
          onChange={handleInput}
          type="text"
          placeholder="Pin Code *"
          required
        />
        <button type="submit" className="btn-primary w-full font-semibold">
          Save
        </button>
      </form>
    </div>
  );
}

export default AddressForm;
