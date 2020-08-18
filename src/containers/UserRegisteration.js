import React from "react";
import "../css/UserRegisteration.css";
import { Link, Redirect } from "react-router-dom";

class UserRegisteration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      rePassword: "",
      isLoggedIn: false,
    };

    this.onChange = this.onChange.bind(this);
  }
  
 

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitInDb = (_) => {
    const body = JSON.stringify({
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    });

    fetch(`http://localhost:4000/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body,
    })
      .then((respo) => respo.json())
      .then((res) => {
        if (res.errno === 1062) {
          alert("Email already exit!");
        } else {
          this.setState({ isLoggedIn: !this.state.isLoggedIn });
          alert("Registered successfully");
        }
      })
      .catch((err) => console.log(err));
  };

  checkForm = (e) => {
    e.preventDefault();
    alert("Registered successfully");
    const { password, rePassword } = this.state;
    if (password === rePassword) {
      this.submitInDb();
    } else {
      alert("Password Mismatch");
    }
  };

  loged = () => {
    if(this.state.isLoggedIn === true){
      return <Redirect to="/" />
    }else {
      return null
    }
  }

  render() {
    return (
      <div className="registerDiv">
        <form className="RegistrationForm">
          <input
            type="text"
            name="username"
            placeholder="Username"
            id="username"
            required
            value={this.state.username}
            onChange={this.onChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email (Confirmation No Need)"
            id="email"
            required
            value={this.state.email}
            onChange={this.onChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            required
            value={this.state.password}
            onChange={this.onChange}
          />
          <input
            type="password"
            name="rePassword"
            placeholder="Confirm Password"
            id="rePassword"
            required
            value={this.state.value}
            autoComplete="new-password"
            onChange={this.onChange}
          />
          <input
            type="submit"
            id="submit"
            value="Register"
            onClick={this.checkForm}
          />
          <p>
            <Link to="/login" style={{ color: "whitesmoke" }}>
              Already have an account!
            </Link>
          </p>
        </form>
        {this.loged()}
      </div>
    );
  }
}

export default UserRegisteration;
