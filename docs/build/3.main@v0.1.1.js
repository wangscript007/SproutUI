(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{27:function(e,a,i){var c=i(28);"string"==typeof c&&(c=[[e.i,c,""]]),c.locals&&(e.exports=c.locals);(0,i(2).default)("data-quickpaper-6c28100e",c,!0)},28:function(e,a,i){(e.exports=i(1)(!1)).push([e.i,"",""])},32:function(e,a,i){"use strict";i.r(a);var c=i(7),t={directive:function(){return i.e(2).then(i.bind(null,33))}},n={data:function(){return{page:null,pagename:""}},mounted:function(){var e=this.$urlFormat(window.location.href);this.openPage(e.router[1]in t?e.router[1]:"directive",e.params.fixed||"top")},methods:{openPage:function(e,a,i){var n=this;t[e]().then((function(t){n.page=t.default,n.pagename=e,"no"==i&&(window.location.href="#/nefbl/"+e+"?fixed="+a),Object(c.a)(a)}))},doScroll:function(e){window.location.href="#/nefbl/"+this.pagename+"?fixed="+e,Object(c.a)(e)}}};i(27);n.render=function(e){return e("div",{class:"nav-view",quickpaper:"","data-quickpaper-6c28100e":""},[e("div",{class:"menu","data-quickpaper-6c28100e":""},[e("ul",{":active":'pagename=="directive"?"yes":"no"',"data-quickpaper-6c28100e":""},[e("li",{"data-quickpaper-6c28100e":""},[e("h3",{"@click":'openPage("directive","top","no")',"data-quickpaper-6c28100e":""},["指令"]),e("ul",{"data-quickpaper-6c28100e":""},[e("li",{"data-quickpaper-6c28100e":""},[e("h4",{"@click":'doScroll("ui-bind")',"data-quickpaper-6c28100e":""},["ui-bind"])]),e("li",{"data-quickpaper-6c28100e":""},[e("h4",{"@click":'doScroll("ui-model")',"data-quickpaper-6c28100e":""},["ui-model"])]),e("li",{"data-quickpaper-6c28100e":""},[e("h4",{"@click":'doScroll("ui-on")',"data-quickpaper-6c28100e":""},["ui-on"])])])])])]),e("div",{id:"root-view",class:"view","data-quickpaper-6c28100e":""},[e("div",{id:"fixed-top","data-quickpaper-6c28100e":""},[e("nav",{class:"position","data-quickpaper-6c28100e":""},["当前位置：",e("a",{href:"#/",target:"_blank",title:"点击我返回SproutUI首页","data-quickpaper-6c28100e":""},["SproutUI"]),"/",e("a",{href:"https://nefbl.github.io/api/",target:"_blank",class:"nefbl",title:"点击我打开nefbl官网","data-quickpaper-6c28100e":""},["nefbl"])]),e("component",{":is":"page","data-quickpaper-6c28100e":""},[])])])])};a.default=n}}]);