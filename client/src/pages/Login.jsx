import { Button, TextField } from "@mui/material";
import Form from "../components/form/Form";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "test@gmail.com",
    password: "Password123!"
});

  const handleSubmit = async (event) => {
    event.preventDefault();
    await checkUser(user);
  };

  const handleChange = async (event, key) => {
    event.preventDefault();
    setUser({ ...user, [key]: event.target.value });
  };

  const checkUser = async (user) => {
    try {
      const rawResponse = await fetch("http://localhost:4000/api/user/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const responseContent = await rawResponse.json();
      // save token to local storage
      console.log(responseContent);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="landing">
      <Form>
        <h3>Email</h3>
        <TextField
          value={user.email}
          label=""
          variant="outlined"
          onChange={(event) => handleChange(event, "email")}
        />
        <h3>Password</h3>
        <TextField
          type={"password"}
          value={user.password}
          label=""
          variant="outlined"
          onChange={(event) => handleChange(event, "password")}
        />
        <br></br>
        <Button
          variant="contained"
          type="submit"
          color="secondary"
          onClick={handleSubmit}
        >
          Login
        </Button>
        <br></br>
        <a href="/register"> click here to register </a>
      </Form>
    </div>
  );
};

export default Login;
