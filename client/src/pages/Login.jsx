import { Button, TextField } from "@mui/material";
import Form from '../components/form/Form' 

const Login = () => {
    
    return (
      <div className="landing">
      <Form>
    <h1> Login </h1>
      <h3>Email</h3>
      <TextField label="" variant="outlined" />
      <h3>Password</h3>
      <TextField label="" variant="outlined" />
      <br></br>
      <Button variant="contained" type="submit" color="secondary">
        Login
      </Button>
    </Form>
      </div>
    );
  };
  
export default Login;