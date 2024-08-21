import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [registerError, setRegisterError] = useState("");
const {loginUsers, signINGoogle, signingithub} = useContext(AuthContext);


  const handleLogin = (e) => {
    e.preventDefault();
    const formLogin = e.currentTarget;
    const form = new FormData(formLogin);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);
    if (
      !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)
    ) {
      setRegisterError(
        "Your password shouldhave at least min 8 letter password, with at least a symbol, upper and lower case letters and a number"
      );
      return;
    }
    loginUsers(email, password)
     .then((result) => {
        console.log("User logged in successfully: ", result.user);
        Swal.fire({
          title: 'success',
          text: 'Logged in successfully!',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        const path ={
          ...location,
          state:`${location?.state}?name=${result.user.displayName}`
        };
        console.log(location.state);
        navigate(location?.state ? path.state : "/")
      })
      .catch((error) => {
        console.log("Error logging in user: ", error);
        setRegisterError("Invalid email or password");
      });
    
  };

  const handleGoogle = () => {
    // console.log("google login");
    signINGoogle()
     .then((result) => {
        console.log("User signed in with Google:", result.user);
        Swal.fire({
          title: 'success',
          text: 'Logged in successfully!',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        const path ={
          ...location,
          state:`${location?.state}?name=${result.user.displayName}`
        };
        console.log(location.state);
        navigate(location?.state ? path.state : "/")
      })
     .catch((error) => {
        console.log("Error signing in with Google:", error);
        setRegisterError("Failed to sign in with Google");
      });
  };
  

  const handleGithub = () => {
    // console.log("github login");
    signingithub()
     .then((result) => {
        console.log("User signed in with Github:", result.user);
        Swal.fire({
          title: 'success',
          text: 'Logged in successfully!',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        const path ={
          ...location,
          state:`${location?.state}?name=${result.user.displayName}`
        };
        console.log(location.state);
        navigate(location?.state ? path.state : "/")
      })
     .catch((error) => {
        console.log("Error signing in with Github:", error);
        setRegisterError("Failed to sign in with Github");
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>
                New here? Please{" "}
                <Link to="/register">
                  <button className="btn btn-link">Register</button>
                </Link>
              </p>
              <div className="flex gap-2">
                <button onClick={handleGoogle} className="flex items-center gap-1 p-2">
                  <FcGoogle />
                  <p>Google Login</p>
                </button>
                <button onClick={handleGithub} className="flex items-center gap-1 p-2">
                  <FaGithub />
                  <p>Github Login</p>
                </button>
              </div>
            </form>
            {registerError && <p className="text-red-800">{registerError}</p>}
            {/* {success && <p className="text-green-800">{success}</p>} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
