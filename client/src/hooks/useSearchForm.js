import { useState } from "react";
import findFavouriteLanguage from "../services/findFavouriteLanguage";

export const useSearchForm = () => {
  const [username, setUsername] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username.trim().length === 0) {
      alert(`please enter a valid username`);
    }
    const result = await findFavouriteLanguage(username);
    if (result === undefined) {
      setResult("")
      alert(`${username} is not a valid username`);
    }
    setResult(`I would guess that ${username}'s favourite language is ${result[0]} \n as they have ${result[1]} repositories`)
  };

  const handleChange = (event) => {
    event.preventDefault();
    setUsername(event.target.value.toLowerCase());
  };

  return { handleSubmit, handleChange, username, result };
};
