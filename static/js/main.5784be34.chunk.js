(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(7),c=n.n(s),r=(n(14),n(2)),o=n(3),i=n(5),u=n(4),j=n(1),p=n(8),d=n.n(p),h=(n(15),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t=this.props.data.occupation,n=this.props.data.description,s=this.props.data.address.city,c=this.props.data.social.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:e.url,children:Object(a.jsx)("i",{className:e.className})})},e.name)}));return Object(a.jsx)("header",{id:"home",children:Object(a.jsx)("div",{className:"row banner",children:Object(a.jsxs)("div",{className:"banner-text",children:[Object(a.jsxs)("h1",{className:"responsive-headline",children:["I'm ",e,"."]}),Object(a.jsxs)("h3",{children:["I'm a ",s," based ",Object(a.jsx)("span",{children:t})," ",n,"."]}),Object(a.jsx)("hr",{}),Object(a.jsx)("ul",{className:"social",children:c})]})})})}}]),n}(j.Component)),l=(j.Component,j.Component,j.Component,j.Component,j.Component,j.Component,window.innerHeight),m=window.innerWidth,b=(j.Component,function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={foo:"bar",resumeData:{}},a}return Object(o.a)(n,[{key:"getResumeData",value:function(){d.a.ajax({url:"resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,n){console.log(n),alert(n)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(a.jsx)(h,{data:this.state.resumeData.main})}}]),n}(j.Component));c.a.render(Object(a.jsx)(b,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.5784be34.chunk.js.map