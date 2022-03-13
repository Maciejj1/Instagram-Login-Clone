import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Witaj przybyszu</h1>
      <h2>Jesteś na stronie która jest klonem instagrama</h2>
      <Link to="/login">Zaloguj się</Link>
      <br />
      <Link to="/register">Zarejestruj się</Link>
    </div>
  );
};

export default Home;
