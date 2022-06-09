import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../FirebaseConfig/Config";
import google from "../../assets/google.png";
import { provider } from "../FirebaseConfig/Config";
import { GoogleAuth } from "../FirebaseConfig/Config";
import apple from "../../assets/apple.png";
import firebase from "firebase/compat/app";
import Phonee from "../Phone/Phone";
import insta from "../../assets/insta.png";
import info from "../../assets/info.png";
import gugol from "../../assets/gugol.png";
import "./Login.scss";
const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setSuccessMsg("Zalogowano");
        setEmail("");
        setPassword("");
        setError("");
        setSuccessMsg("");
        history("/");
      })
      .catch((error) => setError(error.message));
  };
  const signInWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithRedirect(googleProvider)
      .then(() => {
        window.location.assign("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="login-form-container">
      <div className="login-form-base">
        {successMsg && (
          <>
            <div className="succes-msg">{successMsg}</div>
            <br />
          </>
        )}
        <div className="phone-picture">
          <Phonee />
        </div>

        <form className="login-form" autoComplete="off" onSubmit={handleLogin}>
          <img src={insta} />
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
            Zaloguj się
          </button>
          <p>LUB</p>

          <button
            onClick={signInWithGoogle}
            className="login-form-login-google"
          >
            <img src={gugol} className="loginform-google-icon" />
          </button>
        </form>

        <div className="login-form-login-to-register">
          <p>Nie masz konta?</p>
          <a href="/register">Zarejestruj się</a>
        </div>
        <div className="login-form-download-app">
          <p>Pobierz aplikację.</p>
          <a href="https://apps.apple.com/app/instagram/id389801252?vt=lo">
            <img src={apple} />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb&utm_campaign=loginPage&ig_mid=53A4CCA9-5E8B-4FBC-B133-16A81CA004C0&utm_content=lo&utm_medium=badge">
            <img src={google} />
          </a>
        </div>
      </div>
      <img src={info} className="info-links" />
    </div>
  );
};

export default Login;
