import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createUser, updateProfile } from "../Redux/Action/UserAction";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { FiEdit2 } from "react-icons/fi";

function UpdateProfile() {
  const dispatch = useDispatch();
  const { user, loading } = useSelector(
    (state) => state.user
  );
  const navigate = useNavigate();
  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false);
  const [photo, setPhoto] = useState(user?.image?.url || "/profile.png");

  const [userData, setUserData] = useState({
    name: "",
    // e: "",
    password: "",
    newPassword: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", userData.name);
    formData.append("password", userData.password);
    formData.append("newPassword", userData.newPassword);
    formData.append("image", photo);
    dispatch(updateProfile(formData));
  };

  return (
    <div className="relative bg-white z-50" id="course-registration-modal">
      {/* <!-- OUTER MODAL FOR CLOSE THE MODAL --> */}
      <div
        className="fixed min-w-full min-h-screen top-0 backdrop-blur-sm z-40"
        onClick={() => navigate(-1)}
      ></div>
      {/* <!-- INNER MODAL --> */}
      <div className="fixed top-0 bottom-0 left-0 right-0 m-auto max-w-sm h-full sm:py-8 text-center rounded-lg z-50">
        <div className="relative flex items-center justify-center">
          {/* <!-- CLOSE MODAL BUTTON --> */}
          <button
            className="absolute max-sm:top-5 top-0 right-0 p-1 text-red-700 bg-red-200 rounded-lg"
            onClick={() => navigate(-1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {/* <!-- INNER MODAL CONTAINER --> */}
          <div className="bg-white p-4 space-y-2 w-fit h-full rounded-lg shadow-xl hover:shadow-2xl overflow-y-auto">
            <div className="w-full h-full mx-auto px-4 py-4 space-y-4">
              <p className="text-center">Update Profile</p>
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                encType="multipart/form-data"
              >
                {/* PROFILE IMAGE */}
                <div className="w-full m-auto flex flex-col items-center justify-center gap-2 font-semibold">
                  <div className="relative h-36 mx-auto aspect-square rounded-full ring-4 ring-yellow">
                    <img
                      className="w-full h-full rounded-full"
                      src={photo}
                      alt=""
                    />
                    <button className="absolute bottom-0 right-2.5 p-2 rounded-full text-black font-bold bg-yellow z-10">
                      <FiEdit2 className="w-4 h-4" />
                    </button>
                    <input
                      type="file"
                      onChange={(e) =>
                        setPhoto(URL.createObjectURL(e.target.files[0]))
                      }
                      title="Change Profile"
                      accept="image/*"
                      id="editProfile-imageInput"
                      className="absolute top-0 left-0 right-0 bottom-0 w-full h-full opacity-0 z-50 cursor-pointer"
                      name="image"
                    />
                  </div>
                  <h4 className="text-xl first-letter:capitalize">
                    {user?.name}
                  </h4>
                </div>
                {/* NAME */}
                <input
                  onChange={handleInput}
                  value={userData.n}
                  type="text"
                  name="name"
                  minLength="3"
                  placeholder={user?.name}
                />
                {/* EMAIL */}
                <input
                  onChange={handleInput}
                  value={userData.e}
                  type="email"
                  name="email"
                  placeholder={user?.email}
                  disabled={true}
                />
                {/* PASSWORD */}
                <div className="input-group">
                  <input
                    onChange={handleInput}
                    value={userData.p}
                    type={!togglePassword ? "password" : "text"}
                    name="password"
                    placeholder="Password"
                    required={true}
                  />
                  {/* TOGGLE PASSWORD VISIBILITY */}
                  <button
                    type="button"
                    onClick={() => setTogglePassword(!togglePassword)}
                  >
                    {!togglePassword ? <IoIosEye /> : <IoIosEyeOff />}
                  </button>
                </div>
                {/* NEW PASSWORD */}
                <div className="input-group">
                  <input
                    onChange={handleInput}
                    value={userData.cp}
                    type={!toggleConfirmPassword ? "password" : "text"}
                    name="newPassword"
                    minLength="6"
                    placeholder="Update Password"
                  />
                  {/* TOGGLE PASSWORD VISIBILITY */}
                  <button
                    type="button"
                    onClick={() =>
                      setToggleConfirmPassword(!toggleConfirmPassword)
                    }
                  >
                    {!toggleConfirmPassword ? <IoIosEye /> : <IoIosEyeOff />}
                  </button>
                </div>
                {/* PHOTO */}
                {/* <input
                type="file"
                name="image"
                onChange={(e) => setPhoto(e.target.files[0])}
                accept="image/*"
                required
              /> */}
                {/* REGISTRATION BUTTON */}
                <div className="text-center">
                  {!loading ? (
                    <button
                      className="btn-primary w-full"
                      type="submit"
                      disabled=""
                    >
                      Update Profile
                    </button>
                  ) : (
                    <button className="btn-primary w-full" disabled={true}>
                      Please wait...
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProfile;

<div>
  <h1 className="font-bold text-blue-700">BCA Registration Form</h1>
  <p className="text-sm text-blue-500">
    In Case any query, Kindly Contact: 1234567890
  </p>
  {/* <!-- REGISTRATION FORM --> */}
  <form
    className="flex flex-col items-start text-start w-full max-w-sm px-4 space-y-2 overflow-y-scroll"
    id="course_registration_form"
    action="/course_insert"
    method="post"
  >
    {/* <!-- USERNAME --> */}
    <div className="w-full">
      <label>Username</label>
      <br />
      <input
        className="p-2 border-[1px] border-[#ced4da] rounded-lg"
        type="text"
        name="name"
        minLength="3"
        required
      />
    </div>
    {/* <!-- EMAIL --> */}
    <div className="w-full">
      <label>Email</label>
      <br />
      <input type="email" name="email" required />
    </div>
    {/* <!-- MOBILE NO. --> */}
    <div className="w-full">
      <label>Mobile No.</label>
      <br />
      <input type="number" name="phone" required />
    </div>
    {/* <!-- D.O.B --> */}
    <div className="w-full">
      <label>D.O.B.</label>
      <br />
      <input type="date" className="bg-transparent" name="dob" required />
    </div>
    {/* <!-- GENDER --> */}
    <div className="mb-2">
      <label>Gender</label>
      <br />
      <div className="flex flex-row space-x-2">
        <label className="flex flex-row items-center justify-center space-x-2 cursor-pointer">
          <input type="radio" name="gender" value="male" required />
          <span>Male</span>
        </label>
        <label className="flex flex-row items-center justify-center space-x-2 cursor-pointer">
          <input type="radio" name="gender" value="female" required />
          <span>Female</span>
        </label>
      </div>
    </div>
    {/* <!-- CITY --> */}
    <div className="w-full">
      <label>City</label>
      <br />
      <input
        className="p-2 border-[1px] border-[#ced4da] rounded-lg"
        type="text"
        name="city"
        minLength="3"
        required
      />
    </div>
    {/* <!-- ADDRESS --> */}
    <div className="w-full">
      <label>Address</label>
      <br />
      <textarea name="address"></textarea>
    </div>
    {/* <!-- SELECT COLLAGE --> */}
    <div className="w-full">
      <label>Select Collage</label>
      <br />
      <select className="w-full bg-transparent" name="collage">
        <option>Select</option>
        <option>MITS</option>
        <option>RJIT</option>
        <option>ITM</option>
        <option>NITM</option>
        <option>VITM</option>
      </select>
    </div>
    {/* <!-- SELECT COURSE --> */}
    {/* <div className="w-full mb-2">
          <label>Select Course</label>
          <br />
          <!-- <select
              className="w-full p-2 border-[1px] border-[#ced4da] rounded-lg bg-transparent"
            >
              <option>BCA</option>
            </select> -->
          <input type="text" readonly course className="bg-blue-200" name="course" required/>
        </div> */}
  </form>
  {/* <!-- FORM SUBMIT BUTTTON --> */}
  <div className="w-full bg-blue-700 mt-8 py-2 text-xl text-white rounded-lg cursor-pointer">
    <button type="submit" form="course_registration_form">
      Submit
    </button>
  </div>
</div>;
