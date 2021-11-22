(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[0],{105:function(e,a,t){},106:function(e,a,t){},107:function(e,a,t){},108:function(e,a,t){},109:function(e,a,t){},127:function(e,a,t){},134:function(e,a,t){},135:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),l=t.n(c),o=t(37),i=t(26),s=t(76),u=t(24),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"AUTH":return localStorage.setItem("profile",JSON.stringify(Object(u.a)({},null===a||void 0===a?void 0:a.data))),Object(u.a)(Object(u.a)({},e),{},{authData:a.data,loading:!1,errors:null});case"LOGOUT":return localStorage.clear(),Object(u.a)(Object(u.a)({},e),{},{authData:null,loading:!1,errors:null});default:return e}},p=Object(i.c)({auth:m}),d=t(171),h=t(35),g=t(11),f=t(180),b=t(172),E=t(77),v=t(137),y=t(138),_=t(167),w=Object(_.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),j=t(13);t(105);function O(e){var a=e.callBack,t=Object(n.useState)(""),c=Object(j.a)(t,2),l=c[0],o=c[1],i=Object(n.useState)("Search__label"),s=Object(j.a)(i,2),u=s[0],m=s[1],p=Object(n.useState)("Enter the city"),d=Object(j.a)(p,2),h=d[0],g=d[1];function f(){"Search__label Search__warning"===u&&(m("Search__label"),g("Enter the city"))}function b(){""===l.trim(" ")?(m("Search__label Search__warning"),g("")):(a(l),m("Search__label"),g("Enter the city"))}return r.a.createElement("div",{className:"Search"},r.a.createElement("label",{className:u},r.a.createElement("input",{value:l,onChange:function(e){"Search__label Search__warning"===u&&(m("Search__label"),g("Enter the city")),o(e.target.value)},onClick:f,onKeyPress:function(e){"Enter"===e.key?b():f()},className:"Search__input",placeholder:h}),"Search__label Search__warning"===u&&r.a.createElement("p",{className:"Search__warning-content"}," Field is empty ")),r.a.createElement("button",{onClick:b,className:"Search__button"},"Search"))}t(106);function S(e){var a=e.callBack;return r.a.createElement("header",{className:"Header"},r.a.createElement("h1",{className:"Header__title",style:{color:"Black"}}),r.a.createElement(O,{callBack:a}))}t(107);function N(e){var a=e.weatherInfo,t=e.location,n=e.date;return r.a.createElement("div",{className:"Current"},r.a.createElement("div",{className:"Current__info"},r.a.createElement("img",{className:"Current__weather-icon",src:"https://openweathermap.org/img/wn/"+a.current.weather[0].icon+".png",alt:a.current.weather[0].main}),r.a.createElement("ul",{className:"Current__list"},r.a.createElement("li",{className:"list__temperature"},Math.round(a.current.temp),r.a.createElement("sup",{className:"list__temperature-symbol"},"\xb0C")),r.a.createElement("li",null," Humidity: ",a.current.humidity,"% "),r.a.createElement("li",null," ","Wind: ",Math.round(3.6*a.current.wind_speed)," km/h"," "))),r.a.createElement("div",{className:"Current__other-info"},r.a.createElement("h2",{className:"other-info__city"},t.city||t.town,","," ",t.state||t.country.toUpperCase()),r.a.createElement("h3",{className:"other-info__clouds"},n),r.a.createElement("h3",{className:"other-info__clouds"},a.current.weather[0].description)))}t(108);function x(e){var a=e.weatherInfo,t=e.date;return r.a.createElement("div",{className:"Forecast"},r.a.createElement("h1",{className:"Forecast__title"},[t[0],t[1],t[2]]),r.a.createElement("img",{className:"Forecast__weather-icon",src:"https://openweathermap.org/img/wn/"+a.weather[0].icon+".png",alt:a.weather[0].main}),r.a.createElement("div",{className:"Forecast__temperature"},r.a.createElement("span",{className:"temperature__max"},Math.round(a.temp.max),r.a.createElement("sup",{className:"temperature__symbol"},"\xb0")),r.a.createElement("span",{className:"temperature__min"},Math.round(a.temp.min),r.a.createElement("sup",{className:"temperature__symbol"},"\xb0"))))}t(109);function k(e){var a=e.weatherInfo,t=e.location,n=e.date,c=e.contentState;return"weather"===c?r.a.createElement("div",{className:"Main"},r.a.createElement(N,{weatherInfo:a,location:t,date:n[0]}),r.a.createElement("div",{className:"Main__forecast"},r.a.createElement(x,{weatherInfo:a.daily[0],date:n[0]}),r.a.createElement(x,{weatherInfo:a.daily[1],date:n[1]}),r.a.createElement(x,{weatherInfo:a.daily[2],date:n[2]}),r.a.createElement(x,{weatherInfo:a.daily[3],date:n[3]}),r.a.createElement(x,{weatherInfo:a.daily[4],date:n[4]}))):"warning"===c?r.a.createElement("div",{className:"Main Main--warning"},r.a.createElement("h2",{className:"Main__no-location"},"No location found"),r.a.createElement("p",{className:"Main__no-location-paragraph"},"Try informing city/town and state/country"),r.a.createElement("p",{className:"Main__no-location-paragraph"},"Ex: S\xe3o Carlos, S\xe3o Paulo"),r.a.createElement("p",{className:"Main__no-location-paragraph"},"Ex: Tokyo, Japan ")):"blank"===c?r.a.createElement("div",{className:"Main"}):void 0}var C=t(45),I=t.n(C);t(127);function T(){var e=Object(n.useState)(""),a=Object(j.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(void 0),o=Object(j.a)(l,2),i=o[0],s=o[1],u=Object(n.useState)({}),m=Object(j.a)(u,2),p=m[0],d=m[1],h=Object(n.useState)([]),g=Object(j.a)(h,2),f=g[0],b=g[1],E=Object(n.useState)({}),v=Object(j.a)(E,2),y=v[0],_=v[1],w=Object(n.useState)("blank"),O=Object(j.a)(w,2),N=O[0],x=O[1],C=Object(n.useState)(!1),T=Object(j.a)(C,2),M=T[0],D=T[1],B=Object(n.useState)(void 0),F=Object(j.a)(B,2),A=F[0],P=F[1];function U(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message)}return Object(n.useEffect)((function(){""!==t&&M&&(x("blank"),P(r.a.createElement("div",{className:"loading"})),I.a.get("https://api.opencagedata.com/geocode/v1/json? ",{params:{key:"912185780698457db7a5c98c2d3c403d",q:t}}).then((function(e){0===e.data.results.length||void 0===e.data.results[0].components.city&&void 0===e.data.results[0].components.town?(P(null),s(void 0),x("warning"),setTimeout((function(){"warning"!==N&&"blank"!==N||x("blank")}),5e3)):(s(e.data.results[0].geometry),d({city:e.data.results[0].components.city,town:e.data.results[0].components.town,state:e.data.results[0].components.state_code,country:e.data.results[0].components.country_code}))})).catch((function(e){U(e),P(null),s(void 0),x("warning"),setTimeout((function(){"warning"!==N&&"blank"!==N||x("blank")}),5e3)})),D(!1))}),[t,M,A,N]),Object(n.useEffect)((function(){void 0!==i&&I.a.get("https://api.openweathermap.org/data/2.5/onecall?",{params:{lat:i.lat,lon:i.lng,exclude:"minutely,hourly,alerts",appid:"b50f36333803a650a88c6775933041c6",units:"metric"}}).then((function(e){P(null),_(e.data),x("weather")})).catch((function(e){return U(e)}))}),[i]),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__container"},r.a.createElement(S,{callBack:function(e){c(e),b(function(e){for(var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],t=[],n=0;n<5;n++)e.getDay()+n<7?t[n]=e.getDay()+n:e.getDay()+n===7?t[n]=0:e.getDay()+n===8?t[n]=1:e.getDay()+n===9?t[n]=2:e.getDay()+n===10&&(t[n]=3);return[a[t[0]],a[t[1]],a[t[2]],a[t[3]],a[t[4]]]}(new Date)),D(!0)}}),A,r.a.createElement(k,{weatherInfo:y,location:p,date:f,contentState:N})))}var M=function(e){var a;Object(E.a)(e);var t=w(),n=JSON.parse(localStorage.getItem("profile"));return(null===n||void 0===n||null===(a=n.result)||void 0===a?void 0:a.name)?r.a.createElement(f.a,{in:!0},r.a.createElement(d.a,null,r.a.createElement(b.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3},r.a.createElement(b.a,{item:!0,xs:24,sm:12},r.a.createElement(T,null))))):r.a.createElement(v.a,{className:t.paper},r.a.createElement(y.a,{variant:"h6",align:"center"},"Please Sign In to check Weather."))},D=function(){return r.a.createElement(f.a,{in:!0},r.a.createElement(d.a,null,r.a.createElement(b.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3},r.a.createElement(b.a,{item:!0,xs:24,sm:12},r.a.createElement(M,null)))))},B=t(174),F=t(175),A=t(181),P=t(176),U=t(81),W=t(173),H=Object(_.a)((function(e){return{appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"black",textDecoration:"none",fontWeight:"bold"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText(W.a[500]),backgroundColor:W.a[500]}}})),J=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("profile"))),a=Object(j.a)(e,2),t=a[0],c=a[1],l=Object(o.b)(),i=Object(g.g)(),s=Object(g.f)(),u=H(),m=function(){l({type:"LOGOUT"}),s.push("/"),c(null)};return Object(n.useEffect)((function(){var e=null===t||void 0===t?void 0:t.token;e&&(1e3*Object(U.a)(e).exp<(new Date).getTime()&&m());c(JSON.parse(localStorage.getItem("profile")))}),[i]),r.a.createElement(B.a,{className:u.appBar,position:"static",color:"inherit"},r.a.createElement("div",{className:u.brandContainer},r.a.createElement(y.a,{component:h.b,to:"/",className:u.heading,variant:"h4",align:"center"},"Weather Application")),r.a.createElement(F.a,{className:u.toolbar},(null===t||void 0===t?void 0:t.result)?r.a.createElement("div",{className:u.profile},r.a.createElement(A.a,{className:u.purple,alt:null===t||void 0===t?void 0:t.result.name,src:null===t||void 0===t?void 0:t.result.imageUrl},null===t||void 0===t?void 0:t.result.name.charAt(0)),r.a.createElement(y.a,{className:u.userName,variant:"h6"},null===t||void 0===t?void 0:t.result.name),r.a.createElement(P.a,{variant:"contained",className:u.logout,color:"secondary",onClick:m},"Logout")):r.a.createElement(P.a,{component:h.b,to:"/auth",variant:"contained",color:"primary"},"Sign In")))},L=t(50),q=t(27),G=t.n(q),R=t(46),V=t(82),z=t(85),K=t.n(z),Z=function(){return r.a.createElement("svg",{style:{width:"20px",height:"20px"},viewBox:"0 0 24 24"},r.a.createElement("path",{fill:"currentColor",d:"M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"}))},Q=I.a.create({baseURL:"/"});Q.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var X=function(e){return Q.post("/user/signin",e)},Y=function(e){return Q.post("/user/signup",e)},$=Object(_.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}})),ee=t(179),ae=t(177),te=t(178),ne=t(83),re=t.n(ne),ce=t(84),le=t.n(ce),oe=function(e){var a=e.name,t=e.handleChange,n=e.label,c=e.half,l=e.autoFocus,o=e.type,i=e.handleShowPassword;return r.a.createElement(b.a,{item:!0,xs:12,sm:c?6:12},r.a.createElement(ee.a,{name:a,onChange:t,variant:"outlined",required:!0,fullWidth:!0,label:n,autoFocus:l,type:o,InputProps:"password"===a?{endAdornment:r.a.createElement(ae.a,{position:"end"},r.a.createElement(te.a,{onClick:i},"password"===o?r.a.createElement(re.a,null):r.a.createElement(le.a,null)))}:null}))},ie={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},se=function(){var e=Object(n.useState)(ie),a=Object(j.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(!1),i=Object(j.a)(l,2),s=i[0],m=i[1],p=Object(o.b)(),h=Object(g.f)(),f=$(),E=Object(n.useState)(!1),_=Object(j.a)(E,2),w=_[0],O=_[1],S=function(){var e=Object(R.a)(G.a.mark((function e(a){var t,n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=null===a||void 0===a?void 0:a.profileObj,n=null===a||void 0===a?void 0:a.tokenId;try{p({type:"AUTH",data:{result:t,token:n}}),h.push("/")}catch(r){console.log(r)}case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),N=function(e){return c(Object(u.a)(Object(u.a)({},t),{},Object(L.a)({},e.target.name,e.target.value)))};return r.a.createElement(d.a,{component:"main",maxWidth:"xs"},r.a.createElement(v.a,{className:f.paper,elevation:3},r.a.createElement(A.a,{className:f.avatar},r.a.createElement(K.a,null)),r.a.createElement(y.a,{component:"h1",variant:"h5"},s?"Sign up":"Sign in"),r.a.createElement("form",{className:f.form,onSubmit:function(e){var a,n;e.preventDefault(),p(s?(a=t,n=h,function(){var e=Object(R.a)(G.a.mark((function e(t){var r,c;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y(a);case 3:r=e.sent,c=r.data,t({type:"AUTH",data:c}),n.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(a){return e.apply(this,arguments)}}()):function(e,a){return function(){var t=Object(R.a)(G.a.mark((function t(n){var r,c;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,X(e);case 3:r=t.sent,c=r.data,n({type:"AUTH",data:c}),a.push("/"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(t,h))}},r.a.createElement(b.a,{container:!0,spacing:2},s&&r.a.createElement(r.a.Fragment,null,r.a.createElement(oe,{name:"firstName",label:"First Name",handleChange:N,autoFocus:!0,half:!0}),r.a.createElement(oe,{name:"lastName",label:"Last Name",handleChange:N,half:!0})),r.a.createElement(oe,{name:"email",label:"Email Address",handleChange:N,type:"email"}),r.a.createElement(oe,{name:"password",label:"Password",handleChange:N,type:w?"text":"password",handleShowPassword:function(){return O(!w)}}),s&&r.a.createElement(oe,{name:"confirmPassword",label:"Repeat Password",handleChange:N,type:"password"})),r.a.createElement(P.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:f.submit},s?"Sign Up":"Sign In"),r.a.createElement(V.GoogleLogin,{clientId:"981602982310-09s75c0nqbkiaetabjcv2f1dqj826kpc.apps.googleusercontent.com",render:function(e){return r.a.createElement(P.a,{className:f.googleButton,color:"primary",fullWidth:!0,onClick:e.onClick,disabled:e.disabled,startIcon:r.a.createElement(Z,null),variant:"contained"},"Google Sign In")},onSuccess:S,onFailure:function(){return alert("Google Sign In was unsuccessful. Try again later")},cookiePolicy:"single_host_origin"}),r.a.createElement(b.a,{container:!0,justify:"flex-end"},r.a.createElement(b.a,{item:!0},r.a.createElement(P.a,{onClick:function(){c(ie),m((function(e){return!e})),O(!1)}},s?"Already have an account? Sign in":"Don't have an account? Sign Up"))))))},ue=function(){return r.a.createElement(h.a,null,r.a.createElement(d.a,{maxWidth:"lg"},r.a.createElement(J,null),r.a.createElement(g.c,null,r.a.createElement(g.a,{path:"/",exact:!0,component:D}),r.a.createElement(g.a,{path:"/auth",exact:!0,component:se}))))},me=(t(134),Object(i.e)(p,Object(i.d)(Object(i.a)(s.a))));l.a.render(r.a.createElement(o.a,{store:me},r.a.createElement(ue,null)),document.getElementById("root"))},94:function(e,a,t){e.exports=t(135)}},[[94,1,2]]]);
//# sourceMappingURL=main.fccc4aff.chunk.js.map