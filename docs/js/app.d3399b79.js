(function(t){function e(e){for(var o,s,i=e[0],u=e[1],c=e[2],f=0,d=[];f<i.length;f++)s=i[f],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(o=!1)}o&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={app:0},a=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/hello/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"38fd":function(t,e,n){"use strict";var o=n("aa71"),r=n.n(o);r.a},"3f5d":function(t,e,n){"use strict";var o=n("d989"),r=n.n(o);r.a},"452c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mx-auto prose prose-md mt-32",attrs:{id:"app"}},[n("h1",[t._v("Hello")]),n("p",{staticClass:"lead"},[t._v("Let's build something awesome today.")]),n("linkage"),n("quote")],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-red-700 pt-5 italic text-xs",attrs:{id:"quote-component"}},[n("p",{staticClass:"message"},[t._v(t._s(t.quote.message))]),n("p",{staticClass:"author"},[t._v("- "+t._s(t.quote.author))])])},i=[],u=n("2ef0"),c={name:"Quote",props:{parentMessage:String},mounted:function(){this.quote=this.randomQuote()},methods:{randomQuote:function(){return this.quotes[u.random(0,this.quotes.length-1)]}},data:function(){return{quote:{author:"",message:""},quotes:[{author:"Steve Jobs",message:"Your time is limited. Don’t waste it living someone else’s life."},{author:"Bill Gates",message:"Your most unhappy customers are your greatest source of learning."},{author:"Carol S. Dweck",message:"Did I win? Did I lose? Those are the wrong questions. The correct question is: Did I make my best effort?"},{author:"David Allen",message:"Much of the stress that people feel doesn't come from having too much to do. It comes from not finishing what they've started."},{author:"Warren Buffet",message:"It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you'll do things differently."},{author:"Damian Lillard",message:"If you want to look good in front of thousands, you have to outwork thousands in front of nobody."}]}}},l=c,f=(n("38fd"),n("2877")),d=Object(f["a"])(l,s,i,!1,null,"a2a6006a",null),p=d.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-5 mb-5",attrs:{id:"linkage-component"}},t._l(t.links,(function(e){return n("a",{key:e.url,staticClass:"p-2 text-gray-600",attrs:{href:e.url}},[n("span",{staticClass:"material-icons md-36 gray-600"},[t._v(t._s(e.icon))])])})),0)},m=[],g={name:"Linkage",data:function(){return{links:[{url:"https://mail.google.com",icon:"inbox",name:"Mail"},{url:"https://github.com/kennith",icon:"source",name:"GitHub"},{url:"https://calendar.google.com",icon:"date_range",name:"Calendar"}]}}},v=g,b=(n("3f5d"),Object(f["a"])(v,h,m,!1,null,"415f9743",null)),y=b.exports,_={name:"App",components:{Quote:p,Linkage:y}},w=_,k=(n("5c0b"),n("b0a0"),Object(f["a"])(w,r,a,!1,null,null,null)),x=k.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(x)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("9c0c"),r=n.n(o);r.a},"9c0c":function(t,e,n){},aa71:function(t,e,n){},b0a0:function(t,e,n){"use strict";var o=n("452c"),r=n.n(o);r.a},d989:function(t,e,n){}});
//# sourceMappingURL=app.d3399b79.js.map