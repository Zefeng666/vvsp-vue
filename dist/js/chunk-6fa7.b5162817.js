(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fa7"],{"00a3":function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Table",{attrs:{loading:e.orderListLoading,columns:e.orderColumns,data:e.orderData,size:"large"}}),r("Page",{staticStyle:{"margin-top":"10px"},attrs:{total:e.totalCount,"show-total":""},on:{"on-change":e.changePage}}),r("Modal",{attrs:{title:"查看身份证"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[e.visible?r("img",{staticStyle:{width:"100%"},attrs:{src:e.showLargeImgSrc}}):e._e()])],1)},n=[],o=(r("cadf"),r("551c"),r("097d"),{name:"idcard_review_page",data:function(){var e=this;return{totalCount:0,orderListLoading:!0,visible:!1,showLargeImgSrc:"",orderColumns:[{title:"序号",key:"index",width:70,align:"center",render:function(e,t){return e("div",t.row._index+1)}},{title:"用户名",key:"username",align:"center"},{title:"身份证正面",key:"frontPhoto",align:"center",render:function(t,r){return t("div",[t("img",{attrs:{src:r.row.frontPhoto},style:{height:"50px",width:"80px",marginTop:"8px",border:"1px solid #ccc"},on:{click:function(){e.showLargeImgSrc=r.row.frontPhoto,e.visible=!0}}})])}},{title:"身份证背面",key:"agencyDistrict",align:"center",render:function(t,r){return t("div",[t("img",{attrs:{src:r.row.reversePhoto},style:{height:"50px",width:"80px",marginTop:"8px",border:"1px solid #ccc"},on:{click:function(){e.showLargeImgSrc=r.row.reversePhoto,e.visible=!0}}})])}},{title:"申请时间",key:"applyTime",align:"center",render:function(e,t){return e("div",t.row.createTime.substr(0,10))}},{title:"审核时间",key:"reviewTime",align:"center",render:function(e,t){return e("div",t.row.reviewTime.substr(0,10))}},{title:"审核",key:"isReview",align:"center",render:function(e,t){return 1===t.row.isReview?e("div","通过"):2===t.row.isReview?e("div","未通过"):void 0}}],orderData:[]}},created:function(){this.queryIdCardHistory()},methods:{queryIdCardHistory:function(e){var t=this;this.$api.queryIdCardHistory({pageNo:e||1,pageSize:10}).then(function(e){200===e.code?(t.orderData=e.data.items,t.totalCount=e.data.totalCount,t.orderListLoading=!1):console.log(e)})},changePage:function(e){this.orderListLoading=!0,this.queryIdCardHistory(e)}}}),a=o,s=(r("d629"),r("2877")),c=Object(s["a"])(a,i,n,!1,null,null,null);c.options.__file="idcard-record.vue";t["default"]=c.exports},"8ae5":function(e,t,r){},d629:function(e,t,r){"use strict";var i=r("8ae5"),n=r.n(i);n.a}}]);