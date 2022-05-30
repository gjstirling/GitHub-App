import { useState } from "react";
import findFavouriteLanguage from "../services/findFavouriteLanguage";

export const useSearchForm = () => {
  const [username, setUsername] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username.trim().length === 0) {
      alert(`please enter a valid username`);
    }
    const result = await findFavouriteLanguage(username);
    if (result === undefined) {
      alert(`${username} is not a valid username`);
    }
    alert(
      `${username}'s favourite language is ${result[0]} \n they have ${result[1]} repositories in total`
    );
  };

  const handleChange = (event) => {
    event.preventDefault();
    setUsername(event.target.value.toLowerCase());
  };

  return { handleSubmit, handleChange, username };
};
