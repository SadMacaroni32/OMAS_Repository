import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { useEffect, useState } from "react";
import { getUsersFetch, setUserField } from "../../../redux/state/userState";
import OmasLogo from "../../../assets/omas.png"
import LoginStyle from "./Login.module.css"

import { useNavigate } from "react-router-dom";
import axios from "axios";
// import axios from "axios";


const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState(false);

  useEffect(() => {
    dispatch(getUsersFetch());
  }, [dispatch]);

  const userData = useSelector((state: RootState) => state.userReducer.users);
  const userInput = useSelector((state: RootState) => state.InputReducer);

  const { username, password } = userInput;
  //input function, setting the state into empty string
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setUserField({ ...userInput, [name]: value }));
  };



  const handleLogin = async (e) => { 
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/authenticate",
        {
          username,
          password,
        }
      );
      // Assuming the response contains some user data or token upon successful login
      const { data } = response;
      console.log("Successfully logged in:", data.token);
      // Save token to localStorage
      localStorage.setItem("token", data.token);
      setIsLoggedIn(true);
      navigate(`/dashboard`);
    } catch (error) {
      console.error("Login failed:", error.message);
      setLoginError(true);
    }
  };

console.log("login data", userData);
  return (
    <div className={LoginStyle.mainContainer}> {/*main div */}
      <div className={LoginStyle.Logo}> {/*logo div */}
        <img src={OmasLogo} className={LoginStyle.LogoImg}/>
      </div>
      {/*form div */}
      <form 
        className={LoginStyle.form}
        onSubmit={handleLogin}>
        <TextField
          id="outlined-basic"
          name="username"
          value={username}
          label="Username"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          name="password"
          value={password}
          label="Password"
          variant="outlined"
          type="password"
          onChange={handleChange}
        />
        <Button
          variant="contained"
          sx={{
            width: "10rem",
            margin: "auto",
          }}
          type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
