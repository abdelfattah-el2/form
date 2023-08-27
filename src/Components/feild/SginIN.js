import { useState } from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userSchema } from "../Yup-validations/UserVaildations";
export default function SignIn() {
  const [name, setName] = useState("");
  const [password, setpassword] = useState("");
  const [showpassword, setshowpassword] = useState("password");
  // sent to database
  const notify = () => toast.success(" welcome back!");

  const handeleSubmit = async (event) => {
    event.preventDefault();
    let fromData = {
      name: event.target[0].value,
      password: event.target[1].value,
    };
    const isValid = await userSchema.isValid(fromData);
    if (isValid) {
      setName("");
      setpassword("");
      notify();
    }
  };

  return (
    <div>
      <div className=" p-10 pb-4 relative w-[21rem]  sm:w-[28rem] bg-white shadow">
        <form onSubmit={handeleSubmit}>
          <h1 className="text-center mb-10 text-xl font-bold ">Sign In</h1>

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
          <span className=" text-sm text-slate-500/70 cursor-pointer top-[68%] sm:right-[67%] right-[56%] font-medium absolute ">
            Forgot Password
          </span>
          <span className=" absolute top-[57.5%] right-[12%]  sm:right-[9%] ">
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
            <button
              className=" uppercase  w-full py-4 px-10 bg-zinc-950 text-white"
              type={"submit"}
            >
              Sign In
            </button>
          </div>
        </form>
        <ToastContainer />

        <span className=" mt-2 inline-block">
          {" "}
          I don't have account{" "}
          <Link
            className=" text-blue-500 underline  font-semibold uppercase"
            to={"/"}
          >
            Sign-Up
          </Link>
        </span>
      </div>
    </div>
  );
}
