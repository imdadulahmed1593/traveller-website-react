import React, { useContext, useState } from "react";
import Header2 from "../Header/Header2";
import img1 from "../../images/Icon/fb.png";
import img2 from "../../images/Icon/google.png";
import "./Login.css";
import firebase from "firebase";
import { auth } from "../../firebase";
import { userContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";

function Login() {
  const [user, setUser] = useContext(userContext);
  const [newUser, setNewUser] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };
  const provider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    if (user.password === user.confirmedPassword) {
      auth
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          console.log(res);
          history.replace(from);
        })
        .catch(function (error) {
          // Handle Errors here.

          alert(error.message);
          // ...
        });
    }
    if (!newUser) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then(() => history.replace(from))
        .catch(function (error) {
          // Handle Errors here.
          alert(error.message);
          // ...
        });
    }
  };

  const handleGoogleSignIn = () => {
    auth
      .signInWithPopup(provider)
      .then(function (result) {
        // The signed-in user info.
        var { displayName, email } = result.user;
        setUser({ name: displayName, email: email });
        history.replace(from);
        // ...
      })
      .catch(function (error) {
        // Handle Errors here.
        alert(error.message);
      });
  };

  const handleFbSignIn = () => {
    auth
      .signInWithPopup(fbProvider)
      .then(function (result) {
        // The signed-in user info.
        var { displayName, email } = result.user;
        setUser({ name: displayName, email: email });
        history.replace(from);
        // ...
      })
      .catch(function (error) {
        // Handle Errors here.
        alert(error.message);

        // ...
      });
  };
  return (
    <div className="login">
      <Header2 />
      <div className="login__form">
        <form action="">
          <h2>{newUser ? "Create an account" : "Login"}</h2>
          {newUser && (
            <input
              type="text"
              placeholder="First Name"
              onChange={(e) => setUser({ ...user, fName: e.target.value })}
            />
          )}
          {newUser && (
            <input
              type="text"
              placeholder="Last Name"
              onChange={(e) => setUser({ ...user, lName: e.target.value })}
            />
          )}
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          {newUser && (
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) =>
                setUser({ ...user, confirmedPassword: e.target.value })
              }
            />
          )}
          <button onClick={handleSubmit}>
            {newUser ? "Create an account" : "Login"}
          </button>
          <small>
            {newUser ? "already have an account?" : "don't have an account?"}{" "}
            <span
              className="newUser__toggler"
              onClick={() => setNewUser(!newUser)}
            >
              {newUser ? "Login" : "create an account"}
            </span>{" "}
          </small>
        </form>
      </div>
      <div className="login__divider">
        <hr />
        <p>Or</p>
        <hr />
      </div>
      <div className="login__buttons">
        <button onClick={handleFbSignIn}>
          <img src={img1} alt="" /> Continue with Facebook
        </button>
        <br />
        <button onClick={handleGoogleSignIn}>
          <img src={img2} alt="" /> Continue with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
