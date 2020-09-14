import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import { RiArrowLeftSLine } from "react-icons/ri";
import { Input } from "semantic-ui-react";

class LayoutContainar extends Component {
  state = {
    layBarBut: {},
    layBar: { width: "300px" },
    layMain: { width: "calc(100% - 300px)" },
    routesList: [],
  };

  componentDidMount() {
    this.setState({
      routesList: this.props.routes,
    });
  }

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
    const { cayoutContent } = this.props;
    const { layMain, layBar, layBarBut, routesList } = this.state;
    return (
      <Fragment>
        <div className="layout-bar" style={layBar}>
          <div className="layout-bar-search center">
            <Input
              fluid
              icon="search"
              placeholder="Search..."
              // value={this.state.value}
              onChange={(e, v) => {
                const routesList = [];
                this.props.routes.map((n) => {
                  if (n.name.includes(v.value)) {
                    routesList.push(n);
                  }
                });

                this.setState({ routesList });
              }}
            />
          </div>
          <div className="layout-bar-list">
            {routesList.map((n, i) => (
              <div>
                <Link to={n.path}>{n.name}</Link>
              </div>
            ))}
          </div>
        </div>
        <div className="layout-main" style={layMain}>
          <div className="layout-bar-button">
            <button
              className="ui icon right button huge "
              onClick={this.onClick}
            >
              <RiArrowLeftSLine style={layBarBut} />
            </button>
          </div>
          <div className="lay-content" style={layMain}>
            {cayoutContent}
          </div>
        </div>
      </Fragment>
    );
  }
}
export default LayoutContainar;
