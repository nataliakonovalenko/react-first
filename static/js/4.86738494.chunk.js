(this["webpackJsonpreact-lesson-1"]=this["webpackJsonpreact-lesson-1"]||[]).push([[4],{293:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__3wVur",dialogsItems:"Dialogs_dialogsItems___HyFA",active:"Dialogs_active__27z6f",dialog:"Dialogs_dialog__3BWoP",messages:"Dialogs_messages__1pnhK",message:"Dialogs_message__yUVhq"}},298:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),i=t(128),r=t(293),l=t.n(r),o=t(13),c=function(e){var a="/dialogs/"+e.id;return n.a.createElement("div",{className:l.a.dialog+" "+l.a.active},n.a.createElement(o.b,{to:a},e.name))},m=function(e){return n.a.createElement("div",{className:l.a.message},e.message)},u=t(90),d=t(129),g=t(35),b=t(50),f=Object(b.a)(30),_=Object(d.a)({form:"dialogAdddMessageForm"})((function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit},n.a.createElement("div",null,n.a.createElement(u.a,{component:g.b,name:"newMessageText",placeholder:"Enter your message",validate:[b.b,f]})),n.a.createElement("div",null,n.a.createElement("button",null,"Add message")))})),p=function(e){var a=e.dialogs.map((function(e){return n.a.createElement(c,{name:e.name,key:e.id,id:e.id})})),t=e.messages.map((function(e){return n.a.createElement(m,{message:e.message,key:e.id})}));return n.a.createElement("div",{className:l.a.dialogs},n.a.createElement("div",{className:l.a.dialogsItems},a),n.a.createElement("div",{className:l.a.messages},n.a.createElement("div",null,t),n.a.createElement(_,{onSubmit:function(a){e.addNewMessage(a.newMessageText)}})))},E=t(12),v=t(37),h=t(38),j=t(41),O=t(39),w=t(42),y=t(29),N=function(e){return{isAuth:e.auth.isAuth}},A=t(7);a.default=Object(A.d)(Object(E.b)((function(e){return{messages:e.dialogsPage.messages,dialogs:e.dialogsPage.dialogs}}),(function(e){return{addNewMessage:function(a){e(Object(i.a)(a))}}})),(function(e){var a=function(a){function t(){return Object(v.a)(this,t),Object(j.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(w.a)(t,a),Object(h.a)(t,[{key:"render",value:function(){return this.props.isAuth?n.a.createElement(e,this.props):n.a.createElement(y.a,{to:"/login"})}}]),t}(n.a.Component);return Object(E.b)(N)(a)}))(p)}}]);
//# sourceMappingURL=4.86738494.chunk.js.map