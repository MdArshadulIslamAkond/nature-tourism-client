import { useContext, useState } from "react";
import { Link, NavLink} from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

const Navbar = () => {
  const { logOut, users } = useContext(AuthContext);
  const [dark, setDark] = useState(false);


  const handleLogOut = () => {
    logOut()
      .then(() => console.log("Log Out successfully"))
      .catch((error) => console.log("Error log out:", error));
  };
  const navLinkStyle = ({ isActive, isPending }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "gray" : isActive ? "red" : dark ? "white": " black",
      backgroundColor: isPending ? "rgba(255, 255, 255, 0.1)" : "transparent",
      border: isPending ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
      // if(isActive){
      //   return setSearchParams({q:users.displayName});
      // }
    };
  };
  const navlinks = (
    <>
      <li>
        <NavLink to="/" style={navLinkStyle}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/allToristsSport" style={navLinkStyle}>
          All Tourists Sport
        </NavLink>
      </li>
      <li>
        <NavLink to="/addTouristSpot" style={navLinkStyle}>
          Add Torists Spot
        </NavLink>
      </li>
      <li>
      {users?.displayName ? <>
        <NavLink to={`/myList?name=${users.displayName}`} style={navLinkStyle} >
         <button > My List</button>
        </NavLink>
      </> :
      <>
      <NavLink to="/myList" style={navLinkStyle} >
         <button > My List</button>
        </NavLink>
      </>}

      </li>
      <li>
        {
          users && <>
          <NavLink to="/addCountry" style={navLinkStyle}>
          <button>Add Country</button>
          </NavLink>
          </>
        }
      </li>
    </>
  );
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
}
  return (
    <div className="">
      <div className="navbar dark:bg-blue-900">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navlinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Nature Tourism</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>

        {users ? (
          <>
          
            <div className="navbar-end flex-col-reverse md:flex-row gap-2">
              <span className={ dark ?"text-white" : "text-black"}>{users.displayName}</span>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={users.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content text-black bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow dark:bg-blue-900 dark:text-white"
                >
                  <li>
                    <a className="justify-between ">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a onClick={handleLogOut}>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="navbar-end gap-2">
              <NavLink style={navLinkStyle}  to="/login">
                {" "}
                <button className="btn">Login</button>{" "}
              </NavLink>
              <NavLink style={navLinkStyle}  to="/register">
                {" "}
                <button className="btn">Register</button>{" "}
              </NavLink>
            </div>
          </>
        )}
        <button onClick={()=> darkModeHandler()}>
                {
                    
                    dark && <IoSunny  className="text-white" />
                }
                {
                    !dark && <IoMoon />
                }
            </button>
      </div>
    </div>
  );
};

export default Navbar;
