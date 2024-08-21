import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const {createUsers, profileUpdate} = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const navigate = useNavigate();
    const handleRegister =e =>{
        e.preventDefault();
        const formRegister = e.currentTarget;
        const form = new FormData(formRegister);
        const email = form.get('email');
        const name = form.get('name');
        const photo = form.get('photo');
        const password = form.get('password');
        console.log(email, password, name, photo);
        const profile = {
          displayName: name,
          photoURL: photo,
        }

        if (
          !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)
        ) {
          setRegisterError(
            "Your password shouldhave at least min 8 letter password, with at least a symbol, upper and lower case letters and a number"
          );
          return;
        }

        // creat new user
        createUsers(email, password)
        .then(result=>{
          console.log("user created", result.user);
          const currentUser = result.user
          // console.log(profile.displayName, profile.photoURL);
           // update the user profile
          //  updateProfile(result.user, {displayName: name, photoURL:"https://i.imghippo.com/files/MbvYR1721193133.png"})
           profileUpdate(currentUser, profile)
           .then(()=>{
              console.log("profile updated");
             
            })
             .catch(()=>{
                console.error("error updating profile");
              })
              Swal.fire({
                title: 'success',
                text: 'user successfully registered',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
              navigate('/');
        })
        .catch(error=>{
          console.error("error creating user", error);
        })

    }
    return (
        <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Please enter your name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Please enter your photo Url"
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
                {registerError && <span className="text-red-700">registerError</span>}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p>Already have account? Please <Link to= "/login"><button className="btn btn-link">Login</button></Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;