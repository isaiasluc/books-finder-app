import { useState } from "react";
import "./styles.css";

const Search = () => {
  const handleClick = () => {
    return null;
  }
  const handleChange = (e) => {
    setValue(e.target.value);
    return null;
  };
  const [value, setValue] = useState(null);
  console.log("button value", value);
  return (
    <div className="wrapper grid place-items-center h-screen">
      <div className="flex">
        <input
          type="text"
          className="inpt-bar focus:outline-none focus:ring focus:ring-red-300"
          placeholder="Digite um autor, título ou assunto"
          value={value}
          onChange={handleChange}
        />
        <button
          type="button"
          onClick={handleClick}
          className="btn bg-red-800 hover:bg-red-900 focus:outline-none focus:ring focus:ring-red-300"
        >
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default Search;
