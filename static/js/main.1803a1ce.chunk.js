(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{18:function(t,e,i){},19:function(t,e,i){},20:function(t,e,i){},21:function(t,e,i){"use strict";i.r(e);var a=i(0),n=i(11),o=i.n(n),c=(i(18),i(1)),s=i(4),r=i(2),p=i(3),l=i(5),d=i(12),h=i.n(d),u=(i(19),window.innerHeight),j=window.innerWidth,w=function(t){Object(r.a)(i,t);var e=Object(p.a)(i);function i(){var t;Object(c.a)(this,i);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))).timeout=0,t.state={opacity:0,opacity_offset:.05,opacity_cycle_count:0},t.changeOpacity=function(){t.state.opacity<=0&&(t.state.opacity_offset=.05,t.setState({opacity_cycle_count:t.state.opacity_cycle_count+=1})),t.state.opacity>=1&&(t.state.opacity_offset=-.05),t.setState({opacity:t.state.opacity+=t.state.opacity_offset})},t}return Object(s.a)(i,[{key:"componentDidMount",value:function(){var t=this;this.timeout=setInterval((function(){console.log(t.state.opacity),t.state.opacity_cycle_count<3?t.changeOpacity():(clearInterval(t.timeout),t.setState({opacity:0}))}),37)}},{key:"render",value:function(){return Object(a.jsx)("svg",{style:{opacity:this.state.opacity,position:"fixed",top:u/4,right:j/4},className:"Signature",version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:j/2,height:u/2,viewBox:"0 0 1008.000000 532.000000",preserveAspectRatio:"xMidYMid meet",children:Object(a.jsxs)("g",{transform:"translate(0.000000,532.000000) scale(0.100000,-0.100000)",fill:"#ffffff",stroke:"none",children:[Object(a.jsx)("path",{d:"M2627 3471 c-449 -82 -820 -151 -824 -155 -4 -3 -2 -11 5 -18 8 -8 219 20 829 111 450 67 828 126 841 131 28 12 30 55 3 70 -11 5 -23 10 -28 9 -4 0 -376 -67 -826 -148z"}),Object(a.jsx)("path",{d:"M6180 3469 c-448 -81 -816 -148 -817 -148 -2 -1 -3 -8 -3 -16 0 -9 9 -15 23 -15 12 0 390 56 840 124 816 123 836 126 837 163 0 18 -29 43 -48 42 -9 -1 -384 -68 -832 -150z"}),Object(a.jsx)("path",{d:"M3538 3383 c-43 -50 -116 -216 -223 -507 -26 -70 -67 -162 -91 -202 -48 -82 -52 -94 -28 -94 11 0 14 -5 9 -17 -25 -63 -138 -407 -201 -613 -42 -135 -81 -250 -87 -256 -9 -8 -1134 -282 -1524 -371 -24 -5 -32 -33 -10 -33 7 0 349 74 761 165 412 91 750 164 752 163 1 -2 -31 -113 -72 -248 -41 -135 -74 -251 -74 -257 0 -7 6 -13 13 -13 7 0 48 108 102 267 l90 268 612 135 c337 74 618 140 624 147 7 7 9 22 5 37 -5 20 -13 26 -34 26 -15 0 -286 -62 -602 -139 -316 -76 -577 -137 -579 -135 -4 3 213 639 240 702 10 23 20 42 23 42 2 0 33 -7 67 -16 81 -21 160 -13 212 22 42 28 42 27 22 -41 -22 -71 -45 -220 -45 -290 0 -80 15 -130 47 -155 94 -73 260 72 482 423 116 184 127 205 112 220 -16 15 -20 10 -109 -140 -170 -286 -345 -483 -429 -483 -54 0 -73 111 -43 255 16 78 20 84 36 46 11 -26 18 -31 48 -31 75 0 155 112 196 274 34 135 24 214 -30 236 -61 25 -117 -24 -203 -179 -43 -78 -98 -125 -163 -137 -42 -8 -135 19 -170 49 l-27 24 43 118 c30 83 69 162 130 264 170 283 230 437 188 479 -17 17 -53 15 -70 -5z m-19 -178 c-23 -52 -46 -98 -51 -101 -10 -6 1 23 48 125 20 45 39 79 41 77 3 -2 -15 -48 -38 -101z m270 -615 c-23 -148 -56 -229 -110 -274 -118 -100 -59 230 64 358 l40 41 8 -30 c5 -17 4 -58 -2 -95z"}),Object(a.jsx)("path",{d:"M2256 3217 c-12 -9 -39 -114 -102 -407 -47 -217 -87 -397 -89 -399 -2 -2 -41 -12 -87 -23 -139 -32 -158 -38 -158 -53 0 -25 16 -25 120 -4 56 11 104 18 107 15 3 -2 -31 -175 -76 -383 -45 -208 -81 -386 -81 -395 0 -26 29 -22 35 5 33 142 194 789 197 791 2 2 188 40 413 85 226 45 420 86 433 91 14 6 22 18 22 34 0 53 -4 52 -435 -49 -224 -53 -409 -94 -412 -91 -3 3 36 171 86 373 50 203 91 374 91 380 0 13 -27 43 -39 43 -4 0 -15 -6 -25 -13z"}),Object(a.jsx)("path",{d:"M5812 3213 c-15 -14 -37 -100 -103 -410 l-83 -392 -86 -21 c-161 -40 -160 -39 -160 -60 0 -24 -5 -24 119 1 57 11 105 19 107 16 2 -2 -32 -172 -76 -378 -45 -206 -82 -383 -83 -394 -1 -10 5 -21 13 -22 13 -3 35 74 116 404 l100 408 425 86 c234 47 430 89 437 93 18 11 14 54 -7 65 -13 8 -119 -14 -417 -84 -219 -52 -404 -95 -410 -95 -7 0 27 154 82 378 52 207 94 380 94 384 0 9 -30 38 -40 38 -4 0 -17 -8 -28 -17z"}),Object(a.jsx)("path",{d:"M7870 3110 c-6 -11 -14 -43 -17 -70 -6 -49 -5 -50 20 -50 23 0 28 7 43 54 9 30 14 61 11 70 -9 23 -44 20 -57 -4z"}),Object(a.jsx)("path",{d:"M7465 2754 c-47 -25 -93 -72 -152 -157 -59 -83 -131 -150 -338 -317 -71 -57 -167 -140 -213 -184 -65 -63 -82 -76 -78 -56 27 112 116 544 116 559 0 26 -40 39 -55 18 -10 -14 -126 -669 -125 -709 0 -32 28 -19 54 25 37 64 143 167 323 315 87 72 176 145 197 163 30 25 38 29 32 14 -26 -60 -46 -158 -46 -218 0 -62 3 -71 29 -98 84 -84 215 14 489 366 14 18 21 22 18 11 -4 -10 -18 -80 -32 -155 -40 -216 -33 -328 20 -308 37 14 432 558 422 582 -9 25 -29 7 -86 -77 -70 -104 -265 -372 -307 -423 -25 -30 -34 -35 -38 -23 -13 33 33 248 92 434 28 86 26 114 -6 114 -14 0 -36 -23 -70 -74 -108 -159 -254 -325 -345 -393 -95 -70 -146 -55 -146 42 0 113 81 299 177 404 51 57 128 110 140 97 13 -12 44 16 41 37 -2 18 -10 22 -43 24 -22 2 -53 -5 -70 -13z"}),Object(a.jsx)("path",{d:"M6312 1650 c-750 -181 -1369 -331 -1377 -334 -21 -8 -19 -26 3 -26 9 0 644 139 1411 308 1270 280 1395 310 1404 330 14 30 -7 52 -47 51 -17 -1 -644 -149 -1394 -329z"})]})})}}]),i}(l.Component),f=function(t){Object(r.a)(i,t);var e=Object(p.a)(i);function i(){var t;Object(c.a)(this,i);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))).timeout=0,t.state={is_mainpage_visible:!0,is_welcome_page_visible:!0,opacity:0},t}return Object(s.a)(i,[{key:"componentWillUnmount",value:function(){this.setState({is_mainpage_visible:!0,is_welcome_page_visible:!1})}},{key:"switchToMainPage",value:function(){var t=this;setInterval((function(){t.componentWillUnmount()}),3e3)}},{key:"stopTransition",value:function(){clearInterval(this.timeout)}},{key:"mainpage_transition",value:function(){var t=this;this.timeout=setInterval((function(){t.state.opacity<=1?t.setState({opacity:t.state.opacity+=.05}):t.stopTransition()}),75)}},{key:"render",value:function(){if(this.props.data)var t=this.props.data.name,e=this.props.data.occupation,i=this.props.data.description,n=this.props.data.address.city,o=this.props.data.social.map((function(t){return Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:t.url,children:Object(a.jsx)("i",{className:t.className})})},t.name)}));return this.state.is_welcome_page_visible?(this.switchToMainPage(),Object(a.jsx)(w,{})):this.state.is_mainpage_visible?(this.mainpage_transition(),Object(a.jsx)("header",{id:"home",style:{opacity:this.state.opacity},children:Object(a.jsx)("div",{className:"row banner",children:Object(a.jsxs)("div",{className:"banner-text",children:[Object(a.jsxs)("h1",{className:"responsive-headline",children:["I'm ",t,"."]}),Object(a.jsxs)("h3",{children:["I'm a ",n," based ",Object(a.jsx)("span",{children:e})," ",i]}),Object(a.jsx)("hr",{}),Object(a.jsx)("ul",{className:"social",children:o})]})})})):void 0}}]),i}(l.Component),v=(l.Component,l.Component,l.Component,l.Component,l.Component,l.Component,i(7)),m=(i(20),window.innerHeight),b=window.innerWidth,y=function(t){Object(r.a)(i,t);var e=Object(p.a)(i);function i(){var t;Object(c.a)(this,i);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))).state={opacity:1,opacity_offset:-.1},t.changeOpacity=function(){t.state.opacity<=0&&(t.state.opacity_offset=.1),t.state.opacity>=1&&(t.state.opacity_offset=-.1),t.setState({opacity:t.state.opacity+=t.state.opacity_offset})},t}return Object(s.a)(i,[{key:"componentDidMount",value:function(){var t,e,i,a,n=this;setInterval((function(){n.changeOpacity()}),75);function o(){var e=window.innerWidth/window.innerHeight,a=window.innerWidth/6*window.devicePixelRatio,n=window.innerHeight/6*window.devicePixelRatio;t.aspect=e,t.updateProjectionMatrix();for(var o=0;o<6;o++)for(var c=0;c<6;c++){var s=t.cameras[6*o+c];s.viewport.set(Math.floor(c*a),Math.floor(o*n),Math.ceil(a),Math.ceil(n)),s.aspect=e,s.updateProjectionMatrix()}i.setSize(window.innerWidth,window.innerHeight)}!function(){for(var n=window.innerWidth/window.innerHeight,c=window.innerWidth/6*window.devicePixelRatio,s=window.innerHeight/6*window.devicePixelRatio,r=[],p=0;p<6;p++)for(var l=0;l<6;l++){var d=new v.g(40,n,.1,10);d.viewport=new v.j(Math.floor(l*c),Math.floor(p*s),Math.ceil(c),Math.ceil(s)),d.position.x=l/6-.5,d.position.y=.5-p/6,d.position.z=1.5,d.position.multiplyScalar(2),d.lookAt(0,0,0),d.updateMatrixWorld(),r.push(d)}(t=new v.b(r)).position.z=3,(e=new v.i).add(new v.a(2236996));var h=new v.d;h.position.set(.5,.5,1),h.castShadow=!0,h.shadow.camera.zoom=4,e.add(h);var u=new v.h(100,100),j=new v.f({color:102}),w=new v.e(u,j);w.receiveShadow=!0,w.position.set(0,0,-1),e.add(w);var f=new v.c(.5,.5,1,32),m=new v.f({color:16711680});(a=new v.e(f,m)).castShadow=!0,a.receiveShadow=!0,e.add(a),(i=new v.k).setPixelRatio(window.devicePixelRatio),i.setSize(window.innerWidth,window.innerHeight),i.shadowMap.enabled=!0,document.body.appendChild(i.domElement),window.addEventListener("resize",o,!1)}(),function n(){a.rotation.x+=.005,a.rotation.z+=.01,i.render(e,t),requestAnimationFrame(n)}()}},{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)("svg",{style:{opacity:this.state.opacity,position:"fixed",top:m/4,right:b/4},className:"Signature",version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:b/2,height:m/2,viewBox:"0 0 1008.000000 532.000000",preserveAspectRatio:"xMidYMid meet",children:Object(a.jsxs)("g",{transform:"translate(0.000000,532.000000) scale(0.100000,-0.100000)",fill:"#ffffff",stroke:"10",children:[Object(a.jsx)("path",{d:"M2627 3471 c-449 -82 -820 -151 -824 -155 -4 -3 -2 -11 5 -18 8 -8 219 20 829 111 450 67 828 126 841 131 28 12 30 55 3 70 -11 5 -23 10 -28 9 -4 0 -376 -67 -826 -148z"}),Object(a.jsx)("path",{d:"M6180 3469 c-448 -81 -816 -148 -817 -148 -2 -1 -3 -8 -3 -16 0 -9 9 -15 23 -15 12 0 390 56 840 124 816 123 836 126 837 163 0 18 -29 43 -48 42 -9 -1 -384 -68 -832 -150z"}),Object(a.jsx)("path",{d:"M3538 3383 c-43 -50 -116 -216 -223 -507 -26 -70 -67 -162 -91 -202 -48 -82 -52 -94 -28 -94 11 0 14 -5 9 -17 -25 -63 -138 -407 -201 -613 -42 -135 -81 -250 -87 -256 -9 -8 -1134 -282 -1524 -371 -24 -5 -32 -33 -10 -33 7 0 349 74 761 165 412 91 750 164 752 163 1 -2 -31 -113 -72 -248 -41 -135 -74 -251 -74 -257 0 -7 6 -13 13 -13 7 0 48 108 102 267 l90 268 612 135 c337 74 618 140 624 147 7 7 9 22 5 37 -5 20 -13 26 -34 26 -15 0 -286 -62 -602 -139 -316 -76 -577 -137 -579 -135 -4 3 213 639 240 702 10 23 20 42 23 42 2 0 33 -7 67 -16 81 -21 160 -13 212 22 42 28 42 27 22 -41 -22 -71 -45 -220 -45 -290 0 -80 15 -130 47 -155 94 -73 260 72 482 423 116 184 127 205 112 220 -16 15 -20 10 -109 -140 -170 -286 -345 -483 -429 -483 -54 0 -73 111 -43 255 16 78 20 84 36 46 11 -26 18 -31 48 -31 75 0 155 112 196 274 34 135 24 214 -30 236 -61 25 -117 -24 -203 -179 -43 -78 -98 -125 -163 -137 -42 -8 -135 19 -170 49 l-27 24 43 118 c30 83 69 162 130 264 170 283 230 437 188 479 -17 17 -53 15 -70 -5z m-19 -178 c-23 -52 -46 -98 -51 -101 -10 -6 1 23 48 125 20 45 39 79 41 77 3 -2 -15 -48 -38 -101z m270 -615 c-23 -148 -56 -229 -110 -274 -118 -100 -59 230 64 358 l40 41 8 -30 c5 -17 4 -58 -2 -95z"}),Object(a.jsx)("path",{d:"M2256 3217 c-12 -9 -39 -114 -102 -407 -47 -217 -87 -397 -89 -399 -2 -2 -41 -12 -87 -23 -139 -32 -158 -38 -158 -53 0 -25 16 -25 120 -4 56 11 104 18 107 15 3 -2 -31 -175 -76 -383 -45 -208 -81 -386 -81 -395 0 -26 29 -22 35 5 33 142 194 789 197 791 2 2 188 40 413 85 226 45 420 86 433 91 14 6 22 18 22 34 0 53 -4 52 -435 -49 -224 -53 -409 -94 -412 -91 -3 3 36 171 86 373 50 203 91 374 91 380 0 13 -27 43 -39 43 -4 0 -15 -6 -25 -13z"}),Object(a.jsx)("path",{d:"M5812 3213 c-15 -14 -37 -100 -103 -410 l-83 -392 -86 -21 c-161 -40 -160 -39 -160 -60 0 -24 -5 -24 119 1 57 11 105 19 107 16 2 -2 -32 -172 -76 -378 -45 -206 -82 -383 -83 -394 -1 -10 5 -21 13 -22 13 -3 35 74 116 404 l100 408 425 86 c234 47 430 89 437 93 18 11 14 54 -7 65 -13 8 -119 -14 -417 -84 -219 -52 -404 -95 -410 -95 -7 0 27 154 82 378 52 207 94 380 94 384 0 9 -30 38 -40 38 -4 0 -17 -8 -28 -17z"}),Object(a.jsx)("path",{d:"M7870 3110 c-6 -11 -14 -43 -17 -70 -6 -49 -5 -50 20 -50 23 0 28 7 43 54 9 30 14 61 11 70 -9 23 -44 20 -57 -4z"}),Object(a.jsx)("path",{d:"M7465 2754 c-47 -25 -93 -72 -152 -157 -59 -83 -131 -150 -338 -317 -71 -57 -167 -140 -213 -184 -65 -63 -82 -76 -78 -56 27 112 116 544 116 559 0 26 -40 39 -55 18 -10 -14 -126 -669 -125 -709 0 -32 28 -19 54 25 37 64 143 167 323 315 87 72 176 145 197 163 30 25 38 29 32 14 -26 -60 -46 -158 -46 -218 0 -62 3 -71 29 -98 84 -84 215 14 489 366 14 18 21 22 18 11 -4 -10 -18 -80 -32 -155 -40 -216 -33 -328 20 -308 37 14 432 558 422 582 -9 25 -29 7 -86 -77 -70 -104 -265 -372 -307 -423 -25 -30 -34 -35 -38 -23 -13 33 33 248 92 434 28 86 26 114 -6 114 -14 0 -36 -23 -70 -74 -108 -159 -254 -325 -345 -393 -95 -70 -146 -55 -146 42 0 113 81 299 177 404 51 57 128 110 140 97 13 -12 44 16 41 37 -2 18 -10 22 -43 24 -22 2 -53 -5 -70 -13z"}),Object(a.jsx)("path",{d:"M6312 1650 c-750 -181 -1369 -331 -1377 -334 -21 -8 -19 -26 3 -26 9 0 644 139 1411 308 1270 280 1395 310 1404 330 14 30 -7 52 -47 51 -17 -1 -644 -149 -1394 -329z"})]})})})}}]),i}(l.Component),x=(l.Component,function(t){Object(r.a)(i,t);var e=Object(p.a)(i);function i(t){var a;return Object(c.a)(this,i),(a=e.call(this,t)).state={foo:"bar",resumeData:{}},a}return Object(s.a)(i,[{key:"getResumeData",value:function(){h.a.ajax({url:"resumeData.json",dataType:"json",cache:!1,success:function(t){this.setState({resumeData:t})}.bind(this),error:function(t,e,i){console.log(i),alert(i)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(a.jsx)(f,{data:this.state.resumeData.main,children:" "})}}]),i}(l.Component));o.a.render(Object(a.jsx)(x,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.1803a1ce.chunk.js.map