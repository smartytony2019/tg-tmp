(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{612:function(t,e,r){"use strict";r(24);var n={components:{Swiper:r(609).Swiper},props:{showToTop:{type:Boolean,default:!0}},data:function(){return{swiperOption:{autoHeight:!0},tabs:[],isScroll:!0}},computed:{swiper:function(){return this.$refs.mySwiper.$swiper}},mounted:function(){this.tabs=this.$children[0].$children,document.querySelector(".tabs-details").addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleWindowSize)},updated:function(){this.updateBarSize()},destroyed:function(){window.removeEventListener("resize",this.handleWindowSize)},methods:{selectTab:function(t){this.tabs.forEach((function(e){e.isActive=e.name==t.name})),this.swiper.slideTo(this.tabs.indexOf(t))},onSlideChange:function(){var t=this;this.tabs.forEach((function(e){e.isActive=e.name==t.tabs[t.swiper.activeIndex].name})),this.$emit("selectedIndex",this.swiper.activeIndex),this.scrollTop()},handleScroll:function(t){this.isScroll=0!=document.querySelector(".tabs-details").scrollTop},handleWindowSize:function(t){this.updateBarSize()},updateBarSize:function(){var t=document.querySelector(".is-active");document.querySelector(".tabs-menu-bar").setAttribute("style","width:"+t.offsetWidth+"px; left:"+t.offsetLeft+"px;")},scrollTop:function(){var t=document.querySelector(".tabs-details").scrollTop/20,e=setInterval((function(){0!=document.querySelector(".tabs-details").scrollTop?document.querySelector(".tabs-details").scrollTop-=t:clearInterval(e)}),15)}}},l=r(2),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tabs-container"},[r("div",{staticClass:"tabs"},[r("ul",[r("span",{staticClass:"tabs-menu-bar"}),t._v(" "),t._l(t.tabs,(function(e,n){return r("li",{key:n,class:{"is-active":e.isActive}},[r("a",{attrs:{href:e.href},on:{click:function(r){return t.selectTab(e)}}},[t._v(t._s(e.name))])])}))],2)]),t._v(" "),r("div",{staticClass:"tabs-details"},[r("swiper",{ref:"mySwiper",staticClass:"swiper",attrs:{options:t.swiperOption},on:{slideChange:t.onSlideChange}},[t._t("default")],2)],1),t._v(" "),t.showToTop?r("span",{directives:[{name:"show",rawName:"v-show",value:t.isScroll,expression:"isScroll"}],staticClass:"to_top",on:{click:t.scrollTop}},[t._v("至顶")]):t._e()])}),[],!1,null,null,null);e.a=component.exports},613:function(t,e,r){"use strict";var n={components:{SwiperSlide:r(609).SwiperSlide},props:{name:{required:!0,type:String,default:""},selected:{default:!1,type:Boolean}},data:function(){return{isActive:!1}},created:function(){this.isActive=this.selected}},l=r(2),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("swiper-slide",[r("div",{staticClass:"detail_content"},[t._t("default")],2)])}),[],!1,null,null,null);e.a=component.exports},803:function(t,e,r){"use strict";r.r(e);var header=r(101),n=r(612),l=r(613),v={layout:"guest",components:{AppHeader:header.a,Tabs:n.a,Tab:l.a},computed:{embed:function(){return"true"===this.$route.query.embed}}},o=r(2),component=Object(o.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("fragment",[!1===t.embed?n("app-header",{attrs:{title:"等级规则","header-class":"header_white","back-enable":!0}}):t._e(),t._v(" "),n("main",{staticClass:"rule level"},[n("tabs",[n("tab",{attrs:{name:"各等级卡片内数值",selected:!0}},[n("h1",{staticClass:"mic_h5"},[t._v("各等级卡片内数值")]),t._v(" "),n("table",{staticClass:"rule_table",attrs:{rules:"rows"}},[n("thead",[n("tr",[n("th",[t._v("等级")]),t._v(" "),n("th",[t._v("目标充值金额")]),t._v(" "),n("th",[t._v("目标交易金额")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("strong",[t._v("Lv.0")])]),t._v(" "),n("td",[t._v("500")]),t._v(" "),n("td",[t._v("3,500")])])]),t._v(" "),n("thead",[n("tr",[n("th",[t._v("等级")]),t._v(" "),n("th",[t._v("\n                总实货量\n                "),n("span",[t._v("近90天累计值")])]),t._v(" "),n("th",[t._v("\n                活跃会员\n                "),n("span",[t._v("近90天累计值")])])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticClass:"grade_row"},[n("img",{attrs:{src:r(290),alt:""}}),t._v(" "),n("strong",[t._v("Lv.1")])]),t._v(" "),n("td",[t._v("20,000")]),t._v(" "),n("td",[t._v("20")])]),t._v(" "),n("tr",[n("td",{staticClass:"grade_row"},[n("img",{attrs:{src:r(291),alt:""}}),t._v(" "),n("strong",[t._v("Lv.2")])]),t._v(" "),n("td",[t._v("60,000")]),t._v(" "),n("td",[t._v("30")])]),t._v(" "),n("tr",[n("td",{staticClass:"grade_row"},[n("img",{attrs:{src:r(292),alt:""}}),t._v(" "),n("strong",[t._v("Lv.3")])]),t._v(" "),n("td",[t._v("100,000")]),t._v(" "),n("td",[t._v("40")])]),t._v(" "),n("tr",[n("td",{staticClass:"grade_row"},[n("img",{attrs:{src:r(293),alt:""}}),t._v(" "),n("strong",[t._v("Lv.4")])]),t._v(" "),n("td",[t._v("270,000")]),t._v(" "),n("td",[t._v("90")])]),t._v(" "),n("tr",[n("td",{staticClass:"grade_row"},[n("img",{attrs:{src:r(294),alt:""}}),t._v(" "),n("strong",[t._v("Lv.5")])]),t._v(" "),n("td",[t._v("450,000")]),t._v(" "),n("td",[t._v("150")])]),t._v(" "),n("tr",[n("td",{staticClass:"grade_row"},[n("img",{attrs:{src:r(295),alt:""}}),t._v(" "),n("strong",[t._v("Lv.6")])]),t._v(" "),n("td",[t._v("900,000")]),t._v(" "),n("td",[t._v("270")])]),t._v(" "),n("tr",[n("td",{staticClass:"grade_row"},[n("img",{attrs:{src:r(296),alt:""}}),t._v(" "),n("strong",[t._v("Lv.7")])]),t._v(" "),n("td",[t._v("2,800,000")]),t._v(" "),n("td",[t._v("600")])]),t._v(" "),n("tr",[n("td",{staticClass:"grade_row"},[n("img",{attrs:{src:r(297),alt:""}}),t._v(" "),n("strong",[t._v("Lv.8")])]),t._v(" "),n("td",[t._v("9,000,000")]),t._v(" "),n("td",[t._v("1,500")])]),t._v(" "),n("tr",[n("td",{staticClass:"grade_row"},[n("img",{attrs:{src:r(298),alt:""}}),t._v(" "),n("strong",[t._v("Lv.9")])]),t._v(" "),n("td",[t._v("54,000,000")]),t._v(" "),n("td",[t._v("4,200")])])])])]),t._v(" "),n("tab",{attrs:{name:"晋级门槛释义"}},[n("h1",{staticClass:"mic_h5"},[t._v("晋级门槛释义")]),t._v(" "),n("ol",[n("li",[t._v("\n            1.总实货量：您下层所有会员(1阶~9阶)下单的失利本金、获利收益之总合。【例】A会员赢100，B会员输200，实货量则为总合之300。\n            "),n("span",[t._v("1-1.计算区间为每日往前推算90天之累计值，时间判断以“开赛时间”为依据。")]),t._v(" "),n("span",[t._v("1-2.体验金注单、保本注单产生的实货量不列入计算。")])]),t._v(" "),n("li",[t._v("\n            2.活跃会员:您下层所有会员(1阶~9阶),在计算区间内于TG进行单日充值满300以上,且充值状态为[已完成]之人数总合,如同一会员当日充值多笔超过300,当日仍计算为1人。\n            "),n("span",[t._v("2-1.计算区间为每日往前推算90天之累计值。")])])])]),t._v(" "),n("tab",{attrs:{name:"等级升降"}},[n("h1",{staticClass:"mic_h5"},[t._v("等级升降")]),t._v(" "),n("ol",[n("li",[t._v("1.等级提升：90天内之总实货量、活跃会员皆达到晋级门槛，即可于当日16:00后晋升至相对应的等级。")]),t._v(" "),n("li",[t._v("2.等级下降：90天内之总实货量、活跃会员未达到您目前等级之门槛，则会于当日16:00后下降至相对应的等级。")])])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);