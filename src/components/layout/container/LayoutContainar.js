import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

// import { CgChevronDoubleUp, CgChevronLeft } from "react-icons/cg";
import { Input, Icon } from "semantic-ui-react";

import { util } from "../../../common";

class LayoutContainar extends Component {
  state = {
    //style
    topScrollBut: { opacity: 0 },

    layBarBut: {},
    layBarButIcon: {},
    layBar: { width: "300px" },
    layMain: { width: "calc(100% - 300px)" },
    routesList: [],
  };

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.setState({
      routesList: this.props.routes,
    });
    window.addEventListener("scroll", this.scrollListener);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollListener);
  }

  scrollListener = () => {
    if (window.pageYOffset > 100) {
      if (!this.state.topScrollBut.opacity) {
        return this.setState({ topScrollBut: { opacity: 1 } });
      }
    } else {
      if (this.state.topScrollBut.opacity) {
        return this.setState({ topScrollBut: { opacity: 0 } });
      }
    }
  };

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
      topScrollBut,

      layMain,
      layBar,
      layBarBut,
      layBarButIcon,
      routesList,
    } = this.state;
    return (
      <Fragment>
        <div className="lay-topScrollBut" style={topScrollBut}>
          {topScrollBut.opacity ? (
            <button
              className="ui icon right button huge"
              onClick={() => util.scrollTo()}
            >
              <Icon
                //loading
                style={layBarButIcon}
                name="angle double up"
                // size="large"
              />{" "}
            </button>
          ) : (
            []
          )}
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
                      return routesList.push(n);
                    }
                    return null;
                  });

                  this.setState({ routesList });
                }}
              />
            </div>
            <div className="layout-bar-list">
              {routesList.map((n, i) => (
                <div key={i}>
                  <Link to={n.path}>{n.name}</Link>
                </div>
              ))}
            </div>
          </div>
          <div
            className="layout-bar-button"
            style={layBarBut}
            onClick={this.onClick}
          >
            {/* <i
              style={layBarButIcon}
              aria-hidden="true"
              class="icon angle left big"
            /> */}
            <Icon
              //loading
              style={layBarButIcon}
              name="angle left"
              size="big"
            />
            {/* <CgChevronLeft style={layBarButIcon} /> */}
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
