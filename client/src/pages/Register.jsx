import { useEffect, useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, createUser } from "../Redux/Action/UserAction";
import { useAlert } from "react-alert";

function Register() {
  const alert = useAlert();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, isAuthenticated, error } = useSelector(
    (state) => state.user
  );
  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false);
  const [photo, setPhoto] = useState(null);

  const [userRegistration, setUserRegistration] = useState({
    n: "",
    e: "",
    p: "",
    cp: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("n", userRegistration.n);
    formData.append("e", userRegistration.e);
    formData.append("p", userRegistration.p);
    formData.append("cp", userRegistration.cp);
    formData.append("image", photo);
    console.log(formData);
    dispatch(createUser(formData));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      navigate("/");
    }
  }, [error, alert, dispatch, isAuthenticated, navigate]);

  return (
    <section className="w-full max-w-4xl m-auto p-2">
      <div className="w-full flex flex-row items-center justify-center rounded-xl bg-white shadow-md hover:drop-shadow-2xl">
        <div className="md:w-1/2 mx-auto px-8 py-12 space-y-4">
          <div className="w-fit mx-auto">
            <img
              src="https://user.infinitemlmsoftware.com/images/logo_user.png"
              alt=""
            />
          </div>
          <p className="text-center">Welcome Back to company Name</p>
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
            encType="multipart/form-data"
          >
            {/* USER REGISTRATION FORM */}
            {/* NAME */}
            <input
              onChange={handleInput}
              value={userRegistration.n}
              type="text"
              name="n"
              minLength="3"
              placeholder="Name"
              required={true}
            />
            {/* EMAIL */}
            <input
              onChange={handleInput}
              value={userRegistration.e}
              type="email"
              name="e"
              placeholder="you@gmail.com"
              required={true}
            />
            {/* PASSWORD */}
            <div className="input-group">
              <input
                onChange={handleInput}
                value={userRegistration.p}
                type={!togglePassword ? "password" : "text"}
                name="p"
                minLength="6"
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
            {/* CONFIRM PASSWORD */}
            <div className="input-group">
              <input
                onChange={handleInput}
                value={userRegistration.cp}
                type={!toggleConfirmPassword ? "password" : "text"}
                name="cp"
                minLength="6"
                placeholder="Confirm Password"
                required={true}
              />
              {/* TOGGLE PASSWORD VISIBILITY */}
              <button
                type="button"
                onClick={() => setToggleConfirmPassword(!toggleConfirmPassword)}
              >
                {!toggleConfirmPassword ? <IoIosEye /> : <IoIosEyeOff />}
              </button>
            </div>
            {/* PHOTO */}
            <input
              type="file"
              name="image"
              onChange={(e) => setPhoto(e.target.files[0])}
              accept="image/*"
              required
            />
            {/* REGISTRATION BUTTON */}
            <div className="text-center">
              {!loading ? (
                <button
                  className="btn-primary w-full"
                  type="submit"
                  disabled=""
                >
                  Register
                </button>
              ) : (
                <button className="btn-primary w-full" disabled={true}>
                  Please wait...
                </button>
              )}
            </div>
            {/* REDIRECT TO LOGIN PAGE */}
            <p className="text-center">
              Already have an account?{" "}
              <Link className="underline text-[#3D42C3]" href="/login">
                Login now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
