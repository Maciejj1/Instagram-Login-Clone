import React, { useState } from "react";
import { auth, db } from "../FirebaseConfig/Config";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import insta from "../../assets/insta.png";
import Phonee from "../Phone/Phone";
import "./Register.scss";

function setError(message) {
  return undefined;
}

const RegisterForm = (props) => {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        db.collection("UsersData")
          .doc(cred.user.uid)
          .set({
            Name: name,
            Email: email,
            Password: password,
          })
          .then(() => {
            setName("");
            setEmail("");
            setPassword("");
            setError("");
            history("/login");
          })
          .catch((err) => setError(err.message));
      })
      .catch((err) => setError);
    console.log("Działa");
  };
  return (
    <div className="login-form-container">
      <div className="login-form-base">
        <div className="phone-picture">
          <Phonee />
        </div>

        <form className="login-form" autoComplete="off" onSubmit={Register}>
          <img src={insta} />
          <label htmlFor="name" />
          <input
            type="name"
            placeholder="Nazwa"
            className="login-form-email"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <br />
          <label htmlFor="email" />
          <input
            type="email"
            placeholder="Podaj email"
            className="login-form-email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <br />
          <label htmlFor="password" />
          <input
            type="password"
            placeholder="Podaj hasło"
            className="login-form-password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <br />
          <button type="submit" className="login-submit-button">
            Zarejestruj się
          </button>
        </form>

        <div className="login-form-login-to-register">
          <div className="invitation-to-register">
            <p className="register-text">Masz konto?</p>
            <a className="to-register" href="/login">
              Zaloguj się
            </a>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default RegisterForm;
