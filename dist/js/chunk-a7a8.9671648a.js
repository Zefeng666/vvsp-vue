(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a7a8"],{5709:function(e,t,i){"use strict";var s=i("7c58"),a=i.n(s);a.a},"7c58":function(e,t,i){},e169:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("Table",{attrs:{loading:e.userListLoading,columns:e.userListColumns,data:e.userList,size:"large"}}),i("Modal",{attrs:{title:"查看用户","mask-closable":!1,width:"800","cancel-text":""},model:{value:e.modalFlag,callback:function(t){e.modalFlag=t},expression:"modalFlag"}},[i("Tabs",{attrs:{type:"card"}},[i("TabPane",{attrs:{label:"用户地址"}},[i("Table",{attrs:{columns:e.addressColumns,data:e.addressData,size:"small"}})],1),i("TabPane",{attrs:{label:"银行卡"}},[i("Table",{attrs:{columns:e.cardColumns,data:e.cardData,size:"small"}})],1),i("TabPane",{attrs:{label:"收益明细"}},[i("Table",{attrs:{columns:e.integralsColumns,data:e.userIntegrals,size:"small"}}),i("Page",{staticStyle:{"margin-top":"10px"},attrs:{total:e.integralsTotal,"page-size":8,size:"small","show-total":""},on:{"on-change":e.changePageSmall}})],1),i("TabPane",{attrs:{label:"子级用户"}},[i("Row",[i("Col",{attrs:{span:"11"}},[i("Card",{staticStyle:{width:"300px",height:"300px",overflow:"scroll"},attrs:{title:"一级用户",padding:0,shadow:""}},[i("CellGroup",[e._l(e.viewUserTree.firstUser,function(e,t){return[i("Cell",{key:t,attrs:{title:e.username}})]})],2)],1)],1),i("Col",{attrs:{span:"11",offset:"2"}},[i("Card",{staticStyle:{width:"300px",height:"300px",overflow:"scroll"},attrs:{title:"二级用户",padding:0,shadow:""}},[i("CellGroup",[e._l(e.viewUserTree.secondUser,function(e,t){return[i("Cell",{key:t,attrs:{title:e.username}})]})],2)],1)],1)],1)],1)],1)],1),i("Modal",{attrs:{title:"编辑用户","mask-closable":!1,width:"800","cancel-text":"取消"},on:{"on-ok":e.alterUser},model:{value:e.editModalFlag,callback:function(t){e.editModalFlag=t},expression:"editModalFlag"}},[i("p",{staticStyle:{"margin-bottom":"10px"}},[i("span",{staticStyle:{display:"inline-block",width:"60px"}},[e._v("用户名:")]),i("Input",{staticStyle:{width:"200px","margin-right":"10px"},attrs:{placeholder:"Enter something...",disabled:e.isEditUsername},model:{value:e.editUserObj.username,callback:function(t){e.$set(e.editUserObj,"username",t)},expression:"editUserObj.username"}}),i("a",{directives:[{name:"show",rawName:"v-show",value:e.isEditUsername,expression:"isEditUsername"}],on:{click:function(t){e.isEditUsername=!1}}},[e._v("修改")]),i("a",{directives:[{name:"show",rawName:"v-show",value:!e.isEditUsername,expression:"!isEditUsername"}],on:{click:function(t){e.alterUser(1)}}},[e._v("保存")])],1),i("p",{staticStyle:{"margin-bottom":"10px"}},[i("span",{staticStyle:{display:"inline-block",width:"60px"}},[e._v("手机号:")]),i("Input",{staticStyle:{width:"200px","margin-right":"10px"},attrs:{placeholder:"Enter something...",disabled:e.isEditPhone},model:{value:e.editUserObj.mobile,callback:function(t){e.$set(e.editUserObj,"mobile",t)},expression:"editUserObj.mobile"}}),i("a",{directives:[{name:"show",rawName:"v-show",value:e.isEditPhone,expression:"isEditPhone"}],on:{click:function(t){e.isEditPhone=!1}}},[e._v("修改")]),i("a",{directives:[{name:"show",rawName:"v-show",value:!e.isEditPhone,expression:"!isEditPhone"}],on:{click:function(t){e.alterUser(0)}}},[e._v("保存")])],1),i("p",[i("span",{staticStyle:{display:"inline-block",width:"60px"}},[e._v("增减积分:")]),i("Input",{staticStyle:{width:"200px","margin-right":"10px"},attrs:{placeholder:"Enter something...",disabled:e.isEditAmount},model:{value:e.changeAmount,callback:function(t){e.changeAmount=t},expression:"changeAmount"}}),i("a",{directives:[{name:"show",rawName:"v-show",value:e.isEditAmount,expression:"isEditAmount"}],on:{click:function(t){e.isEditAmount=!1}}},[e._v("修改")]),i("a",{directives:[{name:"show",rawName:"v-show",value:!e.isEditAmount,expression:"!isEditAmount"}],on:{click:function(t){e.alterUser(2)}}},[e._v("保存")])],1)])],1)},a=[],r=i("41cb"),n=i.n(r),l={name:"user_list_page",data:function(){var e=this;return{addressList:n.a,modalFlag:!1,editModalFlag:!1,isEditUsername:!0,isEditPhone:!0,isEditAmount:!0,userListLoading:!0,userList:[],viewUserObj:{},viewUserTree:{},editUserObj:{},changeAmount:0,userListColumns:[{title:"序号",key:"index",width:70,align:"center",render:function(e,t){return e("div",t.row._index+1)}},{title:"用户名",key:"username"},{title:"会员等级",key:"vipLevel",render:function(e,t){return 0===t.row.vipLevel?e("div","VIP"):1===t.row.vipLevel?e("div","经销商"):2===t.row.vipLevel?e("div","商务批发商"):-1===t.row.vipLevel?e("div","普通用户"):void 0}},{title:"推荐人",key:"recommendUser"},{title:"经销商",key:"recentDealer"},{title:"商务批发商",key:"recentProxy"},{title:"代理地区",key:"proxyArea"},{title:"余额",key:"withdrawAmount"},{title:"剩余库存",key:"lastQuantity"},{title:"手机号",key:"mobile"},{title:"创建时间",key:"createTime",render:function(e,t){return e("div",{},t.row.createTime.substr(0,10))}},{title:"操作",key:"action",width:180,align:"center",render:function(t,i){return t("div",[t("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.queryUserByUid(i.row.uid),e.queryUnderlingUser(i.row.uid),e.modalFlag=!0}}},"查看"),t("Button",{props:{type:"warning",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.queryUserByUid(i.row.uid),e.editModalFlag=!0}}},"编辑"),t("Button",{props:{type:"error",size:"small"},on:{click:function(){e.$Modal.confirm({title:"警告",content:"确定要删除吗？",onOk:function(){e.deleteUser(i.row.uid)}})}}},"删除")])}}],addressColumns:[{title:"联系人",key:"contact",width:150},{title:"联系电话",key:"mobile",width:150},{title:"地址",key:"address",render:function(e,t){return e("div",{},t.row.province+t.row.city+t.row.area+t.row.detail)}},{title:"是否默认",key:"default",width:100,render:function(e,t){return e("div",{},1===t.row.isDefault?"是":"否")}}],addressData:[],cardColumns:[{title:"所属银行",key:"cardKind"},{title:"卡号",key:"cardId"},{title:"持卡人",key:"cardHolder"},{title:"是否默认",key:"default",width:100,render:function(e,t){return e("div",{},1===t.row.isDefault?"是":"否")}}],cardData:[],integralsColumns:[{title:"类型",key:"changeType"},{title:"积分变化",key:"integralNum"},{title:"详情",key:"changeDetail"},{title:"时间",key:"createTime",render:function(e,t){return e("div",t.row.createTime.substring(0,10)+" "+t.row.createTime.substring(11,16))}}],userIntegrals:[],integralsTotal:0}},methods:{showModal:function(){this.modalVisible=!0},queryNewUser:function(e){var t=this;this.$api.queryNewUser({}).then(function(e){200===e.code?(t.userList=e.data.users,t.userListLoading=!1):console.log(e)})},queryUserByUid:function(e){var t=this;this.$api.queryUserByUid({uid:e}).then(function(e){200===e.code?(t.viewUserObj=e.data.userInfo,t.editUserObj=e.data.userInfo.user,t.addressData=e.data.userInfo.userAddress,t.cardData=e.data.userInfo.userBankCard,t.queryIntegrals()):console.log(e)})},queryUnderlingUser:function(e){var t=this;this.$api.queryUnderlingUser({uid:e}).then(function(e){200===e.code?t.viewUserTree=e.data:console.log(e)})},queryIntegrals:function(e){var t=this;this.$api.queryIntegrals({uid:this.viewUserObj.user.uid,pageNo:e||1,pageSize:8}).then(function(e){200===e.code?(t.userIntegrals=e.data.items,t.integralsTotal=e.data.totalCount):console.log(e)})},alterUser:function(e){var t=this,i="";0===e?(i=this.editUserObj.mobile,this.isEditPhone=!0):1===e?(i=this.editUserObj.username,this.isEditUsername=!0):2===e&&(i=this.changeAmount,this.isEditAmount=!0),this.$api.alterUser({alterType:e,text:i,uid:this.editUserObj.uid}).then(function(e){200===e.code?t.$Message.success("修改成功!"):t.$Message.error(e.message)})},deleteUser:function(e){var t=this;this.$api.deleteUser({uid:e}).then(function(e){200===e.code?(t.$Message.success("删除成功!"),t.queryUser()):console.log(e)})},changePage:function(e){this.userListLoading=!0,this.queryUser(e)},changePageSmall:function(e){this.queryIntegrals(e)}},created:function(){this.queryNewUser()}},o=l,d=(i("5709"),i("2877")),u=Object(d["a"])(o,s,a,!1,null,null,null);u.options.__file="user-new.vue";t["default"]=u.exports}}]);