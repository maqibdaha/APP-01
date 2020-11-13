(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{35:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var s=a(0),n=(a(34),a(35),a(1)),c=a.n(n),r=a(30),i=a.n(r),l=a(14),d=a(2),o=a(8),b=a(9),j=a(11),m=a(10),h=function(e){Object(j.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"text-center",children:Object(s.jsx)("div",{className:"spinner-border m-5",role:"status",children:Object(s.jsx)("span",{className:"sr-only",children:"Loading..."})})})}}]),a}(c.a.Component),u=function(e){Object(j.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(b.a)(a,[{key:"getTableRow",value:function(e,t){return Object(s.jsx)("tr",{children:this.props.tableHeaders.map((function(t,a){var n=e;return t.index&&(n=e[t.index]),t.callback&&(n=t.callback(n)),Object(s.jsx)("td",{children:n},a)}))},t)}},{key:"render",value:function(){return Object(s.jsxs)("table",{className:"table",children:[Object(s.jsx)("thead",{className:"table-thead",style:{background:"#f3f3f3"},children:Object(s.jsx)("tr",{children:this.props.tableHeaders.map((function(e,t){return Object(s.jsx)("td",{children:e.label},t)}))})}),Object(s.jsx)("tbody",{className:"table-tbody",children:this.props.tableData.map(this.getTableRow.bind(this))})]})}}]),a}(c.a.Component),O=a(12),x=a.n(O),v=function(e){return e=Object.assign({page:1,limit:10},e),x()({method:"get",url:"/bc-api/v2/orders",params:e})},f=function(e,t){return x()({method:"put",url:"/bc-api/v2/orders/".concat(e),data:t})},p=function(e,t){return x()({method:"get",url:"/bc-api/".concat(e),params:t})},g=function(e){Object(j.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={isCatalogSummaryLoading:!0,isStoreInfoLoading:!0,catalogSummary:{},storeInfo:{}},s}return Object(b.a)(a,[{key:"componentWillMount",value:function(){p("v2/store").then(this.handleStoreInfoResponse.bind(this)),p("v3/catalog/summary").then(this.handleCatalogSummaryResponse.bind(this))}},{key:"handleStoreInfoResponse",value:function(e){this.setState({isStoreInfoLoading:!1,storeInfo:e.data})}},{key:"handleCatalogSummaryResponse",value:function(e){this.setState({isCatalogSummaryLoading:!1,catalogSummary:e.data.data})}},{key:"render",value:function(){return Object(s.jsx)("div",{className:"container ",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-md-12 m-3",children:Object(s.jsx)("div",{className:"card",children:Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("h4",{className:"col",children:"Store Overview"}),this.state.isStoreInfoLoading||this.state.isCatalogSummaryLoading?Object(s.jsx)(s.Fragment,{}):Object(s.jsx)("a",{href:this.state.storeInfo.secure_url,className:"col-md-3 mr-5 btn  btn-outline-primary",children:"View Storefront"})]}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("h7",{className:"col",children:"A view into your default BigCommerce storefront"})}),this.state.isStoreInfoLoading?Object(s.jsx)(h,{}):Object(s.jsx)("section",{children:Object(s.jsx)("ul",{className:"list-group m-3",children:Object(s.jsxs)("li",{className:"list-group-item",children:[Object(s.jsx)("div",{className:"d-flex w-100 justify-content-between",children:Object(s.jsx)("h5",{className:"mb-1",children:"Domain"})}),Object(s.jsx)("p",{className:"mb-1",children:this.state.storeInfo.domain})]})})})]})})}),Object(s.jsx)("div",{className:"col-md-12 m-3",children:Object(s.jsx)("div",{className:"card",children:Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("h4",{children:"Catalog Summary"}),Object(s.jsx)("h7",{children:"A simple Overview of your Catalog"}),this.state.isStoreInfoLoading||this.state.isCatalogSummaryLoading?Object(s.jsx)(h,{}):Object(s.jsx)("div",{className:"row",children:[{label:"Variant Count",index:"variant_count",format:"number"},{label:"Inventory Count",index:"variant_count",format:"number"},{label:"Inventory Value",index:"inventory_value",format:"currency"}].map(function(e,t){return Object(s.jsx)("div",{className:"col-12 col-lg-6 col-xl",children:Object(s.jsx)("div",{className:"card",children:Object(s.jsx)("div",{className:"card-body",children:Object(s.jsx)("div",{className:"row align-items-center",children:Object(s.jsxs)("div",{className:"col",children:[Object(s.jsx)("h6",{className:"card-title text-uppercase text-muted mb-2",children:e.label}),Object(s.jsx)("span",{className:"h2 mb-0",children:"currency"===e.format?new Intl.NumberFormat(void 0,{style:"currency",currency:this.state.storeInfo.currency}).format(this.state.catalogSummary[e.index]):this.state.catalogSummary[e.index]})]})})})})},t)}.bind(this))})]})})})]})})}}]),a}(c.a.Component),N=a(16),y=function(e){Object(j.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isOrdersLoading:!0,orders:{data:[],pagination:{}},tableHeaders:[{label:"Order ID",index:"id",callback:function(e){return e}},{label:"Billing Name",index:"billing_address",callback:function(e){return"".concat(e.first_name," ").concat(e.last_name)}},{label:"Order Total",index:"total_inc_tax",callback:function(e){return e}},{label:"Order Status",callback:function(e){var t="badge badge-";return 5===e.status_id?t+="danger":2===e.status_id||10===e.status_id?t+="success":t+="light",Object(s.jsx)("span",{className:t,children:e.status})}},{label:"Actions",callback:function(e){var t=this;if(5!==e.status_id)return Object(s.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(a){return t.cancelOrder(e.id,a)},children:"Cancel"})}.bind(Object(N.a)(n))}]},n}return Object(b.a)(a,[{key:"componentWillMount",value:function(){this.loadOrders()}},{key:"loadOrders",value:function(){v({limit:5}).then(this.handleOrdersResponse.bind(this))}},{key:"handleOrdersResponse",value:function(e){this.setState({isOrdersLoading:!1,orders:{data:e.data}})}},{key:"cancelOrder",value:function(e){this.setState({isOrdersLoading:!0}),f(e,{status_id:5}).then(this.loadOrders.bind(this))}},{key:"hasOrders",value:function(){return this.state.orders.data.length>0}},{key:"render",value:function(){return Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-md-12",children:Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("h4",{className:"m-4 mb-3",children:"Orders"}),this.state.isOrdersLoading?Object(s.jsx)(s.Fragment,{}):Object(s.jsxs)("h5",{className:"m-4",children:[this.state.orders.data.length," Orders"]}),Object(s.jsx)("div",{className:"card-body",children:this.state.isOrdersLoading?Object(s.jsx)(h,{}):this.hasOrders()?Object(s.jsx)("section",{children:Object(s.jsx)(u,{striped:!0,bordered:!0,hover:!0,tableHeaders:this.state.tableHeaders,tableData:this.state.orders.data})}):Object(s.jsx)("section",{children:Object(s.jsx)("div",{className:"emptyTable",children:"No orders exist yet!"})})})]})})})})}}]),a}(c.a.Component);i.a.render(Object(s.jsx)(l.a,{children:Object(s.jsxs)("div",{children:[Object(s.jsxs)("nav",{className:"container",style:{borderColor:"#f3f3f3"},children:[Object(s.jsx)("h3",{className:"mt-5 ml-4",children:"Sample App"}),Object(s.jsxs)("ul",{className:"nav mt-2 mb-2 ml-4",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(l.b,{className:"nav-link",activeClassName:"navgalink",exact:!0,to:"/",children:"Summary"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(l.b,{className:"nav-link",activeClassName:"navgalink",exact:!0,to:"/list",children:"Orders list"})})]})]}),Object(s.jsxs)(d.c,{children:[Object(s.jsx)(d.a,{exact:!0,path:"/list",component:y}),Object(s.jsx)(d.a,{component:g})]})]})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.fe6fd0d6.chunk.js.map