import React, { Component, Fragment } from "react";

import "./scroll.scss";

//https://codepen.io/brian-baum/pen/mJZxJX

class Scroll extends Component {
  set = 0;
  step() {
    clearInterval(this.timer);
    this.timer = null;
    this.set = 0;
  }

  start(top2) {
    // console.log(this.set);
  }
  scrollTo(id, id2) {
    const duration = 50;
    const node = document.getElementById(id);
    const node2 = document.getElementById(id2);
    const top = window.pageYOffset + node.getBoundingClientRect().top;
    const top2 = window.pageYOffset + node2.getBoundingClientRect().top;
    if (top > top2) {
      this.set = top;
    }
    this.timer = setInterval(() => {
      if (top > top2) {
        this.set -= duration;
        if (top2 * 1 >= this.set * 1) {
          window.scrollTo(0, top2);
          this.step();
        } else {
          window.scrollTo(0, this.set);
        }
      } else {
        this.set += duration;
        if (top2 * 1 <= this.set * 1) {
          window.scrollTo(0, top2);
          this.step();
        } else {
          window.scrollTo(0, this.set);
        }
      }
    }, 1);

    // const settings = {
    //   duration: 1000,
    //   easing: {
    //     outQuint: (x, t, b, c, d) => {
    //       return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    //     },
    //   },
    // };
    // let percentage = 0;
    // const startTime = Date.now();
    // const node = document.getElementById(id);
    // const nodeTop = node.offsetTop;
    // const nodeHeight = node.offsetHeight;
    // const body = document.body;
    // const html = document.documentElement;
    // const height = Math.max(
    //   body.scrollHeight,
    //   body.offsetHeight,
    //   html.clientHeight,
    //   html.scrollHeight,
    //   html.offsetHeight
    // );
    // const offset = window.pageYOffset;
    // const delta = nodeTop - offset;
    // const bottomScrollableY = height - window.innerHeight;
    // const targetY =
    //   bottomScrollableY < delta
    //     ? bottomScrollableY - (height - nodeTop - nodeHeight + offset)
    //     : delta;
    // if (this.timer) {
    //   clearInterval(this.timer);
    // }
    // function step() {
    //   const elapsed = Date.now() - startTime;
    //   if (elapsed > settings.duration) {
    //     clearTimeout(this.timer);
    //   }
    //   percentage = elapsed / settings.duration;
    //   if (percentage > 1) {
    //     clearTimeout(this.timer);
    //     if (callback) {
    //       callback();
    //     }
    //   } else {
    //     const yScroll = settings.easing.outQuint(
    //       0,
    //       elapsed,
    //       offset,
    //       targetY,
    //       settings.duration
    //     );
    //     window.scrollTo(0, yScroll); //!!!
    //     this.timer = setTimeout(step, 10);
    //   }
    // }
    // this.timer = setTimeout(step, 10);
  }

  render() {
    return (
      <div className="main">
        <div className="smooth-scroll">
          <button id="top" onClick={() => this.scrollTo("top", "bottom")}>
            scroll to bottom
          </button>
          <div className="smooth-scroll--spacer" />
          <button id="bottom" onClick={() => this.scrollTo("bottom", "top")}>
            scroll to top
          </button>
          <div className="smooth-scroll--spacer" />
        </div>
      </div>
    );
  }
}

export default Scroll;

// var App = React.createClass({
//   render: function () {
//     return <div><SmoothScroll /></div>;
//   }
// });

// var smoothScroll = {
// 	timer: null,

// 	stop: function () {
// 		clearTimeout(this.timer);
// 	},

// 	scrollTo: function (id, callback) {
// 		var settings = {
// 			duration: 1000,
// 			easing: {
// 				outQuint: function (x, t, b, c, d) {
// 					return c*((t=t/d-1)*t*t*t*t + 1) + b;
// 				}
// 			}
// 		};
// 		var percentage;
// 		var startTime;
// 		var node = document.getElementById(id);
// 		var nodeTop = node.offsetTop;
// 		var nodeHeight = node.offsetHeight;
// 		var body = document.body;
// 		var html = document.documentElement;
// 		var height = Math.max(
// 			body.scrollHeight,
// 			body.offsetHeight,
// 			html.clientHeight,
// 			html.scrollHeight,
// 			html.offsetHeight
// 		);
// 		var windowHeight = window.innerHeight
// 		var offset = window.pageYOffset;
// 		var delta = nodeTop - offset;
// 		var bottomScrollableY = height - windowHeight;
// 		var targetY = (bottomScrollableY < delta) ?
// 			bottomScrollableY - (height - nodeTop - nodeHeight + offset):
// 			delta;

// 		startTime = Date.now();
// 		percentage = 0;

// 		if (this.timer) {
// 			clearInterval(this.timer);
// 		}

// 		function step () {
// 			var yScroll;
// 			var elapsed = Date.now() - startTime;

// 			if (elapsed > settings.duration) {
// 				clearTimeout(this.timer);
// 			}

// 			percentage = elapsed / settings.duration;

// 			if (percentage > 1) {
// 				clearTimeout(this.timer);

// 				if (callback) {
// 					callback();
// 				}
// 			} else {
// 				yScroll = settings.easing.outQuint(0, elapsed, offset, targetY, settings.duration);
// 				window.scrollTo(0, yScroll);
// 				this.timer = setTimeout(step, 10);
// 			}
// 		}

// 		this.timer = setTimeout(step, 10);
// 	}
// };

// var SmoothScroll = React.createClass({

// 	render: function () {
// 		return (
// 			<div className="smooth-scroll">
// 				<button id="top" onClick={this.handleTopClick}>scroll to bottom</button>
// 				<div className="smooth-scroll--spacer" />
// 				<button id="bottom" onClick={this.handleBottomClick}>scroll to top</button>
// 			</div>
// 		);
// 	},

// 	handleTopClick: function () {
// 		smoothScroll.scrollTo('bottom');
// 	},

// 	handleBottomClick: function () {
// 		smoothScroll.scrollTo('top');
// 	}
// });

// React.render(<App />, document.getElementById('app'));
