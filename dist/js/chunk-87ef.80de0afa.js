(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-87ef"],{2294:function(e,t,i){"use strict";var r=i("c4e6"),n=i.n(r);n.a},c4e6:function(e,t,i){},fef3:function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("Table",{attrs:{loading:e.orderListLoading,columns:e.orderColumns,data:e.orderData,size:"large"}}),i("Page",{staticStyle:{"margin-top":"10px"},attrs:{total:e.totalCount,"show-total":""},on:{"on-change":e.changePage}}),i("Modal",{attrs:{title:"查看身份证"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[e.visible?i("img",{staticStyle:{width:"100%"},attrs:{src:e.showLargeImgSrc}}):e._e()])],1)},n=[],o=(i("cadf"),i("551c"),i("097d"),{name:"idcard_review_page",data:function(){var e=this;return{totalCount:0,orderListLoading:!0,visible:!1,showLargeImgSrc:"",orderColumns:[{title:"用户名",key:"username",align:"center"},{title:"身份证正面",key:"frontPhoto",align:"center",render:function(t,i){return t("div",[t("img",{attrs:{src:i.row.frontPhoto},style:{height:"50px",width:"80px",marginTop:"8px",border:"1px solid #ccc"},on:{click:function(){e.showLargeImgSrc=i.row.frontPhoto,e.visible=!0}}})])}},{title:"身份证背面",key:"agencyDistrict",align:"center",render:function(t,i){return t("div",[t("img",{attrs:{src:i.row.reversePhoto},style:{height:"50px",width:"80px",marginTop:"8px",border:"1px solid #ccc"},on:{click:function(){e.showLargeImgSrc=i.row.reversePhoto,e.visible=!0}}})])}},{title:"申请时间",key:"applyTime",align:"center",render:function(e,t){return e("div",t.row.createTime.substr(0,10))}},{title:"编辑",key:"action",width:150,align:"center",render:function(t,i){return t("div",[t("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.reviewIdCard(i.row.id,1)}}},"通过"),t("Button",{props:{type:"error",size:"small"},on:{click:function(){e.$Modal.confirm({title:"警告",content:"确定不同意这条申请吗？",onOk:function(){e.reviewIdCard(i.row.id,2)}})}}},"不通过")])}}],orderData:[]}},created:function(){this.queryUnReviewIdCard()},methods:{queryUnReviewIdCard:function(e){var t=this;this.$api.queryUnReviewIdCard({pageNo:e||1,pageSize:10}).then(function(e){200===e.code?(t.orderData=e.data.items,t.totalCount=e.data.totalCount,t.orderListLoading=!1):console.log(e)})},reviewIdCard:function(e,t){var i=this;this.$api.reviewIdCard({id:e,audit:t}).then(function(e){200===e.code?(i.$Message.success("处理成功"),i.queryUnReviewIdCard()):console.log(e)})},changePage:function(e){this.orderListLoading=!0,this.queryUnReviewIdCard(e)}}}),a=o,c=(i("2294"),i("2877")),s=Object(c["a"])(a,r,n,!1,null,null,null);s.options.__file="idcard-review.vue";t["default"]=s.exports}}]);