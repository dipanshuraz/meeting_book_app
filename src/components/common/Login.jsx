import React, { Component } from "react";
import { connect } from "react-redux";
import { isLogin } from "../../redux/action";
import { Redirect } from "react-router-dom";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      pass: ""
    };
  }
  handleInputEmail = e => {
    this.setState({
      email: e.target.value
    });
  };
  handleInputPass = e => {
    this.setState({
      pass: e.target.value
    });
  };
  isLogin = e => {
    e.preventDefault();
    this.props.isAuth(this.state);
  };

  render() {
    console.log(this.props.isLogged);

    return this.props.isLogged ? (
      <div className="container">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleInputEmail}
              placeholder="admin"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              onChange={this.handleInputPass}
              value={this.state.pass}
              placeholder="admin"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button
            type="submit"
            onClick={e => this.isLogin(e)}
            class="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    ) : (
      <Redirect to="/" />
    );
  }
}

const mapStateToProps = state => ({
  isLogged: state.isAuth
});

const mapDispatchToProps = dispatch => ({
  isAuth: payload => dispatch(isLogin(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
