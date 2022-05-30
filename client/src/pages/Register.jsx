import { Button, TextField } from "@mui/material";
import Form from "../components/form/Form";

const Register = () => {
  return (
    <div className="registration">
      <Form>
        <h1> Sign up here !</h1>
        <h3>First name</h3>
        <TextField label="" variant="outlined" />
        <h3>Last name</h3>
        <TextField label="" variant="outlined" />
        <h3>Email </h3>
        <TextField label="" variant="outlined" />
        <h3>Password</h3>
        <TextField label="" variant="outlined" />
        <br></br>
        <Button variant="contained" type="submit" color="secondary">
          Sign up
        </Button>
        <br></br>
        <a href="/login"> click here to login </a>
      </Form>
    </div>
  );
};

export default Register;
