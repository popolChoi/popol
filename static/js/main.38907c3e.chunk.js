(this.webpackJsonppopol=this.webpackJsonppopol||[]).push([[0],{305:function(t,e,n){t.exports=n.p+"static/media/logo.ee7cd8ed.svg"},314:function(t,e,n){t.exports=n(670)},320:function(t,e,n){},449:function(t,e,n){},465:function(t,e){},467:function(t,e){},476:function(t,e){},478:function(t,e){},503:function(t,e){},505:function(t,e){},506:function(t,e){},512:function(t,e){},514:function(t,e){},532:function(t,e){},534:function(t,e){},546:function(t,e){},549:function(t,e){},554:function(t,e){},556:function(t,e){},579:function(t,e){},670:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),l=n(55),c=n.n(l),r=(n(319),n(320),n(297)),i=n.n(r),s=n(112),u=n(15),m=n(49),p=n(50),f=n(68),d=n(67),h=n(70),y=n(679),v=function(){function t(){Object(m.a)(this,t)}return Object(p.a)(t,null,[{key:"scrollTo",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"root",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"root",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,o=function(e){clearInterval(e),t.timer=null},l=0,c=document.getElementById(e),r=document.getElementById(n),i=window.pageYOffset+c.getBoundingClientRect().top,s=window.pageYOffset+r.getBoundingClientRect().top;0===i&&(i=window.pageYOffset),i>s&&(l=i),this.timer=setInterval((function(){i>s?1*s>=1*(l-=a)?(window.scrollTo(0,s),o(t.timer)):window.scrollTo(0,l):1*s<=1*(l+=a)?(window.scrollTo(0,s),o(t.timer)):window.scrollTo(0,l)}),1)}}]),t}(),g=function(t){Object(f.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(m.a)(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(t=e.call.apply(e,[this].concat(o))).state={topScrollBut:{opacity:0},layBarBut:{},layBarButIcon:{},layBar:{width:"300px"},layMain:{width:"calc(100% - 300px)"},routesList:[]},t.scrollListener=function(){if(window.pageYOffset>100){if(!t.state.topScrollBut.opacity)return t.setState({topScrollBut:{opacity:1}})}else if(t.state.topScrollBut.opacity)return t.setState({topScrollBut:{opacity:0}})},t.onClick=function(){"0%"===t.state.layBar.width?t.setState({layBarBut:{},layBarButIcon:{},layBar:{width:"300px"},layMain:{width:"calc(100% - 300px)"}}):t.setState({layBarBut:{left:"0px"},layBarButIcon:{transform:"rotate(180deg)"},layBar:{width:"0%"},layMain:{width:"100%"}})},t}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.setState({routesList:this.props.routes}),window.addEventListener("scroll",this.scrollListener)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function(){var t=this,e=this.props.cayoutContent,n=this.state,l=n.topScrollBut,c=n.layMain,r=n.layBar,i=n.layBarBut,u=n.layBarButIcon,m=n.routesList;return o.a.createElement(a.Fragment,null,o.a.createElement("div",{className:"lay-topScrollBut",style:l},l.opacity?o.a.createElement("button",{className:"ui icon right button huge",onClick:function(){return v.scrollTo()}},o.a.createElement(h.a,{style:u,name:"angle double up"})," "):[]),o.a.createElement("div",{style:{zIndex:2,position:"fixed"}},o.a.createElement("div",{className:"layout-bar",style:r},o.a.createElement("div",{className:"layout-bar-search center"},o.a.createElement(y.a,{fluid:!0,icon:"search",placeholder:"Search...",onChange:function(e,n){var a=[];t.props.routes.map((function(t){return t.name.includes(n.value)?a.push(t):null})),t.setState({routesList:a})}})),o.a.createElement("div",{className:"layout-bar-list"},m.map((function(t,e){return o.a.createElement("div",{key:e},o.a.createElement(s.b,{to:t.path},t.name))})))),o.a.createElement("div",{className:"layout-bar-button",style:i,onClick:this.onClick},o.a.createElement(h.a,{style:u,name:"angle left",size:"big"}))),o.a.createElement("div",{className:"layout-main",style:c},o.a.createElement("div",{className:"lay-main-content",style:c},e)))}}]),n}(a.Component),E=n(305),w=n.n(E),b=function(t){Object(f.a)(n,t);var e=Object(d.a)(n);function n(){return Object(m.a)(this,n),e.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:w.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,"Edit ",o.a.createElement("code",null,"src/App.js")," and save to reload."),o.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React"))}}]),n}(a.Component),B=(n(449),function(t){Object(f.a)(n,t);var e=Object(d.a)(n);function n(){return Object(m.a)(this,n),e.apply(this,arguments)}return Object(p.a)(n,[{key:"scrollTo",value:function(t,e){v.scrollTo(t,e,50)}},{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"smooth-scroll"},o.a.createElement("button",{id:"top",onClick:function(){return t.scrollTo("top","bottom")}},"scroll to bottom"),o.a.createElement("div",{className:"smooth-scroll--spacer"}),o.a.createElement("button",{id:"bottom",onClick:function(){return t.scrollTo("bottom","top")}},"scroll to top"),o.a.createElement("div",{className:"smooth-scroll--spacer"})))}}]),n}(a.Component)),k=[{path:"/",name:"Home",component:function(){return o.a.createElement(b,null)}},{path:"/scroll",name:"scroll",component:function(){return o.a.createElement(B,null)}}];var O=function(){return n(450)("https://www.google.com/",(function(t,e,n){console.log(n)})),i()({method:"get",url:"https://www.google.com/",headers:{}}).then((function(t){console.log(t)})).catch((function(t){console.log(t)})),o.a.createElement(s.a,null,o.a.createElement(g,{routes:k,cayoutContent:o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{from:"/",to:"/"}),k.map((function(t,e){return o.a.createElement(u.b,{key:e,exact:0===e,path:t.path,component:t.component})})))}))};var j=function(){return o.a.createElement(o.a.StrictMode,null,o.a.createElement("div",{className:"App"},o.a.createElement(O,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[314,1,2]]]);
//# sourceMappingURL=main.38907c3e.chunk.js.map