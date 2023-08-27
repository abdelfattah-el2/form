import { useState } from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { IconButton } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userSchema2 } from "../Yup-validations/UserVaildations";
import { Link } from "react-router-dom";
export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [showpassword, setshowpassword] = useState("password");
  const notify = () => toast.success(" ");
  // sent to database
  const handeleSubmit = async (event) => {
    event.preventDefault();
    let fromData = {
      name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
    };
    const isValid = await userSchema2.isValid(fromData);
    if (isValid) {
      setName("");
      setpassword("");
      setEmail("");
      notify();
    }
  };
  return (
    <div>
      <div className=" p-10 pb-4 relative w-[21rem]  sm:w-[28rem] bg-white shadow">
        <form onSubmit={handeleSubmit}>
          <h1 className="text-center mb-10 text-xl font-bold ">Sign Up</h1>

          <label htmlFor="name">
            <div className=" ml-1 mb-2 text-lg    font-semibold">Name</div>
          </label>
          <input
            id="name"
            className=" border p-2  mb-4  w-full  rounded  focus:border-stone-600   outline-none"
            name="Name"
            type="text"
            placeholder="Your Name "
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
          <label htmlFor="email">
            <div className=" ml-1 text-lg mb-2 font-semibold">Email</div>
          </label>
          <input
            id="email"
            className=" border p-2  mb-4  w-full  rounded  focus:border-stone-600   outline-none"
            name="Email"
            type="email"
            placeholder="Email Address "
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <label htmlFor="password">
            <div className=" ml-1 text-lg mb-2 font-semibold">password</div>
          </label>
          <input
            id="password"
            className=" border relative p-2  mb-4  w-full  rounded  focus:border-stone-600   outline-none"
            name="password"
            type={showpassword}
            placeholder="password Greater than 5 and less than 18."
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            required
          />
          <span className=" absolute top-[65.5%] right-[12%]  sm:right-[9%] ">
            <IconButton
              style={{ color: "black" }}
              onClick={() => {
                setshowpassword(
                  showpassword === "password" ? "text" : "password"
                );
              }}
            >
              {showpassword === "password" ? (
                <VisibilityOffOutlinedIcon />
              ) : (
                <RemoveRedEyeOutlinedIcon />
              )}
            </IconButton>
          </span>
          <div className=" text-center mt-4">
            <button className=" uppercase  w-full py-4 px-10 bg-zinc-950 text-white">
              Sign Up
            </button>
          </div>
        </form>
        <span className=" mt-2 inline-block">
          {" "}
          I already have account{" "}
          <Link
            className=" text-blue-500 underline uppercase font-semibold"
            to={"/SignIn"}
          >
            Sign-In
          </Link>
          <ToastContainer />
        </span>
      </div>
    </div>
  );
}
