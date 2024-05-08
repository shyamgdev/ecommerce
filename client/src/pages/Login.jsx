/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearErrors, loginUser } from "../Redux/Action/UserAction";

function Login() {
  const alert = useAlert();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, isAuthenticated, error } = useSelector(
    (state) => state.user
  );
  const [togglePassword, setTogglePassword] = useState(false);
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserLogin({ ...userLogin, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(userLogin));
  };

  useEffect(() => {
    if (error) {
      if (error != "Incorrect Token") {
        alert.error(error);
        dispatch(clearErrors());
      }
    }
    if (isAuthenticated) {
      const searchParams = new URLSearchParams(location.search);
      const redirectValue = searchParams.get("redirect");
      if (redirectValue) {
        navigate(`/${redirectValue}`);
      } else {
        navigate(-1);
      }
    }
  }, [error, alert, dispatch, isAuthenticated, navigate]);

  return (
    <section className="md:w-full max-w-4xl p-4 m-auto">
      <div className="w-full rounded-xl bg-white shadow-md hover:drop-shadow-2xl">
        <div className="md:w-1/2 mx-auto px-8 py-12 space-y-4">
          <div className="w-fit mx-auto">
            <img
              src="https://user.infinitemlmsoftware.com/images/logo_user.png"
              alt=""
            />
          </div>
          <p className="text-center">Welcome Back to company Name</p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* EMAIL */}
            <input
              onChange={handleInput}
              value={userLogin.e}
              type="email"
              name="email"
              placeholder="abc@gmail.com"
              required={true}
            />
            {/* PASSWORD */}
            <div className="input-group">
              <input
                onChange={handleInput}
                value={userLogin.p}
                type={!togglePassword ? "password" : "text"}
                name="password"
                placeholder="Password"
                required={true}
              />
              {/* TOGGLE PASSWORD VISIBILITY */}
              <button onClick={() => setTogglePassword(!togglePassword)}>
                {!togglePassword ? <IoIosEye /> : <IoIosEyeOff />}
              </button>
            </div>
            <div className="">
              <a className="text-left text-[#3D42C3]">Forgot Password?</a>
            </div>
            {/* LOGIN BUTTON */}
            <div className="text-center">
              {!loading ? (
                <button
                  className="btn-primary w-full"
                  type="submit"
                  disabled=""
                >
                  Login
                </button>
              ) : (
                <button className="btn-primary w-full" disabled={true}>
                  Please wait...
                </button>
              )}
            </div>
            <p className="text-center">
              Don't have an account?{" "}
              <Link className="underline text-[#3D42C3]" href="/register">
                Register now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
