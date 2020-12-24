(this.webpackJsonpmycode=this.webpackJsonpmycode||[]).push([[0],{74:function(e,t,n){},75:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var c=n(6),a=n(0),r=n.n(a),i=n(26),s=n.n(i),o=(n(74),n(125)),d=n(15),j=n(122),u=n(124),l=n(120),b=n(107),O=n(41),h=n(121),f=n(117),x=n(123),m=n(116),v=n(45),g=n(46),p=n(55),y=n(54),C=(n(75),function(e){Object(p.a)(n,e);var t=Object(y.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"loader"})}}]),n}(r.a.Component)),S=Object(b.a)();var T=function(){var e=Object(a.useState)(1),t=Object(d.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)([5,10,20,30]),s=Object(d.a)(i,1)[0],o=Object(a.useState)(5),u=Object(d.a)(o,2),l=u[0],b=u[1],v=Object(a.useState)([]),g=Object(d.a)(v,2),p=g[0],y=g[1],T=Object(a.useState)(!0),k=Object(d.a)(T,2),_=k[0],D=k[1],N=Object(a.useState)([]),P=Object(d.a)(N,2),E=P[0],w=P[1];function F(){!function(e,t,n){var c={header:e,messages:[{text:t}],type:n,onClose:function(){return null},autoDismiss:!0};S.add(c)}("Order Delete","Order Has Been Deleted Successfully!","success")}function I(e,t){var n=Object(a.useState)(!1),r=Object(d.a)(n,2),i=r[0],s=r[1];return t?Object(c.jsx)("div",{children:"Order Deleted"}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(O.a,{onClick:function(){return s(!0)},variant:"subtle",actionType:"destructive",children:"Delete Order"}),Object(c.jsx)(h.a,{actions:[{text:"Cancel",variant:"subtle",onClick:function(){return s(!1)}},{text:"Delete",onClick:function(){return(t=e,fetch("/bc-api/v2/orders/".concat(t),{method:"DELETE",headers:{"Content-Type":"application/json"}})).then(s(!1)).then(D(!0)).then(F());var t}}],header:"Dialog Title",isOpen:i,onClose:function(){return s(!1)},closeOnEscKey:!0,closeOnClickOutside:!1,variant:"dialog",children:Object(c.jsxs)(j.i,{children:["Do you really want to delete order with id #",e," ?"]})})]})}var L=[{header:"Order Id",hash:"id",render:function(e){return e.id}},{header:"Billing Name",hash:"billing_address",render:function(e){var t=e.billing_address;return"".concat(t.first_name," ").concat(t.last_name)}},{header:"Order Total",hash:"total_tax",render:function(e){return e.total_tax}},{header:"Order Status",hash:"custom_status",render:function(e){return e.custom_status}},{header:"",hash:"stock",render:function(e){var t=e.id;return Object(c.jsx)(O.a,{actionType:"destructive",onClick:function(){return(e=t,fetch("/bc-api/v2/orders/".concat(e),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({status_id:5})})).then(D(!0));var e},children:"Cancel"})}},{header:"",hash:"stockmm",render:function(e){return I(e.id,e.is_deleted)}}];return Object(a.useEffect)((function(){fetch("/bc-api/v2/orders").then((function(e){return e.json()})).then((function(e){w(e);var t=n*l,c=Math.min(t,e.length),a=Math.max(0,t-l);y(e.slice(a,c))})).then((function(){return D(!1)}))}),[n,l,_]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(f.a,{manager:S}),_?Object(c.jsx)(C,{}):Object(c.jsx)(x.a,{header:"Orders ",children:Object(c.jsx)(m.a,{keyField:"sku",columns:L,items:p,itemName:"Orders",pagination:{currentPage:n,totalItems:E.length,onPageChange:r,itemsPerPageOptions:s,onItemsPerPageChange:function(e){r(1),b(e)},itemsPerPage:l},stickyHeader:!0})})]})},k=n(119);function _(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)([]),s=Object(d.a)(i,2),o=s[0],u=s[1];return Object(a.useEffect)((function(){fetch("/bc-api/v2/store").then((function(e){return e.json()})).then((function(e){r(e)})),fetch("/bc-api/v3/catalog/summary").then((function(e){return e.json()})).then((function(e){u(e)}))}),[n.id,o.id]),Object(c.jsxs)(c.Fragment,{children:[0===n.length?Object(c.jsx)(C,{}):Object(c.jsx)(x.a,{header:"Stor Overview",action:{variant:"secondary",text:"View Storefront",onClick:function(){window.open(n.secure_url)}},children:Object(c.jsxs)(x.a,{children:[Object(c.jsx)(j.i,{children:"Domain"}),n.domain]})}),o.data&&Object(c.jsx)(x.a,{header:"Catalog Summary",children:Object(c.jsxs)(k.a,{justifyContent:"space-between",children:[Object(c.jsxs)(x.a,{children:[Object(c.jsx)(j.i,{children:"VARIANT COUNT"}),Object(c.jsx)(j.b,{children:o.data.variant_count})]}),Object(c.jsxs)(x.a,{children:[Object(c.jsx)(j.i,{children:"INVENTORY COUNT"}),Object(c.jsx)(j.b,{children:o.data.inventory_count})]}),Object(c.jsxs)(x.a,{children:[Object(c.jsx)(j.i,{children:"INVENTORY VALUE"}),Object(c.jsx)(j.b,{children:o.data.inventory_value})]})]})})]})}var D=function(){var e=Object(a.useState)("tab1"),t=Object(d.a)(e,2),n=t[0],r=t[1];return Object(c.jsxs)("div",{style:{margin:"2% 25%"},children:[Object(c.jsx)(j.a,{children:"Inventory Management App"}),Object(c.jsx)(u.a,{activeTab:n,items:[{id:"tab1",title:"Summary"},{id:"tab2",title:"Order List"}],onTabClick:r}),Object(c.jsxs)(l.a,{marginTop:"large",children:["tab1"===n&&Object(c.jsx)(_,{}),"tab2"===n&&Object(c.jsx)(T,{})]})]})};var N=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(o.a,{}),Object(c.jsx)(D,{})]})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,126)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(N,{})}),document.getElementById("root")),P()}},[[83,1,2]]]);
//# sourceMappingURL=main.5eae5935.chunk.js.map