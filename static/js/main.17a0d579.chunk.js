(this["webpackJsonpwidget-quiz"]=this["webpackJsonpwidget-quiz"]||[]).push([[0],{164:function(e,t,n){},165:function(e,t,n){},166:function(e,t,n){},167:function(e,t,n){},168:function(e,t,n){},169:function(e,t,n){"use strict";n.r(t);var r,a,i,c=n(0),s=n.n(c),o=n(11),u=n.n(o),l=(n(77),n(8)),d=n(220),j=n(221),b=n(170),h=n(211),f=n(216),x=n(217),O=n(41),m=n.n(O),p=n(55),g=n.n(p),v=n(214),w=n(15),y=n(30),C=n(16),T=(C.a.div(r||(r=Object(w.a)(["\n  animation: 1.5s "," 2;\n"])),Object(C.b)(a||(a=Object(w.a)(["",""])),y.shake)),C.a.h3(i||(i=Object(w.a)(["\n  padding: 4px;\n  margin: 0;\n  width: 100px;\n  text-align: center;\n  border-radius: 0%;\n  font-size: 36px;\n  border: ",";\n  font-family: 'Open Sans', sans-serif;\n  background: ",";\n  color: white;\n  border-radius: 12px;\n  right: 10px;\n  position: relative;\n"])),(function(e){return"1px solid ".concat(e.background)}),(function(e){return e.background}))),S=(n(160),n(2));g()(m.a);var k,q,N,F,z,M,I,E=Object(h.a)({root:{width:"100%",position:"relative",top:"35px"}}),B=function(e){var t=e.duration,n=e.updateDuration,r=E(),a=s.a.useState(100),i=Object(l.a)(a,2),o=i[0],u=i[1],d=Object(c.useState)(Number(t)),j=Object(l.a)(d,2),b=j[0],h=j[1],f=Object(c.useState)("#2962ff"),x=Object(l.a)(f,2),O=x[0],p=x[1],g=Math.floor(t/100);Object(c.useEffect)((function(){var e=setInterval((function(){0!==b&&(h(b-1),b%g===0&&u(o-1),w()),n(b)}),1e3);return function(){clearInterval(e)}}),[b]);var w=function(){60===Number(t)?(15===b&&p("#dd2c00"),b===Math.round(Number(t)/2)&&p("darkorange")):(b===Math.round(Number(t)/2)&&p("darkorange"),60===b&&p("#dd2c00"))};return Object(S.jsxs)("div",{style:{marginTop:"-10px"},children:[Object(S.jsx)("div",{className:r.root,children:Object(S.jsx)(v.a,{variant:"determinate",style:{height:"10px"},value:o})}),Object(S.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",zIndex:"10"},children:Object(S.jsx)(T,{background:O,children:m.a.duration(b,"seconds").format("hh:mm:ss")})})]})},D=(n(44),n(22)),A=n(47),L=n(218),P=n(222),R=function(e){var t=e.heading;return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(f.a,{style:{background:"#fff",borderBottom:"3px solid #7482E8",marginBottom:"10px"},children:Object(S.jsx)(x.a,{children:Object(S.jsx)(A.a,{style:{fontWeight:600,color:"#5564CC"},variant:"h3",children:t})})})})},J=function(e){var t=e.children,n=e.className;return Object(S.jsx)(f.a,{style:{padding:"50px",textAlign:"center",marginTop:"3%",marginBottom:"5%",height:"100%",background:"#fff",backdropFilter:"blur(4px)",lineHeight:"2em",borderBottom:"3px solid #7482E8"},className:n,children:t})},W=C.a.div(k||(k=Object(w.a)(["\n  animation: 1.5s "," 1;\n"])),Object(C.b)(q||(q=Object(w.a)(["",""])),y.slideInRight)),Y=C.a.div(N||(N=Object(w.a)(["\n  animation: 1s "," 1;\n"])),Object(C.b)(F||(F=Object(w.a)(["",""])),y.fadeInUp)),U=C.a.div(z||(z=Object(w.a)(["\n  animation: 1s "," infinite;\n"])),Object(C.b)(M||(M=Object(w.a)(["",""])),y.flash)),G=C.a.section(I||(I=Object(w.a)(["\n  border: 1px solid black;\n"]))),H=(n(164),n(165),n(37)),V=n(45),_=(n.p,n(6)),K=n(64),Q=n(223),X=n(219),Z=Object(_.a)({paper:{border:"1px solid #d3d4d5"}})((function(e){return Object(S.jsx)(K.a,Object(D.a)({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))})),$=Object(_.a)((function(e){return{root:{"&:focus":{backgroundColor:e.palette.primary.main,"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}}}}))(Q.a);function ee(e){var t=e.setTime,n=s.a.useState(null),r=Object(l.a)(n,2),a=r[0],i=r[1],c=s.a.useState("300"),o=Object(l.a)(c,2),u=o[0],d=o[1],j=function(e){i(null);var n=e.currentTarget.dataset.duration;d(n),t(Number(n))};return Object(S.jsxs)("div",{children:[Object(S.jsx)(L.a,{"aria-controls":"customized-menu","aria-haspopup":"true",variant:"contained",color:"primary",onClick:function(e){i(e.currentTarget)},style:{marginTop:10,width:"100%"},children:Object(S.jsxs)(A.a,{variant:"h6",children:["Choose Timing : ",Number(u)/60," mins"]})}),Object(S.jsxs)(Z,{id:"customized-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:function(){i(null)},children:[Object(S.jsx)($,{"data-duration":"60",onClick:j,selected:"60"===u,children:Object(S.jsx)(X.a,{primary:"1 min"})}),Object(S.jsx)($,{"data-duration":"180",onClick:j,selected:"180"===u,children:Object(S.jsx)(X.a,{primary:"3 min"})}),Object(S.jsx)($,{"data-duration":"300",onClick:j,selected:"300"===u,children:Object(S.jsx)(X.a,{primary:"5 min"})})]})]})}for(var te={id:"sdkdf-34083xf-23nkf34",games:[]},ne=s.a.createContext(null),re=(n.p,n.p+"static/media/question.06eaefea.svg"),ae=(n.p,n.p,n.p,function e(t){Object(H.a)(this,e),this.value=t,this.next=null}),ie=function(){function e(t){Object(H.a)(this,e),this.rear=null,this.front=null,this.size=t,this.currentSize=0}return Object(V.a)(e,[{key:"isFull",value:function(){return this.currentSize>=this.size}},{key:"enqueue",value:function(e){var t=new ae(e);if(this.currentSize+=1,null===this.rear)return this.rear=t,this.front=t,!0;this.rear.next=t,this.rear=t}},{key:"dequeue",value:function(){if(null!==this.front){var e=this.front;return this.front=this.front.next,this.currentSize-=1,e}this.rear=null}},{key:"clear",value:function(){this.front=null,this.rear=null,this.currentSize=0}}]),e}(),ce=Object(h.a)({root:{width:75,"& .MuiInputBase-root":{fontSize:"3rem"}},currentScore:{position:"absolute",float:"left",top:0,left:0,width:50,height:50,backgroundColor:"#8D9EF8",borderBottomRightRadius:50},currentScoreText:{textAlign:"left",justifyContent:"center",paddingLeft:10,color:"white",fontWeight:700}}),se=[{score:"24",freq:"5"},{score:"36",freq:"9"},{score:"41",freq:"12"},{score:"57",freq:"6"},{score:"62",freq:"8"},{score:"68",freq:"5"},{score:"72",freq:"14"},{score:"81",freq:"5"},{score:"93",freq:"3"}],oe=se.reduce((function(e,t){return e+Number(t.freq)}),0),ue=function(e,t){var n=t/100*oe;return function(e,t){var n=0,r=[];se.forEach((function(e){r.push(Number(e.score))}));var a=[];se.forEach((function(e){a.push(Number(e.freq))}));for(var i=0;i<r.length;i+=1){var c=n+a[i];if(t<c)return r[i];n=c}return r[r.length-1]}(0,Math.floor(n))},le=[],de=0;de<=100;de+=10)le.push(Number(ue(0,de)));var je={},be=new ie(10),he=function(e){e.duration;var t=ce(),n=Object(c.useState)(0),r=Object(l.a)(n,2),a=r[0],i=r[1],s=Object(c.useState)(0),o=Object(l.a)(s,2),u=o[0],j=o[1],b=Object(c.useState)(0),h=Object(l.a)(b,2),f=h[0],x=h[1],O=Object(c.useState)(""),m=Object(l.a)(O,2),p=m[0],g=m[1],v=Object(c.useState)(!1),w=Object(l.a)(v,2),y=w[0],C=w[1],T=Object(c.useState)(300),k=Object(l.a)(T,2),q=(k[0],k[1]),N=Object(c.useState)(300),F=Object(l.a)(N,2),z=F[0],M=F[1],I=Object(c.useState)(0),E=Object(l.a)(I,2),D=E[0],H=E[1],V=Object(c.useState)(0),_=Object(l.a)(V,2),K=_[0],Q=_[1],X=Object(c.useState)(!0),Z=Object(l.a)(X,2),$=Z[0],te=Z[1],ae=Object(c.useState)(!1),ie=Object(l.a)(ae,2),se=ie[0],oe=ie[1],ue=(new Date).toISOString(),de=Object(c.useContext)(ne),he=de.user,fe=de.setUser,xe=function(){for(var e,t=0;;){var n=[10,100,1e3];switch(t=0,e=n[Math.floor(Math.random()*n.length)]){case 10:t=Math.round(9*Math.random());break;case 100:t=10+Math.round(89*Math.random());break;case 1e3:t=100+Math.round(899*Math.random())}if(t in je===!1){if(be.isFull()){var r=be.dequeue();delete je[r.value],be.enqueue(t),je[t]=0}else je[t]=0,be.enqueue(t);break}}var a=e-t;x(e),j(a),i(t)};Object(c.useEffect)((function(){window.onbeforeunload=function(e){var t=e||window.event;return t.preventDefault(),t&&(t.returnValue=""),""},xe()}),[]);var Oe=function(e){var t=Number(e.target.value);g(e.target.value),""===e.target.value?C(!1):t!==u?C(!0):(setTimeout((function(){g(""),xe()}),300),C(!1),H(D+1),Q(function(e){for(var t=Number(le.length-1),n=1;n<le.length;n+=1)if(Number(e)<le[n]){t=n;break}var r=t-1,a=(10*r+(e-le[r]+1)/(le[t]-le[r]+1)*10).toFixed(2);return a<0?0:a>100?100:a}(D)))},me=function(e){q(e),M(e)};return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(R,{heading:"Course Introduction"}),$?Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)(W,{children:[Object(S.jsxs)(J,{children:[Object(S.jsx)(A.a,{style:{fontWeight:400,color:"#5564CC",marginBottom:10},variant:"h4",children:"Rules for the game"}),Object(S.jsxs)("div",{style:{paddingTop:"5px",fontWeight:200,color:"#5564CC"},children:[Object(S.jsx)(A.a,{variant:"h6",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}),Object(S.jsx)(A.a,{variant:"h6",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.."})]})]}),Object(S.jsxs)("div",{className:"start-game-container",children:[Object(S.jsx)(ee,{setTime:me}),Object(S.jsx)(L.a,{color:"primary",variant:"contained",style:{marginTop:10},onClick:function(){ue=(new Date).toISOString(),te(!1),oe(!0)},children:Object(S.jsx)(A.a,{variant:"h6",children:"Let's Go"})})]})]})}):se?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(Y,{children:[Object(S.jsx)(B,{duration:z,updateDuration:function(e){return function(e){q(e),e<=0&&(oe(!1),he.games.push({duration:z,startTime:ue,score:D}))}(e)}}),Object(S.jsxs)(J,{className:"question-section",children:[Object(S.jsx)("div",{className:t.currentScore,children:Object(S.jsxs)("div",{className:t.currentScoreText,children:[" ",D," "]})}),Object(S.jsxs)(d.a,{children:[Object(S.jsx)(A.a,{variant:"h3",display:"inline",style:{padding:5},children:a}),Object(S.jsx)(A.a,{variant:"h3",display:"inline",style:{padding:5},children:"+"}),Object(S.jsx)(A.a,{variant:"h3",display:"inline",style:{padding:5},children:Object(S.jsx)(P.a,{autoFocus:!0,multiline:!1,rowsMax:1,className:t.root,inputProps:{style:{padding:0,border:"".concat(y?"2px":"1px"," solid ").concat(y?"red":"black")},maxLength:(f-a).toString().length,inputMode:"numeric"},error:y,value:p,onChange:function(e){return Oe(e)}})}),Object(S.jsx)(A.a,{variant:"h3",display:"inline",style:{padding:5},children:"="}),Object(S.jsx)(A.a,{variant:"h3",display:"inline",style:{padding:5},children:f})]})]})]}),Object(S.jsx)("img",{src:re,width:"250",height:"auto",className:"question-image"})]}):Object(S.jsxs)(W,{children:[Object(S.jsxs)(J,{children:[Object(S.jsx)(U,{children:Object(S.jsx)(A.a,{variant:"h3",display:"inline",style:{textTransform:"uppercase",fontFamily:"'Press Start 2P', cursive",fontSize:"3em"},children:"Game Over"})}),Object(S.jsxs)(A.a,{variant:"h4",children:["Your score: ",D]}),Object(S.jsxs)(A.a,{variant:"h4",children:["Your percentile: ",K]}),he.games.length>0&&Object(S.jsx)(G,{children:Object(S.jsxs)(A.a,{variant:"h5",children:[Object(S.jsx)("div",{style:{borderBottom:"1px solid black"},children:"Previous Scores"}),Object(S.jsx)("div",{style:{maxHeight:"150px",overflowY:"auto"},children:he.games.map((function(e){return Object(S.jsxs)("li",{children:["Duration: ",Number(e.duration)/60,", Score: ",e.score]})}))})]})})]}),Object(S.jsxs)("div",{className:"start-game-container",children:[Object(S.jsx)(ee,{setTime:me}),Object(S.jsx)(L.a,{color:"primary",variant:"contained",style:{marginTop:10},onClick:function(){ue=(new Date).toISOString(),be.clear(),je={},fe(he),g(""),H(0),oe(!0),allValues={},C(!1)},children:Object(S.jsx)(A.a,{variant:"h6",children:"REPLAY"})})]})]})]})},fe=(n(166),function(e){var t=Object(c.useState)(te),n=Object(l.a)(t,2),r=n[0],a=n[1];return Object(S.jsx)(b.a,{variant:"outlined",style:{display:"flex",flexDirection:"row",backgroundColor:"#F5F7FA"},children:Object(S.jsx)(ne.Provider,{value:{user:r,setUser:a},children:Object(S.jsx)(Oe,{})})})}),xe=Object(h.a)({root:{width:900,backgroundColor:"#F5F7FA"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},inside:{flexDirection:"row",display:"flex",height:"60%",alignContent:"center",justifyContent:"center",marign:"0px 20px"},button:{width:"100%",height:"100%"}});function Oe(){var e=xe(),t=(e.bullet,Object(c.useState)(!0)),n=Object(l.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){setTimeout((function(){a(!1)}),3e3)})),Object(S.jsx)(d.a,{container:!0,children:Object(S.jsx)(d.a,{item:!0,md:12,children:Object(S.jsx)(f.a,{className:"dashboard-background container",children:Object(S.jsx)(x.a,{className:"dashboard-background",children:r?Object(S.jsx)(j.a,{variant:"rect",width:"100%",height:"20%",children:Object(S.jsx)("div",{style:{paddingTop:"10%"}})}):Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(he,{duration:5})})})})})})}n(167),n(49),n(63);n(168);function me(e){var t=e.domElement,n=(t.getAttribute("data-title"),t.getAttribute("data-course"),t.getAttribute("data-exercise")),r=Object(c.useState)(),a=Object(l.a)(r,2),i=(a[0],a[1]),s=Object(c.useState)(""),o=Object(l.a)(s,2),u=(o[0],o[1],Object(c.useState)([])),j=Object(l.a)(u,2);j[0],j[1];return Object(c.useEffect)((function(){i(!1)}),[n]),Object(S.jsx)(d.a,{container:!0,children:Object(S.jsx)(fe,{})})}var pe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,224)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};document.querySelectorAll(".quiz_widget").forEach((function(e){u.a.render(Object(S.jsx)(s.a.StrictMode,{children:Object(S.jsx)(me,{domElement:e})}),e)})),pe()},49:function(e){e.exports=JSON.parse('[{"questionText":"4 + 5","answerOptions":[{"answerText":"11","isCorrect":false},{"answerText":"18","isCorrect":false},{"answerText":"9","isCorrect":true},{"answerText":"19","isCorrect":false}]},{"questionText":"1 + 1","answerOptions":[{"answerText":"11","isCorrect":false},{"answerText":"15","isCorrect":false},{"answerText":"71","isCorrect":false},{"answerText":"2","isCorrect":true}]},{"questionText":"1 + 1","answerOptions":[{"answerText":"11","isCorrect":false},{"answerText":"15","isCorrect":false},{"answerText":"71","isCorrect":false},{"answerText":"2","isCorrect":true}]}]')},63:function(e){e.exports=JSON.parse('[{"questionText":"4 - 5","answerOptions":[{"answerText":"11","isCorrect":false},{"answerText":"18","isCorrect":false},{"answerText":"-1","isCorrect":true},{"answerText":"19","isCorrect":false}]},{"questionText":"1 - 1","answerOptions":[{"answerText":"11","isCorrect":false},{"answerText":"15","isCorrect":false},{"answerText":"71","isCorrect":false},{"answerText":"0","isCorrect":true}]},{"questionText":"11 - 1","answerOptions":[{"answerText":"11","isCorrect":false},{"answerText":"15","isCorrect":false},{"answerText":"71","isCorrect":false},{"answerText":"10","isCorrect":true}]}]')},77:function(e,t,n){}},[[169,1,2]]]);
//# sourceMappingURL=main.17a0d579.chunk.js.map