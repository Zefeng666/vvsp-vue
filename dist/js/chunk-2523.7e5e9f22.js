(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2523"],{"5b55":function(e,r,t){"use strict";var n=t("b9e4"),i=t.n(n);i.a},"79b2":function(e,r,t){"use strict";t.r(r);var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("Table",{attrs:{loading:e.orderListLoading,columns:e.orderColumns,data:e.orderData,size:"large"}}),t("Page",{staticStyle:{"margin-top":"10px"},attrs:{total:e.totalCount,"show-total":""},on:{"on-change":e.changePage}})],1)},i=[],o=(t("cadf"),t("551c"),t("097d"),{name:"shipping_record_page",data:function(){return{totalCount:0,orderListLoading:!0,orderColumns:[{title:"用户名",key:"name",width:100,render:function(e,r){return e("div",r.row.user.username)}},{title:"积分",key:"point",width:80,render:function(e,r){return e("div",r.row.user.withdrawAmount)}},{title:"申请数量",width:100,key:"applicationNumber",render:function(e,r){return e("div",r.row.order.quantity)}},{title:"申请时间",key:"applicationTime",render:function(e,r){var t=new Date(r.row.order.createTime);return e("div",t.toLocaleString())}},{title:"审核时间",key:"auditTime",render:function(e,r){var t=new Date(r.row.order.auditTime);return e("div",t.toLocaleString())}},{title:"代理区县",key:"agencyDistrict",render:function(e,r){return e("div",r.row.order.proxyProvice+r.row.order.proxyCity+r.row.order.proxyArea)}},{title:"联系人",key:"contact",width:80,render:function(e,r){return e("div",r.row.userAddress.contact)}},{title:"联系电话",key:"phone",render:function(e,r){return e("div",r.row.userAddress.mobile)}},{title:"发货地址",key:"deliveryAddress",render:function(e,r){return e("div",r.row.userAddress.province+r.row.userAddress.city+r.row.userAddress.area+r.row.userAddress.detail)}},{title:"审核",key:"agree",width:80,render:function(e,r){return 1===r.row.order.isAudit?e("div","同意"):e("div","未同意")}}],orderData:[]}},created:function(){this.queryOrderHistory()},methods:{queryOrderHistory:function(e){var r=this;this.$api.queryOrderHistory({pageNo:e||1,pageSize:10}).then(function(e){200===e.code?(r.orderData=e.data.items,r.totalCount=e.data.totalCount,r.orderListLoading=!1):console.log(e)})},auditOrder:function(e,r){var t=this;this.$api.auditOrder({id:e,audit:r}).then(function(e){200===e.code?(t.$Message.success("处理成功"),t.queryOrder()):console.log(e)})},changePage:function(e){this.orderListLoading=!0,this.queryOrder(e)}}}),d=o,a=(t("5b55"),t("2877")),u=Object(a["a"])(d,n,i,!1,null,null,null);u.options.__file="shipping-record.vue";r["default"]=u.exports},b9e4:function(e,r,t){}}]);