(this["webpackJsonpcurso-intro-react"]=this["webpackJsonpcurso-intro-react"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),c=n(4),a=n.n(c),l=n(6),s=n(2);var i=n(0),u=o.a.createContext();function d(e){var t=function(e,t){var n=o.a.useState(!1),r=Object(s.a)(n,2),c=r[0],a=r[1],l=o.a.useState(!0),i=Object(s.a)(l,2),u=i[0],d=i[1],j=o.a.useState(t),f=Object(s.a)(j,2),b=f[0],m=f[1];return o.a.useEffect((function(){setTimeout((function(){try{var n,r=localStorage.getItem(e);r?n=JSON.parse(r):(localStorage.setItem(e,JSON.stringify(t)),n=t),m(n),d(!1)}catch(c){a(c)}}),1e3)})),{item:b,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),m(t)}catch(c){a(c)}},loading:u,error:c}}("TODOS_V1",[]),n=t.item,r=t.saveItem,c=t.loading,a=t.error,d=o.a.useState(""),j=Object(s.a)(d,2),f=j[0],b=j[1],m=o.a.useState(!1),p=Object(s.a)(m,2),O=p[0],h=p[1],x=n.filter((function(e){return!!e.completed})).length,v=n.length,g=[];g=!f>=1?n:n.filter((function(e){var t=e.text.toLowerCase(),n=f.toLowerCase();return t.includes(n)}));return Object(i.jsx)(u.Provider,{value:{error:a,loading:c,totalTodos:v,completedTodos:x,addTodo:function(e){var t=Object(l.a)(n);t.push({completed:!1,text:e}),r(t)},searchValue:f,setSearchValue:b,searchedTodos:g,completeTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),o=Object(l.a)(n);o[t].completed=!0,r(o)},deleteTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),o=Object(l.a)(n);o.splice(t,1),r(o)},openModal:O,setOpenModal:h},children:e.children})}n(13);function j(){var e=o.a.useContext(u),t=e.totalTodos,n=e.completedTodos;return Object(i.jsxs)("h2",{className:"TodoCounter",children:["Has completado ",n," de ",t," Tareas"]})}n(14);function f(){var e=o.a.useContext(u),t=e.searchValue,n=e.setSearchValue;return Object(i.jsx)("input",{className:"TodoSearch",placeholder:"Buscar",value:t,onChange:function(e){console.log(e.target.value),n(e.target.value)}})}var b,m;n(15);function p(e){return Object(i.jsx)("section",{children:Object(i.jsx)("ul",{children:e.children})})}var O=["title","titleId"];function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function v(e,t){var n=e.title,o=e.titleId,c=x(e,O);return r.createElement("svg",h({height:"384pt",viewBox:"0 0 384 384",width:"384pt",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},c),n?r.createElement("title",{id:o},n):null,b||(b=r.createElement("path",{d:"m192 384c105.863281 0 192-86.128906 192-192 0-18.273438-2.550781-36.28125-7.601562-53.527344-2.488282-8.480468-11.34375-13.351562-19.847657-10.863281-8.488281 2.480469-13.34375 11.367187-10.863281 19.847656 4.183594 14.328125 6.3125 29.320313 6.3125 44.542969 0 88.222656-71.777344 160-160 160s-160-71.777344-160-160 71.777344-160 160-160c32.0625 0 62.910156 9.375 89.207031 27.105469 7.320313 4.941406 17.273438 3 22.207031-4.320313 4.9375-7.328125 3.011719-17.273437-4.316406-22.210937-31.601562-21.308594-68.632812-32.574219-107.097656-32.574219-105.863281 0-192 86.128906-192 192s86.136719 192 192 192zm0 0"})),m||(m=r.createElement("path",{d:"m356.6875 36.6875-164.6875 164.679688-52.6875-52.679688c-6.25-6.246094-16.375-6.246094-22.625 0-6.246094 6.25-6.246094 16.375 0 22.625l64 64c3.128906 3.128906 7.214844 4.6875 11.3125 4.6875s8.183594-1.558594 11.3125-4.6875l176-176c6.246094-6.25 6.246094-16.375 0-22.625-6.25-6.246094-16.375-6.246094-22.625 0zm0 0"})))}var g,y=r.forwardRef(v),T=(n.p,["title","titleId"]);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function C(e,t){var n=e.title,o=e.titleId,c=I(e,T);return r.createElement("svg",w({height:"512pt",viewBox:"0 0 512 512",width:"512pt",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},c),n?r.createElement("title",{id:o},n):null,g||(g=r.createElement("path",{d:"m437.019531 74.980469c-48.351562-48.351563-112.640625-74.980469-181.019531-74.980469s-132.667969 26.628906-181.019531 74.980469c-48.351563 48.351562-74.980469 112.640625-74.980469 181.019531 0 68.382812 26.628906 132.667969 74.980469 181.019531 48.351562 48.351563 112.640625 74.980469 181.019531 74.980469s132.667969-26.628906 181.019531-74.980469c48.351563-48.351562 74.980469-112.636719 74.980469-181.019531 0-68.378906-26.628906-132.667969-74.980469-181.019531zm-70.292969 256.386719c9.761719 9.765624 9.761719 25.59375 0 35.355468-4.882812 4.882813-11.28125 7.324219-17.679687 7.324219s-12.796875-2.441406-17.679687-7.324219l-75.367188-75.367187-75.367188 75.371093c-4.882812 4.878907-11.28125 7.320313-17.679687 7.320313s-12.796875-2.441406-17.679687-7.320313c-9.761719-9.765624-9.761719-25.59375 0-35.355468l75.371093-75.371094-75.371093-75.367188c-9.761719-9.765624-9.761719-25.59375 0-35.355468 9.765624-9.765625 25.59375-9.765625 35.355468 0l75.371094 75.367187 75.367188-75.367187c9.765624-9.761719 25.59375-9.765625 35.355468 0 9.765625 9.761718 9.765625 25.589844 0 35.355468l-75.367187 75.367188zm0 0"})))}var S=r.forwardRef(C),N=(n.p,n(16),{check:function(e){return Object(i.jsx)(y,{className:"Icon-svg Icon-svg--check",fill:e})},delete:function(e){return Object(i.jsx)(S,{className:"Icon-svg Icon-svg--delete",fill:e})}});function k(e){var t=e.type,n=e.color,r=void 0===n?"gray":n,o=e.onClick;return Object(i.jsx)("span",{className:"Icon-container Icon-container--".concat(t),onClick:o,children:N[t](r)})}function E(e){var t=e.completed,n=e.onComplete;return Object(i.jsx)(k,{type:"check",color:t?"#4caf50":"gray",onClick:n})}function B(e){var t=e.onDelete;return Object(i.jsx)(k,{type:"delete",onClick:t})}n(17);function M(e){return Object(i.jsxs)("li",{className:"TodoItem",children:[Object(i.jsx)(E,{completed:e.completed,onComplete:e.onComplete}),Object(i.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete"),children:e.text}),Object(i.jsx)(B,{onDelete:e.onDelete})]})}n(18);function P(e){return Object(i.jsx)("button",{className:"CreateTodoButton",onClick:function(){e.setOpenModal((function(e){return!e}))},children:Object(i.jsx)("b",{children:"+"})})}n(19);function _(e){var t=e.children;return a.a.createPortal(Object(i.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}n(20);function D(){var e=o.a.useState(""),t=Object(s.a)(e,2),n=t[0],r=t[1],c=o.a.useContext(u),a=c.addTodo,l=c.setOpenModal;return Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a(n),l(!1)},children:[Object(i.jsx)("label",{children:"Escribe tu nueva tarea!"}),Object(i.jsx)("textarea",{value:n,onChange:function(e){r(e.target.value)},placeholder:"Tener un d\xeda bonito"}),Object(i.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(i.jsx)("button",{type:"button",className:"TodoForm-button TodoForm-button--cancel",onClick:function(){l(!1)},children:"Cancelar"}),Object(i.jsx)("button",{type:"submit",className:"TodoForm-button TodoForm-button--add",children:"A\xf1adir"})]})]})}n(21);var F=function(){return Object(i.jsx)("li",{className:"TodoItem-loading",children:Object(i.jsxs)("div",{className:"LoaderBalls",children:[Object(i.jsx)("span",{className:"LoaderBalls__item"}),Object(i.jsx)("span",{className:"LoaderBalls__item"}),Object(i.jsx)("span",{className:"LoaderBalls__item"})]})})};function L(){var e=o.a.useContext(u),t=e.error,n=e.loading,r=e.searchedTodos,c=e.completeTodo,a=e.deleteTodo,l=e.openModal,s=e.setOpenModal;return Object(i.jsxs)(o.a.Fragment,{children:[Object(i.jsx)(j,{}),Object(i.jsx)(f,{}),Object(i.jsxs)(p,{children:[t&&Object(i.jsx)("p",{children:"Ups, hubo un error..."}),n&&new Array(5).fill(1).map((function(e,t){return Object(i.jsx)(F,{},t)})),!n&&!r.length&&Object(i.jsx)("p",{children:"Crea tu primera tarea"}),r.map((function(e){return Object(i.jsx)(M,{text:e.text,completed:e.completed,onComplete:function(){return c(e.text)},onDelete:function(){return a(e.text)}},e.text)}))]}),!!l&&Object(i.jsx)(_,{children:Object(i.jsx)(D,{})}),Object(i.jsx)(P,{setOpenModal:s})]})}var J=function(){return Object(i.jsx)(d,{children:Object(i.jsx)(L,{})})};n(22);a.a.render(Object(i.jsx)(J,{}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.d950662d.chunk.js.map