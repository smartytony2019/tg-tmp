(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{608:function(t,e,n){"use strict";var r={props:{overflow:{type:Boolean,default:!1},items:{type:Array,default:function(){return[]}},target:{type:String,default:""},category:{type:String,default:""},default:{type:String,default:""}},data:function(){return{width:0,left:0}},computed:{containerStyle:function(){return this.overflow?"date_select":"tab_select"},spanStyle:function(){return{width:"".concat(this.width,"px"),left:"".concat(this.left,"px")}}},watch:{target:{handler:function(t){var e=this;if(""===t)return this.width=0,void(this.left=0);this.$nextTick((function(){var t=document.querySelector(".select_tabs button.active");e.width=t.offsetWidth,e.left=t.offsetLeft,document.querySelector(".".concat(e.containerStyle)).scrollTo({left:e.left})}))},immediate:!0}},mounted:function(){this.$emit("update:target",this.default)},methods:{itemClick:function(t){this.category&&this.$dataAnalysis("".concat(this.category).concat(t)),t!==this.target&&this.$emit("update:target",t)}}},d=n(2),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.containerStyle},[n("div",{staticClass:"select_tabs"},[n("span",{style:t.spanStyle}),t._v(" "),t._l(t.items,(function(e){return n("button",{key:e.value,class:{active:e.value===t.target},on:{click:function(n){return t.itemClick(e.value)}}},[t._v("\n      "+t._s(e.label)+"\n    ")])}))],2)])}),[],!1,null,null,null);e.a=component.exports},611:function(t,e,n){"use strict";n(289);var r=n(0),d=n.n(r),pattern="YYYY-MM-DD",c={props:{label:{type:String,default:""},infoStart:{type:String,default:""},infoEnd:{type:String,default:""},custom:{type:Number,default:-1},queryStart:{type:String,default:""},queryEnd:{type:String,default:""},max:{type:String,default:""},min:{type:String,default:""}},data:function(){return{start:"",end:""}},computed:{valid:function(){return this.start.length>0&&this.end.length>0&&d()(this.start).isBefore(this.end)},startMax:function(){var t=0===this.end.length?this.max:this.end;return d()(t).subtract(1,"days").format(pattern)},endMin:function(){var t=0===this.start.length?this.min:this.start;return d()(t).add(1,"days").format(pattern)}},watch:{start:function(t){t.length>0&&(this.start=d()(t).format(pattern))},end:function(t){t.length>0&&(this.end=d()(t).format(pattern))}},methods:{submit:function(){!1!==this.valid&&(this.$emit("update:queryStart",this.start),this.$emit("update:queryEnd",this.end),this.$emit("submit"))},reset:function(){this.start="",this.end="",this.$emit("update:queryStart",""),this.$emit("update:queryEnd",""),this.$emit("reset")}}},l=n(2),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"date_range",class:{custom:0===t.custom}},[n("div",{staticClass:"date_custom",class:{show:0!==t.custom}},[1===t.custom?n("button",{on:{click:t.reset}}):t._e(),t._v("\n    "+t._s(t.label)+"\n    "),t.infoStart?[t._v(t._s(t._f("moment")(t.infoStart,"MM-DD HH:mm")))]:t._e(),t._v("\n    ~\n    "),t.infoEnd?[t._v(t._s(t._f("moment")(t.infoEnd,"MM-DD HH:mm")))]:t._e()],2),t._v(" "),0===t.custom?n("div",{staticClass:"select_time"},[n("datetime",{attrs:{"week-start":7,format:"MM-dd","input-id":"start_date","value-zone":"local","min-datetime":t.min,"max-datetime":t.startMax},model:{value:t.start,callback:function(e){t.start=e},expression:"start"}}),t._v(" "),n("b",[t._v("~")]),t._v(" "),n("datetime",{attrs:{"week-start":7,format:"MM-dd","input-id":"end_date","value-zone":"local","min-datetime":t.endMin,"max-datetime":t.max},model:{value:t.end,callback:function(e){t.end=e},expression:"end"}}),t._v(" "),n("div",{staticClass:"date_send"},[n("button",{class:{show:t.valid},on:{click:t.submit}},[t._v("查询")])])],1):t._e()])}),[],!1,null,null,null);e.a=component.exports},810:function(t,e,n){"use strict";n.r(e);n(15),n(11),n(10),n(9),n(8),n(13),n(33),n(56);var r=n(5),d=n(7),header=n(101),c=n(608),l=n(611);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={layout:"member",components:{AppHeader:header.a,TabSelect:c.a,DatePicker:l.a},data:function(){return{types:[{value:"team",label:"团队奖金明细",type:"team",desc:"reward4",guide:"reward_team"},{value:"direct",label:"直推奖金明细",type:"directpush",desc:"reward2",guide:"reward_direct"}],paids:[{value:"assign",label:"已发"},{value:"not_assign",label:"未发"}],paid:"",page:1,entryTime:void 0,tackingType:""}},computed:f(f({},Object(d.c)("reward",["query","detail"])),{},{type:function(){return this.$route.params.type},typeIndex:function(){var t=this;return this.types.findIndex((function(e){return e.value===t.type}))},rewardType:function(){return this.valid?this.types[this.typeIndex].type:""},valid:function(){return this.typeIndex>-1},isDirect:function(){return"direct"===this.type},isTeam:function(){return"team"===this.type},desc:function(){return this.valid?this.types[this.typeIndex].desc:""},guide:function(){return this.valid?this.types[this.typeIndex].guide:""}}),watch:{paid:function(t,e){if(""!==e){var n="assign"===t?"reward_team_detail_paid":"reward_team_detail_unpaid";this.$dataAnalysis(n,"click","count",1)}this.setQuery({search_type:t}),this.page=1,this.getData()},type:{handler:function(t){this.tackingType=t},immediate:!0}},created:function(){!1!==this.valid?this.setQuery({reward_type:this.rewardType}):this.$router.replace({path:"/reward"})},mounted:function(){this.entryTime=new Date},beforeDestroy:function(){var t="direct"===this.tackingType?"reward_direct_detail_stay_time":"reward_team_detail_stay_time";this.$dataAnalysis(t,"stay_time","sec",.001*(new Date-this.entryTime))},methods:f(f(f({},Object(d.b)("reward",["getRewardDetail"])),Object(d.d)("reward",["setQuery"])),{},{getData:function(){this.getRewardDetail({time:this.query.time_tag,paid:this.query.search_type,type:this.query.reward_type,page:this.page,start:this.query.start_date,end:this.query.end_date})},more:function(){this.page+=1,this.getData()},itemClick:function(t){this.$router.replace({path:"/reward/order/".concat(t)})}})},h=n(2),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("fragment",[n("app-header",{attrs:{title:t.detail.title,"back-enable":!0,desc:t.desc,guide:t.guide}},[n("template",{slot:"suffix"},[n("tab-select",{directives:[{name:"show",rawName:"v-show",value:t.isTeam,expression:"isTeam"}],attrs:{items:t.paids,target:t.paid,default:"assign"},on:{"update:target":function(e){t.paid=e}}}),t._v(" "),n("date-picker",{attrs:{label:t.query.label,"info-start":t.detail.time.start,"info-end":t.detail.time.end,custom:-1}}),t._v(" "),n("div",{staticClass:"shadow",attrs:{id:"summaryBar"}},[n("div",{staticClass:"content"},[n("div",{staticClass:"icon sigma"}),t._v(" "),n("div",{staticClass:"part"},[n("span",[t._v("奖金总额")]),t._v(" "),n("b",[[t._v(t._s(t._f("currency")(t.detail.amount,2)))]],2)])])])],1)],2),t._v(" "),n("main",{staticClass:"reward_detail"},[n("ul",{staticClass:"detail_list"},[n("div",{staticClass:"no_data",class:{show:0===t.detail.list.length}},[t._v("暂无资料")]),t._v(" "),t._l(t.detail.list,(function(e,r){return n("li",{key:r,on:{click:function(n){return t.itemClick(e.eventId)}}},[n("div",{staticClass:"detail_info"},[n("div",{staticClass:"detail_time"},[t._v("开赛时间: "+t._s(e.time))]),t._v(" "),n("div",[t._v(t._s(e.event))]),t._v(" "),n("div",[t._v("\n            状态:\n            "),n("span",{staticClass:"status"},[e.paidStatus?[t._v("已发")]:[t._v("未发")]],2),t._v("\n            笔数: "+t._s(e.orderCount)+"\n          ")])]),t._v(" "),n("div",{staticClass:"detail_amount"},[t._v("金额: "+t._s(t._f("currency")(e.amount,2)))])])}))],2),t._v(" "),t.page<t.detail.pageMax&&t.detail.list.length>0?n("div",{staticClass:"morebox",on:{click:t.more}},[n("button",{staticClass:"more_btn"},[t._v("另外"+t._s(t._f("currency")(t.detail.left))+"笔......")])]):t._e()])],1)}),[],!1,null,null,null);e.default=component.exports}}]);