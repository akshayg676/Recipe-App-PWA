(this["webpackJsonpreciepe-app"]=this["webpackJsonpreciepe-app"]||[]).push([[0],{18:function(e,t,c){},19:function(e,t,c){},21:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),i=c(13),r=c.n(i),s=(c(18),c(3)),l=(c(19),c(0));function o(e){var t=e.recipe;return null!=t.recipe.image.match(/\.(jpeg|jpg|gif|png)$/)&&Object(l.jsxs)("div",{className:"recipeList",onClick:function(){window.open(t.recipe.url)},children:[Object(l.jsx)("img",{className:"recipeList__img",src:t.recipe.image,alt:"Recipe img"}),Object(l.jsx)("h2",{className:"recipeList__name",children:t.recipe.label}),Object(l.jsxs)("section",{className:"recipeList__ingredientLines",children:[Object(l.jsx)("p",{style:{fontWeight:"bold",margin:"1rem 0"},children:"Ingredients:"}),t.recipe.ingredientLines.map((function(e){return Object(l.jsx)("li",{children:e})}))]})]})}c(21);var p=c(22);var j=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)([]),r=Object(s.a)(i,2),j=r[0],u=r[1],h=Object(n.useState)("vegan"),d=Object(s.a)(h,2),b=d[0],f=d[1],g="https://api.edamam.com/search?q=".concat(c,"&app_id=").concat("cb376476","&app_key=").concat("440c21caedc0b31eb5d4fcb87f5088b2","&from=0&to=95&health=").concat(b);return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)("h1",{className:"app__heading",children:"\ud83c\udf7d\ufe0f Recipe Basket \ud83e\udd63"}),Object(l.jsxs)("form",{className:"app_searchForm",onSubmit:function(e){e.preventDefault(),p.get(g).then((function(e){e.data.count<1?alert("Invalid Ingridient"):(console.log(e.data),u(e.data.hits))})).catch((function(e){console.log(e)})),a("")},children:[Object(l.jsx)("input",{type:"text",className:"app__input",placeholder:"enter ingridient",value:c,onChange:function(e){return a(e.target.value)}}),Object(l.jsxs)("select",{className:"app__healthLabels",id:"selectBox",onChange:function(){return function(){var e=document.getElementById("selectBox"),t=e.options[e.selectedIndex].value;f(t)}()},children:[Object(l.jsx)("option",{value:"vegan",children:"vegan"}),Object(l.jsx)("option",{value:"vegetarian",children:"vegetarian"}),Object(l.jsx)("option",{value:"gluten-free",children:"gluten-free"}),Object(l.jsx)("option",{value:"wheat-free",children:"wheat-free"}),Object(l.jsx)("option",{value:"low-sugar",children:"low-sugar"}),Object(l.jsx)("option",{value:"egg-free",children:"egg-free"}),Object(l.jsx)("option",{value:"peanut-free",children:"peanut-free"}),Object(l.jsx)("option",{value:"tree-nut-free",children:"tree-nut-free"}),Object(l.jsx)("option",{value:"soy-free",children:"soy-free"}),Object(l.jsx)("option",{value:"fish-free",children:"fish-free"}),Object(l.jsx)("option",{value:"shellfish-free",children:"shellfish-free"}),Object(l.jsx)("option",{value:"paleo",children:"paleo"})]}),Object(l.jsx)("input",{className:"app__submit",type:"submit",value:"Search"})]}),Object(l.jsx)("div",{className:"app_recipe",children:j.map((function(e){return Object(l.jsx)(o,{recipe:e},Math.random())}))})]})};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.049da147.chunk.js.map