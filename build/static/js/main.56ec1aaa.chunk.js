(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{136:function(e,t){},189:function(e,t,a){var n={"./main/index.js":190,"./react-pdf/index.js":344};function c(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=s,e.exports=c,c.id=189},190:function(e,t,a){"use strict";a.r(t);var n=a(64),c=a(65),s=a(71),r=a(69),i=a(0),o=a(13),u=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={color:"#ffffff"},e}return Object(c.a)(a,[{key:"render",value:function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"\u4e3b\u9875"})})}}]),a}(i.Component);t.default=u},221:function(e,t){},222:function(e,t){},223:function(e,t){},224:function(e,t){},225:function(e,t){},235:function(e,t,a){},237:function(e,t,a){},342:function(e,t,a){},343:function(e,t,a){"use strict";a.r(t);var n,c,s=a(0),r=a(34),i=a.n(r),o=(a(181),a(128)),u=(a(183),a(127)),l=a(80),j=(a(186),a(72)),b=a(36),p=a(20),g=a(13),m=a(189),d=m.keys().reduce((function(e,t){var a=t.split("/")[t.split("/").length-2],n=a[0].toLocaleUpperCase()+a.slice(1);return e=Object.assign({},e,Object(b.a)({},n,m(t).default))}),{}),h=[{name:"main",path:"/main",component:d.Main},{name:"react-pdf",path:"/react-pdf",component:d["React-pdf"]},{path:"/",component:function(){return Object(g.jsx)(p.a,{to:"/main"})}}],O=a(172),f=(a(237),"previewPdf"),v="main",x="changeTheme",N="langleName",k=(n={},Object(b.a)(n,f,"preview-PDF"),Object(b.a)(n,v,"main"),Object(b.a)(n,x,"Switch the theme"),Object(b.a)(n,N,"English"),n),S=(c={},Object(b.a)(c,f,"\u9884\u89c8-PDF"),Object(b.a)(c,v,"\u4e3b\u9875"),Object(b.a)(c,x,"\u5207\u6362\u4e3b\u9898"),Object(b.a)(c,N,"\u4e2d\u6587"),c),P=[{name:v,path:"/main"},{name:f,path:"/react-pdf"}],y=a(352),C=a(353),F=a(33),w=a(173),_=(a(342),j.a.Header),I=j.a.Sider,W=j.a.Content,E={en:k,zh:S},z=Object(F.b)();var D=function(){var e=Object(s.useState)(localStorage.locale?localStorage.locale:"zh"),t=Object(l.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(localStorage.theme?localStorage.theme:"#abb8c3"),r=Object(l.a)(c,2),i=r[0],b=r[1],m=Object(s.useState)(!1),d=Object(l.a)(m,2),f=d[0],v=d[1],x=z.location.pathname,N=Object(s.useState)(["/"===x?"/main":x]),k=Object(l.a)(N,2),S=k[0],F=k[1];return Object(s.useEffect)((function(){document.body.style.setProperty("--drak",i)}),[i]),Object(g.jsx)(y.a,{locale:a,messages:E[a],children:Object(g.jsxs)(j.a,{children:[Object(g.jsxs)(I,{trigger:null,collapsible:!0,children:[Object(g.jsx)("div",{className:"logo"}),Object(g.jsx)(u.a,{theme:"dark",mode:"inline",selectedKeys:S,children:P.map((function(e,t){return Object(g.jsx)(u.a.Item,{onClick:function(){return F([(t=e).path]),void z.push(t.path);var t},children:Object(g.jsx)(C.a,{id:e.name})},e.path)}))})]}),Object(g.jsxs)(j.a,{className:"site-layout",children:[Object(g.jsx)(_,{className:"site-layout-background",style:{padding:0},children:Object(g.jsx)("div",{className:"header",children:Object(g.jsxs)("span",{children:[Object(g.jsx)(o.a,{onClick:function(){v(!f)},className:"change_drak",children:Object(g.jsx)(C.a,{id:"changeTheme"})}),f&&Object(g.jsx)(w.a,{color:i,onChange:function(e){return function(e){localStorage.setItem("theme",e),b(e),v(!1)}(e.hex)},className:"drak_controll"}),Object(g.jsx)(o.a,{onClick:function(){var e="zh"===a?"en":"zh";localStorage.setItem("locale",e),n(e)},children:Object(g.jsx)(C.a,{id:"langleName"})})]})})}),Object(g.jsx)(W,{className:"site-layout-background",children:Object(g.jsx)(p.d,{children:Object(O.a)(h)})})]})]})})},T=a(90);i.a.render(Object(g.jsx)(T.a,{children:Object(g.jsx)(D,{})}),document.getElementById("root"))},344:function(e,t,a){"use strict";a.r(t);var n=a(64),c=a(65),s=a(71),r=a(69),i=a(0),o=a(162),u=(a(345),a(174)),l=(a(132),a(55)),j=(a(193),a(122)),b=a(48),p=a.n(b),g=a.p+"static/media/1.72f86134.pdf",m=a(100),d=a(129),h=a(130),O=a(354),f=a(355),v=a(356),x=a(357),N=a(13);m.c.GlobalWorkerOptions.workerSrc="https://cdn.bootcdn.net/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js";var k=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={pageNumber:1,pageNumberInput:1,pageNumberFocus:!1,numPages:1,pageWidth:700,fullscreen:!1},e.onDocumentLoadSuccess=function(t){var a=t.numPages;e.setState({numPages:a})},e.lastPage=function(){if(1!=e.state.pageNumber){var t=e.state.pageNumber-1;e.setState({pageNumber:t,pageNumberInput:t})}},e.nextPage=function(){if(e.state.pageNumber!=e.state.numPages){var t=e.state.pageNumber+1;e.setState({pageNumber:t,pageNumberInput:t})}},e.onPageNumberFocus=function(t){e.setState({pageNumberFocus:!0})},e.onPageNumberBlur=function(t){e.setState({pageNumberFocus:!1,pageNumberInput:e.state.pageNumber})},e.onPageNumberChange=function(t){var a=t.target.value;a=(a=a<=0?1:a)>=e.state.numPages?e.state.numPages:a,e.setState({pageNumberInput:a})},e.toPage=function(t){e.setState({pageNumber:Number(t.target.value)})},e.pageZoomOut=function(){var t=.8*e.state.pageWidth;t>300&&e.setState({pageWidth:t})},e.pageZoomIn=function(){var t=1.1*e.state.pageWidth;t<1205&&e.setState({pageWidth:t})},e.pageFullscreen=function(){e.state.fullscreen?e.setState({fullscreen:!1,pageWidth:700}):e.setState({fullscreen:!0,pageWidth:1150})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.state,a=t.pageNumber,n=t.pageNumberFocus,c=t.pageNumberInput,s=t.numPages,r=t.pageWidth,i=t.fullscreen;return Object(N.jsxs)("div",{ref:function(t){return e.wRef=t},className:p.a.view,children:[Object(N.jsx)("div",{className:p.a.pageContainer,children:Object(N.jsx)(m.a,{file:g,onLoadSuccess:this.onDocumentLoadSuccess,loading:Object(N.jsx)(j.a,{size:"large"}),children:Object(N.jsx)(m.b,{pageNumber:a,width:r,loading:Object(N.jsx)(j.a,{size:"large"})})})}),Object(N.jsxs)("div",{className:p.a.pageTool,children:[Object(N.jsx)(l.a,{title:1==a?"\u5df2\u662f\u7b2c\u4e00\u9875":"\u4e0a\u4e00\u9875",children:Object(N.jsx)(d.a,{className:p.a.svg,onClick:this.lastPage})}),Object(N.jsx)(u.a,{value:n?c:a,onFocus:this.onPageNumberFocus,onBlur:this.onPageNumberBlur,onChange:this.onPageNumberChange,onPressEnter:this.toPage,type:"number"})," / ",s,Object(N.jsx)(l.a,{title:a==s?"\u5df2\u662f\u6700\u540e\u4e00\u9875":"\u4e0b\u4e00\u9875",children:Object(N.jsx)(h.a,{className:p.a.svg,onClick:this.nextPage})}),Object(N.jsx)(l.a,{title:"\u653e\u5927",children:Object(N.jsx)(O.a,{className:p.a.svg,onClick:this.pageZoomIn})}),Object(N.jsx)(l.a,{title:"\u7f29\u5c0f",children:Object(N.jsx)(f.a,{className:p.a.svg,onClick:this.pageZoomOut})}),Object(N.jsx)(l.a,{title:i?"\u6062\u590d\u9ed8\u8ba4":"\u9002\u5408\u7a97\u53e3",children:i?Object(N.jsx)(v.a,{className:p.a.svg,onClick:this.pageFullscreen}):Object(N.jsx)(x.a,{className:p.a.svg,onClick:this.pageFullscreen})})]})]})}}]),a}(i.PureComponent),S=function(e){return Object(N.jsx)(k,Object(o.a)({},e))},P=(a(235),function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(N.jsx)("div",{children:Object(N.jsx)(S,{})})}}]),a}(i.Component));t.default=P},48:function(e,t,a){e.exports={view:"File_view__1yPE1",svg:"File_svg__1bpEF",pageContainer:"File_pageContainer__XduBb",pageTool:"File_pageTool__3oRtz"}}},[[343,1,2]]]);
//# sourceMappingURL=main.56ec1aaa.chunk.js.map