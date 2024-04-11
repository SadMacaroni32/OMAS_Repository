import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { useEffect, useState } from "react";
import { getUsersFetch, setUserField } from "../../../redux/state/userState";

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

  // const handleLogin = (e) => {
  //   // Check if the entered username and password match any user data from the API
  //   e.preventDefault();
  //   const matchedUser = userData.find(
  //     (user: any) => user.username === username && user.password === password
  //   );

  //   // If a user with matching credentials is found, log in
  //   if (matchedUser) {
  //     console.log("Successfully logged in!");
  //     navigate(`/dashboard/${matchedUser.emp_id}`, { state: { matchedUser } });
  //   } else {
  //     console.log("Invalid username or password");
  //   }
  // };

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
      navigate(`/dashboard/${data.emp_id}`, { state: { userData: data } });
    } catch (error) {
      console.error("Login failed:", error.message);
      setLoginError(true);
    }
  };

  return (
    <div className="rounded-md shadow-sm drop-shadow-lg border-[.1rem] h-[20rem] w-full  lg:h-[30rem] flex flex-col items-center justify-center">
      <div className="w-full text-[2rem] font-bold lg:h-[10rem] flex items-center justify-center">
        <p>OMAS LOGO</p>
      </div>
      <form
        className="flex flex-col w-full px-8 lg:h-[15rem] gap-y-5 "
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
