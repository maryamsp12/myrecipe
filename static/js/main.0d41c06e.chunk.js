(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(34)},27:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(16),i=a.n(r),s=a(36),l=a(38),o=a(37),m=a(5),p=a.n(m),u=a(6),h=a(7),f=a(8),v=a(12),b=a(9),E=a(13),d=(a(27),function(e){return n.a.createElement("div",{className:"form"},n.a.createElement("form",{onSubmit:e.getRecipe,style:{marginBottom:"2rem"}},n.a.createElement("input",{type:"text",name:"recipeName",placeholder:"Search.."}),n.a.createElement("button",{className:"form__button"},"Search")))}),w=a(35),_=function(e){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},e.recipes.map(function(e){return n.a.createElement("div",{key:e.title,className:"col-md-4",style:{marginBottom:"2rem"}},n.a.createElement("div",{className:"recipes__box"},n.a.createElement("img",{className:"recipe__box-img",src:e.image_url,alt:e.title}),n.a.createElement("div",{className:"recipe__text"},n.a.createElement("h5",{className:"recipes__title"}," ",e.title.length<20?"".concat(e.title):"".concat(e.title.substring(0,20),"...")),n.a.createElement("p",{className:"recipes__subtitle"},"Publisher: ",n.a.createElement("span",null,e.publisher))),n.a.createElement("button",{className:"recipe_buttons"},n.a.createElement(w.a,{to:{pathname:"/recipe/".concat(e.recipe_id),state:{recipe:e.title}}}," View "))))})))},g=function(e){function t(){var e,a;Object(h.a)(this,t);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(a=Object(v.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(n)))).state={recipes:[]},a.getRecipe=function(){var e=Object(u.a)(p.a.mark(function e(t){var c,n,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c=t.target.elements.recipeName.value,e.next=4,fetch("https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=6d40d026896f9301538f52e7b888fd77&q=".concat(c,"&count=12"));case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,a.setState({recipes:r.recipes}),console.log(a.state.recipes);case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("h1",{className:"App-title"},"Recipe Search")),n.a.createElement(d,{getRecipe:this.getRecipe}),n.a.createElement(_,{recipes:this.state.recipes}))}}]),t}(c.Component),N=a(17),y=function(e){function t(){var e,a;Object(h.a)(this,t);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(a=Object(v.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(n)))).state={activeRecipe:[]},a.componentDidMount=Object(u.a)(p.a.mark(function e(){var t,c,n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.location.state.recipe,e.next=3,fetch("https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=6d40d026896f9301538f52e7b888fd77&q=".concat(t));case 3:return c=e.sent,e.next=6,c.json();case 6:n=e.sent,a.setState({activeRecipe:n.recipes[0]}),console.log(a.state.activeRecipe);case 9:case"end":return e.stop()}},e,this)})),a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){console.log(this.props);var e=this.state.activeRecipe;return n.a.createElement("div",Object(N.a)({className:"container"},"className","recipe"),0!==this.state.activeRecipe.length&&n.a.createElement("div",{className:"active-recipe"},n.a.createElement("h3",{className:"active-recipe__title"},e.title),n.a.createElement("img",{className:"active-recipe__img",src:e.image_url,alt:e.title}),n.a.createElement("h4",{className:"active-recipe__publisher"},"Publisher: ",n.a.createElement("span",null,e.publisher)),n.a.createElement("p",{className:"active-recipe__website"},"Website: ",n.a.createElement("span",null,n.a.createElement("a",{href:e.publisher_url},e.publisher_url))),n.a.createElement("button",{className:"active-recipe__button"},n.a.createElement(w.a,{to:{pathname:"/"}}," Go Home "))))}}]),t}(c.Component),j=function(){return n.a.createElement(s.a,null,n.a.createElement(l.a,null,n.a.createElement(o.a,{path:"/",component:g,exact:!0}),n.a.createElement(o.a,{path:"/recipe",component:y})))};a(32),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.0d41c06e.chunk.js.map