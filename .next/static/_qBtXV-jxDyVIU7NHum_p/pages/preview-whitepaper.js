(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"0a6/":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/preview-whitepaper",function(){return a("G1Za")}])},"3yA0":function(e,t,a){e.exports={pageContent:"previewwhitepaper_pageContent__3M4C3",publishAction:"previewwhitepaper_publishAction__1JyMt",editButton:"previewwhitepaper_editButton__1huCr",publishButton:"previewwhitepaper_publishButton__28t7M",userBlock:"previewwhitepaper_userBlock__3dSV9",content:"previewwhitepaper_content__1VsJz",button:"previewwhitepaper_button__3LyN2",hr:"previewwhitepaper_hr__GVSfC",heading:"previewwhitepaper_heading__1u-Ny",gradient:"previewwhitepaper_gradient__ZLBAu",preview:"previewwhitepaper_preview__EIjZx",authors:"previewwhitepaper_authors__t0_H0",label:"previewwhitepaper_label__1O7UW",download:"previewwhitepaper_download__UyqH2",image:"previewwhitepaper_image__2uXFo",like:"previewwhitepaper_like__3mM0N",downloadButton:"previewwhitepaper_downloadButton__1A4h6",claim:"previewwhitepaper_claim__cLnem",contact:"previewwhitepaper_contact__3jlFy",info:"previewwhitepaper_info__1Olk5"}},G1Za:function(e,t,a){"use strict";a.r(t);var n=a("wx14"),i=a("o0o1"),o=a.n(i),r=a("HaE+"),c=a("1OyB"),s=a("vuIU"),l=a("JX7q"),p=a("Ji7U"),u=a("md7G"),d=a("foSv"),m=a("rePB"),h=a("ibbH"),_=a("8Kt/"),g=a.n(_),w=a("W3Qp"),f=a("nOHt"),b=a.n(f),v=a("q1tI"),y=a.n(v),k=a("kE1S"),O=a("YFqc"),j=a.n(O),N=a("b0oO"),C=a("K0ya"),x=a("8lYe"),M=a("FYmi"),T=a("Gn3O"),S=a("3yA0"),B=a.n(S),I=y.a.createElement;function L(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(d.a)(e);if(t){var i=Object(d.a)(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return Object(u.a)(this,a)}}var H=function(e){Object(p.a)(a,e);var t=L(a);function a(e){var n;return Object(c.a)(this,a),n=t.call(this,e),Object(m.a)(Object(l.a)(n),"_toggleModal",(function(){n.setState((function(e){return{contact_publisher_open:!e.contact_publisher_open}}))})),Object(m.a)(Object(l.a)(n),"_toggleClaimModal",(function(){n.setState((function(e){return{claim_content_open:!e.claim_content_open}}))})),Object(m.a)(Object(l.a)(n),"_handleEdit",(function(){b.a.push({pathname:"/edit",query:{id:n.props.data.id}})})),Object(m.a)(Object(l.a)(n),"_handlePublish",(function(){var e,t,a;event.preventDefault(),e=document.querySelector(".js-publish"),t=Object(l.a)(n);var i=n.props.user.access_token;if(!i)return!1;a=JSON.stringify({ID:n.props.data.ID,access_token:i}),e.disabled=!0,t.setState({working:!0}),fetch("https://gwpadmin.codewrangler.io/api/gwp/v1/publish-whitepaper",{method:"post",body:a,headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(a){setTimeout((function(n){if(e.disabled=!1,JSON.stringify(a).includes("error"))return t.setState({error:a.message,working:!1}),!1;b.a.push("/thank-you")}),1e3)}))})),Object(m.a)(Object(l.a)(n),"_renderUserBlock",(function(){return n.props.user?I("div",null):I(y.a.Fragment,null,I("div",{className:B.a.userBlock},I("div",{className:B.a.gradient}),I("div",{className:B.a.content},I("div",{className:"row"},I("div",{className:"small-12 columns text-center"},I("h2",null,"Join or Log In to Read More"),I("img",{className:B.a.hr,src:"/images/sep.svg",alt:""}),I("p",null,"Create your free account or log in to continue reading."),I(j.a,{href:"/register"},I("a",{className:"button ".concat(B.a.button)},"Sign Up")))))))})),Object(m.a)(Object(l.a)(n),"_downloadWhitepaper",(function(e){if(e.preventDefault(),void 0!=n.props.user){var t=n.props,a=e.target,i=Object(l.a)(n);a.disabled=!0,i.setState({working:!0}),setTimeout((function(){var e=t.data.slug,n=(t.data.ID,t.data.file_url),o=t.data.content_link,r=window.document.createElement("a");window.document.body.appendChild(r),"external"==t.data.type?r.setAttribute("href",o):(r.setAttribute("href",n),r.setAttribute("download",e)),r.setAttribute("target","_blank"),r.click(),window.document.body.removeChild(r),a.disabled=!1,i.setState({working:!1})}),1e3)}})),Object(m.a)(Object(l.a)(n),"_likePaper",(function(){if(void 0!=n.props.user){var e;n.setState((function(e){return{is_favorite:!e.is_favorite}}));var t=n.props.data.ID,a=n.props.user.access_token;if(!a)return!1;"https://gwpadmin.codewrangler.io/api/gwp/v1/favorite-whitepaper",e=JSON.stringify({ID:t,access_token:a}),fetch("https://gwpadmin.codewrangler.io/api/gwp/v1/favorite-whitepaper",{method:"post",body:e,headers:{"Content-Type":"application/json"}}).then((function(e){return console.log(e),e.json()})).then((function(e){console.log(e)}))}})),Object(m.a)(Object(l.a)(n),"_renderClaimButton",(function(){var e=n.props.data,t=!!n.props.user&&n.props.user.user.ID;return e.user_id==t?null:I("button",{onClick:function(){return n._toggleClaimModal()},className:"button ".concat(B.a.claim)},"Is this your content?")})),n.state={contact_publisher_open:!1,claim_content_open:!1,working:!1,is_favorite:!1,show_content:!1},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(r.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.data,document.querySelector("html"),(a=this.props.user)||b.a.push("/login"),a.user.id!=t.user_id?b.a.push("/"):this.setState((function(e){return{show_content:!0}}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=this.state.working,t=document.querySelector("html");e?t.classList.add("working"):t.classList.remove("working")}},{key:"_renderImage",value:function(){return 0==this.props.data.featured_media?I("img",{src:"/images/blog-card.jpg"}):this.props.data.featured_media.sizes.hasOwnProperty("blog_card")?I("img",{src:this.props.data.featured_media.sizes.blog_card.file}):I("img",{src:this.props.data.featured_media.file})}},{key:"_renderInfoTable",value:function(){var e=this.props.data;return I("table",{className:"stack ".concat(B.a.info)},I("tbody",null,I("tr",null,I("td",{className:B.a.label},"Topics:"),I("td",null,I("ul",null,this.props.data.topics.map((function(e,t){return I("li",{key:t},I("a",null,e.name))}))))),I("tr",null,I("td",{className:B.a.label},"Tags:"),I("td",null,I("ul",null,this.props.data.tags.map((function(e,t){return I("li",{key:t},I("a",null,e.name))}))))),I("tr",null,I("td",{className:B.a.label},"Website:"),I("td",null,I("a",{href:"https://govwhitepapers.com"},"https://govwhitepapers.com"))),I("tr",null,I("td",{className:B.a.label},"Date:"),I("td",null,e.publication_date_display)),I("tr",null,I("td",{className:B.a.label},"Copyright:"),I("td",null,"\xa9 ",e.copyright_notice))))}},{key:"render",value:function(){var e,t=this,a=this.props.data,i=this.props.user,o=(a.authors.authors,this.props.display_name),r=Object(h.decodeHTML)(a.title),c=Object(h.decodeHTML)(a.description),s=Object(h.decodeHTML)(a.seo_title),l=Object(h.decodeHTML)(a.open_graph_title),p=Object(h.decodeHTML)(a.twitter_title),u=Object(h.decodeHTML)(a.seo_desc),d=Object(h.decodeHTML)(a.open_graph_desc),m=Object(h.decodeHTML)(a.twitter_desc),_=Object(h.decodeHTML)(a.open_graph_image_url),f=Object(h.decodeHTML)(a.twitter_image_url);return e=1==this.state.is_favorite?I("img",{src:"/images/liked.png",alt:""}):I("img",{src:"/images/like.svg",alt:""}),this.state.show_content?I(y.a.Fragment,null,I(g.a,null,I("title",{key:"whitepaper-title"},s),I("meta",{charset:"utf-8"}),I("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),I("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),I("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),I("meta",{name:"msapplication-TileImage",content:"/favicon-270x270.png"}),I("meta",{name:"msapplication-TileColor",content:"#ffffff"}),I("link",{rel:"manifest",href:"/site.webmanifest"}),I("meta",{property:"og:title",content:s,key:"og-title"}),I("meta",{name:"description",content:u,key:"description"}),I("meta",{property:"og:locale",content:"en_US",key:"og-locale"}),I("meta",{property:"og:title",content:l,key:"og-title"}),I("meta",{property:"og:description",content:d,key:"og-description"}),I("meta",{property:"og:url",content:this.props.data.permalink,key:"og-url"}),I("meta",{property:"og:site_name",content:"GovWhitePapers"}),I("meta",{property:"og:image",content:_,key:"og-image"}),I("meta",{property:"og:image:secure_url",content:_,key:"og-image-secure"}),I("meta",{name:"twitter:card",content:"summary_large_image",key:"twitter-card"}),I("meta",{name:"twitter:description",content:m,key:"twitter-description"}),I("meta",{name:"twitter:title",content:p,key:"twitter-title"}),I("meta",{name:"twitter:site",content:"@GovEventsGroup",key:"twitter-site"}),I("meta",{name:"twitter:image",content:f,key:"twitter-image"}),I("meta",{name:"twitter:creator",content:"@GovEventsGroup",key:"twitter-creator"})),I(N.a,Object(n.a)({},i,{display_name:o})),I("div",{className:"".concat(B.a.pageContent)},this._renderUserBlock(),I("div",{className:"row ".concat(B.a.breadcrumbRow)},I("div",{className:"small-12 columns text-center"},I(C.a,{base_path:"/post",base_name:"Post your content",name:"Preview"}))),I("div",{className:"small-12 columns text-center"},I("div",{className:B.a.publishAction},I("button",{onClick:function(){t._handleEdit()},className:"button ".concat(B.a.editButton)},"Edit"),I("button",{onClick:function(){t._handlePublish()},className:"js-publish button ".concat(B.a.publishButton)},"Publish"))),I("div",{className:"row ".concat(B.a.content)},I("div",{className:"small-12 medium-7 xxlarge-8 columns"},I("div",{className:"".concat(B.a.preview)},I("h1",null,r),I("ul",{className:B.a.authors},I("li",{className:B.a.label},"Author(s):"),a.authors.map((function(e,t){return I("li",{key:t},e)}))),I(w.a,{html:c}))),I("div",{className:"small-12 medium-5 xxlarge-4 columns"},I("div",{className:"".concat(B.a.download)},I("div",{className:"".concat(B.a.image)},this._renderImage()),I("button",{onClick:function(e){t._downloadWhitepaper(e)},className:"button ".concat(B.a.downloadButton)},I("img",{src:"/images/download-icon.png"}),"Download"),I("button",{onClick:function(){t._likePaper()},className:"clearfix button ".concat(B.a.like)},e),this._renderInfoTable(),this._renderClaimButton(),I("button",{onClick:function(){return t._toggleModal()},className:"button ".concat(B.a.contact)},"Contact Publisher"))),I(M.a,{open:this.state.contact_publisher_open,toggle:function(){return t._toggleModal()},whitepaper_id:a.id}),I(T.a,{open:this.state.claim_content_open,toggle:function(){return t._toggleClaimModal()},whitepaper_id:a.id,whitepaper_title:a.title}))),I(x.a,null)):null}}],[{key:"getInitialProps",value:function(){var e=Object(r.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new k.a,e.next=3,a.fetchWhitepaper(t.query.id);case 3:return n=e.sent,e.abrupt("return",{data:n});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),a}(y.a.Component);t.default=Object(f.withRouter)(H)}},[["0a6/",0,2,1,3,4,5,11,10]]]);