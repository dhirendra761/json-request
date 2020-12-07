import React, { Component } from "react";
import "./TreeItem.css";

export default class TreeItem extends Component {
  state = {
    showImage: false,
  };
  toggleImage = () => {
    // toggling Image onClick
    this.setState({
      showImage: !this.state.showImage,
    });
  };
  render() {
    const { item } = this.props;
    return (
      <div className="card align-items-center">
        <div className="card-body d-flex flex-row">
          <mark className="font-weight-bold">{item.name}</mark>
        </div>
        <div className="card-body">
          <p className="card-text">{item.species_name}</p>
        </div>
        <div className="view overlay p-3">
          <img
            className={
              "imageStyle card-img-top rounded-0" +
              (this.state.showImage ? " show" : " hide")
            }
            src={item.image}
          />
        </div>
        <button
          onClick={this.toggleImage}
          className={
            "btn my-2 " +
            (this.state.showImage ? "Hide btn-secondary" : "Show btn-info")
          }
        >
          {this.state.showImage ? "Hide" : "Show"} Image
        </button>
      </div>
    );
  }
}
