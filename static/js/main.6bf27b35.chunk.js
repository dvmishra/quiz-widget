(this["webpackJsonpwidget-quiz"]=this["webpackJsonpwidget-quiz"]||[]).push([[0],{151:function(e,t,n){},152:function(e,t,n){},153:function(e,t,n){},154:function(e,t,n){},155:function(e,t,n){"use strict";n.r(t);var r,a,i,c=n(0),s=n.n(c),o=n(11),u=n.n(o),l=(n(65),n(10)),d=n(199),j=n(200),b=n(156),f=n(191),x=n(196),h=n(197),O=n(35),p=n.n(O),g=n(46),v=n.n(g),m=n(194),w=n(15),T=n(29),C=n(16),y=(C.a.div(r||(r=Object(w.a)(["\n  animation: 1.5s "," 2;\n"])),Object(C.b)(a||(a=Object(w.a)(["",""])),T.shake)),C.a.h3(i||(i=Object(w.a)(["\n  padding: 4px;\n  margin: 0;\n  width: 100px;\n  text-align: center;\n  border-radius: 0%;\n  font-size: 36px;\n  border: ",";\n  font-family: 'Open Sans', sans-serif;\n  background: ",";\n  color: white;\n  border-radius: 12px;\n  right: 10px;\n  position: relative;\n"])),(function(e){return"1px solid ".concat(e.background)}),(function(e){return e.background}))),S=n(3);v()(p.a);for(var q,k,M,N,F=Object(f.a)({root:{width:"100%",position:"relative",top:"30px"}}),E=function(e){var t=e.duration,n=e.updateDuration,r=F(),a=s.a.useState(100),i=Object(l.a)(a,2),o=i[0],u=i[1],d=Object(c.useState)(t),j=Object(l.a)(d,2),b=j[0],f=j[1],x=Object(c.useState)("#2962ff"),h=Object(l.a)(x,2),O=h[0],g=h[1],v=Math.floor(t/100);Object(c.useEffect)((function(){var e=setInterval((function(){0!==b&&(f(b-1),b%v===0&&u(o-1),w()),n(b)}),1e3);return function(){clearInterval(e)}}),[b]);var w=function(){b===Math.round(t/2)?g("darkorange"):60===b&&g("#dd2c00")};return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{className:r.root,children:Object(S.jsx)(m.a,{variant:"determinate",value:o,style:{height:"5px"}})}),Object(S.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",position:"relative",zIndex:"10"},children:Object(S.jsx)(y,{background:O,children:p.a.duration(b,"seconds").format("hh:mm:ss")})})]})},I=n(198),z=n(201),A=n(202),D=function(e){var t=e.heading;return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(x.a,{style:{background:"transparent",backdropFilter:"blur(4px)"},children:Object(S.jsx)(h.a,{children:Object(S.jsx)(I.a,{variant:"h3",children:t})})})})},J=function(e){var t=e.children,n=e.className;return Object(S.jsx)(x.a,{style:{padding:"50px",textAlign:"center",marginTop:"3%",height:"100%",background:"transparent",backdropFilter:"blur(4px)"},className:n,children:t})},L=C.a.div(q||(q=Object(w.a)(["\n  animation: 1.5s "," 1;\n"])),Object(C.b)(k||(k=Object(w.a)(["",""])),T.slideInRight)),P=C.a.div(M||(M=Object(w.a)(["\n  animation: 1s "," 1;\n"])),Object(C.b)(N||(N=Object(w.a)(["",""])),T.fadeInUp)),Y=(n(151),Object(f.a)({root:{width:75,"& .MuiInputBase-root":{fontSize:"3rem"}}})),B=[{score:"24",freq:"5"},{score:"36",freq:"9"},{score:"41",freq:"12"},{score:"57",freq:"6"},{score:"62",freq:"8"},{score:"68",freq:"5"},{score:"72",freq:"14"},{score:"81",freq:"5"},{score:"93",freq:"3"}],R=B.reduce((function(e,t){return e+Number(t.freq)}),0),G=function(e,t){var n=t/100*R;return function(e,t){var n=0,r=[];B.forEach((function(e){r.push(Number(e.score))}));var a=[];B.forEach((function(e){a.push(Number(e.freq))}));for(var i=0;i<r.length;i+=1){var c=n+a[i];if(t<c)return r[i];n=c}return r[r.length-1]}(0,Math.floor(n))},U=[],_=0;_<=100;_+=10)U.push(Number(G(0,_)));var H=function(e){var t=e.duration,n=Y(),r=Object(c.useState)(0),a=Object(l.a)(r,2),i=a[0],s=a[1],o=Object(c.useState)(0),u=Object(l.a)(o,2),j=u[0],b=u[1],f=Object(c.useState)(0),x=Object(l.a)(f,2),h=x[0],O=x[1],p=Object(c.useState)(""),g=Object(l.a)(p,2),v=g[0],m=g[1],w=Object(c.useState)(!1),T=Object(l.a)(w,2),C=T[0],y=T[1],q=Object(c.useState)(t),k=Object(l.a)(q,2),M=k[0],N=k[1],F=Object(c.useState)(0),B=Object(l.a)(F,2),G=B[0],_=B[1],H=Object(c.useState)(0),K=Object(l.a)(H,2),Q=K[0],V=K[1],W=function(){var e=[10,100,1e3],t=e[Math.floor(Math.random()*e.length)],n=0;switch(t){case 10:n=Math.round(9*Math.random());break;case 100:n=10+Math.round(89*Math.random());break;case 1e3:n=100+Math.round(899*Math.random());break;default:n=Math.round(10*Math.random())}var r=t-n;O(t),b(r),s(n)};Object(c.useEffect)((function(){W()}),[]);var X=function(e){var t=Number(e.target.value);m(e.target.value),""===e.target.value?y(!1):t!==j?y(!0):(setTimeout((function(){m(""),W()}),500),y(!1),_(G+1),V(function(e){for(var t=Number(U.length-1),n=1;n<U.length;n+=1)if(Number(e)<U[n]){t=n;break}var r=t-1,a=(10*r+(e-U[r]+1)/(U[t]-U[r]+1)*10).toFixed(2);return a<0?0:a>100?100:a}(G)))};return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(D,{heading:"Course Introduction"}),M>0?Object(S.jsxs)(P,{children:[Object(S.jsx)(E,{duration:t,updateDuration:function(e){return N(e)}}),Object(S.jsx)(J,{className:"question-section",children:Object(S.jsxs)(d.a,{children:[Object(S.jsx)(I.a,{variant:"h3",display:"inline",style:{padding:5},children:i}),Object(S.jsx)(I.a,{variant:"h3",display:"inline",style:{padding:5},children:"+"}),Object(S.jsx)(I.a,{variant:"h3",display:"inline",style:{padding:5},children:Object(S.jsx)(z.a,{autoFocus:!0,multiline:!1,rowsMax:1,className:n.root,inputProps:{style:{padding:0,border:"".concat(C?"2px":"1px"," solid ").concat(C?"red":"black")},maxLength:(h-i).toString().length,inputMode:"numeric"},error:C,value:v,onChange:function(e){return X(e)}})}),Object(S.jsx)(I.a,{variant:"h3",display:"inline",style:{padding:5},children:"="}),Object(S.jsx)(I.a,{variant:"h3",display:"inline",style:{padding:5},children:h})]})})]}):Object(S.jsxs)(L,{children:[Object(S.jsxs)(J,{children:[Object(S.jsx)(I.a,{variant:"h3",display:"inline",children:"Game Over"}),Object(S.jsxs)(I.a,{variant:"h4",children:["Your score: ",G]}),Object(S.jsxs)(I.a,{variant:"h4",children:["Your percentile score is : ",Q,". You were compared against score of ",R," peers."]})]}),Object(S.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(S.jsx)(A.a,{color:"primary",variant:"contained",style:{marginTop:10},onClick:function(){N(t),m("")},children:Object(S.jsx)(I.a,{variant:"h6",children:"REPLAY"})})})]})]})},K=(n(152),function(e){return Object(S.jsx)(b.a,{variant:"outlined",style:{display:"flex",flexDirection:"row"},children:Object(S.jsx)(V,{})})}),Q=Object(f.a)({root:{width:900},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},inside:{flexDirection:"row",display:"flex",height:"60%",alignContent:"center",justifyContent:"center",marign:"0px 20px"},button:{width:"100%",height:"100%"}});function V(){var e=Q(),t=(e.bullet,Object(c.useState)(!0)),n=Object(l.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){setTimeout((function(){a(!1)}),3e3)})),Object(S.jsx)(d.a,{container:!0,children:Object(S.jsx)(d.a,{item:!0,md:12,children:Object(S.jsx)(x.a,{className:"dashboard-background container",children:Object(S.jsx)(h.a,{children:r?Object(S.jsx)(j.a,{variant:"rect",width:"100%",height:"20%",children:Object(S.jsx)("div",{style:{paddingTop:"10%"}})}):Object(S.jsx)(H,{duration:300})})})})})}n(153),n(40),n(54),n(41);n(154);function W(e){var t=e.domElement,n=(t.getAttribute("data-title"),t.getAttribute("data-course"),t.getAttribute("data-exercise")),r=Object(c.useState)(),a=Object(l.a)(r,2),i=(a[0],a[1]),s=Object(c.useState)(""),o=Object(l.a)(s,2),u=(o[0],o[1],Object(c.useState)([])),j=Object(l.a)(u,2);j[0],j[1];return Object(c.useEffect)((function(){i(!1)}),[n]),Object(S.jsx)(d.a,{container:!0,children:Object(S.jsx)(K,{})})}var X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,203)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};document.querySelectorAll(".quiz_widget").forEach((function(e){u.a.render(Object(S.jsx)(s.a.StrictMode,{children:Object(S.jsx)(W,{domElement:e})}),e)})),X()},40:function(e){e.exports=JSON.parse('[{"questionText":"4 + 5","answerOptions":[{"answerText":"11","isCorrect":false},{"answerText":"18","isCorrect":false},{"answerText":"9","isCorrect":true},{"answerText":"19","isCorrect":false}]},{"questionText":"1 + 1","answerOptions":[{"answerText":"11","isCorrect":false},{"answerText":"15","isCorrect":false},{"answerText":"71","isCorrect":false},{"answerText":"2","isCorrect":true}]},{"questionText":"1 + 1","answerOptions":[{"answerText":"11","isCorrect":false},{"answerText":"15","isCorrect":false},{"answerText":"71","isCorrect":false},{"answerText":"2","isCorrect":true}]}]')},54:function(e){e.exports=JSON.parse('[{"questionText":"4 - 5","answerOptions":[{"answerText":"11","isCorrect":false},{"answerText":"18","isCorrect":false},{"answerText":"-1","isCorrect":true},{"answerText":"19","isCorrect":false}]},{"questionText":"1 - 1","answerOptions":[{"answerText":"11","isCorrect":false},{"answerText":"15","isCorrect":false},{"answerText":"71","isCorrect":false},{"answerText":"0","isCorrect":true}]},{"questionText":"11 - 1","answerOptions":[{"answerText":"11","isCorrect":false},{"answerText":"15","isCorrect":false},{"answerText":"71","isCorrect":false},{"answerText":"10","isCorrect":true}]}]')},65:function(e,t,n){}},[[155,1,2]]]);
//# sourceMappingURL=main.6bf27b35.chunk.js.map