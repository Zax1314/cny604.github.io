(function(t){function i(i){for(var a,s,r=i[0],l=i[1],c=i[2],d=0,f=[];d<r.length;d++)s=r[d],n[s]&&f.push(n[s][0]),n[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(i);while(f.length)f.shift()();return o.push.apply(o,c||[]),e()}function e(){for(var t,i=0;i<o.length;i++){for(var e=o[i],a=!0,r=1;r<e.length;r++){var l=e[r];0!==n[l]&&(a=!1)}a&&(o.splice(i--,1),t=s(s.s=e[0]))}return t}var a={},n={app:0},o=[];function s(i){if(a[i])return a[i].exports;var e=a[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=a,s.d=function(t,i,e){s.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,i){if(1&i&&(t=s(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var a in t)s.d(e,a,function(i){return t[i]}.bind(null,a));return e},s.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(i,"a",i),i},s.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},s.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=i,r=r.slice();for(var c=0;c<r.length;c++)i(r[c]);var p=l;o.push([0,"chunk-vendors"]),e()})({0:function(t,i,e){t.exports=e("56d7")},"034f":function(t,i,e){"use strict";var a=e("64a9"),n=e.n(a);n.a},1105:function(t,i,e){t.exports=e.p+"img/4.ebcd1c8e.png"},"15ea":function(t,i,e){t.exports=e.p+"img/8.c29322e3.jpg"},2175:function(t,i,e){t.exports=e.p+"img/6.b7c34105.png"},"34bf":function(t,i,e){t.exports=e.p+"img/7.5f40307f.png"},"56d7":function(t,i,e){"use strict";e.r(i);e("14c6"),e("08c1"),e("4842"),e("d9fc");var a,n=e("2b0e"),o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},s=[],r=(e("034f"),e("2877")),l={},c=Object(r["a"])(l,o,s,!1,null,null,null),p=c.exports,d=e("8c4f"),f=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticStyle:{width:"100%"}},[e("el-dialog",{attrs:{title:"大图",visible:t.disa,width:"30%",center:""},on:{"update:visible":function(i){t.disa=i}}},[e("div",{staticStyle:{"overflow-y":"auto",width:"100%",height:"auto","max-height":"450px"}},[e("img",{attrs:{src:t.src,width:"100%"}})])]),t.dis?e("transition",{attrs:{name:"loading"}},[e("div",{staticClass:"load",staticStyle:{height:"100vh",width:"100%"}})]):t._e(),e("div",{staticStyle:{width:"100%",height:"auto",animation:"fadeIn 1s",top:"0",display:"flex","flex-direction":"column","z-index":"-1",position:"absolute",padding:"0px",border:"0px",left:"0px",margin:"0px",right:"0px"},style:{display:t.dis?"none":"flex"}},[e("div",{staticClass:"home",attrs:{id:"first"},on:{mousemove:t.scroll}},[e("div",{staticStyle:{width:"80%",height:"100%","align-self":"center",display:"inline-flex","flex-direction":"row","webkit-backface-visibility":"hidden"}},[e("div",{ref:"dongtai",staticStyle:{width:"100%",height:"50%","align-self":"center","text-align":"right",transform:"translate3d(0px,0px,0px)"}},[t._m(0),e("button",{staticClass:"btn1",staticStyle:{animation:"fadeInUp 1s"},on:{click:t.sctest}},[t._v("DISCOVER MORE")]),e("br"),e("ul",{staticStyle:{width:"280px",height:"50px",float:"right","margin-top":"20px"}},[e("li",{staticClass:"li1"},[e("font-awesome-icon",{staticStyle:{"margin-top":"23%"},attrs:{icon:["fab","instagram"]}})],1),e("li",{staticClass:"li1",staticStyle:{"margin-left":"20px"}},[e("font-awesome-icon",{staticStyle:{"margin-top":"23%"},attrs:{icon:["fab","weibo"]}})],1),e("li",{staticClass:"li1",staticStyle:{"margin-left":"20px"}},[e("font-awesome-icon",{staticStyle:{"margin-top":"23%"},attrs:{icon:["fab","instagram"]}})],1),e("li",{staticClass:"li1",staticStyle:{"margin-left":"20px"},attrs:{onclick:"window.location.href='https://github.com/Zax1314/taylorfans.github.io'"}},[e("font-awesome-icon",{staticStyle:{"margin-top":"23%"},attrs:{icon:["fab","github"]}})],1),e("li",{staticClass:"li1",staticStyle:{"margin-left":"20px"}},[e("font-awesome-icon",{staticStyle:{"margin-top":"23%"},attrs:{icon:["fab","facebook-f"]}})],1)])])])]),e("div",{staticStyle:{width:"100%",height:"100vh"},attrs:{align:"center",id:"second"}},[e("div",{ref:"jieshaotest",staticStyle:{width:"80%",height:"100%",display:"flex","flex-direction":"column","margin-top":"100px"}},[e("div",{ref:"s1"},[e("span",{staticStyle:{color:"black","font-size":"40px","font-family":"'Apple Color Emoji'","font-weight":"bold"}},[t._v("what things i am doing...")]),e("br"),e("br"),e("span",[t._v("I've only know one thing， why I was so ignorant.")])]),e("div",{staticStyle:{width:"100%",height:"auto","margin-top":"30px"}},[e("el-row",{staticClass:"zhi",attrs:{gutter:30}},[e("el-col",{attrs:{sm:12,md:6}},[e("div",{ref:"s2",staticClass:"hov",staticStyle:{"border-radius":"7px",padding:"70px 20px"}},[e("span",{staticStyle:{"font-size":"50px"}},[e("font-awesome-icon",{attrs:{icon:["fab","html5"]}})],1),e("br"),e("h2",[t._v("HTML5")]),t._v("\n                                按时大苏打国际爱护公司的京哈高速大使馆黑暗圣经快点哈可视电话卡机卡斯基和点卡是广大教师打瞌睡肯德基安徽省空间的哈萨克")])]),e("el-col",{attrs:{sm:12,md:6}},[e("div",{ref:"s3",staticClass:"hov",staticStyle:{"border-radius":"7px",background:"#2c3e50",color:"white",padding:"70px 20px"}},[e("span",{staticStyle:{"font-size":"50px",color:"white"}},[e("font-awesome-icon",{attrs:{icon:["fab","android"]}})],1),e("br"),e("h2",[t._v("Android")]),t._v("\n                              按时大苏打国际爱护公司的京哈高速大使馆黑暗圣经快点哈可视电话卡机卡斯基和点卡是广大教师打瞌睡肯德基安徽省空间的哈萨克")])]),e("el-col",{attrs:{sm:12,md:6}},[e("div",{ref:"s4",staticClass:"hov",staticStyle:{"border-radius":"7px",padding:"70px 20px"}},[e("span",{staticStyle:{"font-size":"50px"}},[e("font-awesome-icon",{attrs:{icon:["fab","css3"]}})],1),e("br"),e("h2",[t._v("CSS3")]),t._v("\n                              按时大苏打国际爱护公司的京哈高速大使馆黑暗圣经快点哈可视电话卡机卡斯基和点卡是广大教师打瞌睡肯德基安徽省空间的哈萨克")])]),e("el-col",{attrs:{sm:12,md:6}},[e("div",{ref:"s5",staticClass:"hov",staticStyle:{"border-radius":"7px",padding:"70px 20px"}},[e("span",{staticStyle:{"font-size":"50px"}},[e("font-awesome-icon",{attrs:{icon:["fas","coffee"]}})],1),e("br"),e("h2",[t._v("Java")]),t._v("\n                              按时大苏打国际爱护公司的京哈高速大使馆黑暗圣经快点哈可视电话卡机卡斯基和点卡是广大教师打瞌睡肯德基安徽省空间的哈萨克")])])],1)],1)])]),e("div",{ref:"third",staticStyle:{width:"100%",height:"auto","min-height":"50vh"},attrs:{align:"center"}},[e("span",{staticStyle:{"font-family":"幼圆","font-weight":"bold","font-size":"25px"}},[t._v("--有憨憨自远方来--")]),e("div",{staticStyle:{width:"80%",height:"auto","margin-top":"20px"}},[e("div",{staticStyle:{width:"100%",height:"auto",position:"relative",float:"left"}},[e("div",{staticClass:"zz"},t._l(t.items2,function(i,a){return e("div",{class:[t.bianhua?"ttt":"ttt2"],staticStyle:{width:"180px",height:"240px","border-radius":"10px",margin:"5px 8.7px"},on:{click:function(e){return t.open(i.link)}}},[e("div",{staticClass:"zz",staticStyle:{width:"100%",height:"100%"}},[e("div",{staticStyle:{position:"absolute",width:"100%",height:"auto"}},[e("img",{staticStyle:{"margin-top":"10px",cursor:"zoom-in","border-radius":"5px"},attrs:{src:i.link,width:"150px;",height:"180px"}}),e("p",{staticStyle:{"margin-top":"-2px"}},[t._v(t._s(i.name))])]),e("div",{staticClass:"meng",staticStyle:{width:"100%",height:"100%",position:"absolute"}})])])}),0)])])]),e("div",{ref:"four",staticStyle:{width:"100%",height:"auto","min-height":"50vh","margin-top":"130px"},attrs:{align:"center"}},[e("span",{staticStyle:{"font-family":"幼圆","font-weight":"bold","font-size":"25px"}},[t._v("--有憨憨自远方来--")]),t._m(1)]),e("footer",[e("div",{staticStyle:{width:"100%",height:"300px",background:"#409eff","text-align":"center",display:"flex","justify-content":"center","flex-direction":"column"},attrs:{align:"center"}},[e("span",{staticStyle:{color:"white","font-family":"Apple Color Emoji","font-size":"18px"}},[t._v("Copyright © 2019 Your zax1314.github.io | Design: ZY")]),e("ul",{staticStyle:{width:"280px","align-self":"center"}},[e("li",{staticClass:"li1"},[e("font-awesome-icon",{staticStyle:{"margin-top":"23%"},attrs:{icon:["fab","instagram"]}})],1),e("li",{staticClass:"li1",staticStyle:{"margin-left":"20px"}},[e("font-awesome-icon",{staticStyle:{"margin-top":"23%"},attrs:{icon:["fab","weibo"]}})],1),e("li",{staticClass:"li1",staticStyle:{"margin-left":"20px"}},[e("font-awesome-icon",{staticStyle:{"margin-top":"23%"},attrs:{icon:["fab","instagram"]}})],1),e("li",{staticClass:"li1",staticStyle:{"margin-left":"20px"},attrs:{onclick:"window.location.href='https://github.com/Zax1314/taylorfans.github.io'"}},[e("font-awesome-icon",{staticStyle:{"margin-top":"23%"},attrs:{icon:["fab","github"]}})],1),e("li",{staticClass:"li1",staticStyle:{"margin-left":"20px"}},[e("font-awesome-icon",{staticStyle:{"margin-top":"23%"},attrs:{icon:["fab","facebook-f"]}})],1)])])])])],1)},u=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("p",{staticStyle:{color:"white","font-family":"华文宋体","font-size":"50px","font-weight":"bold",position:"relative",float:"right",width:"100%",animation:"fadeInUp 1s"}},[t._v("你好，我是赵阳。           "),e("br"),e("span",{staticStyle:{"font-size":"30px"}},[t._v("一名正在努力学习前端的大学狗。")])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticStyle:{width:"80%",height:"400px","margin-top":"20px"}},[a("div",{staticClass:"xzhou",staticStyle:{float:"left",width:"350px",height:"350px",margin:"0px 8px"}},[a("div",{staticClass:"zhou2",staticStyle:{width:"350px",height:"350px",position:"absolute",background:"gray"}}),a("div",{staticClass:"zhou",staticStyle:{width:"350px",height:"350px",position:"absolute"}},[a("img",{attrs:{src:e("6043"),width:"100%;",height:"100%"}})])]),a("div",{staticClass:"xzhou",staticStyle:{float:"left",width:"350px",height:"350px",margin:"0px 59px"}},[a("div",{staticClass:"zhou2",staticStyle:{width:"350px",height:"350px",position:"absolute",background:"gray"}}),a("div",{staticClass:"zhou",staticStyle:{width:"350px",height:"350px",position:"absolute"}},[a("img",{attrs:{src:e("e6bc"),width:"100%;",height:"100%"}})])]),a("div",{staticClass:"xzhou",staticStyle:{float:"left",width:"350px",height:"350px",margin:"0px 0px"}},[a("div",{staticClass:"zhou2",staticStyle:{width:"350px",height:"350px",position:"absolute",background:"gray"}}),a("div",{staticClass:"zhou",staticStyle:{width:"350px",height:"350px",position:"absolute"}},[a("img",{attrs:{src:e("df06"),width:"100%;",height:"100%"}})])])])}],h=e("bd86"),m=(e("55dd"),e("1157")),g=e.n(m),x=e("f820"),b=e("e360"),v=(a={name:"home",data:function(){return{rotation:{x:-Math.PI/2,y:0,z:0},bianhua:!0,disa:!1,loading:!0,dis:!0,time1:!1,time2:!1,bp:0,mouse:{x:0,y:0},timer:null,items2:{tu1:{link:e("b5a2"),name:"尹天仇"},tu2:{link:e("b9af"),name:"小龙人"},tu3:{link:e("c2e4"),name:"秀儿的锐宝"},tu4:{link:e("1105"),name:"高射炮"},tu5:{link:e("9310"),name:"牛拐子"},tu7:{link:e("2175"),name:"黄俊烨(头牌)"},tu8:{link:e("34bf"),name:"刘朝批"},tu9:{link:e("15ea"),name:"鑫麻批"},tu10:{link:e("2175"),name:"黄俊烨"},tu11:{link:e("2175"),name:"黄俊烨"},tu12:{link:e("2175"),name:"黄俊烨"},tu13:{link:e("2175"),name:"黄俊烨"}},items:[e("b5a2"),e("b9af"),e("c2e4"),e("1105"),e("9310")],va:[150,250,350,450],va2:[40,40,40,40],va3:[-9,9,-9,9],src:null,publicmath:"",publicmath2:Object({NODE_ENV:"production",BASE_URL:""}).BABEL_ENV}},created:function(){console.log(this.loading)},components:{loading:x["default"],ModelObj:b["ModelObj"]},methods:{open:function(t){this.disa=!0,this.src=t},onLoad:function(){this.rotate()},rotate:function(){this.rotation.y+=.01,requestAnimationFrame(this.rotate)},bian:function(){this.items=this.items.sort(function(){return Math.random()-.5});for(var t=[],i=[],e=0;e<4;e++)t[e]=parseInt(80*Math.random()+0),i[e]=12-parseInt(48*Math.random());this.va2=t,this.va3=i},scroll:function(t){var i=this,e=-t.pageX/70,a=-t.pageY/70;i.$refs.dongtai.style.transform="translate3d("+e+"px,"+a+"px,0)"},_getItemLength:function(){var t=this.$refs.jieshaotest.nextSibling;console.log(t)},scrollmove:function(){var t=parseInt(g()("#first").offset().top),i=parseInt(g()("#second").offset().top),e=parseInt(this.$refs.third.offsetTop)+200,a=this,n=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,o=parseInt(n+document.documentElement.clientHeight);o>i&&!1===a.dis&&(a.$refs.s1.style.animation="fadeInUp 0.5s ease-in-out 0s 1",a.$refs.s2.style.animation="fadeInUp 0.7s ease-in-out 0s 1",a.$refs.s3.style.animation="fadeInUp 0.9s ease-in-out 0s 1",a.$refs.s4.style.animation="fadeInUp 1.1s ease-in-out 0s 1",a.$refs.s5.style.animation="fadeInUp 1.4s ease-in-out 0s 1"),o>e&&(a.bianhua=!1),console.log(t+"..........."+i+"............."+o+"............"+e)},valueTest1:function(t){var i=parseInt(700*Math.random()+0),e=parseInt(80*Math.random()+0);return console.log(e+",.."),"x"===t?i+20:e},sctest:function(){document.documentElement.scrollTop=723}},beforeCreate:function(){console.log("页面加载前")}},Object(h["a"])(a,"created",function(){console.log("页面加载后")}),Object(h["a"])(a,"mounted",function(){console.log("渲染完成");var t=this;document.onreadystatechange=function(){"complete"===document.readyState&&(console.log(document.readyState),t.dis=!1)},document.addEventListener("scroll",this.scrollmove,!0)}),a),y=v,w=(e("cccb"),Object(r["a"])(y,f,u,!1,null,null,null)),S=w.exports;n["default"].use(d["a"]);var _=new d["a"]({routes:[{path:"/",name:"home",component:S},{path:"/about",name:"about",component:function(){return Promise.resolve().then(e.bind(null,"f820"))}}]}),C=e("5c96"),k=e.n(C),z=(e("0fae"),e("d731"),e("cb5b")),j=e("ad3d"),A=e("da3e"),I=e("faaa"),O=e("42b9"),E=e("caf9");n["default"].use(E["a"],{lazyComponent:!0,listenEvents:["scroll"]}),z["a"].library.add(A["a"]),z["a"].library.add(I["a"]),z["a"].library.add(O["a"]),n["default"].component("font-awesome-icon",j["a"]),n["default"].use(k.a),n["default"].config.productionTip=!1,new n["default"]({router:_,render:function(t){return t(p)}}).$mount("#app")},6043:function(t,i,e){t.exports=e.p+"img/t1.ab940e9d.jpg"},"64a9":function(t,i,e){},9310:function(t,i,e){t.exports=e.p+"img/5.7ea7cde7.png"},b5a2:function(t,i,e){t.exports=e.p+"img/s1.74cc2103.jpg"},b9af:function(t,i,e){t.exports=e.p+"img/2.b73eb03e.png"},c2e4:function(t,i,e){t.exports=e.p+"img/3.3564be9e.png"},cccb:function(t,i,e){"use strict";var a=e("d563"),n=e.n(a);n.a},d563:function(t,i,e){},d731:function(t,i,e){},df06:function(t,i,e){t.exports=e.p+"img/t3.95557852.jpg"},e6bc:function(t,i,e){t.exports=e.p+"img/t2.d9904cd9.jpg"},f820:function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticStyle:{width:"100%",height:"100px",position:"fixed","z-index":"1",top:"45vh"},attrs:{id:"loadinglogo"}},[e("svg",{attrs:{"xmlns:svg":"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.0",width:"100%",height:"21px",viewBox:"0 0 128 16","xml:space":"preserve"}},[e("path",{attrs:{fill:"#a6e5f1",d:"M6.4,4.8A3.2,3.2,0,1,1,3.2,8,3.2,3.2,0,0,1,6.4,4.8Zm12.8,0A3.2,3.2,0,1,1,16,8,3.2,3.2,0,0,1,19.2,4.8ZM32,4.8A3.2,3.2,0,1,1,28.8,8,3.2,3.2,0,0,1,32,4.8Zm12.8,0A3.2,3.2,0,1,1,41.6,8,3.2,3.2,0,0,1,44.8,4.8Zm12.8,0A3.2,3.2,0,1,1,54.4,8,3.2,3.2,0,0,1,57.6,4.8Zm12.8,0A3.2,3.2,0,1,1,67.2,8,3.2,3.2,0,0,1,70.4,4.8Zm12.8,0A3.2,3.2,0,1,1,80,8,3.2,3.2,0,0,1,83.2,4.8ZM96,4.8A3.2,3.2,0,1,1,92.8,8,3.2,3.2,0,0,1,96,4.8Zm12.8,0A3.2,3.2,0,1,1,105.6,8,3.2,3.2,0,0,1,108.8,4.8Zm12.8,0A3.2,3.2,0,1,1,118.4,8,3.2,3.2,0,0,1,121.6,4.8Z"}}),e("g",[e("path",{attrs:{fill:"#2ac0de",d:"M-42.7,3.84A4.16,4.16,0,0,1-38.54,8a4.16,4.16,0,0,1-4.16,4.16A4.16,4.16,0,0,1-46.86,8,4.16,4.16,0,0,1-42.7,3.84Zm12.8-.64A4.8,4.8,0,0,1-25.1,8a4.8,4.8,0,0,1-4.8,4.8A4.8,4.8,0,0,1-34.7,8,4.8,4.8,0,0,1-29.9,3.2Zm12.8-.64A5.44,5.44,0,0,1-11.66,8a5.44,5.44,0,0,1-5.44,5.44A5.44,5.44,0,0,1-22.54,8,5.44,5.44,0,0,1-17.1,2.56Z"}}),e("animateTransform",{attrs:{attributeName:"transform",type:"translate",values:"23 0;36 0;49 0;62 0;74.5 0;87.5 0;100 0;113 0;125.5 0;138.5 0;151.5 0;164.5 0;178 0",calcMode:"discrete",dur:"1170ms",repeatCount:"indefinite"}})],1)])])])},n=[],o={name:"test"},s=o,r=e("2877"),l=Object(r["a"])(s,a,n,!1,null,null,null);i["default"]=l.exports}});
//# sourceMappingURL=app.83eb18b8.js.map