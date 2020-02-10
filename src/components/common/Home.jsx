import React, { Component } from "react";
import { fetchData } from "../../redux/action";
import { connect } from "react-redux";
import Card from "./card/card";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { flag: false };
  }
  componentDidMount = () => {
    this.props.fetchData();
  };

  sortBy = () => {
    // console.log(this.props.reqData);
    if (this.state.flag) {
      this.props.reqData.sort((a, b) => b.price - a.price);
      this.setState(pre => ({
        flag: !pre.flag
      }));
    } else {
      this.props.reqData.sort((a, b) => a.price - b.price);
      this.setState(prev => ({
        flag: !prev.flag
      }));
    }
  };

  render() {
    // console.log(this.props.reqData);
    return (
      <div className="container">
        <button onClick={this.sortBy} className=" m-3 btn btn-outline-danger">
          Asc/Des
        </button>
        <div className="row">
          <Card data={this.props.reqData} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isAuth: state.isAuth,
  reqData: state.data
});

const mapDispatchToProps = {
  fetchData: () => fetchData()
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
