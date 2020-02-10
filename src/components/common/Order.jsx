import React, { Component } from "react";
import { connect } from "react-redux";

export class Order extends Component {
  render() {
    return <div>Order</div>;
  }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
