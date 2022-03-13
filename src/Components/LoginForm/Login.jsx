import React from "react";
import google from "../../assets/google.png";
import apple from "../../assets/apple.png";
import Phonee from "../Phone/Phone";
import insta from "../../assets/insta.png";
import info from "../../assets/info.png";
import facebook from "../../assets/facebook.png";
import "./Login.scss";
const Login = () => {
  return (
    <div className="login-form-container">
      <div className="login-form-base">
        <div className="phone-picture">
          <Phonee />
        </div>

        <form className="login-form">
          <img src={insta} />
          <label htmlFor="email" />
          <input type="email" placeholder="Podaj email" />
          <br />
          <label htmlFor="password" />
          <input type="password" placeholder="Podaj hasło" />
          <br />
          <button>Zaloguj się</button>
          <p>LUB</p>
          <div className="login-form-facebook-link">
            <img src={facebook} className="facebook-picture" />
            <a href="" className="facebook-link">
              Zaloguj się przez Facebooka
            </a>
          </div>
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
