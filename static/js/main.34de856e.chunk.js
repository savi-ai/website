(this.webpackJsonpsavi=this.webpackJsonpsavi||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(7),s=a.n(n),i=a(14),c=a.n(i),l=(a(22),a(15)),o=a(3),r=a(4),u=a(17),h=a(16),m=a(31),b=a.p+"static/media/stars.e0118a7e.gif",d=(a(23),a(2)),f=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).changeHandler=function(e){n.setState(Object(l.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),console.log(n.state),m.a.post("https://sheet.best/api/sheets/f0effe0c-d6d9-4704-861d-a98c5220e8df",n.state).then((function(e){console.log(e),n.state={email:""}}))},n.state={email:""},n}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state.email;return Object(d.jsx)("div",{className:"App",style:{backgroundImage:b},children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("h1",{children:" The intelligence that helps your business is on its way!!"}),Object(d.jsx)("form",{id:"contact-form",onSubmit:this.handleSubmit,children:Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{className:"input",children:"Keep Me Posted  "}),Object(d.jsx)("input",{type:"email",className:"form-control",name:"email",value:e,"aria-describedby":"emailHelp",onChange:this.changeHandler}),Object(d.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})})]})})}},{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}},{key:"handleSubmit",value:function(e){}}]),a}(n.Component),g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,32)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),i(e),c(e)}))};c.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),g()}},[[29,1,2]]]);
//# sourceMappingURL=main.34de856e.chunk.js.map