(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[899],{5864:function(e,t,n){"use strict";n.d(t,{I0:function(){return r},K1:function(){return o},Y6:function(){return s},e$:function(){return l},yd:function(){return d}});var i=n(9521),s=i.ZP.div.withConfig({displayName:"primitives__DsapTitle",componentId:"sc-6zk9kj-0"})({borderBottom:"1px solid #000",padding:"1em"}),o=i.ZP.div.withConfig({displayName:"primitives__QuestionCounterWrap",componentId:"sc-6zk9kj-1"})({borderBottom:"1px solid #000",padding:"1em",display:"flex",justifyContent:"space-between"}),r=i.ZP.a.withConfig({displayName:"primitives__NextQuestionButton",componentId:"sc-6zk9kj-2"})({cursor:"pointer",fontSize:"1em",lineHeight:"1.5em",padding:"0.2em 1em","&:hover":{background:"#efefef"}}),d=i.ZP.div.withConfig({displayName:"primitives__QuestionPromptWrap",componentId:"sc-6zk9kj-3"})({borderBottom:"1px solid #000",padding:"1em"}),l=i.ZP.div.withConfig({displayName:"primitives__QuestionTitle",componentId:"sc-6zk9kj-4"})({marginBottom:"1em","> span":{fontWeight:800},"> code":{display:"inline-block",background:"whitesmoke",width:"100%",marginTop:"0.5em",marginBottom:"0.5em",padding:"5px"}})},9211:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return B},default:function(){return T}});var i=n(7812),s=n(6835),o=n(5935),r=n(9008),d=n.n(r),l=n(5893),a=function(e){var t=e.title;return(0,l.jsxs)(d(),{children:[(0,l.jsx)("title",{children:t}),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]})},c=n(7294),u=n(9521),p=u.ZP.div.withConfig({displayName:"twoColWrapper__Wrapper",componentId:"sc-78h1rz-0"})({display:"flex",flexWrap:"wrap","&> :first-child":{flexBasis:"275px",flexGrow:1,borderRight:"1px solid #efefef",minHeight:"100vh"},"&> :last-child":{paddingTop:"1em",flexBasis:0,flexGrow:999,minInlineSize:"50%"}}),m=function(e){var t=e.children;return(0,l.jsx)(p,{children:t})},h=n(5864),f=n(5423),x=n.n(f),g=n(9604),v=n(4204),j=n(2307),_=n.n(j),w=u.ZP.div.withConfig({displayName:"primitives__EditorWrap",componentId:"sc-117zll1-0"})({fontFamily:"Source Code Pro"}),b=u.ZP.div.withConfig({displayName:"primitives__ActionButtonWrap",componentId:"sc-117zll1-1"})({display:"flex",flexDirection:"row",justifyContent:"space-between",padding:"1em",borderTop:"1px solid black",borderBottom:"1px solid black"}),y=u.ZP.div.withConfig({displayName:"primitives__RunButton",componentId:"sc-117zll1-2"})({background:"black",color:"white",padding:"0.5em",display:"flex",cursor:"pointer"}),k=u.ZP.div.withConfig({displayName:"primitives__ResultWrap",componentId:"sc-117zll1-3"})({display:"flex",flexDirection:"row",margin:"1em"}),C=u.ZP.div.withConfig({displayName:"primitives__ResultItem",componentId:"sc-117zll1-4"})(function(e){return{width:"25%",borderRadius:"0.3em",border:"1px solid ".concat(e.success?"#a3cfbb":"#f1aeb5"),marginRight:"1em",marginBottom:"1em"}}),N=u.ZP.div.withConfig({displayName:"primitives__ResultItemHeader",componentId:"sc-117zll1-5"})(function(e){return{padding:"1em",backgroundColor:"".concat(e.success?"#d1e7dd":"#f8d7da"),"& span":{backgroundColor:"whitesmoke",paddingLeft:"1em",paddingRight:"1em",marginLeft:"1em"}}}),P=u.ZP.div.withConfig({displayName:"primitives__ResultBody",componentId:"sc-117zll1-6"})({padding:"1em",display:"flex",flexDirection:"column","& span span":{width:"100%",backgroundColor:"whitesmoke",display:"inline-block",padding:"0.5em"}}),I={indent_size:2,space_in_empty_paren:!0},Z=function(e){var t=e.code,n=e.height,s=(e.editable,e.test),o=e.question,r=(0,c.useState)(!1);r[0],r[1];var d=(0,c.useState)(null),a=d[0],u=d[1],p=c.useRef(null),m=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=null===(e=p.current)||void 0===e?void 0:e.getValue(),i=x().transpile(null!=n?n:"");return Function("\n      ".concat(i,"\n      ").concat(t,"\n    "))()},h=c.useMemo(function(){return a?a.map(function(e,t){return(0,l.jsxs)(C,{success:e.result,children:[(0,l.jsxs)(N,{success:e.result,children:["Test ",(0,l.jsx)("span",{children:t+1})]}),(0,l.jsxs)(P,{children:[(0,l.jsxs)("span",{children:["Input: ",(0,l.jsx)("br",{}),(0,l.jsx)("span",{children:e.test})]}),(0,l.jsxs)("span",{children:["Expected: ",(0,l.jsx)("br",{}),(0,l.jsx)("span",{children:e.expected})]}),(0,l.jsxs)("span",{children:["Received: ",(0,l.jsx)("br",{}),(0,l.jsx)("span",{children:e.received})]})]})]},"result-".concat(t))}):null},[a]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(w,{children:(0,l.jsx)(g.ZP,{height:void 0===n?"500px":n,defaultLanguage:"typescript",defaultValue:(0,v.js)(void 0!==s&&s?o.boilerPlate:t,I),onMount:function(e){p.current=e}})}),(0,l.jsxs)(b,{children:[(0,l.jsx)(y,{onClick:function(){u(null)},children:"Test Code"}),(0,l.jsx)(y,{onClick:function(){var e,t=m("return ".concat(o.testName,";"));u(null===(e=o.testInputs)||void 0===e?void 0:e.map(function(e,n){var s=t.apply(void 0,(0,i.Z)(e)),r=o.tests[n];return{test:"".concat(e),expected:"".concat(r),received:"".concat(s),result:_()(s,r)}}))},children:"Test Code"})]}),(0,l.jsx)(k,{children:h})]})},z={title:"Sample Question",prompt:"Fill out a sample question",testName:"test",boilerPlate:" const test = (s: string) => {\n\n  }",testInputs:[["yo"],["test"]],tests:["yo","test"]},S=[z,{title:"Sample Question with a pretty long title",prompt:"Fill out a sample question and have the result be this long thing\n    where the value turns out to be an even longer thing. Sometimes its\n     not a longer thing and sometimes its a bit shorter <code>Test</code>\n      and heres some more example <br /><br /> hey theree ",testName:"test",boilerPlate:" const test = (s: string) => {\n\n  }",testInputs:[[[1,2,3]]],tests:[[1,2,3]]},z],B=!0,T=function(e){var t=e.initialIdx,n=c.useState(t),r=(0,s.Z)(n,2),d=r[0],u=r[1],p=c.useState(new Set([t])),f=(0,s.Z)(p,2),x=f[0],g=f[1],v=function e(){var t=Math.floor(Math.random()*(S.length-0)+0);return(console.log({potential:t}),x.has(t))?e():x.has(t)?void 0:t};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:"Datastructure & Algorithm Practice"}),(0,l.jsxs)(m,{children:[(0,l.jsxs)("div",{children:[(0,l.jsx)(h.Y6,{children:"DSAP"}),(0,l.jsxs)(h.K1,{children:[(0,l.jsxs)("span",{children:[x.size," of ",S.length]}),(0,l.jsx)(h.I0,{onClick:function(){var e=v();console.log({seenQuestions:x.size,nextIdx:e}),e&&(u(e),g(new Set([].concat((0,i.Z)(Array.from(x)),[e]))))},children:"⇥"})]}),(0,l.jsxs)(h.yd,{children:[(0,l.jsxs)(h.e$,{children:[(0,l.jsx)("span",{children:"Title:"})," ",S[d].title]}),(0,l.jsxs)(h.e$,{children:[(0,l.jsx)("span",{children:"Prompt:"})," ",(0,o.ZP)(S[d].prompt)]})]})]}),(0,l.jsx)("div",{children:(0,l.jsx)(Z,{question:S[0],test:!0,height:"500px"})})]})]})}},840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dsap",function(){return n(9211)}])},3411:function(e){function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=3411,e.exports=t},2183:function(){},3024:function(){},4240:function(){},3611:function(){},8353:function(){},1210:function(){},1480:function(){}},function(e){e.O(0,[138,424,774,888,179],function(){return e(e.s=840)}),_N_E=e.O()}]);