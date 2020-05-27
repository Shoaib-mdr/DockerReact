import React, { Component } from "react";
import Square from "./square";
class Board extends Component {
  renderSquareBox(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <h1>HEYY</h1>
        <div className="board-row">
          {this.renderSquareBox(0)}
          {this.renderSquareBox(1)}
          {this.renderSquareBox(2)}
        </div>
        <div className="board-row">
          {this.renderSquareBox(3)}
          {this.renderSquareBox(4)}
          {this.renderSquareBox(5)}
        </div>
        <div className="board-row">
          {this.renderSquareBox(6)}
          {this.renderSquareBox(7)}
          {this.renderSquareBox(8)}
        </div>
      </div>
    );
  }
}

export default Board;
