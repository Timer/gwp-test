(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"+phy":function(e,a,t){"use strict";t.r(a);var r=t("wx14"),n=t("KQm4"),i=t("o0o1"),s=t.n(i),o=t("HaE+"),c=t("1OyB"),l=t("vuIU"),u=t("JX7q"),p=t("Ji7U"),m=t("md7G"),f=t("foSv"),_=t("rePB"),h=t("q1tI"),g=t.n(h),d=t("kE1S"),v=t("BIBk"),b=t("ibbH"),w=(t("YFqc"),t("8Kt/")),y=t.n(w),N=t("b0oO"),O=t("8lYe"),k=t("IZ7s"),I=t("PpWk"),j=t.n(I),x=g.a.createElement;function C(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=Object(f.a)(e);if(a){var n=Object(f.a)(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return Object(m.a)(this,t)}}var S=function(e){Object(p.a)(t,e);var a=C(t);function t(e){var r;return Object(c.a)(this,t),r=a.call(this,e),Object(_.a)(Object(u.a)(r),"_renderNoResults",(function(){return r.state.no_results?x("div",{className:j.a.noResults},x("h4",{className:"text-center"},"No published content.")):null})),Object(_.a)(Object(u.a)(r),"_renderLoadMoreClass",(function(){return 1==r.state.reached_end||r.state.whitepapers.length<4?"".concat(j.a.nav," hide"):"".concat(j.a.nav)})),r.state={whitepapers:[],working:!1,no_results:!1,reached_end:!1},r}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(s.a.mark((function e(){var a,t,r,n,i,o,c=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.user){e.next=3;break}return Router.push("/login"),e.abrupt("return",!1);case 3:return a=new d.a,this.props.user.access_token,t=this.props.user.user.ID,4,0,r=[],n=[],"",i=[],o=[],"","","relevance",e.next=18,a.fetchWhitepapers(4,0,r,n,"",i,o,"","","relevance",t);case 18:e.sent,this.setState({whitepapers:this.state.whitepapers},(function(){c.state.whitepapers.length<1&&c.setState((function(e){return{no_results:!0}}))}));case 20:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_loadMore",value:function(){var e=Object(o.a)(s.a.mark((function e(){var a,t,r,i,o,c,l,u,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({working:!0}),a=new d.a,t=this.props.user.user.ID,r=4,i=this.state.whitepapers.length,o=[],c=[],"",l=[],u=[],"","","relevance",e.next=15,a.fetchWhitepapers(r,i,o,c,"",l,u,"","","relevance",t);case 15:(p=e.sent).length<r&&this.setState({reached_end:!0}),this.setState({whitepapers:[].concat(Object(n.a)(this.state.whitepapers),Object(n.a)(p)),working:!1});case 18:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.props.display_name,t=this.props.user,n=this.state.whitepapers;return x(g.a.Fragment,null,x(y.a,null,x("title",{key:"page-title"},"My Content"),x("meta",{charset:"utf-8"}),x("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),x("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),x("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),x("meta",{name:"msapplication-TileImage",content:"/favicon-270x270.png"}),x("meta",{name:"msapplication-TileColor",content:"#ffffff"}),x("link",{rel:"manifest",href:"/site.webmanifest"})),x(N.a,Object(r.a)({},t,{display_name:a})),x("div",{className:"row ".concat(j.a.pageContent," ").concat(j.a.favorites)},x("div",{className:"small-12 medium-4 xlarge-3 columns"},x(k.a,{organization_id:this.props.organization_id,organization_email_mismatch:this.props.organization_email_mismatch,organization_email_verified:this.props.organization_email_verified})),x("div",{className:"small-12 medium-8 xlarge-9 columns ".concat(j.a.content)},x("div",{className:j.a.heading},x("h2",null,"My Content")),x("div",{className:"small-up-1 large-up-2 clearfix"},this._renderNoResults(),n.map((function(e){return x("div",{key:e.ID,className:"column column-block"},x(v.a,{hide_image:!0,id:e.ID,slug:e.slug,title:Object(b.decodeHTML)(e.title),featured_media:e.featured_media,excerpt:"",topics:e.topics,show_edit:!0}))}))),x("div",{className:this._renderLoadMoreClass()},x("button",{onClick:function(){e._loadMore()},className:"button ".concat(j.a.button)},"Load More")))),x(O.a,null))}}]),t}(g.a.Component);a.default=S},"7Kj2":function(e,a,t){e.exports={paperBlock:"whitepapercard_paperBlock__1yXt5",more:"whitepapercard_more__1HwTm",edit:"whitepapercard_edit__2GSJ2",link:"whitepapercard_link__gT1cw",image:"whitepapercard_image__eUJed",category:"whitepapercard_category__3a3HJ",content:"whitepapercard_content__2GnBi",linkArrow:"whitepapercard_linkArrow__2xwAP"}},BIBk:function(e,a,t){"use strict";var r=t("1OyB"),n=t("vuIU"),i=t("JX7q"),s=t("Ji7U"),o=t("md7G"),c=t("foSv"),l=t("rePB"),u=t("q1tI"),p=t.n(u),m=t("7Kj2"),f=t.n(m),_=t("YFqc"),h=t.n(_),g=t("nOHt"),d=t.n(g),v=p.a.createElement;function b(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=Object(c.a)(e);if(a){var n=Object(c.a)(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return Object(o.a)(this,t)}}var w=function(e){Object(s.a)(t,e);var a=b(t);function t(e){var n;return Object(r.a)(this,t),n=a.call(this,e),Object(l.a)(Object(i.a)(n),"_renderEdit",(function(){return n.props.show_edit?v(p.a.Fragment,null,v("div",{onClick:function(){d.a.push({pathname:"/edit",query:{id:n.props.id}})},className:f.a.edit},v("img",{src:"/images/edit-icon.svg",alt:""}))):null})),n}return Object(n.a)(t,[{key:"componentDidUpdate",value:function(){}},{key:"_renderImage",value:function(){return 1==this.props.hide_image?null:0==this.props.featured_media?v("img",{src:"/images/whitepaper-card.jpg"}):this.props.featured_media.sizes.hasOwnProperty("whitepaper_card")?v("img",{src:this.props.featured_media.sizes.whitepaper_card.file}):v("img",{src:this.props.featured_media.file})}},{key:"render",value:function(){return v(p.a.Fragment,null,v("div",{className:"".concat(f.a.paperBlock)},this._renderEdit(),v(h.a,{href:"/whitepapers/[whitepaper]",as:"/whitepapers/".concat(this.props.slug)},v("div",{className:f.a.image},this._renderImage())),v("div",{className:"".concat(f.a.content)},v("div",{className:f.a.category},v(h.a,{href:"/whitepapers/[whitepaper]",as:"/whitepapers/".concat(this.props.slug)},v("a",null,this.props.topics[0].name))),v(h.a,{href:"/whitepapers/[whitepaper]",as:"/whitepapers/".concat(this.props.slug)},v("a",{className:f.a.link},v("h3",null,this.props.title))),v("p",null,this.props.excerpt),v(h.a,{href:"/whitepapers/[whitepaper]",as:"/whitepapers/".concat(this.props.slug)},v("a",{className:f.a.more},"Learn More ",v("img",{className:f.a.linkArrow,src:"/images/right-arrow-blue.svg",alt:""}))))))}}]),t}(p.a.Component);a.a=w},IZ7s:function(e,a,t){"use strict";var r=t("1OyB"),n=t("vuIU"),i=t("JX7q"),s=t("Ji7U"),o=t("md7G"),c=t("foSv"),l=t("rePB"),u=t("q1tI"),p=t.n(u),m=(t("YFqc"),t("NjeN")),f=t("J31C"),_=t.n(f),h=t("p46w"),g=t.n(h),d=p.a.createElement;function v(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=Object(c.a)(e);if(a){var n=Object(c.a)(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return Object(o.a)(this,t)}}var b=function(e){Object(s.a)(t,e);var a=v(t);function t(e){var n;return Object(r.a)(this,t),n=a.call(this,e),Object(l.a)(Object(i.a)(n),"_renderOrganzationMenuLink",(function(){return 0==n.props.organization_id?null:n.props.organization_email_verified?n.props.organization_email_mismatch?null:d("li",{className:_.a.menuItem},d(m.a,{href:"/dashboard"},d("a",null,d("img",{className:_.a.menuImage,src:"/images/profile-menu-members.svg",alt:""}),d("img",{className:"".concat(_.a.menuImage," ").concat(_.a.active),src:"/images/profile-menu-members-active.svg",alt:""}),d("span",null,"My Organization")))):null})),n.state={},n}return Object(n.a)(t,[{key:"componentDidUpdate",value:function(){}},{key:"_logOut",value:function(){event.preventDefault(),setTimeout((function(e){g.a.remove("user"),window.location.href="/"}),750)}},{key:"render",value:function(){return d(p.a.Fragment,null,d("div",{className:_.a.wrap},d("h3",null,"Dashboard"),d("ul",{id:"profile-menu",className:"vertical menu ".concat(_.a.menu," clearfix")},d("li",{className:_.a.menuItem},d(m.a,{href:"/profile"},d("a",null,d("img",{className:_.a.menuImage,src:"/images/profile-menu-profile.svg",alt:""}),d("img",{className:"".concat(_.a.menuImage," ").concat(_.a.active),src:"/images/profile-menu-profile-active.svg",alt:""}),d("span",null,"Profile")))),d("li",{className:_.a.menuItem},d(m.a,{href:"/favorites"},d("a",null,d("img",{className:_.a.menuImage,src:"/images/profile-menu-favorites.svg",alt:""}),d("img",{className:"".concat(_.a.menuImage," ").concat(_.a.active),src:"/images/profile-menu-favorites-active.svg",alt:""}),d("span",null,"Favorites")))),d("li",{className:_.a.menuItem},d(m.a,{href:"/saved-searches"},d("a",null,d("img",{className:_.a.menuImage,src:"/images/profile-menu-saved-searches.svg",alt:""}),d("img",{className:"".concat(_.a.menuImage," ").concat(_.a.active),src:"/images/profile-menu-saved-searches-active.svg",alt:""}),d("span",null,"Saved Searches")))),d("li",{className:_.a.menuItem},d(m.a,{href:"/promote"},d("a",null,d("img",{className:_.a.menuImage,src:"/images/profile-menu-upgrade.svg",alt:""}),d("img",{className:"".concat(_.a.menuImage," ").concat(_.a.active),src:"/images/profile-menu-upgrade-active.svg",alt:""}),d("span",null,"Promote")))),d("li",{className:_.a.menuItem},d(m.a,{href:"/contact"},d("a",null,d("img",{className:_.a.menuImage,src:"/images/profile-menu-contact.svg",alt:""}),d("img",{className:"".concat(_.a.menuImage," ").concat(_.a.active),src:"/images/profile-menu-contact-active.svg",alt:""}),d("span",null,"Contact")))),d("li",{className:_.a.menuItem},d(m.a,{href:"/settings"},d("a",null,d("img",{className:_.a.menuImage,src:"/images/profile-menu-settings.svg",alt:""}),d("img",{className:"".concat(_.a.menuImage," ").concat(_.a.active),src:"/images/profile-menu-settings-active.svg",alt:""}),d("span",null,"Settings")))),d("li",{className:_.a.menuItem},d(m.a,{href:"/my-content"},d("a",null,d("img",{className:_.a.menuImage,src:"/images/profile-menu-dashboard.svg",alt:""}),d("img",{className:"".concat(_.a.menuImage," ").concat(_.a.active),src:"/images/profile-menu-dashboard-active.svg",alt:""}),d("span",null,"My Content")))),this._renderOrganzationMenuLink(),d("li",{className:"".concat(_.a.menuItem," ").concat(_.a.logout)},d("a",{onClick:this._logOut},d("img",{className:_.a.menuImage,src:"/images/log-out-profile-menu.svg",alt:""}),d("span",null,"Log Out"))))))}}]),t}(p.a.Component);a.a=b},KQm4:function(e,a,t){"use strict";function r(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,r=new Array(a);t<a;t++)r[t]=e[t];return r}function n(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,a){if(e){if("string"===typeof e)return r(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,a):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(a,"a",(function(){return n}))},PpWk:function(e,a,t){e.exports={hr:"profile_hr__ItpPm",pageHeader:"profile_pageHeader__3sOaj",avatar:"profile_avatar__2odoM",defaultAvatar:"profile_defaultAvatar__2F7Xw",user:"profile_user__3CBHL",editPhoto:"profile_editPhoto__1K_yS",profileAvatar:"profile_profileAvatar__1Nc_u",pageContent:"profile_pageContent__2eFMN",systemEmails:"profile_systemEmails__1l-6_",label:"profile_label__16DmK",checkmark:"profile_checkmark__3qXzl",controls:"profile_controls__gUm1N",active:"profile_active__3Dn09",icon:"profile_icon__1n6zH",tabs:"profile_tabs__2AagV",tab:"profile_tab__3Y0fx",open:"profile_open__15RR6",heading:"profile_heading__1niQL",favorites:"profile_favorites__3ll02",settings:"profile_settings__1IeiW",text:"profile_text__QAH3H",image:"profile_image__2dumZ",form:"profile_form__pFC7X",errorText:"profile_errorText__2Z1o3",subLabel:"profile_subLabel__OLywE",dot:"profile_dot__3r3Co",save:"profile_save__BKwA4",contact:"profile_contact__29OME",button:"profile_button__3HctD",nav:"profile_nav__2p_r0",userHeader:"profile_userHeader__3rJdD",titleHeading:"profile_titleHeading__99n4-",userContainer:"profile_userContainer__2dKJX",userList:"profile_userList__28D5V"}},Xu4W:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my-content",function(){return t("+phy")}])}},[["Xu4W",0,2,1,3,4,5,6]]]);