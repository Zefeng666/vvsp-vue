(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7daa"],{3778:function(e,t,o){"use strict";var r=o("b61f"),n=o.n(r);n.a},"55aa":function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("Form",{attrs:{model:e.formItem,"label-width":80}},[o("FormItem",{attrs:{label:"商品名称"}},[o("Input",{staticStyle:{width:"300px"},attrs:{placeholder:"Enter something..."},model:{value:e.formItem.name,callback:function(t){e.$set(e.formItem,"name",t)},expression:"formItem.name"}})],1),o("FormItem",{attrs:{label:"商品图片"}},[o("Upload",{attrs:{"before-upload":e.handleUpload,action:"http://upload.qiniup.com/",data:{token:e.qnToken},"on-success":e.uploadSuccess}},[o("Button",{attrs:{icon:"ios-cloud-upload-outline"}},[e._v("选择图片")])],1),o("img",{directives:[{name:"show",rawName:"v-show",value:e.formItem.url,expression:"formItem.url"}],staticClass:"goods-img",attrs:{src:e.formItem.url}})],1),o("FormItem",{attrs:{label:"商品价格"}},[e._v("\n          VIP价格:\n          "),o("Input",{staticStyle:{width:"100px"},attrs:{placeholder:""},model:{value:e.formItem.vipPrice,callback:function(t){e.$set(e.formItem,"vipPrice",t)},expression:"formItem.vipPrice"}}),e._v(" 元/件   \n          经销商价格:\n          "),o("Input",{staticStyle:{width:"100px"},attrs:{placeholder:""},model:{value:e.formItem.dealerPrice,callback:function(t){e.$set(e.formItem,"dealerPrice",t)},expression:"formItem.dealerPrice"}}),e._v(" 元/件   \n          总代理价格:\n          "),o("Input",{staticStyle:{width:"100px"},attrs:{placeholder:""},model:{value:e.formItem.proxyPrice,callback:function(t){e.$set(e.formItem,"proxyPrice",t)},expression:"formItem.proxyPrice"}}),e._v(" 元/件\n      ")],1),o("FormItem",{attrs:{label:"商品简介"}},[o("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"Enter something..."},model:{value:e.formItem.detail,callback:function(t){e.$set(e.formItem,"detail",t)},expression:"formItem.detail"}})],1),o("FormItem",[o("Button",{attrs:{type:"primary"},nativeOn:{click:function(t){return e.submit(t)}}},[e._v("提交")]),o("Button",{directives:[{name:"show",rawName:"v-show",value:!e.formItem.productId,expression:"!formItem.productId"}],staticStyle:{"margin-left":"8px"},nativeOn:{click:function(t){return e.clearForm(t)}}},[e._v("重置")])],1)],1)],1)},n=[],a=(o("cadf"),o("551c"),o("097d"),{name:"goods_edit_page",data:function(){return{qnToken:"",formItem:{name:"",url:"",detail:"",vipPrice:"",dealerPrice:"",proxyPrice:""}}},created:function(){this.getQnToken(),this.$route.query.productId&&(this.formItem=this.$route.query)},mounted:function(){},methods:{getQnToken:function(){var e=this;this.$api.getQnToken({}).then(function(t){200===t.code&&(e.qnToken=t.data.token)})},insertProduct:function(){var e=this;this.$api.insertProduct(this.formItem).then(function(t){200===t.code?(e.$Message.success("编辑成功"),e.$router.push({name:"goods_list_page"})):e.$Message.error(t.message)})},alterProduct:function(){var e=this;this.$api.alterProduct(this.formItem).then(function(t){200===t.code?(e.$Message.success("编辑成功"),e.$router.push({name:"goods_list_page"})):e.$Message.error(t.message)})},handleUpload:function(e){},uploadSuccess:function(e,t,o){this.formItem.url="http://image.tlong.tv/"+e.key},submit:function(){this.$route.query.productId?this.alterProduct():this.insertProduct()},clearForm:function(){this.formItem={}}}}),i=a,s=(o("3778"),o("2877")),c=Object(s["a"])(i,r,n,!1,null,"6ea2c781",null);c.options.__file="goods-edit.vue";t["default"]=c.exports},b61f:function(e,t,o){}}]);