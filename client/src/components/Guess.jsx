import { Button, TextField } from "@mui/material";
import style from "./Guess.module.css";

const Guess = () => {
  return (
    <div id="main" className={style.container}>
      <h4 className={style.header}>
        Enter a GitHub Username
      </h4>
      <TextField label="" variant="outlined" className={style.textBox}/>
        <Button variant="contained" type="submit" color="secondary" className="button">
          Click me
        </Button>
    </div>
  );
};

export default Guess;
