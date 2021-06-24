(function(e){function t(t){for(var a,c,s=t[0],i=t[1],l=t[2],_=0,d=[];_<s.length;_++)c=s[_],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var i=n[s];0!==r[i]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/Assessment-Task/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"19d1":function(e,t,n){},3562:function(e,t,n){},"3fbb":function(e,t,n){"use strict";var a=n("7a23"),r=Object(a["M"])("data-v-25ac1d55");Object(a["w"])("data-v-25ac1d55");var o={ref:"visWrapper",class:"visualization"};Object(a["u"])();var c=r((function(e,t,n,r,c,s){return Object(a["t"])(),Object(a["e"])("div",o,null,512)})),s=(n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),n("d81d"),n("4de4"),n("de47")),i=(n("bdfc"),{name:"Visualization",data:function(){return{}},props:{backgroundColor:String,dagMode:{type:String,default:null},graph:{type:Object,default:{nodes:[],edges:[],types:{nodes:[],edges:[]}}},highlightedNodeIds:Set,onNodeClick:Function,onSimulationEnd:Function,onSimulationTick:Function,onZoom:Function,selectedNodeIds:Set,showNeighborsOnly:{type:Boolean,default:!1},width:{type:String},height:String},methods:{transformedData:function(e){var t={};return t.nodes=this.addColorAndType(e.nodes,e.types.nodes),t.links=this.addColorAndType(e.edges,e.types.edges),t},addColorAndType:function(e,t){return e=e.map((function(e){var n=t.filter((function(t){return t.id==e.type}))[0];return n&&(e.color=n.color),e})),e},setCanvas:function(){var e=Object(s["a"])()(this.$refs.visWrapper);e.nodeLabel("label").height(this.height||this.$refs.visWrapper.clientHeight).width(this.width||this.$refs.visWrapper.clientWidth).backgroundColor(this.backgroundColor||null).dagMode(this.dagMode).onNodeClick(this.onNodeClick).onEngineStop(this.onSimulationEnd).onEngineTick(this.onEngineEnd).onZoom(this.onZoom).graphData(this.transformedData(this.graph)).cooldownTicks(100),e.onEngineStop((function(){return e.zoomToFit(400)}))}},updated:function(){this.setCanvas()}});n("509d");i.render=c,i.__scopeId="data-v-25ac1d55";t["a"]=i},"4f55":function(e,t,n){"use strict";n("f0bf")},"509d":function(e,t,n){"use strict";n("19d1")},"52ef":function(e,t,n){"use strict";n("e554")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={id:"app"};function o(e,t,n,o,c,s){var i=Object(a["B"])("nav-bar"),l=Object(a["B"])("router-view");return Object(a["t"])(),Object(a["e"])("div",r,[Object(a["h"])(i),Object(a["h"])(l)])}var c=n("eadc"),s=n.n(c),i=Object(a["M"])("data-v-037ea3a0");Object(a["w"])("data-v-037ea3a0");var l={class:"navbar navbar-expand-lg navbar-light"},u={class:"container"},_=Object(a["h"])("img",{src:s.a,class:"img-fluid",alt:"Your Logo",itemprop:"logo"},null,-1),d=Object(a["g"])("Assessment Task"),b={class:"dropdown"},h={class:"btn btn-outline-dark dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},p={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},f=Object(a["h"])("a",{href:"https://github.com/kaggl/Assessment-Task"},[Object(a["h"])("button",{class:"form-inline btn btn-outline-info"}," Repository ")],-1);Object(a["u"])();var O=i((function(e,t,n,r,o,c){var s=Object(a["B"])("router-link");return Object(a["t"])(),Object(a["e"])("nav",l,[Object(a["h"])("div",u,[Object(a["h"])(s,{to:"/search/",class:"navbar-brand custom-logo-link",rel:"home"},{default:i((function(){return[_]})),_:1}),Object(a["h"])(s,{to:"/search/",class:"navbar-brand site-title-with-logo",rel:"home",title:"Assessment Task"},{default:i((function(){return[d]})),_:1}),Object(a["h"])("div",b,[Object(a["h"])("button",h,Object(a["D"])(o.langMap[e.$i18n.locale]),1),Object(a["h"])("div",p,[Object(a["h"])("a",{class:"dropdown-item",href:"#",onClick:t[1]||(t[1]=function(t){return e.$i18n.locale="en"})},"English"),Object(a["h"])("a",{class:"dropdown-item",href:"#",onClick:t[2]||(t[2]=function(t){return e.$i18n.locale="de"})},"Deutsch")])]),f])])})),j={name:"NavigationBar",data:function(){return{langMap:{en:"English",de:"Deutsch"}}},mounted:function(){console.log("$t",this.$i18n.locale)}};n("4f55");j.render=O,j.__scopeId="data-v-037ea3a0";var m=j,y={class:"container"},g={class:"row"},v={class:"search input-group mb-3 col-md-6 offset-md-3"},k={class:"input-group-prepend"},w=Object(a["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-search",viewBox:"0 0 16 16"},[Object(a["h"])("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})],-1),E={key:0,class:"col-md-2"},D={class:"form-check form-switch"},P={class:"btn"},M={class:"form-check-label",for:"checkbox"},z={class:"nav nav-tabs"},A={class:"nav-item"},C={class:"nav-item"},L=Object(a["h"])("br",null,null,-1),K={key:0},T={key:1},I={key:2},B={key:3},x={key:4},S={key:0},R={for:"limit"};function $(e,t,n,r,o,c){var s=Object(a["B"])("vue-bootstrap-typeahead"),i=Object(a["B"])("router-link"),l=Object(a["B"])("visualization"),u=Object(a["B"])("data-table");return Object(a["t"])(),Object(a["e"])("div",y,[Object(a["h"])("div",g,[Object(a["h"])("div",v,["keyword"==c.type?Object(a["K"])((Object(a["t"])(),Object(a["e"])("input",{key:0,type:"text",placeholder:e.$t("keywords"),onKeyup:t[1]||(t[1]=Object(a["L"])((function(){return c.enterQuery&&c.enterQuery.apply(c,arguments)}),["enter"])),"onUpdate:modelValue":t[2]||(t[2]=function(e){return o.keyInput=e}),class:"form-control","aria-describedby":"basic-addon1"},null,40,["placeholder"])),[[a["G"],o.keyInput]]):Object(a["f"])("",!0),"stelle"==c.type?Object(a["K"])((Object(a["t"])(),Object(a["e"])("input",{key:1,type:"text",placeholder:e.$t("stelle"),onKeyup:t[3]||(t[3]=Object(a["L"])((function(){return c.enterQuery&&c.enterQuery.apply(c,arguments)}),["enter"])),"onUpdate:modelValue":t[4]||(t[4]=function(e){return o.input=e}),class:"form-control","aria-describedby":"basic-addon1"},null,40,["placeholder"])),[[a["G"],o.input]]):Object(a["f"])("",!0),o.advanced&&"stelle"==c.type?(Object(a["t"])(),Object(a["e"])(s,{key:2,type:"text",placeholder:"Use Case",onKeyup:[c.getKeywords,Object(a["L"])(c.enterQuery,["enter"])],data:o.keywordAuto,modelValue:o.useCase,"onUpdate:modelValue":t[5]||(t[5]=function(e){return o.useCase=e}),class:"form-control","aria-describedby":"basic-addon1"},null,8,["onKeyup","data","modelValue"])):Object(a["f"])("",!0),Object(a["h"])("div",k,[Object(a["h"])("button",{class:"btn btn-primary",onClick:t[6]||(t[6]=function(){return c.enterQuery&&c.enterQuery.apply(c,arguments)}),type:"button"},[w])])]),"stelle"==c.type?(Object(a["t"])(),Object(a["e"])("div",E,[Object(a["h"])("div",D,[Object(a["h"])("button",P,[Object(a["K"])(Object(a["h"])("input",{class:"form-check-input",type:"checkbox",id:"checkbox","onUpdate:modelValue":t[7]||(t[7]=function(e){return o.advanced=e})},null,512),[[a["F"],o.advanced]]),Object(a["h"])("label",M,Object(a["D"])(e.$t("advancedSearch")),1)])])])):Object(a["f"])("",!0)]),Object(a["h"])("ul",z,[Object(a["h"])("li",A,[Object(a["h"])(i,{class:[{active:"stelle"==c.type},"nav-link"],to:{name:"Search",params:{type:"stelle",search:o.input}}},{default:Object(a["J"])((function(){return[Object(a["g"])(Object(a["D"])(e.$t("datatable")),1)]})),_:1},8,["class","to"])]),Object(a["h"])("li",C,[Object(a["h"])(i,{class:[{active:"keyword"==c.type},"nav-link"],to:{name:"Search",params:{type:"keyword",search:o.input}}},{default:Object(a["J"])((function(){return[Object(a["g"])(Object(a["D"])(e.$t("visualization")),1)]})),_:1},8,["class","to"])])]),L,Object(a["h"])("p",null,[o.init?(Object(a["t"])(),Object(a["e"])("span",K,Object(a["D"])(e.$t("query")),1)):o.loading?(Object(a["t"])(),Object(a["e"])("span",T,Object(a["D"])(e.$t("loading"))+"...",1)):o.count&&"stelle"==c.type?(Object(a["t"])(),Object(a["e"])("span",I,Object(a["D"])(o.count)+" "+Object(a["D"])(e.$t("results"))+" "+Object(a["D"])(parseInt(o.offset)+1)+"-"+Object(a["D"])(parseInt(o.offset)+o.limit>o.count?o.count:parseInt(o.offset)+o.limit),1)):o.keyResults.nodes.length&&"keyword"==c.type?(Object(a["t"])(),Object(a["e"])("span",B,Object(a["D"])(e.$t("keyResults",{nodes:o.keyResults.nodes.length,edges:o.keyResults.edges.length})),1)):(Object(a["t"])(),Object(a["e"])("span",x,Object(a["D"])(e.$t("noResults")),1))]),"stelle"==c.type?(Object(a["t"])(),Object(a["e"])("p",S,[Object(a["h"])("button",{class:"btn btn-outline-primary navButton",disabled:!o.previous,onClick:t[8]||(t[8]=function(e){return c.send(o.previous)})},Object(a["D"])(e.$t("previous")),9,["disabled"]),Object(a["h"])("label",R,Object(a["D"])(e.$t("resultsperPage"))+":",1),Object(a["K"])(Object(a["h"])("input",{type:"number",id:"limit","onUpdate:modelValue":t[9]||(t[9]=function(e){return o.limitField=e}),class:"form-control limit"},null,512),[[a["G"],o.limitField]]),Object(a["h"])("button",{class:"btn btn-outline-primary navButton",disabled:!o.next,onClick:t[10]||(t[10]=function(e){return c.send(o.next)})},Object(a["D"])(e.$t("next")),9,["disabled"])])):Object(a["f"])("",!0),"keyword"==c.type?(Object(a["t"])(),Object(a["e"])(l,{key:1,graph:o.keyResults,height:"500"},null,8,["graph"])):(Object(a["t"])(),Object(a["e"])(u,{entries:o.results,key:o.renderKey},null,8,["entries"]))])}var U=n("2909"),W=(n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("b0c0"),n("99af"),n("d81d"),n("6062"),n("ac1f"),n("841c"),n("bc3a")),V=n.n(W),q=n("d45f"),N=(n("a15b"),Object(a["M"])("data-v-5c4671d1"));Object(a["w"])("data-v-5c4671d1");var J={class:"table",id:"table"},F={scope:"col"},Q={scope:"col"},G={scope:"col"},Z={scope:"col"},H={scope:"col"},Y={scope:"row"},X={scope:"row"},ee={scope:"row"},te={scope:"row"},ne={scope:"row"};Object(a["u"])();var ae=N((function(e,t,n,r,o,c){var s=Object(a["B"])("router-link");return Object(a["t"])(),Object(a["e"])("table",J,[Object(a["h"])("thead",null,[Object(a["h"])("tr",null,[Object(a["h"])("th",F,Object(a["D"])(e.$t("label")),1),Object(a["h"])("th",Q,Object(a["D"])(e.$t("title")),1),Object(a["h"])("th",G,Object(a["D"])(e.$t("author")),1),Object(a["h"])("th",Z,Object(a["D"])(e.$t("keywords")),1),Object(a["h"])("th",H,Object(a["D"])(e.$t("written")),1)])]),Object(a["h"])("tbody",null,[(Object(a["t"])(!0),Object(a["e"])(a["a"],null,Object(a["z"])(n.entries,(function(e){return Object(a["t"])(),Object(a["e"])("tr",{key:e.legacy_pk},[Object(a["h"])("td",Y,Object(a["D"])(e.display_label),1),Object(a["h"])("td",X,[Object(a["h"])(s,{to:{name:"Detail",params:{id:e.legacy_pk+1}}},{default:N((function(){return[Object(a["g"])(Object(a["D"])(e.text.title),1)]})),_:2},1032,["to"])]),Object(a["h"])("td",ee,Object(a["D"])(c.localeAuthors(e.autorLocale).join(", ")),1),Object(a["h"])("td",te,Object(a["D"])(e.key_word.map((function(e){return e.stichwort})).join(", ")),1),Object(a["h"])("td",ne,Object(a["D"])(e.text.start_date||"unknown")+" - "+Object(a["D"])(e.text.end_date||"unknown"),1)])})),128))])])})),re={name:"DataTable",props:{entries:{type:Array,required:!1}},methods:{localeAuthors:function(e){var t=this;return e.map((function(e){return e[t.$i18n.locale]}))}}},oe=(n("52ef"),function(e){e.__i18n=e.__i18n||[],e.__i18n.push({locale:"",resource:{en:{label:e=>{const{normalize:t}=e;return t(["Label"])},title:e=>{const{normalize:t}=e;return t(["Title"])},author:e=>{const{normalize:t}=e;return t(["Author"])},keywords:e=>{const{normalize:t}=e;return t(["Associated Keywords"])},written:e=>{const{normalize:t}=e;return t(["Written"])}},de:{label:e=>{const{normalize:t}=e;return t(["Label"])},title:e=>{const{normalize:t}=e;return t(["Titel"])},author:e=>{const{normalize:t}=e;return t(["Autor"])},keywords:e=>{const{normalize:t}=e;return t(["Stichwörter"])},written:e=>{const{normalize:t}=e;return t(["Geschrieben"])}}}})});re.render=ae,re.__scopeId="data-v-5c4671d1","function"===typeof oe&&oe(re);var ce=re,se=n("3fbb"),ie={name:"Search",data:function(){return{input:"",keyInput:"",useCase:"",keywordAuto:[],results:[],keyResults:{nodes:[],edges:[],types:{nodes:[],edges:[]}},loading:!1,count:0,init:!0,next:null,previous:null,offset:this.offsetProp,limit:20,limitField:20,renderKey:0,keywordKey:0,advanced:!1}},props:{offsetProp:{type:String,default:"20"}},components:{DataTable:ce,Visualization:se["a"],VueBootstrapTypeahead:q["a"]},methods:{send:function(e){var t=this,n="string"==typeof e;if(this.loading=!0,n){console.log(e);var a=new URLSearchParams(e);this.offset=a.get("offset")?a.get("offset"):0}else this.limit=parseInt(this.limitField),this.offset=0;var r={format:"json",zitat_lookup:"icontains",zitat:this.input,limit:this.limit};this.advanced&&this.useCase&&(r.use_case=this.useCase),(n?V()(e):V()("https://mmp.acdh-dev.oeaw.ac.at/api/stelle/",{params:r})).then((function(e){console.log(e.data),t.count=e.data.count,t.results=e.data.results,t.next=e.data.next,t.previous=e.data.previous,t.count||(t.loading=!1);for(var n=function(e){t.loading=!0,t.results[e].autorLocale=[];for(var n=t.results[e].text.autor,a=0;a<n.length;a+=1)V()(n[a]).then((function(n){console.log("Autor",n.data),t.results[e].autorLocale.push({de:n.data.name,en:n.data.name_en,fr:n.data.name_fr,gr:n.data.name_gr,it:n.data.name_it,lat:n.data.name_lat}),t.loading=!1})).catch((function(e){console.log(e),t.loading=!1}))},a=0;a<t.results.length;a+=1)n(a)})).catch((function(e){console.log(e),t.loading=!1}))},keywordSend:function(){var e=this;this.loading=!0,V()("https://mmp.acdh-dev.oeaw.ac.at/archiv/keyword-data/",{params:{stichwort:this.keyInput,rvn_stelle_key_word_keyword__text__autor:this.keyInput,rvn_stelle_key_word_keyword:this.keyInput,rvn_stelle_key_word_keyword__text:this.keyInput,rvn_stelle_key_word_keyword__text__autor__ort:this.keyInput}}).then((function(t){console.log(t.data),e.keyResults=t.data,e.loading=!1})).catch((function(t){console.log(t),e.loading=!1}))},enterQuery:function(){this.$router.push({name:"Search",params:{type:this.type,search:"stelle"==this.type?this.input:this.keyInput,offsetProp:this.offset}}),this.init=!1,"stelle"==this.type?this.send():this.keywordSend()},getKeywords:function(e){var t=this;V()("https://mmp.acdh-dev.oeaw.ac.at/archiv-ac/usecase-autocomplete/",{params:{q:this.useCase}}).then((function(e){console.log(e.data),t.keywordAuto=t.keywordAuto.concat(e.data.results.map((function(e){return e.selected_text}))),t.keywordAuto=Object(U["a"])(new Set(t.keywordAuto))})).catch((function(e){console.log(e)}))}},computed:{type:function(){return this.$route.params.type}},mounted:function(){this.offsetProp&&(this.offset=parseInt(this.offsetProp)),this.$route.params.search&&(this.init=!1,"stelle"==this.type?(this.input=this.$route.params.search,this.send()):(this.keyInput=this.$route.params.search,this.keywordSend()))}},le=(n("f22d"),function(e){e.__i18n=e.__i18n||[],e.__i18n.push({locale:"",resource:{en:{stelle:e=>{const{normalize:t}=e;return t(["Passage"])},keywords:e=>{const{normalize:t}=e;return t(["Keywords"])},advancedSearch:e=>{const{normalize:t}=e;return t(["Advanced Search"])},query:e=>{const{normalize:t}=e;return t(["Please insert search query"])},loading:e=>{const{normalize:t}=e;return t(["loading"])},results:e=>{const{normalize:t}=e;return t(["results found, showing"])},keyResults:e=>{const{normalize:t,interpolate:n,named:a}=e;return t([n(a("nodes"))," nodes and ",n(a("edges"))," edges found!"])},noResults:e=>{const{normalize:t}=e;return t(["No results"])},resultsperPage:e=>{const{normalize:t}=e;return t(["Results per page"])},previous:e=>{const{normalize:t}=e;return t(["Previous"])},next:e=>{const{normalize:t}=e;return t(["Next"])},datatable:e=>{const{normalize:t}=e;return t(["Data Table"])},visualization:e=>{const{normalize:t}=e;return t(["Visualization"])}},de:{stelle:e=>{const{normalize:t}=e;return t(["Stelle"])},keywords:e=>{const{normalize:t}=e;return t(["Stichwörter"])},advancedSearch:e=>{const{normalize:t}=e;return t(["Erweiterte Suche"])},query:e=>{const{normalize:t}=e;return t(["Bitte Suchbegriff eingeben"])},loading:e=>{const{normalize:t}=e;return t(["lädt"])},results:e=>{const{normalize:t}=e;return t(["Ergebnisse gefunden, zeige"])},keyResults:e=>{const{normalize:t,interpolate:n,named:a}=e;return t([n(a("nodes"))," Knoten und ",n(a("edges"))," Verbindungen gefunden!"])},noResults:e=>{const{normalize:t}=e;return t(["Keine Suchergebnisse"])},resultsperPage:e=>{const{normalize:t}=e;return t(["Ergebnisse pro Seite"])},previous:e=>{const{normalize:t}=e;return t(["Vorherige"])},next:e=>{const{normalize:t}=e;return t(["Nächste"])},datatable:e=>{const{normalize:t}=e;return t(["Tabelle"])},visualization:e=>{const{normalize:t}=e;return t(["Visualisierung"])}}}})});ie.render=$,"function"===typeof le&&le(ie);var ue=ie,_e={name:"App",components:{NavBar:m,Search:ue}};n("775b");_e.render=o;var de=_e,be=n("6c02"),he=(n("b64b"),Object(a["M"])("data-v-9fa3c668"));Object(a["w"])("data-v-9fa3c668");var pe={class:"container"},fe={class:"table",id:"table"},Oe=Object(a["h"])("th",{scope:"col"},"Name",-1),je={scope:"col"},me={scope:"row"},ye={scope:"row"},ge={class:"buttonContainer"},ve={key:0};Object(a["u"])();var ke=he((function(e,t,n,r,o,c){var s=Object(a["B"])("visualization");return Object(a["t"])(),Object(a["e"])("div",pe,[Object(a["h"])("table",fe,[Object(a["h"])("thead",null,[Object(a["h"])("tr",null,[Oe,Object(a["h"])("th",je,Object(a["D"])(e.$t("content")),1)])]),Object(a["h"])("tbody",null,[(Object(a["t"])(!0),Object(a["e"])(a["a"],null,Object(a["z"])(Object.keys(c.filteredObject),(function(e){return Object(a["t"])(),Object(a["e"])("tr",null,[Object(a["h"])("td",me,Object(a["D"])(e),1),Object(a["h"])("td",ye,Object(a["D"])(Array.isArray(c.filteredObject[e])?c.filteredObject[e].join(", "):c.filteredObject[e]),1)])})),256))])]),Object(a["h"])(s,{graph:o.graph,height:"500"},null,8,["graph"]),Object(a["h"])("div",ge,[Object(a["h"])("button",{class:"btn btn-primary",onClick:t[1]||(t[1]=function(e){return o.fullObject=!o.fullObject})},Object(a["D"])(o.fullObject?e.$t("hideJson"):e.$t("showJson")),1)]),o.fullObject?(Object(a["t"])(),Object(a["e"])("pre",ve,"      "+Object(a["D"])(JSON.stringify(o.detailObject,null,"\t"))+"\r\n    ",1)):Object(a["f"])("",!0)])})),we=n("ff3b"),Ee=(n("d57e"),function(e){e.__i18n=e.__i18n||[],e.__i18n.push({locale:"",resource:{en:{content:e=>{const{normalize:t}=e;return t(["Content"])},showJson:e=>{const{normalize:t}=e;return t(["Show full JSON Object"])},hideJson:e=>{const{normalize:t}=e;return t(["Hide full JSON Object"])}},de:{content:e=>{const{normalize:t}=e;return t(["Inhalt"])},showJson:e=>{const{normalize:t}=e;return t(["Ganzes JSON Objekt anzeigen"])},hideJson:e=>{const{normalize:t}=e;return t(["Ganzes JSON Objekt verbergen"])}}}})});we["a"].render=ke,we["a"].__scopeId="data-v-9fa3c668","function"===typeof Ee&&Ee(we["a"]);var De=we["a"],Pe=[{path:"/",redirect:"/search/stelle/"},{path:"/search/",redirect:"/search/stelle/"},{path:"/search/:type/:search?",name:"Search",component:ue,props:!0},{path:"/detail/:id",name:"Detail",component:De}],Me=Object(be["a"])({history:Object(be["b"])("/Assessment-Task/"),routes:Pe}),ze=Me,Ae=n("47e2"),Ce=Object(Ae["a"])({locale:"en",fallbackLocale:"de"});Object(a["d"])(de).use(Ce).use(ze).mount("#app")},"775b":function(e,t,n){"use strict";n("fc13")},bdfc:function(e){e.exports=JSON.parse("{}")},c7fc:function(e,t,n){},d57e:function(e,t,n){"use strict";n("3562")},e554:function(e,t,n){},eadc:function(e,t,n){e.exports=n.p+"img/fundament_logo.6e8c6e01.svg"},f0bf:function(e,t,n){},f22d:function(e,t,n){"use strict";n("c7fc")},f770:function(e,t){e.exports={attributes:[{name:{en:"Quote",de:"Zitat"},attr:"zitat"},{name:{en:"Title",de:"Titel"},attr:"text.title"},{name:{en:"Cited",de:"Zitatstelle"},attr:"zitat_stelle"},{name:{en:"Summary",de:"Zusammenfassung"},attr:"summary"},{name:{en:"Author",de:"Autor"},attr:"text.autor"},{name:{en:"Edition",de:"Auflage"},attr:"text.edition"},{name:{en:"Start date",de:"Beginndatum"},attr:"text.start_date"},{name:{en:"End date",de:"Enddatum"},attr:"text.end_date"},{name:{en:"Translation",de:"Übersetzung"},attr:"translation"},{name:{en:"Keywords",de:"Stichwörter"},attr:"key_word"},{name:{en:"Comment",de:"Kommentar"},attr:"kommentar"}]}},fc13:function(e,t,n){},ff3b:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("b0c0"),core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("7db0"),core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("b64b"),core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("d81d"),core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("caad"),core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("2532"),core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__),axios__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("bc3a"),axios__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__),_detailView_config__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("f770"),_detailView_config__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_detailView_config__WEBPACK_IMPORTED_MODULE_7__),_Visualization2D__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("3fbb");__webpack_exports__["a"]={name:"DetailView",data:function(){return{detailObject:{},fullObject:!1,graph:{nodes:[],edges:[],types:{nodes:[],edges:[]}}}},components:{Visualization:_Visualization2D__WEBPACK_IMPORTED_MODULE_8__["a"]},methods:{getDetails:function(e){var t=this;axios__WEBPACK_IMPORTED_MODULE_6___default()("https://mmp.acdh-dev.oeaw.ac.at/api/stelle/".concat(e),{params:{format:"json"}}).then((function(e){console.log("Stelle",e.data),t.detailObject=e.data,t.detailObject.autor=[],t.detailObject.autorLocale=[];for(var n=t.detailObject.text.autor,a=0;a<n.length;a+=1)axios__WEBPACK_IMPORTED_MODULE_6___default()(n[a]).then((function(e){t.detailObject.autorLocale.push({de:e.data.name,en:e.data.name_en,fr:e.data.name_fr,gr:e.data.name_gr,it:e.data.name_it,lat:e.data.name_lat})})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))},getKeywordGraph:function(e){var t=this;axios__WEBPACK_IMPORTED_MODULE_6___default()("https://mmp.acdh-dev.oeaw.ac.at/archiv/keyword-data/",{params:{rvn_stelle_key_word_keyword:e}}).then((function(e){t.graph=e.data})).catch((function(e){console.log(e)}))},getLocaleKeyFromEn:function(e){return _detailView_config__WEBPACK_IMPORTED_MODULE_7___default.a.attributes.find((function(t){return t.name.en==e})).name[this.$i18n.locale]},getLocaleAuthor:function(e){return"de"!=this.$i18n.locale&&e["name_".concat(this.$i18n.locale)]?e["name_".concat(this.$i18n.locale)]:e.name}},computed:{filteredObject:function filteredObject(){var _this3=this,retObj={},obj=this.detailObject;if(!Object.keys(obj).length)return retObj;for(var i=0;i<_detailView_config__WEBPACK_IMPORTED_MODULE_7___default.a.attributes.length;i+=1)retObj[_detailView_config__WEBPACK_IMPORTED_MODULE_7___default.a.attributes[i].name[this.$i18n.locale]]=eval("obj.".concat(_detailView_config__WEBPACK_IMPORTED_MODULE_7___default.a.attributes[i].attr));for(var authorLocale=this.getLocaleKeyFromEn("Author"),_loop=function(e){retObj[authorLocale][e].includes("https://")&&axios__WEBPACK_IMPORTED_MODULE_6___default()(retObj[authorLocale][e]).then((function(t){retObj[authorLocale][e]=_this3.getLocaleAuthor(t.data)})).catch((function(e){console.log(e)}))},_i=0;_i<retObj[authorLocale].length;_i+=1)_loop(_i);var keywordsLocale=this.getLocaleKeyFromEn("Keywords");return retObj[keywordsLocale]=retObj[keywordsLocale].map((function(e){return e.stichwort})),retObj},graphWidth:function(){var e;return console.log("refs",this.$refs),null===(e=this.$refs.table)||void 0===e?void 0:e.width}},mounted:function(){this.getDetails(this.$route.params.id),this.getKeywordGraph(this.$route.params.id)}}}});
//# sourceMappingURL=app.f63e8daa.js.map