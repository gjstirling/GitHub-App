import { Button, TextField } from "@mui/material";
import style from "./Search.module.css";
import { useSearchForm } from '../hooks/useSearchForm';

const Search = () => {

  const {username, handleSubmit, handleChange} = useSearchForm();

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
      <Button
        variant="contained"
        type="submit"
        color="secondary"
        className="button"
        onClick={handleSubmit}
      >
        Click me
      </Button>
    </div>
  );
};

export default Search;
