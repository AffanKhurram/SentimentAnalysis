(this["webpackJsonpsentiment-analysis"]=this["webpackJsonpsentiment-analysis"]||[]).push([[0],{103:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),r=c(35),s=c.n(r),o=c(0),j=c.n(o),i=c(4),b=c(15),l=c(128),d=c(125),u=c(126),O=c(123),x=c(46),f=c(80),h=(c(93),c(95),c(81)),p=f.a.initializeApp({apiKey:"AIzaSyB0Ks_ctrOohWnH1rDsfRl-yeWjacb6NxQ",authDomain:"sentiment-analysis-3354-dev.firebaseapp.com",projectId:"sentiment-analysis-3354-dev",storageBucket:"sentiment-analysis-3354-dev.appspot.com",messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/SentimentAnalysis",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyB0Ks_ctrOohWnH1rDsfRl-yeWjacb6NxQ",REACT_APP_FIREBASE_APP_ID:"1:1052634214312:web:4b50cf3085c622ea56b79d",REACT_APP_FIREBASE_AUTH_DOMAIN:"sentiment-analysis-3354-dev.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"1052634214312",REACT_APP_FIREBASE_PROJECT_ID:"sentiment-analysis-3354-dev",REACT_APP_FIREBASE_STORAGE_BUCKET:"sentiment-analysis-3354-dev.appspot.com"}).REACT_APP_FIREBASE_MESSAGE_SENDER_ID,appId:"1:1052634214312:web:4b50cf3085c622ea56b79d"}).auth(),m=Object(h.a)(),g=c(6),v=n.a.createContext();function y(){return Object(a.useContext)(v)}function w(e){var t=e.children,c=Object(a.useState)(),n=Object(b.a)(c,2),r=n[0],s=n[1],o=Object(a.useState)(!0),j=Object(b.a)(o,2),i=j[0],l=j[1],d=Object(a.useState)("#232f3e"),u=Object(b.a)(d,2),O=u[0],f=u[1];Object(a.useEffect)((function(){return p.onAuthStateChanged((function(e){s(e),l(!1)}))}),[]);var h={currentUser:r,color:O,signup:function(e,t){return p.createUserWithEmailAndPassword(e,t)},login:function(e,t){return p.signInWithEmailAndPassword(e,t)},signOut:function(){r&&p.signOut()},changePassword:function(e){if(r)return p.currentUser.updatePassword(e)},changeColor:function(e,t){r&&(Object(x.d)(Object(x.c)(m,"users/"+t),{color:e}),f(e))},getColor:function(){r?Object(x.a)(Object(x.c)(m,"users/"+r.email.replace(".",""))).then((function(e){var t=e.val().color;f(t)})).catch((function(e){f("#232f3e")})):f("#232f3e")}};return Object(g.jsx)(v.Provider,{value:h,children:!i&&t})}var E=c(20),S=c(18),C=(c(47),c(127)),A=c(70),_=c.n(A),N=c(31),P=c.n(N),I=c(122),R=c(86),k=c(121);function D(){var e=y(),t=e.currentUser,c=e.color,n=e.getColor,r=Object(S.f)();Object(a.useEffect)((function(){t&&r("/loggedindashboard",[t])}),[t,r]),n(),Object(a.useEffect)((function(){}),[c]);var s=Object(R.a)({palette:{background:{default:c},text:{primary:"#ffffff"}}});return Object(g.jsx)("div",{children:Object(g.jsxs)(k.a,{theme:s,children:[Object(g.jsx)("img",{alt:"not found",src:"/SentimentAnalysis/MainProjPic.png",className:"image"}),Object(g.jsx)("h1",{className:"header",children:"Review Busters"}),Object(g.jsx)("br",{}),Object(g.jsx)(I.a,{}),Object(g.jsx)(C.a,{endIcon:Object(g.jsx)(_.a,{}),component:E.b,to:"/login",size:"large",variant:"contained",color:"primary",children:"Login"}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)(C.a,{endIcon:Object(g.jsx)(_.a,{}),component:E.b,to:"/signup",size:"large",variant:"contained",color:"primary",children:"signup"}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)(C.a,{endIcon:Object(g.jsx)(P.a,{}),component:E.b,size:"large",to:"/wordprocessing",variant:"contained",color:"primary",children:"wordprocessing"}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{})]})})}function B(){var e=Object(a.useRef)(),t=Object(a.useRef)(),c=Object(a.useRef)(),n=y(),r=n.currentUser,s=n.signup,o=n.getColor,x=n.color,f=Object(a.useState)(""),h=Object(b.a)(f,2),p=h[0],m=h[1],v=Object(a.useState)(!1),w=Object(b.a)(v,2),C=w[0],A=w[1],_=Object(S.f)();o(),Object(a.useEffect)((function(){}),[x]),Object(a.useEffect)((function(){r&&_("/loggedindashboard",[r])}),[r,_]);var N=Object(R.a)({palette:{background:{default:x},text:{primary:"#ffffff"}}});function P(){return(P=Object(i.a)(j.a.mark((function a(n){return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.preventDefault(),t.current.value===c.current.value){a.next=3;break}return a.abrupt("return",m("Passwords do not match"));case 3:return a.prev=3,m(""),A(!0),a.next=8,s(e.current.value,t.current.value);case 8:a.next=15;break;case 10:a.prev=10,a.t0=a.catch(3),console.log(p),m("Failed to create an account"),A(!1);case 15:A(!1);case 16:case"end":return a.stop()}}),a,null,[[3,10]])})))).apply(this,arguments)}return Object(g.jsxs)(k.a,{theme:N,children:[Object(g.jsx)(I.a,{}),Object(g.jsx)(l.a,{children:Object(g.jsxs)(l.a.Body,{children:[Object(g.jsx)("h2",{className:"logintext",children:"Sign Up"}),p&&Object(g.jsx)(d.a,{variant:"danger",children:p}),Object(g.jsxs)(u.a,{onSubmit:function(e){return P.apply(this,arguments)},className:"text",children:[Object(g.jsxs)(u.a.Group,{id:"email",children:[Object(g.jsx)(u.a.Label,{children:"Email"}),Object(g.jsx)(u.a.Control,{type:"email",ref:e,required:!0})]}),Object(g.jsxs)(u.a.Group,{id:"password",children:[Object(g.jsx)(u.a.Label,{children:"Password"}),Object(g.jsx)(u.a.Control,{type:"password",ref:t,required:!0})]}),Object(g.jsxs)(u.a.Group,{id:"password-confirm",children:[Object(g.jsx)(u.a.Label,{children:"Password Confirmation"}),Object(g.jsx)(u.a.Control,{type:"password",ref:c,required:!0})]}),Object(g.jsx)(O.a,{disabled:C,className:"w-100",type:"submit",children:"Sign Up"})]})]})}),Object(g.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an account? ",Object(g.jsx)(E.b,{to:"/login",children:"Log In"})]}),Object(g.jsxs)("div",{className:"w-100 text-center mt-2",children:["Go back to ",Object(g.jsx)(E.b,{to:"/",children:"dashboard"})]})]})}function T(){var e=Object(a.useRef)(),t=Object(a.useRef)(),c=y(),n=c.currentUser,r=c.login,s=c.color,o=c.getColor,x=Object(a.useState)(""),f=Object(b.a)(x,2),h=f[0],p=f[1],m=Object(a.useState)(!1),v=Object(b.a)(m,2),w=v[0],C=v[1],A=Object(S.f)();Object(a.useEffect)((function(){n&&A("/loggedindashboard",[n])}),[n,A]),o(),Object(a.useEffect)((function(){}),[s]);var _=Object(R.a)({palette:{background:{default:s},text:{primary:"#ffffff"}}});function N(){return(N=Object(i.a)(j.a.mark((function c(a){return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return a.preventDefault(),c.prev=1,C(!0),p(""),c.next=6,r(e.current.value,t.current.value);case 6:c.next=13;break;case 8:c.prev=8,c.t0=c.catch(1),console.log(c.t0),p("Failed to login"),C(!1);case 13:case"end":return c.stop()}}),c,null,[[1,8]])})))).apply(this,arguments)}return Object(g.jsxs)(k.a,{theme:_,children:[Object(g.jsx)(I.a,{}),Object(g.jsx)(l.a,{children:Object(g.jsxs)(l.a.Body,{children:[Object(g.jsx)("h2",{className:"logintext",children:"Log In"}),h&&Object(g.jsx)(d.a,{variant:"danger",children:h}),Object(g.jsxs)(u.a,{onSubmit:function(e){return N.apply(this,arguments)},className:"text",children:[Object(g.jsxs)(u.a.Group,{id:"email",children:[Object(g.jsx)(u.a.Label,{children:"Email"}),Object(g.jsx)(u.a.Control,{type:"email",ref:e,required:!0})]}),Object(g.jsxs)(u.a.Group,{id:"password",children:[Object(g.jsx)(u.a.Label,{children:"Password"}),Object(g.jsx)(u.a.Control,{type:"password",ref:t,required:!0})]}),Object(g.jsx)(O.a,{disabled:w,className:"w-100",type:"submit",children:"Log In"})]})]})}),Object(g.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(g.jsx)(E.b,{to:"/signup",children:"Sign Up"})]}),Object(g.jsxs)("div",{className:"w-100 text-center mt-2",children:["Go back to ",Object(g.jsx)(E.b,{to:"/",children:"dashboard"})]})]})}function z(){var e=y(),t=e.color;(0,e.getColor)(),Object(a.useEffect)((function(){}),[t]);var c=Object(R.a)({palette:{background:{default:t},text:{primary:"#ffffff"}}});function n(){return(n=Object(i.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),console.log("analyze!");case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(g.jsxs)(k.a,{theme:c,children:[Object(g.jsx)(I.a,{}),Object(g.jsxs)(l.a,{children:[Object(g.jsx)(l.a.Body,{children:Object(g.jsxs)(u.a,{onSubmit:function(e){return n.apply(this,arguments)},children:[Object(g.jsxs)(u.a.Group,{id:"text",className:"logintext",children:[Object(g.jsx)(u.a.Label,{children:"Enter your text here"}),Object(g.jsx)(u.a.Control,{as:"textarea",rows:5})]}),Object(g.jsx)("div",{className:"text-center mt-2",children:Object(g.jsx)(C.a,{type:"submit",variant:"contained",color:"secondary",children:"Analyze"})})]})}),Object(g.jsxs)("div",{className:"text-center mt-2",children:[Object(g.jsx)(C.a,{endIcon:Object(g.jsx)(P.a,{}),component:E.b,size:"small",to:"/",variant:"contained",color:"primary",children:"Dashboard"})," ",Object(g.jsx)("br",{}),Object(g.jsx)("br",{})]})]})]})}function G(){var e=y(),t=e.currentUser,c=e.signOut,n=e.color,r=e.getColor,s=Object(S.f)();Object(a.useEffect)((function(){t||s("/",[t])}),[t,s]),r(),Object(a.useEffect)((function(){}),[n]);var o=Object(R.a)({palette:{background:{default:n},text:{primary:"#ffffff"}}});function b(){return(b=Object(i.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}return Object(g.jsxs)(k.a,{theme:o,children:[Object(g.jsx)(I.a,{}),Object(g.jsxs)("div",{className:"lighttext",children:["Logged in as ",null===t||void 0===t?void 0:t.email,Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)(C.a,{endIcon:Object(g.jsx)(P.a,{}),component:E.b,size:"small",to:"/wordprocessing",variant:"contained",color:"primary",children:"wordprocessing"})," ",Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)(C.a,{endIcon:Object(g.jsx)(P.a,{}),size:"small",variant:"contained",color:"primary",onClick:function(){return b.apply(this,arguments)},children:"Logout"})," ",Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)(C.a,{endIcon:Object(g.jsx)(P.a,{}),component:E.b,to:"/settings",size:"small",variant:"contained",color:"primary",children:"Settings"})]})]})}c(79);function L(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:"headers",children:"Settings"}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("h3",{children:" Change the Back Ground Color "}),Object(g.jsx)("h3",{className:"headers",children:Object(g.jsx)(E.b,{to:"/",children:"Dashboard"})})]})}function U(){var e=Object(a.useRef)(),t=Object(a.useRef)(),c=y(),n=c.currentUser,r=c.changePassword,s=c.signOut,o=c.color,x=c.getColor,f=Object(a.useState)(""),h=Object(b.a)(f,2),p=h[0],m=h[1],v=Object(a.useState)(!1),w=Object(b.a)(v,2),C=w[0],A=w[1],_=Object(S.f)();Object(a.useEffect)((function(){n||_("/",[n])}),[n,_]),x(),Object(a.useEffect)((function(){}),[o]);var N=Object(R.a)({palette:{background:{default:o},text:{primary:"#ffffff"}}});function P(){return(P=Object(i.a)(j.a.mark((function c(a){return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(a.preventDefault(),e.current.value===t.current.value){c.next=3;break}return c.abrupt("return",m("Passwords do not match"));case 3:return c.prev=3,m(""),A(!0),c.next=8,r(e.current.value);case 8:return c.next=10,s();case 10:c.next=17;break;case 12:c.prev=12,c.t0=c.catch(3),console.log(p),m("Failed to update password"),A(!1);case 17:A(!1);case 18:case"end":return c.stop()}}),c,null,[[3,12]])})))).apply(this,arguments)}return Object(g.jsxs)(k.a,{theme:N,children:[Object(g.jsx)(I.a,{}),Object(g.jsx)(l.a,{children:Object(g.jsxs)(l.a.Body,{children:[Object(g.jsx)("h2",{className:"logintext",children:"Change Password"}),p&&Object(g.jsx)(d.a,{variant:"danger",children:p}),Object(g.jsxs)(u.a,{onSubmit:function(e){return P.apply(this,arguments)},className:"text",children:[Object(g.jsxs)(u.a.Group,{id:"new password",children:[Object(g.jsx)(u.a.Label,{children:"New Password"}),Object(g.jsx)(u.a.Control,{type:"password",ref:e,required:!0})]}),Object(g.jsxs)(u.a.Group,{id:"password-confirm",children:[Object(g.jsx)(u.a.Label,{children:"Confirm New Password"}),Object(g.jsx)(u.a.Control,{type:"password",ref:t,required:!0})]}),Object(g.jsx)(O.a,{disabled:C,className:"w-100",type:"submit",children:"Change password"})]})]})}),Object(g.jsxs)("div",{className:"w-100 text-center mt-2",children:["Go back to ",Object(g.jsx)(E.b,{to:"/",children:"dashboard"})]})]})}function F(){var e=y(),t=e.color;(0,e.getColor)(),Object(a.useEffect)((function(){}),[t]);var c=Object(R.a)({palette:{background:{default:t},text:{primary:"#ffffff"}}});return Object(g.jsxs)(k.a,{theme:c,children:[Object(g.jsx)(I.a,{}),Object(g.jsx)("h2",{className:"lightlogintext",children:"Settings"}),Object(g.jsxs)("div",{className:"text-center mt-2",children:[Object(g.jsx)(C.a,{endIcon:Object(g.jsx)(P.a,{}),component:E.b,size:"small",to:"/changepassword",variant:"contained",color:"primary",children:"Change Password"})," ",Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)(C.a,{endIcon:Object(g.jsx)(P.a,{}),component:E.b,size:"small",to:"/backgroundcolor",variant:"contained",color:"primary",children:"Change Background Color"})," ",Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)(C.a,{endIcon:Object(g.jsx)(P.a,{}),component:E.b,size:"small",to:"/",variant:"contained",color:"primary",children:"Dashboard"})," ",Object(g.jsx)("br",{}),Object(g.jsx)("br",{})]})]})}function W(){var e=y(),t=e.currentUser,c=e.color,n=e.changeColor;(0,e.getColor)(),Object(a.useEffect)((function(){}),[c]);var r=Object(R.a)({palette:{background:{default:c},text:{primary:"#ffffff"}}});return Object(g.jsxs)(k.a,{theme:r,children:[Object(g.jsx)(I.a,{}),Object(g.jsxs)("span",{className:"lightlogintext",children:["Select a color: ",Object(g.jsx)("input",{type:"color",value:c,onChange:function(e){return n(e.target.value,t.email.replace(".",""))}})]}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)(C.a,{endIcon:Object(g.jsx)(P.a,{}),component:E.b,size:"small",to:"/",variant:"contained",color:"primary",children:"Dashboard"})," ",Object(g.jsx)("br",{}),Object(g.jsx)("br",{})]})}var K=c(124);var q=function(){return Object(g.jsx)(K.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(g.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:Object(g.jsx)(E.a,{basename:"/SentimentAnalysis",children:Object(g.jsx)(w,{children:Object(g.jsxs)(S.c,{children:[Object(g.jsx)(S.a,{exact:!0,path:"/",element:Object(g.jsx)(D,{})}),Object(g.jsx)(S.a,{path:"/signup",element:Object(g.jsx)(B,{})}),Object(g.jsx)(S.a,{path:"/login",element:Object(g.jsx)(T,{})}),Object(g.jsx)(S.a,{path:"/wordprocessing",element:Object(g.jsx)(z,{})}),Object(g.jsx)(S.a,{path:"/loggedindashboard",element:Object(g.jsx)(G,{})}),Object(g.jsx)(S.a,{path:"/page2",element:Object(g.jsx)(L,{})}),Object(g.jsx)(S.a,{path:"settings",element:Object(g.jsx)(F,{})}),Object(g.jsx)(S.a,{path:"changepassword",element:Object(g.jsx)(U,{})}),Object(g.jsx)(S.a,{path:"backgroundcolor",element:Object(g.jsx)(W,{})})]})})})})})};c(102);s.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(q,{})}),document.getElementById("root"))},47:function(e,t,c){},79:function(e,t,c){}},[[103,1,2]]]);
//# sourceMappingURL=main.15d64816.chunk.js.map