import React from "react";

const Register = () => {
  return (
    <div className="register-form-container">
      <div className="register-form-base">
        <form className="register-form">
          <p>Zaloguj się z Facebookiem</p>
          <p>LUB</p>
          <label htmlFor="text" />
          <input type="text" placeholder="Podaj Imię i Nazwisko" />
          <br />
          <label htmlFor="text" />
          <input type="text" placeholder="Podaj nazwe" />
          <br />
          <label htmlFor="email" />
          <input type="email" placeholder="Podaj email" />
          <br />
          <label htmlFor="password" />
          <input type="password" placeholder="Podaj hasło" />
          <br />
          <button>Zarejestruj się</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
