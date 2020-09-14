import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import { RiArrowLeftSLine } from "react-icons/ri";
// import { Input } from "semantic-ui-react";

class LayoutContainar extends Component {
  state = {
    layBarBut: {},
    layBar: { width: "300px" },
    layMain: { width: "calc(100% - 300px)" },
  };

  onClick = () => {
    const { layBar } = this.state;

    if (layBar.width === "0%") {
      this.setState({
        layBarBut: {},
        layBar: { width: "300px" },
        layMain: { width: "calc(100% - 300px)" },
      });
    } else {
      this.setState({
        layBarBut: { transform: "rotate(180deg)" },
        layBar: { width: "0%" },
        layMain: { width: "100%" },
      });
    }
  };

  render() {
    const { routes, cayoutContent } = this.props;
    const { layMain, layBar, layBarBut } = this.state;
    return (
      <Fragment>
        <div className="layout-bar" style={layBar}>
          {/* <Input
              icon="search"
              placeholder="Search..."
              // value={this.state.value}
              onChange={(e, v) => console.log(e, v.value)}
            />
          */}
          <ul>
            {routes.map((n, i) => (
              <li>
                <Link to={n.path}>{n.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="layout-main" style={layMain}>
          <div>
            <button
              className="ui icon right button huge layout-bar-button"
              onClick={this.onClick}
            >
              <RiArrowLeftSLine style={layBarBut} />
            </button>
          </div>
          <div className="lay-content">{cayoutContent}</div>
        </div>
      </Fragment>
    );
  }
}
export default LayoutContainar;
