(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"02LX":function(e,t,a){e.exports={wrap:"teammodal_wrap__3xQOA",open:"teammodal_open__1XJHa",body:"teammodal_body__1b6o_",avatar:"teammodal_avatar__1GOqa",header:"teammodal_header__1IuMi",close:"teammodal_close__b6eWP",hr:"teammodal_hr__3T6O_",login:"teammodal_login__2sOr5",flex:"teammodal_flex__AhzwH",button:"teammodal_button__3Npzy",form:"teammodal_form__3hz06",signin:"teammodal_signin__KDcaG",forgot:"teammodal_forgot__nTInT",sep:"teammodal_sep__2OK3c",socialBlock:"teammodal_socialBlock__3IRC4",signUp:"teammodal_signUp__3sgVp",description:"teammodal_description__znfs5",funFact:"teammodal_funFact__3u_sQ"}},W3Qp:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a("YFqc");var n=a("q1tI"),o=a.n(n),r=(o.a.createElement,function(e){var t=e.type,a=e.className,n=e.html;return o.a.createElement(null!==t&&void 0!==t?t:"div",{className:a,dangerouslySetInnerHTML:{__html:n}})})},YykV:function(e,t,a){"use strict";a.r(t),a.d(t,"__N_SSG",(function(){return R}));var n=a("wx14"),o=a("o0o1"),r=a.n(o),c=a("HaE+"),i=a("1OyB"),s=a("vuIU"),l=a("JX7q"),m=a("Ji7U"),u=a("md7G"),p=a("foSv"),d=a("rePB"),_=a("q1tI"),f=a.n(_),h=a("8Kt/"),g=a.n(h),v=a("ibbH"),b=(a("vcXL"),a("YFqc")),y=a.n(b),O=a("b0oO"),w=a("hWId"),k=a.n(w),j=a("mGB0"),N=f.a.createElement;function L(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(p.a)(e);if(t){var o=Object(p.a)(this).constructor;a=Reflect.construct(n,arguments,o)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var x=function(e){Object(m.a)(a,e);var t=L(a);function a(e){var n;return Object(i.a)(this,a),n=t.call(this,e),Object(d.a)(Object(l.a)(n),"_handleEscape",(function(e){27==e.which&&n._toggleModal()})),Object(d.a)(Object(l.a)(n),"_handleClick",(function(e){console.log(e),console.log("click"),e.preventDefault(),e.target.hasAttribute("data-close-modal")&&n._toggleModal()})),Object(d.a)(Object(l.a)(n),"_modalShowClass",(function(){return n.state.modal_open})),Object(d.a)(Object(l.a)(n),"_toggleModal",(function(){n.setState((function(e){return{modal_open:!e.modal_open}}))})),n.state={modal_open:!1},n}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(){var e=this.state.modal_open,t=document.querySelector("html");e?(window.addEventListener("keydown",this._handleEscape),window.addEventListener("click",this._handleClick),t.classList.add("active-modal"),t.classList.add("team")):(window.removeEventListener("keydown",this._handleEscape),window.removeEventListener("click",this._handleClick),t.classList.remove("active-modal"),t.classList.remove("team"))}},{key:"_renderProfileImage",value:function(){return!1!==this.props.featured_media?this.props.featured_media.sizes.hasOwnProperty("square")?N("img",{src:this.props.featured_media.sizes.square.file,className:k.a.avatar,alt:""}):N("img",{src:this.props.featured_media.file,className:k.a.avatar,alt:""}):N("img",{src:"/images/team-default.jpg",className:k.a.avatar,alt:""})}},{key:"render",value:function(){var e=this;return N(f.a.Fragment,null,N("div",{className:"teamBlockJS ".concat(k.a.teamBlock)},N("a",{onClick:function(){e._toggleModal()}},this._renderProfileImage()),N("h6",null,this.props.position),N("a",{className:k.a.name,onClick:function(){e._toggleModal()}},N("h3",null,this.props.title)),N("p",{className:"match-height"},this.props.excerpt),N("a",{onClick:function(){e._toggleModal()},className:k.a.more},"Read more ",N("img",{className:k.a.linkArrow,src:"/images/right-arrow-blue.svg",alt:""}))),N(j.a,{modal_open:this.state.modal_open,blur:this.state.modal_open,title:this.props.title,position:this.props.position,content:this.props.content,toggle:function(){return e._toggleModal()},description:this.props.description,fun_fact:this.props.fun_fact,featured_media:this.props.featured_media}))}}]),a}(f.a.Component),M=a("8lYe"),T=a("xJsz"),H=a.n(T),C=f.a.createElement;function I(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(p.a)(e);if(t){var o=Object(p.a)(this).constructor;a=Reflect.construct(n,arguments,o)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var E=function(e){Object(m.a)(a,e);var t=I(a);function a(e){var n;return Object(i.a)(this,a),n=t.call(this,e),Object(d.a)(Object(l.a)(n),"modalShowClass",(function(){return!0})),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.props.user;case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.display_name,t=this.props.user,a=this.props.page,o=this.props.team,r=Object(v.decodeHTML)(a.seo_title),c=Object(v.decodeHTML)(a.open_graph_title),i=Object(v.decodeHTML)(a.twitter_title),s=Object(v.decodeHTML)(a.seo_desc),l=Object(v.decodeHTML)(a.open_graph_desc),m=Object(v.decodeHTML)(a.twitter_desc),u=Object(v.decodeHTML)(a.open_graph_image_url),p=Object(v.decodeHTML)(a.twitter_image_url);return C(f.a.Fragment,null,C(g.a,null,C("title",{key:"page-title"},r),C("meta",{charset:"utf-8"}),C("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),C("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),C("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),C("meta",{name:"msapplication-TileImage",content:"/favicon-270x270.png"}),C("meta",{name:"msapplication-TileColor",content:"#ffffff"}),C("link",{rel:"manifest",href:"/site.webmanifest"}),C("meta",{property:"og:title",content:r,key:"og-title"}),C("meta",{name:"description",content:s,key:"description"}),C("meta",{property:"og:locale",content:"en_US",key:"og-locale"}),C("meta",{property:"og:title",content:c,key:"og-title"}),C("meta",{property:"og:description",content:l,key:"og-description"}),C("meta",{property:"og:url",content:a.permalink,key:"og-url"}),C("meta",{property:"og:site_name",content:"GovWhitePapers"}),C("meta",{property:"og:image",content:u,key:"og-image"}),C("meta",{property:"og:image:secure_url",content:u,key:"og-image-secure"}),C("meta",{name:"twitter:card",content:"summary_large_image",key:"twitter-card"}),C("meta",{name:"twitter:description",content:m,key:"twitter-description"}),C("meta",{name:"twitter:title",content:i,key:"twitter-title"}),C("meta",{name:"twitter:site",content:"@GovEventsGroup",key:"twitter-site"}),C("meta",{name:"twitter:image",content:p,key:"twitter-image"}),C("meta",{name:"twitter:creator",content:"@GovEventsGroup",key:"twitter-creator"})),C(O.a,Object(n.a)({},t,{display_name:e})),C("div",{className:"row ".concat(H.a.pageHeader," text-center")},C("div",{className:"small-12 columns"},C("h1",null,"Our Team"),C("img",{className:H.a.hr,src:"/images/sep.svg",alt:""}),C("p",null,"The GovWhitePapers team is committed to creating an online space for the government community to come together, share, and collaborate. We admire the dedication of the government community to fulfilling agency missions and are thankful to be able to facilitate the learning and communication that leads to innovative solutions."))),C("div",{className:"row small-up-1 medium-up-2 large-up-3 teamRow"},o.map((function(e){return C("div",{key:e.ID,className:"column column-block"},C(x,{id:e.ID,slug:e.slug,position:Object(v.decodeHTML)(e.position),title:Object(v.decodeHTML)(e.title),featured_media:e.featured_media,content:Object(v.decodeHTML)(e.content),excerpt:Object(v.decodeHTML)(e.excerpt),description:Object(v.decodeHTML)(e.description),fun_fact:Object(v.decodeHTML)(e.fun_fact)}))}))),C("div",{className:"".concat(H.a.contact)},C("div",{className:"row"},C("div",{className:"small-12 columns text-center"},C("h2",null,"Get in Touch"),C("img",{className:H.a.hr,src:"/images/sep.svg",alt:""}),C("p",null,"Drop us a line and a member of our team will be in touch to answer any questions you may have."),C(y.a,{href:"/contact"},C("a",{className:"button ".concat(H.a.button)},"Contact Us"))))),C(M.a,null))}}]),a}(f.a.Component),R=!0;t.default=E},hWId:function(e,t,a){e.exports={teamBlock:"teamcard_teamBlock__2KuZh",more:"teamcard_more__2W69J",name:"teamcard_name__3ckbl",avatar:"teamcard_avatar__12I-3",linkArrow:"teamcard_linkArrow__kOwzd"}},mGB0:function(e,t,a){"use strict";var n=a("1OyB"),o=a("vuIU"),r=a("JX7q"),c=a("Ji7U"),i=a("md7G"),s=a("foSv"),l=a("rePB"),m=a("q1tI"),u=a.n(m),p=a("02LX"),d=a.n(p),_=(a("YFqc"),a("ibbH"),a("W3Qp")),f=u.a.createElement;function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(s.a)(e);if(t){var o=Object(s.a)(this).constructor;a=Reflect.construct(n,arguments,o)}else a=n.apply(this,arguments);return Object(i.a)(this,a)}}var g=function(e){Object(c.a)(a,e);var t=h(a);function a(e){var o;return Object(n.a)(this,a),o=t.call(this,e),Object(l.a)(Object(r.a)(o),"_handleEscape",(function(e){27==e.which&&o.props.toggle()})),Object(l.a)(Object(r.a)(o),"_handleClick",(function(e){e.preventDefault(),e.target.hasAttribute("data-close-modal")&&o.props.toggle()})),Object(l.a)(Object(r.a)(o),"_renderModalClass",(function(){return o.props.modal_open?"".concat(d.a.wrap," ").concat(d.a.open):"".concat(d.a.wrap)})),Object(l.a)(Object(r.a)(o),"_renderDescription",(function(){return o.props.description?f("div",{className:d.a.description},f("h4",null,"My team describes me as..."),f(_.a,{html:o.props.description})):null})),Object(l.a)(Object(r.a)(o),"_renderFunFact",(function(){return o.props.fun_fact?f("div",{className:d.a.funFact},f("h4",null,"Fun Fact"),f(_.a,{html:o.props.fun_fact})):null})),o}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(){console.log(this.props)}},{key:"_renderProfileImage",value:function(){return!1!==this.props.featured_media?this.props.featured_media.sizes.hasOwnProperty("square")?f("img",{src:this.props.featured_media.sizes.square.file,className:d.a.avatar,alt:""}):f("img",{src:this.props.featured_media.file,className:d.a.avatar,alt:""}):f("img",{src:"/images/team-default.jpg",className:d.a.avatar,alt:""})}},{key:"render",value:function(){var e=this;return f(u.a.Fragment,null,f("div",{className:this._renderModalClass()},f("div",{className:"clearfix ".concat(d.a.header)},f("div",{className:"small-12 columns text-right"},f("button",{className:d.a.close,onClick:function(t){e.props.toggle()}},f("img",{src:"/images/close.svg",alt:""}))),f("div",{className:"clearfix ".concat(d.a.body)},f("div",{className:"small-12 columns"},this._renderProfileImage(),f("h6",null,this.props.position),f("h3",null,this.props.seo_title),f("div",{className:"bio"},f(_.a,{html:this.props.content}),this._renderDescription(),this._renderFunFact()))))))}}]),a}(u.a.Component);t.a=g},uBm1:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/team",function(){return a("YykV")}])},xJsz:function(e,t,a){e.exports={hr:"team_hr__595_z",pageHeader:"team_pageHeader__2jLXh",contact:"team_contact__3CL2i",button:"team_button__13g6N",heading:"team_heading__2LHGb"}}},[["uBm1",0,2,1,3,4,5,9]]]);