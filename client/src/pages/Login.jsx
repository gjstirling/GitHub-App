import { Button, TextField } from "@mui/material";
import Form from '../components/form/Form';

const Login = () => {
    
    return (
      <div className="landing">
      <Form>
      <h3>Email</h3>
      <TextField label="" variant="outlined" />
      <h3>Password</h3>
      <TextField label="" variant="outlined" />
      <br></br>
      <Button variant="contained" type="submit" color="secondary">
        Login
      </Button>
      <br></br>
   <a href='/register'> click here to register </a>
    </Form>
      </div>
    );
  };
  
export default Login;