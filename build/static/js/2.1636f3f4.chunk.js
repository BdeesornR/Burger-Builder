webpackJsonp([2],{191:function(e,r,n){"use strict";function t(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function o(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!==typeof r&&"function"!==typeof r?e:r}function i(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(r,"__esModule",{value:!0});var a=n(0),c=n.n(a),s=n(7),p=n(13),u=n(202),l=n(14),d=n(59),f=n(58),b=function(){function e(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(r,n,t){return n&&e(r.prototype,n),t&&e(r,t),r}}(),x=function(e){function r(){var e,n,i,a;t(this,r);for(var c=arguments.length,s=Array(c),p=0;p<c;p++)s[p]=arguments[p];return n=i=o(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(s))),i.deletePostHandler=function(e){i.props.onDeleteOrder(e,i.props.token,i.props.userId)},a=n,o(i,a)}return i(r,e),b(r,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=this,r=c.a.createElement(f.a,null);return this.props.loading||(r=this.props.orders.map(function(r){return c.a.createElement(u.a,{key:r.id,ingredients:r.ingredients,price:r.price,deletePostHandler:function(){return e.deletePostHandler(r.id)}})})),c.a.createElement("div",null,r)}}]),r}(a.Component),A=function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}},m=function(e){return{onFetchOrders:function(r,n){return e(p.e(r,n))},onDeleteOrder:function(r,n,t){return e(p.d(r,n,t))}}};r.default=Object(s.b)(A,m)(Object(d.a)(x,l.a))},202:function(e,r,n){"use strict";var t=n(0),o=n.n(t),i=n(203),a=n.n(i),c=function(e){var r=[];for(var n in e.ingredients)r.push({name:n,amount:e.ingredients[n]});var t=r.map(function(e){return o.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name," (",e.amount,")")});return o.a.createElement("div",{className:a.a.Order,onClick:e.deletePostHandler},o.a.createElement("p",null,"Ingredients: ",t),o.a.createElement("p",null,"Price: ",o.a.createElement("strong",null,"USD ",Number.parseFloat(e.price).toFixed(2))))};r.a=c},203:function(e,r,n){var t=n(204);"string"===typeof t&&(t=[[e.i,t,""]]);var o={};o.transform=void 0;n(189)(t,o);t.locals&&(e.exports=t.locals)},204:function(e,r,n){r=e.exports=n(188)(!0),r.push([e.i,".Order__Order__W-Npf{width:80%;border:1px solid #eee;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;padding:10px;margin:10px auto;-webkit-box-sizing:border-box;box-sizing:border-box}","",{version:3,sources:["D:/Minimice/Coding/React/Example/Example_2_(Burger)_(Redux)/src/components/Order/Order.css"],names:[],mappings:"AAAA,qBACI,UAAW,AACX,sBAAuB,AACvB,kCAAmC,AAC3B,0BAA2B,AACnC,aAAc,AACd,iBAAkB,AAClB,8BAA+B,AACvB,qBAAuB,CAClC",file:"Order.css",sourcesContent:[".Order {\n    width: 80%;\n    border: 1px solid #eee;\n    -webkit-box-shadow: 0 2px 3px #ccc;\n            box-shadow: 0 2px 3px #ccc;\n    padding: 10px;\n    margin: 10px auto;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}"],sourceRoot:""}]),r.locals={Order:"Order__Order__W-Npf"}}});
//# sourceMappingURL=2.1636f3f4.chunk.js.map