(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a8b"],{9713:function(t,e,i){},addd:function(t,e,i){"use strict";var o=i("9713"),r=i.n(o);r.a},b289:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Button",{staticStyle:{"margin-bottom":"16px"},attrs:{type:"warning"},on:{click:t.toInsert}},[t._v("新增商品")]),i("Table",{attrs:{loading:t.orderListLoading,columns:t.orderColumns,data:t.orderData,size:"large"}}),i("Page",{staticStyle:{"margin-top":"10px"},attrs:{total:t.totalCount,"show-total":""},on:{"on-change":t.changePage}}),i("Modal",{attrs:{title:"查看图片"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[t.visible?i("img",{staticStyle:{width:"100%"},attrs:{src:t.showLargeImgSrc}}):t._e()])],1)},r=[],n=(i("28a5"),i("cadf"),i("551c"),i("097d"),{name:"goods_list_page",data:function(){var t=this;return{totalCount:0,orderListLoading:!0,visible:!1,showLargeImgSrc:"",orderColumns:[{title:"序号",key:"id",width:70,align:"center"},{title:"商品名",key:"name",align:"center"},{title:"图片",key:"photo",align:"center",render:function(e,i){return e("div",[e("img",{attrs:{src:i.row.url},style:{height:"50px",width:"80px",marginTop:"8px",border:"1px solid #ccc"},on:{click:function(){t.showLargeImgSrc=i.row.url,t.visible=!0}}})])}},{title:"简介",key:"detail"},{title:"拿货价格",key:"price",render:function(e,i){return e("div",[e("p",{style:{},on:{click:function(){t.showLargeImgSrc=i.row.url,t.visible=!0}}},"VIP："+i.row.vipPriceDetail.split(";")[0].split(":")[1]),e("p",{style:{},on:{click:function(){t.showLargeImgSrc=i.row.url,t.visible=!0}}},"经销商："+i.row.vipPriceDetail.split(";")[1].split(":")[1]),e("p",{style:{},on:{click:function(){t.showLargeImgSrc=i.row.url,t.visible=!0}}},"总代理："+i.row.vipPriceDetail.split(";")[2].split(":")[1])])}},{title:"操作",key:"action",width:150,align:"center",render:function(e,i){return e("div",[e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){console.log(i.row),t.$router.push({name:"goods_edit_page",query:i.row})}}},"编辑"),e("Button",{props:{type:"error",size:"small"},on:{click:function(){t.$Modal.confirm({title:"警告",content:"确定下架此商品吗？",onOk:function(){t.cancelProduct(i.row.productId)}})}}},"下架")])}}],orderData:[]}},created:function(){this.queryAllProducts()},methods:{queryAllProducts:function(t){var e=this;this.$api.queryAllProducts({pageNo:t||1,pageSize:10}).then(function(t){200===t.code?(e.orderData=t.data.items,e.totalCount=t.data.totalCount,e.orderListLoading=!1):console.log(t)})},cancelProduct:function(t){var e=this;this.$api.cancelProduct({productId:t}).then(function(t){200===t.code?(e.$Message.success("操作成功"),e.queryAllProducts()):e.$Message.error(t.message)})},changePage:function(t){this.orderListLoading=!0,this.queryAllProducts(t)},toInsert:function(){this.$router.push({name:"goods_edit_page"})}}}),a=n,l=(i("addd"),i("2877")),s=Object(l["a"])(a,o,r,!1,null,null,null);s.options.__file="goods-list.vue";e["default"]=s.exports}}]);