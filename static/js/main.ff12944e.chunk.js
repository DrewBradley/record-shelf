(this["webpackJsonprecord-shelf"]=this["webpackJsonprecord-shelf"]||[]).push([[0],{12:function(e,t,r){},14:function(e,t,r){},15:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var n=r(1),s=r.n(n),c=r(3),i=r.n(c),a=(r(12),r(4)),o=r(5),l=r(7),u=r(6),h=r(0),d=function(e){return Object(h.jsx)("div",{onClick:function(){return e.showDeets(e.link,e.img)},className:"record",children:Object(h.jsx)("div",{className:"background",style:{backgroundImage:'url("'.concat(e.img,'")'),backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:Object(h.jsxs)("div",{className:"album-info",children:[Object(h.jsx)("h1",{children:e.title}),Object(h.jsxs)("h2",{children:["by ",e.artist]})]})})})},j=(r(14),function(e){var t=e.nextPage,r=e.prevPage;return Object(h.jsxs)("div",{className:"navbar",children:[Object(h.jsx)("button",{onClick:function(){return r()},children:"Previous Page"}),Object(h.jsx)("button",{onClick:function(){return t()},children:"Next Page"})]})}),b=(r(15),function(e){var t=e.nextPage,r=e.prevPage;return Object(h.jsxs)("section",{className:"header-section",children:[Object(h.jsx)("header",{className:"header-title",children:"My Record Shelf"}),Object(h.jsx)(j,{nextPage:t,prevPage:r})]})}),g=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.call(this)).getNextPage=function(){e.getRecords(e.state.urlNext)},e.getPrevPage=function(){e.getRecords(e.state.urlPrev)},e.getAlbumDeets=function(t,r){fetch(t).then((function(e){return e.json()})).then((function(t){return e.displayDeets(t,r)}))},e.displayDeets=function(t,r){var n=t.tracklist.map((function(e){return e.title}));e.setState({showDeets:!0,currentAlbum:{image:r,artist:t.artists[0].name,title:t.title,tracks:n}})},e.hideDeets=function(){e.setState({showDeets:!1})},e.state={page:1,url:"https://api.discogs.com/users/DrewBradley/collection/folders/0/releases?key=XCoBKpyLqjFhJXxBfsqM&secret=ANrZFtLrARjnFXzMRHdQcpEpJPvErVfn",urlNext:"",urlPrev:"",error:"",recordCollection:[],currentAlbum:"",showDeets:!1},e}return Object(o.a)(r,[{key:"componentDidMount",value:function(){this.getRecords(this.state.url)}},{key:"getRecords",value:function(e){var t=this;fetch(e).then((function(e){return e.json()})).then((function(e){return t.setState({recordCollection:e.releases,urlNext:e.pagination.urls.next,urlPrev:e.pagination.urls.prev,error:null})})).catch((function(e){return t.setState({error:"No more pages!"})}))}},{key:"render",value:function(){var e=this,t=this.state.recordCollection.map((function(t){return Object(h.jsx)(d,{showDeets:e.getAlbumDeets,img:t.basic_information.cover_image,link:t.basic_information.resource_url,artist:t.basic_information.artists[0].name,title:t.basic_information.title},t.id)}));return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(b,{nextPage:this.getNextPage,prevPage:this.getPrevPage}),!this.state.recordCollection.length&&Object(h.jsx)("h1",{className:"loading",children:"LOADING..."}),this.state.showDeets&&Object(h.jsxs)("div",{className:"record-prev",onClick:this.hideDeets,children:[Object(h.jsx)("h1",{children:this.state.currentAlbum.artist}),Object(h.jsx)("h1",{children:this.state.currentAlbum.title}),Object(h.jsx)("img",{src:this.state.currentAlbum.image}),Object(h.jsx)("div",{children:this.state.currentAlbum.tracks.map((function(e){return Object(h.jsx)("p",{children:e})}))})]}),Object(h.jsx)("div",{className:"record-grid",children:t}),this.state.error&&Object(h.jsx)("h1",{onClick:this.getRecords(this.state.url),className:"error",children:this.state.error})]})}}]),r}(s.a.Component),f=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,17)).then((function(t){var r=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;r(e),n(e),s(e),c(e),i(e)}))};i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.ff12944e.chunk.js.map