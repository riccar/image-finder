(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(n,e,t){n.exports=t(56)},56:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(20),c=t.n(i),o=t(1),u=t(5),l=t.n(u),m=t(9),s=t(21),f=t(4),d=t(26),p=t(23),b=t.n(p).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID 63ff086a0ebb7770e3d867bca4805c9fcef30315e95e45852157789218eb1cbd"}}),g=t(2);function v(){var n=Object(g.a)(["\t\n\tbackground: white;\n\tmargin: 1rem 1rem;\n\tpadding: 1rem 1rem;\n\tborder-radius: .3rem;\n  border: 1px solid ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;  \n"]);return v=function(){return n},n}var h=o.c.div(v(),function(n){return n.theme.borderColor});function j(){var n=Object(g.a)(["\n  margin-bottom: 0.3rem;\n"]);return j=function(){return n},n}function x(){var n=Object(g.a)(["\n  display: block;\n  margin-top: 0.3rem;\n  color: #888;\n"]);return x=function(){return n},n}function O(){var n=Object(g.a)(["\n  margin: .5rem 0;\n"]);return O=function(){return n},n}function E(){var n=Object(g.a)(["\n\n  width: 100%;\n\n  & input[type='text'],\n  & input[type='email'],\n  & input[type='password'],\n  & input[type='date'],\n  & select,\n  & textarea {\n    display: block;\n    width: 100%;\n    padding: 0.4rem;\n    font-size: 1.2rem;\n    border-radius: .3rem;\n\t  border: 1px solid ",";\n  }\n"]);return E=function(){return n},n}var y=o.c.form(E(),function(n){return n.theme.borderColor}),w=o.c.div(O()),k=o.c.small(x()),S=o.c.label(j());y.FormText=k,y.FormGroup=w,y.FormLabel=S;var L=y,z=function(n){var e=Object(r.useState)("Ecology"),t=Object(f.a)(e,2),i=t[0],c=t[1];return a.a.createElement(h,null,a.a.createElement(L,{onSubmit:function(e){e.preventDefault(),n.onSubmit(i,1)}},a.a.createElement(L.FormLabel,null,"Image Search"),a.a.createElement("input",{type:"text",value:i,onChange:function(n){return c(n.target.value)}})))};function C(){var n=Object(g.a)(["\n  display: grid;\n  /*minmax column width min 250px and max 1fr = for every column make it of equal size*/\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); \n  /*grid-gap: 0px 0px;*/\n  /*Every grid element is set to 10px height*/\n  grid-auto-rows: 10px;\n"]);return C=function(){return n},n}var F=o.c.div(C());function q(){var n=Object(g.a)(["\n  position: absolute;\n  width: 250px;\n  bottom: 8px;\n  background: rgba(0,0,0,0.7);\n  color: white;\n  font-size: .7em;\n  padding: 1em;\n"]);return q=function(){return n},n}function T(){var n=Object(g.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  grid-row-end: span ",";\n  position: relative;\n\n  & img {\n    width: 250px;\n    grid-row-end: span 2;\n  }\n"]);return T=function(){return n},n}var D=o.c.div(T(),function(n){return n.gridSpan}),I=o.c.div(q());D.Text=I;var J=D,R=Object(r.memo)(function(n){var e=Object(r.useState)(0),t=Object(f.a)(e,2),i=t[0],c=t[1],o=Object(r.useRef)(null);Object(r.useEffect)(function(){var n=function(){c(_(o))};o.current.addEventListener("load",n);var e=o.current;return function(){e.removeEventListener("load",n)}},[]);var u=n.image,l=u.alt_description,m=u.urls,s=u.user;return a.a.createElement(J,{gridSpan:i},a.a.createElement("img",{ref:o,alt:l,src:m.regular}),a.a.createElement(J.Text,null,a.a.createElement("p",null,l),a.a.createElement("p",null,"By ",s.name)))}),_=function(n){var e=n.current.clientHeight;return Math.ceil(e/10+1)},A=function(n){var e=n.images.map(function(n){return a.a.createElement(R,{key:n.id,image:n})});return a.a.createElement(a.a.Fragment,null,a.a.createElement(F,null,e))};function B(){var n=Object(g.a)(["\n  margin: 20px auto;\n  width: 90vw;\n  max-width: 1200px;\n"]);return B=function(){return n},n}var G=o.c.section(B());function H(){var n=Object(g.a)(["\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: #3ff9dc;\n  animation: pulse .4s ease "," infinite alternate;\n  @keyframes pulse {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: .25;\n    transform: scale(.75);\n  }\n}\n"]);return H=function(){return n},n}function M(){var n=Object(g.a)(["\n  width: 120px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return M=function(){return n},n}function U(){var n=Object(g.a)(["\n  height: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: transparent;\n"]);return U=function(){return n},n}var K=o.c.div(U()),N=o.c.div(M()),P=o.c.div(H(),function(n){return n.ease}),Q=Object(r.memo)(function(){return a.a.createElement(K,null,a.a.createElement(N,null,a.a.createElement(P,{ease:"0s"}),a.a.createElement(P,{ease:".2s"}),a.a.createElement(P,{ease:".4s"})))});function V(){var n=Object(g.a)(['\n  * {\n  outline: none;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  position: relative;\n  -webkit-tap-highlight-color: rgba(0,0,0,0); /*avoid grey div bg on tab*/\n}\n\nimg {\n  outline: none;\n}\n\nbody {\n  font-family: "Lato", sans-serif;\n  /*overflow: hidden;*/\n}\n']);return V=function(){return n},n}var W=Object(o.b)(V()),X=function(){var n=Object(r.useState)([]),e=Object(f.a)(n,2),t=e[0],i=e[1],c=Object(r.useState)(1),o=Object(f.a)(c,2),u=o[0],p=o[1],g=Object(r.useState)("Ecology"),v=Object(f.a)(g,2),h=v[0],j=v[1],x=Object(d.a)({threshold:1}),O=Object(f.a)(x,2),E=O[0],y=O[1],w=function(){var n=Object(s.a)(l.a.mark(function n(e,t){var r;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return j(e),n.next=3,b.get("/search/photos",{params:{query:e,page:t,per_page:15}});case 3:r=n.sent,i(1===t?r.data.results:function(n){return[].concat(Object(m.a)(n),Object(m.a)(r.data.results))});case 5:case"end":return n.stop()}},n)}));return function(e,t){return n.apply(this,arguments)}}();return Object(r.useEffect)(function(){p(u+1),y&&w(h,u)},[y]),a.a.createElement(G,null,a.a.createElement(W,null),a.a.createElement(z,{onSubmit:w}),a.a.createElement(A,{images:t}),a.a.createElement("div",{ref:E},a.a.createElement(Q,null)))},Y={borderColor:"rgba(34,36,38,.15);"};c.a.render(a.a.createElement(o.a,{theme:Y},a.a.createElement(X,null)),document.querySelector("#root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.6e06902d.chunk.js.map