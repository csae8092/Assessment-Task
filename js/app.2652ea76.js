(function(t){function e(e){for(var a,o,i=e[0],l=e[1],s=e[2],u=0,b=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&b.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(b.length)b.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(a=!1)}a&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},c=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/Assessment-Task/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"26a4":function(t,e,n){"use strict";n("55c0")},"55c0":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={id:"app"};function c(t,e,n,c,o,i){var l=Object(a["i"])("nav-bar"),s=Object(a["i"])("search");return Object(a["e"])(),Object(a["c"])("div",r,[Object(a["d"])(l),Object(a["d"])(s)])}var o=n("eadc"),i=n.n(o),l=Object(a["n"])("data-v-c9275bb6");Object(a["g"])("data-v-c9275bb6");var s={class:"navbar navbar-expand-lg navbar-light"},d=Object(a["d"])("div",{class:"container"},[Object(a["d"])("a",{href:"#",class:"navbar-brand custom-logo-link",rel:"home",itemprop:"url"},[Object(a["d"])("img",{src:i.a,class:"img-fluid",alt:"Your Logo",itemprop:"logo"})]),Object(a["d"])("a",{class:"navbar-brand site-title-with-logo",rel:"home",href:"#",title:"Your Project",itemprop:"url"},"Assessment Task"),Object(a["d"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(a["d"])("span",{class:"navbar-toggler-icon"})])],-1);Object(a["f"])();var u=l((function(t,e,n,r,c,o){return Object(a["e"])(),Object(a["c"])("nav",s,[d])})),b={name:"NavigationBar"};b.render=u,b.__scopeId="data-v-c9275bb6";var p=b,f=Object(a["n"])("data-v-3196dfb7");Object(a["g"])("data-v-3196dfb7");var j={class:"search input-group mb-3"},O={class:"input-group-prepend"},v=Object(a["d"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-search",viewBox:"0 0 16 16"},[Object(a["d"])("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})],-1),h={key:0},g={key:1},m={key:2},y=Object(a["d"])("label",{for:"limit"},"Results per page:",-1);Object(a["f"])();var w=f((function(t,e,n,r,c,o){var i=Object(a["i"])("data-table");return Object(a["e"])(),Object(a["c"])("div",null,[Object(a["d"])("div",j,[Object(a["l"])(Object(a["d"])("input",{type:"text",onKeyup:e[1]||(e[1]=Object(a["m"])((function(){return o.send&&o.send.apply(o,arguments)}),["enter"])),"onUpdate:modelValue":e[2]||(e[2]=function(t){return c.input=t}),class:"form-control","aria-describedby":"basic-addon1"},null,544),[[a["k"],c.input]]),Object(a["d"])("div",O,[Object(a["d"])("button",{class:"btn btn-primary",onClick:e[3]||(e[3]=function(){return o.send&&o.send.apply(o,arguments)}),type:"button"},[v])])]),Object(a["d"])("p",null,[c.init?(Object(a["e"])(),Object(a["c"])("span",h,"Please insert search query")):c.loading?(Object(a["e"])(),Object(a["c"])("span",g,"loading...")):(Object(a["e"])(),Object(a["c"])("span",m,Object(a["j"])(c.count)+" results found, showing "+Object(a["j"])(parseInt(c.offset)+1)+"-"+Object(a["j"])(parseInt(c.offset)+c.limit>c.count?c.count:parseInt(c.offset)+c.limit),1))]),Object(a["d"])("p",null,[Object(a["d"])("button",{class:"btn btn-outline-primary navButton",disabled:!c.previous,onClick:e[4]||(e[4]=function(t){return o.send(c.previous)})},"Previous",8,["disabled"]),y,Object(a["l"])(Object(a["d"])("input",{type:"number",id:"limit","onUpdate:modelValue":e[5]||(e[5]=function(t){return c.limitField=t}),class:"form-control limit"},null,512),[[a["k"],c.limitField]]),Object(a["d"])("button",{class:"btn btn-outline-primary navButton",disabled:!c.next,onClick:e[6]||(e[6]=function(t){return o.send(c.next)})},"Next",8,["disabled"])]),Object(a["d"])(i,{entries:c.results,key:c.renderKey},null,8,["entries"])])})),x=(n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("b0c0"),n("bc3a")),k=n.n(x),_=(n("ac1f"),n("5319"),n("a15b"),n("d81d"),Object(a["n"])("data-v-79aeb230"));Object(a["g"])("data-v-79aeb230");var P={class:"table",id:"table"},S=Object(a["d"])("thead",null,[Object(a["d"])("tr",null,[Object(a["d"])("th",{scope:"col"},"Label"),Object(a["d"])("th",{scope:"col"},"Title"),Object(a["d"])("th",{scope:"col"},"Author"),Object(a["d"])("th",{scope:"col"},"Associated Keywords"),Object(a["d"])("th",{scope:"col"},"Written")])],-1),T={scope:"row"},I={scope:"row"},A={scope:"row"},M={scope:"row"},B={scope:"row"};Object(a["f"])();var K=_((function(t,e,n,r,c,o){return Object(a["e"])(),Object(a["c"])("table",P,[S,Object(a["d"])("tbody",null,[(Object(a["e"])(!0),Object(a["c"])(a["a"],null,Object(a["h"])(n.entries,(function(t){return Object(a["e"])(),Object(a["c"])("tr",{key:t.legacy_pk},[Object(a["d"])("td",T,Object(a["j"])(t.display_label),1),Object(a["d"])("td",I,[Object(a["d"])("a",{href:t.url.replace("?format=json","")},Object(a["j"])(t.text.title),9,["href"])]),Object(a["d"])("td",A,Object(a["j"])(t.autor.join(", ")),1),Object(a["d"])("td",M,Object(a["j"])(t.key_word.map((function(t){return t.stichwort})).join(", ")),1),Object(a["d"])("td",B,Object(a["j"])(t.text.start_date?t.text.start_date:"unknown")+" - "+Object(a["j"])(t.text.end_date?t.text.end_date:"unknown"),1)])})),128))])])})),N={name:"DataTable",props:{entries:{type:Array,required:!1}}};n("26a4");N.render=K,N.__scopeId="data-v-79aeb230";var z=N,C={name:"Search",data:function(){return{input:"",results:[],loading:!1,count:0,init:!0,next:null,previous:null,offset:0,limit:20,limitField:20,renderKey:0}},components:{DataTable:z},methods:{send:function(t){var e=this,n="string"==typeof t;if(this.init=!1,this.loading=!0,n){console.log(t);var a=new URLSearchParams(t);this.offset=a.get("offset")?a.get("offset"):0}else this.limit=parseInt(this.limitField),this.offset=0;(n?k()(t):k()("https://mmp.acdh-dev.oeaw.ac.at/api/stelle/",{params:{format:"json",zitat_lookup:"icontains",zitat:this.input,limit:this.limit}})).then((function(t){console.log(t.data),e.count=t.data.count,e.results=t.data.results,e.next=t.data.next,e.previous=t.data.previous,e.count||(e.loading=!1);for(var n=function(t){e.loading=!0,e.results[t].autor=[];for(var n=e.results[t].text.autor,a=function(a){k()(n[a]).then((function(r){e.results[t].autor.push(r.data.name),a==n.length-1&&(e.renderKey+=1,e.loading=!1)})).catch((function(t){console.log(t),e.loading=!1}))},r=0;r<n.length;r+=1)a(r)},a=0;a<e.results.length;a+=1)n(a)})).catch((function(t){console.log(t),e.loading=!1}))}}};n("a2ea");C.render=w,C.__scopeId="data-v-3196dfb7";var D=C,F={name:"App",components:{NavBar:p,Search:D}};n("7c89");F.render=c;var L=F;Object(a["b"])(L).mount("#app")},"7c89":function(t,e,n){"use strict";n("af45")},a2ea:function(t,e,n){"use strict";n("fc7d")},af45:function(t,e,n){},eadc:function(t,e,n){t.exports=n.p+"img/fundament_logo.6e8c6e01.svg"},fc7d:function(t,e,n){}});
//# sourceMappingURL=app.2652ea76.js.map