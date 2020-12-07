import React, { Component } from "react";
import TreeItem from "./TreeItem";

import "./RandomTree.css";

export default class TreeList extends Component {
  state = {
    isLoading: true,
    trees: [],
  };
  async componentDidMount() {
    // Fetching data-tree from given URL
    const url =
      "https://s3.eu-central-1.amazonaws.com/ecosia-frontend-developer/trees.json";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ trees: data.trees, isLoading: false }); // set the state values as per data received
  }
  render() {
    const { isLoading, trees } = this.state;
    return (
      <>
        {isLoading ? (
          // if NO tree-data
          <p data-testid="loading-text">Loading...</p>
        ) : (
          // if tree-data exist
          <div className="container card-group">
            {trees.map((item, index) => (
              <TreeItem key={index + 1} item={item} />
            ))}
          </div>
        )}
      </>
    );
  }
}
