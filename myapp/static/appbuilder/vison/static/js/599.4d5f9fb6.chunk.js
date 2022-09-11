"use strict";(self.webpackChunkvite_ml_platform=self.webpackChunkvite_ml_platform||[]).push([[599],{60238:function(e,n,t){var a=t(67487),s="http://11.187.53.46:8080/api";n.Z={query_abtests:function(e){return a.Z.post({url:"".concat(s,"/query_abtests"),data:e})},query_edge_factorys:function(e){return a.Z.post({url:"".concat(s,"/query_edge_factorys"),data:e})},delete_edge_factory:function(e){return a.Z.post({url:"".concat(s,"/delete_edge_factory"),data:e})},query_structs:function(e){return a.Z.post({url:"".concat(s,"/query_structs"),data:e})},delete_struct:function(e){return a.Z.post({url:"".concat(s,"/delete_struct"),data:e})},query_associated_nodes:function(e){return a.Z.post({url:"".concat(s,"/query_associated_nodes"),data:e})},mod_struct:function(e){return a.Z.post({url:"".concat(s,"/mod_struct"),data:e})},add_struct:function(e){return a.Z.post({url:"".concat(s,"/add_struct"),data:e})},query_scenes:function(e){return a.Z.post({url:"".concat(s,"/query_scenes"),data:e})},query_associated_graphs:function(e){return a.Z.post({url:"".concat(s,"/query_associated_graphs"),data:e})},add_scene:function(e){return a.Z.post({url:"".concat(s,"/add_scene"),data:e})},mod_scene:function(e){return a.Z.post({url:"".concat(s,"/mod_scene"),data:e})},query_graph_templates:function(e){return a.Z.post({url:"".concat(s,"/query_graph_templates"),data:e})},query_components:function(e){return a.Z.post({url:"".concat(s,"/query_components"),data:e})},delete_component:function(e){return a.Z.post({url:"".concat(s,"/delete_component"),data:e})},query_component_historys:function(e){return a.Z.post({url:"".concat(s,"/query_component_historys"),data:e})},get_scene_names:function(e){return a.Z.post({url:"".concat(s,"/get_scene_names"),data:e})},get_scene_available_graphs:function(e){return a.Z.post({url:"".concat(s,"/get_scene_available_graphs"),data:e})},mod_abtest:function(e){return a.Z.post({url:"".concat(s,"/mod_abtest"),data:e})},add_abtest:function(e){return a.Z.post({url:"".concat(s,"/add_abtest"),data:e})},query_graphs:function(e){return a.Z.post({url:"".concat(s,"/query_graphs"),data:e})},get_graph_template_names:function(e){return a.Z.post({url:"".concat(s,"/get_graph_template_names"),data:e})},batch_query_components:function(e){return a.Z.post({url:"".concat(s,"/batch_query_components"),data:e})},query_graph_historys:function(e){return a.Z.post({url:"".concat(s,"/query_graph_historys"),data:e})},query_template_available_node_factorys:function(e){return a.Z.post({url:"".concat(s,"/query_template_available_node_factorys"),data:e})},get_edge_factory_names:function(e){return a.Z.post({url:"".concat(s,"/get_edge_factory_names"),data:e})},get_node_factory_names:function(e){return a.Z.post({url:"".concat(s,"/get_node_factory_names"),data:e})},query_node_factorys:function(e){return a.Z.post({url:"".concat(s,"/query_node_factorys"),data:e})},mod_graph:function(e){return a.Z.post({url:"".concat(s,"/mod_graph"),data:e})},add_graph:function(e){return a.Z.post({url:"".concat(s,"/add_graph"),data:e})},get_config_prototype:function(e){return a.Z.post({url:"".concat(s,"/get_config_prototype"),data:e})},rollback_graph:function(e){return a.Z.post({url:"".concat(s,"/rollback_graph"),data:e})}}},22599:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var a=t(18489),s=t(50678),r=t(72791),i=t(23695),l=t(83099),c=t(47528),o=t(64564),d=t(87309),u=t(618),m=t(48757),p=t(99154),_=t(58105),f=t(20135),h=t(58646),Z=t(66106),g=t(30914),x=t(79286),y=t(60238),v=t(80184),b=(_.Z.Option,f.Z.TextArea);function j(e){var n=h.Z.useForm(),t=(0,s.Z)(n,1)[0],a=(0,r.useState)([]),l=(0,s.Z)(a,2),c=l[0],o=l[1];(0,r.useEffect)((function(){e.form.scene_name&&e.scene_nameChange(e.form.scene_name),t.resetFields(),t.setFieldsValue(e.form)}),[e.form]);return(0,v.jsxs)(h.Z,{form:t,name:"dynamic_form_nest_item",className:"abtset-form",labelAlign:"left",labelCol:{span:5},onFinish:function(n){var t={abtest_name:n.abtest_name,bussiness_id:n.bussiness_id,channel_id:n.channel_id,module_id:n.module_id,scene_name:n.scene_name,client_version:n.client_version,status:1,admin:n.admin,des:n.des,config:n.config?JSON.stringify(n.config):[],associated_graphs:n.config?JSON.stringify(n.config.map((function(e){return{graph_name:e.graph_name,version:e.version}}))):[]};e.form.version?(t.version=e.form.version+1,y.Z.mod_abtest({opr:"mod_abtest",data:t}).then((function(n){console.log(n),0===n.status?(i.ZP.success(n.message),e.resFied()):i.ZP.error(n.message)}))):(t.version=1,y.Z.add_abtest({opr:"add_abtest",data:t}).then((function(n){0===n.status?(i.ZP.success(n.message),e.resFied()):i.ZP.error(n.message)})))},autoComplete:"off",children:[(0,v.jsxs)(Z.Z,{gutter:10,children:[(0,v.jsx)(g.Z,{span:13,children:(0,v.jsx)(h.Z.Item,{name:"abtest_name",label:"ABTest\u540d",rules:[{required:!0,message:"\u8bf7\u8f93\u5165ABTest\u540d"}],children:(0,v.jsx)(f.Z,{disabled:!1===e.isadd})})}),(0,v.jsx)(g.Z,{span:13,children:(0,v.jsx)(h.Z.Item,{name:"bussiness_id",label:"\u4e1a\u52a1id",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4e1a\u52a1id"}],children:(0,v.jsx)(f.Z,{disabled:!1===e.isadd})})}),(0,v.jsx)(g.Z,{span:13,children:(0,v.jsx)(h.Z.Item,{name:"channel_id",label:"\u9891\u9053id",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u9891\u9053id"}],children:(0,v.jsx)(f.Z,{disabled:!1===e.isadd})})}),(0,v.jsx)(g.Z,{span:13,children:(0,v.jsx)(h.Z.Item,{name:"module_id",label:"\u6a21\u5757id",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6a21\u5757id"}],children:(0,v.jsx)(f.Z,{disabled:!1===e.isadd})})}),(0,v.jsx)(g.Z,{span:13,children:(0,v.jsx)(h.Z.Item,{name:"client_version",label:"\u5ba2\u6237\u7aef\u7248\u672c",children:(0,v.jsx)(f.Z,{disabled:!1===e.isadd})})}),(0,v.jsx)(g.Z,{span:13,children:(0,v.jsx)(h.Z.Item,{name:"scene_name",label:"\u573a\u666f",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8d1f\u8d23\u4eba"}],children:(0,v.jsx)(_.Z,{disabled:!1===e.isadd,onChange:function(n){var a=t.getFieldValue("config");console.log(a),a.forEach((function(e){e.graph_name="",e.version=""})),t.setFieldsValue({config:a}),e.scene_nameChange(n)},children:e.sceneArr.map((function(e,n){return(0,v.jsx)(_.Z.Option,{value:e,children:e},n)}))})})}),(0,v.jsx)(g.Z,{span:13,children:(0,v.jsx)(h.Z.Item,{name:"admin",label:"\u8d1f\u8d23\u4eba",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8d1f\u8d23\u4eba"}],children:(0,v.jsx)(f.Z,{disabled:!1===e.isadd})})}),(0,v.jsxs)(g.Z,{span:24,children:[(0,v.jsxs)(Z.Z,{style:{width:"100%"},children:[(0,v.jsx)(g.Z,{span:4,children:(0,v.jsx)("div",{className:"config-title",children:"\u53c2\u6570\u540d"})}),(0,v.jsx)(g.Z,{span:4,children:(0,v.jsx)("div",{className:"config-title",children:"\u53c2\u6570\u503c"})}),(0,v.jsx)(g.Z,{span:4,children:(0,v.jsx)("div",{className:"config-title",children:"\u53ec\u56de\u56fe\u540d"})}),(0,v.jsx)(g.Z,{span:4,children:(0,v.jsx)("div",{className:"config-title",children:"\u7248\u672c"})})]}),(0,v.jsx)(h.Z.List,{name:"config",children:function(n,a){var s=a.add,r=a.remove;return(0,v.jsxs)(v.Fragment,{children:[n.map((function(n,a){return(0,v.jsxs)(Z.Z,{style:{width:"100%"},children:[(0,v.jsx)(g.Z,{span:4,children:(0,v.jsx)(h.Z.Item,{className:"config-item",name:[n.name,"param_name"],rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u53c2\u6570\u540d"}],children:(0,v.jsx)(f.Z,{placeholder:"\u8bf7\u8f93\u5165",disabled:!1===e.isadd})})}),(0,v.jsx)(g.Z,{span:4,children:(0,v.jsx)(h.Z.Item,{className:"config-item",name:[n.name,"param_value"],rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u53c2\u6570\u503c"}],children:(0,v.jsx)(f.Z,{disabled:!1===e.isadd,placeholder:"\u8bf7\u8f93\u5165"})})}),(0,v.jsx)(g.Z,{span:4,children:(0,v.jsx)(h.Z.Item,{className:"config-item",name:[n.name,"graph_name"],rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u53ec\u56de\u56fe\u540d"}],children:(0,v.jsx)(_.Z,{placeholder:"\u8bf7\u9009\u62e9",disabled:!1===e.isadd,onChange:function(){var n;console.log(t.getFieldValue("config"),a),n=t.getFieldValue("config")[a].graph_name,e.chartArr.arr&&o(e.chartArr.arr[n])},children:e.chartArr&&e.chartArr.graphArr.map((function(e){return(0,v.jsx)(_.Z.Option,{value:e,children:e},e)}))})})}),(0,v.jsx)(g.Z,{span:4,children:(0,v.jsx)(h.Z.Item,{className:"config-item",name:[n.name,"version"],rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u7248\u672c"}],children:(0,v.jsx)(_.Z,{placeholder:"\u8bf7\u9009\u62e9",disabled:!1===e.isadd,children:c?c.map((function(e){return(0,v.jsx)(_.Z.Option,{value:e,children:e},e)})):null})})}),(0,v.jsx)(g.Z,{span:4,children:(0,v.jsx)(h.Z.Item,{className:"config-item",children:(0,v.jsx)(d.Z,{disabled:!1===e.isadd,style:{marginLeft:"10px"},onClick:function(){r(n.name)},children:"\u5220\u9664"})})})]},n.key)})),(0,v.jsx)(h.Z.Item,{children:(0,v.jsx)(d.Z,{disabled:!1===e.isadd,style:{margin:"10px 0px",width:"66.7%"},type:"dashed",onClick:function(){return s()},block:!0,icon:(0,v.jsx)(x.Z,{}),children:"\u589e\u52a0"})})]})}})]}),(0,v.jsx)(g.Z,{span:13,children:(0,v.jsx)(h.Z.Item,{name:"des",label:"\u63cf\u8ff0",children:(0,v.jsx)(b,{disabled:!1===e.isadd,rows:4})})})]}),e.isadd?(0,v.jsx)(h.Z.Item,{children:(0,v.jsx)(d.Z,{type:"primary",htmlType:"submit",children:"\u63d0\u4ea4"})}):null]})}var k={abtest_name:"",bussiness_id:"",channel_id:"",module_id:"",client_version:"",admin:"",status:"",scene_name:"",time:""},q=[{type:"input",name:"abtest_name",label:"ABTest\u540d"},{type:"input",name:"bussiness_id",label:"\u4e1a\u52a1id"},{type:"input",name:"channel_id",label:"\u9891\u9053id"},{type:"input",name:"module_id",label:"\u6a21\u5757id"},{type:"input",name:"client_version",label:"\u5ba2\u6237\u7aef\u7248\u672c"},{type:"input",name:"admin",label:"\u8d1f\u8d23\u4eba"},{type:"select",name:"status",label:"\u72b6\u6001",options:[{value:-1,label:"\u5931\u6548"},{value:0,label:"\u6709\u6548"},{value:1,label:"\u521b\u5efa\u6210\u529f"},{value:2,label:"\u6d4b\u8bd5\u53d1\u5e03"},{value:3,label:"\u6b63\u5f0f\u53d1\u5e03"},{value:4,label:"\u516c\u6709"},{value:5,label:"\u79c1\u6709"}]},{type:"input",name:"scene_name",label:"\u573a\u666f"},{type:"rangePicker",name:"time",label:"\u66f4\u65b0\u65f6\u95f4"}],I=t(17097),C=t(79271);function A(){var e=(0,r.useState)(!1),n=(0,s.Z)(e,2),t=n[0],_=n[1],f=(0,r.useState)([]),h=(0,s.Z)(f,2),Z=h[0],g=h[1],x=(0,r.useState)([]),b=(0,s.Z)(x,2),A=b[0],w=b[1],P=(0,r.useState)([]),F=(0,s.Z)(P,2),S=F[0],T=F[1],N=(0,r.useState)({graphArr:[],arr:[]}),O=(0,s.Z)(N,2),z=O[0],E=O[1],B=(0,r.useState)({}),V=(0,s.Z)(B,2),G=V[0],R=V[1],L=(0,r.useState)(!1),D=(0,s.Z)(L,2),J=D[0],Q=D[1],M=(0,r.useState)(!1),H=(0,s.Z)(M,2),W=H[0],K=H[1],U=(0,C.k6)(),X=[{title:"#",render:function(e,n,t){return(0,v.jsx)("a",{children:t+1+""})}},{title:"\u56fe\u540d\u79f0",dataIndex:"graph_name",key:"graph_name"},{title:"\u7248\u672c",dataIndex:"version",key:"version"},{title:"\u56fe\u6a21\u677f",dataIndex:"template_name",key:"template_name"},{title:"\u8d1f\u8d23\u4eba",dataIndex:"admin",key:"admin"},{title:"\u63cf\u8ff0",dataIndex:"des",key:"des"},{title:"\u66f4\u65b0\u65f6\u95f4",dataIndex:"updated_time",key:"updated_time"},{title:"\u4f7f\u7528\u573a\u666f",dataIndex:"scene_name",key:'"scene_name'},{title:"\u64cd\u4f5c",key:"action",render:function(e,n){return(0,v.jsx)(l.Z,{size:"middle",children:(0,v.jsx)("a",{onClick:function(){U.push({pathname:"/HeterogeneousPlatform/componentsAdmin/chartAdmin",state:(0,a.Z)({},n)})},children:"\u67e5\u770b"},"view")})}}],Y=[{title:"#",render:function(e,n,t){return(0,v.jsx)("a",{children:t+1+""})}},{title:"ABTest\u540d",fType:"input",dataIndex:"abtest_name",key:"abtest_name"},{title:"\u4e1a\u52a1id",fType:"input",dataIndex:"bussiness_id",key:"bussiness_id"},{title:"\u9891\u9053id",fType:"input",dataIndex:"channel_id",key:'"channel_id'},{title:"\u6a21\u5757id",fType:"textArea",dataIndex:"module_id",key:"module_id"},{title:"\u5ba2\u6237\u7aef\u7248\u672c",fType:"textArea",dataIndex:"client_version",key:"client_version"},{title:"\u8d1f\u8d23\u4eba",fType:"textArea",dataIndex:"admin",key:"admin"},{title:"\u72b6\u6001",fType:"textArea",dataIndex:"status",key:"status",render:function(e){return(0,v.jsx)(c.Z,{color:I.a[e]?I.a[e]:"",children:I.Q[e]?I.Q[e]:""})}},{title:"\u573a\u666f",fType:"textArea",dataIndex:"scene_name",key:"scene_name"},{title:"\u66f4\u65b0\u65f6\u95f4",dataIndex:"updated_time",key:"updated_time"},{title:"\u64cd\u4f5c",key:"action",render:function(e,n){return(0,v.jsxs)(l.Z,{size:"middle",children:[(0,v.jsx)("a",{onClick:function(){console.log(n);var e=[];if(n.config){var t=JSON.parse(n.config);for(var s in t)e.push({param_name:t[s].param_name,param_value:t[s].param_value,graph_name:t[s].graph_name,version:t[s].version})}var r=(0,a.Z)((0,a.Z)({abtest_name:n.abtest_name,bussiness_id:n.bussiness_id,channel_id:n.channel_id,module_id:n.module_id,client_version:n.client_version,status:n.status,admin:n.admin},n),{},{config:e});Q(!1),R(r),_(!0)},children:"\u67e5\u770b"},"view"),(0,v.jsx)("span",{style:{color:"#999",marginTop:"-1px"},children:" | "}),(0,v.jsx)("a",{onClick:function(){var e=[];if(n.config){var t=JSON.parse(n.config);for(var s in t)e.push({param_name:t[s].param_name,param_value:t[s].param_value,graph_name:t[s].graph_name,version:t[s].version})}var r=(0,a.Z)((0,a.Z)({abtest_name:n.abtest_name,bussiness_id:n.bussiness_id,channel_id:n.channel_id,module_id:n.module_id,client_version:n.client_version,status:n.status,admin:n.admin,version:n.version},n),{},{config:e});console.log(n),Q(!0),R(r),_(!0)},children:"\u7f16\u8f91"},"edit"),(0,v.jsx)("span",{style:{color:"#999",marginTop:"-1px"},children:" | "}),(0,v.jsx)("a",{onClick:function(){!function(e){var n={opr:"query_associated_graphs",data:{associated_graphs:e.associated_graphs}};y.Z.query_associated_graphs(n).then((function(e){console.log(e),0===e.status?(w(e.data.results),K(!0),i.ZP.success(e.message)):i.ZP.error(e.message)}))}(n)},children:" \u5173\u8054\u56fe "},"node")]})}}],$=Y.filter((function(e){return e.fType})).map((function(e){return{type:e.fType,name:e.dataIndex,label:e.title}})),ee=function(e){console.log(e);var n=e.admin,t=e.abtest_name,a=e.channel_id,s=e.time,r=e.bussiness_id,l=e.module_id,c=e.client_version,o=e.scene_name,d={abtest_name:t||"",bussiness_id:r||"",channel_id:a||"",module_id:l||"",client_version:c||"",status:status||0,scene_name:o||"",admin:n||"",min_updated_time:s&&s[0]?new Date(s[0]).getTime():0,max_updated_time:s&&s[1]?new Date(s[1]).getTime():0};y.Z.query_abtests({opr:"query_abtests",data:d}).then((function(e){0===e.status?(g(e.data.results),i.ZP.success(e.message)):i.ZP.error(e.message)}))};(0,r.useEffect)((function(){ee({}),y.Z.get_scene_names({opr:"get_scene_names"}).then((function(e){0===e.status?T(e.data.scene_names):i.ZP.error(e.message)}))}),[]);return(0,v.jsxs)("div",{style:{padding:"30px 40px"},children:[(0,v.jsxs)("div",{children:[(0,v.jsx)(o.Z,{title:"\u67e5\u8be2\u6761\u4ef6",children:(0,v.jsx)(p.Z,{formRolue:q,form:k,queryList:ee})}),(0,v.jsx)(o.Z,{title:"\u67e5\u8be2\u7ed3\u679c",extra:(0,v.jsx)(d.Z,{type:"primary",onClick:function(){return Q(!0),R({name:""}),void _(!0)},children:"\u65b0\u589e"}),style:{marginTop:"20px"},children:(0,v.jsx)(u.Z,{columns:Y,dataSource:Z},"bussiness_id")})]}),(0,v.jsx)(m.Z,{width:900,title:J?J&&G.version?"\u7f16\u8f91":"\u65b0\u589e":"\u67e5\u770b",afterClose:function(){R({})},visible:t,onCancel:function(){_(!1)},footer:[(0,v.jsx)(d.Z,{onClick:function(){_(!1)},children:"\u5173\u95ed"},"back")],children:(0,v.jsx)(j,{scene_nameChange:function(e){y.Z.get_scene_available_graphs({opr:"get_scene_available_graphs",data:{scene_name:e}}).then((function(e){if(0===e.status){var n={graphArr:Object.keys(e.data.results),arr:e.data.results};E(n)}else E({graphArr:[],arr:[]}),i.ZP.error(e.message)}))},formRolue:$,form:G,chartArr:z,isadd:J,showEdit:t,sceneArr:S,submitForm:function(e){var n=(0,a.Z)({},e);void 0!==G.version?(n.version=G.version+1,y.Z.mod_scene({opr:"mod_scene",data:n}).then((function(e){0===e.status?(ee({}),_(!1),i.ZP.success(e.message)):i.ZP.error(e.message)}))):y.Z.add_scene({opr:"add_scene",data:n}).then((function(e){0===e.status?(ee({}),_(!1),i.ZP.success(e.message)):i.ZP.error(e.message)}))},resFied:function(){_(!1),ee({})}})}),(0,v.jsx)(m.Z,{width:"60%",title:"\u5173\u8054\u56fe",visible:W,onCancel:function(){K(!1)},footer:[(0,v.jsx)(d.Z,{onClick:function(){K(!1)},children:"\u5173\u95ed"},"back")],children:(0,v.jsx)(u.Z,{columns:X,dataSource:A},"struct_name")})]})}},17097:function(e,n,t){t.d(n,{Q:function(){return a},a:function(){return s}});var a={0:"\u6709\u6548","-1":"\u5931\u6548",1:"\u521b\u5efa\u6210\u529f",2:"\u6d4b\u8bd5\u53d1\u5e03",3:"\u6b63\u5f0f\u53d1\u5e03",4:"\u516c\u6709",5:"\u79c1\u6709"},s={0:"green","-1":"#F56C6C",1:"#67C23A",2:"green",3:"#E6A23C",4:"#409EFF",5:"#909399"}},99154:function(e,n,t){t.d(n,{Z:function(){return _}});var a=t(72791),s=t(13295),r=t(58646),i=t(66106),l=t(30914),c=t(20135),o=t(58105),d=t(73231),u=t(87309),m=t(80184),p=s.Z.RangePicker;function _(e){var n=(0,a.useRef)(null);(0,a.useEffect)((function(){console.log("\u89e6\u53d1\u4e86",n.current.setFieldsValue(e.form))}),[]);return(0,m.jsx)("div",{children:(0,m.jsx)(r.Z,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!0},onFinish:function(n){e.queryList(n)},onFinishFailed:function(){console.log("\u5931\u8d25")},autoComplete:"off",ref:n,children:(0,m.jsxs)(i.Z,{children:[e.formRolue.map((function(e){switch(e.type){case"input":return(0,m.jsx)(l.Z,{span:6,children:(0,m.jsx)(r.Z.Item,{label:e.label,name:e.name,children:(0,m.jsx)(c.Z,{})},e.name)});case"select":return(0,m.jsx)(l.Z,{span:6,children:(0,m.jsx)(r.Z.Item,{label:e.label,name:e.name,children:(0,m.jsx)(o.Z,{children:e.options?e.options.map((function(e){return(0,m.jsx)(o.Z.Option,{value:e.value,children:e.label},e.value)})):null})},e.name)});case"picker":return(0,m.jsx)(l.Z,{span:6,children:(0,m.jsx)(r.Z.Item,{label:e.label,name:e.name,children:(0,m.jsx)(s.Z,{style:{width:"100%"}})},e.name)});case"radio":return(0,m.jsx)(l.Z,{span:6,children:(0,m.jsx)(r.Z.Item,{label:e.label,name:e.name,children:(0,m.jsxs)(d.ZP.Group,{children:[(0,m.jsx)(d.ZP,{value:1,children:"A"}),e.options?e.options.map((function(e){return(0,m.jsx)(d.ZP,{value:e.value,children:e.label},e.value)})):null]})},e.name)});case"rangePicker":return(0,m.jsx)(l.Z,{span:6,children:(0,m.jsx)(r.Z.Item,{label:e.label,name:e.name,children:(0,m.jsx)(p,{})},e.name)})}})),(0,m.jsx)(l.Z,{span:6,children:(0,m.jsx)(r.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,m.jsx)(u.Z,{type:"primary",htmlType:"submit",children:"\u67e5\u8be2"})})})]})})})}},83099:function(e,n,t){t.d(n,{u:function(){return _},Z:function(){return h}});var a=t(87462),s=t(4942),r=t(29439),i=t(72791),l=t(81694),c=t.n(l),o=t(85501),d=t(24886);function u(e){var n=e.className,t=e.direction,r=e.index,l=e.marginDirection,c=e.children,o=e.split,d=e.wrap,u=i.useContext(_),m=u.horizontalSize,p=u.verticalSize,f=u.latestIndex,h={};return u.supportFlexGap||("vertical"===t?r<f&&(h={marginBottom:m/(o?2:1)}):h=(0,a.Z)((0,a.Z)({},r<f&&(0,s.Z)({},l,m/(o?2:1))),d&&{paddingBottom:p})),null===c||void 0===c?null:i.createElement(i.Fragment,null,i.createElement("div",{className:n,style:h},c),r<f&&o&&i.createElement("span",{className:"".concat(n,"-split"),style:h},o))}var m=t(19911),p=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(e);s<a.length;s++)n.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]])}return t},_=i.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),f={small:8,middle:16,large:24};var h=function(e){var n,t=i.useContext(d.E_),l=t.getPrefixCls,h=t.space,Z=t.direction,g=e.size,x=void 0===g?(null===h||void 0===h?void 0:h.size)||"small":g,y=e.align,v=e.className,b=e.children,j=e.direction,k=void 0===j?"horizontal":j,q=e.prefixCls,I=e.split,C=e.style,A=e.wrap,w=void 0!==A&&A,P=p(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),F=(0,m.Z)(),S=i.useMemo((function(){return(Array.isArray(x)?x:[x,x]).map((function(e){return function(e){return"string"===typeof e?f[e]:e||0}(e)}))}),[x]),T=(0,r.Z)(S,2),N=T[0],O=T[1],z=(0,o.Z)(b,{keepEmpty:!0}),E=void 0===y&&"horizontal"===k?"center":y,B=l("space",q),V=c()(B,"".concat(B,"-").concat(k),(n={},(0,s.Z)(n,"".concat(B,"-rtl"),"rtl"===Z),(0,s.Z)(n,"".concat(B,"-align-").concat(E),E),n),v),G="".concat(B,"-item"),R="rtl"===Z?"marginLeft":"marginRight",L=0,D=z.map((function(e,n){return null!==e&&void 0!==e&&(L=n),i.createElement(u,{className:G,key:"".concat(G,"-").concat(n),direction:k,index:n,marginDirection:R,split:I,wrap:w},e)})),J=i.useMemo((function(){return{horizontalSize:N,verticalSize:O,latestIndex:L,supportFlexGap:F}}),[N,O,L,F]);if(0===z.length)return null;var Q={};return w&&(Q.flexWrap="wrap",F||(Q.marginBottom=-O)),F&&(Q.columnGap=N,Q.rowGap=O),i.createElement("div",(0,a.Z)({className:V,style:(0,a.Z)((0,a.Z)({},Q),C)},P),i.createElement(_.Provider,{value:J},D))}}}]);