(this.webpackJsonphorace=this.webpackJsonphorace||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(6),a=n.n(o),l=(n(14),n(8)),s=n(9),i=n(2),d=n(0),u=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(d.jsx)("button",{onClick:c,style:{backgroundColor:t},className:"btn",children:n})};u.defaultProps={color:"steelblue"};var j=u,b=function(e){var t=e.title,n=e.onToggleAdd,c=e.showAdd;return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("h1",{children:t}),Object(d.jsx)(j,{color:c?"red":"green",text:c?"Close":"Add",onClick:n})]})};b.defaultProps={title:"Task Tracker"};var h=b,m=n(7),O=function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(d.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return c(t.id)},children:[Object(d.jsxs)("h3",{children:[t.text,Object(d.jsx)(m.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(d.jsx)("p",{children:t.day})]})},x=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(d.jsx)(d.Fragment,{children:t.map((function(e){return Object(d.jsx)(O,{task:e,onDelete:n,onToggle:c},e.id)}))})},f=function(e){var t=e.onAdd,n=Object(c.useState)(""),r=Object(i.a)(n,2),o=r[0],a=r[1],l=Object(c.useState)(""),s=Object(i.a)(l,2),u=s[0],j=s[1],b=Object(c.useState)(!1),h=Object(i.a)(b,2),m=h[0],O=h[1];return Object(d.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),o?(t({text:o,day:u,reminder:m}),a(""),j(""),O(!1)):alert("Please add a task")},children:[Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"",children:"Task"}),Object(d.jsx)("input",{type:"text",placeholder:"Add Task",value:o,onChange:function(e){return a(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"",children:"Day & Time"}),Object(d.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control form-control-check",children:[Object(d.jsx)("label",{htmlFor:"",children:"Set Reminder"}),Object(d.jsx)("input",{type:"checkbox",checked:m,value:m,onChange:function(e){return O(e.currentTarget.checked)}})]}),Object(d.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})},g=function(e){var t=Object(c.useState)(!1),n=Object(i.a)(t,2),r=n[0],o=n[1],a=Object(c.useState)([{id:1,text:"Doctors Appointment",day:"Feb 5th at 2:30pm",reminder:!0},{id:2,text:"Meeting at School",day:"Feb 6th at 1:30pm",reminder:!0},{id:3,text:"Food Shopping",day:"Feb 5th at 2:30pm",reminder:!1}]),u=Object(i.a)(a,2),j=u[0],b=u[1];return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(h,{onToggleAdd:function(){return o(!r)},showAdd:r}),r?Object(d.jsx)(f,{onAdd:function(e){var t=Math.floor(1e3*Math.random()),n=Object(s.a)({id:t},e);b([].concat(Object(l.a)(j),[n]))}}):null,j.length>0?Object(d.jsx)(x,{tasks:j,onDelete:function(e){b(j.filter((function(t){return t.id!==e})))},onToggle:function(e){var t=j.map((function(t){return t.id===e?(t.reminder=!t.reminder,t):t}));b(t)}}):"No Task To Show"]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),o(e),a(e)}))};a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.f0566e72.chunk.js.map