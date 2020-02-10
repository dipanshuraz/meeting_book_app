import React, { Component } from "react";

export class card extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        {this.props.data.map((elem, id) => {
          return (
            <>
              <div className="col-md-3 ">
                <div class="">
                  <img
                    class="card-img-top"
                    src={elem.thumbnail}
                    className="img-fluid"
                    alt="Card image cap"
                  ></img>
                  <div class="card-body">
                    <h5 class="card-title">Name : {elem.name}</h5>
                    <p class="card-text">Floor :{elem.floor}</p>
                    <p class="card-text">Capacity :{elem.capacity}</p>

                    <p>Price : {elem.price} Rs/Day</p>
                    <button className="btn btn-outline-dark w-50">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  }
}

export default card;
