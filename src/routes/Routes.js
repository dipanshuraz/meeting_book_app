import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";

import Home from "../components/common/Home";
import NotFound from "../components/common/NotFound";
import Order from "../components/common/Order";
import Login from "../components/common/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import { connect } from "react-redux";

export class Routes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuth: false
    };
  }

  render() {
    return (
      <>
        <div className="bg-dark container-fluid">
          <nav className="d-flex justify-content-between">
            <ul className="d-flex">
              <li>
                <Link className="text-white p-3" to="/">
                  Home
                </Link>
              </li>

              <li>
                <Link className="text-white p-3" to="/order">
                  Orders
                </Link>
              </li>
              <li>
                <Link className="text-white p-3" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link>
                  <button className="btn btn-outline-danger bg-light">
                    LogOut
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />

          <ProtectedRoutes path="/order" component={Order} />
          <ProtectedRoutes
            path="/login"
            component={props => (
              <Login
                {...props}
                isAuth={this.state.isAuth}
                click={this.onClickHandle}
              />
            )}
          />
          <ProtectedRoutes path="*" component={NotFound} />
        </Switch>
      </>
    );
  }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
