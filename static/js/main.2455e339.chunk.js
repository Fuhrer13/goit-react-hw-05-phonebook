(this.webpackJsonphomework05=this.webpackJsonphomework05||[]).push([[0],{1:function(e,t,n){e.exports={form:"Phonebook_form__3MgM7",name:"Phonebook_name__12D2y",input:"Phonebook_input__22ggg",btn:"Phonebook_btn__24B_N",title:"Phonebook_title__N6_4c"}},15:function(e,t,n){e.exports={container:"Filter_container__6ojwh",label:"Filter_label__3nGUa",input:"Filter_input__3CPZp"}},17:function(e,t,n){e.exports={container:"App_container__1FOMT"}},22:function(e,t,n){e.exports={enter:"slide_enter__20XQq",enterActive:"slide_enterActive__D8og3",exit:"slide_exit__3Z8vo",exitActive:"slide_exitActive__17vSj"}},23:function(e,t,n){e.exports={list:"Contacts_list__1iGFY"}},26:function(e,t,n){e.exports={enter:"pop_enter__1LR5h",enterActive:"pop_enterActive__u3q7V",exit:"pop_exit__3hn5F",exitActive:"pop_exitActive__hUfNP"}},29:function(e,t,n){e.exports=n(40)},38:function(e,t,n){e.exports={"title-appear":"title_title-appear__1Vxho","title-appear-active":"title_title-appear-active__3-k7y"}},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),i=n(27),l=n(10),s=n(11),m=n(14),u=n(13),_=n(6),p=n.n(_),b=function(e){var t=e.name,n=e.number,a=e.onDelete,c=e.id;return r.a.createElement("li",{className:p.a.item,key:c},r.a.createElement("div",{className:p.a.form},r.a.createElement("div",{className:p.a.name},t),r.a.createElement("span",{className:p.a.number},n)),r.a.createElement("button",{className:p.a.btn,onClick:a},"\u0425"))},h=n(42),d=n(41),f=n(22),v=n.n(f),E=n(23),g=n.n(E),N=function(e){var t=e.contactList,n=e.onDelete;return t.length>0&&r.a.createElement(h.a,{component:"ul",className:g.a.list},t.map((function(e){return r.a.createElement(d.a,{timeout:250,unmountOnExit:!0,classNames:v.a,key:e.id},r.a.createElement(b,Object.assign({},e,{onDelete:function(){return n(e.id)}})))})))},C=n(15),x=n.n(C),y=function(e){var t=e.filter,n=e.changeFilter;return r.a.createElement("div",{className:x.a.container},r.a.createElement("label",{htmlFor:"filter",className:x.a.label},"Find contacts by name",r.a.createElement("input",{className:x.a.input,type:"text",id:t,name:"filter",value:t,onChange:n})))},k=n(24),S=n(1),O=n.n(S),j=n(25),w=(n(38),function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.changeHandler=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(k.a)({},a,r))},e.submitHandler=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.number,c={id:Object(j.v4)(),name:a,number:r};e.props.addContact(c),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return r.a.createElement("form",{onSubmit:this.submitHandler,className:O.a.form},r.a.createElement("label",{htmlFor:"name",className:O.a.lebel},r.a.createElement("p",{className:O.a.name},"Name"),r.a.createElement("input",{type:"text",id:t,name:"name",value:t,onChange:this.changeHandler,className:O.a.input})),r.a.createElement("label",{htmlFor:"number",className:O.a.lebel},r.a.createElement("p",{className:O.a.name},"Number"),r.a.createElement("input",{type:"text",name:"number",value:n,onChange:this.changeHandler,id:n,className:O.a.input})),r.a.createElement("button",{type:"submit",className:O.a.btn},"Add contact"))}}]),n}(a.Component)),A=n(7),F=(n(39),function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(n){throw new Error}}),D=function(e){try{var t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(n){throw new Error}},H=n(17),P=n.n(H),L=n(26),M=n.n(L);A.b.configure();var J=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.changeHandler=function(t){var n=t.target.value;e.setState({filter:n})},e.addContact=function(t){e.state.contacts.map((function(e){return e.name})).includes(t.name)?A.b.warn("This name is already in contact list"):t.name.length>2&&t.number.length>5?e.setState({contacts:[].concat(Object(i.a)(e.state.contacts),[t])}):A.b.eror("length too short ...")},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=D("contacts");e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(e,t){t.contacts!==this.state.contacts&&F("contacts",this.state.contacts)}},{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:P.a.container},r.a.createElement(d.a,{in:!0,classNames:"title",timeout:500,appear:!0},r.a.createElement("h2",{className:P.a.title},"Phonebook")),r.a.createElement(w,{addContact:this.addContact}),r.a.createElement(A.a,{autoClose:5e3}),this.state.contacts.length>=2&&r.a.createElement(d.a,{timeout:250,classNames:M.a},r.a.createElement(y,{filter:n,changeFilter:this.changeHandler})),r.a.createElement(N,{contactList:a,onDelete:this.deleteContact})))}}]),n}(a.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root"))},6:function(e,t,n){e.exports={item:"Contact_item__1RUij",form:"Contact_form__1t0QA",name:"Contact_name__39SSF",number:"Contact_number__2pRKS",btn:"Contact_btn__xk_Lg"}}},[[29,1,2]]]);
//# sourceMappingURL=main.2455e339.chunk.js.map