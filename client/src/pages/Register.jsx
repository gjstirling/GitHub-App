import { Button, TextField } from "@mui/material";
import Form from "../components/form/Form";
import { useState } from "react";

const Register = () => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    console.log(inputs)
    event.preventDefault();
    const response = await checkInputs(inputs)
    console.log(response)
  };

  const handleChange = async (event, key) => {
    event.preventDefault();
    setInputs({ ...inputs, [key]: event.target.value });
  }

  const checkInputs = async (inputs) => {
    try {
      const rawResponse = await fetch("http://localhost:4000/api/user", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      const responseContent = await rawResponse.json();
      return responseContent;
    } catch (error) {
      console.log(error)
      return error;
    }
  }

  return (
    <div className="registration">
      <Form>
        <h1> Sign up here !</h1>
        <h3>First name</h3>
        <TextField label="" variant="outlined" onChange={(event) => handleChange(event, "firstName")}/>
        <h3>Last name</h3>
        <TextField label="" variant="outlined" onChange={(event) => handleChange(event, "lastName")}/>
        <h3>Email </h3>
        <TextField label="" variant="outlined" onChange={(event) => handleChange(event, "email")}/>
        <h3>Password</h3>
        <TextField label="" variant="outlined" onChange={(event) => handleChange(event, "password")}/>
        <br></br>
        <Button
          variant="contained"
          type="submit"
          style={{
            borderRadius: 35,
            backgroundColor: "#21b6ae",
            padding: "18px 36px",
            fontSize: "18px",
          }}
          onClick={handleSubmit}
        >
          Sign up
        </Button>
        <br></br>
        <a href="/login"> click here to login </a>
      </Form>
    </div>
  );
};

export default Register;
