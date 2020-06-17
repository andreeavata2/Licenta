import React, { Component } from "react";

export class Card extends Component {
  render() {
    return (
      <div className={"card" + (this.props.plain ? " card-plain" : "")}>
        <div className={"header" + (this.props.hCenter ? " text-center" : "")}>
          <h4 className="title" style={{padding: "10px 20px", "textAlign": "left"}}>{this.props.title}</h4>
          <p className="category" style={{padding: "10px 20px", "textAlign": "left"}}>{this.props.category}</p>
        </div>
        <div
          className={
            "content" +
            (this.props.ctAllIcons ? " all-icons" : "") +
            (this.props.ctTableFullWidth ? " table-full-width" : "") +
            (this.props.ctTableResponsive ? " table-responsive" : "") +
            (this.props.ctTableUpgrade ? " table-upgrade" : "")
          }
        >
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default Card;
