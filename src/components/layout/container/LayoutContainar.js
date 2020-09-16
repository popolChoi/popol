import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import { CgChevronDoubleUp, CgChevronLeft } from "react-icons/cg";

import { Input } from "semantic-ui-react";

class LayoutContainar extends Component {
  state = {
    layBarBut: {},
    layBarButIcon: {},
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

        layBarButIcon: {},
        layBar: { width: "300px" },
        layMain: { width: "calc(100% - 300px)" },
      });
    } else {
      this.setState({
        layBarBut: { left: "0px" },
        layBarButIcon: { transform: "rotate(180deg)" },
        layBar: { width: "0%" },
        layMain: { width: "100%" },
      });
    }
  };

  render() {
    const { cayoutContent } = this.props;
    const {
      layMain,
      layBar,
      layBarBut,
      layBarButIcon,
      routesList,
    } = this.state;
    return (
      <Fragment>
        <div className="lay-main-topBut">
          <button
            className="ui icon right button huge"
            onClick={() => alert("!!!")}
          >
            <CgChevronDoubleUp />
          </button>
        </div>
        <div
          style={{
            zIndex: 2,
            position: "fixed",
          }}
        >
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
          <div className="layout-bar-button" style={layBarBut}>
            <button
              className="ui icon right button huge"
              onClick={this.onClick}
            >
              <CgChevronLeft style={layBarButIcon} />
            </button>
          </div>
        </div>

        <div className="layout-main" style={layMain}>
          <div className="lay-main-content" style={layMain}>
            {cayoutContent}
          </div>
        </div>
      </Fragment>
    );
  }
}
export default LayoutContainar;
