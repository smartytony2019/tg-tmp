(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{608:function(t,e,r){"use strict";var n={props:{overflow:{type:Boolean,default:!1},items:{type:Array,default:function(){return[]}},target:{type:String,default:""},category:{type:String,default:""},default:{type:String,default:""}},data:function(){return{width:0,left:0}},computed:{containerStyle:function(){return this.overflow?"date_select":"tab_select"},spanStyle:function(){return{width:"".concat(this.width,"px"),left:"".concat(this.left,"px")}}},watch:{target:{handler:function(t){var e=this;if(""===t)return this.width=0,void(this.left=0);this.$nextTick((function(){var t=document.querySelector(".select_tabs button.active");e.width=t.offsetWidth,e.left=t.offsetLeft,document.querySelector(".".concat(e.containerStyle)).scrollTo({left:e.left})}))},immediate:!0}},mounted:function(){this.$emit("update:target",this.default)},methods:{itemClick:function(t){this.category&&this.$dataAnalysis("".concat(this.category).concat(t)),t!==this.target&&this.$emit("update:target",t)}}},c=r(2),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.containerStyle},[r("div",{staticClass:"select_tabs"},[r("span",{style:t.spanStyle}),t._v(" "),t._l(t.items,(function(e){return r("button",{key:e.value,class:{active:e.value===t.target},on:{click:function(r){return t.itemClick(e.value)}}},[t._v("\n      "+t._s(e.label)+"\n    ")])}))],2)])}),[],!1,null,null,null);e.a=component.exports},611:function(t,e,r){"use strict";r(289);var n=r(0),c=r.n(n),pattern="YYYY-MM-DD",o={props:{label:{type:String,default:""},infoStart:{type:String,default:""},infoEnd:{type:String,default:""},custom:{type:Number,default:-1},queryStart:{type:String,default:""},queryEnd:{type:String,default:""},max:{type:String,default:""},min:{type:String,default:""}},data:function(){return{start:"",end:""}},computed:{valid:function(){return this.start.length>0&&this.end.length>0&&c()(this.start).isBefore(this.end)},startMax:function(){var t=0===this.end.length?this.max:this.end;return c()(t).subtract(1,"days").format(pattern)},endMin:function(){var t=0===this.start.length?this.min:this.start;return c()(t).add(1,"days").format(pattern)}},watch:{start:function(t){t.length>0&&(this.start=c()(t).format(pattern))},end:function(t){t.length>0&&(this.end=c()(t).format(pattern))}},methods:{submit:function(){!1!==this.valid&&(this.$emit("update:queryStart",this.start),this.$emit("update:queryEnd",this.end),this.$emit("submit"))},reset:function(){this.start="",this.end="",this.$emit("update:queryStart",""),this.$emit("update:queryEnd",""),this.$emit("reset")}}},d=r(2),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"date_range",class:{custom:0===t.custom}},[r("div",{staticClass:"date_custom",class:{show:0!==t.custom}},[1===t.custom?r("button",{on:{click:t.reset}}):t._e(),t._v("\n    "+t._s(t.label)+"\n    "),t.infoStart?[t._v(t._s(t._f("moment")(t.infoStart,"MM-DD HH:mm")))]:t._e(),t._v("\n    ~\n    "),t.infoEnd?[t._v(t._s(t._f("moment")(t.infoEnd,"MM-DD HH:mm")))]:t._e()],2),t._v(" "),0===t.custom?r("div",{staticClass:"select_time"},[r("datetime",{attrs:{"week-start":7,format:"MM-dd","input-id":"start_date","value-zone":"local","min-datetime":t.min,"max-datetime":t.startMax},model:{value:t.start,callback:function(e){t.start=e},expression:"start"}}),t._v(" "),r("b",[t._v("~")]),t._v(" "),r("datetime",{attrs:{"week-start":7,format:"MM-dd","input-id":"end_date","value-zone":"local","min-datetime":t.endMin,"max-datetime":t.max},model:{value:t.end,callback:function(e){t.end=e},expression:"end"}}),t._v(" "),r("div",{staticClass:"date_send"},[r("button",{class:{show:t.valid},on:{click:t.submit}},[t._v("查询")])])],1):t._e()])}),[],!1,null,null,null);e.a=component.exports},634:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAYCAMAAAClZq98AAAAM1BMVEUAAABrnsJsn8Nun8FqncRqncJrncNqn8VrnsFrnsJsnsJsnsJrnsJrnsJrnsJsnsJsnsKkHnatAAAAEHRSTlMA30ANHmBPMfDQwn+yoHCPIB28vgAAAN5JREFUKM+VkkuShSAQBKUR+UPe/7SjI0KIuni1guiErmpYftNakgKft29ERy6pL8x6UFVETHaQ9SvjcOa6s0J+6+Xx68HGcmwN1CcUcQezbKj/fQH7yOUwy4B2BdIMlVYbkMDsPVEnaFHMc1DIHbLiyXK3xYCcbt0A8w5ZCPqM+5iV7wa2iwr4yVMepzao53jXCTK4HljSLbvtxrQjfry7o1Nmeoa4B5EzpRptA04GU8Eaku5M/wbUZkbCEb9AaMygEpBiidW3MRY6M2QUTeksxcZMUWIIIZVe2Ve/6A/1xwrz3TDGtQAAAABJRU5ErkJggg=="},650:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAA6lBMVEUAAAB7hKZ5fa6VoLxkcJdncpiRob2TnruQm7lodJmQnLmOmbZsd5xwfKGSnbpodJmPm7hnc5iHkrKJlLOKlrVqdpuBjK1odZpzgKJyfaFxfaFwe5+Unrxkcphmc5nr49zu5+Dn3teVoL2EkK6RnLmOmbeJlbTz7env6eN8h6lzgKJ/i6t4hKZrd51faYVve590fpx9iKRlcZNsdZCJjZ95g59vepabnKVncIrOy86OlKZWX3pdZoNcZH3X1NWzs7iBjKaFiZhha4yioqre1tHLxsesq7HVzsrAvsGnqrd/g5J1eo5tc4aRk54a5Mo/AAAAHnRSTlMAFQng4KIcoZSQZfTy5MnJhWDq2K2DPSb40Kx0TEqXAJ3sAAADS0lEQVRIx62RiVriMBRGAwoIjvu+FbVqFSSmlEBLqeyLgO//OnObZmnRlvLNnAR6v+Se/CmgKPlSYesxhq1CKY9iye+AmMzWzu9+9vAxDU+H2Z/u7RbbSp5B+u2KmimkiuV+IRNx9582Yj9kZ8Hd0FbyaWTjmbFmqSDc0nOEF5+1SyX+wrvRRr1n9vSXxCVgN3jtnZWQ3pfhmDokKdfsGmNzxd5BQH43fDkIoZ+G0Tb1ED1ybxgEbB8ZnfeDXyTQZprEcgyj0aSmgtiGYdjEhLvrqvsQ5GPlmpS0240+JA8bbQUsgdyHJThS2ScInYfd7r2RzCxsn6ND5RKIXMdnyC6hUynTL3/TcZwye0SAHfj2D+9SKZ+iE+FW/eCJbVkYWvu21ZTAEljYsuwhHEuqunzpY/BgwK0t6LCalLJfm0R+bbZFKLH9p6lz5RjpHC7TqknGRpnSqi6BJccoE7NKrUAWKJla/M+k9MsktKoAGZZgJ0imcTK2CIF3tJokhFyycIwMd3p9fZ33Gwn059ACbxYjrycqV4OxmcyUf0yuct6ofZ8Km74JR8kkrUwSZGfyKRtn3YdE+Y0j5GEHY4f3fUOtbCULpPzO5aVt4xbv86CewLMsJ5PfY+UFtvGQy9i2O91obrLsYG8urtrFXp8Fh0aMjFkfIPpFGQWH5HdOheByKjCpCEfJzbRy8//KFSY/+BM+MRM+UbnC2SRZgN4rwSBcHnvuYsRDJp47ZxUwdN1vLpMKd9AlP+VDC+RlB3stHuJ1sDuBJ/hTF2N3zGTtgyuXaE/KneBgkL+5DII3DMqZL8/8qiPlPXQFnj+E3HJdb8yv3Yd6xA9auu6yzGWuXKFrlfzAGA+nD4LuZPSjVsnX6OaDA3IqsCaMG3QuZTxK446VfIHQXlDVtEE3jTwcCHkPIXQm5LqVInpk17VaYJyBnPlTY2jaYDFd504XA60W8CeDgGKN2/WB3Wgl0u8MNCEXEYpEg46TGAzq0CSDGUdQSz0JUGXwEeLktIAaDJix1FRHDgmyB7DQZJ9g1lYH34evJisOkCJzoG3EQQaFyOY2cXNZFOVuO626fYd+kC2mc89EbJSL4vba1OIFiiVzlIMD6r+O7dxRBkX4CxkS8TSBT+oqAAAAAElFTkSuQmCC"},652:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAYCAMAAAClZq98AAAANlBMVEUAAACPwGGKvGaKvWeKvGeJvGaJvGaJvGeJvGaKvGeIvmeJvGeKu2aKumWKu2aKvGeJu2aKvGecILr+AAAAEXRSTlMAD/FgP3+g0FCxH+DOMMCQcBGIZAsAAADgSURBVCjPlZNbcsMgDEWReNpgJ2f/m21MKI0VN9PqQwPMQboSwv3PxC8NWvIfkKgMq79ha4N6CyGUpLDIJaPofcaEdkFJQ7eDjfHYBmV5h+KTcQHtew/FMqLc3SvkFpqFPNWdoRU2Ay3cDOR2ooEywULxTToW2jgsXUMrI8AdyCbdLLh89zGh64XwQY0skovr1Gpb0Nf1eSyPU++6m82Mk5IfEXgPyT7LTLr1jOcSJZ+oor0SqbCfX0/jy6hk6VJhSJqxqKmE4OfQHXoOXR/HN5OcPJz9CDvsqcxrw/3RvgD7OgsW5xZzMAAAAABJRU5ErkJggg=="},790:function(t,e,r){"use strict";r.r(e);r(15),r(11),r(10),r(9),r(8),r(13);var n=r(5),c=r(7),header=r(101),o=r(608),d=r(611),l=r(6);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={layout:"member",transition:"rightIn",components:{AppHeader:header.a,TabSelect:o.a,DatePicker:d.a},data:function(){return{tab:"",start:"",end:"",custom:-1,chartRadius:"190px",chartMax:-540,init:"",entryTime:void 0}},computed:f(f({},Object(c.c)("reward",["overview","query"])),{},{times:function(){return l.f},category:function(){return"reward_"}}),watch:{tab:function(t,e){this.start="",this.end="","set_self"!==t?(this.custom=-1,this.getData()):this.custom=0},overview:function(t){this.updateChart()},custom:function(t){0===t&&""!==this.query.start_date&&""!==this.query.end_date&&(this.start=this.query.start_date,this.end=this.end.end_date,this.custom=1,this.getData())}},created:function(){this.init=""===this.query.time_tag?"today":this.query.time_tag},mounted:function(){this.entryTime=new Date},beforeDestroy:function(){this.$dataAnalysis("reward_report_stay_time","stay_time","sec",.001*(new Date-this.entryTime))},methods:f(f(f({},Object(c.b)("reward",["getAssignReward"])),Object(c.d)("reward",["setQuery"])),{},{getData:function(){this.setQuery({time_tag:this.tab,start_date:this.start,end_date:this.end}),this.getAssignReward({time:this.query.time_tag,start:this.query.start_date,end:this.query.end_date})},submit:function(){this.custom=1,this.getData()},reset:function(){this.custom=0},updateChart:function(){var t=this.overview,e=t.teamTotal,r=t.teamUnpaid,n=0===e?0:r/e,c=this.chartMax*n;this.$refs.circle.style.strokeDashoffset=this.chartMax-c},doTracker:function(t){var e="direct"===t?"reward_more_direct":"reward_more_team";this.$dataAnalysis(e,"click","count",1),this.$router.push("reward/detail/".concat(t))}})},h=r(2),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-container"},[n("app-header",{attrs:{title:"发放记录","back-enable":!0,desc:"reward1",guide:"reward"}},[n("template",{slot:"suffix"},[n("tab-select",{attrs:{items:t.times,target:t.tab,default:t.init,overflow:!0,category:t.category},on:{"update:target":function(e){t.tab=e}}}),t._v(" "),n("date-picker",{attrs:{label:t.query.label,"info-start":t.overview.time.start,"info-end":t.overview.time.end,custom:t.custom,"query-start":t.start,"query-end":t.end,min:t.overview.limit.min,max:t.overview.limit.max},on:{"update:queryStart":function(e){t.start=e},"update:query-start":function(e){t.start=e},"update:queryEnd":function(e){t.end=e},"update:query-end":function(e){t.end=e},submit:t.submit,reset:t.reset}}),t._v(" "),n("div",{staticClass:"shadow",attrs:{id:"summaryBar"}},[n("div",{staticClass:"content"},[n("div",{staticClass:"icon sigma"}),t._v(" "),n("div",{staticClass:"part"},[n("span",[t._v("奖金总额")]),t._v(" "),n("b",[t._v(t._s(t._f("currency")(0===t.custom?0:t.overview.total,2)))])])])])],1)],2),t._v(" "),n("main",{staticClass:"reward"},[0===t.custom?[n("div",{staticClass:"no_data show"},[t._v("请选择日期")])]:[n("div",{staticClass:"reward_chart"},[n("div",{staticClass:"section"},[n("div",{staticClass:"chart"},[n("div",{staticClass:"title"},[t._v("直推奖金")]),t._v(" "),n("div",{staticClass:"bonus"},[t._v(t._s(t._f("currency")(t.overview.directTotal,2)))]),t._v(" "),n("button",{staticClass:"more",on:{click:function(e){return t.doTracker("direct")}}},[t._v("更 多")])]),t._v(" "),n("div",{staticClass:"data"},[n("img",{attrs:{src:r(634)}}),t._v(" "),n("div",{staticClass:"detail-posted"},[t._v("已发:"+t._s(t._f("currency")(t.overview.directPaid,2)))])]),t._v(" "),n("div",{staticClass:"data"}),t._v(" "),n("span",{staticClass:"comment"}),t._v(" "),n("div",{staticClass:"gap"})]),t._v(" "),n("div",{staticClass:"section"},[n("div",{staticClass:"chart",style:{width:t.chartRadius,height:t.chartRadius}},[n("div",{staticClass:"title"},[t._v("团队奖金")]),t._v(" "),n("div",{staticClass:"bonus"},[t._v(t._s(t._f("currency")(t.overview.teamTotal,2)))]),t._v(" "),n("button",{staticClass:"more",on:{click:function(e){return t.doTracker("team")}}},[t._v("更 多")]),t._v(" "),n("svg",{staticClass:"circleSvg",attrs:{width:t.chartRadius,height:t.chartRadius,viewBox:"0 0 200 200"}},[n("linearGradient",{attrs:{id:"linear_stroke",x1:"1",y1:"1",x2:"0",y2:"1"}},[n("stop",{attrs:{offset:"0%","stop-color":"#cae8ab"}}),t._v(" "),n("stop",{attrs:{offset:"100%","stop-color":"#91c16f"}})],1),t._v(" "),n("circle",{ref:"circle",attrs:{id:"circle_stroke",stroke:"url(#linear_stroke)","stroke-width":"13.5","stroke-dasharray":"540 540","stroke-dashoffset":t.chartMax,"stroke-linecap":"butt",fill:"none",cx:"100",cy:"100",r:"86"}})],1)]),t._v(" "),n("div",{staticClass:"data"},[n("img",{attrs:{src:r(634)}}),t._v(" "),n("div",{staticClass:"detail-posted"},[t._v("已发:"+t._s(t._f("currency")(t.overview.teamPaid,2)))])]),t._v(" "),n("div",{staticClass:"data"},[n("img",{attrs:{src:r(652)}}),t._v(" "),n("div",{staticClass:"detail-unposted"},[t._v("未发:"+t._s(t._f("currency")(t.overview.teamUnpaid,2)))])]),t._v(" "),n("span",{staticClass:"comment"}),t._v(" "),n("div",{staticClass:"gap"})])]),t._v(" "),n("div",{staticClass:"reward_downline_bonus"},[n("img",{attrs:{src:r(650)}}),t._v(" "),n("div",{staticClass:"text"},[t._v("下层领取奖金")]),t._v(" "),n("nuxt-link",{attrs:{to:"/reward/bonus",custom:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.navigate;return[t._t("default",[n("button",{staticClass:"more",on:{click:r}},[t._v("更 多")])])]}}],null,!0)})],1)]],2)],1)}),[],!1,null,null,null);e.default=component.exports}}]);