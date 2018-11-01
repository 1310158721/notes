webpackJsonp([8],{chQJ:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("O6AN"),s=i("9s/b"),n={mounted:function(){this.getList()},data:function(){return{tabs:[{name:"1",label:"ES5"},{name:"2",label:"ES6"},{name:"3",label:"all"},{name:"4",label:"图表展示"}],listPostData:{currentPage:1,currentSize:10},rules:{title:[{required:!0,message:"标题不能为空白",trigger:"blur"},{min:0,message:"内容不能为空白",trigger:"blur"}],content:[{required:!0,message:"内容不能为空白",trigger:"blur"}]},listInfo:null,addAlert:!1,addPostData:{type:"1",title:"",content:""},delAlert:!1,delId:"",editAlert:!1,editPostData:{type:"",title:"",content:""},editId:"",tableData:null,chartsData:[]}},methods:{getList:function(){var t=this;Object(a.a)("/canvasGetList",this.listPostData).then(function(e){if(200===e.data.code&&(t.listInfo=e.data.body,"4"===t.listPostData.type&&t.listInfo)){t.tableData=t.screenToObject(t.listInfo.records),t.chartsData=t.screenToArray(t.listInfo.records);Object(s.a)("main",t.chartsData,["内部模块","外部模块","所有模块"])}})},addListItem:function(){var t=this;Object(a.b)("/canvasAddItem",this.addPostData).then(function(e){200===e.data.code&&(t.addAlert=!1,t.getList())})},delListItem:function(t){var e=this;Object(a.a)("/canvasDelItem",{_id:t}).then(function(t){200===t.data.code?(e.$message.success(t.data.message),e.delAlert=!1,e.getList()):e.$message.error(t.data.message)})},getSingleItem:function(t){var e=this;Object(a.a)("/canvasSingleItem",{_id:t}).then(function(i){200===i.data.code&&(e.editPostData.type=i.data.body[0].type,e.editPostData.title=i.data.body[0].title,e.editPostData.content=i.data.body[0].content,e.editAlert=!0,e.editId=t)})},editListItem:function(t){var e=this;Object(a.b)("/canvasEditItem",{_id:t,title:this.editPostData.title,content:this.editPostData.content,type:this.editPostData.type}).then(function(t){200===t.data.code&&(e.getList(),e.editAlert=!1)})},handleSizeChange:function(t){this.listPostData.currentSize=t,this.getList()},handleCurrentChange:function(t){this.listPostData.currentPage=t,this.getList()},addItem:function(){this.addPostData.title="",this.addPostData.content="",this.addAlert=!0},addHandleClose:function(){this.addResetForm("ruleForm"),this.addAlert=!1},addRresetForm:function(t){this.$refs[t].resetFields()},addResetForm:function(t){this.$refs[t].resetFields()},addSubmitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;e.addListItem()})},delItem:function(t){this.delId=t,this.delAlert=!0},delSure:function(){this.delListItem(this.delId)},editItem:function(t){this.getSingleItem(t)},editHandleClose:function(){this.editResetForm("edit_ruleForm"),this.editAlert=!1,this.editPostData.tpye="",this.editPostData.title="",this.editPostData.content=""},editSubmitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;e.editListItem(e.editId)})},editResetForm:function(t){this.$refs[t].resetFields()},editReset:function(t){this.editResetForm(t),this.editPostData.tpye="",this.editPostData.title="",this.editPostData.content=""},screenToArray:function(t){if(0===t.length)return[];var e=t.filter(function(t){return"1"===t.type}).length,i=t.filter(function(t){return"2"===t.type}).length;return[e,i,e+i]},screenToObject:function(t){if(0===t.length)return[];var e=t.filter(function(t){return"1"===t.type}).length,i=t.filter(function(t){return"2"===t.type}).length;return[{type1:e,type2:i,type3:e+i}]}},watch:{"listPostData.type":function(){this.getList()}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container_wrapper"},[i("p",{staticClass:"page-title"},[t._v("canvas 使用总结")]),t._v(" "),i("div",{staticClass:"add-wrap rel mb14",staticStyle:{height:"32px"}},[i("el-button",{staticClass:"addBtn",attrs:{type:"primary",size:"small"},on:{click:function(e){return e.stopPropagation(),t.addItem(e)}}},[t._v("添加")])],1),t._v(" "),i("el-card",{staticClass:"box-card card"},[t.listInfo?i("div",[i("el-collapse",{attrs:{accordion:""}},t._l(t.listInfo.records,function(e,a){return i("el-collapse-item",{key:a},[i("template",{slot:"title"},[i("div",{staticClass:"wrap rel"},[i("div",{staticStyle:{width:"10%"}},[t._v(t._s(e.id)+".")]),t._v(" "),i("div",{staticStyle:{width:"40%"}},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticStyle:{width:"30%"}},[t._v(t._s(t._f("formatDate")(e.date)))]),t._v(" "),i("div",{staticClass:"abs",staticStyle:{width:"127px",right:"40px"}},[i("el-button",{staticClass:"editBtn",attrs:{type:"primary",size:"mini"},on:{click:function(i){i.stopPropagation(),t.editItem(e._id)}}},[t._v("修改")]),t._v(" "),i("el-button",{staticClass:"delBtn",attrs:{type:"primary",size:"mini"},on:{click:function(i){i.stopPropagation(),t.delItem(e._id)}}},[t._v("删除")])],1)])]),t._v(" "),i("pre",{domProps:{textContent:t._s(e.content)}})],2)})),t._v(" "),i("div",{staticClass:"rel mt28 pagination-wrap"},[i("el-pagination",{staticClass:"pagination",attrs:{"current-page":t.listInfo.currentPage,"page-sizes":[10,20,50,100],"page-size":t.listInfo.currentSize,layout:"total, sizes, prev, pager, next, jumper",total:t.listInfo.totalrecord},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1):i("p",[t._v("该类型暂无数据")])]),t._v(" "),i("div",{staticClass:"alert_wrapper"},[i("el-dialog",{attrs:{title:"添加列表item",visible:t.addAlert,"before-close":t.addHandleClose,width:"50%"},on:{"update:visible":function(e){t.addAlert=e}}},[i("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.addPostData,rules:t.rules,"label-width":"100px"}},[i("el-form-item",{attrs:{label:"标题",prop:"title"}},[i("el-input",{model:{value:t.addPostData.title,callback:function(e){t.$set(t.addPostData,"title",e)},expression:"addPostData.title"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"内容",prop:"content"}},[i("el-input",{attrs:{type:"textarea",rows:"15"},model:{value:t.addPostData.content,callback:function(e){t.$set(t.addPostData,"content",e)},expression:"addPostData.content"}})],1),t._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.addSubmitForm("ruleForm")}}},[t._v("立即添加")]),t._v(" "),i("el-button",{on:{click:function(e){t.addRresetForm("ruleForm")}}},[t._v("重置")])],1)],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"确定删除吗？",visible:t.delAlert,width:"50%"},on:{"update:visible":function(e){t.delAlert=e}}},[i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"mini"},on:{click:function(e){t.delAlert=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.delSure}},[t._v("确 定")])],1)]),t._v(" "),i("el-dialog",{attrs:{title:"修改列表item",visible:t.editAlert,"before-close":t.editHandleClose,width:"50%"},on:{"update:visible":function(e){t.editAlert=e}}},[i("el-form",{ref:"edit_ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.editPostData,rules:t.rules,"label-width":"100px"}},[i("el-form-item",{attrs:{label:"标题",prop:"title"}},[i("el-input",{model:{value:t.editPostData.title,callback:function(e){t.$set(t.editPostData,"title",e)},expression:"editPostData.title"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"内容",prop:"content"}},[i("el-input",{attrs:{type:"textarea",rows:"15"},model:{value:t.editPostData.content,callback:function(e){t.$set(t.editPostData,"content",e)},expression:"editPostData.content"}})],1),t._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.editSubmitForm("edit_ruleForm")}}},[t._v("修改")]),t._v(" "),i("el-button",{on:{click:function(e){t.editReset("edit_ruleForm")}}},[t._v("重置")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var o=i("C7Lr")(n,l,!1,function(t){i("tDAq")},"data-v-350b914a",null);e.default=o.exports},tDAq:function(t,e){}});
//# sourceMappingURL=8.c17e15a9389125cdc4bd.js.map