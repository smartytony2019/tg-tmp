(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{797:function(e,t,n){"use strict";n.r(t);n(15),n(11),n(10),n(9),n(8),n(13);var r=n(5),c=n(7);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={layout:"member",transition:"rightIn",components:{AppHeader:n(101).a},data:function(){return{}},computed:o(o({},Object(c.c)("my",["setting"])),{},{guideEnable:{get:function(){return this.setting.guideEnable},set:function(e){this.changeGuideSet({status:e?1:0})}}}),created:function(){this.getMemberGuideStatus()},methods:o({},Object(c.b)("my",["getMemberGuideStatus","changeGuideSet"]))},f=n(2),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-container"},[n("app-header",{attrs:{title:"设置","back-enable":!0,"header-class":"header_white",desc:"my2",guide:"setting"}}),e._v(" "),n("main",[n("ul",{staticClass:"myprofile"},[n("li",{on:{click:function(t){e.guideEnable=!e.guideEnable}}},[n("span",[e._v("导览功能")]),e._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.guideEnable,expression:"guideEnable"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.guideEnable)?e._i(e.guideEnable,null)>-1:e.guideEnable},on:{change:function(t){var n=e.guideEnable,r=t.target,c=!!r.checked;if(Array.isArray(n)){var l=e._i(n,null);r.checked?l<0&&(e.guideEnable=n.concat([null])):l>-1&&(e.guideEnable=n.slice(0,l).concat(n.slice(l+1)))}else e.guideEnable=c}}}),e._v(" "),e._m(0)])]),e._v(" "),n("nuxt-link",{attrs:{to:"/my/device",custom:""},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.navigate;return[e._t("default",[n("li",{on:{click:r}},[n("span",[e._v("设备信息")]),e._v(" "),n("div",[n("button",{staticClass:"edit_btn"})])])])]}}],null,!0)})],1)])],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("label",[t("span")])}],!1,null,null,null);t.default=component.exports}}]);