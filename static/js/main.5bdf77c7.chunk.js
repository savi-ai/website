(this.webpackJsonpsavi=this.webpackJsonpsavi||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(7),s=a.n(n),i=a(14),c=a.n(i),l=(a(22),a(15)),o=a(3),r=a(4),u=a(17),h=a(16),m=a(31),d=a.p+"static/media/stars.e0118a7e.gif",b=(a(23),a(2)),g=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).changeHandler=function(e){n.setState(Object(l.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),console.log(n.state),m.a.post("https://sheet.best/api/sheets/f0effe0c-d6d9-4704-861d-a98c5220e8df",n.state).then((function(e){console.log(e),n.setState({email:"",message:"Thank you! We will notify you soon."})}))},n.state={email:"",message:""},n}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.message;return Object(b.jsx)("div",{className:"App",style:{backgroundImage:d},children:Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)("h1",{children:" The intelligence that helps your business is on its way!!"}),Object(b.jsx)("form",{id:"contact-form",onSubmit:this.handleSubmit,children:Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{className:"input",children:"Keep Me Posted  "}),Object(b.jsx)("input",{type:"email",className:"form-control",name:"email",value:t,"aria-describedby":"emailHelp",onChange:this.changeHandler}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})}),Object(b.jsx)("div",{children:Object(b.jsx)("label",{className:"message",id:"message",children:a})})]})})}},{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}},{key:"handleSubmit",value:function(e){}}]),a}(n.Component),j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,32)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),i(e),c(e)}))};c.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),j()}},[[29,1,2]]]);
//# sourceMappingURL=main.5bdf77c7.chunk.js.map