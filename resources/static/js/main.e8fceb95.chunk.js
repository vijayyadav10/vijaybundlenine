(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{293:function(e,t,n){},733:function(e,t,n){},736:function(e,t,n){"use strict";n.r(t);n(293);var a=n(20),r=n(21),o=n(22),s=n(24),c=n(292),i=n(1),l=n.n(i),u=n(8),p=n.n(u),d=n(7),m=n(115),b=n(288),h=n(2),f=n.n(h),g=n(43),j=n(289),O=n(291),w=n(4),y=[],x=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(e){var r;Object(a.a)(this,n),(r=t.call(this,e)).totalPages=function(){var e=r.state.pagination.perPage;return Math.ceil(y.length/e)},r.onPageInput=function(e){r.setState({pageChangeValue:e.target.value})},r.onSubmit=function(){r.setPage(r.state.pageChangeValue)},r.setPage=function(e){var t=Number(e);if(!Number.isNaN(e)&&""!==e&&t>0&&t<=r.totalPages()){var n=Object.assign({},r.state.pagination);n.page=t,r.setState({pagination:n,pageChangeValue:t})}},r.onPerPageSelect=function(e,t){var n=Object.assign({},r.state.pagination);n.perPage=e,n.page=1,r.setState({pagination:n})},r.onFirstPage=function(){r.setPage(1)},r.onPreviousPage=function(){r.state.pagination.page>1&&r.setPage(r.state.pagination.page-1)},r.onNextPage=function(){r.state.pagination.page<r.totalPages()&&r.setPage(r.state.pagination.page+1)},r.onLastPage=function(){var e=r.state.pagination.page,t=r.totalPages();e<t&&r.setPage(t)},r.onSelectRow=function(e,t){var a,o,s=r.props.onRowsLogger,c=r.state,i=c.rows,l=c.selectedRows,u=i.findIndex((function(e){return e.id===t.id}));u>-1&&(t.selected?(a=l.filter((function(e){return!(e===t.id)})),o=n.deselectRow(t)):(l.push(t.id),a=l,o=n.selectRow(t)),i[u]=o,r.setState({rows:i,selectedRows:a}),s(i.filter((function(e){return e.selected}))))},r.onSelectAllRows=function(e){var t=r.props.onRowsLogger,a=r.state,o=a.rows,s=a.selectedRows,c=e.target.checked,i=r.currentRows().rows;if(c){var l=Object(m.a)(new Set([].concat(Object(m.a)(i.map((function(e){return e.id}))),Object(m.a)(s)))),u=o.map((function(e){return l.indexOf(e.id)>-1?n.selectRow(e):e}));r.setState({rows:u,selectedRows:l}),t(u.filter((function(e){return e.selected})))}else{var p=i.map((function(e){return e.id})),d=s.filter((function(e){return!(p.indexOf(e)>-1)})),b=o.map((function(e){return d.indexOf(e.id)>-1?e:n.deselectRow(e)}));r.setState({rows:b,selectedRows:d}),t(b.filter((function(e){return e.selected})))}},r.onRow=function(e,t){var n=t.rowIndex;console.log("ROW, ROWINDEX",e,n),r.props.setSelectedContent([e]);var a=y.indexOf(e.id)>-1;return{className:f()({selected:a}),role:"row"}};var o=function(){return r.state.sortingColumns||{}},s=g.sort({getSortingColumns:o,onSort:function(e){r.setState({sortingColumns:g.byColumn({sortingColumns:r.state.sortingColumns,sortingOrder:d.defaultSortingOrder,selectedColumn:e})})},strategy:g.strategies.byProperty}),c=g.header({sortableTransform:s,getSortingColumns:o,strategy:g.strategies.byProperty});return r.customHeaderFormatters=d.customHeaderFormattersDefinition,r.state={selectedContent:[],sortingColumns:{name:{direction:d.TABLE_SORT_DIRECTION.ASC,position:0}},columns:[{property:"select",displayName:"Select",header:{label:"select",props:{index:0,rowSpan:1,colSpan:1,id:"select"},transforms:[s],formatters:[c],customFormatters:[d.sortableHeaderCellFormatter]},cell:{props:{index:0},formatters:[function(e,t){var n=t.rowData,a=t.rowIndex;return Object(d.selectionCellFormatter)({rowData:n,rowIndex:a},r.onSelectRow,"vybrat ".concat(a),"vyberte \u0159\xe1dek ".concat(a))}]}},{property:"name",displayName:"Names",header:{label:"Name",props:{index:1,rowSpan:1,colSpan:1},transforms:[s],formatters:[c],customFormatters:[d.sortableHeaderCellFormatter]},cell:{props:{index:1},formatters:[d.tableCellFormatter]}},{property:"email",header:{label:"Created by",props:{index:2,rowSpan:1,colSpan:1},transforms:[s],formatters:[c],customFormatters:[d.sortableHeaderCellFormatter]},cell:{props:{index:2},formatters:[d.tableCellFormatter]}},{property:"updatedAt",header:{label:"Last edited",props:{index:3,rowSpan:1,colSpan:1},transforms:[s],formatters:[c],customFormatters:[d.sortableHeaderCellFormatter]},cell:{props:{index:3},formatters:[d.tableCellFormatter]}},{property:"type",header:{label:"Type",props:{index:4,rowSpan:1,colSpan:1},transforms:[s],formatters:[c],customFormatters:[d.sortableHeaderCellFormatter]},cell:{props:{index:4},formatters:[d.tableCellFormatter]}},{property:"createdAt",header:{label:"Created date",props:{index:5,rowSpan:1,colSpan:1},transforms:[s],formatters:[c],customFormatters:[d.sortableHeaderCellFormatter]},cell:{props:{index:5},formatters:[d.tableCellFormatter]}},{property:"status",header:{label:"Status",props:{index:6,rowSpan:1,colSpan:1},transforms:[s],formatters:[c],customFormatters:[d.sortableHeaderCellFormatter]},cell:{props:{index:6},formatters:[d.tableCellFormatter]}}],rows:r.props.mockRows,selectedRows:[],pagination:{page:1,perPage:6,perPageOptions:[6,10,15]},pageChangeValue:1},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.mockRows&&this.setState({rows:this.props.mockRows})}},{key:"componentDidUpdate",value:function(e,t){this.props.mockRows!==e.mockRows&&this.setState({rows:this.props.mockRows})}},{key:"currentRows",value:function(){var e=this.state,t=e.rows,n=e.sortingColumns,a=e.columns,r=e.pagination;return Object(O.a)(Object(d.paginate)(r),g.sorter({columns:a,sortingColumns:n,sort:b.orderBy,strategy:g.strategies.byProperty}))(t)}},{key:"render",value:function(){var e=this,t=this.state,n=t.columns,a=t.pagination,r=t.sortingColumns,o=t.pageChangeValue,s=this.currentRows();return Object(w.jsxs)(d.Grid,{fluid:!0,children:[Object(w.jsxs)(d.Table.PfProvider,{striped:!0,bordered:!0,hover:!0,dataTable:!0,columns:n,components:{header:{cell:function(t){return e.customHeaderFormatters({cellProps:t,columns:n,sortingColumns:r,rows:s.rows,onSelectAllRows:e.onSelectAllRows})}}},children:[Object(w.jsx)(d.Table.Header,{headerRows:j.headerRows({columns:n})}),Object(w.jsx)(d.Table.Body,{rows:s.rows,rowKey:"id",onRow:this.onRow})]}),Object(w.jsx)(d.PaginationRow,{viewType:d.PAGINATION_VIEW.TABLE,pagination:a,pageInputValue:o,amountOfPages:s.amountOfPages,itemCount:s.itemCount,itemsStart:s.itemsStart,itemsEnd:s.itemsEnd,onPerPageSelect:this.onPerPageSelect,onFirstPage:this.onFirstPage,onPreviousPage:this.onPreviousPage,onPageInput:this.onPageInput,onNextPage:this.onNextPage,onLastPage:this.onLastPage,onSubmit:this.onSubmit})]})}}],[{key:"selectRow",value:function(e){return Object.assign({},e,{selected:!0})}},{key:"deselectRow",value:function(e){return Object.assign({},e,{selected:!1})}}]),n}(l.a.Component),C=n(31),v=n(11),S=n.n(v),R=n(10),P=(n(93),n(78)),N=n(12),k=n(49),I=n(81),F=n.n(I),T=function(){var e=Object(C.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ2MTM0MDIyLCJleHAiOjE2NDg3MjYwMjJ9.JbSvPdP5D-WNeDIvOX7SYELMdKW-NdrBFYkcROhr0-A",e.next=3,F.a.get("http://localhost:1337/content-manager/content-types",{headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ2MTM0MDIyLCJleHAiOjE2NDg3MjYwMjJ9.JbSvPdP5D-WNeDIvOX7SYELMdKW-NdrBFYkcROhr0-A")}});case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(C.a)(S.a.mark((function e(t){var n,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="http://localhost:1337/api/"+t,e.next=3,F.a.get(n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(C.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetchContents",t),e.next=3,D(t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(C.a)(S.a.mark((function e(t,n){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&n){e.next=2;break}throw new Error("collectionType or contentName is missing");case 2:return a="http://localhost:1337/api/".concat(t,"?filters[name][$containsi]=").concat(n),e.next=5,F.a.get(a);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),A=(n(733),n(290)),H=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),r.props.runOnFilterData(r.state.values.name)},r.handleInputChange=function(e){r.setState({values:Object(A.a)({},e.target.name,e.target.value)})},r.onClick=function(){r.setState({open:!r.state.open})},r.state={open:!1,values:{name:""}},r}return Object(r.a)(n,[{key:"handleKeyDown",value:function(){}},{key:"render",value:function(){return Object(w.jsx)("div",{className:"ContentsFilter well",role:"button",tabIndex:0,style:{margin:"1rem 0rem"},children:Object(w.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(w.jsxs)("div",{style:{display:"flex",margin:"1rem 0rem"},children:[Object(w.jsxs)("button",{id:"dropdown-example",role:"button","aria-haspopup":"true","aria-expanded":"false",type:"button",className:"dropdown-toggle btn btn-default",children:["Name ",Object(w.jsx)("span",{className:"caret"})]}),Object(w.jsx)("input",{type:"search",name:"name",value:this.state.values.name,onChange:this.handleInputChange,role:"combobox",className:"rbt-input-main form-control rbt-input",placeholder:"Search Content"})]}),Object(w.jsx)("button",{style:{margin:"0 auto 0% 96.5%"},className:"btn btn-primary",children:"Search"})]})})}}]),n}(l.a.Component),L=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).runOnFilterData=function(){var e=Object(C.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(r.state.selectedCollectionType,t).then((function(e){var t=e.data.data.map((function(e){return e.attributes.id=e.id,e.attributes}));r.setState({mockRows:t})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.componentDidMount=function(){},r.close=function(){r.setState({show:!1})},r.open=Object(C.a)(S.a.mark((function e(){var t,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.setState({show:!0}),e.next=3,T();case 3:t=(t=e.sent).data.data.filter((function(e){return e&&e.uid&&e.uid.startsWith("api::")&&e.isDisplayed})),n=[],t.length&&t.forEach((function(e){n.push(e.info)})),r.setState({collectionTypes:n});case 8:case"end":return e.stop()}}),e)}))),r.collectionTypeOnChange=function(e){e.persist(),r.state.collectionTypes.forEach(function(){var t=Object(C.a)(S.a.mark((function t(n){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.singularName!==e.target.value||!e.target.value){t.next=4;break}return r.setState({selectedCollectionType:n.pluralName}),t.next=4,E(n.pluralName).then((function(e){var t=e.data.data.map((function(e){return e.attributes.id=e.id,e.attributes}));r.setState({mockRows:t})}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},r.state={show:!1,collectionTypes:[],mockRows:[],selectedContent:[],selectedCollectionType:null},r}return Object(r.a)(n,[{key:"render",value:function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(R.Button,{bsStyle:"primary",bsSize:"large",onClick:this.open,children:"Launch basic modal"}),Object(w.jsxs)(k.Modal,{style:{minWidth:"72vw"},show:this.state.show,onHide:this.close,children:[Object(w.jsxs)(k.Modal.Header,{children:[Object(w.jsx)("button",{className:"close",onClick:this.close,"aria-hidden":"true","aria-label":"Close",children:Object(w.jsx)(N.Icon,{type:"pf",name:"close"})}),Object(w.jsx)(k.Modal.Title,{children:"Select Content"})]}),Object(w.jsxs)(k.Modal.Body,{children:[Object(w.jsx)("div",{className:"CollapsibleSection__title no-padding",role:"button",tabIndex:0}),Object(w.jsxs)(P.Row,{children:[Object(w.jsx)("label",{className:"control-label col-xs-3",htmlFor:"group",children:"Collection Type"}),Object(w.jsx)(P.Col,{xs:9,children:Object(w.jsxs)("select",{className:"form-control",name:"group","data-testid":"TEST_ID_USER_AUTHORITY_MODAL.GROUP_FIELD",onChange:this.collectionTypeOnChange,children:[Object(w.jsx)("option",{value:0,children:"Select Collection Type"}),this.state.collectionTypes.length&&this.state.collectionTypes.map((function(e,t){return Object(w.jsx)("option",{value:e.singularName,children:e.pluralName},e.singularName)}))]})})]}),Object(w.jsx)(H,{runOnFilterData:this.runOnFilterData}),Object(w.jsx)(x,{onRowsLogger:function(){},mockRows:this.state.mockRows,setSelectedContent:this.props.setSelectedContent})]}),Object(w.jsxs)(k.Modal.Footer,{children:[Object(w.jsx)(R.Button,{bsStyle:"default",className:"btn-cancel",onClick:this.close,children:"Cancel"}),Object(w.jsx)(R.Button,{bsStyle:"primary",onClick:this.close,children:"Save"})]})]})]})}}]),n}(i.Component),J=(n(37),function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return Object(w.jsxs)("table",{className:"table dataTable table-striped table-bordered table-hover",children:[Object(w.jsx)("thead",{children:Object(w.jsx)("tr",{children:Object.keys(B).map((function(e,t){return Object(w.jsx)("th",{children:B[e]},t)}))})}),Object(w.jsx)("tbody",{children:Object(w.jsx)("tr",{children:this.props.content[0]&&Object.keys(this.props.content[0]).map((function(t,n){if(B.hasOwnProperty(t))return Object(w.jsx)("td",{children:e.props.content[0][t]},n)}))})})]})}}]),n}(l.a.Component)),B={name:"Name",createdBy:"Createdby",updatedAt:"Lastedited",Type:"Type",createdAt:"Createddate",selected:"status"},W=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).setSelectedContent=function(e){r.setState({selectedContent:e}),r.setState({name:JSON.stringify(e,1,1)}),console.log("APPA",r.state)},r.state={selectedContent:[],name:[]},r}return Object(r.a)(n,[{key:"render",value:function(){return Object(w.jsxs)("div",{style:{margin:"8rem"},children:[Object(w.jsx)(L,{rightSide:!1,setSelectedContent:this.setSelectedContent}),Object(w.jsx)(J,{content:this.state.selectedContent})]})}}]),n}(i.Component),_=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).reactRootRef=l.a.createRef(),e.mountPoint=null,e}return Object(r.a)(n,[{key:"config",get:function(){return console.log("GET CONFIG THIS.REACTROOTREF.CURRENT",this.reactRootRef.current),this.reactRootRef.current?this.reactRootRef.current.state:{}},set:function(e){return console.log("SET CONFIG",this.reactRootRef.current),this.reactRootRef.current.setState(e)}},{key:"connectedCallback",value:function(){this.mountPoint=document.createElement("div"),this.appendChild(this.mountPoint),p.a.render(Object(w.jsx)(W,{ref:this.reactRootRef}),this.mountPoint)}}]),n}(Object(c.a)(HTMLElement));window.customElements.define("my-widget-config",_);n(734),n(735)}},[[736,1,2]]]);
//# sourceMappingURL=main.e8fceb95.chunk.js.map