import React from "react";
import "../css/LoginPage.css";
import { Link } from "react-router-dom";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  LoginSubmit = (e) => {
    e.preventDefault();

    const body = JSON.stringify({
      email: this.state.email,
      password: this.state.password,
    });

    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body,
    })
      .then((respo) => respo.json())
      .then((res) => {
        if(res[0] == null){
          alert("Username or Password Wrong!")
        }else{
          alert("Login Successful !")
          var data =  res[0]
          localStorage.setItem('username',data.username)

        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="LoginDiv">
        <form className="LoginForm">
          <input
            type="email"
            name="email"
            placeholder="email"
            id="email"
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            onChange={(e) => {
              this.setState({ password: e.target.value });
            }}
          />

          <input
            type="submit"
            id="submit"
            value="Login"
            onClick={this.LoginSubmit}
          />

          <p style={{ color: "whitesmoke" }}>
            Don't have an account{" "}
            <Link to="/register" style={{ color: "orange" }}>
              Register
            </Link>
          </p>
        </form>
      </div>
    );
  }
}

export default LoginPage;
