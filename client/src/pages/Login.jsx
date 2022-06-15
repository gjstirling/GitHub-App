import { Button, TextField } from "@mui/material";
import Form from "../components/form/Form";
import { useState } from "react";
import jwt_decode from "jwt-decode";
import { useUser } from "../context/UserContext";
import style from './css/Login.module.css'

const Login = () => {
  
  // Set to empty strings if not needed (test user account)
  const [login, setLogin] = useState({
    email: "johndoe@gmail.com",
    password: "Password123!",
  });

  const [, setUser] = useUser();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await checkLogin(login);
    if (response.token === undefined){
      alert("Email or password incorrect")
      return;
    }
    window.localStorage.setItem("token", response.token);
    const decodeToken = jwt_decode(response.token) 
    setUser({'id': decodeToken.id, 'name': decodeToken.firstname});
  };

  const handleChange = async (event, key) => {
    event.preventDefault();
    setLogin({ ...login, [key]: event.target.value });
  };

  const checkLogin = async (login) => {
    try {
      const rawResponse = await fetch("http://localhost:4000/api/user/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
      });
      const responseContent = await rawResponse.json();
      return responseContent;
    } catch (error) {
      console.log(error)
      return;
    }
  };

  return (
    <div className="landing">
      <Form>
        <h3>Email</h3>
        <TextField
          value={login.email}
          label=""
          variant="outlined"
          onChange={(event) => handleChange(event, "email")}
        />
        <h3>Password</h3>
        <TextField
          type={"password"}
          value={login.password}
          label=""
          variant="outlined"
          onChange={(event) => handleChange(event, "password")}
        />
        <br></br>
        <Button
          className={style.button}
          variant="contained"
          type="submit"
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
