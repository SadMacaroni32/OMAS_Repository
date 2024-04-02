import { Button, TextField } from "@mui/material";

const Login: React.FC = () => {
  return (
    <div className="rounded-md shadow-sm drop-shadow-lg border-[.1rem] h-[20rem] w-full  lg:h-[30rem] flex flex-col items-center justify-center">
      <div className="w-full text-[2rem] font-bold lg:h-[10rem] flex items-center justify-center">
        <p>OMAS LOGO</p>
      </div>
      <form className="flex flex-col w-full px-8 lg:h-[15rem] gap-y-5 ">
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
        />
        <Button
          variant="contained"
          sx={{
            width: "10rem",
            margin: "auto",
          }}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
