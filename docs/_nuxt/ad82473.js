(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{195:function(t,e,n){var content=n(264);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("37b4a59a",content,!0,{sourceMap:!1})},197:function(t,e,n){var content=n(272);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("56b15182",content,!0,{sourceMap:!1})},231:function(t,e,n){"use strict";var o={data:function(){return{clipped:!1,fixed:!1,title:"newtovaux"}}},r=(n(271),n(82)),l=n(121),c=n.n(l),f=n(345),d=n(350),v=n(349),_=n(351),x=n(346),h=n(347),V=n(348),m=n(226),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[n("v-btn",{attrs:{icon:""}},[n("NuxtLink",{attrs:{to:"/"}},[n("v-icon",[t._v("mdi-application")])],1)],1),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[n("v-toolbar-title",{domProps:{textContent:t._s(t.title)}},[t._v("\n        "+t._s(t.title)+"\n      ")])],1)],1),t._v(" "),n("v-main",[n("v-container",[n("nuxt")],1)],1),t._v(" "),n("v-footer",{attrs:{absolute:!t.fixed,app:""}},[n("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VApp:f.a,VAppBar:d.a,VBtn:v.a,VContainer:_.a,VFooter:x.a,VIcon:h.a,VMain:V.a,VToolbarTitle:m.a})},235:function(t,e,n){n(236),t.exports=n(237)},263:function(t,e,n){"use strict";n(195)},264:function(t,e,n){var o=n(23)(!1);o.push([t.i,"h1[data-v-15f1d07f]{font-size:20px}",""]),t.exports=o},271:function(t,e,n){"use strict";n(197)},272:function(t,e,n){var o=n(23)(!1);o.push([t.i,".nuxt-link-active{text-decoration:none;color:rgba(0,0,0,.87)!important}",""]),t.exports=o},70:function(t,e,n){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(n(263),n(82)),l=n(121),c=n.n(l),f=n(345),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"15f1d07f",null);e.a=component.exports;c()(component,{VApp:f.a})}},[[235,4,1,5]]]);