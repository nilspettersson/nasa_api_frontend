(this.webpackJsonpnasa_api_frontend=this.webpackJsonpnasa_api_frontend||[]).push([[0],{31:function(e,a,t){e.exports=t(49)},36:function(e,a,t){},37:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(14),l=t.n(c),o=(t(36),t(29)),i=t(1),s=(t(37),t(6)),m=t(7),h=t(9),u=t(8),d=function(e){Object(h.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={},e}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement("a",{className:"title",href:"/nasa_api_frontend#home"},"NASA EXPLORER"),r.a.createElement("a",{className:"link",href:"/nasa_api_frontend#home"},"Home"),r.a.createElement("a",{className:"link",href:"/nasa_api_frontend#explore"},"Explore"))}}]),t}(n.Component),p=t(28),f=function(e){Object(h.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={imgLoaded:!1,imgUrl:"",title:"",explanation:""},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.nasa.gov/planetary/apod?api_key=3lAiOi562emtnie1O6cdo43rupWcM8idQryj7g5E").then((function(e){return e.json()})).then((function(a){console.log(a),e.setState({imgLoaded:!0,imgUrl:a.url,title:a.title,explanation:a.explanation})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,{page:"home"}),r.a.createElement("header",null,r.a.createElement("h1",{className:"header"},"NASA api Explorer"),r.a.createElement("h3",{className:"header2"},"Explore NASA images and more"),r.a.createElement("div",{className:"buttons"},r.a.createElement("a",{href:"/nasa_api_frontend#explore",className:"primary-button"},"Explore"),r.a.createElement(p.Link,{className:"secondary-button",smooth:!0,duration:500,offset:-180,to:"todayImage"},"Image of the day"))),r.a.createElement("div",{className:"page-header"},r.a.createElement("h3",null,"Image of the day")),this.showImage())}},{key:"showImage",value:function(){return 1==this.state.imgLoaded?r.a.createElement("div",{id:"todayImage",className:"todayImage padding"},r.a.createElement("h4",null,this.state.title),r.a.createElement("div",null,r.a.createElement("img",{src:this.state.imgUrl}),r.a.createElement("p",null,this.state.explanation))):null}}]),t}(n.Component),g=function(e){Object(h.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={},e}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:this.props.href}),r.a.createElement("p",{className:"image-title"},this.props.title),r.a.createElement("p",{className:"image-date"},this.props.date.substring(0,10)))}}]),t}(n.Component),v=function(e){Object(h.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={search:"",loaded:!1,images:{}},e.handleClick=function(){fetch("https://images-api.nasa.gov/search?q="+e.state.search+"&media_type=image").then((function(e){return e.json()})).then((function(a){console.log(a.collection.items);var t=a.collection.items;e.setState({loaded:!0,images:t})}))},e.handleChange=function(a){e.setState({search:a.target.value})},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://images-api.nasa.gov/search?media_type=image").then((function(e){return e.json()})).then((function(a){console.log(a.collection.items);var t=a.collection.items;e.setState({loaded:!0,images:t})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,{page:"explore"}),r.a.createElement("div",{className:"menu padding"},r.a.createElement("h3",null,"Explore NASA images"),r.a.createElement("div",{className:"search-container"},r.a.createElement("input",{className:"search",type:"text",onChange:this.handleChange}),r.a.createElement("img",{src:"%PUBLIC_URL%/../res/search.svg",onClick:this.handleClick}))),this.showImages())}},{key:"showImages",value:function(){if(this.state.loaded)return r.a.createElement("div",{className:"grid padding"},this.state.images.map((function(e,a){return r.a.createElement(g,{key:a,href:e.links[0].href,title:e.data[0].title,date:e.data[0].date_created})})))}}]),t}(n.Component),E=function(e){Object(h.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={},e}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404 Not found!"))}}]),t}(n.Component);var y=function(){return r.a.createElement(o.a,{basename:"/nasa_api_frontend"},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:f}),r.a.createElement(i.a,{exact:!0,path:"/home",component:f}),r.a.createElement(i.a,{exact:!0,path:"/explore",component:v}),r.a.createElement(i.a,{component:E})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.6d20b353.chunk.js.map