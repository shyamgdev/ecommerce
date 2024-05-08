import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearErrors } from "../Redux/Action/UserAction";

function Profile() {
  const alert = useAlert();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, loading, isAuthenticated, error } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [error, alert, dispatch, isAuthenticated, navigate]);
  return (
    <section>
      {loading ? (
        "Loading...." // <Loading />
      ) : (
        <>
          {/* breadcrumb starts */}
          {/* <MetaData title={"Profile"} /> */}
          <div className="relative w-full px-6 py-4 flex flex-col md:flex-row items-center justify-start gap-4 rounded-xl shadow-2xl bg-white">
            <Link to="update-profile" className="absolute top-5 right-5">
              <FaEdit />
            </Link>
            {/* PROFILE IMAGE */}
            <div className="w-full md:w-96 m-auto flex flex-col items-center justify-center gap-2 font-semibold">
              <div className="h-36 mx-auto aspect-square rounded-full ring-4 ring-[#8A72BF]">
                <img
                  loading="lazy"
                  className="w-full h-full rounded-full"
                  src={user?.image?.url || "/profile.png"}
                  alt=""
                />
              </div>
              <h4 className="text-xl first-letter:capitalize">{user?.name}</h4>
              <p className="text-sm font-medium">{user?.referralCode}</p>
            </div>
            {/* PROFILE DETAILS */}
            <div className="pl-4 w-full h-full flex flex-col gap-8 border-l-2 border-dotted">
              <div className="flex flex-col sm:flex-row items-start justify-start gap-12 flex-wrap">
                {/* USER EMAIL */}
                <div>
                  <h5 className="text-[#666]">Email</h5>
                  <p className="font-medium opacity-75">{user?.email}</p>
                </div>
                {/* USER PASSWORD */}
                <div>
                  <h5 className="text-[#666]">Reset Password</h5>
                  <p className="font-medium opacity-75">*************</p>
                  {/* CHANGE PASSWORD BUTTON */}
                  <Link to="update-profile" className="text-[#005099]">
                    Reset Password
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default Profile;
