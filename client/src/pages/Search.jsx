import { Button, TextField } from "@mui/material";
import style from "./css/Search.module.css";
import { useSearchForm } from "../hooks/useSearchForm";

const Search = () => {
  const { username, handleSubmit, handleChange, result } = useSearchForm();

  return (
    <div id="main" className={style.container}>
      <h4 className={style.header}>Enter a GitHub Username</h4>
      <p>Enter a Github username and I will guess their favourite language!</p>
      <TextField
        value={username}
        label=""
        variant="outlined"
        className={style.textBox}
        onChange={handleChange}
      />
      <br></br>
      <Button
        variant="contained"
        type="submit"
        className={style.button}
        onClick={handleSubmit}
      >
        Make guess
      </Button>
      <h3>{result}</h3>
    </div>
  );
};

export default Search;
