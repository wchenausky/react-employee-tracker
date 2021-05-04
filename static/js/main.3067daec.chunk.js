(this["webpackJsonpreact-employee-tracker"]=this["webpackJsonpreact-employee-tracker"]||[]).push([[0],{24:function(e,t,n){},4:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(14),s=n.n(c),o=(n(24),n(4),n(0));var i=function(){return Object(o.jsxs)("div",{className:"jumbotron jumbotron-fluid",children:[Object(o.jsx)("h1",{className:"container",children:"Employee Directory"}),Object(o.jsx)("p",{className:"lead",children:"A list of the current employees. Use the search box to narrow down your results."})]})},l=n(15),u=n(16),m=n(19),d=n(18);var h=function(e){var t=e.format,n=e.headings,r=e.rows;return Object(o.jsxs)("table",{className:"table ".concat(t||"table-striped"),children:[Object(o.jsx)("thead",{children:Object(o.jsx)("tr",{children:n.map((function(t){return Object(o.jsx)("th",{scope:"col",onClick:e.onClick,children:t})}))})}),Object(o.jsx)("tbody",{children:r.map((function(e){return Object(o.jsx)("tr",{children:e.map((function(e){return Object(o.jsx)("td",{children:e})}))})}))})]})};var b=function(e){return Object(o.jsx)("form",{children:Object(o.jsxs)("div",{className:"input-group mb-4",children:[Object(o.jsx)("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",className:"form-control",placeholder:"Search for an Employee",id:"Search","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{onSubmit:e.handleFormSubmit,className:"btn btn-primary",children:"Search"})]})})},j=n(17),p=n.n(j),f=function(){return p.a.get("https://randomuser.me/api/?results=50&inc=picture,name,email,phone,dob")},O=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={rows:[[]],headings:["Picture","Name","Email","Phone","DOB"],format:"",search:"",filteredUsers:[{}],backupRows:[[]],nameSort:1},e.componentDidMount=function(){e.searchEmployee()},e.searchEmployee=function(){return f().then((function(t){var n=t.data.results.map((function(e){return[Object(o.jsx)("img",{src:e.picture.medium,className:"round-circle",alt:e.name}),"".concat(e.name.first," ").concat(e.name.last),e.email,e.phone,new Date(e.dob.date).getMonth()+1+"/"+new Date(e.dob.date).getDate()+"/"+new Date(e.dob.date).getFullYear()]}));e.setState({rows:n,filteredUsers:t.data,backupRows:n})})).catch((function(e){return console.log(e)}))},e.handleFormSubmit=function(t){t.preventDefault();var n=t.target.getAttribute("value");if(""!==n){var r=e.state.backupRows;r=r.filter((function(e){return e[1].include(n)})),e.setState({rows:r})}else e.setState({rows:e.state.backupRows})},e.handleNameSort=function(t){if(t.preventDefault(),"Name"===t.target.innerHTML)if(1===e.state.nameSort){var n=e.state.rows.sort();e.setState({rows:n,nameSort:2})}else{var r=e.state.rows.reverse();e.setState({rows:r,nameSort:1})}},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(b,{onSubmit:this.handleFormSubmit}),Object(o.jsx)(h,{onSubmit:this.handleFormSubmit,rows:this.state.rows,headings:this.state.headings,format:this.state.format,onClick:this.handleNameSort})]})}}]),n}(r.Component);n(13);var x=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(i,{}),Object(o.jsx)(O,{})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root")),v()}},[[44,1,2]]]);
//# sourceMappingURL=main.3067daec.chunk.js.map