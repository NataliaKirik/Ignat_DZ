(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,,function(e,a,t){e.exports={headerWrapper:"Header_headerWrapper__2R3vh",text:"Header_text__3wRFC",main_Menu:"Header_main_Menu__3tOwN",active:"Header_active__2Kglr",current:"Header_current__2dXry"}},,,function(e,a,t){e.exports={wrapper:"Error404_wrapper__3kP0C",image:"Error404_image__20QnF",errorText:"Error404_errorText__1hAkK",back:"Error404_back__3FiJF"}},,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__1t5kA",errorInput:"SuperInputText_errorInput__3uXWl",error:"SuperInputText_error__2gqUC"}},,function(e,a,t){e.exports={blue:"HW4_blue__2LVxi",column:"HW4_column__3cEM_",checkboxWrapper:"HW4_checkboxWrapper__3t91r"}},function(e,a,t){e.exports={default:"SuperButton_default__3ag7_",red:"SuperButton_red__1zbef"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__24sCp",spanClassName:"SuperCheckbox_spanClassName__3SWrF"}},,,,function(e,a,t){e.exports={table:"HW8_table__ORpMa",buttons_Wrapper:"HW8_buttons_Wrapper__2iyQu",button:"HW8_button__1M3Mo"}},,,,function(e,a,t){e.exports={App:"App_App__399yx"}},function(e,a,t){e.exports={editableSpan:"SuperEditableSpan_editableSpan__GaHvi"}},,,function(e,a,t){e.exports=t(39)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(23),l=t.n(c),o=(t(33),t(24)),u=t.n(o),s=t(2),i=t(6),m=t(1),p=t(3),E=t(12),d=t.n(E),_=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,c=e.onEnter,l=e.error,o=e.className,u=e.spanClassName,s=Object(p.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i="".concat(d.a.error," ").concat(u||""),m="{ ".concat(l?d.a.errorInput:d.a.superInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&c&&c()},className:m},s)),l&&r.a.createElement("span",{className:i},l))},h=t(14),v=t.n(h),b=t(15),f=t.n(b),g=function(e){var a=e.red,t=e.className,n=Object(p.a)(e,["red","className"]),c="".concat(a?f.a.red:f.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:c},n))},C=t(16),N=t.n(C),O=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,c=(e.spanClassName,e.children),l=Object(p.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(N.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},l)),c&&r.a.createElement("span",{className:N.a.spanClassName},c))};var k=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],c=a[1],l=t?"":"error",o=function(){l?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},u=Object(n.useState)(!1),i=Object(s.a)(u,2),m=i[0],p=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:v.a.column},r.a.createElement(_,{value:t,onChangeText:c,onEnter:o,error:l}),r.a.createElement(g,{red:!0,onClick:o},"delete "),r.a.createElement("div",{className:v.a.checkboxWrapper},r.a.createElement(O,{checked:m,onChangeChecked:p},"some text "),r.a.createElement(O,{checked:m,onChange:function(e){return p(e.currentTarget.checked)}}))),r.a.createElement("hr",null),r.a.createElement("hr",null))},x=t(25),y=t.n(x),j=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,c=e.spanProps,l=Object(p.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(s.a)(o,2),i=u[0],m=u[1],E=c||{},d=E.children,h=E.onDoubleClick,v=E.className,b=Object(p.a)(E,["children","onDoubleClick","className"]),f="".concat(y.a.editableSpan," ").concat(v);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(_,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),a&&a(e)},onEnter:function(){m(!1),t&&t()}},l)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),h&&h(e)},className:f},b),d||l.value))};function S(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function w(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}S("test",{x:"A",y:1});w("test",{x:"",y:0});var I=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(j,{value:t,onChangeText:c,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(g,{onClick:function(){S("editable-span-value",t)}},"save"),r.a.createElement(g,{onClick:function(){var e=w("editable-span-value",t);c(e)}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var R=function(){return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(I,null))},J=t(10),W=t.n(J);var P=function(){return r.a.createElement("div",{className:W.a.wrapper},r.a.createElement("div",{className:W.a.image},r.a.createElement("img",{src:"https://cdn.lifedaily.com/assets/7ada33/dist/images/error/404.svg",alt:"cat"})),r.a.createElement("div",{className:W.a.errorText},"Oops, This page does not exist"),r.a.createElement(i.b,{to:Q.PRE_JUNIOR,className:W.a.back},"go to homepage"))},T=t(27),U=function(e,a){switch(a.type){case"sort":var t=Object(T.a)(e);return"up"===a.payload?t.sort((function(e,a){var t=e.name.toLowerCase(),n=a.name.toLowerCase();return t<n?-1:t>n?1:0})):t.sort((function(e,a){var t=e.name.toLowerCase(),n=a.name.toLowerCase();return t<n?1:t>n?-1:0})),t;case"check":return e.filter((function(e){return e.age>=a.payload}));default:return e}},H=t(20),F=t.n(H),A=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var M=function(){var e=Object(n.useState)(A),a=Object(s.a)(e,2),t=a[0],c=a[1],l=t.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.age))}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",r.a.createElement("table",{className:F.a.table},r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Age")),l),r.a.createElement("div",{className:F.a.buttons_Wrapper},r.a.createElement("div",null,r.a.createElement(g,{onClick:function(){return c(U(A,{type:"sort",payload:"up"}))}},"sort up")),r.a.createElement("div",null,r.a.createElement(g,{onClick:function(){return c(U(A,{type:"sort",payload:"down"}))}},"sort down")),r.a.createElement("div",null,r.a.createElement(g,{onClick:function(){return c(U(A,{type:"check",payload:18}))}}," check 18"))),r.a.createElement("hr",null),r.a.createElement("hr",null))},L=function(e){var a=e.options,t=(e.onChange,e.onChangeOption),n=Object(p.a)(e,["options","onChange","onChangeOption"]),c=a?a.map((function(e,a){return r.a.createElement("option",{key:a},e)})):[];return r.a.createElement("select",Object.assign({onChange:function(e){t&&t(e.currentTarget.value)}},n),c)},B=function(e){e.type,e.name;var a=e.options,t=(e.value,e.onChange,e.onChangeOption,Object(p.a)(e,["type","name","options","value","onChange","onChangeOption"]),a?a.map((function(e,a){})):[]);return r.a.createElement(r.a.Fragment,null,t)},K=["x","y","z"];var D=function(){var e=Object(n.useState)(K[1]),a=Object(s.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(L,{options:K,value:t,onChangeOption:c})),r.a.createElement("div",null,r.a.createElement(B,{name:"radio",options:K,value:t,onChangeOption:c})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var z=function(){return r.a.createElement("div",null,r.a.createElement(D,null),r.a.createElement(M,null))};var G=function(){return r.a.createElement("div",null,'"Junior +" page in development')},Q={PRE_JUNIOR:"/pre-junior",JUNIOR:"/junior",JUNIOR_PLUS:"/junior_plus",MAIN_PAGE:"/main"};var X=function(){return r.a.createElement("div",null,r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",exact:!0,render:function(){return r.a.createElement(m.a,{to:Q.PRE_JUNIOR})}}),r.a.createElement(m.b,{path:Q.PRE_JUNIOR,render:function(){return r.a.createElement(R,null)}}),r.a.createElement(m.b,{path:Q.JUNIOR,render:function(){return r.a.createElement(z,null)}}),r.a.createElement(m.b,{path:Q.JUNIOR_PLUS,render:function(){return r.a.createElement(G,null)}}),r.a.createElement(m.b,{render:function(){return r.a.createElement(P,null)}})))},q=t(7),V=t.n(q);var $=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",{className:V.a.headerWrapper},r.a.createElement("div",{className:V.a.componentRoutesWrapper},r.a.createElement("div",{className:V.a.text,onClick:function(){c(!t)}},"React homeworks")),t&&r.a.createElement("ul",{className:V.a.main_Menu},r.a.createElement("li",null,r.a.createElement(i.b,{to:Q.PRE_JUNIOR,activeClassName:V.a.active},"Pre Junior")),r.a.createElement("li",null,r.a.createElement(i.b,{to:Q.JUNIOR,activeClassName:V.a.active},"Junior ")),r.a.createElement("li",null,r.a.createElement(i.b,{to:Q.JUNIOR_PLUS,activeClassName:V.a.active},"Junior Plus"))))};var Y=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement($,null),r.a.createElement(X,null)))};var Z=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement(Y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[28,1,2]]]);
//# sourceMappingURL=main.582d88ca.chunk.js.map