import "./form.css";
import styles from "../Username.module.css";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useState } from "react";
import {useDispatch} from "react-redux";
import { loginUser } from "../../redux/apiCalls/authApiCall";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const dispatch = useDispatch();
  // From Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (email.trim() === "") return toast.error("Email is required");
    if (password.trim() === "") return toast.error("Password is required");

    console.log({ email, password });
    dispatch(loginUser({email,password}))
  };

  return (
    <div className="center">
      <section className="form-container">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
         
        <h1 className="form-title">Login to your account</h1>
       <form onSubmit={formSubmitHandler} className="form">
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            id="email"
            placeholder="Enter your email"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            id="password"
            placeholder="Enter your password"
            className="form-input input-field"
            
          />
        </div>
        <button type="submit" className="form-btn">
          Login
        </button>
        
      </form>
      <div className="mt-3 text-center " style={{ marginLeft: "10px" , color:"white" }}>
              Did you forget your password?{" "}
              <Link to="/forgot-password"  style={{ marginLeft: "10px" , color:"white" }}>Forgot Password</Link>
            </div>
      </div>
      </div>
      </section>
      </div>

    
  );
};

export default Login;